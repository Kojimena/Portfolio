import React from "react"
import "./App.css"
import "./assets/fonts/fonts.css"
import { StoreContext } from "storeon/react"
import { Helmet } from "react-helmet"
import store from "./store"
import Page from "./Pages/index"

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Page />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kojimena</title>
        </Helmet>
        <Helmet>
          <meta name="description" content="Kojimena" />
        </Helmet>
        <Helmet>
          <meta property="og:title" content="Kojimena" />
          <meta
            property="og:description"
            content="Páginas web y diseño Guatemala"
          />
          <meta property="og:image" content="/images/logo.svg" />
          <meta property="og:url" content="https://kojimena.com" />
          <meta property="og:type" content="website" />
        </Helmet>
      </div>
    </StoreContext.Provider>
  )
}

export default App
