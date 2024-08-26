import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Categories from './Pages/Categories';
import Items from './Pages/Items';
import Orders from './Pages/Orders';
const App: React.FC = () => {
    return (
        <Router>
            <Route>
                <Route path="/categories" Component={Categories} />
                <Route path="/items" Component={Items} />
                <Route path="/orders" Component={Orders} />
            </Route>
        </Router>
    );
};

export default App;
