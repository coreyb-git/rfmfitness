function bodyfattorangetext(bf) {
    if (bf < 18.5)
        return 'Underweight';
    if (bf < 24.9)
        return 'Normal weight';
    if (bf < 29.9)
        return 'Overweight';
    return 'Obese';
}
function bodyfattotext(bf) {
    var range = bodyfattorangetext(bf);
    return "Your Result: <strong>" + bf.toFixed(2).toString() + "</strong> (" + range + ")";
}
function rfm() {
    var g = document.getElementById("gender").value;
    var h = document.getElementById("height").value;
    var w = document.getElementById("waist").value;
    if (!isNaN(h) && !isNaN(w)) {
        var result = -1;
        var block = (20 * h) / w;
        if (g === 'male')
            result = 64 - block;
        else
            result = 76 - block;
        var s = '';
        if (isNaN(result) || (h == 0) || (w == 0))
            s = 'Enter details above';
        else
            s = bodyfattotext(result);
        document.getElementById("result").innerHTML = s;
    }
}
function bmi() {
    var bmih = document.getElementById("bmiheight").value / 100;
    var bmiw = document.getElementById("bmiweight").value;
    if (!isNaN(bmih) && !isNaN(bmiw)) {
        var result = bmiw / bmih / bmih;
        var s = '';
        if (isNaN(result) || (bmih == 0) || (bmiw == 0))
            s = 'Enter details above';
        else
            s = bodyfattotext(result);
        document.getElementById("bmiresult").innerHTML = s;
    }
}
function matchbmitoheight() {
    document.getElementById("bmiheight").value = document.getElementById("height").value;
    rfm();
    bmi();
}
function matchrfmtoheight() {
    document.getElementById("height").value = document.getElementById("bmiheight").value;
    rfm();
    bmi();
}
function _setkeys(elementID, func) {
    var e = document.getElementById(elementID);
    e.addEventListener('change', func);
    e.addEventListener('keyup', func);
}
function setupkeys() {
    var e = document.getElementById('gender');
    e.addEventListener('change', rfm);
    e.addEventListener('keyup', rfm);
    var e = document.getElementById('height');
    e.addEventListener('change', matchbmitoheight);
    e.addEventListener('keyup', matchbmitoheight);
    var e = document.getElementById('waist');
    e.addEventListener('change', rfm);
    e.addEventListener('keyup', rfm);
    var e = document.getElementById('bmiheight');
    e.addEventListener('change', matchrfmtoheight);
    e.addEventListener('keyup', matchrfmtoheight);
    var e = document.getElementById('bmiweight');
    e.addEventListener('change', bmi);
    e.addEventListener('keyup', bmi);
}
setupkeys();
rfm();
bmi();
