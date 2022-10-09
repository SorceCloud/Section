# Button component

<br />

Button component with multiple styles, colors and sizes.

## Basic usage

```ts
import btn from "sectionui"
```
## Basic
<div class="flex flex-wrap items-center gap-3">
  <btn>Primary</btn>
  <btn loading>Loading</btn>
  <btn disabled>Disabled</btn>
  <btn pills>Primary pills</btn>
  <btn variant="outline">Outline</btn>
  <btn variant="link">Link</btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn>Primary</btn>
  <btn loading>Loading</btn>
  <btn disabled>Disabled</btn>
  <btn pills>Primary pills</btn>
  <btn variant="outline">Outline</btn>
  <btn variant="link">Link</btn>
</div>
```

## Colors

<div class="flex flex-wrap items-center gap-3">
  <btn color="primary">Primary </btn>
  <btn color="secondary">Secondary </btn>
  <btn color="success">Success </btn>
  <btn color="danger">Danger </btn>
  <btn color="warning">Warning </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn>Primary</btn>
  <btn loading>Loading</btn>
  <btn disabled>Disabled</btn>
  <btn pills>Primary pills</btn>
  <btn variant="outline">Outline</btn>
  <btn variant="link">Link</btn>
</div>
```

## Outline

<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="outline">Primary </btn>
  <btn color="secondary" variant="outline">Secondary </btn>
  <btn color="success" variant="outline">Success </btn>
  <btn color="danger" variant="outline">Danger </btn>
  <btn color="warning" variant="outline">Warning </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="outline">Primary </btn>
  <btn color="secondary" variant="outline">Secondary </btn>
  <btn color="success" variant="outline">Success </btn>
  <btn color="danger" variant="outline">Danger </btn>
  <btn color="warning" variant="outline">Warning </btn>
</div>
```


## Transparent

<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="transparent">Primary </btn>
  <btn color="secondary" variant="transparent">Secondary </btn>
  <btn color="success" variant="transparent">Success </btn>
  <btn color="danger" variant="transparent">Danger </btn>
  <btn color="warning" variant="transparent">Warning </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="transparent">Primary </btn>
  <btn color="secondary" variant="transparent">Secondary </btn>
  <btn color="success" variant="transparent">Success </btn>
  <btn color="danger" variant="transparent">Danger </btn>
  <btn color="warning" variant="transparent">Warning </btn>
</div>
```

## Pills

<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" pills>Primary </btn>
  <btn color="secondary" pills>Secondary </btn>
  <btn color="success" pills>Success </btn>
  <btn color="danger" pills>Danger </btn>
  <btn color="warning" pills>Warning </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" pills>Primary </btn>
  <btn color="secondary" pills>Secondary </btn>
  <btn color="success" pills>Success </btn>
  <btn color="danger" pills>Danger </btn>
  <btn color="warning" pills>Warning </btn>
</div>
```

## Sizes

<div class="flex flex-wrap items-center gap-8">
  <btn size="xs">Extra-small </btn>
  <btn size="sm">Small </btn>
  <btn>normal </btn>
  <btn size="lg">Large </btn>
  <btn size="xl">Extra-large </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn size="xs">Extra-small </btn>
  <btn size="sm">Small </btn>
  <btn>normal </btn>
  <btn size="lg">Large </btn>
  <btn size="xl">Extra-large </btn>
</div>
```


## Responsive 

<div class="flex flex-wrap items-center gap-3">
  <btn size="sm" md="lg">Default(sm) md(lg)</btn>
  <btn size="lg" md="xs">Default(lg) md(xs)</btn>
</div>




## Link

<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="link">Primary </btn>
  <btn color="secondary" variant="link">Secondary </btn>
  <btn color="success" variant="link">Success </btn>
  <btn color="danger" variant="link">Danger </btn>
  <btn color="warning" variant="link">Warning </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn color="primary" variant="link">Primary </btn>
  <btn color="secondary" variant="link">Secondary </btn>
  <btn color="success" variant="link">Success </btn>
  <btn color="danger" variant="link">Danger </btn>
  <btn color="warning" variant="link">Warning </btn>
</div>
```
## Circle

<div class="flex flex-wrap items-center gap-3">
  <btn circle>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C374 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 15 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
      </path>
    </svg>
  </btn>
  <btn circle variant="outline">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
      </path>
    </svg>
  </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn circle>
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C374 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 15 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
      </path>
    </svg>
  </btn>
  <btn circle variant="outline">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
      </path>
    </svg>
  </btn>
</div>
```

## Tag 
<div class="flex flex-wrap items-center gap-3">
  <btn tag="a" href="/" variant="link" >Home </btn>
  <btn tag="RouterLink" to="/components/button">Secondary </btn>
</div>

```ts
<div class="flex flex-wrap items-center gap-3">
  <btn tag="a" href="/" variant="link" >Home </btn>
  <btn tag="RouterLink" to="/components/button">Secondary </btn>
</div>
```

## API

| 表格 | 表格 | 表格 | 表格 |
| ---- | ---- | ---- | ---- |
| 表格 | 表格 | 表格 | 表格 |


