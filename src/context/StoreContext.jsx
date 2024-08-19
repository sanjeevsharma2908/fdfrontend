import { createContext, useEffect, useState } from "react";
import  axios  from 'axios';


export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  // add to cart logic
  const [cartItems, setCartItems] = useState({});
  const [food_list,setFoodList] = useState([]);
  const url = 'http://localhost:4000'
  const [token,setToken] = useState("");
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };
  // logic to remove the cart Items
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
    }
  };

const getTotalCartAmount = () =>{
  let total = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = food_list.find((product) => product._id === item);
      total += itemInfo.price * cartItems[item];
    }
  }
  return total;
}
const fetchFoodList = async () =>{
  try {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data);
  } catch (error) {
    
  }


  const loadCartData = async (token) =>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
      setCartItems(response.data.cartData);
    
  }
}

useEffect(()=>{

async function loadData(){
  await fetchFoodList();
  if(localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'));
    await loadCartData(localStorage.getItem('token'));
  }
}

loadData();

},[])

 
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
