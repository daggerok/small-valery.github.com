#!/usr/local/bin/fish

# build project
npm i; npm run build

# comment out '/dist' line in .gitignore file:
sed -i -e 's/^\/dist$/#\/dist/g' .gitignore

# dist subtree commit:
git add dist
git commit -am (date +%YY-%m-%d'T'%H:%m)\ dist\ subtree\ commit

# deploy build dir for github pages
git push origin (git subtree split --prefix=dist --onto=origin/master):master
#git push origin (git subtree split --prefix dist master):master

# uncomment back to ignoring dist folder
sed -i -e 's/^#\/dist$/\/dist/g' .gitignore
