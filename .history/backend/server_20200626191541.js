import express from 'express'
import da
const app = express();

app.get("/api/products", (req, res) => {
      res.send(data.products);
})