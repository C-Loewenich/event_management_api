import categoryData from '../../data/categories.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const deleteCategory = (id) => {
    const index = categoryData.categories.findIndex((category) => category.id == id);
    if (index === -1) {
        throw new ResourceNotFoundError('Categories', id)
    }
    categoryData.categories.splice(index, 1);
    return id;
}

export default deleteCategory