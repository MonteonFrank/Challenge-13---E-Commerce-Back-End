const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // find all categories with associated products
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by id with associated products
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const newCategory = await Category.create(req.body);

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by id
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    await category.update(req.body);

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by id
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    await category.destroy();

    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

