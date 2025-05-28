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
  
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = document.querySelectorAll(".cartCount");
    cartCount.forEach((cartcunt) => {
      cartcunt.textContent = cartItems.length;
    });
  }
  
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
  
  // Initialize the cart count on page load
  updateCartCount();
  const cartContainer = document.getElementById("cartContainer");
  // Function to display cart items
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
    }
    else{
      document.getElementById('deliverycardName').classList.remove('is-invalid');
    }
  
    // Validate Card Number
    if (!/^\d{16}$/.test(deliverycardNumber)) {
        document.getElementById('deliverycardNumber').classList.add('is-invalid');
        valid = false;
    }else{
      document.getElementById('deliverycardNumber').classList.remove('is-invalid');
    }
  
    // Validate Expiration Date
    const expParts = deliveryexpDate.split('/');
    if (expParts.length !== 2 || !/^\d{2}$/.test(expParts[0]) || !/^\d{2}$/.test(expParts[1])) {
      document.getElementById('deliveryexpDate').classList.add('is-invalid')
        valid = false;
    } else {
        const month = parseInt(expParts[0], 10);
        const year = parseInt(expParts[1], 10) + 2000; // Assuming YY is in 2000s
        const expiryDate = new Date(year, month - 1); // Month is 0-indexed
        const today = new Date();
        if (expiryDate < today) {
          document.getElementById('deliveryexpDate').classList.add('is-invalid')
            document.getElementById('deliveryexpDateFeedback').textContent = 'Card has expired.';
            valid = false;
        }
        else{
          document.getElementById('deliveryexpDate').classList.remove('is-invalid')
        }
    }
  
    // Validate CVV
    if (!/^\d{3}$/.test(deliverycvv)) {
        document.getElementById('deliverycvv').classList.add('is-invalid');
        valid = false;
    }
    else{
      document.getElementById('deliverycvv').classList.remove('is-invalid')
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
  
  const authButton = document.getElementById("authButton");
  const logEmailError = document.getElementById("logEmailError");
  const logPassError = document.getElementById("logPassError");
  const signEmailError = document.getElementById("signEmailError");
  const signPassError = document.getElementById("signPassError");
  const signConfirmPassError = document.getElementById("signConfirmPassError");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
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
      // Simulate account creation
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
  
  // Handle logout logic
  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    updateAuthButton();
    alert("Logged out Successfully!!");
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
  document.addEventListener("DOMContentLoaded", updateAuthButton);
  
  const modPrice = document.getElementById("modPrice");
  const modDet = document.getElementById("modDet");
  
  document.querySelectorAll(".butio").forEach((button) => {
   
    button.addEventListener("click", () => {
      modPrice.innerHTML = `&pound; ${button.getAttribute("data-price")}`;
      modDet.innerHTML = `${button.getAttribute("data-list")}`;
    });
  });
  

  document.querySelector('.subMessage').addEventListener('click', (event)=>{
    event.preventDefault();
    const name = document.getElementById('contactFullNameInput');
    const email = document.getElementById('contactEmailInput');
    const contactTextarea = document.getElementById('contactMessage');
    const contactReason = document.getElementById('contactReason');
    let valid = true;
    if(name.value === ""){
        name.classList.add('is-invalid')
        valid = false;
    }
    else{
        name.classList.remove('is-invalid') 
    }
    if(!emailPattern.test(email.value)){
        email.classList.add('is-invalid');
        valid = false;
    }else{
        email.classList.remove('is-invalid')
    }
    if(contactReason.value === ""){
        contactReason.classList.add('is-invalid');
        valid = false;
    }else{
        contactReason.classList.remove('is-invalid');
    }
    if(contactTextarea.value === ""){
        contactTextarea.classList.add('is-invalid');
        valid = false;
    }else{
        contactTextarea.classList.remove('is-invalid');
    }
    if(valid){
        const toastLiveExample = document.getElementById('contactLiveToast');
        const toastInstance = new bootstrap.Toast(toastLiveExample, {
          autohide: false, // Disable auto-hide
      })
        toastInstance.show();
    
        setTimeout(() => {
          toastInstance.hide();
      }, 12000);
    }
  })
    
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
  
  