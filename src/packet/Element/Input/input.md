# Input component

## Basic usage

```ts
import { ipt } from 'sectionui'
```

## Basic

<div class="flex flex-wrap items-center gap-3">
  <ipt placeholder="Type here..." />
</div>

```ts
  <ipt placeholder="Type here..." />
```

## No Border

<div class="flex flex-wrap items-center gap-3 bg-base-gray-200/30 pl-2 py-3 rounded-$rounded-btn">
  <ipt :bordered="false" placeholder="No Border..." />
</div>

```ts
  <ipt :bordered="false" placeholder="No Border..." />
```

## Ghost

<div class="flex flex-wrap items-center gap-3 bg-base-gray-200/20 pl-2 py-3 rounded-$rounded-btn">
  <ipt :bordered="false" ghost placeholder="Ghost..." />
</div>

```ts
  <ipt :bordered="false" ghost placeholder="Ghost..." />
```

## Sizes

<div class="flex flex-wrap gap-2 items-center">
  <ipt size="xs" placeholder="Type here..." />
  <ipt size="sm" placeholder="Type here..." />
  <ipt size="md" placeholder="Type here..." />
  <ipt size="lg" placeholder="Type here..." />
</div>

```ts
  <ipt size="xs" placeholder="Type here..." />
  <ipt size="sm" placeholder="Type here..." />
  <ipt size="md" placeholder="Type here..." />
  <ipt size="lg" placeholder="Type here..." />
```
## Colors

<div class="flex flex-wrap items-center gap-3">
  <ipt color="primary" placeholder="Type here..." />
  <ipt color="secondary" placeholder="Type here..." />
  <ipt color="success" placeholder="Type here..." />
  <ipt color="warning" placeholder="Type here..." />
  <ipt color="error" placeholder="Type here..." />
</div>

```ts
  <ipt color="primary" placeholder="Type here..." />
  <ipt color="secondary" placeholder="Type here..." />
  <ipt color="success" placeholder="Type here..." />
  <ipt color="warning" placeholder="Type here..." />
  <ipt color="error" placeholder="Type here..." />
```

## Label

<div class="flex flex-wrap items-center gap-3">
  <ipt label="Your name" placeholder="With label here..."/>
</div>

```ts
  <ipt label="Your name" placeholder="With label here..."/>
```
## Ghost

<div class="flex flex-wrap items-center gap-3 bg-base-gray-200/20 pl-2 py-3 rounded-$rounded-btn">
    <ipt :bordered="false" ghost placeholder="Ghost..." />
</div>

```ts
  <ipt :bordered="false" ghost placeholder="Ghost..." />
```
## Disabled

<div class="flex flex-wrap items-center gap-3">
  <ipt disabled label="Disabled" placeholder="Type here..." />
  <ipt disabled label="Disabled" value="disabled with text" />
</div>

```ts
  <ipt disabled label="Disabled" placeholder="Type here..." />
  <ipt disabled label="Disabled" value="disabled with text" />
```
