$('#calcular').click(function() {
    var valor1 = parseFloat($('#txtvalor1').val());
    var valor2 = parseFloat($('#txtvalor2').val());
    var valor3 = parseFloat($('#txtvalor3').val());

    var valores = [valor1, valor2, valor3];

    valores.sort(function(x, y) {
        return x - y;
    });

    alert("Valores em ordem crescente: " + valores.join(', '));

    $("#crescente")
        .text("Valores em ordem crescente: " + valores.join(', '))
        .css({ 'font-weight': 'bold', 'font-size': '18pt'});


    var media = (valor1 + valor2 + valor3) / 3

    alert("Média aritmética: " + media)

    $('#media')
        .text("Média Aritmética: " + media)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'blue'});

    var soma = 0;
    for (var i = 1; i <= valor2; i++) {
        soma += i; 
    }

    alert("Soma dos números do loop até " + valor2 + ": " + soma);

    $('#soma')
        .text("Soma dos números até " + valor2 + ": " + soma)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'green' });
});
