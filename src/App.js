import logo from './logo.svg';
import './App.css';
import MainPage from './Componentes/MainPage'
import LoginForm from './Componentes/LoginPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;