<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API | DUMMY JSON</title>
        <link rel="stylesheet" href="sudoku/bootstrap/css/bootstrap.min.css">
        <script src="jquery.js"></script>
        <script src="ajax.js" defer></script>
    </head>
    <body>
        <h1 class="text-center mt-5">Data dari API & Database</h1>
        <hr>

        <div class="container">
            <div class="row mt-5">
                    <div class="col">
                        <h3 class="dua mt-4 text-center">Data Pelanggan</h3>
                        <button id="pelanggan" class="ms-4 btn btn-outline-secondary">GET</button>
                        <button type="button" id="btn-tambah" class="ms-2 btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">POST DELETE UPDATE</button>
                    </div>
                    <div class="col">
                        <h3 class="satu mt-4 text-center">Data Order</h3>
                        <button id="order" class="btn btn-outline-primary">GET</button>
                        <button id="order2" class="btn btn-outline-primary">POST</button>
                        <button id="order3" class="btn btn-outline-primary">UPDATE</button>
                        <button id="order4" class="btn btn-outline-primary">DELETE</button>
                    </div>
                    <div class="col">
                        <h3 class="dua mt-4 text-center">Data Order Detail</h3>
                        <button id="orderdetail" class="btn btn-outline-secondary">GET</button>
                        <button id="orderdetail2" class="btn btn-outline-secondary">POST</button>
                        <button id="orderdetail3" class="btn btn-outline-secondary">UPDATE</button>
                        <button id="orderdetail4" class="btn btn-outline-secondary">DELETE</button>
                    </div>
                    <div class="col">
                        <h3 class="satu mt-4 text-center">Data Barang</h3>
                        <button id="barang" class="btn btn-outline-primary">GET</button>
                        <button id="barang2" class="btn btn-outline-primary">POST</button>
                        <button id="barang3" class="btn btn-outline-primary">UPDATE</button>
                        <button id="barang4" class="btn btn-outline-primary">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
        <hr id="hr2" class="mt-4">

        
        <div class="container">

            <div class="row ms-1">
                <table class="table table-danger table-bordered">
                    <tbody id="tbody1"></tbody>
                </table>

                <table class="table table-success table-bordered">
                    <tbody id="tbody2"></tbody>
                </table>

                <table class="table table-danger table-bordered">
                    <tbody id="tbody3"></tbody>
                </table>

                <table class="table table-success table-bordered">
                    <tbody id="tbody4"></tbody>
                </table>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col" id="bismillah"></div>
            </div>
            <div class="row">
                <div class="col" id="select"></div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="text-align: left;">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="titel">Tambah Data</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                        <div class="mb-3">
                        <input type="text" hidden class="form-control" id="id" required aria-describedby="emailHelp">
                            <label for="exampleInputEmail1" class="form-label">Pelanggan</label>
                            <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Harus diisi</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Alamat</label>
                            <input type="text" class="form-control" id="alamat" required>
                            <div id="emailHelp" class="form-text">Harus diisi</div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Telp</label>
                            <input type="text" class="form-control" id="telp" required>
                            <div id="emailHelp" class="form-text">Harus diisi</div>
                        </div>

                        <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Simpan</button>
                    </form>
            </div>
            </div>
        </div>
        </div>

    </div>

        <style>
            h1 {
                color:hotpink;
                font-family: "Cambria";
                font-weight: bold;
            }
            h5 {
                color:darkslategray;
                font-family: "Cambria";
            }
            .satu{
                font-family:"Serif";
                color:mediumslateblue;
            }
            .dua{
                font-family: "Serif";
                color:slategrey;
            }
            hr {
                width: 600px;
                margin: auto;
            }
            #hr2 {
                width: 1300px;
                border-style:dashed;
                border-color: black;
            }
            #input {
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }
            p {
                color: red;
                font-weight: bold;
            }
        </style>
    </body>
</html>