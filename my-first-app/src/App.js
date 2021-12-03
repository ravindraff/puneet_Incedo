// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
// import Badge from './components/Badge';
import Badge from './components/Badge'

function App() {
  return (
  
    <div className="App">
      <Hello></Hello>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge>
      <Badge caption="Sent"></Badge>
    </div>
   

  );
}

export default App;
