var ConsoleSettings = {
	title: "BIMserver API",
	subtitle: "Execute your own calls and get to learn the way of the BIMserver",
	getBaseUrl: function(){
		return "http://sandbox.bimserver.org"
	},
	getStaticServerAddress: function(callback){
		var pathname = document.location.pathname;
		if (pathname.length > 13 && pathname.substring(pathname.length - 14) == "/apps/console/") {
			// We assume that Console is being served from a BIMserver and that this is also the BIMserver we would like to connect to
			var href = document.location.href; 
			callback(href.substring(0, href.indexOf("/apps/console/")));
		} else {
			// Return a default
			console.log("Trying to connect to http://localhost:8080, because we don't know where to find BIMserver", document.location);
			callback("http://localhost:8080");
		}
	},
	getVersion: function(){
		return "1.5";
	}, getServiceInterfaces: function(consoleObject, callback){
		var request = {
			request: {
				interface: "org.bimserver.MetaInterface",
				method: "getAllAsJson"
			}
		};
		consoleObject.call(request, function(data){
			callback(JSON.parse(data.response.result).services);
		});
	}
}