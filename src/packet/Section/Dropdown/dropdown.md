# Dropdown component

## Basic usage

```ts
import Dropdown from "sectionui"
```

## Headless dropdown

<div class="flex flex-wrap items-center gap-3">
  <Dropdown placement="bottom-start">
    <template #trigger="{ active }">
      <btn :active="active">Bottom-start</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn :active="active">Bottom-end</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="top-start">
    <template #trigger="{ active }">
      <btn :active="active">Top-start</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="top-end">
    <template #trigger="{ active }">
      <btn :active="active">Top-end</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="bottom-start">
    <template #trigger="{ active }">
      <div>Trigger with div</div>
    </template>
            test
  </Dropdown>
</div>

```vue
  <Dropdown placement="bottom-start">
    <template #trigger="{ active }">
      <btn :active="active">Bottom-start</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="bottom-end">
    <template #trigger="{ active }">
      <btn :active="active">Bottom-end</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="top-start">
    <template #trigger="{ active }">
      <btn :active="active">Top-start</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="top-end">
    <template #trigger="{ active }">
      <btn :active="active">Top-end</btn>
    </template>
            test
  </Dropdown>
  <Dropdown placement="bottom-start">
    <template #trigger="{ active }">
      <div>Trigger with div</div>
    </template>
            test
  </Dropdown>
```

## With menu 

Make sure that you have imported <code>WMenu</code> and <code>WButton</code> to you vue file

<div class="flex flex-wrap items-center gap-3">
  <Dropdown>
    <template #trigger="{ active }">
      <btn :active="active">With Menu</btn>
    </template>
    <Menu rounded padding>
      <btn item>Item 1</btn>
      <btn item>Item 2</btn>
      <btn item>Item 3</btn>
    </Menu>
  </Dropdown>
</div>

```vue
<Dropdown>
  <template #trigger="{ active }">
    <btn :active="active">With Menu</btn>
  </template>
  <Menu rounded padding>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
</Dropdown>
```

## Hover

<div class="flex flex-wrap items-center gap-3">
  <Dropdown hover>
  <template #trigger="{ active }">
    <btn :active="active">Hover</btn>
  </template>
    <Menu rounded padding>
      <btn item>Item 1</btn>
      <btn item>Item 2</btn>
      <btn item>Item 3</btn>
    </Menu>
  </Dropdown>
</div>

```vue
<Dropdown>
  <template #trigger="{ active }">
    <btn :active="active">With Menu</btn>
  </template>
  <Menu rounded padding>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
</Dropdown>
```