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
    },
    updateCount: function(cat, number){
        cat.countClick = number;
    }
};
var catList = {
    init: function(){
        this.catList = document.getElementById("catList");
        catList.render();
    },
    render: function(){
        var list = octopus.getCats();
        for(int i = 0; i < list.length; i++)
            {
                var cat = list[i];
                var elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click', function(cat){
                    return function(){
                        octopus.setCurrentCat(cat);
                        catView.render();
                    }
                }(cat));
                catList.appendChild(elem);
            }
    }
};
var catView = {
    init: function(){
        this.displayClick = document.getElementById('clicks');
        this.displayName = document.getElementById('name');
        this.image = document.getElementById('myCat');
        catView.render();
    },
    
    render: function(){
        var presentCat = octopus.getCurrentCat();
        this.displayName.textContent = presentCat.name;
        this.displayClick.textContent = presentCat.countClick;
        this.image.src = presentCat.source;
    }
    
};