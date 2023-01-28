import './App.css';
import Asset from './components/Asset'
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
  <Container>
    
    <Stack gap={3} className="col-md-6 mx-auto">
    <h1>Terraforming Mars resurssihallinta</h1>
    <Asset asset='heat' effect='megacredit' amount='-4' production={true}/>
    <Asset asset='megacredit' effect='megacredit'/>
    <Asset asset='power' effect='heat'/>
    <Asset asset='plant' effect='megacredit'/>
    </Stack>
    </Container>
  </div> 
  )
}

export default App;
