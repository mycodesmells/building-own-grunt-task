var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res){});

router.post('/:id', function(req, res){});

router.delete('/:id', function(req, res){
    eval('asdasdas');
});

router.get('/:id/tags', function(req, res){});

router.post('/:id/tags/:tagId', function(req, res){});

router.delete('/:id/tags/:tagId', function(req, res){});

module.exports = router;