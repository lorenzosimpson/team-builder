import React from 'react';
import styled from 'styled-components';

const StyledMember = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 2%;
`

const Member = props => {
    return (
        <>
            {props.members.map(member => (
                <StyledMember key={member.id}>
                    <h1>{member.name}</h1>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                    <button onClick={() => props.setMemberToEdit(member)}>Edit</button>
                </StyledMember>
            ))}
        </>
    );
}

export default Member;