<script setup>
import demoSizes from "./demo/Sizes.vue"
import demoCloseButton from "./demo/CloseButton.vue"
import demoNoBackdrop from "./demo/NoBackdrop.vue"
import demoNoOutside from "./demo/NoOutside.vue"
import demoHeadless from "./demo/Headless.vue"
import demoBackdropBlur from "./demo/BackdropBlur.vue"
</script>

# Modal component
## Basic usage

```ts
import Modal from 'sectionui'
```

## Sizes

<demoSizes/>

```ts
<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.small = true">Modal sm</btn>
    <btn @click="modal.medium = true">Modal md</btn>
    <btn @click="modal.large = true">Modal lg</btn>
    <Modal v-model:active="modal.small">
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.small = false">Dismiss!</btn>
      </template>
    </Modal>
    <Modal v-model:active="modal.medium" size="md">
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.medium = false">Dismiss!</btn>
      </template>
    </Modal>
    <Modal v-model:active="modal.large" size="lg">
      <template #header> The important modal header </template>
      <template #body> The modal body</template>
      <template #footer="footerProps">
        <btn @click="modal.large = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
```

## Close Button

<div class="flex flex-wrap items-center gap-3">
  <btn @click="modal.closeBtn = true">Close btn</btn>
</div>

<demoCloseButton/>

```ts
<template>
  <div class="flex flex-wrap items-center gap-3">
    <btn @click="modal.closeBtn = true">Close btn</btn>
    <Modal v-model:active="modal.closeBtn" close-btn>
      <template #header> The important modal header </template>
      <template #body> The modal body </template>
      <template #footer="footerProps">
        <btn @click="modal.closeBtn = false">Dismiss!</btn>
      </template>
    </Modal>
  </div>
</template>
```

## No outside


<demoNoOutside/>

## No Backdrop

<demoNoBackdrop/>


## Headless


<demoHeadless/>


## Backdrop Blur

It is possible to use windiCSS backdrop classes 
<code><span class="hover:underline text-primary-200">[WindiCSS](https://windicss.org/utilities/filters/backdrop-filter.html)<span><code>


<demoBackdropBlur/>

