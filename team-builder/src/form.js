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
                  <select name='role' onChange={onChange} value={formValues.role}>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
        </label>
      </form>
    </div>
  );
}
