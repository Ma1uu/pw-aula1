$("#alternar1").hide();
$("#alternar3").hide();
$("#alerta2").hide();
$("#alerta3").hide();

$("#alternar1").click(function () {
    $("#alerta3").hide();
    $("#alerta1").show();
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/",
        "title": "Etec Itu"
    });
    $("#link").text("Etec Itu");
    $("#alternar1").hide();
    $("#alternar2").show();
});

$("#alternar2").click(function () {
    $("#alerta2").show();
    $("#alerta1").hide();
    $("#link").attr({
        "href": "https://fatecitu.cps.sp.gov.br/",
        "title": "Fatec Itu"
    });
    $("#link").text("Fatec Itu");
    $("#alternar2").hide();
    $("#alternar3").show();
});

$("#alternar3").click(function () {
    $("#alerta2").hide();
    $("#alerta3").show();
    $("#link").attr({
        "href": "https://www.cps.sp.gov.br",
        "title": "CPS"
    });
    $("#link").text("CPS");
    $("#alternar3").hide();
    $("#alternar1").show();
});
