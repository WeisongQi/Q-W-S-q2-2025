import React from 'react'

function TierCard({ tierName, tierArt, tierKrankheit }) {
    // let tierName = " "
    // let tierKrankheit = " "
    // let tierArt = " "
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