import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

//加入購物車彈出視窗 狀態管理
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/Amy/state'

//儲存購物車狀態
const store = configureStore({
  reducer: { cart: cartReducer },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <ThemeProvider theme = {theme}> */}
        {/* <CssBaseline/> */}
        <App />
        {/* </ThemeProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
