import React from "react";
import styled from 'styled-components'
import { Button } from 'reactstrap'

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: space-between;
`

const StyledCard = styled.div`
  border: 1px solid #eee;
  padding: 2%;
  border-radius: 12px;
  width: 31%;
  margin: 10px;
`

const List = (props) => {
  return (
    <StyledList>
      {props.data.map(user => {
        return (
          <StyledCard key={user.id}  >
            <div className="userInfo">
              <h1>{user.name}</h1>
              <h3>Email: {user.email}</h3>
              <h3>Role: {user.role}</h3>
              <h3>Team: {user.teamNumber}</h3>
            </div>
            <Button id={user.id} onClick={e => props.memberToEdit(e)}>
              Edit
            </Button>
            <Button id={user.id} onClick={e => props.removeMember(e)}>
              Delete
            </Button>

          </StyledCard>
        );
      })}
    </StyledList>
  );
};

export default List;
