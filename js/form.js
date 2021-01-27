class Form{
    constructor(){
        this.input = createInput("").attribute('placeholder','Enter Name here');
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.reset = createButton('reset');
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2 -40,displayHeight/2-80);
        this.button.position(displayWidth/2 +30,displayHeight/2-40);
        this.reset.position(displayWidth-200,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-40,displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.UpdateCarsAtEnd(0);

            database.ref('/').update({
                'players':null
            })
        })
    }
}