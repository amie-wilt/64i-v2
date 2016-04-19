import React, {Component, PropTypes} from 'react';
import TeamList from '../TeamList/TeamList';

if(process.browser) {
    var styles = require('./WhoWeAre.scss');
}

export default class WhoWeAre extends Component {
    render() {
        return (
            <section className={styles.section}>
                <h2 className={styles.title}>Who We Are</h2>
                <p className={styles.introduction}>The 64 Interactive team brings decades of combined experience in building high quality, user-centric software. We have just the right mix of skills in application development, information architecture, and project management, allowing us to provide our customers with the advantages of working with a small, focused team and still deliver the level of polish and scale that today’s businesses require. Whatever your requirements, technology stack, or target market, we can craft a solution that works for you.</p>
                <div>
                    <TeamList />
                </div>
            </section>
        )
    }
}
