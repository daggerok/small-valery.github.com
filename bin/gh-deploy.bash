#!/bin/bash

# build project
npm i && npm run build

# comment out '/dist' line in .gitignore file:
sed -i -e 's/^\/dist$/#\/dist/g' .gitignore

# dist subtree commit:
git add dist
git commit -am $(date +%YY-%m-%d'T'%H:%m)\ dist\ subtree\ commit

# deploy build dir for github pages
git push origin $(git subtree split --prefix=dist --onto=origin/master):master

# uncomment back to ignoring dist folder
sed -i -e 's/^#\/dist$/\/dist/g' .gitignore

# re-commit restored .gitignore (should be sqoushed before next commit)
git add .gitigone
git commit -am restore\ .gitignore
