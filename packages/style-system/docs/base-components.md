# Box

The `Box` is a base React component that exposes the most used CSS properties for an HTML `div` element. It has access to the `Theme`
and uses its values for many properties. This allows a consistent style across the application.

Additionally there are components, which work exactly like `Box`. According to their name, they produce semantic HTML: `HeaderBox`
, `NavBox`, `SectionBox`, `ArticleBox`, `AsideBox`, `FooterBox`, `FigCaptionBox`, `FigureBox`

## Properties

### Margin

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `m`               | `number` \[0-4\]    | unset        | Set the CSS properties `margin-top`, `margin-right`, `margin-bottom` and `margin-left` to  `theme.spacing.space[0-5]` |
| `mx`              | `number` \[0-4\]    | unset        | Set the CSS properties `margin-right` and `margin-left` to  `theme.spacing.space[0-5]` |
| `my`              | `number` \[0-4\]    | unset        | Set the CSS properties `margin-top` and `margin-bottom` to  `theme.spacing.space[0-5]` |
| `mt`              | `number` \[0-4\]    | unset        | Set the CSS property `margin-top` to  `theme.spacing.space[0-5]` |
| `mr`              | `number` \[0-4\]    | unset        | Set the CSS property `margin-right` to  `theme.spacing.space[0-5]` |
| `mb`              | `number` \[0-4\]    | unset        | Set the CSS property `margin-bottom` to  `theme.spacing.space[0-5]` |
| `ml`              | `number` \[0-4\]    | unset        | Set the CSS property `margin-right` to  `theme.spacing.space[0-5]` |

All properties can be passed as arrays to provide different values for breakpoints.
See [Responsive styling](./pstyle-and-breakpoints.md#responsive-styling) for details.

### Padding

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `p`               | `number` \[0-4\]    | unset        | Set the CSS properties `padding-top`, `padding-right`, `padding-bottom` and `padding-left` to  `theme.spacing.space[0-5]` |
| `px`              | `number` \[0-4\]    | unset        | Set the CSS properties `padding-right` and `padding-left` to  `theme.spacing.space[0-5]` |
| `py`              | `number` \[0-4\]    | unset        | Set the CSS properties `padding-top` and `padding-bottom` to  `theme.spacing.space[0-5]` |
| `pt`              | `number` \[0-4\]    | unset        | Set the CSS property `padding-top` to  `theme.spacing.space[0-5]` |
| `pr`              | `number` \[0-4\]    | unset        | Set the CSS property `padding-right` to  `theme.spacing.space[0-5]` |
| `pb`              | `number` \[0-4\]    | unset        | Set the CSS property `padding-bottom` to  `theme.spacing.space[0-5]` |
| `pl`              | `number` \[0-4\]    | unset        | Set the CSS property `padding-right` to  `theme.spacing.space[0-5]` |

All properties can be passed as arrays to provide different values for breakpoints.
See [Responsive styling](./pstyle-and-breakpoints.md#responsive-styling) for details.

### Flex child

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `grow`            | `number`            | `0`          | Set the CSS property `flex-grow` |
| `shrink`          | `number`            | `1`          | Set the CSS property `flex-shrink` |
| `basis`           | `number` \| `string`| `auto`       | Set the CSS property `flex-basis` |
| `order`           | `number`            | `0`          | Set the CSS property `order` |
| `align`           | `AlignItems`        | `auto`       | Set the CSS property `alignSelf`, allowed values: `auto\|stretch\|center\|flex-start\|flex-end\|baseline\|initial\|inherit` |

All properties can be passed as arrays to provide different values for breakpoints.
See [Responsive styling](./pstyle-and-breakpoints.md#responsive-styling) for details.

### Font

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `fontStyle`       | `string`            | unset        | The value is used to lookup font-related styles from `theme.fontStyles`. The allowed values are determined by the theme type.|
| `fontSize`        | `string`            | unset        | The value is used to lookup the font-size from `theme.fontSizes` and set the CSS property `font-size`. The allowed values are determined by the theme type. |
| `color`           | `string`            | unset        | Set the CSS property `background-color`. If the value is a key of `theme.colors`, the respective value is taken from it. Otherwise the passed value is used. |            |
| `bold`            | `boolean`           | `false`      | Set the CSS property `font-weight` to `700`. If this is not appropriate for the chosen font, define a font style in your theme and explicitly set the `font-weight`. |
| `italic`          | `boolean`           | `false`      | Set the CSS property `font-style` to `italic`. |
| `ellipsis`        | `boolean`           | `false`      | Set the CSS properties `text-overflow` to `ellipsis`, `overflow` to `hidden` and `white-space` to `nowrap`. |
| `underline`       | `boolean`           | `false`      | Set the CSS properties `text-decoration` to `underline`. |
| `textAlign`       | `TextAlign`         | unset (`left` if direction is ltr, and `right` if direction is rtl) | Set the CSS property `text-align`. Allowed values: `left`\|`right`\|`center`\|`justify`\|`initial`\|`inherit`|
| `uppercase`       | `TextAlign`         | unset        | Set the CSS property `text-transform` to uppercase.|
| `wordBreakAll`    | `TextAlign`         | unset        | Set the CSS property `word-break` to `break-all`.|
| `wordWrapAll`     | `TextAlign`         | unset        | Set the CSS property `word-wrap` to `break-word`.|

All properties can be passed as arrays to provide different values for breakpoints.
See [Responsive styling](./pstyle-and-breakpoints.md#responsive-styling) for details.

### Styling

| Property          | Type               | Default      | Description |
|:----------------- |:-------------------|:-------------|:------------|
| `bg`              | `string`           | unset        | Set the CSS property `background-color`. If the value is a key of `theme.colors`, the respective value is taken from it. Otherwise the passed value is used. |
| `overflowHidden`  | `boolean`          | false        | Set the CSS property `overflow` to `hidden`. |
| `cursorPointer`   | `boolean`          | false        | Set the CSS property `cursor` to `pointer`. |
| `shadow`          | `boolean`          | unset        | The value is used to lookup shadow from `theme.shadows`. The allowed values are determined by the theme type. |
| `lineClamp`       | `boolean` `number` | unset        | Set the required CSS properties `-webkit-line-clamp` (and others) to enforce line truncation. Setting the value to `true`, sets the line-clamp to `1` |
| `r`               | `number` `string`  | unset        | Set the CSS property `border-radius`|
| `rt`              | `number` `string`  | unset        | Set the CSS properties `border-top-left-radius` and `border-top-right-radius`|
| `rb`              | `number` `string`  | unset        | Set the CSS properties `border-bottom-left-radius` and `border-bottom-right-radius`|
| `rl`              | `number` `string`  | unset        | Set the CSS properties `border-top-left-radius` and `border-bottom-left-radius`|
| `rr`              | `number` `string`  | unset        | Set the CSS properties `border-top-right-radius` and `border-bottom-right-radius`|
| `rtl`             | `number` `string`  | unset        | Set the CSS property `border-top-left-radius`.|
| `rtr`             | `number` `string`  | unset        | Set the CSS property `border-top-right-radius`.|
| `rbl`             | `number` `string`  | unset        | Set the CSS property `border-bottom-left-radius`.|
| `rbr`             | `number` `string`  | unset        | Set the CSS property `border-bottom-right-radius`.|

### Box model

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `display`         | `Display`           | unset        | Override the component's default display value. |
| `position`        | `Position`          | unset        | Override the component's positioning. |
| `top`             | `number` `string`   | unset        | Affect the vertical positioning of a positioned element. |
| `right`           | `number` `string`   | unset        | Affect the horizontal positioning of a positioned element. |
| `bottom`          | `number` `string`   | unset        | Affect the vertical positioning of a positioned element. |
| `Left`            | `number` `string`   | unset        | Affect the horizontal positioning of a positioned element. |
| `inline`          | `boolean`           | `false`      | If set to `true`, the CSS property `display` is set to `inline`, otherwise to `block`. |
| `width`           | `number` `string`   | unset        | Set the CSS property `width` to the value. If `fullWidth` is set to true, the `width` is set to `100%` though and overrides the `width` property of the `Box`. |
| `height`          | `number` `string`   | unset        | Set the CSS property `height` to the value. If `fullHeight` is set to true, the `height` is set to `100%` though and overrides the `height` property of the `Box`.            |
| `fullWidth`       | `boolean`           | `false`      | Set the CSS property `width` to `100%`. |
| `fullHeight`      | `boolean`           | `false`      | Set the CSS property `height` to `100%`. |
| `minWidth`        | `number` `string`   | unset        | Set the CSS property `min-width` to the value.|
| `minHeight`       | `number` `string`   | unset        | Set the CSS property `min-height` to the value.|
| `maxWidth`        | `number` `string`   | unset        | Set the CSS property `max-width` to the value.|
| `maxHeight`       | `number` `string`   | unset        | Set the CSS property `max-height` to the value.|

All properties can be passed as arrays to provide different values for breakpoints.
See [Responsive styling](./pstyle-and-breakpoints.md#responsive-styling) for details.

### HTML Attributes

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `htmlAttrs`       | `HTMLAttributes`    | -            | HTML Attributes which will be added to the HTML element. These attributes may override the other attributes. |

### Events

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `onClick  `       | `MouseEventHandler` | -            | Register the `onClick` event. |
| `onMouseDown  `   | `MouseEventHandler` | -            | Register the `onMouseDown` event. |
| `onMouseOver  `   | `MouseEventHandler` | -            | Register the `onMouseOver` event. |
| `onMouseOut  `    | `MouseEventHandler` | -            | Register the `onMouseOut` event. |
| `onScroll  `      | `UIEventHandler`    | -            | Register the `onScroll` event. |

### Additional CSS styles

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `style`           | `FelaStyle`         | -            | A style object of type `IStyle`, a `StyleFunction` or an array of one of them or both. In the case of an array the elements are applied from left to right. |

This is an escape hatch in the case that the available properties do not support a particular CSS property. Note that using `style`
does not create inline styles but Fela generates global CSS rules.

### Reference

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `innerRef`        | `React.RefObject`   | -            | Get access to the DOM node.|

### Test data

| Property          | Type                | Default      | Description |
|:----------------- |:--------------------|:-------------|:------------|
| `testId`          | `string`            | -            | Adds the attribute `data-testid` to the HTML element. Use this to produce stable identifiers e2e test tools.|

#### IStyle

TODO Explain Fela's `IStyle` interface in detail.

#### StyleFunction

The StyleFunction gives access to the `theme`, e.g.

```typescript
const sidebarStyle: StyleFunction<Theme> = ({theme}): IStyle => ({
  width: theme.layout.sidebar.width,
})
```

This allows defining global style information in the application theme.

## Theme

The `Box` can be generified with the `Theme`, e.g.

```typescript
<Box<Theme> bg = "primary"
style = {sidebarStyle} >
```

The theme generic enables a type-safe access of the theme in properties like `bg` or `style`.

# Flex

`Flex` is a base React component that extends `Box`. Hence all the box properties are available. Additionally it sets the CSS property
`display` to `flex` and exposes all available flex container properties.

Additionally there are components, which work exactly like `Flex`. According to their name, they produce semantic HTML: `HeaderFlex`
, `NavFlex`, `SectionFlex`, `ArticleFlex`, `AsideFlex`, `FooterFlex`, `FigCaptionFlex`, `FigureFlex`

## Properties

The following properties are the same as of `Box`:

* [Margin](#margin)
* [Padding](#Padding)
* [Flex child](#flex-child)
* [Font](#font)
* [Styling](#styling)
* [Box model](#box-model)
* [HTML Attributes](#html-attributes)
* [Events](#events)
* [Additional CSS styles](#additional-css-styles)
* [Reference](#reference)
* [Test data](#test-data)

### Flex container

| Property          | Type                | Default       | Description |
|:----------------- |:--------------------|:--------------|:------------|
| `inline`          | `boolean`           | `false`       | If `true`, set the CSS property `display` to `flex-inline`, otherwise to `flex`. Note that this overrides the property `inline` of `Box`. |
| `direction`       | `Direction`         | `row`         | Set the CSS property `flex-direction` to the value. Allowed values are `column\|column\|column-reverse\|row-reverse\|initial\|inherit`. |
| `nowrap`          | `boolean`           | `false`       | Set the CSS property `flex-wrap` to the value. |
| `center`          | `boolean`           | `false`       | Set the CSS properties `justify-content', `align-items` and `text-align` to `center`.|
| `justifyContent`  | `JustifyContent`    | `flex-start`  | Set the CSS property `justify-content`, allowed values: `flex-end'\|'center'\|'space-between'\|'space-around'\|'space-evenly'`. |
| `alignItems`      | `AlignItems`        | `stretch`     | Set the CSS property `alignItems`, allowed values: `auto\|center\|flex-start\|flex-end\|baseline\|initial\|inherit` |

## Theme

see [Box](#theme)

# Text

`Text`is a base React component that works similar as `Box` but renders a `span` HTML element.

## Properties

The following properties are the same as of `Box`:

* [Margin](#margin)
* [Padding](#Padding)
* [Flex child](#flex-child)
* [Font](#font)
* [Styling](#styling)
* [HTML Attributes](#html-attributes)
* [Events](#events)
* [Additional CSS styles](#additional-css-styles)
* [Reference](#reference)
* [Test data](#test-data)

## Theme

see [Box](#theme)
