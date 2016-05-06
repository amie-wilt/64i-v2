import React, {Component} from 'react'
import Modal from '../Modal/Modal';
import Avatar from '../Avatar/Avatar';
import styles from './BioModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

class BioModal extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

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

        return (
            <Modal open={this.props.open} router={this.context.router}>
                <Link to="/about-us">
                    <Clear className={styles.closeButton} color={'#333'}/>
                </Link>
                { bioTemplate }
            </Modal>
        )
    }
}

export default BioModal