// import $ from 'jquery'

var boxNewContent = document.querySelector('#new-content')

import default function renderShows(shows) {
	boxNewContent.classList.remove('loader')

	shows.forEach(function (show) {

		var div = document.createElement('div')
		var h2 = document.createElement('h2')
		var img = document.createElement('img')
		var link = document.createElement('a')

		h2.innerHTML = show.name
		link.href = show.url
		link.innerHTML = "Ver en la web"
		img.src = show.image.medium

		div.appendChild(h2)
		div.appendChild(img)
		div.appendChild(link)

		boxNewContent.appendChild(div)

	})
}