import express from 'express';
import path from 'path';

var router = express.Router();

router.get('/', (req, res) => {
    var filePath = path.join(__dirname, `../../data/testimonials.json`);

    res.sendFile(filePath);
});

export default router;