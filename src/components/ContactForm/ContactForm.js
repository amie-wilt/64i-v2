import React, {PropTypes} from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import reasons from '../../../data/contact-reason-options';
import styles from './ContactForm.css';

var ContactForm = ({ onSubmit, onChange, name, comments, reason, isSubmitting, showSuccessMessage }) => {
    var successMessage = showSuccessMessage ? (
        <p>SUCCESS!</p>
    ) : null;

    var spinner = isSubmitting ? <LoadingSpinner /> : null;
    var reasonsOptions = reasons.map(reason => (<option key={reason.name} value={reason.value}>{reason.name}</option>));

    var form = !isSubmitting ? (
        <form className={styles.form} action="/contact-form" onSubmit={onSubmit}>
            <input className={styles.input} type="text" value={name} onChange={onChange} name="name" placeholder="Name"/>
            <select className={styles.select} value={reason} onChange={onChange} name="reason">
                {reasonsOptions}
            </select>
            <textarea className={styles.textarea} value={comments} onChange={onChange} name="comments" placeholder="Comments"></textarea>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    ) : null;

    return (
        <div>
            {spinner}
            {successMessage}
            {form}
        </div>
    );
};

ContactForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string,
    reason: PropTypes.string,
    comments: PropTypes.string,
    isSubmitting: PropTypes.bool,
    showSuccessMessage: PropTypes.bool
};

export default ContactForm;