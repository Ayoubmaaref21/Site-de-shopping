async function main() {
  const products = await getdata();
  const mainprod = document.createElement("main");
  mainprod.classList.add("mainprod");

  products.forEach((product, i) => {
    const prod = document.createElement("div");
    const topdiv = document.createElement("div");
    const lastdiv = document.createElement("div");
    const divprice = document.createElement("div");
    const categ = document.createElement("p");
    const img0 = document.createElement("img");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const prodname = document.createElement("p");
    const hr = document.createElement("Hr");
    const prodprice = document.createElement("p");
    const prixetoile = document.createElement("div");

    prod.classList.add("prod");
    topdiv.classList.add("topdiv");
    lastdiv.classList.add("lastdiv");
    divprice.classList.add("divprice");
    categ.classList.add("categ");
    img0.classList.add("img2");
    img1.classList.add("img1");
    prodname.classList.add("prodname");
    prixetoile.classList.add("price");
    img2.classList.add("img3");

    img0.setAttribute(
      "src",
      "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png"
    );
    img1.setAttribute("src", product.image);
    img2.setAttribute(
      "src",
      "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png"
    );

    categ.innerHTML = product.category;
    prodprice.innerHTML = product.price + " $";

    prodname.innerHTML = product.title.split(" ", 3);

    prod.appendChild(topdiv);
    prod.appendChild(img1);
    prod.appendChild(lastdiv);

    topdiv.appendChild(categ);
    topdiv.appendChild(img0);
    lastdiv.appendChild(divprice);
    divprice.appendChild(prodname);

    lastdiv.appendChild(divprice);
    divprice.appendChild(hr);
    lastdiv.appendChild(prixetoile);
    prixetoile.appendChild(prodprice);
    prixetoile.appendChild(img2);

    mainprod.appendChild(prod);
  });

  document.body.appendChild(mainprod);
}

function getdata() {
  const products = fetch("https://fakestoreapi.com/products?limit=16").then(
    (res) => res.json()
  );
  return products;
}
main();
const img = document.createElement("img");
