import React, { useState } from 'react';
/* Nos previene de que nos olvidemos de pasar algun props a alguno de nuestros componentes. Este concepto esta mejor explicado en Error.js */
import PropsTypes from 'prop-types'

import styles from './Form.module.css';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        /* Ahora queremos extraer, lo que sea que tenga el campo del input  y para tenerlo en el form antes enviarlo. para eso vamos a usar reacts hooks useState*/

        e.preventDefault();
        /* ahora queremos chequear si no tenemos una location o que location es igual a un string vacio y luego retornamos, poque no queremos continuar si no hay un location, si eso pasa es porque el usuario esta haciendo algo que no es soportado */

        if (!location || location === '') return;
        /* usamos el props creado en el archivo Page.js y le damos el valor de location */

        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                /* se necesita que el input sostenga el value asignado, por ese motivo es que se usa onChange, para cambiar el valor */
                /* e.target.value es la forma en que extraemos el value del elemento actual, en este caso el campo a rellenar del input */
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

/* se indica que dentro de Form hay props y uno de esos props se llama submitSearch, se le indica que va a ser un PropTypes, se indica que es una funcion y tambien se indica que es requerido */
Form.propTypes = {
    submitSearch: PropsTypes.func.isRequired
}

export default Form;
