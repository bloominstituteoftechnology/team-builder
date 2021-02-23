import React from "react";
import Employee from "./Employee";
import { Route, Link } from "react-router-dom";

const EmployeeList = (props) => {
  const { employeeList, handleEditor } = props;

  return (
    <div>
      <h4> Current Employees</h4>
      {employeeList.map((employee) => {
        return (
          <div>
            <EmployeeDetails key={employee.name} employee={employee} />
            <Link to="/edit">
              <button onClick={() => handleEditor(employee)}>Edit</button>{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

function EmployeeDetails(props) {
  return (
    <div>
      <Link to={`/employees/${props.employee.name}`}>
        <Employee employee={props.employee} />
      </Link>
    </div>
  );
}

export default EmployeeList;
