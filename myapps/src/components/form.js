import React, { useState } from 'react';

export default function Form(props) {
    const [text, setText] = useState('');
    const handleChange = event => {
        
setText (event.target.value);

    };
    const handleSubmit = event =>{
        event.preventDefault();
        props.handleAddTask({
            id:Date.now(),
            title:text,
            completed:false,
        });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                placeholder='enter task'
                value={text}
                onChange={handleChange} />

            <input type='submit' />
        </form>
    );
}



