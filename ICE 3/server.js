js
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        https.createServer(options, app).listen(PORT, () => {
        console.log('Server running at https://localhost:' + PORT);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });