<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $pelangganbarang = json_decode($data, true);

    // $idorder = 1;
    // $idbarang = 2;
    // $jumlah = 1;
    // $harga = 100;
    // $barang = "iphone";
    // $idpelanggan = 3;
    // $pelanggan = "Joni";
    // $alamat = "Sidoarjo";
    
    $idorder = $pelangganbarang['idorder'];
    $idbarang = $pelangganbarang['idbarang'];
    $jumlah = $pelangganbarang['jumlah'];
    $harga = $pelangganbarang['harga'];
    $barrang = $pelangganbarang['barrang'];
    $idpelanggann = $pelangganbarang['idpelanggann'];
    $pelanggann = $pelangganbarang['pelanggann'];
    $alamatt = $pelangganbarang['alamatt'];
    $telepun = $pelangganbarang['telepun'];

    $sql = "INSERT INTO tblorderdetail VALUES ('', '$idorder', '$idbarang', '$jumlah', '$harga', '$barrang', '$idpelanggann', '$pelanggann', '$alamatt', '$telepun')";

    if ($result = mysqli_query($con, $sql)){
        echo "Berhasil !!";
    }

    

?>