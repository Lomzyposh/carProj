document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".navbar-toggler");
  const navCollapse = document.querySelector("#navbarNav");

  // Event listener for toggling the navbar
  toggler.addEventListener("click", () => {
      toggler.classList.toggle("toggled");
  });

  navCollapse.addEventListener("hidden.bs.collapse", () => {
      toggler.classList.remove("toggled");
  });

  navCollapse.addEventListener("shown.bs.collapse", () => {
      toggler.classList.add("toggled");
  });
});


document.querySelector(".searchGo")?.addEventListener("click", (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("searchField")?.value.trim();

  if (searchInput) {
    window.location.href = `allCars.html?searchInput=${encodeURIComponent(
      searchInput
    )}`;
  } else {
    alert("Please enter a search term.");
  }
});

function sendMake(make) {
  const searchInput = make.getAttribute("data-brand");
  window.location.href = `allCars.html?searchInput=${encodeURIComponent(
    searchInput
  )}`;
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartCount = document.querySelectorAll(".cartCount");
  cartCount.forEach((cartcunt) => {
    cartcunt.textContent = cartItems.length;
  });
}

// Initialize the cart count on page load
updateCartCount();
const cartContainer = document.getElementById("cartContainer");

document.querySelector(".cartBut").addEventListener("click", () => {
  displayCartItems();
});

displayCartItems();
function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartCarIds = JSON.parse(localStorage.getItem("cartCarIds")) || [];

  const carToRemoveId = cartItems[index].id;

  cartItems.splice(index, 1); // Remove item at the given index

  const idIndex = cartCarIds.indexOf(carToRemoveId);
  if (idIndex !== -1) {
    cartCarIds.splice(idIndex, 1); // Remove the car ID
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage
  localStorage.setItem("cartCarIds", JSON.stringify(cartCarIds));

  displayCartItems(); // Refresh the cart display
  updateCartCount(); // Update the cart count in the header
}
function clearCart() {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartCarIds");

  cartContainer.innerHTML = `<div style="background-repeat: no-repeat; height: 300px; object-fit: contain; margin-top: 90px; margin-left: 40px;  filter: grayscale(80%) brightness(60%);" class="emptyCartMessage">  <p>😢Cart Empty ...Try adding a Car</p> <img src="/assets/images/skelen.gif" alt="Page not available;" style="border-radius: 40px;"></div>`;

  const cartCount = document.querySelectorAll(".cartCount");
  cartCount.forEach((cartcunt) => {
    cartcunt.textContent = "0";
  });
}

const authButton = document.getElementById("authButton");

// Update the button based on user authentication status
function updateAuthButton() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    authButton.innerHTML = `<a data-bs-toggle="modal" data-bs-target="#logoutModal"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>`;
  } else {
    authButton.innerHTML = `<a data-bs-target="#signMod" data-bs-toggle="modal"><i class="fa-regular fa-user"></i> Login / SignUp</a>`;
  }
}

// Handle login logic
function handleLogin() {
  const email = document.querySelector(".logEmail");
  const password = document.querySelector(".logPass");
  let valid = true;
  if (!emailPattern.test(email.value)) {
    email.classList.add('is-invalid');
    valid = false;
  }else{
    email.classList.remove('is-invalid');
  }
   if(password.value.length < 8){
    password.classList.add('is-invalid');
    valid = false;
  }else{
    password.classList.remove('is-invalid');
  }

  if (valid) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    updateAuthButton();
    alert("Successfully Logged In");

    const loginModal = document.getElementById("log2");
    const bootstrapModal = bootstrap.Modal.getInstance(loginModal);
    bootstrapModal.hide();

  } 
}

function handleSignUp() {
  const email = document.querySelector(".signEmail");

  const password = document.querySelector(".signPass");
  const confirmPassword = document.querySelector(".signConfPass");
  const agreeSign = document.getElementById('agreeSign');
  let valid = true;

  if (!emailPattern.test(email.value)) {
    email.classList.add("is-invalid");
    valid = false;
  }else {
    email.classList.remove('is-invalid');
  }
  if(password.value.length < 8){
    password.classList.add('is-invalid');
    valid = false;
  }else{
    password.classList.remove('is-invalid');
  }
 if(password.value === confirmPassword.value){
  confirmPassword.classList.remove('is-invalid');
   }
 else{
  confirmPassword.classList.add('is-invalid');
  valid = false;
 }
 if(agreeSign.checked){
  agreeSign.classList.remove('is-invalid')
 }else{
  agreeSign.classList.add('is-invalid')
  valid = false;
 }

  if (valid){
    alert("Account successfully created! Please log in.");

    const signModal = document.getElementById("signMod");
    const signbootstrapModal = bootstrap.Modal.getInstance(signModal);
    signbootstrapModal.hide();

    const loginModal = document.getElementById("log2");
    const bootstrapModal = new bootstrap.Modal(loginModal);
    bootstrapModal.show();

    localStorage.setItem("userEmail", email);
  }
}

function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  updateAuthButton();
}

// Add event listeners for login, signup, and logout
document.addEventListener("click", (event) => {
  if (event.target.id === "logBut") {
    handleLogin();
  } else if (event.target.id === "signBut") {
    handleSignUp();
  } else if (event.target.id === "logoutLink") {
    handleLogout();
  }
});

// Initialize the button on page load
updateAuthButton();

// Initialize Auth State on Page Load
document.addEventListener("DOMContentLoaded", updateAuthButton);

const checkFootEmail = document.getElementById("checkFootEmail");
const footEmailInput = document.getElementById("footEmailInput");

checkFootEmail.addEventListener("click", verifyFootMessage);
function verifyFootMessage() {
  if (footEmailInput.value === "" || !emailPattern.test(footEmailInput.value)) {
    footEmailInput.classList.add('is-invalid');
  } else {
    footEmailInput.classList.remove('is-invalid')
    setTimeout(() => {
      alert(
        "Your subscription has been successfully submitted! Our team will get back to you shortly. Thank you for your interest!"
      );
    }, 1000);
  }
}

const locations = [
  "London, United Kingdom",
  "Manchester, United Kingdom",
  "Birmingham, United Kingdom",
  "Liverpool, United Kingdom",
  "Leeds, United Kingdom",
  "Bristol, United Kingdom",
  "Edinburgh, United Kingdom",
  "Glasgow, United Kingdom",
  "Newcastle, United Kingdom",
  "Sheffield, United Kingdom",
  "Nottingham, United Kingdom",
  "Leicester, United Kingdom",
  "Coventry, United Kingdom",
  "Southampton, United Kingdom",
  "Cardiff, United Kingdom",
  "Belfast, United Kingdom",
  "Portsmouth, United Kingdom",
  "Aberdeen, United Kingdom",
  "Dundee, United Kingdom",
  "York, United Kingdom",
];
function checkLocation(carId) {
  const storedData = JSON.parse(localStorage.getItem("carLocations")) || {};

  if (storedData[carId]) {
    return storedData[carId];
  }

  const randLocationIndex = Math.floor(Math.random() * locations.length);
  const selectedLocation = locations[randLocationIndex];
  storedData[carId] = selectedLocation;
  localStorage.setItem("carLocations", JSON.stringify(storedData));

  return selectedLocation;
}

const cars = [
  {
    brand: "Aston Martin",
    model: "DBS Volante",
    year: 2023,
    bodyStyle: "Cabriolet",
    engine: "5.2-liter twin-turbo V12",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£412,433",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/57799967-8e60-4d4a-82e1-829e15a7e7a3/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/ed16bed2-a6fd-447c-b28b-6ea59851f803/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/869a6fed-976a-446e-8f7f-edc0afd6e195/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/d977b343-1885-4d47-b2d3-a9f26f5d8993/je/1100xxs.jpg",
  },
  {
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2024,
    bodyStyle: "Suv",
    engine: "6.75L / V12 Cylinder",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "White",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/20/08/28/54/c545a4b3-681b-4e47-9e63-db7540564753/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/20/08/28/54/08de1db5-0479-46cf-8cd8-820d72436011/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/20/08/28/58/ac03ea78-7761-45b3-bbd9-e82917fbb37d/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/20/08/28/54/83fb0695-fcec-48f5-b5c7-bb6a487939b8/je/2200xxs.jpg",
  },
  {
    brand: "Ferrari",
    model: "458 Spider",
    year: 2014,
    bodyStyle: "Cabriolet",
    engine: "4.5-liter V8",
    fuelType: "Gasoline",
    extColor: "Red",
    intColor: "Black",
    price: "£224,078",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/587fdd4a-dcff-4b6f-b258-d35f36fc81b1/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/3bfa4fcd-5992-426e-89a6-110a6e4dff14/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/3bfa4fcd-5992-426e-89a6-110a6e4dff14/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/077264be-aa21-4475-95f9-b3006113db7a/je/2200xxs.jpg",
  },
  {
    brand: "Hennessey",
    model: "Venom F5",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "6.6-liter twin-turbo V8",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Blue",
    price: "Price On Request",
    condition: "Used",
    mainImg: "https://img.jamesedition.com/listing_images/2024/08/21/14/26/47/7d55b810-7dc7-453f-b693-bf6dfccc3321/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/08/21/14/26/50/88c399f4-d111-4d72-8081-9816976e8f8a/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/08/21/14/26/47/c3db4590-3123-426d-b81f-f22d52584e1f/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/08/21/14/26/47/91351ad2-54a1-4222-a76c-8f41f8d5d0f2/je/2200xxs.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "AMG® GT 53",
    year: 2022,
    bodyStyle: "Sedan",
    engine: "3.0 L M256 turbo inline-six",
    fuelType: "Gasoline",
    extColor: "Blue",
    intColor: "Black",
    price: "£76,856",
    condition: "Used",
    mainImg: "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/45b785a0-c629-46e0-a2b4-244fd41b681f/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/ed06616f-a355-4ba6-bb2b-3cd00931f104/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/6c031141-b517-4101-bb93-0f45cc4b70c4/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/11/29/09/40/03/c3c77014-9882-44b6-9c05-fa9c50c27d1f/je/1100xxs.jpg",
  },
  {
    brand: "Porsche",
    model: "718 Cayman GT4",
    year: 2021,
    bodyStyle: "Coupe",
    engine: "4.0-liter, six-cylinder",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Black",
    price: "£86,342",
    condition: "Used",
    mainImg: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/45e8835f-c129-4707-b55e-42d040408b74/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/fd30291b-0089-42e6-b1f2-6c2c7737f00c/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/5ed83bea-722d-4b14-bca7-7515bdd55bab/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/35/c6e89632-f3c9-46ec-94d5-46076634c0b1/je/2200xxs.jpg",
  },{
    brand: "Ferrari",
    model: "Purosangue",
    year: 2024,
    bodyStyle: "Suv",
    engine: "6.5-liter, V12",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "£659,900",
    condition: "New",
    mainImg: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/6bca5dd4-8759-44d8-8429-421f4d0e6b68/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/6c5c514f-dcff-4886-8a7e-053399054a60/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/49f31525-9f03-42fe-8968-d7d54aaada9a/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/3f66f217-cf82-46c7-8a5e-a8929075fd61/je/1100xxs.jpg",
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 1968,
    bodyStyle: "Coupe",
    engine: "327-cubic inch V8",
    fuelType: "Gasoline",
    extColor: "Green",
    intColor: "Black",
    price: "£134,216",
    condition: "Used",
    mainImg: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/33/5b3ab7ab-d394-4530-b195-0d9438d9309c/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/33/362700ec-c26c-44e2-b698-100c2e4a8ed6/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/33/6278471b-ac9a-47b9-b44c-a31fc7b5565e/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/33/cf426740-7cb8-4de2-86e1-7950761f49a4/je/2200xxs.jpg",
  },
  {
    brand: "Brabus",
    model: "G-Class 6x6",
    year: 2024,
    bodyStyle: "Suv",
    engine: "4.5-liter BRABUS Rocket 900 V8",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "£1,680,000",
    condition: "New",
    mainImg: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/376a0353-b9f0-42f2-bab7-e3bd85733827/je/2200xxs.jpg",
    image1: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/e7469e2c-18e5-468b-9c6c-9e0b2af86148/je/2200xxs.jpg",
    image2: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/9181bb9e-ba23-43d1-ace6-aec30b75fa8b/je/2200xxs.jpg",
    image3: "https://img.jamesedition.com/listing_images/2024/11/28/10/02/27/1967fa01-9b08-40da-8e91-2186f034f1ee/je/2200xxs.jpg",
  }
];


const carList = document.getElementById("carList");

function displayCars() {
  carList.innerHTML = "";
  // const startIndex = (page - 1) * carsPerPage;
  // const endIndex = startIndex + carsPerPage;
  // const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  carList.innerHTML = "";
  // if (carsToDisplay.length === 0) {
  //   // Show message if no cars found on this page
  //   carList.innerHTML = `
  //   <div class="error404">
  //     <div><ul><li><a href="#">Go Back to Home</a></li><li><a href="/allCars.html">🔄 Refresh the page</a></li></div>
  //   <p class="no-cars-message"><i class="fa-solid fa-face-sad-tear"></i> Nothing to see here—just a whole lot of empty space!! 🤷‍♂️</p>
  //     <img src="/assets/images/electrocuted-caveman-animation-404-error-page.gif" class="gif404" alt="">
  //     </div>`;
  //   return;
  // }

  cars.forEach((car, index) => {
    const location = checkLocation(index);
    car.id = index + 1;
    const carItem = document.createElement("div");
    carItem.classList.add("swiper-slide", "car-item");
    carItem.innerHTML = `
         <img src="${car.mainImg}" alt="${car.brand} ${car.model}">
       <h4 class="price">${car.price}</h4>
        <h5>${car.year} ${car.brand}  ${car.model}</h3>
        
        
        <p class="bDS">${location}</p>
        `;

    console.log(parseInt(car.price.replace(/[, £]/g, ""), 10) || 0);
    setTimeout(() => {
      carItem.classList.add("show"); // Trigger the animation
    }, index * 100);
    carList.appendChild(carItem);

    // Add click event to show car details<modal>
    carItem.addEventListener("click", () => {
      console.log("Car object:", car);

      const brandName = document.querySelectorAll(".modalTitle");
      brandName.forEach((ele) => {
        ele.textContent = `${car.brand} ${car.model}`;
      });
      document.getElementById("modalLocation").textContent = location;
      document.getElementById("year").textContent = car.year;
      document.getElementById("modalImage").src = car.mainImg;
      document.getElementById("modalImage").alt = car.model;
      document.getElementById("image1").src = car.image1;
      document.getElementById("image1").alt = `${car.brand} ${car.model}`;
      document.getElementById("image2").src = car.image2;
      document.getElementById("image2").alt = `${car.brand} ${car.model}`;
      document.getElementById("image3").src = car.image3;
      document.getElementById("image3").alt = `${car.brand} ${car.model}`;
      document.getElementById("modalPrice").innerHTML = `${car.price}`;
      document.getElementById("modalYear").textContent = car.year;
      document.getElementById("modalBrand").textContent = car.brand;
      document.getElementById("modalModel").textContent = car.model;
      document.getElementById("modalBodyStyle").textContent = car.bodyStyle;
      document.getElementById("modalEngine").textContent = car.engine;
      document.getElementById("modalfuelType").textContent = car.fuelType;
      document.getElementById("modalexColor").textContent = car.extColor;
      document.getElementById("modalintColor").textContent = car.intColor;
      document.getElementById(
        "askMessage"
      ).value = `I'd like to know if the ${car.condition} ${car.year} ${car.brand} you have listed on PoshAuto is still available. ☺️`;
      const modal = new bootstrap.Modal(
        document.getElementById("staticBackdrop")
      );
      modal.show();
   
      addToCartButton.dataset.index = index;
    });
  });
}

displayCars()

document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const fImg = document.getElementById("modalImage");

    // Swap the src attributes
    const tempSrc = fImg.src;
    fImg.src = thumbnail.src;
    thumbnail.src = tempSrc;
  });
});
const askForm = document.getElementById("askForm");
const askEmail = document.getElementById("askEmail");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
document.getElementById("askEmailError").style.display = "none";

askForm.addEventListener("click", verifyMessage);
function verifyMessage() {
  if (askEmail.value === "" || !emailPattern.test(askEmail.value)) {
    document.getElementById("askEmailError").style.display = "block";
  } else {
    document.getElementById("askEmailError").style.display = "none";
    setTimeout(() => {
      alert(
        "Your question has been successfully submitted! Our team will get back to you shortly. Thank you for your interest!"
      );
    }, 500);
  }
}





addToCartButton.addEventListener("click", () => {
  const selectedIndex = parseInt(addToCartButton.dataset.index, 10);

  const selectedCar = cars[selectedIndex];

  // Retrieve existing cart items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartCarIds = JSON.parse(localStorage.getItem("cartCarIds")) || [];

  const isCarInCart = cartCarIds.includes(selectedCar.id);

  if (isCarInCart) {
    alert(`${selectedCar.brand} ${selectedCar.model} is already in the cart!`);
  } else {
    // Add the selected car to the cart array
    cartItems.push(selectedCar);
    cartCarIds.push(selectedCar.id);

    // Save the updated cart array to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCarIds", JSON.stringify(cartCarIds));

    updateCartCount();

    displayCartItems();
    alert(`${selectedCar.brand} ${selectedCar.model} added to the cart!`);
  }
});

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartCount = document.querySelectorAll(".cartCount");
  cartCount.forEach((cartcunt) => {
    cartcunt.textContent = cartItems.length;
  });
}

// Initialize the cart count on page load
updateCartCount();

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartContainer.innerHTML = `<div class="foot"><button class="clCart" onclick="clearCart()">Clear Cart</button><button class="proceed" data-bs-target="#proceedCheckout" data-bs-toggle="modal" onclick="proceed()">Proceed to Checkout <i class="fa-solid fa-arrow-right"></i></button></div>`;
  // cartContainer.classList.add("cartSlide");

  if (cartItems.length === 0) {
    const emptyMesage = document.createElement("div");
    emptyMesage.innerHTML =
      '<div style="background-repeat: no-repeat; height: 300px; object-fit: contain; margin-top: 90px; margin-left: 40px;  filter: grayscale(80%) brightness(60%);" class="emptyCartMessage">  <p>😢Cart Empty ...Try browsing <a href="/allCars.html">more cars</a></p> <img src="/assets/images/skelen.gif" alt="Page not available;" style="border-radius: 40px;"></div>';
    cartContainer.appendChild(emptyMesage);
    document.querySelector(".cartContainer .foot").style.display = "none";
    return;
  }
  cartItems.forEach((item, index) => {
    const loca  = checkLocation(item.id - 1);
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.style.cursor = 'pointer';
    cartItem.innerHTML = `
            
            <img src="${item.mainImg}" alt="${item.model}" class="showModAgain">
            <h5 class="showModAgain">${item.brand} ${item.model}</h5>
            <p id='lki'>Price: <span>${item.price}</span></p>
            <button onclick="removeCartItem(${index})" class="remove"><i class="fa-solid fa-trash"></i> Remove</button>  <a href="/testDrive.html"><button class="test">Book a Test Drive</button></a>

            
            
        
            `;
            
    document.querySelector(".cartContainer .foot").style.display = "block";
    cartContainer.prepend(cartItem);
    
    const showAgain = document.querySelectorAll('.showModAgain');

    showAgain.forEach( kl =>{
      kl.addEventListener('click', ()=>{
      document.getElementById("modalLocation").textContent = loca;
      document.getElementById("year").textContent = item.year;
      document.getElementById("modalImage").src = item.mainImg;
      document.getElementById("modalImage").alt = item.model;
      document.getElementById("image1").src = item.image1;
      document.getElementById("image1").alt = `${item.brand} ${item.model}`;
      document.getElementById("image2").src = item.image2;
      document.getElementById("image2").alt = `${item.brand} ${item.model}`;
      document.getElementById("image3").src = item.image3;
      document.getElementById("image3").alt = `${item.brand} ${item.model}`;
      document.getElementById("modalPrice").innerHTML = `${item.price}`;
      document.getElementById("modalYear").textContent = item.year;
      document.getElementById("modalBrand").textContent = item.brand;
      document.getElementById("modalModel").textContent = item.model;
      document.getElementById("modalBodyStyle").textContent = item.bodyStyle;
      document.getElementById("modalEngine").textContent = item.engine;
      document.getElementById("modalfuelType").textContent = item.fuelType;
      document.getElementById("modalexColor").textContent = item.extColor;
      document.getElementById("modalintColor").textContent = item.intColor;
      document.getElementById(
        "askMessage"
      ).value = `I'd like to know if the ${item.condition} ${item.year} ${item.brand} you have listed on PoshAuto is still available. ☺️`;

      const modal = new bootstrap.Modal(
        document.getElementById("staticBackdrop")
      );
      modal.show();

    });
  })

    
  });
}



document.querySelector(".cartBut").addEventListener("click", () => {
  displayCartItems();
});



displayCartItems();
function removeCartItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartCarIds = JSON.parse(localStorage.getItem("cartCarIds")) || [];

  const carToRemoveId = cartItems[index].id;

  cartItems.splice(index, 1); // Remove item at the given index

  const idIndex = cartCarIds.indexOf(carToRemoveId);
  if (idIndex !== -1) {
    cartCarIds.splice(idIndex, 1); // Remove the car ID
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage
  localStorage.setItem("cartCarIds", JSON.stringify(cartCarIds));

  displayCartItems(); // Refresh the cart display
  proceed();
  updateCartCount(); // Update the cart count in the header
}
function clearCart() {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartCarIds");

  cartContainer.innerHTML = `<div style="background-repeat: no-repeat; height: 300px; object-fit: contain; margin-top: 90px; margin-left: 40px;  filter: grayscale(80%) brightness(60%);" class="emptyCartMessage">  <p>😢Cart Empty ...Try adding a Car</p> <img src="/assets/images/skelen.gif" alt="Page not available;" style="border-radius: 40px;"></div>`;

  const cartCount = document.querySelectorAll(".cartCount");
  cartCount.forEach((cartcunt) => {
    cartcunt.textContent = "0";
  });
}



const countryStates = {
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick", "Newfoundland", "Prince Edward Island"],
  USA: ["California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "Michigan", "North Carolina"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland", "London", "Manchester", "Liverpool", "Birmingham", "Leeds", "Glasgow"],
  Nigeria: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Kaduna", "Benin City", "Maiduguri", "Zaria", "Jos"],
  India: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Ahmedabad", "Chandigarh"]
};

// const countrySelect = document.getElementById('shippingCountry');
// const stateSelect = document.getElementById('shippingState');

// countrySelect.addEventListener('change', () => {
//   const selectedCountry = countrySelect.value;
  
//   stateSelect.innerHTML = '<option value="">--Choose a State/Region--</option>';

//   if (countryStates[selectedCountry]) {
//     countryStates[selectedCountry].forEach(state => {
//       const option = document.createElement('option');
//       option.value = state;
//       option.textContent = state;
//       stateSelect.appendChild(option);
//     });
//   }
  
// });



const countrySelect2 = document.getElementById('deliveryCountry');
const stateSelect2 = document.getElementById('deliveryState');

countrySelect2.addEventListener('change', () => {
  const selectedCountry = countrySelect2.value;
  document.querySelector('.summaryLocation').innerHTML = countrySelect2.value;
  
  console.log(countrySelect2.value)

  
  stateSelect2.innerHTML = '<option value="">State/Region</option>';

  if (countryStates[selectedCountry]) {
    countryStates[selectedCountry].forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect2.appendChild(option);
    });
 
  }
});





function proceed(){
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const proceedDetails = document.querySelector('.proceedDetails');
  const totalPriceContainer = document.querySelector('.orderPrice');

  proceedDetails.innerHTML = "";
  let totalPrice = 0;

  const getOrGeneratePrice = (itemId, defaultPrice) => {
    const storedPrices = JSON.parse(localStorage.getItem("itemPrices")) || {};
    
    if (storedPrices[itemId]) {
      return storedPrices[itemId];
    } else {
      const randomPrice = Math.floor(Math.random() * (570000 - 340000 + 1)) + 340000;
      storedPrices[itemId] = randomPrice;
      localStorage.setItem("itemPrices", JSON.stringify(storedPrices));
      return randomPrice;
    }
  };

  cartItems.forEach((item, index) => {

    const details = document.createElement('div');
    details.classList.add('details');

    let numericPrice = parseFloat(item.price?.replace(/[£,]/g, ""));
    if (isNaN(numericPrice)) {
      numericPrice = getOrGeneratePrice(item.id - 1, numericPrice);
    }
    details.innerHTML = `
            <div class="orderImg">
              <img src="${item.mainImg}" alt="Image">
              
               <p class="orderPriceCont">£${numericPrice.toLocaleString()}</p>
            </div>
            <div class="orderDet">
              <h5 id="orderItemBrand">${item.brand}</h5>
              <p>Model: <span class="orderItemModel">${item.model}</span></p>
              <p>Color: <span class="orderItemColor">${item.extColor}</span></p>
              <p>Qty: 1</p>
               <button onclick="removeCartItem(${index})"><i class="fa-solid fa-trash"></i> Remove</button>
            </div>
           `;

           totalPrice += numericPrice;
            proceedDetails.append(details);
  });
  totalPriceContainer.textContent = '£'+ totalPrice.toLocaleString();
}

function proceed3(){
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const summaryDetails = document.getElementById('summaryNameAndPrice')

  summaryDetails.innerHTML = "";
  let totalPrice = 0;

  const getOrGeneratePrice = (itemId, defaultPrice) => {
    const storedPrices = JSON.parse(localStorage.getItem("itemPrices")) || {};
    
    if (storedPrices[itemId]) {
      return storedPrices[itemId];
    } else {
      const randomPrice = Math.floor(Math.random() * (570000 - 340000 + 1)) + 340000;
      storedPrices[itemId] = randomPrice;
      localStorage.setItem("itemPrices", JSON.stringify(storedPrices));
      return randomPrice;
    }
  };
  cartItems.forEach((item) => {
    const summary = document.createElement('p')

    let numericPrice = parseFloat(item.price?.replace(/[£,]/g, ""));
    if (isNaN(numericPrice)) {
      numericPrice = getOrGeneratePrice(item.id - 1, numericPrice);
    }

    summary.innerHTML = `
    <span class="summaryItemName">${item.brand} ${item.model}</span><span class="text-success">£${numericPrice.toLocaleString()}</span>`;

    totalPrice += numericPrice;
    summaryDetails.append(summary);

    const tax = (2 /100) * totalPrice;
    document.querySelector('.tax').innerHTML = '£' + tax.toLocaleString();

    document.querySelector('.summaryItemPrice').innerHTML = '£'+ totalPrice.toLocaleString();
    document.querySelector('.summaryTotal').innerHTML = '£' + (tax + totalPrice).toLocaleString();
  });
}

const deliveryEmail = document.getElementById('deliveryEmail');
const deliveryFirstName = document.getElementById('deliveryFirstName');
const deliveryLastName = document.getElementById('deliveryLastName');
const deliveryTelephone = document.getElementById('deliveryTelephone');
const deliveryAddress = document.getElementById('deliveryAddress');
const deliveryPostalCode = document.getElementById('deliveryPostalCode');

const similer = [deliveryFirstName, deliveryLastName, deliveryAddress, deliveryPostalCode, countrySelect2, stateSelect2]
function deliveryVerify(){
  
  let deliveryValid = true;
  if(deliveryEmail.value === '' || !emailPattern.test(deliveryEmail.value)){
      deliveryEmail.classList.add('is-invalid')
      deliveryValid = false;
  }else{
    deliveryEmail.classList.remove('is-invalid');
  }

  similer.forEach((same) =>{
    if(same.value === ''){
      same.classList.add('is-invalid')
      deliveryValid = false;
    }else{
      same.classList.remove('is-invalid')
    }
  });
  if(deliveryValid){
    console.log('bad')
    const deliveryloader = document.getElementById("deliveryloader");
    setTimeout(() => {
      deliveryloader.style.display = 'block';
    }, 500)

    setTimeout(()=>{
      deliveryloader.style.display = 'none';
     const fModal = bootstrap.Modal.getInstance(document.getElementById('proceedCheckout2'))
    fModal.hide();
    const modal = new bootstrap.Modal(document.getElementById('proceedCheckout3'))
    modal.show();
    proceed3();
    }, 2500)
  }
}

document.querySelector('.proceed3').addEventListener('click', deliveryVerify)





// document.querySelector('.proceed').addEventListener('click', () => {
//   const modal = new bootstrap.Modal(document.getElementById('proceedCheckout'));
//   modal.show();
//   proceed();
// });

document.querySelector('.checkLocation').addEventListener('click', ()=>{
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("proceedCheckout")
    )
    modal.hide();

    const nextModal = new bootstrap.Modal(document.getElementById('proceedCheckout2'));
    nextModal.show();
});


document.querySelector('.closeProceed1').addEventListener('click', ()=>{
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("proceedCheckout")
  )
  modal.hide();
  document.body.style.overflow = ""; // Reset overflow
const backdrop = document.querySelector(".modal-backdrop");
if (backdrop) backdrop.remove();
});

document.querySelector('.closeProceed2').addEventListener('click', ()=>{
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("proceedCheckout2")
  )
  modal.hide();
  document.body.style.overflow = ""; // Reset overflow
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) backdrop.remove();
})

document.querySelector('.closeProceed3').addEventListener('click', ()=>{
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("proceedCheckout3")
  )
  modal.hide();
  document.body.style.overflow = ""; // Reset overflow
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) backdrop.remove();
})

document.getElementById("proceedCheckout").addEventListener("hidden.bs.modal", () => {
  // Ensure no lingering classes or elements
  document.body.classList.remove("modal-open");
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) backdrop.remove();
});

document.getElementById('creditCardBtn').addEventListener('click', function() {
  const name = document.getElementById('deliverycardName').value.trim();
  const deliverycardNumber = document.getElementById('deliverycardNumber').value.trim();
  const deliveryexpDate = document.getElementById('deliveryexpDate').value.trim();
  const deliverycvv = document.getElementById('deliverycvv').value.trim();
  const toastLiveExample = document.getElementById("liveToast");
  let valid = true;

  // Validate Name
  if (name === '') {
      document.getElementById('deliverycardName').classList.add('is-invalid');
      valid = false;
  } else {
    document.getElementById('deliverycardName').classList.remove('is-invalid');
  }

  // Validate Card Number
  if (!/^\d{16}$/.test(deliverycardNumber)) {
      document.getElementById('deliverycardNumber').classList.add('is-invalid');
      valid = false;
  } else {
    document.getElementById('deliverycardNumber').classList.remove('is-invalid');
  }

  // Validate Expiration Date
  const expParts = deliveryexpDate.split('/');
  if (expParts.length !== 2 || !/^\d{2}$/.test(expParts[0]) || !/^\d{2}$/.test(expParts[1])) {
    document.getElementById('deliveryexpDate').classList.add('is-invalid');
    valid = false;
  } else {
      const month = parseInt(expParts[0], 10);
      const year = parseInt(expParts[1], 10) + 2000; // Assuming YY is in 2000s
      const expiryDate = new Date(year, month - 1); // Month is 0-indexed
      const today = new Date();
      if (expiryDate < today) {
        document.getElementById('deliveryexpDate').classList.add('is-invalid');
        document.getElementById('deliveryexpDateFeedback').textContent = 'Card has expired.';
        valid = false;
      } else {
        document.getElementById('deliveryexpDate').classList.remove('is-invalid');
      }
  }

  // Validate CVV
  if (!/^\d{3}$/.test(deliverycvv)) {
      document.getElementById('deliverycvv').classList.add('is-invalid');
      valid = false;
  } else {
    document.getElementById('deliverycvv').classList.remove('is-invalid');
  }


  if (valid) {
    const successGif = document.querySelector(".successGif");
    setTimeout(() => {
        successGif.style.display = 'block';
    }, 1000);
    
    setTimeout(() => {
        successGif.style.display = 'none';
        const fModal = bootstrap.Modal.getInstance(document.getElementById('creditInfo'));
        fModal.hide();
       
    }, 2500);

    const offcanvasEl = document.getElementById('offcanvasRight');

    const canvasHide = bootstrap.Offcanvas.getInstance(offcanvasEl);

      canvasHide.hide();
      
    const toastLiveExample = document.getElementById('liveToast');
    const toastInstance = new bootstrap.Toast(toastLiveExample, {
      autohide: false, // Disable auto-hide
  })
    toastInstance.show();

    setTimeout(() => {
      toastInstance.hide();
  }, 12000);
    
  }
});

const offcanvas = document.getElementById('offcanvasRight');

offcanvas.addEventListener('show.bs.offcanvas', () => {
  document.body.classList.add('offcanvas-open'); // Prevent scrolling
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
  document.body.classList.remove('offcanvas-open'); // Restore body scroll
});


// document.getElementById('payButton').addEventListener('click', function() {
//   // Show the payment modal
//   const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
//   paymentModal.show();
// });

// document.getElementById('confirmButton').addEventListener('click', function() {
//   // You can add your confirmation logic here
//   alert('Payment confirmed!');
//   const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
//   paymentModal.hide();
// });

document.querySelector('.payNow').addEventListener('click', ()=>{
  const cardRadio = document.getElementById('cardRadio');
  if(cardRadio.checked){
    const prevModal = bootstrap.Modal.getInstance(document.getElementById('proceedCheckout3'));
    const modal = new bootstrap.Modal(document.getElementById('creditInfo'));
    prevModal.hide();
    modal.show();
  }else{
    alert('Select Payment method')
  }
});


