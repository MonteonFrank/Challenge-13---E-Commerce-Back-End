const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve tags' });
  }
});

// get one tag
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tag) {
      res.status(404).json({ error: 'Tag not found' });
    } else {
      res.json(tag);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve tag' });
  }
});

// create new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json({ message: "Tag created successfully", tag});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create tag' });
  }
});

// update tag
router.put('/:id', async (req, res) => {
  try {
    const [numAffectedRows, affectedRows] = await Tag.update(
      { tag_name: req.body.tag_name },
      { returning: true, where: { id: req.params.id } }
    );
    if (numAffectedRows === 0) {
      res.status(404).json({ error: 'Tag not found' });
    } else {
      const updatedTag = affectedRows[0];
      res.json({
        message: 'Tag updated successfully',
        tag: updatedTag
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update tag' });
  }
});

// delete tag
router.delete('/:id', async (req, res) => {
  try {
    const numAffectedRows = await Tag.destroy({ where: { id: req.params.id } });
    if (numAffectedRows === 0) {
      res.status(404).json({ error: 'Tag not found' });
    } else {
      res.status(200).json({ message: 'Tag successfully deleted' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete tag' });
  }
});

module.exports = router;

