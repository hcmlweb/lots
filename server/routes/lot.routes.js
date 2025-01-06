const express=require('express');
const { getAllLot, createLot, addFabricToLot } = require('../controller/lot.controller');
const router=express.Router()


router.get('/',getAllLot)
router.post('/', createLot)
router.post('/:id', addFabricToLot)
module.exports=router;
