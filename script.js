let products = [
  {
    name: "Wooden Chair",
    price: "10,000",
    headline: "Traditional old Wooden Chair!",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blue Couch!",
    price: "15,000",
    headline: "Cool hipster green couch!",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Room Light",
    price: "8,000",
    headline: "cool room light for youre rooms!",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leather armchair",
    price: "10,000",
    headline: "The beautiful and designing leather armchair",
    img: "https://images.unsplash.com/photo-1601392740426-907c7b028119?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wooden stool",
    price: "19,000",
    headline: "Traditional old stool!",
    img: "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ShowProducts = () => {
  let container = document.getElementById("con");
  let closur = "";
  products.map(
    (val, index) =>
      (closur += `<div class="product w-fit rounded-xl p-2 bg-white">
       <div class="image w-full h-[13rem] bg-zinc-200 rounded-xl overflow-hidden flex justify-center items-center">
       <img src="${val.img}" alt="">
       </div>
       <div class="data w-full px-2 py-5">
         <h1 class="font-semibold text-xl leading-none tracking-tight">
           ${val.name}
         </h1>
         <div class="flex justify-between w-full items-center mt-2">
           <div class="w-1/2">
             <h3 class="font-semibold opacity-20 word-wrap">${val.headline}</h3>
             <h4 class="font-semibold mt-2"> $ ${val.price}</h4>
           </div>
           <button data-index="${index}"  class="add w-10 h-10 rounded-full shader text-yellow-400">
             <i data-index="${index}" class="add ri-add-line"></i>
           </button>
         </div>
       </div>
     </div>`)
  );
  container.innerHTML = closur;
};
ShowProducts();

let populars = [
  {
    name: "Wooden Chair",
    price: "10,000",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blue Couch!",
    price: "15,000",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Room Light",
    price: "8,000",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const ShowPopulars = () => {
  let container = "";
  populars.map(
    (val) =>
      (container += ` <div
class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
>
<div
  class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
>
  <img
    class="w-full h-full object-cover"
    src="${val.img}"
    alt=""
  />
</div>
<div class="data py-2 w-full">
  <h1 class="leading-none font-semibold">Eyes Lounge</h1>
  <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
   ${val.name}
  </h4>
  <h4 class="mt-3 font-semibold text-zinc-500">$${val.price}</h4>
</div>
</div>`)
  );
  document.getElementById("populars").innerHTML = container;
};
ShowPopulars();

let cart = [];

const AddtoCart = () => {
  var con = document.getElementById("con");
  con.addEventListener("click", function (dets) {
    if (dets.target.classList.contains("add")) {
      cart.push(products[dets.target.dataset.index]);
    }
  });
};
AddtoCart();

const ShowCart = () => {
  let cartIcon = document.getElementById("cart");
  let cartContainer = document.getElementById("cartCon");
  let cross = document.getElementById("cross");

   cross.addEventListener("click", function () {
    cartContainer.style.display = "none";
    cartContainer.innerHTML = "";
    cross.style.display = "none";
    cartIcon.display = "block";
  }),

  cartIcon.addEventListener("click", function () {
    cartContainer.style.display = "block";
    cartContainer.innerHTML = "";
    cross.style.display = "block";
    cartIcon.display = "none";
    cart.forEach((val) => {
      let item = document.createElement("div");
      item.classList.add("flex", "gap-2", "bg-white", "p-2", "rounded-lg");
      item.innerHTML = `
        <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
          <img class="w-full h-full object-cover" src="${val.img}" />
        </div>
        <div>
          <h3 class="font-semibold">${val.name}</h3>
          <h5 class="text-sm font-semibold opacity-80">${val.price}</h5>
        </div>
      `;
      cartContainer.appendChild(item);
    });
  });
};

ShowCart();
console.log(cart);
