import React, { Fragment } from 'react';


import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/UseForecast';

import styles from './Page.module.css';

const Page = () => {
    //     /* un hook no puede ser llamdo en un bloque condicional */
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div className={`${styles.box} position-relative`}>
                    {/* al fomulario lo vamos a mostrar si no se esta cargando nada */}
                    {/* onSubmitSearch es el nombre de un props que se va a usar en el archivo Form.js y tiene como valor la funcion onSubmit */}
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    {/* si isError es true, entonces muestra el componente <Error /> el incialState de isError es false, eso se puede ver en el archivo UseForecast.js. Por lo tanto lo que estamos haciendo es, mostrar Error si solamente hay un error*/}
                    {/* message es el nombre de un props que se va a usar en el archivo Error.js y tiene como valor isError */}
                    {isError && <Error message={isError} />}
                    {/* si isLoading es true, entonces muestra el componente <Loader /> el incialState de isLoading es false, eso se puede ver en el archivo UseForecast.js. Por lo tanto lo que estamos haciendo es, mostrar Loader si solamente estamos esperando a que cargue la app */}
                    {isLoading && <Loader />}
                </div>
            )}
            {/* se hace lo mismo que en los otros dos componentes anteriores. el HOOK se llama forecast y no isForecast porque va a soportar informacion y no se trata de que su valor sea true o false */}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};



export default Page;
