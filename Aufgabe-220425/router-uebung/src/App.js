// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Listing from './Listing';
import befehlDate from './gitBefehl.json'


function App() {
  const [anzahl, setAnzahl] = useState(1);
  return (

    <div className="GitBefehl">
      {befehlDate.slice(0, anzahl).map((befehl) =>
        <Listing key={befehl.Id} name={befehl.name} parameter={befehl.parameter} beschreibung={befehl.beschreibung} image={befehl.image}> </Listing>
      )}
      <button onClick={() => setAnzahl(anzahl + 1)}>Mehr anzeigen</button>
    </div>
  );
}

export default App;
