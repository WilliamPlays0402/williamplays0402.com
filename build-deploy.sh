#!/bin/bash

# Make sure the script exits on any error
set -e

# Check if the script is run as root
if [ "$(id -u)" -ne 0 ]; then
  echo "This script must be run as root. Please use sudo."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Deploy the project
echo "Deploying the project..."
# First, ensure the build directory is there
if [ ! -d "dist" ]; then
  echo "Build directory 'dist' does not exist. Exiting."
  exit 1
fi
# Delete the old deployment directory
rm -rf /var/www/html/williamplays0402.com
# Copy the new build to the deployment directory
cp -r dist /var/www/html/williamplays0402.com