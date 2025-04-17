//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import GitBefehl from './Gitbefehl';
import befehlDate from './gitBefehl.json'

function App() {
  const [zahl, setZahl] = useState(15)
  const [colour, setColour] = useState("red")
  const [show, setShow] = useState("none")
  function reset() {
    setZahl(0)
  }
  useEffect(() => {
    console.log("ich wünsche allen, die feiern, schöne Ostertage")

  }, [zahl])

  return (
    <>
      <p>mein zahl is {zahl}</p>

      <button onClick={() => setZahl(zahl + 1)}>+</button>
      <button onClick={() => setZahl(zahl - 1)}>-</button>
      <button onClick={reset}>Reset</button >

      <p style={{ color: colour }}>Daten Bank</p>

      <button onClick={() => setColour("yellow")}>yellow</button>
      <button onClick={() => setColour("black")}>black</button>
      <br></br>
      <hr></hr>
      <button onClick={() => setShow("block")}>show Git Befehl</button>
      <button onClick={() => setShow("none")}>show not Git Befehl</button>


      <div style={{ display: show }} className="GitBefehl-container">
        {befehlDate.map((befehl, index) => (
          <GitBefehl
            key={index}
            name={befehl.nameame}
            parameter={befehl.parameter}
            beschreibung={befehl.beschreibung} />
        ))}
      </div>

    </>

  );
}

export default App;
