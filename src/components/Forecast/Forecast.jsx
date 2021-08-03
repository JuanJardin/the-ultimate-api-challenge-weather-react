import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    {/* la informacion de CurrentDay se pasa {...forecast.currentDay} porque es un objeto */}
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                {/* la informacion de CurrentDayDescription se pasa forecast={forecast.currentDayDetail} porque es un array */}
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingDaysForecast days={forecast.upcomingDays} />
            </Col>
        </Row>
    </Container>
);

Forecast.prototype = {
    forecast: PropTypes.shape({
        /* se le undica a cada propType que es. En este caso, el primero es un object, el segundo y el tercero son arrays */
        currentDay: PropTypes.object,
        currentDayDetail: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;
