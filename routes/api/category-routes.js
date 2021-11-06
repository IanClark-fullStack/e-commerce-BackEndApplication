const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const allCategories = await Category.findAll({
      // include its associated Products
       include: [
         { 
           model: Product,
           attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
           }
        ]
      })
    res.status(200).json(allCategories);  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      // include its associated Products
      include: [
        { 
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'] 
        }
      ]
    });
    if (!singleCategory) {
      res.status(404).json({ message: 'No products found in that category' });
      // exit the function
      return;
    }
  res.status(200).json(singleCategory); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const categoryData = await Category.create({
      category_name: req.body.category_name
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
    const categoryIdUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!categoryIdUpdate[0]) {
      res.status(404).json({message:'Unable to find a category with that id'});
      return;
    } else{
      res.status(200).json(categoryIdUpdate);

    }

    
  } catch (err) {
    res.status(500).json(err);

  }
});

router.delete('/:id', async (req, res) => {
  try {
      const deleteId = await Category.destroy({
        where: {
          id: req.params.id
        }
      })
      if (!deleteId) {
        res.status(404).json({ message:'Unable to find a category with that id' });
      }

        res.status(200).json(deleteId);  
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
