const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "productdb";

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/routes/product.routes")(app);
require("./server/config/mongoose.config")(DB);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
