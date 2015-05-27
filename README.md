# Flexible scale extension to jqueryui slider. Inspired by http://simeydotme.github.io/jQuery-ui-Slider-Pips/
Simplified, performant. Accepts options (min, max, step) which decouples it from jqueryui slider options.

###Preview
![Preview](https://cloud.githubusercontent.com/assets/9401532/7849008/cef186f2-0485-11e5-8167-eda19ec9a8a3.png)

###Usage
```html
<div id="slider"></div>
```

```javascript
$('#slider').slider('scale', {
    min: 200, max: 800, step: 150,
    formatLabel: function(value) {
        return '<span class="label">' + value + '</span>'
    }
});
```
