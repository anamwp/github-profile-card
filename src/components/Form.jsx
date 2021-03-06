import React, { useState } from 'react'

export default function Form({handleFormData}) {

    const [user, setUser] = useState({
        name: '', 
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleFormData(user.name);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="" value={user.name} id="" onChange={e => setUser({name: e.target.value}) }/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
