
'use strict';

$.ajax({
	url: '../dist/data/mydata.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		pokeTemplate(data);
	}
});

var pokeTemplate = function(data) {
	var local = 'images/',
	template = document.querySelector('#template').innerHTML,
	result = document.querySelector('.flex-container');
	$.each(data, function(index, value) {
		result.innerHTML += template
		.replace( /{{nat}}/, value.Nat)
		.replace( /{{name}}/, value.Pokemon)
		.replace( /{{gender}}/, value.Gender)
		.replace( /{{hp}}/, value.HP)
		.replace( /{{atk}}/, value.Atk)
		.replace( /{{def}}/, value.Def)
		.replace( /{{sd}}/, value.SD)
		.replace( /{{sa}}/, value.SA)
		.replace( /{{typei}}/, value.TypeI)
		.replace( /{{typeii}}/, value.TypeII)
		.replace( /{{evolvesatby}}/, value.EvolvesAtBy)
		.replace( /{{evolvesinto}}/, value.EvolvesInto)
		.replace( /{{image}}/, local+value.Image);
	});
}