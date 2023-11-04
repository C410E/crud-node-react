
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from "./styles/global"
import { toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Form from './components/form';
import Grid from './components/grid';
import axios from 'axios';
//parei em 13:44 https://www.youtube.com/watch?v=voXTVTW73E8&t=494s&ab_channel=WillDev

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))

    } catch (error) {
      toast.error(error)
    }    
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])
  return (
   <>
   <Container >
    <Title>usuarios</Title>
    <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
    <Grid onEdit={onEdit} users={users} getUsers={getUsers}/>
   </Container>
   <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/> 
   <GlobalStyles />
   </>
  );
}

export default App;
