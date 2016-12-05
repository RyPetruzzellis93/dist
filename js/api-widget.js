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
				.replace( /{{Wtypei}}/, data.types[0].type.name)
				.replace( /{{Wtypeii}}/, "N/A")
				.replace( /{{Wsprite}}/, data.sprites.front_default);

			} else {

				widgResult.innerHTML = widget
				.replace( /{{Wnat}}/, data.id)
				.replace( /{{Wname}}/, data.name)
				.replace( /{{Wheight}}/, data.height)
				.replace( /{{Wweight}}/, data.weight)
				.replace( /{{Wtypei}}/, data.types[0].type.name)
				.replace( /{{Wtypeii}}/, data.types[1].type.name)
				.replace( /{{Wsprite}}/, data.sprites.front_default);

			}
			
			var ctx = document.getElementById("myChart");
			var myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ["Speed", "Spc Def", "Spc Atk", "Defense", "Attack", "Hit Pts"],
					datasets: [{
						label: 'STATS FOR '+ data.name.toUpperCase(),
						data: [data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat],
						backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero:true
							}
						}]
					}
				}
			});
		};

		function getData(urlStr) {
			$.ajax({
				url: urlStr,
				success: widgetTemplate
			});
		}
	});

})();


