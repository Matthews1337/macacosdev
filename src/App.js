import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
        <footer>
          <section class='footer'>
            <div class='MDG'>
              <p>
                © 2024 - Macacos Do Global All Rights Reserved
              </p>
            </div>
            <div class='social'>
              <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faGithub} /></a>
              <a className="circular-menu__item" href="#"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </section>
        </footer>
      </header>
    </div>
  );
}

export default App;