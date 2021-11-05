const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.findAll({ where: {
      id: category.id, 
      pid: Product.category_id }, 
      // include its associated Products
       include: [{ model: Product }]
    });
    res.status(200).json(allCategories);  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const singleProduct = await Category.findByPk(req.params.id, {
      // include its associated Products
      include: [{ model: Product }]
    });
    if (!singleProduct) {
      res.status(404).json({ message: 'No products found in that category' });
      // exit the function
      return;
    }
  res.status(200).json(singleProduct); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const categoryData = await Category.create({
      category_id: req.body.category_id,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // Grab the category ID value by the request, 
    const singleCategoryData = await Category.findByPk(reg.body.params.id);
    const categoryUpdate = await Category.findOne(req.body.category_name);
    const categoryNameUpdate = await Category.update(req.body.category_name, { where: { singleCategoryData: categoryUpdate } }); 

    res.status(200).json(categoryNameUpdate);
  } catch (err) {
    res.status(400).json(err);

  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
