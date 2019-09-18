import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

function App() {
  const [members, setMember] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({})

  const addMember = member => {
    const newMember = {
      id: Math.random() * 10,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember])
  }

  

  return (
    <div>
      <Form addMember={addMember} memberToEdit={memberToEdit}/>
      <Member members={members} setMemberToEdit={setMemberToEdit}/>
    </div>
  )
}

export default App;
