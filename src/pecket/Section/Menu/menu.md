# Menu component

## Basic usage

```ts
import Menu from "sectionui"
```

## Basic

<div class="flex flex-wrap items-center gap-3">
  <Menu>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
</div>

```ts
  <Menu>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
```

## Hover border

<div class="flex flex-wrap items-center gap-3">
  <Menu hover-border rounded>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
</div>

```ts
  <Menu hover-border rounded>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
```

## Rounded & Padding

<div class="flex flex-wrap items-center gap-3">
  <Menu rounded padding>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
        Item 1
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
        Item 2
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg>
        Item 3
    </btn>
  </Menu>
</div>

```ts
  <Menu rounded padding>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
        Item 1
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
        Item 2
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg>
        Item 3
    </btn>
  </Menu>
```

## Compact

<div class="flex flex-wrap items-center gap-3">
  <Menu compact rounded padding>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
</div>

```ts
  <Menu compact rounded padding>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
```

## Compact responsive


Compact if screen is smaller then large screen (lg).

<div class="flex flex-wrap items-center gap-3">
  <Menu compact="lg" rounded padding>
    <btn menu-item>Responsive 1</btn>
    <btn menu-item>Responsive 2</btn>
    <btn menu-item>Responsive 3</btn>
  </Menu>
</div>

```ts
  <Menu compact="lg" rounded padding>
    <btn menu-item>Responsive 1</btn>
    <btn menu-item>Responsive 2</btn>
    <btn menu-item>Responsive 3</btn>
  </Menu>
```


## Disabled

<div class="flex flex-wrap items-center gap-3">
  <Menu rounded padding>
    <btn menu-item class="disabled">Disabled 1</btn>
    <btn menu-item class="disabled">Disabled 2</btn>
    <btn menu-item class="disabled">Disabled 3</btn>
  </Menu>
</div>

```ts
  <Menu rounded padding>
    <btn menu-item class="disabled">Disabled 1</btn>
    <btn menu-item class="disabled">Disabled 2</btn>
    <btn menu-item class="disabled">Disabled 3</btn>
  </Menu>
```

## Horizontal

<div class="flex flex-wrap items-center gap-3">
  <Menu horizontal rounded class="w-auto">
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
</div>

```ts
  <Menu horizontal rounded class="w-auto">
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <btn menu-item>Item 3</btn>
  </Menu>
```



## Horizontal responsive


Horizontal by default and vertical on small screen (sm).

<div class="flex flex-wrap items-center gap-3">
  <Menu horizontal="sm" rounded class="w-auto">
    <btn menu-item>Responsive 1</btn>
    <btn menu-item>Responsive 2</btn>
    <btn menu-item>Responsive 3</btn>
  </Menu>
</div>

```ts
  <Menu horizontal="sm" rounded class="w-auto">
    <btn menu-item>Responsive 1</btn>
    <btn menu-item>Responsive 2</btn>
    <btn menu-item>Responsive 3</btn>
  </Menu>
```

## Only icons

<div class="flex flex-wrap items-center gap-3">
  <Menu rounded padding class="w-auto">
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg>
    </btn>
  </Menu>
</div>

```ts
  <Menu rounded padding class="w-auto">
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
    </btn>
    <btn menu-item>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> </svg>
    </btn>
  </Menu>
```


## Menu title

<div class="flex flex-wrap items-center gap-3">
  <Menu padding>
    <span class="menu-title">Category</span>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <span class="menu-title">Other Category</span>
    <btn menu-item>Item 3</btn>
    <btn menu-item>Item 4</btn>
  </Menu>
</div>

```ts
  <Menu padding>
    <span class="menu-title">Category</span>
    <btn menu-item>Item 1</btn>
    <btn menu-item>Item 2</btn>
    <span class="menu-title">Other Category</span>
    <btn menu-item>Item 3</btn>
    <btn menu-item>Item 4</btn>
  </Menu>
```