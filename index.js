(function(){

	function mapProperties(args, fn){
		var object = args[0], i = 1, j = args.length, owner, keys, n, m;

		for(;i<j;i++){
			owner = args[i];
			if( Object(owner) != owner ) continue;
			keys = Object.keys(owner);
			n = 0;
			m = keys.length;

			for(;n<m;n++){
				fn(object, keys[n], owner);
			}
		}

		return object;
	}


	if( !Object.complete ){
		Object.complete = function(){
			return mapProperties(arguments, function(object, key, owner){
				if( false === name in object ){
					object[key] = owner[key];
				}
			});
		};
	}

})();


