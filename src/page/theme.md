<script setup>
import { useTheme } from "/.vitepress/theme/composables/theme"
import { WMenu, WButton } from "vue-windi"

const { changeTheme } = useTheme()


</script>

# Themes

<br />

<div class="bg-danger-200/10 rounded-$rounded-btn p-5 text-danger-200">
    Themes are not defined yet, existing themes are for testing purposes only, they will be changed in the next versions.
</div>

<br />

## List of Themes

Blue, teal, rose, violet and orange.

<br />

<WMenu horizontal compact  class="border rounded-$rounded-btn  w-auto !bg-base-200 shadow-0">
<WButton menu-item @click="changeTheme('theme-default')"
><span class="theme-blue rounded-[0.5rem] bg-blue-700 h-7 w-7 md:(h-10 w-10)"></span>
</WButton>
<WButton menu-item @click="changeTheme('theme-teal')"
><span
    class="theme-teal rounded-$rounded-btn bg-teal-700 h-7 w-7 md:(h-10 w-10)"
></span>
</WButton>
<WButton menu-item @click="changeTheme('theme-rose')"
><span
    class="theme-rose rounded-$rounded-btn bg-rose-700 h-7 w-7 md:(h-10 w-10)"
></span>
</WButton>
<WButton menu-item @click="changeTheme('theme-violet')"
><span
    class="theme-violet rounded-$rounded-btn bg-violet-700 h-7 w-7 md:(h-10 w-10)"
></span>
</WButton>
<WButton menu-item @click="changeTheme('theme-orange')"
><span
    class="theme-orange rounded-$rounded-btn bg-orange-700 h-7 w-7 md:(h-10 w-10)"
></span>
</WButton> 
</WMenu>

<br /> <br />

## Import themes

To import themes you need to add the code bellow in <code>windi.config.js</code> file.

```js
import vueWindi from "./src/plugin";

export default {
  plugins: [vueWindi],

  vueWindi: {
    themes: ["blue", "teal", "rose", "violet", "orange"],
  },
};
```

When there are no themes imported, VueWindi will use the default theme (blue).

<br />

## Customize an existing theme

To customize an existing theme, you can pass an object to vueWindi.themes and replace existing variables.

```js
import  vueWindi  from "./src/plugin";

export default {
  plugins: [vueWindi],

  vueWindi: {
     {
        "primary-100": "#2563eb",
        "primary-200": "#1d4ed8",
        "primary-300": "#1e40af"
      },
    themes: [ "teal"]
  }
};

```

## VueWindi CSS variables

```js
    "primary-100": "#2563eb",
    "primary-200": "#1d4ed8",
    "primary-300": "#1e40af",

    "secondary-100": "#4b5563",
    "secondary-200": "#374151",
    "secondary-300": "#1f2937",

    "success-100": "#16a34a",
    "success-200": "#15803d",
    "success-300": "#166534",

    "danger-100": "#dc2626",
    "danger-200": "#b91c1c",
    "danger-300": "#991b1b",

    "warning-100": "#ca8a04",
    "warning-200": "#a16207",
    "warning-300": "#854d0e",

    "base-100": "#fcfcfc",
    "base-200": "#fafafa",
    "base-300": "#f8f9fa",

    "dark-base-100": "#181818",
    "dark-base-200": "#151414",
    "dark-base-300": "#0f0f0f",

    "base-text": "#1f2937",
    "dark-base-text": "#f3f4f6",

    "rounded-box": "1rem",
    "rounded-btn": "0.5rem",
    "rounded-badge": "1.9rem",
```
