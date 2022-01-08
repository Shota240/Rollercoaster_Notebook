import './App.css';
import {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [park, setPark] = useState("");
  const [country, setCountry] = useState("");
  const [opened_year, setOpenedYear] = useState(0);

  const displayInfo = () => {
    console.log(name + height + speed + park + country + opened_year );
  };
  return (
    <div className="App">
      <div className="information">
        <label>ジェットコースター名:</label>
        <input 
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          />
        <label>高さ:</label>
        <input
          type="number" 
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          />
        <label>速さ（kph）:</label>
        <input
          type="number"
          onChange={(event) => {
            setSpeed(event.target.value);
          }}
           />
        <label>遊園地:</label>
        <input
          type="text"
          onChange={(event) => {
            setPark(event.target.value);
          }}
           />
        <label>国:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
           />
        <label>開業年:</label>
        <input
          type="number"
          onChange={(event) => {
            setOpenedYear(event.target.value);
          }}
           />
        <button onClick={displayInfo}>ジェットコースターを登録する</button>
      </div>
    </div>
  );
}

export default App;
