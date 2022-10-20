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

| Name              | Blue               | Teal    | Rose    | Violet  | Orange  |
| ----------------- | ------------------ | ------- | ------- | ------- | ------- |
| primary           | #1d4ed8/blue-700   | #0f766e | #e11d48 | #7c3aed | #ea580c |
| primary-focus     | #1e40af/blue-800   | #115e59 |
| primary-content   | #ffffff            | #ffffff |
| secondary         | #374151/gray-700   | #374151 |
| secondary-focus   |                    |         |
| seconfary-content | #ffffff            | #ffffff |
| accent            | #fef3c7/yellow-100 | #ffe99  |
| accent-focus      |                    |         |
| accent-content    |                    |         |
| neutral           | #1f2937/gray-800   |         |
| neutral-focus     |                    |         |
| neutral-content   | #ffffff            |         |
| success           | #059669/green-600  |         |
| success-focus     |                    |         |
| success-content   | #ffffff            |         |
| warning           | #f97316/orange-500 |         |
| warning-focus     |                    |         |
| warning-content   | #ffffff            |         |
| error             | #b91c1c/red-700    |         |
| error-focus       |                    |         |
| error-content     | #ffffff            |         |
| base-100          | #fcfcfc            |         |         |         | #f8fafc |
| base-200          | #fafafa            |         |
| base-300          | #f8f9fa            |         |
| base-content      | #1f2937            |         |         |         | #1f2937 |
| dark-base-100     | #181818            |         |         |         | #111827 |
| dark-base-200     | #151414            |         |
| dark-base-300     | #0f0f0f            |         |
| dark-base-content | #f3f4f6            |         |         |         | #f3f4f6 |
| rounded-box       | 1rem               | 0rem    | 1rem    |
| rounded-btn       | 0.5rem             | 0.15rem | 0.5rem  |
| rounded-badge     | 1.9rem             | 0rem    | 1.9rem  |

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