import React from 'react';

const Member = props => {
    return (
        <>
            {props.members.map(member => (
                <div key={member.id}>
                    <h1>{member.name}</h1>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </>
    );
}

export default Member;