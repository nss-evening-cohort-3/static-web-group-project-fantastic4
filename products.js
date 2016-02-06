var productArray = [
  {
    title: "Boho Chic",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$3.99",
    imageURL: "products/boho-chic.jpg"
  },
  {
    title: "Bridal",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$6.99",
    imageURL: "products/bridal.jpg"
  },
  {
    title: "Flowers",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$7.99",
    imageURL: "products/flower.jpg"
  },
  {
    title: "Children's Bow",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$11.99",
    imageURL: "products/kids-bow.jpg"
  },
  {
    title: "Girl's Slipper",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$10.99",
    imageURL: "products/kids-girl.jpg"
  },
  {
    title: "Men's Bling",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$8.99",
    imageURL: "products/mens.jpg"
  },
  {
    title: "Women's Peacock",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$5.99",
    imageURL: "products/peacock.jpg"
  },
  {
    title: "Fancy Turquoise",
    description: "Fashion is made to become unfashionable. A girl should be two things: classy and fabulous. Luxury must be comfortable, otherwise it is not luxury. Fashion is made to become unfashionable. Fashion fades, only style remains the same.",
    price: "$7.99",
    imageURL: "products/turquoise.jpg"
  }
];

document.getElementById("products").innerHTML = "";

for (var i = 0; i < productArray.length; i++) {
  document.getElementById("products").innerHTML += "<div class='items'><h3 class='title'>" + productArray[i].title + "</h3>" + "<img src='" + productArray[i].imageURL +"'>" + "<p class='description'>Description</p><p class='description-text'>" + productArray[i].description + "</p><p class='price'>Your Price</p><p class='price-text'>" + productArray[i].price + "</p><p class='button'>Add to Cart</p>" + "</div>";
}