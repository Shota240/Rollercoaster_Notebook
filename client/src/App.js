import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [park, setPark] = useState("");
  const [country, setCountry] = useState("");
  const [opened_year, setOpenedYear] = useState(0);

  const [coasters_list, setCoastersList] = useState([]);

  const add_Coasters = () => {
    Axios.post('http://localhost:3001/create',{
      name: name,
      height: height,
      speed: speed,
      park: park,
      country: country,
      opened_year: opened_year,
    }).then(() => {
      setCoastersList([
        ...coasters_list,
        {
          name: name,
          height: height,
          speed: speed,
          park: park,
          country: country,
          opened_year: opened_year,
        },
      ])
    });
  };

  const get_Coasters = () => {
    Axios.get('http://localhost:3001/coasters').then((response) => {
      setCoastersList(response.data);
    });
  }

  // const displayInfo = () => {
  //   console.log(name + height + speed + park + country + opened_year );
  // };
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
        <button onClick={add_Coasters}>ジェットコースターを登録する</button>
      </div>
      
      <div className="coasters">
        <button onClick={get_Coasters}>Show Rollercoasters</button>

        {coasters_list.map((val, key) => {
          return (
            <div className="coaster">
             <h3>ジェットコースター名: {val.name}</h3>
             <h3>高さ: {val.height}</h3>
             <h3>速さ（kph）: {val.speed}</h3>
             <h3>遊園地: {val.park}</h3>
             <h3>国: {val.country}</h3>
             <h3>開業年: {val.opened_year}</h3>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
