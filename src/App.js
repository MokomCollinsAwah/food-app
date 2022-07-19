import React, { useState } from "react";
import Header from "./components/FoodApp/Layout/Header";
import Meals from "./components/FoodApp/Meals/Meals";
import Cart from "./components/FoodApp/Cart/Cart";
import CartProvider from "./store/CartProvider";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );

  //UserAccount Application codes
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  // return (
  //   <React.Fragment>
  //     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
  //     <main>
  //       {!isLoggedIn && <Login onLogin={loginHandler} />}
  //       {isLoggedIn && <Home onLogout={logoutHandler} />}
  //     </main>
  //   </React.Fragment>
  // );
}

export default App;
