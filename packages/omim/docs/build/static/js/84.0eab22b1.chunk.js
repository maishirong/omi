webpackJsonp([84],{60:function(l,d){l.exports='## Layout Grid\r\n\r\nMaterial design\u2019s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.\r\n\r\n## Usage \r\n\r\n```js\r\nimport * as css from \'@omim/core/layout-grid\'\r\n```\r\n\r\nThen using class in HTML:\r\n\r\n```html\r\n<div>\r\n    <h3 class="mdc-typography--subtitle1">Columns</h3>\r\n    <div class="mdc-layout-grid demo-grid">\r\n        <div class="mdc-layout-grid__inner">\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 demo-cell"></div>\r\n        </div>\r\n    </div>\r\n    <h3 class="mdc-typography--subtitle1">Grid Left Alignment</h3>\r\n    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>\r\n    <div class="mdc-layout-grid mdc-layout-grid--align-left demo-grid demo-grid--alignment">\r\n        <div class="mdc-layout-grid__inner">\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n        </div>\r\n    </div>\r\n    <h3 class="mdc-typography--subtitle1">Right Alignment</h3>\r\n    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>\r\n    <div class="mdc-layout-grid mdc-layout-grid--align-right demo-grid demo-grid--alignment">\r\n        <div class="mdc-layout-grid__inner">\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n            <div class="mdc-layout-grid__cell demo-cell"></div>\r\n        </div>\r\n    </div>\r\n    <h3 class="mdc-typography--subtitle1">Cell Alignment</h3>\r\n    <p class="mdc-typography--body2">Cell alignment requires a cell height smaller than the inner height of the\r\n        grid.</p>\r\n    <div class="mdc-layout-grid demo-grid demo-grid--cell-alignment">\r\n        <div class="mdc-layout-grid__inner demo-inner">\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-top demo-cell demo-cell--alignment"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle demo-cell demo-cell--alignment"></div>\r\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-bottom demo-cell demo-cell--alignment"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n```'}});
//# sourceMappingURL=84.0eab22b1.chunk.js.map