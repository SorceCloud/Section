# Color

<br />

Button component with multiple styles, colors and sizes.

## Basic usage

<div>
  <h2 class="font-semibold text-sm mt-10">Colors</h2>
  <div class="box-component">
    <div class="flex flex-wrap gap-2">
      <div>
        <div class="h-15 w-30 bg-neutral flex justify-center items-center rounded-t-$rounded-btn">
        <div class="text-neutral-content text-sm">neutral</div>
      </div>
      <div class="h-15 w-30 bg-neutral-focus flex justify-center items-center rounded-b-$rounded-btn">
        <div class="text-neutral-content text-sm">neutral-focus</div>
      </div>
    </div>
    <div>
      <div class="h-15 w-30 bg-primary flex justify-center items-center rounded-t-$rounded-btn">
        <div class="text-primary-content text-sm">primary</div>
      </div>
      <div class="h-15 w-30 bg-primary-focus flex justify-center items-center rounded-b-$rounded-btn">
        <div class="text-primary-content text-sm">primary-focus</div>
      </div>
    </div>
    <div>
      <div class="h-15 w-30 bg-secondary flex justify-center items-center rounded-t-$rounded-btn">
        <div class="text-secondary-content text-sm">secondary</div>
      </div>
      <div class="h-15 w-30 bg-secondary-focus flex justify-center items-center rounded-b-$rounded-btn">
        <div class="text-secondary-content text-sm">secondary-focus</div>
      </div>
    </div>
    <div>
      <div class="h-15 w-30 bg-accent flex justify-center items-center rounded-t-$rounded-btn">
        <div class="text-accent-content text-sm">accent</div>
      </div>
      <div class="h-15 w-30 bg-accent-focus flex justify-center items-center rounded-b-$rounded-btn">
        <div class="text-accent-content text-sm">accent-focus</div>
      </div>
    </div>
    <div>
      <div class="h-15 w-30 bg-success flex justify-center items-center rounded-t-$rounded-btn">
        <div class="text-success-content text-sm">success</div>
      </div>
      <div class="h-15 w-30 bg-success-focus flex justify-center items-center rounded-b-$rounded-btn">
        <div class="text-success-content text-sm">success-focus</div>
      </div>
    </div>
      <div>
        <div class="h-15 w-30 bg-error flex justify-center items-center rounded-t-$rounded-btn">
          <div class="text-error-content text-sm">error</div>
        </div>
        <div class="h-15 w-30 bg-error-focus flex justify-center items-center rounded-b-$rounded-btn">
          <div class="text-error-content text-sm">error-focus</div>
        </div>
      </div>
      <div>
        <div class="h-15 w-30 bg-warning flex justify-center items-center rounded-t-$rounded-btn">
          <div class="text-warning-content text-sm">warning</div>
        </div>
        <div class="h-15 w-30 bg-warning-focus flex justify-center items-center rounded-b-$rounded-btn">
          <div class="text-warning-content text-sm">warning-focus</div>
        </div>
      </div>
      <div>
        <div class="h-10 w-30 bg-base-100 flex justify-center items-center rounded-t-$rounded-btn">
          <div class="text-base-content text-sm">base-100</div>
        </div>
        <div class="h-10 w-30 bg-base-200 flex justify-center items-center">
          <div class="text-base-content  text-sm">base-200</div>
        </div>
        <div class="h-10 w-30 bg-base-300 flex justify-center items-center rounded-b-$rounded-btn">
          <div class="text-base-content  text-sm">base-300</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Primary Color

| Name         | Blue             | Teal | Rose | Violet | Orange |
| ------------ | ---------------- | ---- | ---- | ------ | ------ |
| primary      | #1d4ed8/blue-700 |
| secondary    | #374151          |
| accent       | #ffe999          |
| neutral      | #3d4451          |
| info         |                  |
| success      | #15803d          |
| warning      | #a16207          |
| error        | #b91c1c          |
| base-100     |                  |
| base-content |                  |

## Color System

color
color-focus
color-content

base-100
dark-base-100
base-content
dark-base-content

rounded-box
rounded-btn
rounded-badge