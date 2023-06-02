import { createRouter } from "@storeon/router"

export default createRouter([
  ["/", () => ({ page: "home" })],
  ["/about", () => ({ page: "about" })],
  ["/contact", () => ({ page: "contact" })],
  ["/projects", () => ({ page: "projects" })],
  ["/menu", () => ({ page: "menu" })],
  ["/stack", () => ({ page: "stack" })],
])
