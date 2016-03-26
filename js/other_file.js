
$.get('../other_html.html', function (element) {
	$('body').find('.loader').remove()
	$('#new-content').append(element)
})


// export function getShows (fn) {
// 	$.ajax('http://api.tvmaze.com/shows', {
// 		success: function (shows) {
// 			fn(shows)
// 		}
// 	})
// }

// getShows()





// function getShows () {
// 	$.get('http://api.tvmaze.com/shows', function (el) {
// 		for (var i = 1 ; i <= el.length - 1; i++) {
// 			var show = el[i]
// 			console.log(show)

// 			var div = document.createElement('div')
// 			var h2 = document.createElement('h2')
// 			var img = document.createElement('img')
// 			var link = document.createElement('a')

// 			h2.innerHTML = show.name
// 			link.href = show.url
// 			link.innerHTML = "Ver en la web"
// 			img.src = show.image.medium

// 			div.appendChild(h2)
// 			div.appendChild(img)
// 			div.appendChild(link)

// 			boxNewContent.appendChild(div)
// 		}
// 	})
// }


// function getShows () {
//   $.ajax('http://api.tvmaze.com/shows', {
//     success: function (shows, textStatus, xhr) {
//     	boxNewContent.classList.remove('loader')
//     	shows.forEach(function (show) {
    		
//     		console.log(show)

// 			var div = document.createElement('div')
// 			var h2 = document.createElement('h2')
// 			var img = document.createElement('img')
// 			var link = document.createElement('a')

// 			h2.innerHTML = show.name
// 			link.href = show.url
// 			link.innerHTML = "Ver en la web"
// 			img.src = show.image.medium

// 			div.appendChild(h2)
// 			div.appendChild(img)
// 			div.appendChild(link)

// 			boxNewContent.appendChild(div)
// 	})


// 	console.log(textStatus)
// 	console.log(xhr)

//     }
//   })
// }

