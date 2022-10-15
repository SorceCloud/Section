# Button Group component

<br />

Button Group component with multiple styles, colors and sizes.

## Basic usage

```ts
import ButtonGroup from "sectionui"
```
## Basic
  
<h2 class="font-semibold text-sm mt-10">Button Group component</h2>
<div class="flex flex-raw space-x-5">
  <ButtonGroup>
    <btn color="primary">1</btn>
    <btn color="primary">2</btn>
    <btn color="primary" active>3</btn>
    <btn color="primary">4</btn>
  </ButtonGroup>
  <ButtonGroup>
    <btn variant="outline" color="primary">1</btn>
    <btn variant="outline" color="primary">2</btn>
    <btn variant="outline" color="primary" active>3</btn>
    <btn variant="outline" color="primary">4</btn>
  </ButtonGroup>
  <ButtonGroup>
    <btn variant="transparent" color="primary">1</btn>
    <btn variant="transparent" color="primary">2</btn>
    <btn variant="transparent" color="primary" active>3</btn>
    <btn variant="transparent" color="primary">3</btn>
  </ButtonGroup>
</div>

```vue
<ButtonGroup>
  <btn color="primary">1</btn>
  <btn color="primary">2</btn>
  <btn color="primary" active>3</btn>
  <btn color="primary">4</btn>
</ButtonGroup>
<ButtonGroup>
  <btn variant="outline" color="primary">1</btn>
  <btn variant="outline" color="primary">2</btn>
  <btn variant="outline" color="primary" active>3</btn>
  <btn variant="outline" color="primary">4</btn>
</ButtonGroup>
<ButtonGroup>
  <btn variant="transparent" color="primary">1</btn>
  <btn variant="transparent" color="primary">2</btn>
  <btn variant="transparent" color="primary" active>3</btn>
  <btn variant="transparent" color="primary">3</btn>
</ButtonGroup>
```