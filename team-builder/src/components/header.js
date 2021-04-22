import react from 'react'
import styled from 'styled-components'
import logo from'../resources/reactlogo.png'
import{Link,Route} from 'react-router-dom'
const Div = styled.div`
nav{
    display: flex;
    flex-wrap: nowrap;
    background-color: DodgerBlue;
    background-color: red;
    padding-bottom:1%;
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
h2{
    font-size:2.5rem;
    color: cadetblue;
    margin-right:1%
   

}
.logocont{
    max-width:10%;
}
.img{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity: .1;
}
p{
    margin-bottom:5%;
}
`

export default function Header (){
    return<div>
        <Div>
        <nav>
            <h2>Welcome to my React Team</h2>
            <div className="logocont">
            <img className="img" src={logo}></img>
            </div>
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