# SealOS Website

SealOS website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Contains:

1. Main Site
2. Docs Site
3. Blog Site

### Requirements

Note: Node.js version 16.14 or above is required, as described in [Docusaurus 2 docs](https://docusaurus.io/docs/installation#requirements).

```shell
$ yarn
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```shell
$ yarn start
```

#### I18n

Run command to generate zh-CN to translate json files.
```shell
npm run write-translations -- --locale zh-CN
```

#### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
