/* este archivo va a ser un hook y se va a encargar de renderizar, cuando sea necesario, los componentes Error, Loader y Forecast. Es decir, va a alterar los estados para que esos componentes se muestren cuando sea necesario*/

import axios from 'axios';
import { useState } from 'react';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://localhost:3000.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const UseForecast = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    /* el estado inicial de forecast es null porque no se eligio aun ningun pronostico */
    const [forecast, setForecast] = useState(null);

    /* con esta funcion enviamos el request */
    const submitRequest = async location => {
        /* get woeid */
        /* axios puede recibir params */
        const response = await axios(`${REQUEST_URL}/search`, { params: { query: location } });
        /* get weather */
        console.log({ response });
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default UseForecast;
