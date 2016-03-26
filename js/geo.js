
var geo = navigator.geolocation

function geo_ok(position) {
	// console.log(position)
	var lat = position.coords.latitude
	var lon = position.coords.longitude

	var map = new Image()

	var latB = -14.040143
	var lonB = -75.69303399991999

	var latC = -14.048010
	var lonC = -75.69303399911999

	map.src = `https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=800x800&scale=1&markers=color:green|label:A|${ lat },${ lon }&markers=color:red|label:B|${ latB },${ lonB }&markers=color:purple|label:C|${ latC },${ lonC }&maptype=terrain&center= ${ lat } , ${ lon }`
	var div = document.createElement('div')
	div.appendChild(map)

	document.body.appendChild(div)
}

function geo_error() {
	console.log('Not Found your position')
}

var options = []

geo.getCurrentPosition(geo_ok, geo_error, options)

