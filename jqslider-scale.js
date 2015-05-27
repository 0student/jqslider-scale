/**
 * jqslider-scale
 * @licence MIT
 * @author mikhail krughkov
 * @lastmodified 20150522
 */
(function($) {
"use strict";
$.extend(true, $.ui.slider.prototype, {
	_scalePreConstruct: function () {
		var slider = this;
		slider._scale = {
			options: {
				min: slider.options.min,
				max: slider.options.max,
				step: slider.options.step
			},
			config: {
				styleClass: 'ui-slider-scale'
			},
			destroy: function () {
				this.find().remove();
			},
			init: function () {
				var markup = '<div class="' + this.config.styleClass + '">' + this.bars.create() + '</div>';
				slider.element.append(markup);
				this.find().on('click mousedown', function(e) {
					return false;
				});
			},
			find: function () {
				return slider.element.find('.' + this.config.styleClass);
			},
			bars: {
				create: function () {
					var opt = slider._scale.options, min = opt.min, max = opt.max, step = opt.step;
					var options = slider.options, absMin = options.min, absMax = options.max;
					var markup = '';
					for (var value = min; value <= max; value+= step) {
						// beyound slider.min - continue
						if (value < absMin) {
							continue;
						}
						// above slider.max - terminate
						if (value > absMax) {
							break;
						}
						markup += this._create(value);
					}
					return markup;
				},
				_create: function (value) {
					var opt = slider._scale.options, formatLabel = opt.formatLabel ? opt.formatLabel : function(value) {return value};
					return '<div class="bar" style="left:' + this._position(value) + '">'
						+ '<div class="bar-icon">|</div>'
						+ '<div class="bar-label">' + formatLabel(value) + '</div>'
						+ '</div>';
				},
				_position: function (value) {
					var valueOnSlider = value - slider.options.min;
					return (valueOnSlider / (slider.options.max - slider.options.min) *100).toFixed(4) + '%';
				}
			}

		}
	},

	scale: function(settings) {
		this._scalePreConstruct();
		var slider = this, self = slider._scale;

		$.extend(self.options, settings);

		self.destroy();
		self.init();
	}

});
})(jQuery);
