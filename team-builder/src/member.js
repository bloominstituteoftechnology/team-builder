export default function Member(props) {
  const { name, email, role } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  );
}
