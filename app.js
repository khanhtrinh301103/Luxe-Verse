function search() {
    var input, filter, products, product, details, name, i;
    input = document.getElementById("search-item");
    filter = input.value.toUpperCase();
    products = document.getElementById("product-list");
    product = products.getElementsByClassName("product");
    if (filter) {
      products.style.display = "block";
      for (i = 0; i < product.length; i++) {
        details = product[i].getElementsByClassName("p-details")[0];
        name = details.getElementsByTagName("h2")[0];
        if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }
    } else {
      products.style.display = "none";
    }
  }
  