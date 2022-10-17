const route = [
  {
    path: '/',
    component: () => import('../view/index.vue'),
    meta: { title: 'Index' },
  },
  {
    path: '/section',
    meta: { title: 'Section' },
    children: [
      {
        path: '/section/',
        meta: { title: 'Introduce' },
        children: [
          {
            path: '/section/started',
            component: () => import('../packet/Intro/started.md'),
            meta: { title: 'Started' },
          },
          {
            path: '/section/usage',
            component: () => import('../packet/Intro/usage.md'),
            meta: { title: 'Usage' },
          },
          {
            path: '/section/theme',
            component: () => import('../packet/Intro/theme.md'),
            meta: { title: 'Theme' },
          },
          {
            path: '/section/color',
            component: () => import('../packet/Intro/color.md'),
            meta: { title: 'Color' },
          },
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Element' },
        children: [
          {
            path: '/section/button',
            component: () => import('../packet/Element/Button/button.md'),
            meta: { title: 'Button' },
          },
          {
            path: '/section/input',
            component: () => import('../packet/Element/Input/input.md'),
            meta: { title: 'Input' },
          },
          {
            path: '/section/checkbox',
            component: () => import('../packet/Element/Checkbox/checkbox.md'),
            meta: { title: 'Checkbox' },
          },
          {
            path: '/section/toggle',
            component: () => import('../packet/Element/Toggle/toggle.md'),
            meta: { title: 'Toggle' },
          }
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Section' },
        children: [
          {
            path: '/section/buttongroup',
            component: () => import('../packet/Section/ButtonGroup/ButtonGroup.md'),
            meta: { title: 'ButtonGroup' },
          },
          {
            path: '/section/menu',
            component: () => import('../packet/Section/Menu/menu.md'),
            meta: { title: 'Menu' },
          },
          {
            path: '/section/dropdown',
            component: () => import('../packet/Section/Dropdown/dropdown.md'),
            meta: { title: 'Dropdown' },
          },
          {
            path: '/section/modal',
            component: () => import('../packet/Section/Modal/modal.md'),
            meta: { title: 'Modal' },
          },
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Pattern' },
        children: [
          {
            path: '/section/dropdown',
            component: () => import('../packet/Section/Dropdown/dropdown.md'),
            meta: { title: 'Form' },
          },
          {
            path: '/section/menu',
            component: () => import('../packet/Section/Dropdown/dropdown.md'),
            meta: { title: 'Drawer' },
          }
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Template' },
        children: [
          {
            path: '/section/dropdown',
            component: () => import('../packet/Section/Dropdown/dropdown.md'),
            meta: { title: 'Blog' },
          },
          {
            path: '/section/menu',
            component: () => import('../packet/Section/Dropdown/dropdown.md'),
            meta: { title: 'Document' },
          }
        ]
      },
    ]
  }
]
export default route