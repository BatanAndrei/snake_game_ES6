// import GameField from './GameField.js';
// import Snake from './Snake.js';
// import Apple from './Apple.js';
// import Score from './Score.js';

class Main {
    constructor() {
    // this.gameField = new GameField();
    // this.snake = new Snake();
    // this.apple = new Apple();
    // this.score = new Score(0);
   }

   update() {
     //логика обновления каких-либо данных
     //при изменении
   }

   drow() {
    //отрисовать все части игры
   
   }
}


// export default Main;



class GameField {
    constructor(field, cell, x, y) {
        //отрисовкак игрового поля
     this.field = field;
     this.cell = cell;
     this.x = x;
     this.y = y;
    }

    drow() {
        this.field = document.createElement('div');  //создали поле
        document.body.appendChild(this.field);
        this.field.classList.add('field');

        for( let i = 1; i < 101; i++){

            this.cell = document.createElement('div');   //создали ячейки
            this.field.appendChild(this.cell);
            this.cell.classList.add('cell');
          }
       
    }

    coordinatesCell() {
        this.cell = document.getElementsByClassName('cell');
        this.x = 1;
        this.y = 10; 

        for (let i = 0; i < this.cell.length; i++){                //присвоили систему координат ячейкам
    
        if( this.x > 10 ){
           this.x = 1;
           this.y--;
    }
        this.cell[i].setAttribute('posX', this.x);       //присвоили систему координат ячейкам
        this.cell[i].setAttribute('posY', this.y);      //присвоили систему координат ячейкам
        this.x++;
    }

}
}
let gameField = new GameField();
gameField.drow();
gameField.coordinatesCell();


class Snake extends GameField {
    constructor(direction, field, cell, x, y, posX, posY, coordinates, snakeBody, steps, snakeCoordinates, interval,apple) {
        super(field, cell, x, y)
        this.posX = posX;
        this.posY = posY;
        this.coordinates = coordinates;
        this.snakeBody = snakeBody;
        this.direction  = 'right';
        this.steps = true;
        this.snakeCoordinates = snakeCoordinates;
        this.interval = interval;
        this.apple = apple;
        
        
    }

    getPosition() {
        this.posX = Math.round(Math.random() * (10 - 3) + 3);   //минимальное значение устанавливае 3, что бы не было возврата 
        this.posY = Math.round(Math.random() * (10 - 1) + 1);
        this.coordinates = [this.posX, this.posY];
    }

    death() {
        //логика гибели змейки
    }

    update() {
        //логика обновления змейки
        //при каких условиях она будет изменяться
    }

    drow() {
        
        this.snakeBody = [document.querySelector('[posX = "' + this.coordinates[0] + '"][posY = "' + this.coordinates[1] + '"]'),document.querySelector('[posX = "' + (this.coordinates[0]-1) + '"][posY = "' + this.coordinates[1] + '"]'),document.querySelector('[posX = "' + (this.coordinates[0]-2) + '"][posY = "' + this.coordinates[1] + '"]')];  //присвоили рэндомные координаты змее и + 2 ячейки рядом(тело)
        
        for ( let i = 0; i < this.snakeBody.length; i++){  //добавляем всему телу змеи class отрисовки тела
            this.snakeBody[i].classList.add('snakeBody');
        }
        this.snakeBody[0].classList.add('snakeHead');  //добавляем первому элементу тела змеи class отрисовки её головы
        //логика отрисовки змейки
        
    }

    controle() {
       
        window.addEventListener('keydown', function(e){ //вешаем обработчик на кнопки
            //if(this.steps == true){
            if(e.key === 'ArrowLeft' && snake.direction !== 'right') {      //37 код стрелки влево //.... если движ не в право, то можно влево
                snake.direction = 'left';
                snake.steps = false;
                //console.log(true);
            }
            else if(e.key === 'ArrowUp' && snake.direction !== 'down') {    //38 код стрелки вверх //....
                snake.direction = 'up';
                snake.steps = false;
                //console.log(true);
            }
            else if(e.key === 'ArrowRight' && snake.direction !== 'left') {    //39 код стрелки в право //....
                snake.direction = 'right';
                snake.steps = false;
                //console.log(true);
            }
            else if(e.key === 'ArrowDown' && snake.direction !== 'up') {    //40 код стрелки вниз //.....
                snake.direction = 'down';
                snake.steps = false;
                //console.log(true);
            }
        
        });
        }
    
    move() {
        
        this.snakeCoordinates = [this.snakeBody[0].getAttribute('posX'), this.snakeBody[0].getAttribute('posY')]; //в переменную получаем координаты головы 
        this.snakeBody[0].classList.remove('snakeHead'); // у головы удаляем class головы
        this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');  //удаляем class у хвоста
        this.snakeBody.pop(); // удаляем последний элемент из массива
        
         if (this.direction == 'right') { // движение и проход через границу поля 
        if (this.snakeCoordinates[0] < 10){ //условие что бы змейка находилась по оси в поле
             this.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0] + 1) + '"][posY = "' + this.snakeCoordinates[1] + '"]'));  //добавляем ячейку X,Y и в неё class snakeHead
          }else {
              this.snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + this.snakeCoordinates[1] + '"]'));  //добавляем ячейку X,Y в начале поля в неё class snakeHead
         }
        
    }else if (this.direction == 'left') { // движение и проход через границу поля 
         if (this.snakeCoordinates[0] > 1){  //условие что бы змейка находилась по оси в поле
             this.snakeBody.unshift(document.querySelector('[posX = "' + (+this.snakeCoordinates[0] - 1) + '"][posY = "' + this.snakeCoordinates[1] + '"]'));  //добавляем ячейку X,Y и в неё class snakeHead
         }else {
             this.snakeBody.unshift(document.querySelector('[posX = "10"][posY = "' + this.snakeCoordinates[1] + '"]'));  //добавляем ячейку X,Y в конце поля в неё class snakeHead
         }
        
     }else if (this.direction == 'up') {  // движение и проход через границу поля 
        if (this.snakeCoordinates[1] < 10){  //условие что бы змейка находилась по оси в поле
            this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "' + (+this.snakeCoordinates[1]+1) + '"]'));  //добавляем ячейку X,Y и в неё class snakeHead
         }else {
             this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "1"]'));  //добавляем ячейку X,Y в конце поля в неё class snakeHead
         }
      
     }else if (this.direction == 'down') {   // движение и проход через границу поля 
         if (this.snakeCoordinates[1] > 1){ //условие что бы змейка находилась по оси в поле
             this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "' + (+this.snakeCoordinates[1]-1) + '"]'));  //добавляем ячейку X,Y и в неё class snakeHead
             //console.log(this.snakeBody);
         }else {
             this.snakeBody.unshift(document.querySelector('[posX = "' + this.snakeCoordinates[0] + '"][posY = "10"]')); //добавляем ячейку X,Y в конце поля в неё class snakeHead
         }
     }
    
    this.snakeBody[0].classList.add('snakeHead'); // возвращаем глову при движении (строки 85 - 120)
    for ( let i = 0; i < this.snakeBody.length; i++){  
    this.snakeBody[i].classList.add('snakeBody'); //возвращаем тело при движении (строки 85 - 120)
   } 
}  
   init() {
    setInterval(() => {
        this.move();
     }, 500);
   }
}


let snake = new Snake();
snake.getPosition();
snake.drow();
snake.move();
snake.init();
snake.controle();


class Apple extends GameField {
    constructor(direction, field, cell, x, y, appleCoordinates, apple, posX, posY, coordinates, snakeBody, steps, snakeCoordinates, interval, a, b) {
        super(field, cell, x, y)
        this.appleCoordinates = appleCoordinates;
        this.apple = apple;
        this.snakeBody = snakeBody;
        this.a = a;
        this.b = b;
    }

    drow() {
        this.apple = document.querySelector('[posX = "' + this.appleCoordinates[0] + '"][posY = "' + this.appleCoordinates[1] + '"]');
        this.apple.classList.add('apple');   //присваиваем координаты яблоку и class отрисовки

    while (this.apple.classList.contains('snakeBody')){  //цикл - пока яблоко находиться по вверх змеи, выполняем тело цикла 
    //this.appleCoordinates = generateApple();  //(заново рэндомим появленеи яблока)
    this.apple = document.querySelector('[posX = "' + this.appleCoordinates[0] + '"][posY = "' + this.appleCoordinates[1] + '"]');  

}
         //console.log(this.apple)
    }

    getPosition() {
        this.posX = Math.round(Math.random() * (10 - 1) + 1);   
        this.posY = Math.round(Math.random() * (10 - 1) + 1);
        this.appleCoordinates = [this.posX, this.posY];
      
        //console.log('In apple ' +this.appleCoordinates)
    }

    update() {

        // if (snake.snakeBody[0].getAttribute('posX') == this.apple.getAttribute('posX') && snake.snakeBody[0].getAttribute('posY') == this.apple. getAttribute('posY')) {     //проверяем соовпадение координат головы и яблока

        //     this.apple.classList.remove('apple'); //удаляем яблоко
            //apple.drow();
          
            // this.a = snake.snakeBody[snake.snakeBody.length - 1].getAttribute('posX');//в переменные толкаем X (хвост)
            // this.b = snake.snakeBody[snake.snakeBody.length - 1].getAttribute('posY');//в переменные толкаем Y (хвост)
            // snake.snakeBody.push(document.querySelector('[posX = "' + this.a + '"][posY ="' + this.b +'"]')); //пушим и увеличиваем змею
            // console.log(this.a);
            // console.log(this.b);
    }
    // console.log(snake.snakeBody[0]);
    // console.log(this.apple);

    
}
    
    //console.log(snake.snakeBody[0].getAttribute('posX'))
    //console.log(this.apple.getAttribute('posX'))




let apples = new Apple();
apples.getPosition();
apples.drow();
//apples.update();


class Score {
    constructor(score) {
        //инициализировать начальное количество очков
        this._score = score;
    }

    drow() {
        //отрисовка блока со счётом
    }

    increase() {
        //увеличивать количество очков
        //перерисовывать табло
        this._score += 1; 
        this.drow();
    }

    reset() {
        //сброс очков при гибели
        this._score = 0;
        this.drow();
    }
}