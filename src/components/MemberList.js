import React from 'react';
import Member from "./Member";

export default function MemberList(props) {
    const { MemberList } = props;
    return (
        <ul className="member-list">
            {MemberList.map(member => <Member member={member} />)}
        </ul>
    )
}
