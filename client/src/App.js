import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Header from './components/Navbar';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import UserDash from './pages/userDash';
import ListingCategory from './pages/ListingCategories';
import AddListItem from './pages/AddListItem'
import ListedProduct from './pages/ListedProduct';
import ItemRequests from './pages/ItemRequests';

// Construct main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Set up client to execute the `authLink` middleware prior to making the request to our GraphQL API
const client = new ApolloClient({  
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column  container-fluid min-100-vh">
        <StoreProvider>
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/Login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}              
              />
              <Route 
                path="/userDash"
                element={<UserDash />}              
              />
              <Route 
                path="/itemRequests/:id"
                element={<ItemRequests />}
              /> 
              <Route 
                path="/donate"
                element={<Donate />}
              /> 
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="/addListItem" 
                element={<AddListItem />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />  

              <Route
              path="/categories/:id"
              element={<ListingCategory />}            
              />

            <Route
              path="/listedproduct/:id"
              element={<ListedProduct />}            
              />
            </Routes>
            
          </div>
          <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
