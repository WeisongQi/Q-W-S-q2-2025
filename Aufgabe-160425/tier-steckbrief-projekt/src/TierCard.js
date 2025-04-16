import React from 'react'

function TierCard() {
    const tierName = "Bello"
    const tierKrankheit = "Läuse"
    const tierArt = "Hund"
    return (
        <div>
            <h3>
                TierCard
            </h3>
            <ul>
                <li>name:{tierName}</li>
                <li>art:{tierArt}</li>
                <li>krankheit:{tierKrankheit}</li>
            </ul>

        </div>

    )
}

export default TierCard