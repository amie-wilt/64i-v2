import React, {Component, PropTypes} from 'react';
import company from '../../../data/company';
import Bio from '../../containers/Bio';
import styles from './TeamList.scss';
import Dialog from 'material-ui/lib/dialog';
import CircularProgress from 'material-ui/lib/circular-progress';

export default class TeamList extends Component {
    render() {
        var handleClose = () => {
            this.props.toggleBioModal();
        };

        var employees = company.employees.map(employee => {
            return (
                <li key={employee.id}>
                    <Bio employee={employee} />
                </li>
            )
        });

        console.log(this.props.loadingBio);

        var loading = this.props.loadingBio ? <CircularProgress /> : '';
        var bioTemplate = this.props.activeBio ? (
            <div>
                <h1>{this.props.activeBio.name}</h1>
                <div>{this.props.activeBio.overview}</div>
            </div>
        ) : '';

        return (
            <div>
                <ul className={styles['team-list']}>{employees}</ul>
                <Dialog
                    open={this.props.bioModalOpen}
                    onRequestClose={handleClose}
                >
                    { bioTemplate }
                    { loading }
                </Dialog>
            </div>

        )
    }
}
