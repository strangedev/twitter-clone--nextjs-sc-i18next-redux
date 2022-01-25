## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How this was set up

```shell
npx create-next-app --typescript --npm

npm i -D roboter
```

Delete the `./styles` directory, we won't need it.
Also delete the `./pages/api` directory, the server will be contained in its own repository.
Next, remove the boilerplate code from `./pages/index.tsx`.

### roboter

Add `es/browser` to `.eslintrc.json`:
```json
{
  "extends": [
    "next/core-web-vitals",
    "es/browser"
  ]
}
```

Also add the following files to `ignorePaths`:

```json lines
{
   /* ... */
  "ignorePatterns": [
    "next-env.d.ts",
    "next.config.js"
  ]
}
```

#### Fix `package.json`

Copy the `package.json` structure from [one of the the native web repositories](https://github.com/thenativeweb/aira/blob/main/package.json),
or copy the structure of this project's `package.json`.

Run `npx roboter analyze` to verify the changes.

#### Fix linter errors

Run `npx eslint --fix` to fix automatically fixable errors.
Run `npx roboter analyze` to list the remaining errors and fix them.

### redux

We use `react-redux` with `redux-toolkit` for more standardized interaction with redux.

Install the dependencies:
```shell
npm i @reduxjs/toolkit react-redux
```

Set up typings for the store, see [`./app/store/typings.ts`](./app/store/typings.ts).

### styled-components

Install the dependencies:
```shell
npm i styled-components @types/styled-components
```

_Note_: There is a TypeScript rewrite of styled-components underway, keep an eye out for that, you might not need the types in the future. 

Add [`./pages/_document.tsx`](./pages/_document.tsx) to enable SSR. 


### styled-reset

Install the dependencies:
```shell
npm i styled-reset
```

### react-component-theming

Install the dependencies:
```shell
npm i react-component-theming
```

### Configuring global styles

Global styles add the CSS reset and font faces.

### i18next