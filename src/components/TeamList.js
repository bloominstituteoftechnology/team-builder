

export default function TeamList(props) {
    
    return(
        <ul>
            <li>Ashton, Dev, nunya@gmail.com</li>
            {props.teamList.map(teamMember => {
                return <li>{teamMember.name}, {teamMember.role}, {teamMember.email}</li>
            })}
        </ul>
    )
}
