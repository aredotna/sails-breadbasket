describe('registerCollection', function () {

	it('should not hang or encounter any errors', function (cb) {
		var adapter = require('../index.js');
		adapter.registerCollection({
			identity: 'foo'
		}, cb);
	});

	it('should create a model', function(cb){
		var adapter = require('../index.js');
		var model;
		response = adapter.create(
			'collections',
			{title: 'new title', description:'this is a description'},
			function(e, body){
				console.log('body', body);
				cb();
			}
		);
	});

	// e.g.
	// it('should create a mysql connection pool', function () {})
	// it('should create an HTTP connection pool', function () {})
	// ... and so on.
});