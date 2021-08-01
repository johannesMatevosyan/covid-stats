import React, { Fragment, useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';

function MapView(props) {
  const [lang, setLang] = useState('en_US');
  const [countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://corona.lmao.ninja/v2/countries');
    return response.data;
  };

  const coordinates = [
    [55.611111, 37.738521],
    [55.75, 37.573856],
  ];

  useEffect(() => {
    setLang('en_US');
    fetchData()
      .then((res) => {
        setCountryData(res);
      })
      .catch((err) => console.log('Could not get list of countries: ', err));
  }, []);

  console.log('countryData  ***** ', countryData);

  return (
    <Fragment>
      <div className='map-view' id='map-view'>
        <YMaps key={{ lang: lang }} query={{ lang: lang }}>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 12 }} width='100%' height='100%'>
            {/* <Placemark geometry={[[55.1, 37.573856]]} />  */}
            {coordinates.map((coordinate) => (
              <Placemark geometry={coordinate} />
            ))}
          </Map>
        </YMaps>
      </div>
    </Fragment>
  );
}

export default MapView;
