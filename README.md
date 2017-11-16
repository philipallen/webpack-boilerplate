Eir Styleguide
===========

osx users:

Run this in the root of your Teminal: 

(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

You need an .eslintrc file on your root too. Speak to Andrew Caulfield about this.



> npm install
> npm run dev