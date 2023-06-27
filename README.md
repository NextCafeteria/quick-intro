# quick-intro

A small React wrapper around [intro.js-react](http://introjs.com/). The wrapper provides support for both steps and hints, persisting the walkthrough progress across screens using local storage.

## Quicklinks

- [Example](#example)
- [Installation](#installation)
- [Usage](#usage)
  - [Steps](#steps)
  - [Hints](#hints)
- [QuickIntro.js API](#introjs-api)
- [QuickIntro.js options](#introjs-options)

## Example

You can find a small example [here on codesandbox.io](https://codesandbox.io/embed/o2A4gwXE3?hidenavigation=1).

## Installation

Install using Npm *(don't forget to add the `--save` option if you're still using npm < 5)*:

```sh
$ npm i @next-cafeteria/quick-intro
```

Or Yarn:


```sh
$ yarn add @next-cafeteria/quick-intro
```

Make sure to have [React](https://facebook.github.io/react/) & [Intro.js](http://introjs.com/) installed (they're peer dependencies) and the Intro.js CSS definitions [properly loaded](http://introjs.com/docs/getting-started/install) into your project.

This would usually looks like:

```js
import 'intro.js/introjs.css';
```

## Usage

Two component are available for both steps and hints:

```js
import { PersistentSteps, PersistentHints } from '@next-cafeteria/quick-intro';
```

## PersistentSteps

### Basic example:

```js
<PersistentSteps
  steps={steps}
  title="My steps"
/>
```

### Props

| Name | Description | Type | Required |
| --- | --- | :---: | :---: |
| `steps` | All the steps. | [Step[]](#step) | ✅ |
| `title` | Title of the tutorial | String |  |

### Step

```js
const steps = [
  {
    element: '.selector1',
    intro: 'test 1',
  },
  {
    element: '.selector2',
    intro: 'test 2',
  },
  {
    element: '.selector3',
    intro: 'test 3',
  },
];
```

| Name | Description | Type | Required |
| --- | --- | :---: | :---: |
| `element` | CSS selector to use for the step. | String | |
| `intro` | The tooltip content. | String \| React element | ✅ |

## PersistentHints

### Basic example:

```js
<Hints
  hints={hints}
/>
```

### Props

| Name | Description | Type | Required |
| --- | --- | :---: | :---: |
| `hints` | All the hints. | [Hint[]](#hint) | ✅ |
| `onClick` | Callback called when a hint is clicked. | Function <br> *( )* |  |

### Hint

```js
const hints = [
  {
    element: '.selector1',
    hint: 'test 1',
  },
  {
    element: '.selector2',
    hint: 'test 2',
  },
];
```

| Name | Description | Type | Required |
| --- | --- | :---: | :---: |
| `element` | CSS selector to use for the hint. | String | ✅ |
| `hint` | The tooltip text. | String | ✅ |


## QuickIntro.js options

| Name | Description | Type |
| --- | --- | :---: |
| `nextLabel` | Next button label. | String |
| `prevLabel` | Previous button label. | String |
| `skipLabel` | Skip button label. | String |
| `doneLabel` | Done button label. | String |
| `hidePrev` | Hides the Previous button in the first step. | Boolean |
| `hideNext` | Hide the Next button in the last step. | Boolean |
| `tooltipClass` | CSS class of the tooltips. | String |
| `highlightClass` | CSS class of the helperLayer. | String |
| `exitOnEsc` | Exit by pressing Escape. | Boolean |
| `exitOnOverlayClick` | Exit by clicking on the overlay layer. | Boolean |
| `showStepNumbers` | Show steps number in a red circle. | Boolean |
| `keyboardNavigation` | Allows navigation between steps using the keyboard. | Boolean |
| `showButtons` | Show navigation buttons. | Boolean |
| `showBullets` | Show bullets. | Boolean |
| `showProgress` | Show progress indicator. | Boolean |
| `scrollToElement` | Enables scrolling to hidden elements. | Boolean |
| `overlayOpacity` | Opacity of the overlay. | Number |
| `scrollPadding` | Padding when automatically scrolling to an element. | Number |
| `positionPrecedence` | Precedence of positions. | String[] |
| `disableInteraction` | Disables interaction inside elements. | Boolean |
| `hintPosition` | Position of the hints. | String |
| `hintButtonLabel` | Hint button label. | String |
| `hintAnimation` | Enables hint animations. | Boolean |

## License

Licensed under the ISC License, Copyright © Next-Cafeteria.

See [LICENSE](./LICENSE) for more information.
