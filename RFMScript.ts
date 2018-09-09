function bodyfattorangetext(bf) {
    if (bf < 18.5) return 'Underweight';
    if (bf < 24.9) return 'Normal weight';
    if (bf < 29.9) return 'Overweight';

    return 'Obese';
}

function bodyfattotext(bf) {
    let range = bodyfattorangetext(bf);
    return "Your Result: <strong>" + bf.toFixed(2).toString() + "</strong> (" + range + ")";
}

function rfm() {
    let g = document.getElementById("gender").value;
    let h = document.getElementById("height").value;
    let w = document.getElementById("waist").value;

    if (!isNaN(h) && !isNaN(w)) {
        let result = -1;
        let block = (20 * h) / w;
        if (g === 'male') result = 64 - block;
        else result = 76 - block;

        let s = '';
        if (isNaN(result) || (h == 0) || (w == 0)) s = 'Enter details above';
        else s = bodyfattotext(result);

        document.getElementById("result").innerHTML = s;
    }
}

function bmi() {
    let bmih = document.getElementById("bmiheight").value / 100;
    let bmiw = document.getElementById("bmiweight").value;

    if (!isNaN(bmih) && !isNaN(bmiw)) {
        let result = bmiw / bmih / bmih;

        let s = '';
        if (isNaN(result) || (bmih == 0) || (bmiw == 0)) s = 'Enter details above';
        else s = bodyfattotext(result);

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
    let e = document.getElementById(elementID);
    e.addEventListener('change', func);
    e.addEventListener('keyup', func);
}

function setupkeys() {
    let e = document.getElementById('gender');
    e.addEventListener('change', rfm);
    e.addEventListener('keyup', rfm);
    let e = document.getElementById('height');
    e.addEventListener('change', matchbmitoheight);
    e.addEventListener('keyup', matchbmitoheight);
    let e = document.getElementById('waist');
    e.addEventListener('change', rfm);
    e.addEventListener('keyup', rfm);

    let e = document.getElementById('bmiheight');
    e.addEventListener('change', matchrfmtoheight);
    e.addEventListener('keyup', matchrfmtoheight);
    let e = document.getElementById('bmiweight');
    e.addEventListener('change', bmi);
    e.addEventListener('keyup', bmi);
}

setupkeys();

rfm();
bmi();