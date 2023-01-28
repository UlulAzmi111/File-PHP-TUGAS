// file index

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Belajar Javascript</title>
//     <link rel="stylesheet" href="css/bootstrap.min.css">
//     <script src="kalkulator.js"></sc>
// </head>

{/* <body style="background-color: rgb(139, 144, 238)">
    <h1  style="text-align: center;margin-top: 70px;margin-bottom: 10px;font-size:30px;color: rgb(240, 242, 243);
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: oblique;">Kalkulator Ajaib</h1>
        <hr style="width: 250px; margin: auto;">
        <div class="bg" style="border-style: groove; width: 200px;margin: auto;margin-top: 20px;
                        background-color: rgba(163, 120, 255, 0.903);margin-bottom: 20px;">
            <div class="main" style="padding: 20px;padding-top: 5px; padding-left: 37px;">
                <h2 style="color: rgb(48, 248, 221);margin-bottom: 10px;">Kalkulator</h2>
                <form action="" name="form">
                    <input style="width: 115px;" class="textarea" name="textarea">
                </form>
                <table class="col-4">
                    <tr>
                        <td><input style="width: 27px;" class="button" type="button" value="C" onclick="hapusSemua()"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="<" onclick="hapusSatu()"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="/" onclick="insert(' / ')"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="x" onclick="insert(' * ')"></td>
                    </tr>
                    <tr>
                        <td><input style="width: 27px;" class="button" type="button" value="7" onclick="insert(7)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="8" onclick="insert(8)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="9" onclick="insert(9)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="-" onclick="insert(' - ')"></td>
                    </tr>
                    <tr>
                        <td><input style="width: 27px;" class="button" type="button" value="4" onclick="insert(4)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="5" onclick="insert(5)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="6" onclick="insert(6)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="+" onclick="insert(' + ')"></td>
                    </tr>
                    <tr>
                        <td><input style="width: 27px;" class="button" type="button" value="1" onclick="insert(1)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="2" onclick="insert(2)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="3" onclick="insert(3)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="%" onclick="insert(' % ')"></td>
                        
                    </tr>
                    <tr>
                        <td><input style="width: 27px;" class="button" type="button" value="0" onclick="insert(0)"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="00" onclick="insert(0 + '0')"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="." onclick="insert('.')"></td>
                        <td><input style="width: 27px;" class="button" type="button" value="=" onclick="samaDengan()"></td>
                    </tr>
                </table>
            </div>
        </div>
        <hr style="width: 500px; margin: auto;">
        <h1 style="text-align: center;margin-top: 10px;font-size:30px;color: rgb(240, 242, 243);
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-style: oblique;">Tekan dan Temukan Jawabannya</h1>
</body>
</html> */}


function insert(num) {
    document.form.textarea.value = document.form.textarea.value + num;
}

function samaDengan() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

function hapusSemua() {
    document.form.textarea.value = "";
}

function hapusSatu() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);
}