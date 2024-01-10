import './App.css';
import { darkTheme } from './utils/Themes'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar/Navbar';
import Siddhant from './components/Siddhant/Siddhant';
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
console.log(darkTheme);
function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Navbar></Navbar>
          <div className='body'>
            <Siddhant></Siddhant>
            <div>
              <Skills></Skills>
            </div>
            <div className='wrapper'>
              <Contact/>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;