function getAllProduct() {
  const products = [];

  const productNamesSelector = getSelector("[data-testid='spnSRPProdName']");

  const productPricesSelector = getSelector("[data-testid='spnSRPProdPrice']");

  const productImageSelector = getSelector("[data-testid='imgSRPProdMain']");

  const productStarSelector = getSelector(".css-1ffszw6");

  const productNames = getValue(productNamesSelector);

  const productPrices = getValue(productPricesSelector);

  const productImages = Array.from(productImageSelector).map(
    (element) => element.lastChild.currentSrc
  );

  const productStars = getValue(productStarSelector);

  for (let i = 0; i < productNames.length; i++) {
    let listLaptop = {
      name: productNames[i],
      price: productPrices[i],
      image: productImages[i],
      rating: productStars[i],
    };
    products.push(listLaptop);
  }

  return products;
}

const products = console.log(getAllProduct());

function getSelector(selector) {
  return document.querySelectorAll(selector);
}

function getValue(selector) {
  return Array.from(selector).map((element) => element.innerHTML);
}
