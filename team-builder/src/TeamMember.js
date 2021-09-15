export default function TeamMember(props){
    return (
    <div>
        <hr/>
        <h2>{props.name}</h2>
        <a href={`mailto:${props.email}`}>{props.email}</a>
        <h3>{props.role}</h3>
    </div>
    );
}