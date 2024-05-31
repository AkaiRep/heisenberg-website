//Map

ymaps.ready(init)

function init() {
	var myMap = new ymaps.Map('map', {
		center: [59.9342802, 30.3350986],
		zoom: 10,
		controls: [],
	})

	myMap.behaviors.disable('scrollZoom')

	ymaps.geoXml
		.load('map/map.KML')
		.then(function (res) {
			myMap.geoObjects.add(res.geoObjects)
		})
		.catch(function (error) {
			console.error('Error', error)
		})
}

//Mask

window.addEventListener('scroll', function () {
	var mask = document.getElementById('mask')
	var stopPoint = -150

	if (window.scrollY >= stopPoint) {
		mask.classList.add('stopped')
		mask.style.top = stopPoint + 'px'
	} else {
		mask.classList.remove('stopped')
		mask.style.top = '-60px'
	}
})
