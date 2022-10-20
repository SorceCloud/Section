# Menu component

## Basic usage

```
import Menu from 'sectionui'
```

## Basic

<div class="flex flex-wrap items-center gap-3">
  <mnu shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </mnu>
</div>

```
  <Menu shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
```

## Hover border

<div class="flex flex-wrap items-center gap-3">
  <mnu hover-border rounded shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </mnu>
</div>

```
  <Menu hover-border rounded shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
```

## Rounded & Padding

<div class="flex flex-wrap items-center gap-3">
  <mnu rounded padding shadow>
    <btn item>
      <icn name="user" light lg/>
        Item 1
    </btn>
    <btn item>
      <icn name="timer" light lg/>
        Item 2
    </btn>
    <btn item>
      <icn name="gem" light lg/>
        Item 3
    </btn>
  </mnu>
</div>

```
  <Menu rounded padding shadow>
    <btn item>
      <icn name="user" light lg/>
        Item 1
    </btn>
    <btn item>
      <icn name="timer" light lg/>
        Item 2
    </btn>
    <btn item>
      <icn name="gem" light lg/>
        Item 3
    </btn>
  </Menu>
```

## Compact

<div class="flex flex-wrap items-center gap-3">
  <mnu compact rounded shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </mnu>
</div>

```
  <Menu compact rounded shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
```

## Compact responsive


Compact if screen is smaller then large screen (lg).

<div class="flex flex-wrap items-center gap-3">
  <mnu compact="lg" rounded shadow>
    <btn item>Responsive 1</btn>
    <btn item>Responsive 2</btn>
    <btn item>Responsive 3</btn>
  </mnu>
</div>

```
  <Menu compact="lg" rounded shadow>
    <btn item>Responsive 1</btn>
    <btn item>Responsive 2</btn>
    <btn item>Responsive 3</btn>
  </Menu>
```


## Disabled

<div class="flex flex-wrap items-center gap-3">
  <mnu rounded>
    <btn item class="disabled">Disabled 1</btn>
    <btn item class="disabled">Disabled 2</btn>
    <btn item class="disabled">Disabled 3</btn>
  </mnu>
</div>

```
  <Menu rounded shadow>
    <btn item class="disabled">Disabled 1</btn>
    <btn item class="disabled">Disabled 2</btn>
    <btn item class="disabled">Disabled 3</btn>
  </Menu>
```

## Horizontal

<div class="flex flex-wrap items-center gap-3">
  <mnu horizontal rounded class="w-auto" shadow>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </mnu>
</div>

```
  <Menu horizontal rounded class="w-auto">
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <btn item>Item 3</btn>
  </Menu>
```

## Horizontal responsive

Horizontal by default and vertical on small screen (sm).

<div class="flex flex-wrap items-center gap-3">
  <mnu horizontal="sm" rounded class="w-auto" shadow>
    <btn item>Responsive 1</btn>
    <btn item>Responsive 2</btn>
    <btn item>Responsive 3</btn>
  </mnu>
</div>

```
  <Menu horizontal="sm" rounded class="w-auto">
    <btn item>Responsive 1</btn>
    <btn item>Responsive 2</btn>
    <btn item>Responsive 3</btn>
  </Menu>
```

## Only icons

<div class="flex flex-wrap items-center gap-3">
  <mnu rounded padding class="w-auto" shadow>
    <btn item>
      <icn name="user" light lg/>
    </btn>
    <btn item>
      <icn name="timer" light lg/>
    </btn>
    <btn item>
      <icn name="gem" light lg/>
    </btn>
  </mnu>
</div>

```
  <Menu rounded padding class="w-auto" shadow>
    <btn item>
      <icn name="user" light lg/>
    </btn>
    <btn item>
      <icn name="timer" light lg/>
    </btn>
    <btn item>
      <icn name="gem" light lg/>
    </btn>
  </Menu>
```

## Menu title

<div class="flex flex-wrap items-center gap-3">
  <mnu padding shadow>
    <span class="menu-title">Category</span>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <span class="menu-title">Other Category</span>
    <btn item>Item 3</btn>
    <btn item>Item 4</btn>
  </mnu>
</div>

```
  <Menu padding shadow>
    <span class="menu-title">Category</span>
    <btn item>Item 1</btn>
    <btn item>Item 2</btn>
    <span class="menu-title">Other Category</span>
    <btn item>Item 3</btn>
    <btn item>Item 4</btn>
  </Menu>
```