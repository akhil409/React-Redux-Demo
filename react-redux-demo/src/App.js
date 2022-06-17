import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Cake/Store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamsConatiner from './Components/IceCreamsConatiner';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import SnacksContainer from './Components/SnacksContainer';
import HooksSnacksContainer from './Components/HooksSnacksContainer';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <header className="App-header">
             <HooksSnacksContainer />
             <SnacksContainer />
             <ItemContainer cake />
             <ItemContainer />
             <HooksCakeContainer />
             <CakeContainer />
             <IceCreamsConatiner />
             <NewCakeContainer />
         </header>
       </div>
    </Provider>
  );
}

export default App;
