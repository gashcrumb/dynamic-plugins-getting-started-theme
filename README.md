
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
yarn tsc && yarn build
```

```bash
yarn export-dynamic
```

To run the example, first create an `app-config.local.yaml` file with the following contents:

```yaml
auth:
  environment: development
  providers:
    guest:
      dangerouslyAllowOutsideDevelopment: true
dynamicPlugins:
  frontend:
    internal.backstage-plugin-example-backstage-theme:
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

Copy the exported dynamic plugin to the available "deploy" directory using the following command:

```bash
cp -R plugins/example-backstage-theme/dist-dynamic deploy/internal.backstage-plugin-example-backstage-theme
```

Then use the supplied script to start an instance of Developer Hub using podman:

```bash
bash ./01-run-example.sh
```
