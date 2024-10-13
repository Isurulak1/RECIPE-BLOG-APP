const Item = require("../model/itemModel")

const getAllItems = async (req, res) => {
   const result = await Item.find().sort({createAt: -1});
   res.status(200).json(result);
}

const getSearchedItems = async (req, res) => {
    const {q} = req.query;
    console.log(q);
    try {
       let items;
       if(q){
        items = await Item.find({name: {$regex: q, $options: 'i'}})
       }
         res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: "No items found!"});
    }
}

module.exports = {
    getAllItems, getSearchedItems
}