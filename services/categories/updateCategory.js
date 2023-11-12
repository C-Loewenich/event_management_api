import categoryData from '../../data/categories.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const updateCategoryById = (id, name) => {
    const category = categoryData.categories.find(category => category.id === id);

    if (!category) {
        throw new ResourceNotFoundError('Categories', id)
    }

    category.name = name ?? category.name;

    return category;
}

export default updateCategoryById;