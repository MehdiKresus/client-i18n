

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/common/pages)

- 📦 [Components auto importing](./src/common/components)

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 📑 [Layout system](./src/common/layouts)

- 🎨 [Tailwind CSS V3](https://tailwindcss.com/) - next generation utility-first CSS framework

- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- 🚀 Shipped with [Apollo GraphQL](https://www.apollographql.com/)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🦾 TypeScript, of course

- 🤖 FSM, Final state machine [xstate](https://xstate.js.org/)
- 🏭 Graphql code generation via [Graphql Code Generator](https://github.com/dotansimha/graphql-code-generator)

<br>

## Pre-packed

### UI Frameworks

- [Tailwind CSS V3](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
- [Element+](https://element-plus.org/en-US/) - a Vue 3 based component library for designers and developers

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- [Graphql code generator](https://www.graphql-code-generator.com/) Graphql composition and type generating system
- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [Vue Apollo GraphQL](https://v4.apollo.vuejs.org/)
  - [@apollo/client](https://github.com/apollographql/apollo-client) - Fully-featured caching GraphQL client with vue integration
  - [@vue/apollo-composable](https://github.com/vuejs/apollo) - Apollo GraphQL functions for Vue Composition API

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Run the project

If you prefer to do it manually with the cleaner git history

```bash
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
pnpm dev # then start the project
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## Separation of Concerns

### Quick Overview

First thing you will notice there are no `components/`, `pages/`, `stores/`, `styles/` folders under the `src/` folder.

Everything has been moved into the `common/` folder (global settings). The others folders are more like modules ( e.g: `/companies`) ([modular architecture](https://en.wikipedia.org/wiki/Module_pattern)).You will add a new module whenever you need it without breaking any changes. The main advantage you can see is that you don't have to jump around different folders to implement a feature that is completely separate from other features ([separation of concern](https://en.wikipedia.org/wiki/Separation_of_concerns)). You can add the following folders in each module without any manual imports,

- `components/`
- `modules/`
- `pages/`
- `stores/`
- Create separate folder for each module and place them under `/src` folder
- The following folders are auto imported within each module
    - `components/`
    - `modules/`
    - `pages/`
    - `stores/`
- Place all the layouts in the `common/layouts` folder
- Place all the custom styles in the `common/styles` folder and import them into `main.css`

### Components

Components in this dir will be auto-registered and on-demand, powered by [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components).


### Icons

You can use icons from almost any icon sets by the power of [Iconify](https://iconify.design/).

It will only bundle the icons you use. Check out [`unplugin-icons`](https://github.com/antfu/unplugin-icons) for more details.

### Layouts

Vue components in this dir are used as layouts.

By default, `default.vue` will be used unless an alternative is specified in the route meta.

With [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) and [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts), you can specify the layout in the page's SFCs like this:

```html
<route lang="yaml">
meta:
  layout: home
</route>
```

### Modules

A custom user module system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, router, isClient }) => {
  // do something
}
```

### Graphql

You need to paste your backend schema code inside `~/common/apollo/schema.graphql`, and then if you run

```ts
pnpm generate
```
Then your code will be generated and your schema.graphql gonna be watched to the incoming futurs changes.