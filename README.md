Template for building full stack applications with node, express and react with babel/webpack.

`yarn install` in both root and `client`

Run
`yarn start` in both the root directory and `client`, and then run `yarn run watch-css` in root.

To deploy, just run
```git init
echo node_modules > .gitignore
git add .
git commit -m "Initial commit"
heroku create
git push heroku master
```
