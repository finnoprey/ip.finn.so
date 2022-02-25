import './App.css';
import BoxBrowser from './components/BoxBrower';
import BoxLookup from './components/BoxLookup';
import BoxTitle from './components/BoxTitle';

function App() {
  // make api call here

  return (
    <div className='container'>
      <BoxTitle />
      <BoxLookup />
      <BoxBrowser />
    </div>
  );
}

export default App;
