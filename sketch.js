function preload() {
  tabla = loadTable('../inf.csv', 'csv')
}

function setup() {
  createCanvas(1100, 1100);
  sel = createSelect();
  sel.position(10, 10);
  sel.option('fernan');
  sel.option('bloku');
  sel.option('plokun');
  sel.option('ayleen');
  sel.selected('fernan');
  sel.changed(mySelectEvent);

  t = ""
  fernan = tabla.getColumn(1)
  bloku = tabla.getColumn(2)
  plokun = tabla.getColumn(3)
  ayleen = tabla.getColumn(4)


  textAlign(CENTER);
  textSize(50);


}

function draw() {
  background(220);

  switch (t) {
    case "fernan":
      x = 100
      y = 100
      r = 100
      circle(x, y, r)
      text(t, x, y + 80)
      color(255)

      circle(x + comparar(fernan, bloku), y + 100, r)
      text("bloku", x + comparar(fernan, bloku), y + 180)
      circle(x + comparar(fernan, plokun), y + 300, r)
      text("plokun", x + comparar(fernan, plokun), y + 380)
      circle(x + comparar(fernan, ayleen), y + 500, r)
      text("ayleen", x + comparar(fernan, ayleen), y + 580)
      color(0)

      break;
    case "bloku":
      x = 100
      y = 100
      r = 100
      circle(x, y, r)
      text(t, x, y + 80)
      color(255)

      circle(x +comparar(bloku, fernan), y + 100, r)
      text("fernan", x +comparar(bloku, fernan), y + 180)
      circle(x +  comparar(bloku, plokun), y + 300, r)
      text("plokun", x + comparar(bloku, plokun), y + 380)
      circle(x +  comparar(bloku, ayleen) , y + 500, r)
      text("ayleen", x +  comparar(bloku, ayleen), y + 580)
      
     
    
      break;
    case "plokun":
      x = 100
      y = 100
      r = 100
      circle(x, y, r)
      text(t, x, y + 80)
      color(255)

      circle(x + comparar(plokun, fernan), y + 100, r)
      text("fernan", x +comparar(plokun, fernan), y + 180)
      circle(x +    comparar(plokun, bloku), y + 300, r)
      text("bloku", x +   comparar(plokun, bloku), y + 380)
      circle(x +    comparar(plokun, ayleen), y + 500, r)
      text("ayleen", x +   comparar(plokun, ayleen),y + 580)
      
   
   
      break;
    case "ayleen":
      x = 100
      y = 100
      r = 100
      circle(x, y, r)
      text(t, x, y + 80)
      color(255)

      circle(x + comparar(ayleen, fernan), y + 100, r)
      text("fernan", x +comparar(ayleen, fernan), y + 180)
      circle(x +comparar(ayleen, bloku) , y + 300, r)
      text("bloku", x +comparar(ayleen, bloku), y + 380)
      circle(x + comparar(ayleen, plokun), y + 500, r)
      text("plokun", x +comparar(ayleen, plokun), y + 580)
      
      
      
      break;

    default:
      break;
  }

}

function comparar(z, y) {

  ab = int((z[1] * y[1]) + (z[2] * y[2]) + (z[3] * y[3]) + (z[4] * y[4]))
  af = int(sqrt((z[1] ** 2) + (z[2] ** 2) + (z[3] ** 2) + (z[4] ** 2)))
  bf = int(sqrt((y[1] ** 2) + (y[2] ** 2) + (y[3] ** 2) + (y[4] ** 2)))

  zi = (ab / (af * bf)) * 500

  return zi

}

function mostrar(t) {




}

function mySelectEvent() {
  let item = sel.value();
  t = item

}