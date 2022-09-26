function calcularBhaskara() {
    var valorA = document.getElementById("valorA");
    var valorB = document.getElementById("valorB");
    var valorC = document.getElementById("valorC");
    var outResposta = document.getElementById("outResposta");
    var outResolucao = document.getElementById("outResolucao");

    //obtém conteúdo dos campos digitados
    var A = Number(valorA.value);
    var B = Number(valorB.value);
    var C = Number(valorC.value);

    //verificar se é um número valido entre 0 e infinito
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Informe um valor válido...");
        return;
    }
    var delta = Number((B ** 2) - (4 * A) * C);
    var raizDelta = Number(Math.sqrt(delta));
    var xCont1 = -B + raizDelta;
    var xCont2 = -B - raizDelta;
    xCont1 = xCont1 / (2 * A);
    xCont2 = xCont2 / (2 * A);

    outResposta.textContent = "Delta é: " + delta;
    outResolucao.textContent = "X1 é: " + xCont1 + "\nX2 é: " + xCont2;
    outResolucao.style.color = "green";
    outResolucao.style.fontSize = "18px";

    if (isNaN(xCont1) || isNaN(xCont2)) {
        outResolucao.textContent = "Esse Calculo não possui raiz real!";
        outResolucao.style.color = "red";
        return;
    }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularBhaskara);