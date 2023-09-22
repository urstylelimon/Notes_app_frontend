import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Todo_page from './Components/Pages/Todo_page';
import Header from './Components/Header';
import Singel_todo from './Components/Another_pages/Singel_todo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>

            <Route path='/' exact element={<Todo_page />} />
            <Route path='/note/:id' element={<Singel_todo />} />

        </Routes>
        

      </div>

    </Router>

  );
}

export default App;
