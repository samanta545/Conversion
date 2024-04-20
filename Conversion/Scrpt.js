function convert() {
    let romNum = document.querySelector('.num').value;
    let frontResult = document.querySelector('.frontResult');
    let result = 0;
    romNum = romNum.split('');
    romNum =romNum.map(function (e) {
        return e.toUpperCase()
    });
    let romLength = romNum.length;
    for (let i  = 0; i < romLength; i++) {
        switch (romNum[i]) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    frontResult.textContent = result;
}