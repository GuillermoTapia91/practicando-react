import { useState } from "react"
import { post } from "../../services"
export default function Form () {
  const [inputData,setInputData] = useState({
    name:"",
    email:"",
    password:"",
    terms:false
  })
  const handleInputChange = (event) => {
    const { name, type, checked, value} = event.target
    setInputData({
      ...inputData,
      [name]:
        type === "checkbox"
          ? checked
          : value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = await post(inputData)
    console.log(data)
  }
  return(
    
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">  
          <h2 className="">Formularios</h2>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input value={inputData.name} className="form-control mt-3" onChange={handleInputChange}
              placeholder="Write your name" 
              type="text" 
              name="name" />
            </div>
            <div>
              <input value={inputData.email} className="form-control mt-3" onChange={handleInputChange}
              placeholder="Write your email" 
              type="email" 
              name="email" />
            </div>
            <div>
              <input value={inputData.password} className="form-control  mt-3" onChange={handleInputChange}
              placeholder="Write your password" 
              type="password" 
              name="password" />
            </div>
            <div>
              <input value={inputData.terms} checked={inputData.terms} className="mt-3" type="checkbox"      
               onChange={handleInputChange}name="terms"/> Acepta los términos y condiciones?
            </div>
            <div>
              <button className="mt-3 btn btn-outline-primary" type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>        
    </div>
  )
}