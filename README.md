# zen-tab-v1.0
simple tab library with adaptive height and fading transition

## How to use
=> Include jQuery file (minimum jQuery-1.5.1.min.js)<br />
=> Include zen-tab.js <br />
=> Include zen-tab.css <br />
=> Here is the Markup for Tabs structure:<br />

```html
<div class="zen-tab-container">
  <div class="tab-header">
    <div class="header-text aktif" target="#ct1">...</div>
    <div class="header-text" target="#ct2">...</div>
  </div>
  <div class="tab-content">
    <div class="content aktif tampil" id="ct1">
      <div class="inner">
        ....
      </div>
    </div>
    <div class="content" id="ct2">
      <div class="inner">
        ....
      </div>
    </div>
  </div>
</div>
```

=> Call the easyResponsiveTabs function: <br />
```js
$(".zen-tab-container").zen_tab();
```

## Demo
[https://codepen.io/zenasen/pen/GRKmwXb?editors=1010](https://codepen.io/zenasen/pen/GRKmwXb?editors=1010)

