import React from "react"
import "./App.css"
import "./assets/fonts/fonts.css"
import { StoreContext } from "storeon/react"
import store from "./store"
import Page from "./Pages/index"

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Page />
      </div>
    </StoreContext.Provider>
  )
}

export default App
