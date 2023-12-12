import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';

function App() {
  return (
    <div className="App">
      <h2>Welcome to our frontend</h2>
      <Home/>
      <StudentsView/>
    </div>
  );
}

export default App;
