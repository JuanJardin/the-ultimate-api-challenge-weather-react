import React from 'react';
/* Nos previene de que nos olvidemos de pasar algun props a alguno de nuestros componentes */
import PropTypes from 'prop-types';

import styles from './Error.module.css';

const Error = ({ message }) => (
    <div className={`${styles.error} alert position-absolute`} role="alert">
        {message}
    </div>
);

/* este es un props ya definido porque se esta indicando que es un string */
Error.propTypes = {
    message: PropTypes.string,
};
/* este es un props creado por defecto por nosotros mismos. como se puede ver, tiene el mensaje del error escrito */
Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
