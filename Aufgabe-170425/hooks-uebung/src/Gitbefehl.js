import React from 'react'

function GitBefehl({ name, parameter, beschreibung }) {
    return (
        <div>
            <h3>
                Gitbefehl
            </h3>
            <ul>
                <li>name:{name}</li>
                <li>parameter:{parameter}</li>
                <li>beschreibung:{beschreibung}</li>
            </ul>

        </div>

    )
}

export default GitBefehl