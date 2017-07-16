import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('layout/main')
})

router.get('/user/:id', (req, res) => {
  res.render('layout/main')
})

export default router
