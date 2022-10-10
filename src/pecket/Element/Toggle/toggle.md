# Toggle component

## Basic usage

```ts
import { tgl } from "sectionui"
```

## Basic

<div class="flex flex-wrap items-center gap-3">
  <tgl checked />
  <tgl checked color="secondary" />
  <tgl checked color="success" />
  <tgl checked color="warning" />
  <tgl checked color="danger" />
</div>

## Sizes

<div class="flex flex-wrap items-center gap-3">
  <tgl checked size="xs" />
  <tgl checked size="sm" />
  <tgl checked />
  <tgl checked size="lg" />
</div>

## Disabled

<div class="flex flex-wrap items-center gap-3">
  <tgl disabled />
  <tgl disabled checked />
</div>

## Label

<div class="flex flex-wrap items-center gap-3">
  <div class="flex flex-col w-32">
    <label class="cursor-pointer flex select-none content-center py-2 px-1 justify-between">
      <span class="label-text">Label</span>
      <tgl checked />
    </label>
  </div>
</div>