import React, {useState, useEffect} from 'react';

const Form = props => {
    console.log(props)
    const [member, setMember] = useState({name: '', email: '', role: ''})
    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
        console.log(member)
    };
const submitForm = event => {
    event.preventDefault();
    props.addMember(member);
    setMember({name: '', email: '', role: ''})

}
useEffect(()=>{ 
    setMember(props.memberToEdit)
}, [props.memberToEdit])

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={handleChange} value={member.name}></input>

            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={handleChange} value={member.email}></input>

            <label htmlFor='role'>Role</label>
            <input type='text' name='role' onChange={handleChange} value={member.role}></input>

            <button type='submit'>Add Team Member</button>

        </form>
    );
}

export default Form;