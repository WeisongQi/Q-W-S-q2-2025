import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DetailPage() {
    const { id } = useParams();
    const [tier, setTier] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5005/tiere/${id}`)
            .then(response => response.json())
            .then(data => setTier(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!tier) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link to={`/`} >Go Back</Link>
            <Link to={`/tiere/${id}/edit`} >Date bearbeit</Link>
            <h1>{tier.tierart} - {tier.name}</h1>
            <p>krankheit: {tier.krankheit}</p>
            <p>Geburtstag: {tier.geburtstag}</p>
            <p>Gewicht: {tier.gewicht} KG</p>
            {/* Add more fields as needed */}
        </div>
    );
}

export default DetailPage;
