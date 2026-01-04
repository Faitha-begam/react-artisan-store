import studio1 from './studio1.jpg';
import studio2 from './studio2.jpg';
import studio3 from './studio3.jpg';
import studio4 from './studio4.jpg';
import studio5 from './studio5.jpg';
import maker9 from './maker9.jpg';
import maker11 from './maker11.jpg';
import maker3 from './maker3.jpg';
import maker4 from './maker4.jpg';
import maker5 from './maker5.jpg'
import maker6 from './maker6.jpg';
import maker7 from './maker7.jpg';
import maker8 from './maker8.jpg';
import fin1 from './fin1.png'
import fin2 from './fin2.png'
import fin3 from './fin3.jpg'
import fin4 from './fin4.png'
import fin5 from './fin5.png'
import fin6 from './fin6.jpg'
import fin7 from './fin7.jpg'
import fin8 from './fin8.png'
import art1 from './art1.jpg'
import art2 from './art2.jpg'
import art3 from './art3.jpg'
import art4 from './art4.jpg'
import art5 from './art5.jpg'
import art6 from './art6.jpg'
import art7 from './art7.jpg'
import art8 from './art8.jpg'

const all_products = 
 [
   // Studio (8) 
  { id: 1, name: "Carved Stone Aroma Diffuser Sculpture", image: studio5, category: "studio", new_price: 25, old_price: 32 },
  { id: 2, name: "Maestro’s Signature Paint Collection", image: studio2, category: "studio", new_price: 30, old_price: 38 },
  { id: 3, name: "Atelier Luxe Handmade Paper Folio", image: studio3, category: "studio", new_price: 45, old_price: 55 },
  { id: 4, name: "Élan Abstract Portrait Art Canvas", image: studio4, category: "studio", new_price: 20, old_price: 26 },
  { id: 5, name: "Carved Stone Aroma Diffuser Sculpture", image: studio5, category: "studio", new_price: 50, old_price: 62 },
  { id: 6, name: "Artist Starter Studio", image: studio2, category: "studio", new_price: 28, old_price: 35 },
  { id: 7, name: "Complete Art Studio Kit", image: studio1, category: "studio", new_price: 55, old_price: 68 },
  { id: 8, name: "Minimal Studio Essentials", image: studio2, category: "studio", new_price: 22, old_price: 28 },

// Maker’s Gear (8)
  { id: 17, name: "Atelier Brush Collection", image: maker3, category: "makers-gear", new_price: 10, old_price: 15 },
  { id: 18, name: "Maestro Palette Knives", image: maker4, category: "makers-gear", new_price: 12, old_price: 18 },
  { id: 19, name: "Heritage Oil Pigment", image: maker5, category: "makers-gear", new_price: 14, old_price: 20 },
  { id: 20, name: "Chromatic Watercolor Set", image: maker6, category: "makers-gear", new_price: 18, old_price: 25 },
  { id: 21, name: "Signature Art Case", image: maker7, category: "makers-gear", new_price: 22, old_price: 30 },
  { id: 22, name: "Velour Soft Pastels", image: maker8, category: "makers-gear", new_price: 20, old_price: 28 },
  { id: 23, name: "Calligrapher’s Dip Pen Set", image: maker9, category: "makers-gear", new_price: 26, old_price: 35 },
  { id: 24, name: "Obsidian Charcoal Sticks", image: maker11, category: "makers-gear", new_price: 16, old_price: 23 },


  // Art Home Essentials (8)
{ id: 33, name: "Sculpted Bookends", image: art1, category: "art-home-essentials", new_price: 18, old_price: 25 },
{ id: 34, name: "Handcrafted Stone Soap Dispenser", image: art2, category: "art-home-essentials", new_price: 22, old_price: 30 },
{ id: 35, name: "Minimal Botanical Cushion Cover", image: art3, category: "art-home-essentials", new_price: 28, old_price: 38 },
{ id: 36, name: "Leaf-Shaped Ceramic Candle Holder", image: art4, category: "art-home-essentials", new_price: 20, old_price: 27 },
{ id: 37, name: "Modern Lunar Landscape Wall Clock", image: art5, category: "art-home-essentials", new_price: 26, old_price: 35 },
{ id: 38, name: "Organic Stone Arch Mirror", image: art6, category: "art-home-essentials", new_price: 55, old_price: 72 },
{ id: 39, name: "Curved Wooden Display Shelf with Floral Accent", image: art7, category: "art-home-essentials", new_price: 32, old_price: 44 },
{ id: 40, name: "Leaf-Inspired Lounge Accent Chair", image: art8, category: "art-home-essentials", new_price: 14, old_price: 20 },

  
// Ready-Made Arts (8)
{ id: 25, name: "Mona Lisa — Timeless Renaissance Portrait", image: fin7, category: "ready-made-arts", new_price: 40, old_price: 55 },
{ id: 26, name: "Starry Night — Post-Impressionist Dream", image: fin6, category: "ready-made-arts", new_price: 42, old_price: 58 },
{ id: 30, name: "The Last Supper — Renaissance Icon", image: fin3, category: "ready-made-arts", new_price: 48, old_price: 65 },
{ id: 28, name: "Girl with a Pearl Earring — Dutch Elegance", image: fin4, category: "ready-made-arts", new_price: 36, old_price: 50 },
{ id: 29, name: "Water Lilies — Impressionist Serenity", image: fin1, category: "ready-made-arts", new_price: 45, old_price: 60 },
{ id: 31, name: "The Creation of Adam — Divine Renaissance", image: fin2, category: "ready-made-arts", new_price: 46, old_price: 62 },
{ id: 27, name: "The Scream — Expressionist Masterpiece", image: fin8, category: "ready-made-arts", new_price: 38, old_price: 52 },
{ id: 32, name: "The Persistence of Memory — Surrealist Legacy", image: fin5, category: "ready-made-arts", new_price: 39, old_price: 54 },

]


export default all_products;
