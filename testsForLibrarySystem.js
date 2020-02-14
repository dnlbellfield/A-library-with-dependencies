// inspired by ivo vermeer
/* global librarySystem:false, tests:false, eq:false */
/*
basic usage
librarySystem('app', [], function(){
	return {
		firstName: 'dan',
		lastName: 'bellfield'
	};
});
var app = librarySystem('app');
console.log('My name is ' + app.firstName + ' ' + app.lastName'); // My name is dan bellfield
 */
tests({
	'It should be able to load and retrieve a library.': function () {
		librarySystem('app', [], function app () {
			return 'I am the app';
		});
		eq(librarySystem('app'), 'I am the app');
	},
	'It should be able to inject dependencies into the callback.': function () {
		// Below is an example of a library that needs two dependencies.

librarySystem('name', [], function() {
  return 'Gordon';
});

librarySystem('company', [], function() {
  return 'Watch and Code';
});

librarySystem('workBlurb', ['name', 'company'], function(name, company) {
  return name + ' works at ' + company;
});

librarySystem('workBlurb'); // 'Gordon works at Watch and Code'
		eq(librarySystem('workBlurb'), 'Gordon works at Watch and Code');
	},
	'It should be able to load libraries.': function () {
		
librarySystem('name', [], function() {
  return 'Gordon';
});

librarySystem('company', [], function() {
  return 'Watch and Code';
});

librarySystem('workBlurb', ['name', 'company'], function(name, company) {
  return name + ' works at ' + company;
});

librarySystem('workBlurb'); // 'Gordon works at Watch and Code'
		eq(librarySystem('workBlurb'), 'Gordon works at Watch and Code');

}
	
});