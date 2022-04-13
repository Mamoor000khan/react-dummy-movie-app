// import React, { createContext, useContext, useState, useEffect } from "react"

// const Auth = createContext();

// // export function useAuth() {
// //   return useContext(AuthContext)
// // }

// export function AuthProvider({ children }) {
//   // const [currentUser, setCurrentUser] = useState()
//   // const [loading, setLoading] = useState(true);
//   // const [user, setUser] = useState(null);
//   const [alert, setAlert] = useState({
//     open: false,
//     message: '',
//     type: 'sucess',
//   })

//   return (
//     <Auth.Provider value={{
//       alert,
//       setAlert
//     }}>
//       { children}
//     </Auth.Provider>
//   )
// }

// export const AuthState = () => {
//   return useContext(Auth);
// };

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../Firebase";
import axios from "axios";
// import { CoinList } from "./config/api";
import { onSnapshot, doc } from "firebase/firestore";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [user, setUser] = useState(null);
  // const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // const fetchCoins = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(CoinList(currency));

  //   setCoins(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (currency === "INR") setSymbol("₹");
  //   else if (currency === "USD") setSymbol("$");

  //   fetchCoins();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        alert,
        setAlert,
        user,
       
        watchlist,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};