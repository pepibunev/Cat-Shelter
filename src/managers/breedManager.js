const Breed = require('../models/Breed');

exports.getAll = async () => await Breed.find().lean();

exports.create = (breedData) => {
    const breed = new Breed(breedData);
    console.log(breed);

    return breed.save();
    
};