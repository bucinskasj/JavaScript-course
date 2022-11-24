const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transation("products", "readonly")
      .objStore("products");
    productsStore.add({
      id: "p1",
      title: "A first product",
      price: 13.99,
      tags: ["Espesive", "Luxury"]
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("ERROR!");
};

storeBtn.addEventListener("click", () => {});

retrBtn.addEventListener("click", () => {});
