function CalPerimetro (arista) {
    return 12 * arista
}

const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", function () {
    const arista = document.getElementById("arista").value;

    const perimetro = CalPerimetro(arista);

    document.getElementById("ctnerRes").hidden = false;

    document.getElementById("resultado").textContent = perimetro + "u";
    document.getElementById("valorArista").textContent = arista;
});