import React from 'react';
import Carousel from '../Carousel';
import Header from '../Header';
import { useFetch, useOrdinal } from '../../state/hooks';
import styles from "./index.css";

const getQueryUrl = () => {
    const API_URL = 'https://pixabay.com/api/'
    const API_KEY = '9656065-a4094594c34f9ac14c7fc4c39'
    const QUERY_STRING = 'beautiful+landscape'
    const QUERY_TYPE = 'photo'
    
    return `${API_URL}?key=${API_KEY}&q=${QUERY_STRING}&image_type=${QUERY_TYPE}`    
}

export default () => {
    const { data, loading } = useFetch(getQueryUrl());
    const { direction, ordinal, navigation } = useOrdinal(loading ? 0 : data.hits.length);
    return (
        <div className={styles.application}>
            <Header>Carousel Test</Header>
            {loading 
                ? <Carousel.Preloader.Container /> 
                : <Carousel.Container 
                    data={data.hits} 
                    direction={direction} 
                    ordinal={ordinal} 
                  />
            }
            <Carousel.Navigator {...navigation} />
        </div>
    );
};