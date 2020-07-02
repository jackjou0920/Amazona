import express from 'express'; // Node.js library for addressing HTTP traffic
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

/* 
Express is the role of Controller
HTTP request to port 5000, and into express by node
Express will decide a route to handle depending on rhe request
The route returns a response to the node and back to HTTP
*/
const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);



app.listen(config.PORT, () => { console.log("Server started at http://localhost:5000") });