#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Print each command to stdout before executing it.
set -x

# Install yarn dependencies
yarn install

# Install pod dependencies
yarn run pod:install
