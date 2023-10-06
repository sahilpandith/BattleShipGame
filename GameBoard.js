class GameBoard{
    totalShips = 0;
    constructor(x,y){
        this.x =x;
        this.y=y;
        this.coordinatesMap = this.createBoard();
    }
    createBoard(){
       return Array.from({length:this.x}).map(val => Array.from({length:this.y},(val,i)=> ''));
    }
    getCoordinatesMap(){
        return this.coordinatesMap;
    }
    getDimensions(){
        return {
            x: this.x,
            y: this.y
        }
    }
    setCoOrdinatesMap(fixedCoOrdinateType,fixedCoOrdinateValue,start,end){
        for(let i=start;i<=end;i++){
            if(fixedCoOrdinateType==='x'){
                this.coordinatesMap[fixedCoOrdinateValue][i]='s';
            }else{
                this.coordinatesMap[i][fixedCoOrdinateValue]='s';
            }
        }
    }
    verifyCoOrdinatesAreEmpty(fixedCoOrdinateType,fixedCoOrdinateValue,start,end){
        let isEmpty = true
        for(let i=start;i<=end;i++){
            if(fixedCoOrdinateType==='x'){
                if(this.coordinatesMap[fixedCoOrdinateValue][i]!=""){
                    isEmpty = false ;
                    break;
                }
            }else{
                if(this.coordinatesMap[i][fixedCoOrdinateValue]!=""){
                    isEmpty = false ;
                    break;
                }
            }
        }
        return isEmpty;
    }
    placeShip(coOrdinates1,coOrdinates2){
        const [x1,y1] = coOrdinates1;
        const [x2,y2] = coOrdinates2;
        
        if(x1!=x2 && y1!==y2){
            return {
                shipPlaced: false,
                message : "failure"
            };
        }
        let fixedCoordinate;
        let coordinateType;
        let start;
        let end;
        if(y1===y2){
            coordinateType='y';
            fixedCoordinate=y1;
            if(x1<x2){
                start=x1;
                end=x2;
            }else{
                start=x2;
                end=x1;
            }
        }else if(x1===x2){
            coordinateType='x';
            fixedCoordinate=x1;
            if(y1<y2){
                start=y1;
                end=y2;
            }else{
                start=y2;
                end=y1;
            }
        }
        if(!this.verifyCoOrdinatesAreEmpty(coordinateType,fixedCoordinate,start,end)) 
        {
            return { shipPlaced : false ,message :'failure'};
        }
        this.setCoOrdinatesMap(coordinateType,fixedCoordinate,start,end);
        this.updateTotalShipCount();
        return  { 
            shipPlaced : true,
            message :'success'
            } 
    }
    recieveAttack(x,y){
        if(this.coordinatesMap[x][y]==='s'){
            this.coordinatesMap[x][y] ='x';
        }else{
            this.coordinatesMap[x][y] ='.';
        }
        return this.coordinatesMap[x][y]
    }
    updateTotalShipCount(){
        this.totalShips++;
    }
    getTotalShipCount(){
        return this.totalShips;
    }
    haveAllShipsSunk(shipsSunk){
        return this.totalShips===shipsSunk
    }
}

export default GameBoard;