import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import React from "react"
import Home from "./Home/Home"
import Menu from "./Menu/Menu"
import Projects from "./Projects/Projects"
import Stack from "./Stack/Stack"

const Page = () => {
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case "home":
      Component = <Home />
      break
    case "menu":
      Component = <Menu />
      break
    case "projects":
      Component = <Projects />
      break
    case "stack":
      Component = <Stack />
      break
    default:
      Component = <h1>404 Error</h1>
  }

  return <main>{Component}</main>
}

export default Page
