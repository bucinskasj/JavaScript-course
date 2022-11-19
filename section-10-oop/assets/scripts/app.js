class Product {
 title = 'DEFAULT';
 imageUrl;
 description;
 price;
}

console.log(new Product());


const productList = {
  products: [
    // new Product()
    {
      title:'A Pillow',
      imageUrl: 'https://unitedpillow.com/images/companies/2/pillow-thumb.jpg?1564370699038',
      price: 19.99,
      description: 'A soft pillow!'
    },
    {
      title:'A Carpet on the wall',
      imageUrl: 'https://mf.b37mrtl.ru/rbthmedia/images/web/in-rbth/images/2014-01/big/9.01/2860348_468.jpg',
      price: 89.99,
      description: 'Perfect carpet for your wall'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for(const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to cart</button>
        </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();