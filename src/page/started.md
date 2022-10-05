# Getting Started

<br />

👉 Before you start, make sure that you have <code><span class="hover:underline text-primary-200">[Vue 3](https://vuejs.org)</span></code> and <code><span class="hover:underline text-primary-200">[WindiCSS](https://windicss.org)</span></code> installed.

## Installation

```js
npm i vue-windi
```

<br />
Then add VueWindi to your <code>windi.config.js</code> files:

## Configuration

```js
import vueWindi from "vue-windi/plugin";

export default {
  darkMode: "class",
  plugins: [vueWindi],
};
```

<br />
Import VueWindi CSS to <code>main.js</code> above the windiCSS import

```js
import "vue-windi/css";
import "virtual:windi.css";
```
