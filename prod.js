async function main() {
  const products = await getdata();
  const mainprod = document.getElementById("mainid");
  const prod = document.createElement("div");
  const prodp1 = document.createElement("div");
  const prodp2 = document.createElement("div");
  const img0 = document.createElement("img");
  const prodname = document.createElement("p");
  const img1 = document.createElement("img");
  const prodprice = document.createElement("p");
  const proddesc = document.createElement("p");
  const prodnum = document.createElement("div");
  const quantite = document.createElement("p");
  const input1 = document.createElement("input");
  const confirm = document.createElement("button");

  prod.classList.add("prod");
  prodp1.classList.add("prodp1");
  prodp2.classList.add("prodp2");
  prodnum.classList.add("prodnum");
  img1.classList.add("img1");
  prodprice.classList.add("prodprice");
  img0.setAttribute("src", products.image);
  prodname.classList.add("prodname");
  quantite.classList.add("quantite");
  input1.classList.add("input1");

  confirm.classList.add("confirm");

  prodname.innerHTML = products.title.split(" ", 3);
  prodprice.innerHTML = products.price + "$";
  proddesc.innerHTML = products.description;
  confirm.innerHTML = "Confirm";
  quantite.innerHTML = "Quantity";
  input1.setAttribute("type", "number");
  input1.setAttribute("min", 1);
  input1.setAttribute("max", 10);
  input1.setAttribute("value", 0);

  img1.setAttribute(
    "src",
    "https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png"
  );

  prod.appendChild(prodp1);
  prod.appendChild(prodp2);
  prodp1.appendChild(img0);
  prodp2.appendChild(prodname);
  prodp2.appendChild(img1);
  prodp2.appendChild(prodprice);
  prodp2.appendChild(proddesc);
  prodp2.appendChild(prodnum);
  prodnum.appendChild(quantite);
  prodnum.appendChild(input1);
  prodnum.appendChild(confirm);

  mainprod.appendChild(prod);
}
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
async function getdata() {
  const products = fetch("https://fakestoreapi.com/products/" + id).then(
    (res) => res.json()
  );
  return products;
}

main();
