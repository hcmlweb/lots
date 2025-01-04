const Lot=require('../models/lot.model')




const getAllLot=async(req,res)=>{
try {
    const getModel=await Lot.find()
    if(!getModel){
        res.status(404).json({massage:"Lot Not Found"})
    }
    res.status(200).json(getModel)
} catch (error) {
    res.status(500).json(error)
}}

const createLot=async (req,res)=>{
    try {
        const newLot= new Lot(req.body)
        if(!newLot){
            res.status(404).json({massage:"New Lot Not Found"})
        }
        const saveLot=await newLot.save()
        res.status(200).json(saveLot)
    } catch (error) {
        res.status(500).json(error)
    }}



    module.exports={getAllLot, createLot}