(() => {
  const map = document.querySelector('[data-map]');
  if (!map) {
    return;
  }
  const coordinates = map.dataset.coordinates.split(',');
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map('map', {
      center: coordinates,
      zoom: 16,
    });

    let myPlacemark = new ymaps.Placemark(myMap.getCenter(),
        {
          hintContent: '',
        },

        {
          iconLayout: 'default#image',
          iconImageHref: './img/svg/pin.svg',
          iconImageSize: [10, 25],
          iconImageOffset: [-30, -100],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  }
})();
