function round(value, precision) {
	return Number(Math.round(value + 'e'+ precision) + 'e-' + precision);
}

function makeRequest (method, url, done) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.onload = function () {
		done(null, xhr.response);
	};
	xhr.onerror = function () {
		done(xhr.response);
	};
	xhr.send();
}

// Get our weather report
makeRequest('GET', 'https://www.metaweather.com/api/location/2383489/', function (err, data) {
	if (err) { throw err; }
  
  	alert(data);
	let data = JSON.parse(data);
	let curtemp = round(data.consolidated_weather[0].the_temp * (9/5) + 32, 1);
	let maxtemp = round(data.consolidated_weather[0].max_temp * (9/5) + 32, 1);

	forcast += 'Currently its '+curtemp+ ' degrees in Colorado Springs. Todays high is expected to be '+maxtemp+' degrees.';
	alert(forcast);
});
