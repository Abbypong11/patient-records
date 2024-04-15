import express from 'express';


//create express app
const app = express();

//set port, listen for incoming requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));
