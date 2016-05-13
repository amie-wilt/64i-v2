import React, {Component} from 'react';
import ContactOptionsList from '../ContactOptionsList/ContactOptionsList';
import styles from './ContactUs.scss';

class ContactUs extends Component {

    render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Contact Us</h2>
                <div className={styles.introductionContainer}>
                    <p className={styles.introduction}>Interested in bringing us onto the team for a project? Looking to work for us or have ideas for a business partnership? Whatever it may be, we'd love to hear about it. Feel free to contact us throught the form or any traditional means below. </p>
                </div>
                <ContactOptionsList />
            </section>
        )
    }
}

export default ContactUs;