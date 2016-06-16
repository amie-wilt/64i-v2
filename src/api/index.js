import express from 'express';
import caseStudies from './case-studies';
import bios from './bios';
import testimonials from './testimonials';

var router = express.Router();

router.use('/case-studies', caseStudies);
router.use('/bios', bios);
router.use('/testimonials', testimonials);

export default router;