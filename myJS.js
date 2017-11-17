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
        catView.init();
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
    },
    updateCount: function(){
        model.currentCat.countClick++;
        catView.render();
    }
};
var catList = {
    init: function(){
        this.catListElem = document.getElementById("catList");
        catList.render();
    },
    render: function(){
        var list = octopus.getCats();
        for(var i = 0; i < list.length; i++)
            {
                var cat = list[i];
                var elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click', function(catCopy){
                    return function(){
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    }
                }(cat));
                this.catListElem.appendChild(elem);
            }
    }
};
var catView = {
    init: function(){
        this.displayClick = document.getElementById('clicks');
        this.displayName = document.getElementById('name');
        this.image = document.getElementById('myCat');
        this.image.addEventListener('click', function(){
            octopus.updateCount();
        });
        catView.render();
    },
    
    render: function(){
        var presentCat = octopus.getCurrentCat();
        this.displayName.textContent = presentCat.name;
        this.displayClick.textContent = presentCat.countClick;
        this.image.src = presentCat.source;
    }
    
};
octopus.init();