const CANVAS = document.getElementById("chessBoard");

const BOARDSIZE = 600;

CANVAS.setAttribute("width",BOARDSIZE+"px");
CANVAS.setAttribute("height",BOARDSIZE+"px");

const HALFBOARDSIZE = BOARDSIZE / 2; 

CANVAS.style.margin = -(HALFBOARDSIZE)+"px 0 0 "+-(HALFBOARDSIZE)+"px";

const FRAME = 15;
const FIELDPOSITION = CANVAS.width * (FRAME / 200);
const FIELDSIZE = (BOARDSIZE - (BOARDSIZE * (FRAME / 100))) / 8;

const FONTSIZE = BOARDSIZE * 0.20;

const CTX = CANVAS.getContext("2d");

const SQUARES = [
    {
        "name":"A1",
        "cordinates":[FIELDPOSITION,FIELDPOSITION]
    },
    {
        "name":"B1",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION]
    },
    {
        "name":"C1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION]
    },
    {
        "name":"D1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION]
    },
    {
        "name":"E1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION]
    },
    {
        "name":"F1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION]
    },
    {
        "name":"G1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION]
    },
    {
        "name":"H1",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION]
    },
    {
        "name":"A2",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"B2",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"C2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"D2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"E2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"F2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"G2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"H2",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + FIELDSIZE]
    },
    {
        "name":"A3",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"B3",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"C3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"D3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"E3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"F3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"G3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"H3",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 2)]
    },
    {
        "name":"A4",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"B4",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"C4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"D4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"E4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"F4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"G4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"H4",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 3)]
    },
    {
        "name":"A5",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"B5",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"C5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"D5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"E5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"F5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"G5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"H5",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 4)]
    },
    {
        "name":"A6",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"B6",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"C6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"D6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"E6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"F6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"G6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"H6",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 5)]
    },
    {
        "name":"A7",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"B7",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"C7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"D7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"E7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"F7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"G7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"H7",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 6)]
    },
    {
        "name":"A8",
        "cordinates":[FIELDPOSITION,FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"B8",
        "cordinates":[FIELDPOSITION + FIELDSIZE,FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"C8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 2),FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"D8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 3),FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"E8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 4),FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"F8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 5),FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"G8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 6),FIELDPOSITION + (FIELDSIZE * 7)]
    },
    {
        "name":"H8",
        "cordinates":[FIELDPOSITION + (FIELDSIZE * 7),FIELDPOSITION + (FIELDSIZE * 7)]
    }              
];

var pieces = {
    "black":[
            {
                "name":"pawn1",
                "cordinates":[SQUARES.filter(square=> square.name == "A2")[0].cordinates[0],SQUARES.filter(square=> square.name == "A2")[0].cordinates[1]] 
            },
            {
                "name":"pawn2",
                "cordinates":[SQUARES.filter(square=> square.name == "B2")[0].cordinates[0],SQUARES.filter(square=> square.name == "B2")[0].cordinates[1]] 
            },
            {
                "name":"pawn3",
                "cordinates":[SQUARES.filter(square=> square.name == "C2")[0].cordinates[0],SQUARES.filter(square=> square.name == "C2")[0].cordinates[1]] 
            },
            {
                "name":"pawn4",
                "cordinates":[SQUARES.filter(square=> square.name == "D2")[0].cordinates[0],SQUARES.filter(square=> square.name == "D2")[0].cordinates[1]] 
            },
            {
                "name":"pawn5",
                "cordinates":[SQUARES.filter(square=> square.name == "E2")[0].cordinates[0],SQUARES.filter(square=> square.name == "E2")[0].cordinates[1]] 
            },
            {
                "name":"pawn6",
                "cordinates":[SQUARES.filter(square=> square.name == "F2")[0].cordinates[0],SQUARES.filter(square=> square.name == "F2")[0].cordinates[1]] 
            },
            {
                "name":"pawn7",
                "cordinates":[SQUARES.filter(square=> square.name == "G2")[0].cordinates[0],SQUARES.filter(square=> square.name == "G2")[0].cordinates[1]] 
            },
            {
                "name":"pawn8",
                "cordinates":[SQUARES.filter(square=> square.name == "H2")[0].cordinates[0],SQUARES.filter(square=> square.name == "H2")[0].cordinates[1]] 
            },
            {
                "name":"rock1",
                "cordinates":[SQUARES.filter(square=> square.name == "A1")[0].cordinates[0],SQUARES.filter(square=> square.name == "A1")[0].cordinates[1]] 
            },
            {
                "name":"rock2",
                "cordinates":[SQUARES.filter(square=> square.name == "H1")[0].cordinates[0],SQUARES.filter(square=> square.name == "H1")[0].cordinates[1]] 
            },
            {
                "name":"knight1",
                "cordinates":[SQUARES.filter(square=> square.name == "B1")[0].cordinates[0],SQUARES.filter(square=> square.name == "B1")[0].cordinates[1]] 
            },
            {
                "name":"knight2",
                "cordinates":[SQUARES.filter(square=> square.name == "G1")[0].cordinates[0],SQUARES.filter(square=> square.name == "G1")[0].cordinates[1]] 
            },
            {
                "name":"bishop1",
                "cordinates":[SQUARES.filter(square=> square.name == "C1")[0].cordinates[0],SQUARES.filter(square=> square.name == "C1")[0].cordinates[1]] 
            },
            {
                "name":"bishop2",
                "cordinates":[SQUARES.filter(square=> square.name == "F1")[0].cordinates[0],SQUARES.filter(square=> square.name == "F1")[0].cordinates[1]] 
            },
            {
                "name":"queen",
                "cordinates":[SQUARES.filter(square=> square.name == "D1")[0].cordinates[0],SQUARES.filter(square=> square.name == "D1")[0].cordinates[1]] 
            },
            {
                "name":"king",
                "cordinates":[SQUARES.filter(square=> square.name == "E1")[0].cordinates[0],SQUARES.filter(square=> square.name == "E1")[0].cordinates[1]] 
            }

    ],
    "white":[
        {
            "name":"pawn1",
            "cordinates":[SQUARES.filter(square=> square.name == "A7")[0].cordinates[0],SQUARES.filter(square=> square.name == "A7")[0].cordinates[1]] 
        },
        {
            "name":"pawn2",
            "cordinates":[SQUARES.filter(square=> square.name == "B7")[0].cordinates[0],SQUARES.filter(square=> square.name == "B7")[0].cordinates[1]] 
        },
        {
            "name":"pawn3",
            "cordinates":[SQUARES.filter(square=> square.name == "C7")[0].cordinates[0],SQUARES.filter(square=> square.name == "C7")[0].cordinates[1]] 
        },
        {
            "name":"pawn4",
            "cordinates":[SQUARES.filter(square=> square.name == "D7")[0].cordinates[0],SQUARES.filter(square=> square.name == "D7")[0].cordinates[1]] 
        },
        {
            "name":"pawn5",
            "cordinates":[SQUARES.filter(square=> square.name == "E7")[0].cordinates[0],SQUARES.filter(square=> square.name == "E7")[0].cordinates[1]] 
        },
        {
            "name":"pawn6",
            "cordinates":[SQUARES.filter(square=> square.name == "F7")[0].cordinates[0],SQUARES.filter(square=> square.name == "F7")[0].cordinates[1]] 
        },
        {
            "name":"pawn7",
            "cordinates":[SQUARES.filter(square=> square.name == "G7")[0].cordinates[0],SQUARES.filter(square=> square.name == "G7")[0].cordinates[1]] 
        },
        {
            "name":"pawn8",
            "cordinates":[SQUARES.filter(square=> square.name == "H7")[0].cordinates[0],SQUARES.filter(square=> square.name == "H7")[0].cordinates[1]] 
        },
        {
            "name":"rock1",
            "cordinates":[SQUARES.filter(square=> square.name == "A8")[0].cordinates[0],SQUARES.filter(square=> square.name == "A8")[0].cordinates[1]] 
        },
        {
            "name":"rock2",
            "cordinates":[SQUARES.filter(square=> square.name == "H8")[0].cordinates[0],SQUARES.filter(square=> square.name == "H8")[0].cordinates[1]] 
        },
        {
            "name":"knight1",
            "cordinates":[SQUARES.filter(square=> square.name == "B8")[0].cordinates[0],SQUARES.filter(square=> square.name == "B8")[0].cordinates[1]] 
        },
        {
            "name":"knight2",
            "cordinates":[SQUARES.filter(square=> square.name == "G8")[0].cordinates[0],SQUARES.filter(square=> square.name == "G8")[0].cordinates[1]] 
        },
        {
            "name":"bishop1",
            "cordinates":[SQUARES.filter(square=> square.name == "C8")[0].cordinates[0],SQUARES.filter(square=> square.name == "C8")[0].cordinates[1]] 
        },
        {
            "name":"bishop2",
            "cordinates":[SQUARES.filter(square=> square.name == "F8")[0].cordinates[0],SQUARES.filter(square=> square.name == "F8")[0].cordinates[1]] 
        },
        {
            "name":"queen",
            "cordinates":[SQUARES.filter(square=> square.name == "D8")[0].cordinates[0],SQUARES.filter(square=> square.name == "D8")[0].cordinates[1]] 
        },
        {
            "name":"king",
            "cordinates":[SQUARES.filter(square=> square.name == "E8")[0].cordinates[0],SQUARES.filter(square=> square.name == "E8")[0].cordinates[1]] 
        }
    ]
};

var moves = [];

let whitesTurn = true;
let selectedPiece = null;
let validMoves = null;
let history = [];

updateGame(0);


// MAIN FUNCTION THAT UPDATE THE BOARD
function updateGame(piecesAngle){
    drawFrame();
    drawBoard();
    drawHighlights();
    drawPieces(piecesAngle);
}

// DRAW FUNCTIONS
function drawFrame(){
    CTX.fillStyle = "#3a1c07";
    CTX.fillRect(0,0,BOARDSIZE,BOARDSIZE);
    CTX.fillStyle = "#ffffd9";
    CTX.font = FONTSIZE+"% Arial";
    CTX.scale(1,-1);
    CTX.translate(0,-(FIELDSIZE - (FRAME / 2)));
    CTX.fillText("A",FIELDPOSITION + FIELDSIZE - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("B",FIELDPOSITION + (FIELDSIZE * 2) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("C",FIELDPOSITION + (FIELDSIZE * 3) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("D",FIELDPOSITION + (FIELDSIZE * 4) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("E",FIELDPOSITION + (FIELDSIZE * 5) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("F",FIELDPOSITION + (FIELDSIZE * 6) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("G",FIELDPOSITION + (FIELDSIZE * 7) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.fillText("H",FIELDPOSITION + (FIELDSIZE * 8) - FIELDPOSITION,FIELDPOSITION - (FIELDPOSITION / 4));
    CTX.setTransform(1,0,0,1,0,0);
    CTX.fillText("A",FIELDPOSITION + FIELDSIZE - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("B",FIELDPOSITION + (FIELDSIZE * 2) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("C",FIELDPOSITION + (FIELDSIZE * 3) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("D",FIELDPOSITION + (FIELDSIZE * 4) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("E",FIELDPOSITION + (FIELDSIZE * 5) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("F",FIELDPOSITION + (FIELDSIZE * 6) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("G",FIELDPOSITION + (FIELDSIZE * 7) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("H",FIELDPOSITION + (FIELDSIZE * 8) - FIELDPOSITION,BOARDSIZE - (FIELDPOSITION / 4));
    CTX.fillText("1",FIELDPOSITION - (FIELDPOSITION / 2),(FIELDPOSITION + FIELDSIZE) - (FIELDSIZE / 3));
    CTX.fillText("2",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 2) - (FIELDSIZE / 3));
    CTX.fillText("3",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 3) - (FIELDSIZE / 3));
    CTX.fillText("4",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 4) - (FIELDSIZE / 3));
    CTX.fillText("5",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 5) - (FIELDSIZE / 3));
    CTX.fillText("6",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 6) - (FIELDSIZE / 3));
    CTX.fillText("7",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 7) - (FIELDSIZE / 3));
    CTX.fillText("8",FIELDPOSITION - (FIELDPOSITION / 2),FIELDPOSITION + (FIELDSIZE * 8) - (FIELDSIZE / 3));
    CTX.scale(1,-1);
    CTX.translate(0,-BOARDSIZE);
    CTX.fillText("8",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,(FIELDPOSITION + FIELDSIZE) - (FIELDSIZE / 3));
    CTX.fillText("7",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 2) - (FIELDSIZE / 3));
    CTX.fillText("6",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 3) - (FIELDSIZE / 3));
    CTX.fillText("5",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 4) - (FIELDSIZE / 3));
    CTX.fillText("4",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 5) - (FIELDSIZE / 3));
    CTX.fillText("3",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 6) - (FIELDSIZE / 3));
    CTX.fillText("2",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 7) - (FIELDSIZE / 3));
    CTX.fillText("1",BOARDSIZE - (FIELDPOSITION / 3) - (FIELDPOSITION / 2) ,FIELDPOSITION + (FIELDSIZE * 8) - (FIELDSIZE / 3));
    CTX.setTransform(1,0,0,1,0,0);
}

function drawBoard(){
    let color = "#a7a791";

    SQUARES.forEach((square,index) =>{
        CTX.fillStyle = color;

        CTX.fillRect(square.cordinates[0],square.cordinates[1],FIELDSIZE,FIELDSIZE);

        if(!((index + 1) % 8 == 0)){
            ((color == "#a7a791") ? color = "#682b00"  : color = "#a7a791");
        }        
    });
}

function drawHighlights(){
    if(selectedPiece != null){
        if(whitesTurn){
            pieces.white.forEach(piece=>{
                if(selectedPiece.color == "white" && selectedPiece.name == piece.name){
                    CTX.fillStyle = "#c19348";
                    CTX.fillRect(piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);

                    CTX.fillStyle = "#ff0000";
                    checkPossibleMoves("white",piece.name,[piece.cordinates[0],piece.cordinates[1]]).forEach(cordinates=> {
                        CTX.fillRect(cordinates[0],cordinates[1],FIELDSIZE,FIELDSIZE);
                    });
                }
            }); 
        }else{
            pieces.black.forEach(piece=>{
                if(selectedPiece.color == "black" && selectedPiece.name == piece.name){
                    CTX.fillStyle = "#c19348";
                    CTX.fillRect(piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);
                
                    CTX.fillStyle = "#ff0000";
                    checkPossibleMoves("black",piece.name,[piece.cordinates[0],piece.cordinates[1]]).forEach(cordinates=> {
                        CTX.fillRect(cordinates[0],cordinates[1],FIELDSIZE,FIELDSIZE);
                    });
                }
            });
        } 
    }
}

function drawPieces(piecesAngle){    
    // DRAW BLACK PIECES
    pieces.black.forEach(piece=>{
        let img = new Image();

        img.onload = ()=>{
            CTX.drawImage(img,piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);
        }

        if(piecesAngle == 180){
            if(piece.name.indexOf("pawn") != -1){
                img.src = "assets/images/black_rotate_pawn.png";
            }else if(piece.name.indexOf("rock") != -1){
                img.src = "assets/images/black_rotate_rock.png";
            }else if(piece.name.indexOf("knight") != -1){
                img.src = "assets/images/black_rotate_knight.png";
            }else if(piece.name.indexOf("bishop") != -1){
                img.src = "assets/images/black_rotate_bishop.png";
            }else if(piece.name == "queen"){
                img.src = "assets/images/black_rotate_queen.png";
            }else if(piece.name == "king"){
                img.src = "assets/images/black_rotate_king.png";
            }
        }else{
            if(piece.name.indexOf("pawn") != -1){
                img.src = "assets/images/black_pawn.png";
            }else if(piece.name.indexOf("rock") != -1){
                img.src = "assets/images/black_rock.png";
            }else if(piece.name.indexOf("knight") != -1){
                img.src = "assets/images/black_knight.png";
            }else if(piece.name.indexOf("bishop") != -1){
                img.src = "assets/images/black_bishop.png";
            }else if(piece.name == "queen"){
                img.src = "assets/images/black_queen.png";
            }else if(piece.name == "king"){
                img.src = "assets/images/black_king.png";
            }
        }
    });

    // DRAW WHITE PIECES
    pieces.white.forEach(piece=>{
        let img = new Image();

        img.onload = ()=>{
            CTX.drawImage(img,piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);
        }

        if(piecesAngle == 180){
            if(piece.name.indexOf("pawn") != -1){
                img.src = "assets/images/white_rotate_pawn.png";
            }else if(piece.name.indexOf("rock") != -1){
                img.src = "assets/images/white_rotate_rock.png";
            }else if(piece.name.indexOf("knight") != -1){
                img.src = "assets/images/white_rotate_knight.png";
            }else if(piece.name.indexOf("bishop") != -1){
                img.src = "assets/images/white_rotate_bishop.png";
            }else if(piece.name == "queen"){
                img.src = "assets/images/white_rotate_queen.png";
            }else if(piece.name == "king"){
                img.src = "assets/images/white_rotate_king.png";
            }
        }else{
            if(piece.name.indexOf("pawn") != -1){
                img.src = "assets/images/white_pawn.png";
            }else if(piece.name.indexOf("rock") != -1){
                img.src = "assets/images/white_rock.png";
            }else if(piece.name.indexOf("knight") != -1){
                img.src = "assets/images/white_knight.png";
            }else if(piece.name.indexOf("bishop") != -1){
                img.src = "assets/images/white_bishop.png";
            }else if(piece.name == "queen"){
                img.src = "assets/images/white_queen.png";
            }else if(piece.name == "king"){
                img.src = "assets/images/white_king.png";
            }
        }
    });    
}





// EVENT LISTENERS
function clicked(event){
    let x = event.layerX;
    let y = event.layerY;

    if(selectedPiece == null){
        selectPiece(getClickedSquareCordinates([x,y]));
    }else{
        movePiece(getClickedSquareCordinates([x,y]));
    }
}





// HELPERS FUNCTIONS
function getPieceCordinates(pieceColor,pieceName){
    if(pieceColor == "black"){
        return pieces.black.filter(piece=> piece.name == pieceName)[0].cordinates;
    }else if(pieceColor == "white"){
        return pieces.white.filter(piece=> piece.name == pieceName)[0].cordinates;
    }
}

function setPieceCordinates(pieceColor,pieceName,newCordinates){
    if(pieceColor == "black"){
        pieces.black.filter(piece=> piece.name == pieceName)[0].cordinates = newCordinates;
    }else if(pieceColor == "white"){
        pieces.white.filter(piece=> piece.name == pieceName)[0].cordinates = newCordinates;
    }
}

function getFieldName(cordinates){
    return SQUARES.filter(square=> square.cordinates[0] == cordinates[0] && square.cordinates[1] == cordinates[1])[0].name;
}

function updateLog(pieceColor,pieceName,oldCordinates,newCordinates){    
    let oldField = getFieldName(oldCordinates);
    let newField = getFieldName(newCordinates);

    history.push({
        "color":pieceColor,
        "name":pieceName,
        "old_cordinates":oldCordinates,
        "new_cordinates":newCordinates,
        "old_field":oldField,
        "new_field":newField
    });

    // console.log(history);
}

function getClickedSquareCordinates(clickCordinates){
    let newX = SQUARES.filter(square=> clickCordinates[0] >= square.cordinates[0] && clickCordinates[0] <= (square.cordinates[0] + FIELDSIZE))[0].cordinates[0];
    let newY = SQUARES.filter(square=> clickCordinates[1] >= square.cordinates[1] && clickCordinates[1] <= (square.cordinates[1] + FIELDSIZE))[0].cordinates[1];
    let squareCordinates = [newX,newY];
    
    return squareCordinates;
}

function isValidMove(newCordinates){
    return validMoves.filter(move=> move[0] == newCordinates[0] && move[1] == newCordinates[1]).length > 0;
}

function hasPiece(cordinates){
    let pieceFound = null;
    let pieceBlack = pieces.black.filter(piece=> piece.cordinates[0] == cordinates[0] && piece.cordinates[1] == cordinates[1])[0];
    let pieceWhite = pieces.white.filter(piece=> piece.cordinates[0] == cordinates[0] && piece.cordinates[1] == cordinates[1])[0];

    if(pieceBlack != undefined){
        pieceFound = {
            "name":pieceBlack.name,
            "color":"black",
            "cordinates": pieceBlack.cordinates
        }
    }else if(pieceWhite != undefined){
        pieceFound = {
            "name":pieceWhite.name,
            "color":"white",
            "cordinates": pieceWhite.cordinates
        }
    }

    return pieceFound;
}

function invertCordinatesForBlacks(cordinates){
    return [(BOARDSIZE - FIELDSIZE) - cordinates[0],(BOARDSIZE - FIELDSIZE) - cordinates[1]];
}

function takePiece(piece){
    setPieceCordinates(piece.color,piece.name,[-150,-150]);
}

function selectPiece(cordinates){
    if(whitesTurn){
        pieces.white.forEach(piece => {
            if(cordinates[0] == piece.cordinates[0] && cordinates[1] == piece.cordinates[1]){
                selectedPiece = {
                    "color":"white",
                    "name":piece.name
                }

                updateGame(0);
                whitesTurn = false;
            }
        });
    }else{
        cordinates = invertCordinatesForBlacks(cordinates);

        pieces.black.forEach(piece => {
            if(cordinates[0] == piece.cordinates[0] && cordinates[1] == piece.cordinates[1]){
                selectedPiece = {
                    "color":"black",
                    "name":piece.name
                }

                updateGame(180);
                whitesTurn = true;
            }
        });
    }
}

function movePiece(newCordinates){
    let oldCordinates;

    if(selectedPiece.color == "black"){
        if(isValidMove(invertCordinatesForBlacks(newCordinates))){
            newCordinates = invertCordinatesForBlacks(newCordinates);
            oldCordinates = getPieceCordinates("black",selectedPiece.name);

            if(hasPiece(newCordinates) != null && hasPiece(newCordinates).color != "black"){
                takePiece(hasPiece(newCordinates));
            }
            
            setPieceCordinates("black",selectedPiece.name,newCordinates);
            updateLog("black",selectedPiece.name,oldCordinates,newCordinates);

            CANVAS.classList.add('rotate0');
            CANVAS.classList.remove('rotate180');
            
            selectedPiece = null;

            if(isCheck()){
                alert("Whites are in check!");
                
                if(isCheckmate()){
                    alert("Whites lost the game!");
                }else{
                    updateGame(0);
                }
            }else{
                updateGame(0);
            }        
        }else{
            if(hasPiece(invertCordinatesForBlacks(newCordinates)).color == "black"){
                selectedPiece = null;
                whitesTurn = false;
                selectPiece(newCordinates);
            }
        }        
    }else if(selectedPiece.color == "white"){
        if(isValidMove(newCordinates)){
            oldCordinates = getPieceCordinates("white",selectedPiece.name);

            if(hasPiece(newCordinates) != null && hasPiece(newCordinates).color != "white"){
                takePiece(hasPiece(newCordinates));
            }
            
            setPieceCordinates("white",selectedPiece.name,newCordinates);
            updateLog("white",selectedPiece.name,oldCordinates,newCordinates);

            CANVAS.classList.add('rotate180');
            CANVAS.classList.remove('rotate0');

            selectedPiece = null;

            if(isCheck()){
                alert("Blacks are in check!");
                
                if(isCheckmate()){
                    alert("Blacks lost the game!");
                }else{
                    updateGame(180);
                }
            }else{
                updateGame(180);
            }
        }else{
            if(hasPiece(newCordinates).color == "white"){
                selectedPiece = null;
                whitesTurn = true;
                selectPiece(newCordinates);
            }
        }
    }
}

function isCheck(){
    let checkStatus = false;

    let danger = [];

    if(whitesTurn){
        let whiteKingCordinates = pieces.white.filter(piece => piece.name == "king")[0].cordinates;
        
        // TOP
        if(whiteKingCordinates[1] != FIELDPOSITION){
            let topDistance = 0;

            for(let i = whiteKingCordinates[1] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                topDistance++;

                let target = hasPiece([whiteKingCordinates[0],i]);
 
                if(target != null){
                    if(target.color == "black"){
                        if(topDistance == 1 && target.name == "king"){
                            checkStatus = true;
                        }else if(target.name == "rock1" || target.name == "rock2" || target.name == "queen"){
                            checkStatus = true;
                        }
                        break;
                    }
                }
            }
        }

        // BOTTOM
        if(whiteKingCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
            let topDistance = 0;

            for(let i = whiteKingCordinates[1] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                topDistance++;

                let target = hasPiece([whiteKingCordinates[0],i]);
 
                if(target != null){
                    if(target.color == "black"){
                        if(topDistance == 1 && target.name == "king"){
                            checkStatus = true;
                        }else if(target.name == "rock1" || target.name == "rock2" || target.name == "queen"){
                            checkStatus = true;
                        }
                        break;
                    }
                }
            }
        }
    }else{
        let blackKingCordinates = pieces.black.filter(piece => piece.name == "king")[0].cordinates;
        console.log(blackKingCordinates);
    }

    return checkStatus;
}

function isCheckmate(){
    let checkMateStatus = false;


    return checkMateStatus;
}




// PIECE'S RULES
function checkPossibleMoves(pieceColor,pieceName,pieceCordinates){
    let possibleMoves = [];
    
    if(pieceName.indexOf("pawn") != -1){
        let frontLeft;
        let frontRight;

        if(pieceColor == "white"){
            // Next field is free
            if(hasPiece([pieceCordinates[0],(pieceCordinates[1] - FIELDSIZE)]) == null && pieceCordinates[1] > FIELDPOSITION){
                possibleMoves.push([pieceCordinates[0],pieceCordinates[1] - FIELDSIZE]);
            }

            // It's in the initial field and the second field from here is free
            if(pieceCordinates[1] == (BOARDSIZE - FIELDPOSITION - (FIELDSIZE * 2))){
                if(hasPiece([pieceCordinates[0],(pieceCordinates[1] - FIELDSIZE)]) == null && hasPiece([pieceCordinates[0],(pieceCordinates[1] - (FIELDSIZE * 2))]) == null){
                    possibleMoves.push([pieceCordinates[0],pieceCordinates[1] - (FIELDSIZE * 2)]);
                    possibleMoves.push([pieceCordinates[0],pieceCordinates[1] - FIELDSIZE]);
                }
            }

            // Opponent's piece is available to take
            frontLeft = hasPiece([(pieceCordinates[0] - FIELDSIZE),(pieceCordinates[1] - FIELDSIZE)]);
            frontRight = hasPiece([(pieceCordinates[0] + FIELDSIZE),(pieceCordinates[1] - FIELDSIZE)]);

            if(frontLeft != null){
                if(frontLeft.color == "black"){
                    possibleMoves.push(frontLeft.cordinates);
                }
            }
            if(frontRight != null){
                if(frontRight.color == "black"){
                    possibleMoves.push(frontRight.cordinates);
                }
            }           
        }else if(pieceColor == "black"){
            // Next field is free
            if(hasPiece([pieceCordinates[0],(pieceCordinates[1] + FIELDSIZE)]) == null && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                possibleMoves.push([pieceCordinates[0],pieceCordinates[1] + FIELDSIZE]);
            }

            // It's in the initial field and the second field from here is free
            if(pieceCordinates[1] == (FIELDPOSITION + FIELDSIZE)){
                if(hasPiece([pieceCordinates[0],(pieceCordinates[1] + FIELDSIZE)]) == null && hasPiece([pieceCordinates[0],(pieceCordinates[1] + (FIELDSIZE * 2))]) == null){
                    possibleMoves.push([pieceCordinates[0],pieceCordinates[1] + (FIELDSIZE * 2)]);
                    possibleMoves.push([pieceCordinates[0],pieceCordinates[1] + FIELDSIZE]);
                }
            }

            // Opponent's piece is available to take
            frontLeft = hasPiece([(pieceCordinates[0] - FIELDSIZE),(pieceCordinates[1] + FIELDSIZE)]);
            frontRight = hasPiece([(pieceCordinates[0] + FIELDSIZE),(pieceCordinates[1] + FIELDSIZE)]);

            if(frontLeft != null){
                if(frontLeft.color == "white"){
                    possibleMoves.push(frontLeft.cordinates);
                }
            }
            if(frontRight != null){
                if(frontRight.color == "white"){
                    possibleMoves.push(frontRight.cordinates);
                }
            }
        }
    }else if(pieceName.indexOf("rock") != -1){
        if(pieceColor == "white"){
            // TOP
            if(pieceCordinates[1] != FIELDPOSITION){
                for(let i = pieceCordinates[1] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);
    
                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // RIGHT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[0] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);
    
                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }

            // BOTTOM
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[1] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);

                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // LEFT
            if(pieceCordinates[0] != FIELDPOSITION){
                for(let i = pieceCordinates[0] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);

                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }               
        }else if(pieceColor == "black"){
            // TOP
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[1] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);

                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // RIGHT
            if(pieceCordinates[0] != FIELDPOSITION){
                for(let i = pieceCordinates[0] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);

                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }   

            // BOTTOM
            if(pieceCordinates[1] != FIELDPOSITION){
                for(let i = pieceCordinates[1] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);
    
                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // LEFT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[0] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);
    
                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }
        }
    }else if(pieceName.indexOf("knight") != -1){
        if(pieceColor == "white"){
            let newCordinates;
            let target;

            // TOP-LEFT 1
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] > (FIELDPOSITION + FIELDSIZE)){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-LEFT 2
            if(pieceCordinates[0] > (FIELDPOSITION + FIELDSIZE) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - (FIELDSIZE * 2),pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT 1
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > (FIELDPOSITION + FIELDSIZE)){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT 2
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 6)) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] + (FIELDSIZE * 2),pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT 1
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 6))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT 2
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 6)) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + (FIELDSIZE * 2),pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT 1
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 6))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT 2
            if(pieceCordinates[0] > (FIELDPOSITION + FIELDSIZE) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - (FIELDSIZE * 2),pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
        }else if(pieceColor == "black"){
            let newCordinates;
            let target;

            // TOP-LEFT 1
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 6))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-LEFT 2
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 6)) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + (FIELDSIZE * 2),pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT 1
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 6))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT 2
            if(pieceCordinates[0] > (FIELDPOSITION + FIELDSIZE) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - (FIELDSIZE * 2),pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT 1
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] > (FIELDPOSITION + FIELDSIZE)){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT 2
            if(pieceCordinates[0] > (FIELDPOSITION + FIELDSIZE) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - (FIELDSIZE * 2),pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT 1
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > (FIELDPOSITION + FIELDSIZE)){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - (FIELDSIZE * 2)];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT 2
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 6)) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] + (FIELDSIZE * 2),pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
        }
    }else if(pieceName.indexOf("bishop") != -1){
        if(pieceColor == "white"){
            let newCordinates;
            let target;

            //TOP-LEFT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] > FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] >= FIELDPOSITION){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }
                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
            
            //TOP-RIGHT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > FIELDPOSITION){                
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] >= FIELDPOSITION){                    
                    target = hasPiece(newCordinates);

                    if(target !== null){                        
                        if(target.color == "white"){                            
                            break;
                        }else{                            
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{                        
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    

            //BOTTOM-RIGHT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    

            //BOTTOM-LEFT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    
        }else if(pieceColor == "black"){
            let newCordinates;
            let target;

            //TOP-LEFT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    

            //TOP-RIGHT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }  

            //BOTTOM-RIGHT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] > FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] >= FIELDPOSITION){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }
                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
            
            //BOTTOM-LEFT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > FIELDPOSITION){                
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] >= FIELDPOSITION){                    
                    target = hasPiece(newCordinates);

                    if(target !== null){                        
                        if(target.color == "black"){                            
                            break;
                        }else{                            
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{                        
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
        }
    }else if(pieceName == "queen"){
        if(pieceColor == "white"){
            let newCordinates;
            let target;

            // TOP
            if(pieceCordinates[1] != FIELDPOSITION){
                for(let i = pieceCordinates[1] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);
    
                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // RIGHT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[0] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);
    
                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }

            // BOTTOM
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[1] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);

                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // LEFT
            if(pieceCordinates[0] != FIELDPOSITION){
                for(let i = pieceCordinates[0] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);

                    if(target != null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }   

            //TOP-LEFT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] > FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] >= FIELDPOSITION){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }
                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
            
            //TOP-RIGHT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > FIELDPOSITION){                
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] >= FIELDPOSITION){                    
                    target = hasPiece(newCordinates);

                    if(target !== null){                        
                        if(target.color == "white"){                            
                            break;
                        }else{                            
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{                        
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    

            //BOTTOM-RIGHT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    

            //BOTTOM-LEFT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "white"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    
        }else if(pieceColor == "black"){
            let newCordinates;
            let target;

            // TOP
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[1] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);

                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // RIGHT
            if(pieceCordinates[0] != FIELDPOSITION){
                for(let i = pieceCordinates[0] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);

                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }   

            // BOTTOM
            if(pieceCordinates[1] != FIELDPOSITION){
                for(let i = pieceCordinates[1] - FIELDSIZE; i >= FIELDPOSITION; i = i - FIELDSIZE){
                    let target = hasPiece([pieceCordinates[0],i]);
    
                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([pieceCordinates[0],i]);
                            break;
                        }
                    }else{
                        possibleMoves.push([pieceCordinates[0],i]);
                    }
                }
            }

            // LEFT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                for(let i = pieceCordinates[0] + FIELDSIZE; i <= (FIELDPOSITION + (FIELDSIZE * 7)); i = i + FIELDSIZE){
                    let target = hasPiece([i,pieceCordinates[1]]);
    
                    if(target != null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push([i,pieceCordinates[1]]);
                            break;
                        }
                    }else{
                        possibleMoves.push([i,pieceCordinates[1]]);
                    }
                }
            }

            //TOP-LEFT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }    

            //TOP-RIGHT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] < (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] <= (FIELDPOSITION + (FIELDSIZE * 7))){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] + FIELDSIZE];
                }
            }  

            //BOTTOM-RIGHT
            if(pieceCordinates[0] > FIELDPOSITION && pieceCordinates[1] > FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] >= FIELDPOSITION && newCordinates[1] >= FIELDPOSITION){
                    target = hasPiece(newCordinates);

                    if(target !== null){
                        if(target.color == "black"){
                            break;
                        }else{
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{
                        possibleMoves.push(newCordinates);
                    }
                    newCordinates = [newCordinates[0] - FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
            
            //BOTTOM-LEFT
            if(pieceCordinates[0] < (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] > FIELDPOSITION){                
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                
                while(newCordinates[0] <= (FIELDPOSITION + (FIELDSIZE * 7)) && newCordinates[1] >= FIELDPOSITION){                    
                    target = hasPiece(newCordinates);

                    if(target !== null){                        
                        if(target.color == "black"){                            
                            break;
                        }else{                            
                            possibleMoves.push(newCordinates);
                            break;
                        }
                    }else{                        
                        possibleMoves.push(newCordinates);
                    }

                    newCordinates = [newCordinates[0] + FIELDSIZE, newCordinates[1] - FIELDSIZE];
                }
            }    
        }
    }else if(pieceName == "king"){
        if(pieceColor == "white"){
            let newCordinates;
            let target;

            // TOP-LEFT
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
            
            // TOP
            if(pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0],pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // RIGHT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1]];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0],pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // LEFT
            if(pieceCordinates[0] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1]];
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "black"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
        }else if(pieceColor == "black"){
            let newCordinates;
            let target;

            // TOP-LEFT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] + FIELDSIZE];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP
            if(pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0],pieceCordinates[1] + FIELDSIZE];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // TOP-RIGHT
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] + FIELDSIZE];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // RIGHT
            if(pieceCordinates[0] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1]];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-RIGHT
            if(pieceCordinates[0] != FIELDPOSITION && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] - FIELDSIZE,pieceCordinates[1] - FIELDSIZE];                
                target = hasPiece(newCordinates);
                
                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
            
            // BOTTOM
            if(pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0],pieceCordinates[1] - FIELDSIZE];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // BOTTOM-LEFT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7)) && pieceCordinates[1] != FIELDPOSITION){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1] - FIELDSIZE];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }

            // LEFT
            if(pieceCordinates[0] != (FIELDPOSITION + (FIELDSIZE * 7))){
                newCordinates = [pieceCordinates[0] + FIELDSIZE,pieceCordinates[1]];                
                target = hasPiece(newCordinates);

                if(target != null){
                    if(target.color == "white"){
                        possibleMoves.push(newCordinates);
                    }
                }else{
                    possibleMoves.push(newCordinates);
                }
            }
        }
    }

    validMoves = possibleMoves;
    return possibleMoves;
}