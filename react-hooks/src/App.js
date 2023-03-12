import logo from './logo.svg';
import './App.css';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';

function App() {
  return (
    <div className="container">
      <h1 className="text-warning text-center m-5">React Hooks</h1>
      <h2 className="h3 text-success">A - UseState Hooks</h2>
      <hr />

      <ClassState />
      <FunctionState />
    </div>
  );
}

export default App;
