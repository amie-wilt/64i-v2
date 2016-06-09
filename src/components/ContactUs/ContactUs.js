import React, {Component} from 'react';
import ContactOptionsList from '../ContactOptionsList/ContactOptionsList';
import ContactForm from '../../containers/ContactForm';
import styles from './ContactUs.css';

var ContactUs = () => (
    <section className={styles.section}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.introductionContainer}>
            <p className={styles.introduction}>Interested in bringing us onto the team for a project? Looking to work for us or have ideas for a business partnership? Whatever it may be, we'd love to hear about it. Feel free to contact us throught the form or any traditional means below. </p>
        </div>
        <ContactOptionsList />
        <ContactForm />
    </section>
);

export default ContactUs;
