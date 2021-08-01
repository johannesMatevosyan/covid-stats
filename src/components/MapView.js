import React, { Fragment, useState, useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import axios from 'axios';

function MapView(props) {
  const [lang, setLang] = useState('en_US');

  const fetchData = async () => {
    const response = await axios.get('https://corona.lmao.ninja/v2/countries');
    return response.data;
  };

  useEffect(() => {
    setLang('en_US');
    fetchData()
      .then((res) => {
        console.log('fetchData: ', res);
      })
      .catch((err) => console.log('Could not get list of countries: ', err));
  }, []);

  return (
    <Fragment>
      <div className='map-view' id='map-view'>
        <YMaps key={{ lang: lang }} query={{ lang: lang }}>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 12 }} width='100%' height='100%' />
        </YMaps>
      </div>
    </Fragment>
  );
}

export default MapView;
