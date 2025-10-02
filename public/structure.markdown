src/
│── assets/
│    └── scss/
│         ├── abstracts/     ← variáveis, mixins, funções
│         │    ├── _variables.scss
│         │    ├── _mixins.scss
│         │    └── _functions.scss
│         │
│         ├── base/          ← reset, tipografia, helpers globais
│         │    ├── _reset.scss
│         │    ├── _typography.scss
│         │    └── _base.scss
│         │
│         ├── layout/        ← estrutura da página
│         │    ├── _header.scss
│         │    ├── _footer.scss
│         │    └── _grid.scss
│         │
│         ├── components/    ← botões, cards, menus etc
│         │    ├── _button.scss
│         │    ├── _card.scss
│         │    └── _navbar.scss
│         │
│         ├── pages/         ← estilos por página
│         │    └── _home.scss
│         │
│         ├── utils/         ← responsividade, helpers extras
│         │    ├── _responsive.scss
│         │    └── _helpers.scss
│         │
│         └── style.scss     ← arquivo principal que importa tudo
│
└── main.js