const allProduct = [
  {
    img: "./images/product-1.png",
    title: "Narsingdi Pure Banana",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 4.0,
  },

  {
    img: "./images/product-5.png",
    title: "Organic Grapes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 8.0,
  },
  {
    img: "./images/product-6.png",
    title: "Natural Almonts",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3.0,
  },
  {
    img: "./images/product-7.png",
    title: "organic apple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 5.0,
  },

  {
    img: "./images/product-10.png",
    title: "headphone l23",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 10.0,
  },
  {
    img: "./images/product-11.png",
    title: "Headphone bag",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6.0,
  },
  {
    img: "./images/product-12.png",
    title: "headphone b99",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 12.0,
  },
  {
    img: "./images/product-13.png",
    title: "headphone A23c",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 10.0,
  },
  {
    img: "./images/jacket-1.png",
    title: "Women Yellow Jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 20.0,
  },
  {
    img: "./images/jacket-2.png",
    title: "Women Jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 18.0,
  },
  {
    img: "./images/product-15.png",
    title: "headphone Extra pin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 4.0,
  },
  {
    img: "./images/jacket-3.png",
    title: "Women red jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 19.0,
  },
  {
    img: "./images/jacket-5.png",
    title: "Men jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 15.0,
  },
  {
    img: "./images/jacket-6.png",
    title: "Men black jacket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 14.0,
  },
  {
    img: "./images/product-8.png",
    title: "Natural butter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6.0,
  },
  {
    img: "./images/product-9.png",
    title: "organic carrot",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3.0,
  },
  {
    img: "./images/category-3.png",
    title: "Fresh meat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 44.0,
  },
  {
    img: "./images/product-2.png",
    title: "Organic Tomato",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 5.0,
  },
  {
    img: "./images/product-3.png",
    title: "Organic Orange",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6.0,
  },
  {
    img: "./images/product-4.png",
    title: "Pure Cow Milk",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 7.0,
  },
];

let productContainer = document.getElementById("product-container");

const products = (img, title, description, price) => {
  let HTML = `
            <figure class="product">

              <img src=${img} alt="product" class="product--img" id="productImg"/>
              <h3 class="product--title heading-tertiary" id="title">${title}</h3>
              <p class="product--description paragraph">${description}</p>

              <div class="product--box mt-1 mb-1">
                  <h3 class="heading-tertiary product--price" id="price">
                  $
                  <span>${price}.00</span>
  
                  </h3>
                  <div class="rating">
                    <i class="fa fa-star product--icon" aria-hidden="true"></i>
                    <i class="fa fa-star product--icon" aria-hidden="true"></i>
                    <i class="fa fa-star product--icon" aria-hidden="true"></i>
                    <i class="fa fa-star product--icon" aria-hidden="true"></i>
                    <i class="fa fa-star-half product--icon" aria-hidden="true"></i>
                  </div>
              </div>

              <div class="product--btn-group">
                  <a href="" class="btn-tertiary" id="wishlist">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    Wishlist
                  </a>
                  <a href="" class="btn-tertiary" id="addToCart">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  Add To Cart
                  </a>
              </div>
            </figure>
`;

  productContainer.insertAdjacentHTML("afterbegin", HTML);
};

const allData = allProduct.map((product) => {
  const { img, title, description, price } = product;
  products(img, title, description, price);
});

// ADD TO CART BUTTON
const addToCart = document.querySelectorAll("#addToCart");
const shoppingEl = document.querySelector("#shoppingEl");
const shoppingCartLists = document.querySelector("#shoppingCartLists");
const shoppingCartLists2 = document.querySelector("#shoppingCartLists");
let Total = document.getElementById("total");
let totalPrice = 0;

let productObj = {};

addToCart.forEach((cart) => {
  cart.addEventListener("click", (event) => {
    event.preventDefault();
    const price =
      event.target.parentElement.previousElementSibling.children[0]
        .firstElementChild.innerText;
    const title =
      event.target.parentElement.parentElement.children[1].firstChild
        .textContent;
    const imgPath = event.target.parentElement.parentElement.children[0].src;
    const mainPath = imgPath.indexOf("images");
    const productImg = imgPath.slice(mainPath);
    totalPrice += Number(price);
    Total.textContent = `$${totalPrice}`;
    productObj = {
      ProductTitle: `${title}`,
      ProductPrice: `${price}`,
      ProductImage: `${productImg}`,
    };

    const { ProductTitle, ProductPrice, ProductImage: ProImage } = productObj;
    ShoppingCart(ProductTitle, ProductPrice, ProImage);
  });
});

//ADD TO WISHLIST BUTTON

const wishlist = document.querySelectorAll("#wishlist");
const wishlistEl = document.querySelector("#wishlistEl");

wishlist.forEach((wishBtn) => {
  wishBtn.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

//Shopping Cart

const ShopCartList = document.querySelector("#shoppingCart");
const ShopList = document.querySelector(".shoppingCartList");

ShopCartList.addEventListener("click", (e) => {
  e.preventDefault();
  ShopList.classList.toggle("showCart");
});

const ShoppingCart = (ProductTitle, ProductPrice, ProImage) => {
  const figureHtml = `
  <figure class="shoppingCartList__shoppingCartElement">
          <img src='${ProImage}' alt="product" class="shoppingCartList__img"/>

          <div class="shoppingCartList__text-box">
            <h4 class="heading-tertiary">${ProductTitle}</h4>
            <h4 class="heading-tertiary">$${ProductPrice}</h4>
            <div class="shoppingCartList__text-box2">
              <div class="shoppingCartList__itemCount">
                <button class="shoppingCartList__DecrementBtn" id="decrementBtn">-</button>
                <span class="shoppingCartList__item" id="items">0</span>
                <button class="shoppingCartList__incrementBtn" id="incrementBtn">+</button>
              </div>
              <a href="#" class="shoppingCartList__delete">
                <i class="fas fa-trash-alt"></i>
              </a>
            </div>
          </div>
        </figure>`;

  shoppingCartLists.insertAdjacentHTML("afterbegin", figureHtml);

  shoppingEl.textContent = shoppingCartLists.childElementCount;
};

//Clear Shopping Cart

const clearBtn = document.querySelector(".btn-clear");

clearBtn.addEventListener("click", (e) => {
  shoppingCartLists.innerHTML = " ";
  totalPrice = 0;
  shoppingEl.textContent = 0;
  Total.textContent = " ";
});

// Section Animation

const allSection = document.querySelectorAll("#section");

const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Sticky Header

const featureArea = document.querySelector(".feature-area");
const header = document.querySelector(".header");

const intCo = featureArea.getBoundingClientRect();

window.addEventListener("scroll", () => {
  if (window.scrollY > intCo.top) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
