const express=require('express');
const { getAllLot, createLot } = require('../controller/lot.controller');
const router=express.Router()


router.get('/',getAllLot)
router.post('/', createLot)
module.exports=router;
