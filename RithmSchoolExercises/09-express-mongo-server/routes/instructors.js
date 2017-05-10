let express = require("express");
let router = express.Router()

let id = 1;
let instructors = [];

router.get("/", function(req,res){
    res.render('index', {instructors})
});

router.get("/new", function(req,res){
    res.render("new");
});

router.get("/:id", function(req,res){
    let instructor = instructors.find(v => v.id === Number(req.params.id))
    res.render('show', {instructor})
});

router.get("/:id/edit", function(req,res){
    let instructor = instructors.find(v => v.id === Number(req.params.id))
    res.render('edit', {instructor})
});

router.post("", function(req,res){
    instructors.push(Object.assign({}, req.body, {id}))
    id++;
    res.redirect('/instructors')
});

router.patch("/:id", function(req,res){
    let instructor = instructors.find(v => v.id === Number(req.params.id));
    instructor.name = req.body.name;
    res.redirect('/instructors')
});

router.delete("/:id", function(req,res){
    let instructorIdx = instructors.findIndex(v => v.id === Number(req.params.id))
    instructors.splice(instructorIdx,1);
    res.redirect('/instructors');
});

module.exports = router;