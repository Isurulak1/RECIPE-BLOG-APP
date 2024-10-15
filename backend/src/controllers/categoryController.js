const Category = require('../model/categoryModel');
const Item = require('../model/itemModel');

const getCategory = async (req, res) => {
    const {category} = req.params;
    try {
        const categoryData = await Category.findOne({name: category});
        if(!categoryData){
            res.status(404).json({message: "Category not found!"});
        }
        const items = Item.find({ menuId: categoryData.menuId});
        res.status(200).json(items);


    } catch (error) {
        res.status(500).json({message: "No category specified!"});
    }
}

module.exports = {
    getCategory
}