var d= document.getElementById('Drawing');
var context= lienzo= d.getContext ('2d');
var lineas= 60;
var l= 0;
var yi, xf;
var xi, yf;
var xi2, xf2;
var colorcito= '#D060BF';
var color2= '#AFA';
var radio= 150;
var cir_color= '#2C0B51';
var x1= y1 = 300;
var j= 0;
var anguloI;
var anguloF;
var grosor;
var verdadero;

for(var l=0; l < lineas; l++)
{
  yi= 10 * l;
  xf= 10 * (l + 1);
  xi= 10 * (l + 1);
  yf= 10 * l;
  xf2= xi2= 590 - (l * 10);
  dibujarLinea (colorcito, 0, yi, xf, 600);
  dibujarLinea (colorcito, xi, 600, 0, yf);
  dibujarLinea (colorcito, 600, yi, xf2, 600);
  dibujarLinea (colorcito, xi2, 0, 0, yf);
  console.log('Linea ' + 1);
}

dibujarLinea('#2C0B51', 1, 1, 1, 599);
dibujarLinea('#2C0B51', 1, 599, 599, 599);
dibujarLinea('#2C0B51', 599, 1, 1, 1);
dibujarLinea('#2C0B51', 599, 599, 599, 1);

function dibujarLinea(color, xinicial, xfinal, yinicial, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal)
  lienzo.stroke();
  lienzo.closePath();
}

for (var j=0; j< lineas; j=j + 7)
{
  dibujarCirculo('#4C1143', 300, 300, 30 + 3  * (j + 1), 0, 360, true, 3);
  dibujarCirculo('#BA38A6', 300, 300, 15 + 3  * (j + 1), 225, 45, true, 8);
  dibujarCirculo('#BA38A6', 300, 300, 15 + 3  * (j + 1), 45, 225, true, 8);
}

function dibujarCirculo (cir_color, x1, y1, radio, anguloI, anguloF, verdadero, grosor)
{
  lienzo.beginPath();
  lienzo.lineWidth= grosor;
  lienzo.strokeStyle= cir_color;
  lienzo.arc( x1, y1, radio, radianes1= (Math.PI/180) * anguloI, radianes2= (Math.PI/180) * anguloF, verdadero);
  lienzo.stroke();
  lienzo.closePath();
}

function circuloLlena (cir_color, x1, y1, radio, anguloI, anguloF, verdadero, grosor)
{
  lienzo.beginPath();
  lienzo.strokeStyle= cir_color;
  lienzo.arc( x1, y1, radio, radianes1= (Math.PI/180) * anguloI, radianes2= (Math.PI/180) * anguloF, verdadero);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();
}
