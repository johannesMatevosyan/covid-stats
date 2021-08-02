import { Fragment, useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/actions/countryAction';

const PlacemarkWithAddons = (props) => <Placemark {...props} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />;

function MapView(props) {
  const myIcon = 'https://saguaroscuba.com/wp-content/uploads/2016/03/map-marker-icon.png';
  const [lang, setLang] = useState('en_US');
  const dispatch = useDispatch();

  const markerList = [
    {
      properties: {
        hintContent: 'zzzz',
        balloonContent: 'Stack Overflow на русском',
      },
      geometry: [55.749, 37.738521],
    },
    {
      properties: {
        hintContent: 'bbbb',
        balloonContent: 'DDDDD',
      },
      geometry: [55.699, 37.738521],
    },
  ];

  useEffect(() => {
    setLang('en_US');
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <Fragment>
      <div className='map-view' id='map-view'>
        <YMaps key={{ lang: lang }} query={{ lang: lang }}>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 12 }} width='100%' height='100%'>
            {markerList.map((markerData, index) => (
              <PlacemarkWithAddons
                key={index}
                {...markerData}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: myIcon,
                  iconImageSize: [42, 42],
                  iconImageOffset: [-18, -18],
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </Fragment>
  );
}

export default MapView;
