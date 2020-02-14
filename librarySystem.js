(function (root, undefined) {

  var libraryStorage = {};

  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
    	if (Array.isArray(dependencies) && dependencies.length > 1) {
    		dependencies = dependencies.map(function (dependency) {
    			return libraryStorage[dependency];
    		});
    	}
    		libraryStorage[libraryName] = callback.apply(null, dependencies);	
    } else {
    	return libraryStorage[libraryName];
    }
  }
  root['librarySystem'] = librarySystem;

}(this));

