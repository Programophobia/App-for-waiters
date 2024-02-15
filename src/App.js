import Main from './components/pages/Main/Main';
import Table from './components/pages/Table/Table';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import Error from './components/pages/Error';

const App = () => {
  return (
    <main>
     <NavBar />
     <h2 className="mb-4 text-center">TABLES: </h2>
      <Container>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/table/:tableId" element={<Table />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
</main>
  )
}
export default App;



