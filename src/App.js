import TesbihCirle from './TesbihCircle';
import './App.css';

function pull_test (props) {
  console.log(props)
}

function App() {
  return (
    <div>
    <TesbihCirle com = {pull_test}/>
    </div>
    
  );
}

export default App;
