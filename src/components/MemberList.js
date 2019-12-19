import React, { useState, useEffect } from 'react';
import Member from "./Member"

function MemberList(props) {

    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        setMemberList(props.members);
    }, [props.members]);

    console.log(memberList);

    return (
        <div>
        {memberList.map((item) => {
            return (
                <Member member={item} />
            )
        })}
        </div>

    );
}

export default MemberList;