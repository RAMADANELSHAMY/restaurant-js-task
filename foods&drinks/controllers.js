let addToCate = () => {
  categories.forEach((pro) => {
    let cate = category.find((el) => el.cat == pro.cat);
    !cate && category.push(pro);
  });
};
  
let renderCategory = () => {
  categoriesContent.innerHTML = "";
  category.forEach((el, i) => {
  categoriesContent.innerHTML += `
  <div class="card cardProducts bg-white shadow-sm border-0 text-center rounded-5" 
  onclick="cateFilter(${i}) " >
      <img src="${el.src}" class="card-img-top m-auto mt-3" alt="food">
      <div class="card-body">
        <h5 class="card-title  mt-4">${el.cat}</h5>
      </div>
  </div>
        `;
  });
};

let cateFilter = (i) => {
  let product = category[i];
  activeHeading.innerText = `${product.cat}`;
  activeLink.innerText = " Types";
  categoriesContent.innerHTML = "";
  cateTypes = categories.filter((el) => el.cat == product.cat)
  renderTypes()
};

let renderTypes=()=>{
  categoriesContent.innerHTML = "";
  cateTypes.forEach((el, i) => {
  categoriesContent.innerHTML += `
  <div class="card cardTypes bg-white shadow-sm border-0 text-center rounded-5" 
  onclick="addToCard(${i}) " >
  <img src="${el.src}" class="card-img-top m-auto mt-3" alt="food">
      <div class="card-body">
          <h5>${el.name}</h5>
          <p class=" text-body-tertiary fw-semibold" style="font-size:.9rem">${el.size}</p>
          <p class="text-warning fs-4 m-0">$${el.price}</p>
      </div>
  </div>
    `;
  });
}

let addToCard = (i) => {
  toggleModal();
  let product = { ...cateTypes[i], qty: 1 };
  let x = card.findIndex((el) => el.name == product.name);
  x==-1 ? card.push(product): card[x].qty++;
  renderCard();
};

let renderCard = () => {
  card.forEach((el, i) => {
  cardContent.innerHTML = `
    <img src="${el.src}" alt="food" class="img-card">
    <h5 class="fs-2">${el.name}</h5>
    <p class="text-body-tertiary fw-semibold" style="font-size:.9rem">${el.size}</p>
    <p class="text-warning fs-2 fw-semibold m-0">$${el.price}</p>
    <div class="col-12 d-flex gap-2 d-flex justify-content-center align-items-center my-3 fs-3">
      <button onclick="decrementQty(${i})" class="btn btn-warning">-</button>
      <p class="fw-medium fs-2 text-secondary mt-3">${el.qty}</p>
      <button onclick="incrementQty(${i})" class="btn btn-warning ">+</button>
    </div>
    <span class="bg-warning rounded text-center col-5 p-2 mb-3 fw-medium text-secondary total ">total:$${el.qty*el.price}</span>
    <button class="btn btn-warning col-10 fw-semibold addToOrder" onclick="addToOrder(${i})">Add to Order</button>
  `;
  });
//  getTotal();
};

let incrementQty = (i) => {
  let product = card[i];
  product.qty++;
  renderCard();
};
let decrementQty = (i) => {
  let product = card[i];
  product.qty > 1?product.qty--:card.splice(i, 1);
  renderCard();
};
function addToOrder(i) {
  let product={...card[i] , total:card[i].price * card[i].qty}
  let x = orders.findIndex((el) => el.name == product.name);
  x==-1&&orders.push(product)
  console.log(orders);
  localStorage.setItem("orders",JSON.stringify(orders))  
}
// let getTotal = () => {
// let total = card.reduce((acc, el) => acc + el.price * el.qty, 0);
// span.innerText = total + "$";
// };

let changePath = () => {
  activeHeading.innerText = "Categories";
  activeLink.innerText = " Categories";
  renderCategory();
};

let toggleModal = () => {
  !modalIndex
  ? 
  (modalDiv.classList.replace("opacity-0", "opacity-100"),
  fadeInDiv.classList.replace("animate__fadeOutRightBig", "animate__fadeInRightBig"),
  setTimeout(() => modalDiv.classList.replace("d-none", "d-flex"), 200))
  : (modalDiv.classList.replace("opacity-100", "opacity-0"),
  setTimeout(() => modalDiv.classList.replace("d-flex", "d-none"), 200),
  fadeInDiv.classList.replace("animate__fadeInRightBig", "animate__fadeOutRightBig"));
  modalIndex = !modalIndex;
};
let goLogin=()=>{window.location.href ="../index.html"}
