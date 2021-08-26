import logo from './logo.svg';
import './App.scss';
import { SimpleText } from './components/SimpleText';

const x = {a: 1}

function App() {
  // ...

  return (
    <div className="App">
      <SimpleText name="Alex" age={300} someObj={x} />
    </div>
  );
}

export default App;
