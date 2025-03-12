let img;
let pixelSize = 10; // Taille de pixelisation minimale
let maxPixelSize = 30; // Taille maximale
let range = 200; // Rayon d'effet autour du curseur

function preload() {
  img = loadImage('testp5js.png'); // Remplace par ton image
}

function setup() {
  createCanvas(600, 800); // Dimensions du canvas (modifiable)
  img.resize(width, height); // Redimensionne l'image à la taille du canvas
  noSmooth(); // Garde un effet pixelisé net
}

function draw() {
  background(0);
  image(img, 0, 0, width, height); // Affiche l'image redimensionnée

  for (let x = mouseX - range; x < mouseX + range; x += pixelSize) {
    for (let y = mouseY - range; y < mouseY + range; y += pixelSize) {
      if (x >= 0 && x < width && y >= 0 && y < height) {
        let distance = dist(mouseX, mouseY, x, y);

        if (distance < range) {
          let size = map(distance, 0, range, maxPixelSize, pixelSize); // Pixels plus gros au centre
          size = constrain(size, pixelSize, maxPixelSize);
          
          let opacity = map(distance, 0, range, 255, 50); // Plus transparent en périphérie
          
          let c = img.get(int(map(x, 0, width, 0, img.width)), int(map(y, 0, height, 0, img.height))); // Récupère la bonne couleur malgré le redimensionnement
          
          fill(red(c), green(c), blue(c), opacity);
          noStroke();
          rect(x, y, size, size); // Garde un effet pixelisé en utilisant rect()
        }
      }
    }
  }
}
