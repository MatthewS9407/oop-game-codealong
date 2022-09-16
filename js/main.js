
class Game {
    constructor(){
        this.player = null; //will store an instance of the class Player
        this.obstacles = [];
    }
    start(){
        this.player = new Player();
        this.attachEventListeners();
        
        //move obstacles
        setInterval(() => {
            this.obstacles.forEach( (obstacleInstance) => {
                obstacleInstance.moveDown();
                if (
                    this.player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
                    this.player.positionX + this.player.width > obstacleInstance.positionX &&
                    this.player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
                    this.player.height + this.player.positionY > obstacleInstance.positionY
                ) {
                    location.href = 'gameover.html';
                };
            });
        }, 60);

        //create new obstacles
        setInterval(() => {
            const newObstacle = new Obstacle();
            this.obstacles.push(newObstacle);
        }, 3000);
    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                this.player.moveRight();
            }
        });
    }
}
//setInterval(() => {
        //    const newObstacle = new Obstacle();
        //    this.obstacles.push(newObstacle);
        //setInterval(() => {
        //    this.obstacles.forEach((obstacleInstance) => {
        //        obstacleInstance.moveDown();
        //    });
        //    }, 60) }
        //    , 3000) 
        //    }

class Player {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 0;
      
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveLeft(){
        //this.positionX--;
        //this.domElement.style.left = this.positionX + "vw";
        if (this.positionX > 0) {
            this.positionX--;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
    moveRight(){
        //this.positionX++;
        //this.domElement.style.left = this.positionX + "vw";
        if (this.positionX < 79.5) {
            this.positionX++;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
}

class Obstacle {
    constructor(){
        this.width = 10;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
        this.positionY = 90;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveDown() {
        //if (this.positionY > 0) {
        //    this.positionY--;
        //    this.domElement.style.bottom = this.positionY + "vh";
        //}
        //else {
        //    this.obstacles.pop(this.domElement);
        //}
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const game = new Game();
game.start();


