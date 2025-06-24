import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'
import MainSite from './components/MainSite'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import Courses from './components/Courses';
import Contact from './components/Contact';
import Regulations from './components/Regulations'
import PrivacyPolicy from './components/PrivacyPolicy'
import Admin from './components/Admin'
import AdminMainPage from './components/AdminMainPage'
import Messages from './components/Messages';
import BlogAdmin from './components/BlogAdmin';
import SingleArticle from './components/SingleArticle';
import NewUser from './components/NewUser';
import ClientsAdmin from './components/ClientsAdmin';
import SalesSitesAdmin from './components/SalesSitesAdmin';



function App() {
  return (
  
    <Provider store = {store}>
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/o-nas" element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/kursy" element={<Courses/>} />
        <Route path="/kontakt" element={<Contact/>} />
        <Route path="/regulamin" element={<Regulations/>} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicy/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin-main-page" element={<AdminMainPage/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/blogadmin" element={<BlogAdmin/>} />
        <Route path="/single-article" element={<SingleArticle/>} />
        <Route path="/new-user" element={<NewUser/>} />
        <Route path="/klienciadmin" element={<ClientsAdmin/>} />
        <Route path="/stronysprzedazowekursowadmin" element={<SalesSitesAdmin/>} />
       </Routes>
    </Router>
    </Provider>
  );
}

export default App;
