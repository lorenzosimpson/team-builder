import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

function App() {
  const [members, setMember] = useState([]);

  const addMember = member => {
    const newMember = {
      id: Math.random() * 10,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember])
  }

  const [memberToEdit, setMemberToEdit] = useState([])

  return (
    <div>
      <Form addMember={addMember} memberToEdit={memberToEdit}/>
      <Member members={members}/>
    </div>
  )
}

export default App;
