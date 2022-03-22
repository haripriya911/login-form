import "./FormFolder.css";
import { useState } from "react";

const FormFolder = () => {
const username="admin";
const password="admin";
const [loginUserName,setLoginUserName]=useState('');
const [loginPassword,setLoginPassword]=useState('');
const[error,setError]=useState(false)
 const userNameHandler=(event)=>{
   setLoginUserName(event.target.value)
 }
 const passwordHandler=(event)=>{
  setLoginPassword(event.target.value)
  
}
const submitHandler=(event)=>{
  event.preventDefault();
    if((loginUserName===username)&& (loginPassword===password)){
    
    }
    else{
     // alert("login fail");
      setError(true)
    }
    
}



  return (
    <>
    <div className="form" onSubmit={submitHandler} >
        <form className="form" >
          <div className="username">
            <div className="mail">
              <label for="username">USER NAME:</label>

              <input type="text" placeholder="Enter a username" value={loginUserName}  onChange={userNameHandler}></input>
            </div>
            <div className="password">
              <label for="password">PASSWORD:</label>

              <input type="password" placeholder="Enter your Password" value={loginPassword} onChange={passwordHandler}></input>
            </div>

            <button type="submit" disabled={((loginUserName.length===0) && (loginPassword.length===0))?true:false } >LOGIN</button>
          </div>
       {  error && <h3 className="incorrect" > USERNAME OR PASSWORD INCORRECT</h3>}
        
        </form>
        
      
      </div>
      
      

      
    </>
  );
};
export default FormFolder;
