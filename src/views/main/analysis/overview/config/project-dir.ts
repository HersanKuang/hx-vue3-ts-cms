export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css
│   │   │   └── index.css
│   │   └── img
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── Breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── Card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── Code.vue
│   │   ├── count-up
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── Countup.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── Descriptions.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEcharts.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── BaseEchart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── Form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── Table.vue
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── Textlink.vue
│   ├── components
│   │   ├── nav-header
│   │   │   │
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── NavHeader.vue
│   │   │       └── UserInfo.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── NavMenu.vue
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageContent.vue
│   │   ├── page-echarts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── BarEchart.vue
│   │   │   │   ├── LineEchart.vue
│   │   │   │   ├── MapEchart.vue
│   │   │   │   ├── PieEchart.vue
│   │   │   │   └── RoseEchart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageModal.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageSearch.vue
│   │   └── statistical-panel
│   │       ├── index.ts
│   │       └── src
│   │           └── StatisticalPanel.vue
│   ├── global
│   │   ├── index.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── usePageModal.ts
│   │   ├── usePageSearch.ts
│   │   └── usePermission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── analysis.ts
│   │   │   └── system
│   │   │       └── system.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── index.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── analysis.ts
│   │   │   │   └── types.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-format.ts
│   │   └── map-menus.ts
│   └── views
│       ├── login
│       │   ├── cpns
│       │   │   ├── LoginAccount.vue
│       │   │   ├── LoginPanel.vue
│       │   │   └── LoginPhone.vue
│       │   ├── Login.vue
│       │   └── config
│       │       ├── account-config.ts
│       │       └── phone-config.ts
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── Dashboard.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── index.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── Overview.vue
│       │   ├── main.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── Category.vue
│       │   │   │   └── config
│       │   │   │       ├── content.config.ts
│       │   │   │       └── search.config.ts
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── Goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── Chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── List.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── Department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── Menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── Role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── User.vue
│       └── not-found
│           └── NotFound.vue
├── tsconfig.json
└── vue.config.js
`
