import categoryData from '../../data/categories.json' assert {type: "json"};
import ResourceNotFoundError from '../../errors/notFoundError.js';

const getCategoryById = (id) => {
    console.log(id)
    const category = categoryData.categories.find(category => category.id == id);
    console.log(category)
    
    if (!category) {
        throw new ResourceNotFoundError('Category', id)
    }

    return category
}

export default getCategoryById;