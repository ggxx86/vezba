enchant();

var game = new Core(320, 320); // game stage
    game.preload('../img/a.jpg'); // preload image
    game.fps = 20;

    game.onload = function(){
    	
        var bear = new Sprite(32, 32);
        bear.image = game.assets['chara1.png'];
        game.rootScene.addChild(bear);
        bear.frame = [6, 6, 7, 7];   // select sprite frame
        
        bear.tl.moveBy(288, 0, 90)   // move right
            .scaleTo(-1, 1, 10)      // turn left
            .moveBy(-288, 0, 90)     // move left
            .scaleTo(1, 1, 10)       // turn right
            .loop();                 // loop it
    };
window.alert('aa')
    game.start();