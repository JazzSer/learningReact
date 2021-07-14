import { useState } from 'react';
import SocialCard from './SocialCard';
import './App.css';
import Button from './components/Button';
import NoOfUser from './components/NoOfUser';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {
  const[users, setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [userPerPage]=useState(5);

  const onclickHandler = () =>{
    setLoading(true);
    axios.get("https://randomuser.me/api/?results=15")
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

  /* Get current cards */
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = users.slice(indexOfFirstUser,indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Random User Generator</h1>
      <Button clicked={onclickHandler}/>
      
      <div className="cards-container">
        {users.map((user,index)=>(
          <SocialCard userData={user} key={index}/>
        ))}
        </div>
      <div className="container">
        <NoOfUser users={currentUser} loading={loading}/>
        <Pagination userPerPage={userPerPage} totalUsers={users.length} paginate={paginate}/>
      </div>
    </div>
  );
}

export default App;
