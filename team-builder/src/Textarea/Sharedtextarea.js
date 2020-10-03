import React, { useState } from "react";

// class Sharedtextarea extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <label>Enter value : </label>
//         <input type="textare" 
//           name="textValue"
//           onChange={this.props.handleChange}
//         />
//       </div>
//     );
//   }
// }
function Sharedtextarea(props){

    const [update,setUpdate] = useState(
        {id:props.id,number:props.number,name:props.name
        }
        );

    const handleChange = event =>{
        setUpdate(event.target.value)
    }
      return (
        <div>
          <label>Enter value : </label>
          <input type="textare" 
            name="name"
            value={update}
            onChange={handleChange}
          />
        </div>
      );
    
  
}

export default Sharedtextarea;