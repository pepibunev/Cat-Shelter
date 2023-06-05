const breed = [{

}];

exports.getAll = exports.getAll = () => breed.slice();

exports.getOne = (breedId) => breed.find(x => x.id === breedId);

exports.create = (catData) => {
    const newCat = {
        id: uniqid,
        ...catData
    }

    cats.push(newCat);
    console.log(newCat);
    return newCat;
};