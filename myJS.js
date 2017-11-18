var model = {
    currentCat : null,
    showAdmin : false,
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
        admin.init();
    },
    
    getCurrentCat: function(){
        return model.currentCat;
    },
    setCurrentCat :function(copyCat){
        model.currentCat = copyCat;
        catView.render();
    },
    getCats: function(){
        return model.cat;
    },
    updateCount: function(){
        model.currentCat.countClick++;
        catView.render();
    },
    isHidden: function(){
        return model.showAdmin;
    },
    showHide: function(){
        if(octopus.isHidden() == false)
            {
                model.showAdmin = true;
            }
        else
            {
                model.showAdmin = false;
            }
        admin.render();
    },
    setName: function(newName){
        model.currentCat.name = newName;
        catList.render();
    },
    setUrl: function(newUrl){
        model.currentCat.source = newUrl;
    },
    setClicks: function(newClicks){
        model.currentCat.countClick = newClicks;
    }
};
var catList = {
    init: function(){
        this.catListElem = document.getElementById("catList");
        catList.render();
    },
    render: function(){
        var list = octopus.getCats();
        this.catListElem.innerHTML = '';
        for(var i = 0; i < list.length; i++)
            {
                var cat = list[i];
                var elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click', function(catCopy){
                    return function(){
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    };
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
var admin = {
    init: function(){
        this.form = document.getElementById('edit');
        this.newName = document.getElementById('changeName');
        this.newUrl = document.getElementById('url');
        this.newClicks = document.getElementById('changeClicks');
        this.save = document.getElementById('save');
        this.cancel = document.getElementById('cancel');
        this.adminButton = document.getElementById('Admin');
        admin.render();
    },
    render: function(){
        if(!octopus.isHidden())
            {
                this.form.style.display = 'none';
                console.log('none');
            }
        else
        {
            this.form.style.display = 'block';
            console.log('block');
        }
        
    }
};
function update(){
    this.newName = document.getElementById('changeName');
    this.newUrl = document.getElementById('url');
    this.newClicks = document.getElementById('changeClicks');
    octopus.setName(this.newName.value);
    octopus.setUrl(this.newUrl.value);
    octopus.setClicks(this.newClicks.value);
    catView.render();
}
function display(){
    this.form = document.getElementById('edit');
    this.form.display = 'block';
    octopus.showHide();
}
function hide(){
    this.form = document.getElementById('edit');
    this.form.display = 'none';
    octopus.showHide();
}
octopus.init();