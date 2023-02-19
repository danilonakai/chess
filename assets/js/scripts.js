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
]

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
}

var moves = [];

let whitesTurn = true;
let selectedPiece = null;

updateGame(0);



function updateGame(piecesAngle,selectedPiece = null,possibleMoves = null){
    drawFrame();
    drawBoard();    
    drawPieces(piecesAngle,selectedPiece);
}

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

function drawPieces(piecesAngle,selectedPiece = null){    
    // DRAW BLACK PIECES
    pieces.black.forEach(piece=>{
        let img = new Image();
        
        if(selectedPiece != null && selectedPiece[0] == "black" && selectedPiece[1] == piece.name){
            CTX.fillStyle = "#c19348";

            CTX.fillRect(piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);
        }

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

        if(selectedPiece != null && selectedPiece[0] == "white" && selectedPiece[1] == piece.name){
            CTX.fillStyle = "#c19348";

            CTX.fillRect(piece.cordinates[0],piece.cordinates[1],FIELDSIZE,FIELDSIZE);
        }

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

function getClick(event){
    let x = event.layerX;
    let y = event.layerY;

    if(selectedPiece == null){
        selectPiece(x,y);
    }else{
        let newX = SQUARES.filter(square=> x >= square.cordinates[0] && x <= (square.cordinates[0] + FIELDSIZE))[0].cordinates[0];
        let newY = SQUARES.filter(square=> y >= square.cordinates[1] && y <= (square.cordinates[1] + FIELDSIZE))[0].cordinates[1];
        let newCordinates = [newX,newY];
        
        movePiece(newCordinates);
    }
}

function getPieceCordinates(){

}

function setPieceCordinates(){

}

function selectPiece(x,y){
    if(whitesTurn){
        pieces.white.forEach(piece => {
            let pieceXbeginning = piece.cordinates[0];
            let pieceXend = piece.cordinates[0] + FIELDSIZE;
            let pieceYbeginning = piece.cordinates[1];
            let pieceYend = piece.cordinates[1] + FIELDSIZE;
            let pieceMoves = null;

            if((x >= pieceXbeginning && x <= pieceXend) && (y >= pieceYbeginning && y <= pieceYend)){
                selectedPiece = {
                    "color":"white",
                    "piece":piece.name
                }

                if(piece.name.indexOf("pawn") != -1){
                    pawnMoves();
                }else if(piece.name.indexOf("rock") != -1){
                    rockMoves();
                }else if(piece.name.indexOf("knight") != -1){
                    knightMoves();
                }else if(piece.name.indexOf("bishop") != -1){
                    bishopMoves();
                }else if(piece.name == "queen"){
                    queenMoves();
                }else if(piece.name == "king"){
                    kingMoves();
                }

                whitesTurn = false;
                updateGame(0,["white",piece.name],pieceMoves);
            }
        });
    }else{
        pieces.black.forEach(piece => {
            let pieceXbeginning = piece.cordinates[0];
            let pieceXend = piece.cordinates[0] + FIELDSIZE;
            let pieceYbeginning = piece.cordinates[1];
            let pieceYend = piece.cordinates[1] + FIELDSIZE;
            let pieceMoves = null;

            if(((BOARDSIZE - x) >= pieceXbeginning && (BOARDSIZE - x) <= pieceXend) && ((BOARDSIZE - y) >= pieceYbeginning && (BOARDSIZE - y) <= pieceYend)){
                selectedPiece = {
                    "color":"black",
                    "piece":piece.name
                }

                if(piece.name.indexOf("pawn") != -1){
                    pawnMoves();
                }else if(piece.name.indexOf("rock") != -1){
                    rockMoves();
                }else if(piece.name.indexOf("knight") != -1){
                    knightMoves();
                }else if(piece.name.indexOf("bishop") != -1){
                    bishopMoves();
                }else if(piece.name == "queen"){
                    queenMoves();
                }else if(piece.name == "king"){
                    kingMoves();
                }

                whitesTurn = true;
                updateGame(180,["black",piece.name],pieceMoves);
            }
        });
    }
}

function movePiece(newCordinates){
    if(selectedPiece.color == "black"){
        newCordinates = [(BOARDSIZE - FIELDSIZE) - newCordinates[0],(BOARDSIZE - FIELDSIZE) - newCordinates[1]];

        pieces.black.filter(piece=> piece.name == selectedPiece.piece)[0].cordinates = newCordinates;
        
        CANVAS.classList.add('rotate0');
        CANVAS.classList.remove('rotate180');
        
        selectedPiece = null;

        updateGame(0);
    }else if(selectedPiece.color == "white"){
        pieces.white.filter(piece=> piece.name == selectedPiece.piece)[0].cordinates = newCordinates;

        CANVAS.classList.add('rotate180');
        CANVAS.classList.remove('rotate0');

        selectedPiece = null;

        updateGame(180);
    }
}

function pawnMoves(pieceCordinates){

}

function rockMoves(pieceCordinates){
    
}

function knightMoves(pieceCordinates){
    
}

function bishopMoves(pieceCordinates){
    
}

function queenMoves(pieceCordinates){
    
}

function kingMoves(pieceCordinates){
    
}