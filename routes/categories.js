import express from 'express';
import getCategories from '../services/categories/getCategories.js';
import getCategoryById from '../services/categories/getCategoryById.js';
import createCategory from '../services/categories/createCategory.js';
import updateCategoryById from '../services/categories/updateCategory.js';
import deleteCategory from '../services/categories/deleteCategory.js';
import authMiddleware from '../middleware/auth.js';
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js';

const router = express.Router();

router.get('/', (req, res) => {
    const {name} = req.query
    const categories = getCategories(name)
    res.status(200).json(categories)
});

router.get('/:id', (req,res) => {
    const {id} = req.params
    const category = getCategoryById(id)
    //const name = category.name
    res.status(200).json(category)
}, notFoundErrorHandler);

router.post('/', authMiddleware, (req, res) => {
    const {name} = req.body
    const newCategory = createCategory(name)
    res.status(201).json(newCategory)
});

router.put('/:id', authMiddleware, (req,res) => {
    const {id} = req.params;
    const {name} = req.body
    const updatedCategory = updateCategoryById(id, name)
    res.status(200).json({message: `Category id ${id} was updated`, updatedCategory})
}, notFoundErrorHandler);

router.delete('/:id', authMiddleware, (req,res) => {
    const {id} =  req.params;
    const deletedCategoryId = deleteCategory(id);
    res.status(200).json({message: `Category with id ${deletedCategoryId} was deleted!`})
}, notFoundErrorHandler);

export default router;