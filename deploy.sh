#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to deploy to production (sourav9063.github.io)
deploy() {
    echo -e "${BLUE}Starting deployment to production (sourav9063.github.io)...${NC}"

    # Remove existing origin
    echo -e "${YELLOW}Removing existing origin...${NC}"
    git remote remove origin

    # Add new origin
    echo -e "${YELLOW}Adding new origin...${NC}"
    git remote add origin https://github.com/Sourav9063/sourav9063.github.io.git

    # Pull from remote
    echo -e "${YELLOW}Pulling from remote...${NC}"
    git pull

    # Set upstream branch
    echo -e "${YELLOW}Setting upstream branch...${NC}"
    git branch --set-upstream-to=origin/master master

    # Update package.json homepage
    echo -e "${YELLOW}Updating package.json homepage...${NC}"
    sed -i.bak 's|"homepage": ".*"|"homepage": "https://sourav9063.github.io"|' package.json
    rm -f package.json.bak

    # Run deploy
    echo -e "${YELLOW}Running npm deploy...${NC}"
    npm run deploy

    echo -e "${GREEN}Production deployment complete!${NC}"
    echo -e "${BLUE}Resetting back to my_portfolio repository...${NC}"

    # Reset: Remove existing origin
    echo -e "${YELLOW}Removing existing origin...${NC}"
    git remote remove origin

    # Reset: Add original origin
    echo -e "${YELLOW}Adding original origin...${NC}"
    git remote add origin https://github.com/Sourav9063/my_portfolio

    # Reset: Pull from remote
    echo -e "${YELLOW}Pulling from remote...${NC}"
    git pull

    # Reset: Set upstream branch
    echo -e "${YELLOW}Setting upstream branch...${NC}"
    git branch --set-upstream-to=origin/master master

    # Reset: Update package.json homepage
    echo -e "${YELLOW}Updating package.json homepage...${NC}"
    sed -i.bak 's|"homepage": ".*"|"homepage": "https://sourav9063.github.io/my_portfolio"|' package.json
    rm -f package.json.bak

    echo -e "${GREEN}Reset complete! Repository is back to my_portfolio configuration.${NC}"
}

# Function to deploy to development (my_portfolio subdirectory)
deploy_dev() {
    echo -e "${BLUE}Starting deployment to development (my_portfolio)...${NC}"

    # Remove existing origin
    echo -e "${YELLOW}Removing existing origin...${NC}"
    git remote remove origin

    # Add original origin
    echo -e "${YELLOW}Adding original origin...${NC}"
    git remote add origin https://github.com/Sourav9063/my_portfolio

    # Pull from remote
    echo -e "${YELLOW}Pulling from remote...${NC}"
    git pull

    # Set upstream branch
    echo -e "${YELLOW}Setting upstream branch...${NC}"
    git branch --set-upstream-to=origin/master master

    # Update package.json homepage
    echo -e "${YELLOW}Updating package.json homepage...${NC}"
    sed -i.bak 's|"homepage": ".*"|"homepage": "https://sourav9063.github.io/my_portfolio"|' package.json
    rm -f package.json.bak

    # Run deploy
    echo -e "${YELLOW}Running npm deploy...${NC}"
    npm run deploy

    echo -e "${GREEN}Development deployment complete!${NC}"
}

# Main script
case "$1" in
    deploy)
        deploy
        ;;
    deploy-dev)
        deploy_dev
        ;;
    *)
        echo "Usage: $0 {deploy|deploy-dev}"
        echo "  deploy     - Deploy to production (sourav9063.github.io)"
        echo "  deploy-dev - Deploy to development (my_portfolio subdirectory)"
        exit 1
        ;;
esac
