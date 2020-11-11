import React, {useState} from 'react'
import Form from './components/Form'
import Users from './components/User'

function App() {

  const [memeber, setMemeber] = useState({
    memberName: '',
    memberEmail: '',
    memeberRole: ''
  });



  return (
    <div className="App">
      <h1>Slow life</h1>
      <Form setMember={setMemeber} member={memeber}/>
      <Users member={memeber}/>
    </div>
  );
}

export default App;
