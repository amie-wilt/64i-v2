import React, { Component } from 'react'
import styles from './NavToggle.scss'

class NavToggle extends Component {
    render() {
        return (
            <div className={styles.toggle} onClick={this.props.onClick}>
                <span></span>
            </div>
        )
    }
}

export default NavToggle;