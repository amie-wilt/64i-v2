import React, {Component} from 'react';
import { companyEmail, companyAddress, companyPhone } from '../../../data/company';
import Email from 'material-ui/svg-icons/communication/email';
import Location from 'material-ui/svg-icons/communication/location-on';
import Phone from 'material-ui/svg-icons/communication/phone';
import styles from './ContactOptionsList.css';

class ContactOptionsList extends Component {

    render() {
        return (
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.contactOption} href={`mailto:${companyEmail}`}>
                        <Email className={styles.contactIcon} />
                        <div>{companyEmail}</div>
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.contactOption} href={companyAddress.url} itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
                        <Location className={styles.contactIcon} />
                        <div itemProp="streetAddress">{companyAddress.street}</div>
                        <span itemProp="addressLocality">{companyAddress.state}</span>, <abbr itemProp="addressRegion" title="California">{companyAddress.state}</abbr> <span itemProp="postalCode">{companyAddress.zip}</span>
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.contactOption} href={`tel:${companyPhone}`}>
                        <Phone className={styles.contactIcon} />
                        <div>{companyPhone}</div>
                    </a>
                </li>
            </ul>
        )
    }
}

export default ContactOptionsList;
