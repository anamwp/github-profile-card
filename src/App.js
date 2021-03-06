import React, { useState } from 'react'
import Form from './components/Form';
import ProfileCard from './components/ProfileCard';

export default function App() {
    const [data, setData] = useState({
        name: 'anamwp', 
    });
    const handleFormData = (name) => {
        setData({name: name});
    }
    return (
        <div>
            <h2>Github Profile</h2>
            <Form handleFormData={handleFormData} />
            <ProfileCard name={data.name} />
        </div>
    )
}
