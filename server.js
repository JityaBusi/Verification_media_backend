const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mediaRoutes = require("./routes/mediaRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/media", mediaRoutes);

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Export the app for Vercel serverless functions
// module.exports = app;
