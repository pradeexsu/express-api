const express = require('express')

const emojis = require('./emojis')


const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  })
})

router.get('/verify-mobile-number', (req, res) => {
  console.log(req.body.mobile_number)

  res.json({
    message: `${req.body.mobile_number} : verified`
  }).statusCode(200)

})

router.get('/get-otp', (req, res) => {
  
  let otp = (Math.random()*1000000).toString().substring(0,4)
  
  res.json({
    message: 'opt-genrated successfully',
    otp: otp
  }).statusCode(200)

})

router.get('/verify-otp', (req, res) => {
  console.log(req.body.otp)

  res.json({
    message: `wellcome, otp verified (${req.body.otp})`
  }).statusCode(200)

})



router.use('/emojis', emojis)

module.exports = router
