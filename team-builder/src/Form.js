import React, { useState } from 'react'
import Members from './Members'

const Form = (props) => {
    const [newMember] = props;
    const [members, setMembers] = useState ([
        {name: "" , email: "" , role: "" },
    ]);
}
console.log(members);