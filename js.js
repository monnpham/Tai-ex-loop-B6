//bai 1
var
    s = 0,
    n = 0;
while (s < 10000) {
    n++;
    s += n;
}
document.getElementById("small-int").innerHTML = "Số nguyên dương nhỏ nhất: " + n
//bai 2
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
//bai 3
function factorial() {
    var
        n = Number(document.getElementById("factor-int").value),
        f = find_factorial(n);
    document.getElementById("factorial").innerHTML = f

}
// tim` giai thừa
function find_factorial(f) {
    if (f == 0)
        return (1);
    return (f * find_factorial(f - 1));
}



function add_div() {
    var
        // nn = $("#add > p").length,
        nn = document.getElementById("add");
    a = nn.getElementsByTagName("p").length;
    n = 0;
    while (n < 10) {
        n++
        a++
        // nn++
        var
            //tạo phần tử text
            p = document.createElement("p");
        if (n % 2 == 0) {
            var node = document.createTextNode("div chẵn " + a /* nn */);
            p.appendChild(node);
            p.style.backgroundColor = 'red';
            p.style.color = "white";
            p.style.lineHeight = "30px";

        } else {
            var node = document.createTextNode("div lẻ " + a);
            p.appendChild(node);
            p.style.backgroundColor = 'rgb(52, 90, 212)';
            p.style.color = "white";
            p.style.lineHeight = "30px";
        }
        var div = document.getElementById("add");
        //gắn p vào div
        div.appendChild(p)

    }


}