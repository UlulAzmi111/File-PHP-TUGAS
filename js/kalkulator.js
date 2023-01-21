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