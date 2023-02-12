$(document).ready(function () {

    function selectDataBarang() {
        $.ajax({
            type: "get",
            url: "https://dummyjson.com/products",
            dataType: "json",
            success: function (response) {

                let isi = `<h5 class="mt-5">Barang: </h5>
                            <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount Percentage</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Brand</th>
                            <th>Categori</th>
                            <th>Thumbnail</th>
                            <th>Images</th>
                            </tr>`;

                $.each(response.products, function (key, val) { 
                     isi += `<tr>
                            <td>${val.id}</td>
                            <td>${val.title}</td>
                            <td>${val.description}</td>
                            <td>${val.price}</td>
                            <td>${val.discountPercentage}</td>
                            <td>${val.rating}</td>
                            <td>${val.stock}</td>
                            <td>${val.brand}</td>
                            <td>${val.category}</td>
                            <td>${val.thumbnail}</td>
                            <td>${val.images}</td>
                            </tr>`
                });

                $("#tbody1").html(isi);
            }
        });
    }
                $("#barang").click(function (e) { 
                    e.preventDefault();
                    selectDataBarang();
                });


    function selectDataPelanggan() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                let isii = `<h5 class="mt-4">Pelanggan:</h5>
                            <tr>
                            <th>Id Pelanggan</th>
                            <th>Pelanggan</th>
                            <th>Alamat</th>
                            <th>Telp</th>
                            </tr>`;
                
                let no = 1;

                $.each(response, function (key, val) { 
                    isii += `<tr>
                            <td>${no++}</td>
                            <td>${val.pelanggan}</td>
                            <td>${val.alamat}</td>
                            <td>${val.telp}</td>
                            </tr>`;
                });

                $("#tbody2").html(isii);
            }
        });
    }

                $("#pelanggan").click(function (e) { 
                    e.preventDefault();
                    selectDataPelanggan();
                });



    function selectDataOrder() {
        $.ajax({
            type: "get",
            url: "php/selectorder.php",
            dataType: "json",
            success: function (response) {
                let isiii = `<h5 class="mt-4">Order:</h5>
                            <tr>
                            <th>Id Order</th>
                            <th>Id Pelanggan</th>
                            <th>Tanggal Order</th>
                            <th>Total</th>
                            <th>Bayar</th>
                            <th>Kembali</th>
                            <th>Status</th>
                            </tr>`;
                
                let no = 1;

                $.each(response, function (key, val) { 
                    isiii += `<tr>
                            <td>${no++}</td>
                            <td>${val.idpelanggan}</td>
                            <td>${val.tglorder}</td>
                            <td>${val.total}</td>
                            <td>${val.bayar}</td>
                            <td>${val.kembali}</td>
                            <td>${val.status}</td>
                            </tr>`;
                });

                $("#tbody3").html(isiii);
            }
        });
    }
                $("#order").click(function (e) { 
                    e.preventDefault();
                    selectDataOrder();
                });



    function selectDataOrderDetail() {
        $.ajax({
            type: "get",
            url: "php/selectorderdetail.php",
            dataType: "json",
            success: function (response) {
                let isiiii =`<h5>OrderDetail :</h5>
                            <tr>
                            <th>Id Order Detail</th>
                            <th>Id Order</th>
                            <th>Id Menu</th>
                            <th>Jumlah</th>
                            <th>Harga Jual</th>
                            </tr>`;
                
                let no = 1;

                $.each(response, function (key, val) { 
                    isiiii += `<tr>
                            <td>${no++}</td>
                            <td>${val.idorder}</td>
                            <td>${val.idmenu}</td>
                            <td>${val.jumlah}</td>
                            <td>${val.hargajual}</td>
                            </tr>`;
                });

                $("#tbody4").html(isiiii);
            }
        });
    }
                $("#orderdetail").click(function (e) { 
                    e.preventDefault();
                    selectDataOrderDetail();
                });



    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();;
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("#btn-tambah").click(function (e) { 
        e.preventDefault();
        
        $("#titel").html("<p>Tambah Data</p>");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });


    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr(data-id);

        if (confirm("Yakin Akan Menghapus ?")) {
            deleteData(id);
        }
    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr(data-id);
        selectUpdate(id);
    });

    $("tbody").on("click", ".btn-ubah", function () {
        $("#titel").html("<p>Ubah Data</p>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id,
        }

        $.ajax({
            type: "pos",
            url: "php/selectupdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);

            }
        });
    }


    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectDataPelanggan();
    }

    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id,
        }

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectDataPelanggan();
    }

    function updateData() {
        let dataPelanggan = {  
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`;
                $("#msg").html(out);
            }
        });

        selectDataPelanggan();
    }
});
