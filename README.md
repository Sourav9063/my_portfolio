[sourav9063.github.io/my_portfolio/](https://sourav9063.github.io/my_portfolio/)

## Deployment

### Using the automated script

First, make the script executable (Unix/Mac/Linux only):
```bash
chmod +x deploy.sh
```

**Deploy to production** (sourav9063.github.io):
```bash
# Unix/Mac/Linux
./deploy.sh deploy

# Windows (Git Bash)
bash deploy.sh deploy

# Windows (PowerShell)
sh deploy.sh deploy
```

**Deploy to development** (my_portfolio subdirectory):
```bash
# Unix/Mac/Linux
./deploy.sh deploy-dev

# Windows (Git Bash)
bash deploy.sh deploy-dev

# Windows (PowerShell)
sh deploy.sh deploy-dev
```

### Manual deployment steps

Steps to deploy at https://sourav9063.github.io/

```
git remote remove origin
```

```
git remote add origin https://github.com/Sourav9063/sourav9063.github.io.git

git pull

git branch --set-upstream-to=origin/master master
```

In package.json

```
  "homepage": "https://sourav9063.github.io",
```

```
npm run deploy
```

Reset back

```
 git remote remove origin
 git remote add origin https://github.com/Sourav9063/my_portfolio

git pull

git branch --set-upstream-to=origin/master master
```

```
 "homepage": "https://sourav9063.github.io/my_portfolio",
```
