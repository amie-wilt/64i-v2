import React, {Component} from 'react'
import Modal from '../Modal/Modal';
import CaseStudy from '../../containers/CaseStudy';
import styles from './CaseStudyModal.scss';
import Clear from 'material-ui/lib/svg-icons/content/clear';
import {Link} from 'react-router';

class CaseStudyModal extends Component {
    static contextTypes = {
        router: React.PropTypes.object,
        store: React.PropTypes.object
    };
    
    render() {
        return (
            <Modal open={this.props.open} router={this.context.router} store={this.context.store}>
                <Link to="/our-work">
                    <Clear className={styles.closeButton} color={'#333'}/>
                </Link>
                <CaseStudy />
            </Modal>
        )
    }
}

export default CaseStudyModal