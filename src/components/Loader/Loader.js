import React from 'react'
import styles from './Loader.css'

function Loader() {
    var blades = [];

    for (let i = 0; i < 12; i++) {
        let bladeStyle = {
            animationDelay: `${i / 12}s`,
            transform: `rotate(${i*30}deg)`
        };

        blades.push((
            <span className={styles["spinner-blade"]} style={bladeStyle} key={i}></span>
        ))
    }

    return (
        <div className={styles.spinner}>{blades}</div>
    )
}

export default Loader
