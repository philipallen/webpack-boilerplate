# Webpack Boilerplate

## Setup

### osx users:

Run these in the root of your Teminal:

> npm install -g eslint

```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### windows users:

Run these anywhere in your command shell:

> npm install -g eslint

> npm install -g install-peerdeps

> install-peerdeps --dev eslint-config-airbnb

### all users

You'll need to create an .eslintrc file.

On Windows you should create it here: C:\Users\%username%

On osx create it on your root

Copy and paste the below into the .eslintrc file

```
{
  "extends": "airbnb",

  "rules": {
      // `.jsx` extension cannot be used with React Native
      // https://github.com/airbnb/javascript/issues/982
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"]
      }],
      'import/no-unresolved': ['error', { caseSensitive: false }],
  },
  "env": { "browser": true },
 }
```

## To start the project in development mode:

> npm install (first time only)

> npm run dev

## To build in production:

> npm run build

See the dist folder has been created with all the relevant bundles inside