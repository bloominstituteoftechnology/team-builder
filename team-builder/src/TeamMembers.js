
export default function TeamMembers(props){
    const {team} = props;

    if (!team) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }
      return (
        <div className='container'>
          <h2>{team.fName} {team.lName}</h2>
          <p>Email: {team.email}</p>
          <p>Role: {team.role}</p>
        </div>
      )
}