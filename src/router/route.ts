const route = [
  {
    path: '/',
    component: () => import('../view/index.vue'),
    meta: { title: 'Index' },
  },
  {
    path: '/section',
    component: () => import('../view/section.vue'),
    meta: { title: 'Section' },
    children: [
      {
        path: '/section/',
        meta: { title: 'Introduce' },
        children: [
          {
            path: '/section/started',
            component: () => import('../page/started.md'),
            meta: { title: 'Started' },
          },
          {
            path: '/section/usage',
            component: () => import('../page/usage.md'),
            meta: { title: 'Usage' },
          },
          {
            path: '/section/theme',
            component: () => import('../page/theme.md'),
            meta: { title: 'Theme' },
          },
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Element' },
        children: [
          {
            path: '/section/button',
            component: () => import('../pecket/Element/Button/button.md'),
            meta: { title: 'Button' },
          },
          {
            path: '/section/input',
            component: () => import('../pecket/Element/Input/input.md'),
            meta: { title: 'Input' },
          },
          {
            path: '/section/toggle',
            component: () => import('../pecket/Element/Toggle/toggle.md'),
            meta: { title: 'Toggle' },
          }
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Section' },
        children: [
          {
            path: '/section/dropdown',
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
            meta: { title: 'Dropdown' },
          },
          {
            path: '/section/menu',
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
            meta: { title: 'Menu' },
          }
        ]
      },
      {
        path: '/section/',
        meta: { title: 'Pattern' },
        children: [
          {
            path: '/section/dropdown',
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
            meta: { title: 'Form' },
          },
          {
            path: '/section/menu',
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
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
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
            meta: { title: 'Blog' },
          },
          {
            path: '/section/menu',
            component: () => import('../pecket/Section/Dropdown/dropdown.md'),
            meta: { title: 'Document' },
          }
        ]
      },
    ]
  }
]
export default route