import React from 'react';

import TeamMemberDisplay from './TeamMemberDisplay';

const TeamList = props => {
    return(
        <main className="team-list">
            <table>
                <tbody>
                    {
                        props.teamMemberList.map( (teamMember, i) => {
                            return <TeamMemberDisplay teamMember={teamMember} teamMemberList={props.teamMemberList} setTeamMemberList={props.setTeamMemberList} key={'team-'+i.toString().padStart(2,'0')} />
                        })
                    }
                </tbody>
            </table>
        </main>
    );
}

export default TeamList