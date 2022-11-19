class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart(){
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render(){
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src="${this.product.imageUrl}" alt="${this.product.title}">
      <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to cart</button>
      </div>
      </div>
    `;
    const addCardButton = prodEl.querySelector('button');
    addCardButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet on the wall",
      "https://mf.b37mrtl.ru/rbthmedia/images/web/in-rbth/images/2014-01/big/9.01/2860348_468.jpg",
      "Perfect carpet for your wall",
      89.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
