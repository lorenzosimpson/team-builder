import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './components/MemberForm';
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

  return (
    <div>
      <MemberForm addMember={addMember}/>
      <Member />
    </div>
  )
}

export default App;
