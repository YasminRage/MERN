import express from 'express'

const router = express.Router() //access to express router

router.route('/').get((req,res) => res.send('hello world'))

export default router