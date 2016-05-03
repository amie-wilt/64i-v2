import React, {Component} from 'react'
import Dialog from 'material-ui/lib/dialog';
import CircularProgress from 'material-ui/lib/circular-progress';
import Avatar from '../Avatar/Avatar';
import styles from './BioModal.scss';

class BioModal extends Component {
    render() {
        var loading = this.props.loadingBio ? <CircularProgress /> : '';

        var bioTemplate = this.props.bio ? (
            <div>
                <div className={styles.avatarContainer}>
                    <Avatar className={styles.avatar} src={`/public/${this.props.bio.id}.jpg`} alt={this.props.bio.name}/>
                </div>
                <h1>{this.props.bio.name}</h1>
                <div>{this.props.bio.overview}</div>
            </div>
        ) : '';

        return (
            
            <Dialog open={this.props.open} onRequestClose={this.props.closeModal}>
                { bioTemplate }
                { loading }
            </Dialog>

        )
    }
}

export default BioModal