import express from 'express';
import path from 'path';

var router = express.Router();

router.get('*', (req, res) => {
    var id = req.params[0],
        filePath = path.join(__dirname, `../../data/case-studies/${id}.json`);

    res.sendFile(filePath);
});

export default router;