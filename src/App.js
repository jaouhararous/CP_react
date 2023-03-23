import Adress from './Adress';
import './App.css';
import Profilephoto from './component/profile/Profilephoto';
import Fullname from './component/profile/Fullname.jsx';


function App() {
  return (
    <div className="App">
     <Profilephoto/>
     <Fullname/>
     <Adress/>
    
    </div>
  );
}

export default App;
