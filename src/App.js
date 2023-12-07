import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";


function App() {
  return (
    <div className="App">
     
      <Header/>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
