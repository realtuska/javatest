function quadraticEquation(a, b, c) {
    b *= b;
    return b - 4 * a * c;
}

function rootFirst(a, b, sqrt) {
    return (- b + sqrt)/(2 * a);
}
function rootSecond(a, b, sqrt) {
    return (- b - sqrt)/(2 * a);
}

if(confirm('Хочете розв\'язати квадратне рівняння?')) {
    let a = 1;
    do {
        a = parseFloat(prompt('Введіть коєфіціент a'));
        
        if (a === 0){
            alert ('Коєфіціент а не повинен дорівнювати 0');
        }
    } while(a === 0);
    
    let b = parseFloat(prompt('Введіть коєфіціент b'));
    let c = parseFloat(prompt('Введіть коєфіціент c'));
    
    if (b === 0 && c === 0){
        alert ('Корінь рівняння х = 0');
    } else {
        const D = quadraticEquation(a, b, c);
        const sqrt = Math.sqrt(D);
        //alert (D);
        if (D < 0) {
           alert ('Обидва кореня є комплексними числами. Не намагайтеся їх уявити!');
        } else if (D > 0) {
            const x1 = rootFirst(a, b, sqrt);
            const x2 = rootSecond(a, b, sqrt);
            alert ('Рівняння має два корені:\nх1 = ' + x1 + ',\n' + 'x2 = ' + x2);
        } else {
            const x1 = rootFirst(a, b, sqrt);
            alert ('Рівняння має один корінь: х = ' + x1);
        }
    }
} else {
    alert("Шкода!");
}