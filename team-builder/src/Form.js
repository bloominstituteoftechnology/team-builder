import React from 'react';

const MemberForm = (props) => {
    console.log("MemberForm props:" , props);
    const [member , setMember] = useState ({
        Name:"",
        Email:"",
        Role:""
    });
}