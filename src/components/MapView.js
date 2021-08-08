import { Fragment, useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/actions/countryAction';

const PlacemarkWithAddons = (props) => <Placemark {...props} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />;

function MapView(props) {
  const myIcon = 'https://saguaroscuba.com/wp-content/uploads/2016/03/map-marker-icon.png';

  const [lang, setLang] = useState('en_US');
  const [markerData, getCountryStats] = useState([]);
  const countryList = useSelector((state) => {
    return state.countryList;
  });
  const { loading, countries } = countryList;
  const dispatch = useDispatch();

  useEffect(() => {
    setLang('en_US');
    dispatch(getCountries());

    const shortenedData = countries.map((item, index) => {
      const updated = new Date(item.updated).toLocaleDateString('en-US');
      const stats =
        '<div class="stats-window"  key={' +
        index +
        '}><ul class="stats-list">' +
        '<li  class="mb-5"><span class="stats-country-flag">' +
        '<img src=' +
        item.countryInfo.flag +
        ' alt="flag" /></span><span class="stats-label stats-country-name">' +
        item.country +
        '</span>' +
        '</span></li>' +
        '<li><span class="stats-label stats-cases">Confirmed cases:</span><span>' +
        item.cases +
        '</span></li><li><span class="stats-label stats-deaths">Confirmed deaths:</span><span>' +
        item.deaths +
        '</span></li><li><span class="stats-label stats-recovered">Recovered:</span><span>' +
        item.recovered +
        '</span></li>' +
        '<li><span class="stats-label stats-updated">Last updated:</span><span>' +
        updated +
        '</span></li>' +
        '</ul></div>';
      const result = {
        properties: {
          hintContent: item.countryInfo.iso2,
          balloonContent: stats,
        },
        geometry: [item.countryInfo.lat, item.countryInfo.long],
      };
      return result;
    });

    getCountryStats(shortenedData);
  }, [dispatch]);

  return (
    <Fragment>
      <div className='map-view' id='map-view'>
        <YMaps key={{ lang: lang }} query={{ lang: lang }}>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 2 }} width='100%' height='100%'>
            {markerData.map((marker, index) => (
              <PlacemarkWithAddons
                key={index}
                {...marker}
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
