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

class ElementAttritube {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render();
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const roolElement = document.createElement(tag);
    if (cssClasses) {
      roolElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        roolElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(roolElement);
    return roolElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
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
    const addCardButton = prodEl.querySelector("button");
    addCardButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
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
    ),
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttritube("id", "prod-list"),
    ]);
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }
}

class Shop extends Component{
  constructor(){
    super();
  }

  render() {
    this.cart = new ShoppingCart("app");
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();