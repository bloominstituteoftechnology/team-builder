import React from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const MemberForm = ({
  teamMember,
  handleChange,
  handleSubmit,
  renderMember
}) => {
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <Label for="name">📋 Name: </Label>
        <Input
          type="text"
          name="name"
          value={teamMember.name}
          onChange={e => handleChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">📧 Email: </Label>
        <Input
          type="email"
          name="email"
          value={teamMember.email}
          onChange={e => handleChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="role">🏅 Role: </Label>
        <Input
          type="text"
          name="role"
          value={teamMember.role}
          onChange={e => handleChange(e)}
        />
      </FormGroup>
      <Button type="submit" className="btn" onClick={renderMember}>
        ✔️
      </Button>
    </Form>
  );
};

export default MemberForm;

// const Form = ({ teamMember, handleChange, handleSubmit, renderMember }) => {
//   return (
//     <>
//       <section className="form">
//         <form onSubmit={e => handleSubmit(e)}>
//           <label>
//             <br />
//             Name:{" "}
//             <input
//               type="text"
//               name="name"
//               value={teamMember.name}
//               onChange={e => handleChange(e)}
//             />
//             Email:{" "}
//             <input
//               type="email"
//               name="email"
//               value={teamMember.email}
//               onChange={e => handleChange(e)}
//             />
//             Role:{" "}
//             <input
//               type="text"
//               name="role"
//               value={teamMember.role}
//               onChange={e => handleChange(e)}
//             />
//           </label>
//           <button onClick={renderMember}>Submit</button>
//         </form>
//       </section>
//     </>
//   );
// };
// export default Form;
