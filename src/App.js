import Main from './components/pages/Main/Main';
import Table from './components/pages/Table/Table';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import Error from './components/pages/Error';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/store';


const App = () => {
  //const dispatch = useDispatch();
 // useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
     <NavBar />
     <h2 className="mb-4 text-center">TABLES: </h2>
      <Container>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Container>
</main>
  )
}
export default App;



