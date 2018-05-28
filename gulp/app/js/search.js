;(function($) {

	$(function() {

		var $searchBox = $('.js-search-box'),
			$selectNumChild = $searchBox.find('.js-numchild').find('select'),
			$numChildElm = $searchBox.find('.js-childage-modal').find('.js-childage-elm'),
			$numChildText = $searchBox.find('.js-numchild-text').find('span'),
			$modalTrigger = $searchBox.find('.js-childmodal-trigger'),
			$inputHiddenAge = $searchBox.find('.js-childages');

		$modalTrigger.modal(
			{
				complete: function() {
					var $numInput = $numChildElm.find('input'),
						ageArr = [],
						ageStr = '';

					$.each($numInput, function(i, el) {
						ageArr.push($(el).val());
					});

					ageStr = ageArr.join(',');
					$numChildText.html(ageStr);
					$inputHiddenAge.val(ageStr);
				}
			}
		);

		$selectNumChild.on('change', function() {
			var arr = [],
				numChild = $selectNumChild.val() - 0;

			$numChildText.empty();

			if (!numChild) return;

			for (var i = 0; i < numChild; i++) {
				if (i === 0 || i % 6 === 0) {
					arr.push('<div class="row">');
				}
				if (i !== 0 && i % 5 === 0) {
					arr.push('</div>');
				}

				arr.push('<div class="col s2"><label>Child '+ (i + 1) + '</label><input type="number" name="child' + (i + 1) + '" min="0" max="12" class="center-align"></div>');
			}

			$numChildElm.html(arr.join(''));
			$modalTrigger.trigger('click');
		});
	});

})(jQuery);