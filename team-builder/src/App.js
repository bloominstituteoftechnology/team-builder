import "./App.css";
import Form from "./components/Form";
import EmployeePage from "./components/EmployeePage";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import { Route, Router } from "react-router-dom";
import EditForm from "./components/EditForm";

function App() {
  const [empToEdit, setEmpToEdit] = useState(null);
  const [employeeList, setEmployeeList] = useState([
    {
      name: "Johnny Boy",
      email: "jboy@gmail.com",
      role: "CEO",
    },
    {
      name: "Tommy ",
      email: "Tboy@gmail.com",
      role: "Janitor",
    },
  ]);

  const handleAdd = (employee) => {
    setEmployeeList([...employeeList, employee]);
  };

  const handleEdit = (employee) => {
    let ind = employeeList.findIndex((emp) => emp.name === empToEdit.name);
    console.log(employee);
    employeeList[ind] = employee;
  };

  const handleEditor = (employee) => {
    setEmpToEdit(employee);
  };

  return (
    <div className="App">
      <Route exact path="/">
        <h1> Important Company Employee Database</h1>
        <Form handleAdd={handleAdd} empToEdit={empToEdit} />
        <EmployeeList employeeList={employeeList} handleEditor={handleEditor} />
      </Route>
      <Route path="/employees/:name">
        <EmployeePage employeeList={employeeList} />
      </Route>
      <Route path="/edit">
        <EditForm handleEdit={handleEdit} empToEdit={empToEdit} />
      </Route>
    </div>
  );
}

export default App;
