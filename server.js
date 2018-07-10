const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();
app.use(bodyParser.json());

const db = require('./config/keys').mongoURL;

mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('/api/items', items);

// // Serve static assets if in production
// if(process.env.NODE_ENV == 'production'){
//     // Set static folder
//     add.use(express.static('client/build'));

//     app.get('*', (req) => {
//         res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
//     });
// }

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));