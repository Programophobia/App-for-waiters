
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';

const App = () => {
  return (
    <main>
     <NavBar />
      <Container>
        gggg
      </Container>
</main>
  )
}
export default App;


          
//<Routes>
//<Route path="/" element={<Main/>} />
//<Route path="/table/:tableId" element={<Table />} />
//<Route path="*" element={<Error />} />
//</Routes>