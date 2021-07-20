export default function Form(props) {
  const { formValues, update, submit } = props;

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={onChange}
            type="text"
            placeholder="Enter Name"
            name="username"
            id="name"
            value={formValues.username}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={onChange}
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={formValues.email}
          />
        </label>

        <label htmlFor="role">
          <select name="role" onChange={onChange} value={formValues.role}>
            <option value="">Select Your Role!</option>
            <option value="Accountant">Accountant</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Dentist">Dentist</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Doctor">Doctor</option>
          </select>
        </label>
        <button>Sumbit!</button>
      </form>
    </div>
  );
}
