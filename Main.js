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
    constructor(field, cell, x, y, posX, posY, coordinates, snakeBody) {
        super(field, cell, x, y)
        this.posX = posX;
        this.posY = posY;
        this.coordinates = coordinates;
        this.snakeBody = snakeBody;
        //инициализация змейки
        //размер змейки, цвет
        //начальное позиционирование и другие параметры
    }

    getPosition() {
        this.posX = Math.round(Math.random() * (10 - 3) + 3);   //минимальное значение устанавливае 3, что бы не было возврата 
        this.posY = Math.round(Math.random() * (10 - 1) + 1);
        this.coordinates = [this.posX, this.posY];
        //console.log(this.coordinates);
        //получение новой позиции змеи на поле
    }

    death() {
        //логика гибели змейки
    }

    update() {
        //логика обновления змейки
        //при каких условиях она будет изменяться
    }

    drow() {
        
        console.log(this.snakeBody);

        this.snakeBody = [document.querySelector('[posX = "' + this.coordinates[0] + '"][posY = "' + this.coordinates[1] + '"]'),document.querySelector('[posX = "' + (this.coordinates[0]-1) + '"][posY = "' + this.coordinates[1] + '"]'),document.querySelector('[posX = "' + (this.coordinates[0]-2) + '"][posY = "' + this.coordinates[1] + '"]')];  //присвоили рэндомные координаты змее и + 2 ячейки рядом(тело)
        
        for ( let i = 0; i < this.snakeBody.length; i++){  //добавляем всему телу змеи class отрисовки тела
            this.snakeBody[i].classList.add('snakeBody');
        }
        this.snakeBody[0].classList.add('snakeHead');  //добавляем первому элементу тела змеи class отрисовки её головы
        //логика отрисовки змейки
        
    }

    control() {
        //логика управления змейкой
        //обработка кнопок на клаве
    }
}
let snake = new Snake();
snake.getPosition();
snake.drow();


class Apple {
    constructor() {
        //инициализация параметров
        //например цвет, размер, начальные координаты
    }

    drow() {
        //отрисовка яблока
    }

    getPosition() {
        //получение новой позиции яблока на поле
    }
}



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