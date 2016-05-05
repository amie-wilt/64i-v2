import React, {Component} from 'react'
import Modal from '../Modal/Modal';
import Avatar from '../Avatar/Avatar';
import styles from './BioModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';

class BioModal extends Component {
    render() {
        var bio = this.props.bio || {};

        var overview = bio.overview,
            description;

        if (overview) {
            let overviewMarkup = () => {
                return {
                    __html: overview
                }
            };

            description = (
                <div className={styles.description} dangerouslySetInnerHTML={overviewMarkup()}></div>
            );
        }

        var bioTemplate = (
            <div className={styles.content}>
                <div className={styles.avatarContainer}>
                    <Avatar className={styles.avatar} src={`/public/${bio.fullSize}.jpg`} alt={bio.name}/>
                </div>
                <div className={styles.mainContent}>
                    <h1 className={styles.employeeName}>{bio.name}</h1>
                    { description }
                </div>
            </div>
        );

        var close = () => {
            this.props.closeModal();
        };

        return (
            <Modal open={this.props.open}>
                <Clear onClick={close} className={styles.closeButton} color={'#333'}/>
                { bioTemplate }
            </Modal>
        )
    }
}

export default BioModal