const express = require('express');

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
=======

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(5000);
>>>>>>> Auth
