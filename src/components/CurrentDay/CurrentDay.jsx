import React from 'react';
import PropsTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
    <div className="d-flex">
        <div className={styles.img}></div>
        <div className={styles.gradient}></div>
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
            <div>
                <h2 className="font-weight-bold mb-1">{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className="d-flexbox align-item-baseline font-weight-lighter mb-1">
                    <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                    <span>{location}</span>
                </p>
            </div>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-lighter">
                    <span>{temperature}</span>
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropsTypes.string.isRequired,
    date: PropsTypes.string.isRequired,
    location: PropsTypes.string.isRequired,
    temperature: PropsTypes.number.isRequired,
    weatherIcon: PropsTypes.string.isRequired,
    weatherDescription: PropsTypes.string.isRequired,
};

export default CurrentDay;
