const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mediaRoutes = require("./routes/mediaRoutes");

const app = express();

// CORS configuration to allow your Vercel frontend
app.use(
  cors({
    origin: ["https://localhost:5000","https://verification-media-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// API routes
app.use("/api/media", mediaRoutes);

app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

// Use default port if env variable missing
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const mediaRoutes = require("./routes/mediaRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/media", mediaRoutes);

// app.get('/',(req,res)=>{
//   res.send({
//     activeStatus:true,
//     error:false,
//   })
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

// Export the app for Vercel serverless functions
// module.exports = app;
