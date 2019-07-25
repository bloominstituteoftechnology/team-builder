import React, {Component} from 'react';
import MemberItem from './MemberItem'
import PropTypes from 'prop-types'

class Members extends Component {
    render(){
        return this.props.members.map((member) => (
            <MemberItem key={member.id} member={member} delMember={this.props.delMember}/>
            //   <h3>
            //   {member.name}
            //   <br/>
            //   {member.email}
            //   <br/>
            //   {member.role}
            //   </h3>
        ));
    }  
}


Members.propTypes = {
    members: PropTypes.array.isRequired
}

export default Members;
