
# A simple getting started project for building a dynamic plugins containing a theme for Red Hat Developer Hub

## Overview

> Note: The Dynamic Plugin functionality is a tech preview feature of Red Hat Developer Hub and is still under active development.  Aspects of developing, packaging and deployment of dynamic plugins are subject to change

## Prerequisites

* node 20.x (node 18 may work fine also but untested)
* npm (10.8.1 was used during development)
* yarn (at least 3.8.1 is required)

The commands used for deployment were developed with the bash shell in mind on Linux, some steps may require adjustment when trying this on a Windows environment.  This guide will try and highlight these cases, though probably WSL would work also (but hasn't been tested).

## The Guide

To build the theme plugin and prepare it for deployment run the following commands:

```bash
yarn install
```

```bash
yarn tsc && yarn build:all
```

```bash
yarn export-dynamic
```

### Phase 4 - Dynamic Plugin Deployment

> Note: The Dynamic Plugin feature in Developer Hub is still under active development.  Features regarding plugin deployment are still being defined and developed.  The method shown here is one method that doesn't involve using an NPM registry to host plugin static assets.

Deploying a dynamic plugin to Developer Hub involves exporting a special build of the plugin and packing it into a `.tar.gz` file.  Once the dynamic plugins are exported as `.tar.gz` to a directory, that directory will be used to create an image, which will then be served by an `httpd` instance in OCP.  Deployment in Developer Hub is still in a technical preview phase, so there's not much tooling to help.  Some scripts mentioned in the last phase have been added to this repo to hopefully make this process straightforward.

#### Deployment Step 1

Create a directory to put the `.tar.gz` files into called `deploy` and add a `.gitkeep` file to it.  Update the `.gitignore` file as well to ignore `.tar.gz` files:

```text
deploy/*.tgz
```

#### Deployment Step 2

Make sure to build everything at this point, often it's easiest to run a chain of commands from the root of the repo like:

```text
yarn install && yarn run tsc && yarn run build:all && yarn run export-dynamic
```

And then use the `01-stage-dynamic-plugins.sh` script to pack the plugins into `.tar.gz` files and display their integrity hashes:

```bash
bash ./01-stage-dynamic-plugins.sh
```

The output should look kind of like:

```text
Packaging up plugin static assets

Theme plugin integrity Hash: sha512-77VQlaXb6VOLzgypRsTDW5Hv9yr4NTTaZSYnKaY9sNx89JMgqEqPqpot0SyUe5Bjb4BQ1d/Y7j/itCAaYFxjXg==

Plugin .tgz files:
total 596
-rw-r--r--. 1 gashcrumb gashcrumb 607664 Aug 28 14:04 internal-backstage-plugin-test-backstage-theme-dynamic-0.1.0.tgz
```

Make note of or copy the integrity hashes, as these will be needed later when configuring Developer Hub on OpenShift.

#### Deployment Step 3

Now that the files are ready to deploy a new build can be created on OpenShift.  Make sure to use `oc project` to first switch the the same project that Developer Hub is running in.  Use the `02-create-plugin-registry.sh` script to create the build, start it and then start a new app using the built image stream:

```bash
bash ./02-create-plugin-registry.sh
```

Once the script is complete, have a look in the OpenShift console Topology view and there should be a new app running called "plugin-registry".  

#### Deployment Step 4

Create a custom configuration for Developer Hub called `app-config-rhdh` by creating a new `ConfigMap` with the following contents, however update the `baseUrl` and `origin` settings shown as needed:

> IT IS INCREDIBLY IMPORTANT THAT THE URLS IN THIS CONFIGURATION ARE CORRECT!!!

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: app-config-rhdh
data:
  app-config-rhdh.yaml: |-

    app:
      title: Red Hat Developer Hub - Getting Started
      # Be sure to use the correct url here, the URL given is an example
      baseUrl: https://backstage-developer-hub-example.apps-crc.testing
    backend:
      baseUrl: https://backstage-developer-hub-example.apps-crc.testing
      cors:
        origin: https://backstage-developer-hub-example.apps-crc.testing

    auth:
      environment: development
      providers:
        guest:
          dangerouslyAllowOutsideDevelopment: true
    dynamicPlugins:
      frontend:
        internal.backstage-plugin-test-backstage-theme:
          appIcons:
            - name: lightIcon
              importName: LightIcon
            - name: darkIcon
              importName: DarkIcon
          themes:
            - id: light  # Using 'light' overrides the app-provided light theme
              title: Test Light Theme
              variant: light
              icon: lightIcon
              importName: lightThemeProvider
            - id: dark  # Using 'dark' overrides the app-provided dark theme
              title: Test Dark Theme
              variant: dark
              icon: darkIcon
              importName: darkThemeProvider
```

#### Deployment Step 5

Create a custom dynamic plugin configuration for Developer Hub called `dynamic-plugins-rhdh` by creating another `ConfigMap` with the following contents, however be sure to update the integrity hashes to match the ones printed out by the `01-stage-dynamic-plugins.sh` script:

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: dynamic-plugins-rhdh
data:
  dynamic-plugins.yaml: |
    includes:
      - dynamic-plugins.default.yaml
    plugins:
      - package: 'http://plugin-registry:8080/internal-backstage-plugin-test-backstage-theme-dynamic-0.1.0.tgz'
        disabled: false
        integrity: 'sha512-mwHcJV0Gx6+GHuvqxpJsw9Gzn/8H5AjoGQ2DlMY4ntntAhdpFr/o5IZO5bOri41R14ocDg3KUqDxaZY/4AWSLg=='
```

__Watch out for the quotes!__

#### Deployment Step 6

Now update the operator `CustomResource` to load these two ConfigMaps as configuration for DeveloperHub:

```yaml
spec:
  application:
    appConfig:
      configMaps:
        - name: app-config-rhdh
      mountPath: /opt/app-root/src
    dynamicPluginsConfigMapName: dynamic-plugins-rhdh
    extraFiles:
      mountPath: /opt/app-root/src
    replicas: 1
    route:
      enabled: true
  database:
    enableLocalDb: true
```

At this point clicking `Save` should cause the operator to redeploy Developer Hub.  Wait patiently while OpenShift redeploys Developer Hub.

If everything has worked properly the new instance of Developer Hub should contain a "Simple Chat" entry in the sidebar with an icon, clicking on this entry should reveal the chat UI, and it should be possible to send chat messages and view those messages even after a page refresh.

#### Appendix

### Development Loop

If there's a need to rebuild the plugins and redeploy the existing scripts can be used.  The development loop at this point looks like:

Rebuild everything:

```bash
yarn install && yarn run tsc && yarn run build:all && yarn run export-dynamic
```

Stage the `.tar.gz` files:

```bash
bash ./01-stage-dynamic-plugins.sh
```

Update the image:

```bash
bash ./03-update-plugin-registry.sh
```
