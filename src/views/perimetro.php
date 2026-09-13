<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perimetro del Cubo</title>
</head>
<body>
    <header>
        <a href="../../index.php">(<)</a> <!-- Temporal -->
        <h1>Perimetro del Cubo</h1>
    </header>

    <!-- Contenedor de funcionalidad -->
    <div id="ctner">
        <h2>12 * a</h2><br>
        <p>Arista (a)</p>
        <input type="number" placeholder="0" id="arista" required><br><br>
        <button type="button" id="btnCalcular" class="btn">Calcular Perimetro</button>
    </div> <br>

    <!-- Contenedor del resultado -->
    <div id="ctnerRes" hidden>
        <p>Resultado</p>
        <p id="resultado"></p>
        <p>12 * <span id="valorArista"></span> = 12 * (a)</p>
    </div>

    <script src="/js/perimetro.js"></script>
</body>
</html>