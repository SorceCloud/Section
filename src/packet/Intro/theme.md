# Themes

<br />

<div class='bg-error-200/10 rounded-$rounded-btn p-5 text-error-200'>
    Themes are not defined yet, existing themes are for testing purposes only, they will be changed in the next versions.
</div>

<br />

## List of Themes

Blue, teal, rose, violet and orange.

<br />


<br /> <br />

## Import themes

To import themes you need to add the code bellow in <code>windi.config.js</code> file.

```ts
import sectionTheme from './src/plugin';

export default {
  plugins: [sectionTheme],

  sectionThemes: {
    themes: ['blue', 'teal', 'rose', 'violet', 'orange'],
  },
};
```

When there are no themes imported, Section UI will use the default theme (blue).

<br />

## Customize an existing theme

To customize an existing theme, you can pass an object to section.themes and replace existing variables.

```ts
import  sectionTheme  from './src/plugin';

export default {
  plugins: [sectionTheme],

  sectionThemes: {
     {
        'primary-100': '#2563eb',
        'primary-200': '#1d4ed8',
        'primary-300': '#1e40af'
      },
    themes: [ 'teal']
  }
};

```

## Section UI  CSS variables

```ts
    'primary-100': '#2563eb',
    'primary-200': '#1d4ed8',
    'primary-300': '#1e40af',

    'secondary-100': '#4b5563',
    'secondary-200': '#374151',
    'secondary-300': '#1f2937',

    'success-100': '#16a34a',
    'success-200': '#15803d',
    'success-300': '#166534',

    'error-100': '#dc2626',
    'error-200': '#b91c1c',
    'error-300': '#991b1b',

    'warning-100': '#ca8a04',
    'warning-200': '#a16207',
    'warning-300': '#854d0e',

    'base-100': '#fcfcfc',
    'base-200': '#fafafa',
    'base-300': '#f8f9fa',

    'dark-base-100': '#181818',
    'dark-base-200': '#151414',
    'dark-base-300': '#0f0f0f',

    'base-text': '#1f2937',
    'dark-base-text': '#f3f4f6',

    'rounded-box': '1rem',
    'rounded-btn': '0.5rem',
    'rounded-badge': '1.9rem',
```
