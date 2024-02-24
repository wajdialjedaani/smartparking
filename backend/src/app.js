const express = require("express")
const app = express()


// app.get("/:name", (req, res) => {
//   console.log(req)
//   const { name } = req.params
//   console.log(name)
//   res.json({ message: "Hello World" })
// })
app.get('/add', (req, res) => {
  console.log(req.query)
  const { a, b } = req.query
  const c = Number(a) + Number(b)
  console.log(c)
  return res.json({ message: "addition of two number ", result: c })

})
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
