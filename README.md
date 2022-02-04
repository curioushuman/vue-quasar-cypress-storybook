# Regenerative by Community app (rbc-app)

The public facing RbC app

## Setup

```bash
npm install
```

## Development

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Build the app for production

```bash
npm run build
```

## Designs

### Philosophy

We will be using:

- [Component Driven Development](https://www.componentdriven.org/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

Please review so we're all on the same page. This is very important as it informs our:

- directory structure
- naming conventions

### Figma files

The designs have been created in Figma using a UI Kit called [Untitled UI](https://www.untitledui.com/). It is a little bit different to Quasar/Material 2.0, but draws heavily from it.

Our approach will be:

- Build using native Quasar wherever possible
  - We want to benefit from the time saving it will give us
- Make relevant changes to bring it closer in line with designs
  - Quasar offers various means to move away from it's defaults

To convert from Quasar (default) to the designs please make changes in the following order:

1. Quasar SCSS variables
   - https://quasar.dev/style/sass-scss-variables
   - in /src/css dir
2. Create wrapper components that include specific defaults
   - See a-button.vue as an example
3. SCSS updates; global or local
   - As usual be discerning as to what remains in a component context and what should be moved to the global SCSS file

### Icons

The design kit uses a custom icon set, but we'll be employing [Line Awesome](https://icons8.com/line-awesome) which is one of the defaults offered within Quasar. Use the icons from the design as a guide, find a replacement in Line Awesome if you can, OTHERWISE call it out in the related GitLab issue.

## Documentation

We'll be using:

- JSDoc style comments throughout code
- [Storybook](https://storybook.js.org/) as our knowledge sharing platform
  - Storybook will use JSDoc comments for DocsPage
  - You can use a-button component as an example

```bash
npm run storybook
```

### Story book add-ons

- Designs
  - https://storybook.js.org/addons/storybook-addon-designs
- Accessibility
  - https://storybook.js.org/addons/@storybook/addon-a11y

### Known issues

#### RESOLVED Vue 3 uses Webpack v5 and Storybook >6.2 uses Webpack v4

https://storybook.js.org/blog/storybook-for-webpack-5/

Storybook has an Alpha release that supports Webpack 5 which we have installed.

#### Importing app styles into Storybook

I just haven't been able to manage this yet. I have:

- Tried the Webpack route
  - https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
  - https://dev.to/yemolai/using-storybook-with-quasar-3090
- Tried the SCSS presets
  - https://storybook.js.org/docs/react/addons/addon-types#preset-addons
  - https://github.com/storybookjs/presets/tree/master/packages/preset-scss
- Tried including css and scss in preview.js
  - https://github.com/badsaarow/quasar2-storybook-boilerplate/blob/main/.storybook/preview.js
  - https://dev.to/yemolai/using-storybook-with-quasar-3090

UPDATE: I'm having similar issues in Cypress, so it might be a global Webpack issue.

## Coding standards

As outlined above we'll be using Atomic Design to inform how we structure the project. This manifests specifically into how we:

- break down the interface into components
- structure our components directory
- name our components

### Breakdown of UI

Please review Atomic Design for this.

### Structure of components directory

In the atomic way we will be structuring our components directory in the following way:

- components
  - atoms
    - component
    - component
    - component
  - molecules
    - component
    - component
    - component
  - organisms
    - component
    - component
    - component
  - templates
    - component
    - component
    - component

You'll notice there is also a components/composables directory for those composables directly related to components. Some examples exist within.

Each component directory will include (at least) the following:

NOTE: we'll use an atomic component as an example

- component
  - \_\_tests\_\_
    - a-component.spec.ts
  - a-component.stories.js
  - a-component.vue

You'll notice a naming convention exists for atomic components, and the same will be the case for the other levels:

- Atom
  - a-component.vue
- Molecule
  - m-component.vue
- Organism
  - o-component.vue
- Template
  - t-component.vue

All other related files will draw from this same core convention.

### Linting

Complete config can be found in .eslintsrc.js. We're using a combination of:

- ESLint
- Prettier

With plugins installed and configured for:

- Typescript
- Vue
- Storybook
- Cypress

Recommended settings & extensions can be found in the .vscode directory. Whether you use VS Code or not, please set up your IDE to mirror these settings.

You can run locally using:

```
npm run lint
```

Webpack is configured to lint upon build, although it is recommended to run linting and formatting onSave in your IDE.

## Frameworks / languages

We're using Vue 3 and Quasar and we would like to benefit as much from what these two frameworks provide us. We would also like to use Typescript wherever possible, so long as it doesn't slow us down; so far everything but stories are written in Typescript.

### Vue 3

- Composition API is awesome, please use it
  - Options API will not be accepted
  - `<script setup>` doesn't play well with linting (yet) so we won't be able to use this
- Use composables to separate out concerns where relevant
  - Several examples exist in src/components/composables
- Use the [Vue3 Style Guide](https://v3.vuejs.org/style-guide/)
  - It includes lots of extra tips on how to keep things consistent

#### Additional libraries worth looking at

- [VueUse](https://vueuse.org/)
  - A library of composables that can be imported into your code

### Quasar

Quasar has [excellent docs](https://quasar.dev/), and a [huge library of components](https://quasar.dev/vue-components). Please use these AT ALL TIMES. If something doesn't exist, or is very different to the designs please LET ME KNOW rather than install something else.

### Typescript

It seems as though Typescript is the future, so let's use it.

#### Known issues

##### RESOLVED Vue component props.prop returns 'does not exist' error

https://stackoverflow.com/questions/68110585/vue-3-prop-with-validator-typescript-error-claiming-other-prop-does-not-exis

This is caused when you define your default or validator functions as old school notation (function {}) and not ES6.

This works:

```

preset: {
  type: String as PropType<string>,
  default: '',
  validator: (value: string) => presets.includes(value),
},

```

This doesn't work:

```

preset: {
  type: String as PropType<string>,
  default() {
    return '';
  },
  validator(value: string) {
    return presets.includes(value);
  },
},

```

## Testing

We'll be using Cypress for ALL the testing:

- Unit
- Integration
- E2E

Cypress integrates with Quasar via the following extension:

- https://github.com/quasarframework/quasar-testing/tree/next

So far I have only implemented unit tests, examples of which you can find in:

- /src/components/atoms/button/\_\_test\_\_

You can run unit tests via:

```bash
npm run test:unit
```

### Tests and stories

I attempted to use stories within our tests, based on this article:

- https://www.cypress.io/blog/2021/05/19/cypress-x-storybook-2-0/

But it was not possible as @storybook/testing-vue3 isn't compatible with the Storybook alpha version we were forced to use to support webpack5. In the mean time I have used a numbering convention in stories and tests to make sure we have coverage across both.

## Sample code (from frameworks)

Quasar has included some sample code which I have left in for now. Some of it came with the initial project build, the rest when I added Cypress. You can find it:

- src/components/sample
- src/types/sample
