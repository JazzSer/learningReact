import { useState } from 'react';
import SocialCard from './SocialCard';
import './App.css';
import Button from './components/Button';
import axios from 'axios';

function App() {
  const[users, setUsers]=useState([]);
  const [loading,setLoading]=useState(false);

  const onclickHandler = () =>{
    setLoading(true);
    axios.get("https://randomuser.me/api/?results=5")
    .then((response)=>{
      console.log(response);
      setUsers(response.data.results);
    }).catch((error)=>{
      console.log(error);
      setLoading(true);
    }).finally(()=>{
      setLoading(false);
    })
  }

  // useEffect(()=>{
  //   (async()=>{
  //     let userData;
  //     try{
  //       const response = await fetch("https://randomuser.me/api/?results=10");
  //       userData = (await response.json()).results;
  //     } catch(error){
  //       console.log(error);
  //       userData=[];
  //     }

  //     setUsers(userData);
  //   })();
  // },[]);



  return (
    <div className="App">
      <h1>Random User Generator</h1>
      <Button clicked={onclickHandler}/>
      
      <div className="cards-container">
        {users.map((user,index)=>(
          <SocialCard userData={user} key={index}/>
        ))}
        </div>
      
    </div>
  );
}

export default App;
