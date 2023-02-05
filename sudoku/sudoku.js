// file index.html

/*
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sudoku</title>
        <link rel="stylesheet" href="sudoku/bootstrap/css/bootstrap.min.css">
        <script src="sudoku/sudoku.js"></script>
    </head>

    <body>

        <div class="container mt-5">
            <div class="row">

                <div class="col-3">
                    <h3 class="mb-4"> <u>Cara Permainan</u> : </h3>
                    <p>
                        1. Setiap kotak pada baris harus diisi dengan angka yang dimulai dari 1-9 serta tidak boleh ada pengulangan angka kembar di dalam satu baris.
                        <br><br>
                        2. Setiap kolom juga harus diisi dengan angka yang dimulai dari 1-9 serta tidak boleh mengisi dengan angka yang kembar dalam satu kolom.
                        <br><br>
                        3. Di setiap area ruang kotak yang berukuran 3 x 3 yang berisi 9 kotak-kotak kecil. Angka harus diisikan di setiap kotak kecil tersebut dan tidak boleh mengisi dengan menuliskan angka yang sama pada setiap kolom dan barisnya.
                    </p>
                </div>

                <div class="col-6">
                    <h1 class="mb-4"> <u>Sudoku</u> </h1>

                    <!-- 9 x 9 kotak -->
                    <div id="board"></div>
                    <br>
                    <div id="digits"></div>
                </div>

                <div class="col-3">
                    <div class="row mb-3">
                        <h1> <u>Peraturan</u> </h1>
                    </div>

                    <div class="row ms-5">
                        <h2 id="keterangan" class="col-2">Salah:</h2>
                        <h2 id="errors" class="col-3">0</h2>
                        <h5 class="col-7">Jika salah sudah mencapai 7, maka permainan berakhir !!!</h5>
                    </div>
                    <hr style="width: 330px;">

                    <br>

                    <div class="row ms-5 mb-4" style="width: 245px;">
                        <img src="gambar/foto1.jpg" alt="">
                    </div>

                    <div class="row ms-4 mt-4">
                        <h1>1 2 3 4 5 6 7 8 9 ?</h1>
                    </div>

                    <div class="row ms-5 mt-4">
                        <button class="btn btn-outline-danger" style="width: 250px;">Jangan gunakan spekulasi untuk menjawabnya!</button>
                    </div>
                    
                </div>
                
            </div>
        </div>

*/

/*
        <style>
            body {
                font-family: Arial, Helvetica, sans-serif;
                background-color: rgba(231, 196, 248, 0.674);
            }

            h1,h3 {
                color: rgb(108, 108, 125);
                text-align: center;
                font-size: 27px;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-weight:bold;
            }

            h3 {
                text-align: start;
            }

            p,h5 {
                width: 265px;
                font-size: 14px;
                border: 1px solid black;
                padding: 15px;
                color: rgb(45, 52, 52);
                background-color:white;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            h5 {
                font-size: 17px;
                color: rgb(255, 9, 9);
            }


            #keterangan, #errors {
                text-align: center;
                color: rgb(255, 9, 9);
                font-size: 20px;
                font-family:'Times New Roman', Times, serif;
                font-weight: bold;
            }


            #board {
                width: 435px;
                height: 450px;
                
                background-color: rgb(194, 189, 194);
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
            }

            .tile {
                width: 48px;
                height: 46px;
                border: 1px solid rgb(235, 216, 244);
*/

                /* Text */
//                 font-size: 20px;
//                 font-weight: bold;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//             }

//             #digits {
//                 width: 435px;
//                 height: 50px;

//                 background-color: rgb(235, 201, 249);
//                 margin: 0 auto;
//                 display: flex;
//                 flex-wrap: wrap;
//             }

//             .number {
//                 width: 44px;
//                 height: 44px;
//                 border: 1px solid rgb(127, 124, 124);
//                 margin: 2px;

//                 /* Text */
//                 font-size: 20px;
//                 font-weight: bold;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//             }

//             .number-selected {
//                 background-color: white;
//             }

//             .tile-start {
//                 background-color: whitesmoke;
//             }

//             .horizontal-line {
//                 border-bottom: 2px solid black;
//             }

//             .vertical-line {
//                 border-right: 2px solid black;
//             }
//         </style>

//     </body>
// </html>




var numSelected = null;
var tileSelected = null

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

window.onload = function () {
    setGame();
}

function setGame() {
    // digits 1-9
    for (let i = 1; i < 10; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // kotak 9 x 9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            } 
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line")
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line")
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
        
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }

    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
        
        // "0-0" "0-1" .. "3-0"
        let coords= this.id.split("-"); // ["0". "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        } else{
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }

        if (errors == 7) {
            alert("Game Over!!!");
            alert("Tetap Semangat, Coba Lagii");
            window.location.reload();
        }
    }
}
