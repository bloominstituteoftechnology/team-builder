mport React from "react"

export default function Form (){
  const {values,update,submit} = this.props
  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value)

    return(
        <form onSubmit={onSubmit}>
        <div>
      
          <label>
            Username
            
            <input
              name="username"
              type="text"
              placeholder="type a username..."
              maxLength="30"
              value={values.username}
              onChange={onChange}
            />
          </label>
  
          <label>
            Email

            <input
              name="email"
              type="email"
              placeholder="type an email..."
              maxLength="30"
              value={values.email}
              onChange={onChange}
            />
          </label>
  
        
          <label>
            Role
        
            <select name="role" value={values.role} onChange={onChange}>
              <option value="">------select role------</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Front End Web Developer">Front End Web Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
            </select>
          </label>
  
          <div className="submit">
            <button>submit</button>
          </div>
        </div>
      </form>




    )

  }














}