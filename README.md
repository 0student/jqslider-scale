# Flexible scale extension to jqueryui slider. Inspired by http://simeydotme.github.io/jQuery-ui-Slider-Pips/
Simplified, performant. Accepts options (min, max, step) which decouples it from jqueryui slider options.

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
