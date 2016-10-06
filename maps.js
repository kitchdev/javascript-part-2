var util = require("util")

function Tile(type){
    
    
    this.type = type;
    
    if (type === 'grass' || type === 'sand' ) {
        
        this.isWalkable = true;
    }
    else {
        this.isWalkable = false;
    }
        
    }

function Map(width, height) {
  
    this.width = 0;
        
        if (!isNaN) {
            this.width = width;
        }
        
    this.height = 0;
        
        if (!isNaN) {
            this.height = height; 
        }
    
    var arrayOuter = [];
    
    for(var i = 0; i < width; i++) {
    
        var arrayInner = [];
    
        for(var y = 0; y < height; y++) {
                
         arrayInner.push(new Tile(getType()))
        
        }
        arrayOuter.push(arrayInner)
        
    }
    
    this.tiles = arrayOuter

}
var getType = function() {
           
    var random = Math.floor((Math.random()*3) + 1);
           
             if (random === 1 ) {
                 return 'grass';
             } else if (random === 2) {
                 return 'water';
             } else {
                 return 'sand';
             }
             }


var suck = new Map(10,4);

console.log(util.inspect(suck.tiles, { showHidden: true, depth: null, colors: true }));;