import { StatusBar } from 'expo-status-bar';
import Home from './components/Home'
import {Container} from './constants/appStyles'

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}
