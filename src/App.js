import React, { Fragment, useState } from "react";
import Header from "./components/FoodApp/Layout/Header";
import Meals from "./components/FoodApp/Meals/Meals";
import Cart from "./components/FoodApp/Cart/Cart";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [VisibleCart, setVisibleCart] = useState(false);
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
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
