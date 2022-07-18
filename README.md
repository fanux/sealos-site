# SealOS Website

SealOS website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Notes for contribution

Please do not change anything under `docs` and `i18n/zh-Hans/docusaurus-plugin-content-docs/current` as they are automatically synchronized from [sealos/docs/4.0](https://github.com/labring/sealos/tree/main/docs/4.0).

## Development

### Requirements

Note: Node.js version 16.14 or above is required, as described in [Docusaurus 2 docs](https://docusaurus.io/docs/installation#requirements).

```shell
$ yarn
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```shell
$ yarn start
```

### I18n

Run command to generate zh-Hans to translate json files.

```shell
yarn write-translations --locale zh-Hans
```

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
