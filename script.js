let cel = document.getElementById('degress');
let feh = document.getElementById('fahrenheit');
cel.addEventListener('input', function () {
    let cs = this.value;
    let frm = (cs * 9 / 5) + 32;
    if (!Number.isInteger(frm)) {
        frm = frm.toFixed(4);
    }
    feh.value = frm;
});
feh.addEventListener('input', function () {
    let fs = this.value;
    let frm = (fs - 32) * 5 / 9;
    if (!Number.isInteger(frm)) {
        frm = frm.toFixed(4);
    }
    cel.value = frm;
});