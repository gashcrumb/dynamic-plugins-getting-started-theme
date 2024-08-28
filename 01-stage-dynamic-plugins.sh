#!/bin/bash

# Uses "npm pack" to to create .tgz files containing the plugin static assets
DYNAMIC_PLUGIN_ROOT_DIR=./deploy
echo ""
echo "Packaging up plugin static assets"
echo ""
BACKEND_INTEGRITY_HASH=$(npm pack plugins/test-backstage-theme/dist-dynamic --pack-destination $DYNAMIC_PLUGIN_ROOT_DIR --json | jq -r '.[0].integrity') &&
    echo "Theme plugin integrity Hash: $BACKEND_INTEGRITY_HASH"

echo ""
echo "Plugin .tgz files:"
ls -l $DYNAMIC_PLUGIN_ROOT_DIR

echo ""