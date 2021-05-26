import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Recents from './components/Recents/Recents';
import Posts from './components/Posts/Posts';
import Contacts from './components/Contacts/Contacts';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';

import './App.css';

const App = () => {

    const [currentPostId, setCurrentPostId] = useState(null);
    const [currentRecentId, setCurrentRecentId] = useState(null);
    const [currentContactId, setCurrentContactId] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    return(
       <BrowserRouter>
       <div className="App">
           <NavBar />
           <main>
           <Switch>
               <Route path="/" exact component={ Home } />
               <Route path="/recent" exact component={ Recents } />
               <Route path="/posts" exact component={ Posts } />
               <Route path="/contact" exact component={ Contacts } />
               <Route path="/admin" exact component={() => <Admin authorized={ authorized }
                currentPostId={ currentPostId } 
                setCurrentPostId={ setCurrentPostId }
                currentRecentId={ currentRecentId } 
                setCurrentRecentId={ setCurrentRecentId }
                currentContactId={ currentContactId }
                setCurrentContactId={ setCurrentContactId } /> } />
               <Route path="/login" exact component={() =>  <Login authorized={ authorized } setAuthorized={ setAuthorized } /> } />
           </Switch>
           </main>
       </div>
       </BrowserRouter>
    );
}

export default App;