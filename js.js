var
    s = 0,
    n = 0;
while (s < 10000) {
    n++;
    s += n;
}
document.getElementById("small-int").innerHTML = "Số nguyên dương nhỏ nhất: " + n

function sum() {
    var
        x = Number(document.getElementById("x").value),
        n = Number(document.getElementById("n").value),
        s = 0,
        i = 0;

    while (i < n) {
        i++;
        s += Math.pow(x, i)
    }
    document.getElementById("sum").innerHTML = s
}

function factorial() {
    var
        n = Number(document.getElementById("factor-int").value),
        f = find_factorial(n);
    document.getElementById("factorial").innerHTML = f

}
function find_factorial(f) {
    if (f == 0)
        return (1);
    return (f * find_factorial(f - 1));
}



function add_div() {
    //tạo phần tử p    
    var
        n = 0;
    //tạo phần tử text
    while (n < 10) {
        n++
        var
            p = document.createElement("p");
        if (n % 2 == 0) {
            var node = document.createTextNode("div chẵn " + n);
            p.appendChild(node);
            p.style.backgroundColor = 'red';
            p.style.color = "white";
            p.style.height = "30px";
            p.style.lineHeight = "30px";
        } else {
            var node = document.createTextNode("div lẻ " + n);
            p.appendChild(node);
            p.style.backgroundColor = 'blue';
            p.style.color = "white";
            p.style.lineHeight = "30px";
        }
        var div = document.getElementById("add");
        //gắn p vào div
        div.appendChild(p)
    }
}