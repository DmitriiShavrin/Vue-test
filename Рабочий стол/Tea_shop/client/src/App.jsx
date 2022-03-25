import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

//Front-end
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import History from './components/History/History';
import Excursion from './components/Excursion/Excursion';
import Tea from './components/Tea/Tea';
import Pots from './components/Pots/Pots';
import Contacts from './components/Contacts/Contacts';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

// Stores
import storeLogin from './store/storeLogin';

//Admin panel
import All_items from './admin_panel/Tabs/All_items/All_items';
import Solt_items from './admin_panel/Tabs/Solt_items/Solt_items';
import History_change from './admin_panel/Tabs/History/History';
import Excursion_change from './admin_panel/Tabs/Excursion/Excursion';
import Contacts_change from './admin_panel/Tabs/Contacts/Contacts';
import Testimonials from './admin_panel/Tabs/Testimonials/Testimonials';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/item' element={<Card />} />
          <Route path='/item/:id' element={<Card />} />
          <Route path='/history' element={<History />} />
          <Route path='/excursion' element={<Excursion />} />
          <Route path='/tea' element={<Tea />} />
          <Route path='/pots' element={<Pots />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
         
          {
            storeLogin.ON 
              ?
              <>
                <Route path='/all_items' element={<All_items />} />
                <Route path='/solt_items' element={<Solt_items />} />
                <Route path='/change_history' element={<History_change />} />
                <Route path='/change_excursion' element={<Excursion_change />} />
                <Route path='/change_contacts' element={<Contacts_change />} />
                <Route path='/testimonials' element={<Testimonials />} />
              </>
              :
              null
          }
        
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default observer(App);
