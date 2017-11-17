var model = {
    currentCat : null,
    cat : [
        {
            name : 'Hehe',
            countClick : 0,
            source : "cat1.jpg" 
        },
        {
            name: 'haha',
            countClick: 0,
            source: 'cat2.jpg'
        }
    ]
};

var octopus = {
    init: function(){
        model.currentCat = model.cat[0];
        catList.init();
        catView.inti();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    setCurrentCat :function(cat){
        model.currentCat = cat.name;
        catView.render(cat);
    },
    getCats: function(){
        return model.cat;
    }
};
var catList = {
    init: function(){
        this.catList = document.getElementById("catList");
        catList.render();
    },
    
};