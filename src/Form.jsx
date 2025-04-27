import React, { useState } from 'react'

function Form({addContact}) {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');

    function handleSubmit(e){
       e.preventDefault();
       if(userName && email){
        addContact({userName,email});
        setUserName('');
        setEmail('');
       }
    
    }
  return (
    <div>
    <h1>Contact Manager Form</h1>
    <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter Your Name" value = {userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="Enter your Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit Manager</button>

    </form>







    </div>
  )
}

export default Form