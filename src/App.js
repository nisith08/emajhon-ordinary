
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
         <Shop></Shop>
          </Route>
          <Route path="/review">
           <Review></Review>

          </Route>
          <Route path="/inventory">
          <Inventory></Inventory>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/productnpm/:productKey">
         <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
         <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   

   
    </div>
  );
}

export default App;
