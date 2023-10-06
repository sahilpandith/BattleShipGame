import GameBoard from "./GameBoard";

describe('Gameboard tests',() => {
     let gameBoard
     beforeAll(() => {
        const x = 20;
        const y =20
        gameBoard = new GameBoard(x,y);
     });
    
     it('game board should of 20 x 20',()=> {
         const {x,y } = gameBoard.getDimensions();
         expect(x).toBe(20);
         expect(y).toBe(20);
         expect(gameBoard.getCoordinatesMap().length).toBe(20);
    })

    it('place ship of at  10,2 - 10,5',()=> {
        const {shipPlaced, message} = gameBoard.placeShip([10,2],[10,5]);
        expect(shipPlaced).toBe(true);
        expect(message).toBe('success');
        const coordinateMap = gameBoard.getCoordinatesMap();
        expect(coordinateMap[10][2]).toBe('s');
        expect(coordinateMap[10][3]).toBe('s');
        expect(coordinateMap[10][4]).toBe('s');
        expect(coordinateMap[10][5]).toBe('s');
        expect(coordinateMap[10][6]).toBe('');
   })

    it('place ship at 10,2- 5,4',()=> {
        const {shipPlaced, message} = gameBoard.placeShip([10,2],[5,4]);
        expect(shipPlaced).toBe(false);
        expect(message).toBe('failure');
    })

    it('place ship at already occupied cordinated 10,2 - 10,5',()=> {
        const {shipPlaced, message} = gameBoard.placeShip([10,2],[10,5]);
        expect(shipPlaced).toBe(false);
        expect(message).toBe('failure');
   })

   it('test recived attack at 10,2',() => {
       gameBoard.recieveAttack(10,2);
       const coordinateMap = gameBoard.getCoordinatesMap();
       expect(coordinateMap[10][2]).toBe('x');
   })

   it('test recived attack at 10,1',() => {
    gameBoard.recieveAttack(10,1);
    const coordinateMap = gameBoard.getCoordinatesMap();
    expect(coordinateMap[10][1]).toBe('.');
   })

   it('has all shilps sunk',()=> {
       expect(gameBoard.haveAllShipsSunk(1)).toBe(true);
   })
   it('verify total Ship count', () => {
    expect(gameBoard.getTotalShipCount()).toBe(1);
   })
})