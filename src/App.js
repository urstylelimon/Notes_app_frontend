import './App.css';
import Header from './Components/Header';
import { NotesListpages } from './Components/Pages/NotesListpages';
import { Listitem } from './Components/Pages/Listitem';



function App() {
  return (
    <div className="App">
      <Header/>
      <NotesListpages/>
      {/*<Listitem/>*/}
 

      
    </div>
  );
}

export default App;
