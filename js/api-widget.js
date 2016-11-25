;var module = (function(){
	'use strict';
	$(document).ready(function(){

		var form = $( ' #form-id ' );
		var source = $( ' #source ' );
		var urlStr = 'http://pokeapi.co/api/v2/pokemon/';
		var target = $( ' #target ' );

		form.on('submit',function(e) {
					e.preventDefault(); //need this shit!!!
					getData(urlStr + source.val());
					$( '#form-id' )[0].reset();
				});
		var widgetTemplate = function(data) {
			var widget = document.querySelector('#widget-template').innerHTML;
			var widgResult = document.querySelector('.widget-result');
				console.log(data);
	
			if(data.types[1] === undefined) {

			widgResult.innerHTML =	widget
				.replace( /{{Wnat}}/, data.id)
				.replace( /{{Wname}}/, data.name)
				.replace( /{{Wheight}}/, data.height)
				.replace( /{{Wweight}}/, data.weight)
				.replace( /{{WExperience}}/, data.base_experience)
				.replace( /{{Whp}}/, data.stats[5].base_stat)
				.replace( /{{Watk}}/, data.stats[4].base_stat)
				.replace( /{{Wdef}}/, data.stats[3].base_stat)
				.replace( /{{Wsd}}/, data.stats[1].base_stat)
				.replace( /{{Wsa}}/, data.stats[2].base_stat)
				.replace( /{{Wspeed}}/, data.stats[0].base_stat)
				.replace( /{{Wtypei}}/, data.types[0].type.name)
				.replace( /{{Wtypeii}}/, "N/A")
				.replace( /{{Wsprite}}/, data.sprites.front_default);

			} else {

			widgResult.innerHTML = widget
				.replace( /{{Wnat}}/, data.id)
				.replace( /{{Wname}}/, data.name)
				.replace( /{{Wheight}}/, data.height)
				.replace( /{{Wweight}}/, data.weight)
				.replace( /{{WExperience}}/, data.base_experience)
				.replace( /{{Whp}}/, data.stats[5].base_stat)
				.replace( /{{Watk}}/, data.stats[4].base_stat)
				.replace( /{{Wdef}}/, data.stats[3].base_stat)
				.replace( /{{Wsd}}/, data.stats[1].base_stat)
				.replace( /{{Wsa}}/, data.stats[2].base_stat)
				.replace( /{{Wspeed}}/, data.stats[0].base_stat)
				.replace( /{{Wtypei}}/, data.types[0].type.name)
				.replace( /{{Wtypeii}}/, data.types[1].type.name)
				.replace( /{{Wsprite}}/, data.sprites.front_default);

			}

		};

		function getData(urlStr) {
			$.ajax({
				url: urlStr,
				success: widgetTemplate
			});
		}
	});

})();


