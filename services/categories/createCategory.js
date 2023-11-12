import categoryData from '../../data/categories.json' assert {type: "json"};
import { v4 as uuid } from 'uuid'

const createCategory = (name) => {
    const newCategory = {
        name,
        id: uuid(),
    };

    categoryData.categories.push(newCategory);
    return newCategory
}

export default createCategory;