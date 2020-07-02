import express from 'express'
import data from './data'

const app = express();

app.get("", (req, res) => {
      res.send(data.products);
});
app.listen(5000, () => {console.log("server started at http://localhost:5000");
});