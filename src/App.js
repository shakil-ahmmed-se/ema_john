
import './App.css';
import Header from './components/Header/Header';
import Invetory from './components/Inventory/Invetory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Shop from './components/Shop/shop';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>}/>
          <Route exact path='/shop'  element={<Shop></Shop>}/>
          <Route exact path='/review' element={<Review></Review>}/>
          <Route exact path='/inventory' element={<Invetory></Invetory>}/>
          <Route exact path={'/product/:productKey'} element={<ProductDetails></ProductDetails>} />
          <Route exact path='*' element={<NotFound></NotFound>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
