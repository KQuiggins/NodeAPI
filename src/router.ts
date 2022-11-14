import { Router } from 'express';

const router = Router();

/* Product Routes */

router.get('/product', (req, res) => {
    res.json({ message: req.thisis_secret})
})
router.get('/product/:id', () => {})
router.put('/product', () => {})
router.post('/product', () => {})
router.delete('/product/:id', () => {})

/* Update Routes */

router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

/* Update Points */

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router


