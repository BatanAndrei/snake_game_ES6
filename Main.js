import GameField from "./GameField";
import Snake from "./Snake";
import Apple from "./Apple";
import Score from "./Score";

class Main {
    constructor() {
    this.gameField = new GameField();
    this.snake = new Snake();
    this.apple = new Apple();
    this.score = new Score(0);
   }

   update() {
     //логика обновления каких-либо данных
     //при изменении
   }

   drow() {
    //отрисовать все части игры
   }
}

export default Main;