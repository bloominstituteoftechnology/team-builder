import react from 'react'
import styled from 'styled-components'
import logo from'../resources/reactlogo.png'
import{Link,Route} from 'react-router-dom'
import Home from './home'
const Div = styled.div`
nav{
    display: flex;
    flex-wrap: nowrap;
    background-color: DodgerBlue;
    background-color: red;
    padding-top:2%;
    padding-bottom:2%;
    border-radius:10px;
    align-items:center;
    justify-content:space-around;


}
button{
    margin-right:20%;
    border:1px solid black;
    background-color: lightblue;
    margin-left:0%;
    padding:0%;
    height:2%;
    font-size:1.5rem;
    border-radius:5px;
    
}
`

export default function Footer (){
    return<div>
        <Div>
        <nav>
            <Link to="/">
            <button>Home</button>
            </Link>
            <Link to ="/team">
            <button>Team</button>
            </Link>
            <Link to="/about">
            <button>About</button>
            </Link>
        </nav>
        </Div>
    </div>
}