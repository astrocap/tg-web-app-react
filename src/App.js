import './App.css';
import { useEffect } from 'react';
import {useTelegram} from "./hooks/useTelegram";
//import Header from "./components/Header/Header";
import VideoForm from './components/Video/VideoForm';

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  
  
  return (
    <div className="App">
      <VideoForm />
     work 
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
