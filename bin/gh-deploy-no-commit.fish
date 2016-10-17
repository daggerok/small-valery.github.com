#!/usr/local/bin/fish

# build project
npm i; npm run build

# comment out '/dist' line in .gitignore file:
sed -i -e 's/^\/dist$/#\/dist/g' .gitignore

# make travis build green
echo "script: echo test" > dist/.travis.yml

# dist subtree commit:
git add dist
git commit --amend --no-edit

# deploy build dir for github pages
git push origin (git subtree split --prefix=dist --onto=origin/master):master --force

git rm -r dist --cached
git commit --amend --no-edit

# uncomment back to ignoring dist folder
sed -i -e 's/^#\/dist$/\/dist/g' .gitignore

# re-commit restored .gitignore (should be sqoushed before next commit)
git add .
git commit --amend --no-edit
