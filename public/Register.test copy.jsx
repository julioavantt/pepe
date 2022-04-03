import { MemoryRouter } from "react-router-dom"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { render, screen } from "@testing-library/react"

import { Register } from "./Register"

const server = setupServer(
   rest.get("http://localhost:8080/auth/data", (req, res, ctx) => {
      return res(
         ctx.json({
            result: {
               continente: ["America", "Europa", "Otro"],
               region: ["Otro", "Latam", "Brasil", "America del Norte"],
               Rol: ["Team Member", "Team Leader"],
            },
         })
      )
   })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it("fetch role options", async () => {
   render(<Register />, { wrapper: MemoryRouter })

   expect(
      await screen.findByRole("option", { name: "America" })
   ).toBeInTheDocument()
})

import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { Register } from "./Register"

it("fetch options", () => {
   render(<Register />, { wrapper: MemoryRouter })

   expect(
      screen.getByRole("option", { name: "Seleccionar rol..." })
   ).toBeInTheDocument()

   //screen.getByRole("option", { name: "Europa" })).toBeInTheDocument()

   /*    expect(
      await screen.findByRole("option", { name: "America" })
   ).toBeInTheDocument() */
})


get by rol -> estático
get by rol -> dinamico (buh)
async await get by rol (buh)
async await findby role yeah but