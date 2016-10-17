#!/usr/local/bin/fish

# comment out '/dist' line in .gitignore file:
sed -i -e 's/^\/dist$/#\/dist/g' .gitignore

# dist subtree commit:
git add .
git commit -am (date)\ dist\ subtree\ commit

# deploy build dir for github pages
git subtree push --prefix dist master
#git push origin (git subtree split --prefix=dist --onto=origin/master):master --force

# uncomment back to ignoring dist folder
sed -i -e 's/^#\/dist$/\/dist/g' .gitignore
