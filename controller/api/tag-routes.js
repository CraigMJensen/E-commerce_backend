const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  console.info('======================');
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  console.info('======================');
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  console.info('======================');
  // create a new tag
});

router.put('/:id', (req, res) => {
  console.info('======================');
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  console.info('======================');
  // delete on tag by its `id` value
});

module.exports = router;
