import Link from '../link/Link';

import st from './ActionBox.module.scss';

// TODO: organize links
const jobsLink = 'https://jobs.lever.co/mystenlabs';

function ActionBox() {
    return (
        <div className={st.container}>
            <span className={st['cube-1']} />
            <span className={st['cube-2']} />
            <h2 className={st.title}>Build the decentralized future</h2>
            <div className={st.description}>
                Mysten Labs gathers the brightest minds to create infrastructure
                and tools for the decentralized future for everyone. Let&apos;s
                build without boundaries together.
            </div>
            <Link to={jobsLink} external={true} variant="btn">
                View job openings
            </Link>
        </div>
    );
}

export default ActionBox;
