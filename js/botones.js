jQuery('document').ready(function($){
    var botonCuadrado=$('.boton-cuadrado');
    cuadrado=$('.cuadrado');
    
    botonCuadrado.click(function(){
        if(cuadrado.hasClass('show-cuadrado')){
            cuadrado.removeClass('show-cuadrado');
        }else{
            cuadrado.addClass('show-cuadrado');
            triangulo.removeClass('show-triangulo');
            circulo.removeClass('show-circulo');
        }
    });

    var botonTriangulo=$('.boton-triangulo');
    triangulo=$('.triangulo');
    
    botonTriangulo.click(function(){
        if(triangulo.hasClass('show-triangulo')){
            triangulo.removeClass('show-triangulo');

        }else{
            triangulo.addClass('show-triangulo');
            cuadrado.removeClass('show-cuadrado');
            circulo.removeClass('show-circulo');
        }
    });
    
    var butonCirculo=$('.boton-circulo');
    circulo=$('.circulo');
    
    butonCirculo.click(function(){
        if(circulo.hasClass('show-circulo')){
            circulo.removeClass('show-circulo');
        }else{
            circulo.addClass('show-circulo');
            triangulo.removeClass('show-triangulo');
            cuadrado.removeClass('show-cuadrado');
        }
    });
    

});

