const express = require("express");
const cors = require("cors");
const sequelize = require("./utils/DataBase");
const FeedbackRoutes = require("./routes/Feedback");

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use("/review", FeedbackRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error(err));
