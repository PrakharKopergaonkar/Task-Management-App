const express = require('express')
const auth = require('../../middleware/auth')
const router = express.Router();

//Item model

const Item = require('../../models/item')

// @route GET api/items
//@desc GET All items
//@access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
})

// @route POST api/items
//@desc  Create A post
//@access Private

router.post('/', auth, (req, res) => {
   const newItem = new Item({
       name: req.body.name,
       DueDate: req.body.DueDate,
       label: req.body.label
   });
   newItem.save().then(item => res.json(item))
})

// @route Delete api/items
//@desc  Delete A post
//@access Private

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({sucess: true})))
        .catch(err => res.status(404).json({sucess: false}));
 })

router.patch('/:id', (req, res) => {
    var id = req.params.id
    Item.findByIdAndUpdate(id, {"status":req.body.status}, (err, post) => {
        if(err) return err
        res.json({sucess:true})
    })
})
module.exports = router;