import './App.css';
import TextInput from './component/Input/TextInput';
import Toolbar from './component/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <div className="border">
        <TextInput placeholder="Add Post Title" />
        <Toolbar/>
      </div>
    </div>
  );
}

export default App;