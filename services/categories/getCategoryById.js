import categoryData from '../../data/categories.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const getCategoryById = (id) => {
    const category = categoryData.categories.find(category => category.id == id);
    
    if (!category) {
        throw new ResourceNotFoundError('Categories', id)
    }

    return category
}

export default getCategoryById;