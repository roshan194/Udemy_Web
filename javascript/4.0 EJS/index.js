import express from "express";
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Define a route for the root of your website
app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
    let advice;

    if (day === 0 || day === 6) { // Check if it's weekend
        advice = "Hey! It's the weekend, it's time to have fun!";
    } else {
        advice = "Hey! It's a weekday, it's time to work hard!";
    }

    res.render('index', { advice: advice });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));