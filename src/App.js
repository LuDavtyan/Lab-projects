import Header from "./components/Header/header";
import Settings from "./components/settings/settings";
import Limits from "./components/limits/limits";
import Days from "./components/days/days";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter> 
       <div >
         <Header/>
       
            <Routes>
               <Route path="settings" element={<Settings/>}/>
               <Route path="limits" element={<Limits/>}/>
               <Route path="/*" element={<Days/>}/>
            </Routes> 
          
         </div>
    </BrowserRouter>
  );
}

export default App;
 