import { memo, useMemo } from 'react';

import Link from '../link/Link';
import Section from '../section/Section';
import TeamMember from './TeamMember';
import { teamMembers } from './team-members';

import st from './TeamMembersSection.module.scss';

export type TeamMembersSectionProps = {
    limit?: number | null;
    forceLink?: boolean;
};

function TeamMembersSection({
    limit = null,
    forceLink = false,
}: TeamMembersSectionProps) {
    const team = useMemo(
        () => teamMembers.slice(0, limit || undefined),
        [limit]
    );
    const showLink = forceLink || (limit != null && teamMembers.length > limit);
    return (
        <Section
            id="about-us"
            label={showLink ? 'About us' : 'Who we are'}
            title="Meet the team"
            description="We are a team of veteran innovators, storytellers and developers on a mission to bring true digital ownership to the masses."
            variant="transparent"
        >
            <div className="grid col-4 gap-row-big">
                {team.map((aMember) => (
                    <TeamMember {...aMember} key={aMember.name} />
                ))}
            </div>
            {showLink ? (
                <div className={st['team-actions']}>
                    <Link
                        to="/about-us"
                        variant="btn"
                        btnStyle="secondary"
                        external={false}
                    >
                        View full team
                    </Link>
                </div>
            ) : null}
        </Section>
    );
}

export default memo(TeamMembersSection);
