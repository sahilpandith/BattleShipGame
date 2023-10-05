class Ship{
    hits=0;
    constructor(len){
        this.length = len
    }
    getShipLength(){
        return this.length;
    }
    hit(){
        this.hits++;
    }
    getHitCount(){
        return this.hits;
    }
    isSunk(){
        return this.hits===this.length;
    }
}

export default Ship;