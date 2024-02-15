
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
     <NavBar />
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
<h2 className="mb-4 text-left">WAITER APP</h2>
export default App;
