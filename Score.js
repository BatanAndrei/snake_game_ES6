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

export default Score;