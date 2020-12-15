import './App.css';
import { useState} from 'react'
import WorkerForm from './Form'
import Worker from './Worker'
import theTeam from './Data'


const initialFormValues = {
  username: "",
  email: "",
  role: "",
}; 

function App() {
  const [workers, setWorkers] = useState(theTeam)
  const[formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) =>{
    setFormValues({
      ...formValues,
      [inputName]:inputValue,
    })
  }

  const submitForm =()=> {
    const newWorker={
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
    }
    if(!newWorker.username || !newWorker.email || !newWorker.role) return;

    setWorkers([...workers, newWorker])
    setFormValues(initialFormValues)

    // axios
    // .post(theTeam, newWorker)
    // .then((res)=>{
    //   setWorkers([...workers, newWorker]);
    //   setFormValues(initialFormValues);
    // })
    // .catch((err)=>{

    // })
  };

  // useEffect(() => {
  //   axios.get(theTeam).then((res) => setWorkers(res.data));
  // }, []);






  return (
    <div className="App">
      <h1>Team Builder</h1>
      <WorkerForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    {workers.map((worker)=>{
      return <Worker key={worker.id} details={worker} />
    })}


    </div>
  );
}

export default App;
