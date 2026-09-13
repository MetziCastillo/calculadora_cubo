function CalArea(arista) {
    return 6 * (arista^2)
}

const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", function () {
    const arista = document.getElementById("arista").value;

    const area = CalArea(arista);

    document.getElementById("ctnerRes").hidden = false;

    document.getElementById("resultado").textContent = area + "u²";
    document.getElementById("valorArista").textContent = arista
});