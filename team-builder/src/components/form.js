import react,{useState} from 'react'
import styled from 'styled-components'
import teampic from'../resources/team.jpeg'

const Div = styled.div`
.cont{
    background-color:cadetblue;
    padding-top:2%;
    padding-bottom:30%;
}
.header{
    color:lightgrey;
    font-size:3.5rem;
    border-bottom: thin dotted blue;
    padding-bottom:5%
}
p{
    color:lightgrey;
}
.pc{
    width:80%;
    height:100%;
    object-fit:cover;
}
.sign-up{
    color:lightgrey;
}
.formbox{
    display: flex;
    flex-wrap: nowrap;
    flex-direction:column;
    background-color: DodgerBlue;
    background-color: red;
    padding-bottom:1%;
    border-radius:50px;
    align-items:center;
    justify-content:center;
    width:30%;
    height:20%;
    margin:0 auto
}
.input{
    margin-bottom:2%;
    margin-top:2%
}
button{
    margin:25%;
    padding:2%
}
.userCard{
    background-color:white;
    width:50%;
    margin:0 auto;
    border-radius:20%;
    border: 10px dotted gold;
    margin-bottom:5%;
}
.pccont{
    margin-bottom:5%;
}
.prof{
    width:20%;
    height:20%;
    object-fit:cover;
    border: 1px solid red;
    border-radius:50px
}
`
const teamList = [
    { name: 'John Doe', email: 'JDoe@gmail.com',roll:'Front-End',profilepic:'https://www.nicepng.com/png/detail/806-8061298_jacques-mestre-generic-male-profile.png', },
    { name: 'Jane Doe', email: 'JJDoe@Yahoo.com',roll:'Back-End',profilepic:'https://i.pinimg.com/236x/0e/a5/3e/0ea53e39b17a9d0ea5a0ed9e9ef871eb--profile-pictures-random-stuff.jpg', },
    { name: 'John Mathews', email: 'JMAT@GMail.com',roll:'Full-Stack',profilepic:'https://www.nicepng.com/png/detail/806-8061298_jacques-mestre-generic-male-profile.png', },
  ]
  console.log(teamList[0].profilepic)
  
  const initialFormValues = {
    name: '',
    email: '',
    roll:'',
    profilepic:'',
  }
export default function Team (){
    const [team, setteam] = useState(teamList);
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const change = ev => {
      const { name, value } = ev.target
      setFormValues({...formValues, [name]: value})
    }
    const defaultpic="https://st3.depositphotos.com/3581215/18899/v/1600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
    const submit = ev => {
      ev.preventDefault()
      const newteam= {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        roll:formValues.roll.trim(),
        profilepic:formValues.profilepic,
      }
      if(formValues.profilepic===''){
         return formValues.profilepic=defaultpic
      }
      // setteam(team.concat(newteam)
      setteam([...team, newteam])
  
      setFormValues(initialFormValues)
    }

    return<div>
        <Div>
        <div className="cont">
        <h1 className="header"> Welcome to my team</h1>
        <div className="pccont">
            <img className="pc" src={teampic}/>
        </div>  
        {team.map((member, idx) => {
        return (
          <div key={idx} className="userCard">
              <div>
                <img src={member.profilepic} className="prof"></img>
              </div>
            <h3>{member.name}</h3>
            <h4>{`Roll: ${member.roll}`}</h4>
            <h5>{`Emaill: ${member.email}`}</h5>
          </div>
        )
      })}
        <div className="join">
        <h2 className="sign-up">Sign up Here</h2>
        <div>
            <form className="formbox" onSubmit={submit}>
            <p>Name:</p>
            <input 
                className="input"
                type="text"
                onChange={change}
                value={formValues.name}
                name="name"/>
            <p>Email:</p>
            <input 
                 className="input"
                 type="text"
                 onChange={change}
                 value={formValues.email}
                 name="email"/>
            <p>Roll:</p>
            <input 
                className="input"
                type="text"
                onChange={change}
                value={formValues.roll}
                name="roll"/>
            <p>Profile image url  (optional)</p>
            <input                 
                className="input"
                type="text"
                onChange={change}
                value={formValues.profilepic}
                name="profilepic"/>
            <button>Submit</button>
            </form>
        </div>
        </div>
        </div>
        </Div>
    </div>
}