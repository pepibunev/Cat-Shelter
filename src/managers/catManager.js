const cats = [{
    id: '1321412542',
    name: 'Bombay Cat',
    description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep.',
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    breed: 'Orange',
}];

exports.getAll = () => cats.slice();

exports.getOne = (catId) => cats.find(x => x.id === catId);

exports.create = (catData) => {
    const newCat = {
        id: Math.random(),
        ...catData,
    }

    cats.push(newCat);
    return newCat;
};