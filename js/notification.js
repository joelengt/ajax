

Notification.requestPermission()


var n = new Notification('Epic title', {body: 'Hello world!!', icon: 'http://cursos.cromlu.com/image/cromlu.png'})


n.addEventListener('click', function(event) {
	event.preventDefault()
	window.open('http://cursos.cromlu.com')
})