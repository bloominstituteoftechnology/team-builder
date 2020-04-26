import React from "react";
import styled from 'styled-components'
import { Button, Collapse } from 'reactstrap'
import Form from '../Form/Form'

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: center;
  align-items: end;
`

const StyledCard = styled.div`
  border: 1px solid #eee;
  padding: 2%;
  border-radius: 12px;
  width: 400px;
  margin: 10px;
  text-align: center;
`

const styleButton = {
  width: '100px',
  margin: '6px'
}

const StyledName = styled.h3`
  text-transform: capitalize
`

const StyledCardForm = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 400px;
  margin: 8px;
  text-align: center;
`

const List = (props) => {
  return (
    <StyledList >
      {props.data.map(user => {
        return (
          <StyledCard key={user.id}>
            <div className="userInfo">
              <StyledName>{user.name}</StyledName>
              <p>Email: {user.email}</p>
              <p>Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
              <p>Team: {user.teamNumber}</p>
            </div>
            <Button color="info" style={styleButton} id={user.id} onClick={e => props.memberToEdit(e)}>
              Edit
            </Button>
            <Button color="danger" style={styleButton} id={user.id} onClick={e => props.removeMember(e)}>
              Delete
            </Button>
          </StyledCard>
        );
      })}
      <StyledCardForm>
        {!props.cardCollapse ?
          <Button color="success" style={{ margin: '4px 10px' }} onClick={() => props.setCardCollapse(!props.cardCollapse)}>+</Button>
          : <Button color="warning" style={{ margin: '4px 10px' }} onClick={() => props.setCardCollapse(!props.cardCollapse)}>-</Button>}
        {/* 
        <Button color="success" style={{ margin: '10px', width: '50px' }} onClick={() => props.setCardCollapse(!props.cardCollapse)}>+</Button> */}
        <Collapse isOpen={props.cardCollapse}>
          <Form
            user={props.user}
            handleSubmit={props.handleSubmit}
            handleChange={props.handleChange}
            handleClear={props.handleClear}
          />
        </Collapse>
      </StyledCardForm>
    </StyledList>
  );
};

export default List;
