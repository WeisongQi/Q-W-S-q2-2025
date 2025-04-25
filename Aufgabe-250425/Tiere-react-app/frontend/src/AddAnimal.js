import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddAnimal() {
    const [formData, setFormData] = useState({
        tierart: '',
        name: '',
        krankheit: '',
        geburtstag: '',
        gewicht: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5005/tiere', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Optionally, navigate to the detail page or refresh the list
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h1>New Tier</h1>
            <Link to={`/`}>Go To List</Link>
            <br></br>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tierart">Tierart:</label>
                <input type="text" id="tierart" name="tierart" value={formData.tierart} onChange={handleChange} required />
                <br></br>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <br></br>
                <label htmlFor="krankheit">Krankheit:</label>
                <input type="text" id="krankheit" name="krankheit" value={formData.krankheit} onChange={handleChange} required />
                <br></br>
                <label htmlFor="geburtstag">Geburtstag (YYYY-MM-DD):</label>
                <input type="text" id="geburtstag" name="geburtstag" value={formData.geburtstag} onChange={handleChange} required />
                <br></br>
                <label htmlFor="gewicht">Gewicht (KG):</label>
                <input type="number" id="gewicht" name="gewicht" value={formData.gewicht} onChange={handleChange} required />
                <br></br>
                <button type="submit">Add Animal</button>
            </form>
        </div>
    );
}

export default AddAnimal;