const Cat = require('../models/Cat');

exports.getAll = async () => await Cat.find().lean();

exports.getOne = (catId) => Cat.findById(catId);

exports.deleteOne = (catId) => Cat.deleteById(catId); 

exports.create = (catData) => {
    const cat = new Cat(catData);
    console.log(cat);

    return cat.save();
    
};