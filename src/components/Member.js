import React, { useState, useEffect } from 'react';

export function Member(props) {

    const [Member, SetMember] = useState({});

    useEffect(() => {
        SetMember(props.member);
    }, [props.member])

    return (
        <div>
            <p>{Member.name}</p>
            <p>{Member.email}</p>
            <p>{Member.role}</p>
        </div>

    );
}

export default Member;