;(function($) {
    'use strict';

    // Rate slider
    $(function() {
        var slider = document.getElementById('rate'),
            minRate = 1,
            maxRate = 5;

        if (slider) {
          noUiSlider.create(slider, {
              start: [minRate, maxRate],
              connect: true,
              step: 0.5,
              range: {
                  'min': 0,
                  'max': 5
              },
              format: wNumb({
                  decimals: 1
              })
          });

          slider.noUiSlider.on('update', function(values) {
              $('.minrate').html(values[0]);
              $('.maxrate').html(values[1]);
              $('input[name=minrate]').val(values[0]);
              $('input[name=maxrate]').val(values[1]);
          });

        }
    });

})(jQuery);
