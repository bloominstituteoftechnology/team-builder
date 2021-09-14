import React, { useState } from 'react'
import Details from './Details';

export default function Member(props) {
    const { details, members } = props;
    const [expose, setExpose] = useState(false);

    const showDetails = (e) => {
        setExpose(!expose);
    }

    // function Details () {
    //     return (
    //         <div className="Details">
    //             <p>
    //             {details.name} <br/>
    //             {details.email} <br/>
    //             {details.role}
    //             </p>
    //         </div>
    //     )
    // }
    return (
        <div className="Member">
            {/* <h2>members list</h2>
            {members.map(member => {
                return (
                  <Member key={member.id} details={member}/>
                  )
                })
              } */}
            <button onClick={showDetails}>Member</button>
            <div>
                {
                    expose && <Details details={details}/>
                }
            </div>
        </div>
    )
}
