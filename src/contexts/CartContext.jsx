import { React, createContext, useState } from "react"

const CartProvider = ({ children }) => {

  const [state, setState] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])


  return (
    <AppContext.Provider value={[state, setState]} >
      {children}
    </AppContext.Provider>
  )
}

export default CartProvider
export const AppContext = createContext()

