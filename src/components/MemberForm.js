import React, {useState} from 'react';

const MemberForm = props => {
    console.log(props)
    const [member, setMember] = useState({name: '', email: '', role: ''})
    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
        console.log(member)
    }
    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={handleChange} value={member.name}></input>

            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={handleChange} value={member.email}></input>

            <label htmlFor='role'>Role</label>
            <input type='text' name='role' onChange={handleChange} value={member.role}></input>

        </form>
    );
}

export default MemberForm;