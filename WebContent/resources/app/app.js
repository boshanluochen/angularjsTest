(function() {
	var app = angular.module('myApp', []);
	
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'balabala...',
		canPurchase: false
	};
	
	app.controller('StoreController', function() {
		this.product = gem;
	});
})();
