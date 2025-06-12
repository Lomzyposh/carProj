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

//locations
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
//add location to localStorage
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
const loader = document.getElementById("loader");

let loadInt = setInterval(() => {
  loader.style.display = loader.style.display === "none" ? "block" : "none"; // Toggle visibility
}, 5000);

setTimeout(() => {
  clearInterval(loadInt); // Stops toggling after 3 seconds
  loader.style.display = "none"; // Ensure loader is hidden
  console.log("Loader Stopped.");
}, 2000);

const cars = [
  //Acura (1)
  {
    brand: "Acura",
    model: "NSX",
    year: 2020,
    bodyStyle: "Coupe",
    engine: "3.5L twin-turbo JNC1 V6",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£140,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/d6d81b43-2cb8-471d-b01a-efb06319e55d/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/361da328-ca2f-486f-831d-df6c98f84133/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/ddfdffd8-3b6c-45e9-ad9d-df1826f75c0f/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/c4046c34-a871-469b-9ad7-f0d98515daf6/je/1100xxs.jpg",
  },
  {
    brand: "Acura",
    model: "Integra",
    year: 2024,
    bodyStyle: "Sedan",
    engine: "2.0L VTEC® Turbo 4-cylinder engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Red",
    price: "£25,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/05/07/49/31/25d767ce-1a83-44ef-b842-d477a057a80c/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/05/07/49/31/e6294a30-0934-4cbd-941a-0286d852a011/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/05/07/49/31/e64b5cf4-152e-46e2-805b-350dcc762449/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/05/07/49/31/adb0201b-5df4-4b50-853b-1d00f13f9469/je/1100xxs.jpg",
  },
  {
    brand: "Acura",
    model: "ILX",
    year: 2022,
    bodyStyle: "Sedan",
    engine: "2.4L DOHC i-VTEC",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£22,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/05/02/34/26/e5c667bc-d226-4c2b-a55b-e5317e62431e/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/05/02/34/26/351d3f6a-73cb-4d03-ae0f-a50bd917fdfd/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/05/02/34/26/dc0a96d3-9712-4dbb-8596-a1b70bf00898/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/05/02/34/26/4ab241c4-163b-440d-b8bc-02490531a52f/je/1100xxs.jpg",
  },
  {
    brand: "Acura",
    model: "NSX",
    year: 1998,
    bodyStyle: "Coupe",
    engine: "3.2L V6 engine",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Yellow",
    price: "£70,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2023/11/15/20/55/00/9c48a6ab-79dc-4903-83a7-b23332706021/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2023/11/15/20/55/00/11cf1f19-a77c-491d-8ec7-f12c022f52b2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2023/11/15/20/55/00/e46c08aa-69c0-4294-8701-2340028c3ddb/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2023/11/15/20/55/00/6bae726e-66c7-441a-9e37-25135c6be43e/je/1100xxs.jpg",
  },
  //Aston Martin (2)
  {
    brand: "Aston Martin",
    model: "DBS",
    year: 2019,
    bodyStyle: "Coupe",
    engine: "4.0 L DOHC I6 5.3 L V8 (DBS V8)",
    fuelType: "Hybrid",
    extColor: "Grey",
    intColor: "Red",
    price: "£160,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/30aa1c52-9fdf-4836-8784-c8df7f4d88b8/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/98e436f0-887e-4753-9e26-f09579b988b0/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/e4af3c49-f2ed-4d75-97a3-806d2155030a/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/83f03943-c405-45a4-a6db-691bb3a6db65/je/1100xxs.jpg",
  },
  {
    brand: "Aston Martin",
    model: "Vantage",
    year: 2023,
    bodyStyle: "Coupe",
    engine: " AE31 twin-turbocharged V12",
    fuelType: "Gasoline",
    extColor: "Green",
    intColor: "Black",
    price: "£162,900",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/ec47c9e7-0cd7-4346-83a9-149b9e239715/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/22c9263c-448b-4674-aff3-bb394bb4032c/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/31ac3f81-1d9c-4afe-afbc-4e476b22cf79/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/c492d1da-3e2a-48db-975b-0b8ba961a632/je/1100xxs.jpg",
  },
  {
    brand: "Aston Martin",
    model: "Rapide",
    year: 2011,
    bodyStyle: "Sedan",
    engine: " 5.9 L AM29 V12",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£50,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/52/c62639ae-81b5-4f8d-bafb-bb17e92ac80c/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/52/b63d100e-312b-4504-a524-032a4b6a4ffc/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/52/37a77877-7dc2-4cdc-b71e-f3952952a1f3/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/52/464e8fed-98d3-4ba9-a120-ed96cb571de0/je/1100xxs.jpg",
  },
  {
    brand: "Aston Martin",
    model: "DBX 707",
    year: 2025,
    bodyStyle: "Suv",
    engine: "4.0L twin-turbocharged V8",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/23dee214-d1e5-40e0-a1d7-5a08331d0305/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/d9de0ed2-bb43-49ed-9a31-d81e592f4a51/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/f5494d8d-0ddc-4650-89f7-10d5eed2c1ad/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/230266bd-af6c-43e2-8223-3962d7868096/je/1100xxs.jpg",
  },
  {
    brand: "Aston Martin",
    model: "Rapide 4D",
    year: 2012,
    bodyStyle: "Sedan",
    engine: "AE31 twin-turbocharged V12",
    fuelType: "Sedan",
    extColor: "White",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/5df36435-55f1-469c-b290-458baf9e70ff/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/0011c496-3451-48e0-adb1-135c455f159e/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/58c9d748-b4a4-4c60-acd1-438197703e82/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/a273b323-73ee-4ffd-9302-c2ec14425e95/je/1100xxs.jpg",
  },
  //Bentley (3)
  {
    brand: "Bentley",
    model: "Bentayga W12",
    year: 2018,
    bodyStyle: "Suv",
    engine: "Twin Turbo 6.0L TSI W12",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£87,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/187b464a-b25c-4ce4-b46a-e9e29011ae20/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/36587b2b-7b76-4086-b17b-bc212f30df84/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/f6a72306-1574-41bc-a0b5-4733b05abbac/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/36587b2b-7b76-4086-b17b-bc212f30df84/je/1100xxs.jpg",
  }, //11
  {
    brand: "Bentley",
    model: "Continental GTC",
    year: 2024,
    bodyStyle: "Sedan",
    engine: "4.0L V8",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "White",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/0feb17b7-11cc-4c8a-b7f2-3b16bf902067/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/852fb807-fe1c-4a11-99a8-d31a5672d7f9/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/2f5108ad-a2b4-474e-8bb3-f5c7e3087aa2/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/abd35d19-5cd4-479a-baa6-b29b3c9ab905/je/1100xxs.jpg",
  },
  {
    brand: "Bentley",
    model: "Mulsanne",
    year: 2017,
    bodyStyle: "Sedan",
    engine: "Twin-turbocharged 6.75-litre V8 engine",
    fuelType: "Gasoline",
    extColor: "Blue",
    intColor: "Black",
    price: "£134,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/09/24/16/19/46/76337698-4b5a-4b87-964e-b8be8d7bc0f0/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/09/24/16/19/46/eb8b6a6b-9e37-423d-900b-e6799c22f8d3/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/09/24/16/19/46/7e097e3a-413e-4315-aa3a-cb9cf0531b1c/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/09/24/16/19/46/a6bf6681-e0bf-4b54-803d-f78cd0d2b9a3/je/1100xxs.jpg",
  },
  {
    brand: "Bentley",
    model: "Continental Flying Spur",
    year: 2007,
    bodyStyle: "Sedan",
    engine: "6L twin turbocharged W12",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£23,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/fb25eff9-1449-4d78-a918-4d99910eda97/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/d4280e6a-50f0-4033-90da-47b541ad6e17/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/397689f5-72ff-4a51-b186-5cbf0da4f55e/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/abe25e84-1743-436d-b771-bba6e39b422c/je/1100xxs.jpg",
  }, //15
  //BMW (4)
  {
    brand: "BMW",
    model: "8 Series M850i ",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "4.4 L N63 twin-turbo V8",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "White",
    price: "£76,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/97e6b237-9cd0-47d0-ad82-7f625e1cd8fe/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/3f200706-da96-41d7-b880-faa233987834/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/d1cb4a54-c46c-4eae-be51-1e62af614dd7/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/9488bea5-9790-45ea-bb09-501ba8b64f57/je/1100xxs.jpg",
  },
  {
    brand: "BMW",
    model: "XM",
    year: 2024,
    bodyStyle: "Suv",
    engine: "BMW M TwinPower Turbo V-8",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£150,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/54a491e4-d5c6-4e81-9ad7-f913760e41d6/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/b7290351-183d-429a-a86f-0e1909119a57/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/542011b9-0ad5-4c77-abe7-7e18f67fcf7d/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/4f6b29c3-c569-4dfc-aec0-e262a5c23b28/je/1100xxs.jpg",
  },
  {
    brand: "BMW",
    model: "X6",
    year: 2016,
    bodyStyle: "Suv",
    engine: "Twin-turbo 4.4L V-8 ",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£24,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/988426a9-07c4-4e18-a384-0f6a81e49fa5/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/ab1d010f-d422-436d-b406-4f249006a46f/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/b8194cd6-6093-475c-9af2-e7c002694942/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/eccd709a-9212-4ab8-8753-38ca80428f7c/je/1100xxs.jpg",
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2023,
    bodyStyle: "Suv",
    engine: "4.4L BMW M TwinPower Turbo V8",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£35,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/211f6a63-ea20-41d7-b804-05268b276392/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/edeb2c37-d26d-4bb7-8c62-fe6fcc541bb2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/18426a3e-62dc-4a51-9656-096877f21eeb/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/34403576-de2c-4dba-ab9f-25b114b43ccc/je/1100xxs.jpg",
  },
  {
    brand: "BMW",
    model: "M4 Coupe",
    year: 2015,
    bodyStyle: "Coupe",
    engine: "Turbo-inline 6-cylinder  V8",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/b395d78d-1655-45dc-a728-65e641fc109c/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/55b9b242-666a-49aa-9928-956857810440/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/da15e3d7-c796-4548-ba74-67f9bd40a253/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/587f41e9-3ca3-43fd-a028-1d1984b80e00/je/1100xxs.jpg",
  },
  //Cadillac (5)
  {
    brand: "Cadillac",
    model: "CT5",
    year: 2020,
    bodyStyle: "Sedan",
    engine: "3.0L LGY twin turbocharged V6",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Orange",
    price: "£22,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/9e1be1f5-a2db-4011-829f-f0a48d7f760c/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/9593753c-8b2a-464f-a5d1-8175a3ff254c/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/162a3bb5-e5e7-46dd-9e31-8610dee97796/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/13/13/59/57/fce3e432-266c-4d12-abec-38349bb204f0/je/1100xxs.jpg",
  },
  {
    brand: "Cadillac",
    model: "XT4",
    year: 2023,
    bodyStyle: "Suv",
    engine: "2.0L turbocharged DOHC I4",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/a8d90784-ab17-4230-85da-8eeb5f21e7d7/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/c5161ce2-6e80-481a-b21e-a255a7c18207/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/23401c76-d0f3-43f2-a05d-692fe0bba453/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/40/dc5df13b-7ee0-456d-8174-3a5df4f543a8/je/1100xxs.jpg",
  },
  {
    brand: "Cadillac",
    model: "XLR",
    year: 2010,
    bodyStyle: "Coupe",
    engine: "4.6L Northstar V8 ",
    fuelType: "Gasoline",
    extColor: "Red",
    intColor: "Beige",
    price: "£30,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/8d971ffe-dea5-4676-b838-36a35655ac5f/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/150d0f79-5b7f-4f5a-97e5-ad6b9b3219af/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/09cc9575-ef99-4480-9c6e-00e5726f27b3/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/c07a0320-6e13-46ab-b2c3-d45d22535a23/je/1100xxs.jpg",
  },
  {
    brand: "Cadillac",
    model: "Escalade",
    year: 2016,
    bodyStyle: "Suv",
    engine: "6.2L Vortec V8",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Beige",
    price: "£21,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/a71da329-0dae-4919-aaa8-3a0013e79c8a/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/abae2f75-7060-4654-b10f-8dbac85f4ad7/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/8a00bc6d-a339-4f1f-9020-27145072f6d3/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/32/13c99d03-a30a-4864-bcbc-84ff936a0c07/je/1100xxs.jpg",
  },
  //Dodge (6)##
  {
    brand: "Dodge",
    model: "Challenger",
    year: 2021,
    bodyStyle: "Coupe",
    engine: "SUPERCHARGED 5.7L HEMI® V8 ENGINE",
    fuelType: "Gasoline",
    extColor: "Blue",
    intColor: "Red",
    price: "£90,000",
    condition: "Used",
    mainImg:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/gallery/exterior/MY23_Challenger_Gallery_06.jpg.image.2880.jpg",
    image1:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/vlp/desktop/MY23Challenger_VLP_Desktop_galleryfull2.jpg",
    image2:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/gallery/exterior/MY23_Challenger_Gallery_17.jpg.image.2880.jpg",
    image3:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/challenger/gallery/interior/MY23_Challenger_Gallery_2.jpg.image.2880.jpg",
  },
  {
    brand: "Dodge",
    model: "Durango",
    year: 2004,
    bodyStyle: "Coupe",
    engine: "SUPERCHARGED 6.2L HEMI® V8 ENGINE",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Red",
    price: "£80,000",
    condition: "New",
    mainImg:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-blurbrail-01-desktop-v1.png.image.2880.png",
    image1:
      "https://content.homenetiol.com/2000292/2159164/0x0/ae219d09662745c4a5fe16cdd63ac5ba.jpg",
    image2:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-solidpromotile-04-desktop.jpg",
    image3:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-solidpromotile-always-100-desktop.jpg",
  },
  {
    brand: "Dodge",
    model: "Charger SRT",
    year: 2023,
    bodyStyle: "Coupe",
    engine: "SUPERCHARGED 6.2L HEMI® V8 ENGINE",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Beige",
    price: "£91,500",
    condition: "New",
    mainImg:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_3.jpg.image.1400.jpg",
    image1:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_1.jpg.image.1400.jpg",
    image2:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_8.jpg.image.1400.jpg",
    image3:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/gallery/desktop/MY23Charger_Gallery_12.jpg.image.1400.jpg",
  },
  {
    brand: "Dodge",
    model: "Durango",
    year: 2004,
    bodyStyle: "Coupe",
    engine: "SUPERCHARGED 6.2L HEMI® V8 ENGINE",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Red",
    price: "£80,000",
    condition: "New",
    mainImg:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-blurbrail-01-desktop-v1.png.image.2880.png",
    image1:
      "https://content.homenetiol.com/2000292/2159164/0x0/ae219d09662745c4a5fe16cdd63ac5ba.jpg",
    image2:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-solidpromotile-04-desktop.jpg",
    image3:
      "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2024/durango/design/desktop/my24-dodge-durango-design-solidpromotile-always-100-desktop.jpg",
  },
  {
    brand: "Dodge",
    model: "Viper",
    year: 2017,
    bodyStyle: "Coupe",
    engine: "SUPERCHARGED 7.0L HEMI® V8 ENGINE",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£200,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/2781074a-60e8-4477-8965-80c3d9720145/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/1b140ae2-323b-4555-9ec6-262bc7ac9b77/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/3decc982-a79d-4fcf-9df5-a93c414986c1/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/62df2968-416e-4731-a9cc-9d6966f865b2/je/1100xxs.jpg",
  }, //30
  //.........................................
  //Ferrari (7)
  {
    brand: "Ferrari",
    model: "Roma",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "Turbocharged 3.9L V8 engine",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/c15209f8-c1ab-42e2-a85b-2ee6cb457e22/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/28/7663ad29-cec0-4e20-9954-78ed24894858/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/45d4fb8b-6c06-4c2d-9881-72fe474623ef/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/28/d992b76a-a110-4fdc-873e-67b59646bc37/je/1100xxs.jpg",
  },
  {
    brand: "Ferrari",
    model: "296 GTB rwd",
    year: 2023,
    bodyStyle: "Coupe",
    engine: "2,992 cc (3.0 L) twin-turbo 120° V6",
    fuelType: "Hybrid",
    extColor: "Red",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/fd120e4f-396b-4ad1-958f-8b78e1445579/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/c80371df-1668-4f5d-a241-55572b1cdcd2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/826c438c-f6f7-42da-85ef-e6333b3138a7/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/02702051-a0f8-444c-9756-8f85f169a9aa/je/1100xxs.jpg",
  },
  {
    brand: "Ferrari",
    model: "599 GTB Fiorano",
    year: 2007,
    bodyStyle: "Coupe",
    engine: "Tipo F133F 6.0 L (5999 cc) V12",
    fuelType: "Gasoline",
    extColor: "Red",
    intColor: "Beige",
    price: "£160,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/149c26a6-c2f3-4b97-a040-9de9b11e0f2e/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/8ff28a94-18f5-446a-afe9-c347f0532726/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/1182f139-2d96-48be-ac24-82d3253654c0/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/f8c805f9-f956-4bbf-a2e7-118c1bd21a63/je/1100xxs.jpg",
  },
  {
    brand: "Ferrari",
    model: "812 Superfast rwd",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "6,496 cc (6.5 L) F140 GA V12",
    fuelType: "Hybrid",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/ab89bc4f-6182-43c4-8c30-de78b80152ac/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/bff7dca3-1526-4b11-8944-28c6ab438df6/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/b75a908f-c88a-467a-bbd2-477adcef0a98/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/309a7e26-ea8c-43be-8a89-48fb195030be/je/1100xxs.jpg",
  },
  {
    brand: "Ferrari",
    model: "Gated Manual",
    year: 2003,
    bodyStyle: "Coupe",
    engine: "3.6L/400HP V8",
    fuelType: "Gasoline",
    extColor: "Red",
    intColor: "Gold",
    price: "£150,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/0288a7a7-9509-4a41-9a55-80992e75e903/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/73226db1-f4d5-4b96-9705-8147009fa54a/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/14437f8e-434c-447c-b131-bb28dec8a28a/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/9cc8c461-64c4-4c63-aaf3-e4def8ec4feb/je/1100xxs.jpg",
  }, //35
  //Ford (8)
  {
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    bodyStyle: "Coupe",
    engine: "5.0L V8",
    fuelType: "Gasoline",
    extColor: "Beige",
    intColor: "Black",
    price: "£21,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/560bdcfb-8a6f-4048-adef-d1399a06d616/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/75c95ed9-c73e-487f-881d-9ee5ac532314/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/eb468f77-edea-49cd-a0bb-acbb08048744/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/d896c830-c633-4c77-8969-366c9eecd87a/je/1100xxs.jpg",
  },
  {
    brand: "Ford",
    model: "F150",
    year: 2017,
    bodyStyle: "Truck",
    engine: "3.5L V6",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£67,500",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/e960f4a2-b583-4245-a227-a446f769b15b/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/3bea801a-3f9b-42c5-9c16-0ed4905e16f2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/bd1a00c2-0d65-44e5-b7b6-caaca496e6ae/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/a98812dd-f44c-4171-a2a6-248278d79da2/je/1100xxs.jpg",
  },
  {
    brand: "Ford",
    model: "F350",
    year: 2020,
    bodyStyle: "Truck",
    engine: "5.0L V8",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Grey",
    price: "£42,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/490ae02c-cfc2-4b25-9da6-042c410da6b8/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/4de90027-6a08-4334-94b2-87ca1aa5158a/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/5b3cf7b5-b7f1-4835-8048-1bf977ae793a/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/a70b488f-d96a-443a-b331-367401f65924/je/1100xxs.jpg",
  },
  {
    brand: "Ford",
    model: "Expendition",
    year: 2021,
    bodyStyle: "Truck",
    engine: "3.5L V6",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£35,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/81c83e93-0e4f-4d3b-9f44-2e15c03efabc/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/6b2eb015-ef52-4e5d-be81-cf637300978c/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/fd459d2b-1316-4fff-82de-3016b4c0864f/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/c2c20e3f-0962-4f2c-b88f-7a751ab7e7ce/je/1100xxs.jpg",
  },

  //Honda (9)
  {
    brand: "Honda",
    model: "HR-V",
    year: 2023,
    bodyStyle: "Sedan",
    engine: "2L, four-cylinder engine",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£21,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/8f116fac-bb69-4460-b5f6-ba3b77b86682/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/7c4f4501-a6af-4628-8a65-16f204a81eea/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/3aa3de2f-2cde-4698-97c5-323f2afadd63/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/6dfd5f76-e2c7-4444-b504-6c4ef36e33e9/je/1100xxs.jpg",
  },
  {
    brand: "Honda",
    model: "Passport",
    year: 2021,
    bodyStyle: "Suv",
    engine: "3.5L V-6",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£26,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/e436aee0-84a5-40bd-bc00-49b645d47752/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/20870b5b-5be9-4d39-ba7f-942b610c5a88/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/333115e4-3e9c-48b0-bf85-bb08f561505e/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/d179a87b-14c7-40a5-8117-900cd96ad92b/je/1100xxs.jpg",
  },
  {
    brand: "Honda",
    model: "Ridgeline RTL",
    year: 2022,
    bodyStyle: "Truck",
    engine: "4L DOHC VTEC engine",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£35,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/17/11/24/54/4b74178b-aa66-429c-b164-5a5ab65a4eed/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/17/11/24/54/033480f6-a446-4822-8258-4be61fd9790e/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/17/11/24/54/ea66f150-e6f3-4f25-bb4e-8cd0c412c463/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/17/11/24/54/dfb8a852-59d6-4a68-80a7-22b2aea21ad7/je/1100xxs.jpg",
  },
  {
    brand: "Honda",
    model: "S2000",
    year: 2004,
    bodyStyle: "Coupe",
    engine: "4-cylinder DOHC VTEC engine",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£21,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/07/04/24/25/6b830591-5d33-477e-add2-adb06aa3508f/je/1100xxs.jpg ",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/07/04/24/25/92a2bebc-d9fa-4fbc-b880-cea1751c3993/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/07/04/24/25/a1411a92-3208-4980-b684-a3b46088343a/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/07/04/24/25/34c636d0-523c-4ac6-a98d-3fe8aee04379/je/1100xxs.jpg",
  },

  //Jeep (10)
  {
    brand: "Jeep",
    model: "Wrangler",
    year: 2024,
    bodyStyle: "Suv",
    engine: "6.4L V8 SRT HEMI I MDS Engine",
    fuelType: "Gasoline",
    extColor: "Beige",
    intColor: "Brown",
    price: "£65,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/41/a87ea787-9f7f-458e-97e3-e20ee26f67d3/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/41/24249811-b524-4f89-9d8b-f8e1142655d6/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/41/b7147b13-8a07-4633-a3d7-b493047774a5/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/41/b7147b13-8a07-4633-a3d7-b493047774a5/je/1100xxs.jpg",
  },
  {
    brand: "Jeep",
    model: "Gladiator",
    year: 2022,
    bodyStyle: "Suv",
    engine: "3.6L Pentastar V6 engine",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "£35,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/486517be-bb33-474a-82c8-9b82641c7036/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/21a54e1b-0df4-42c4-98bf-038330071ec2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/a6beeaa2-e298-4149-a340-8adb3f4b6849/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/7685704c-6e65-4a7b-875e-8640fa6905cb/je/1100xxs.jpg",
  },
  {
    brand: "Jeep",
    model: "Cherokee",
    year: 2021,
    bodyStyle: "Suv",
    engine: "3.2L Pentastar V6",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/0ae4b83a-6baf-4ddc-9f30-64b33db27eb9/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/c89f0075-c7e0-4228-82ae-c192b32bf477/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/8a104948-63cf-4f32-8bf4-93dbd0d649fa/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/ffea797a-82fc-4ae4-a676-6f8754c19569/je/1100xxs.jpg",
  },
  {
    brand: "Jeep",
    model: "Wagoneer Series II",
    year: 2024,
    bodyStyle: "Suv",
    engine: "3.0L twin-turbo I6 6.4 L Hemi V8",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£50,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/b4d82450-adee-4dba-8456-7a1a471d4eee/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/8e160911-7f3b-4682-abd3-c5cbaa32aff2/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/c9769338-d7e6-44fe-8293-949ba3fbeffa/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/f841c45d-a008-4254-b1f0-344389a27859/je/1100xxs.jpg",
  }, //50

  //KIA (11) ##
  {
    brand: "Kia",
    model: "Telluride",
    year: 2024,
    bodyStyle: "Suv",
    engine: "6 Cylinder",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£24,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/f9c4ea03-4c3b-426e-9df1-6a58bb6e032b/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/f2d11d6d-8e59-4c2f-8407-94fd3f40d411/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/6aae0fe2-ab8f-4f51-9600-edf874341bef/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/e046de4f-d8c9-4bcb-8cc5-30f8aa43ad33/je/1100xxs.jpg",
  },
  {
    brand: "Kia",
    model: "K5",
    year: 2025,
    bodyStyle: "Sedan",
    engine: "4 Cylinder",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£46,800",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/099ce8ed-837c-4c0a-ad2d-12d2ffa2cac2/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/9a49ce07-e54f-4940-b099-b806b2057ac0/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/fb7df696-a8a7-4be7-bddb-513406691790/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/d93382e3-3696-4735-bc52-4ec4dcec4c0d/je/2200xxs.jpg",
  },
  {
    brand: "Kia",
    model: "Sportage",
    year: 2022,
    bodyStyle: "Suv",
    engine: "6 Cylinder",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£30,500",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/be4c0583-f7e8-4549-8d4e-03a67cd63ae2/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/35ea6e70-5a06-4868-a6cc-b84aa8434091/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/3bbe331d-4331-4f4f-89e5-0a53749f2ab3/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/a507a7b7-bd96-4d44-ad4d-6f1f8d147016/je/1100xxs.jpg",
  }, //55

  //Lamborghini (12) ##
  {
    brand: "Lamborghini",
    model: "Aventador",
    year: 2022,
    bodyStyle: "Coupe",
    engine: " 12 Cylinder",
    fuelType: "gasoline",
    extColor: "Golden Brown",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/7513cc78-d9b9-4bfd-abc2-c35391f724b7/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/1476d6d5-bf0f-4145-b71e-08abf7d8a4eb/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/bc802c18-ba5b-40d9-b130-01c3e6f46f0b/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/46080292-87ab-4f9e-a1f7-218ec79532ad/je/1100xxs.jpg",
  },
  {
    brand: "Lamborghini",
    model: "Urus",
    year: 2023,
    bodyStyle: "Suv",
    engine: "4.0L / V8 Cylinder 657 HP",
    fuelType: "gasoline",
    extColor: "Dark Blue",
    intColor: "Black",
    price: "£200,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/22/13/13/06/4583d03a-7a88-4415-a7d6-12050beba6c0/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/22/13/13/07/88de7175-9c16-4b34-af78-0d3c691ce5eb/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/22/13/13/09/1a9ce0f8-07e5-4e93-b3e3-2c566f3613de/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/22/13/13/09/b5ddf220-e28f-4621-a171-5c5eb3baf6f7/je/1100xxs.jpg",
  },
  {
    brand: "Lamborghini",
    model: "Aventador SVJ",
    year: 2019,
    bodyStyle: "Coupe",
    engine: "12 Cylinder",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "White",
    price: "£250,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/08/ae4e4294-d779-4d59-8ecb-51880fadd783/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/08/410ad44c-28f4-4ad7-a4eb-0ab001e6f5d7/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/08/c1874020-d582-4f78-ac81-cffe2d535ac0/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/09/f6fdd7a2-e767-4eb9-ace8-71a2e421f1cd/je/1100xxs.jpg",
  },
  {
    brand: "Lamborghini",
    model: "Huracan Sterrato",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "V8 Cylinder",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/f076b93f-1b04-4094-a730-ff8dffc3e65b/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/395e0a77-45fb-4036-b448-f27106720925/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/2c1534c6-9d91-455a-ba8d-31687135cf50/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/58995e3b-797b-4f8a-b653-2447088cdcea/je/1100xxs.jpg",
  },
  {
    brand: "Lamborghini",
    model: "Gallardo",
    year: 2024,
    bodyStyle: "Coupe",
    engine: "4.0L / V8 Cylinder 657 HP",
    fuelType: "Hybrid",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/a74257e1-53da-421d-90d2-36636c66db8c/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/e98f03c7-2f11-40a0-bb5d-eabf59e9c841/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/f5d6290b-1f1e-4fc1-b335-c0812ae59770/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/f5d6290b-1f1e-4fc1-b335-c0812ae59770/je/1100xxs.jpg",
  }, //60

  //Land Rover (13)
  {
    brand: "Land Rover",
    model: "Range Rover Evoque",
    year: 2024,
    bodyStyle: "Suv",
    engine: "Turbocharged 2L 4-cylinder 230HP",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Grey",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/bf2dd2c3-b2f4-4df1-a8f3-847e7fe409a0/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/6f45f2ef-02f2-41f9-b520-621d30277154/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/0c450a1d-4ac9-49f6-87b5-b80858423369/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/6e4464f3-a6c8-4328-8cd7-59dbdce774d8/je/1100xxs.jpg",
  },
  {
    brand: "Land Rover",
    model: "LR4 HSE",
    year: 2013,
    bodyStyle: "Suv",
    engine: "3.0L V6 supercharged",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Cream",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/0bb27cfe-6850-4d00-aee6-d1c91483207e/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/416b6160-2b33-4d45-bddb-95f0085399f1/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/52242779-4e6a-426c-9a4c-48be7475bc84/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/b08ba77b-003a-44b5-8b31-be9c67c0f833/je/1100xxs.jpg",
  },
  {
    brand: "Land Rover",
    model: "Range Rover Sport SVR",
    year: 2022,
    bodyStyle: "Suv",
    engine: "5L, 575HP, supercharged V8",
    fuelType: "Gasoline",
    extColor: "Orange",
    intColor: "Black",
    price: "£80,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/6c4013f0-7baa-4ead-b0f2-646f8d2fbb94/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/efcfac8e-a91a-44d9-8e3b-5b293a49172f/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/30448d60-007a-46e3-925b-846522d31818/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/6c4013f0-7baa-4ead-b0f2-646f8d2fbb94/je/1100xxs.jpg",
  },
  {
    brand: "Land Rover",
    model: "Defender 110 awd",
    year: 2024,
    bodyStyle: "Suv",
    engine: "3L turbocharged 6-cylinder engine 395HP",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Orange",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/851dd796-6cd8-4534-8854-0720d89e67c9/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/4bd0a92e-67ba-43a1-9a8b-711c6d414dd1/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/89f3548c-dfff-42c3-8eb1-1f9c9970b0fb/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/51/3afa36f9-86cd-418a-b9f9-11472325bc4d/je/1100xxs.jpg",
  },

  //Lexus (14)
  {
    brand: "Lexus",
    model: "RC 200t",
    year: 2017,
    bodyStyle: "Coupe",
    engine: "1998cc, 4-cylinder, 16-valve",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Red",
    price: "£30,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/af7cdb97-0129-4878-9805-2d72d26478f4/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/1230ab73-0a76-478a-aaae-d23626ddbb97/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/bfd0a335-d5c6-4140-b242-dafdf31bc20b/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/d007ec1e-3e6d-4e19-8396-997da6f7dfda/je/1100xxs.jpg",
  },
  {
    brand: "Lexus",
    model: "GX 460",
    year: 2020,
    bodyStyle: "Suv",
    engine: "4.6L V8",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Cream",
    price: "£40,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/08/16/11/01/15/bfe1c778-c483-4826-bbdb-639a21f4c94e/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/08/16/11/01/15/e1f07e35-5aa2-41ac-8bc5-64327af2e8c4/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/08/16/11/01/15/be97328f-d78e-45e2-b44f-f88434fdacb5/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/08/16/11/01/15/d0ec7559-b4d8-49a0-9b0a-393ca35127da/je/1100xxs.jpg",
  },
  {
    brand: "Lexus",
    model: "LC",
    year: 2021,
    bodyStyle: "Coupe",
    engine: "5.0L V8 engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£70,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/e3bbafdc-b1cc-4363-9943-4a37f89a3183/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/ef9bfff6-9c5a-447a-97b6-4b6cfd69af11/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/2189cfda-0a4b-4c44-9b9a-9eccbe8ac685/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/f69cf93e-1920-460f-8fee-7a93a7921b80/je/1100xxs.jpg",
  },
  {
    brand: "Lexus",
    model: "GX 460",
    year: 2022,
    bodyStyle: "Suv",
    engine: "4.6L V8 engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£40,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/11dbd95e-4fb9-4d1a-bddf-e8a35a2778ac/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/5c8fecdc-7dde-4ce6-b908-9386c9dae8ed/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/00a439d4-8262-4bf9-8302-b9dd90311e5f/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/a26c9fc1-db92-43f2-ae4b-405e54175b06/je/1100xxs.jpg",
  },

  //Mercedes-Benz (15)##
  {
    brand: "Mercedes-Benz",
    model: "G63 AMG",
    year: 2024,
    bodyStyle: "Coupe",
    engine: "4.0L V8 biturbo engine / V8 Cylinder ",
    fuelType: "Hybrid",
    extColor: "Beige",
    intColor: "Orange",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/24f47c46-825c-492d-adb7-52b78cdeb5ae/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/75182391-d062-44c2-b893-04b7e0bd2146/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/67c87753-f448-489c-bced-64bb1ddccb7d/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/28a39841-ccdc-4544-89f4-f2967d514429/je/1100xxs.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "Sprinter rwd",
    year: 2024,
    bodyStyle: "Van",
    engine: "Intercooled turbo diesel I-4 engine ",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Burlywood",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/39/23c7423a-ba65-4b63-aadc-8db774f99bb6/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/39/69e12f26-c84a-4db8-ac15-2f2288bbf688/je/1100xxs.jpg ",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/38/abbe722b-9ffd-46fc-9b2f-8214df2b969f/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/12/16/17/39/9661a736-def4-442b-b21d-aef8721808f9/je/1100xxs.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "GLS 450 Sport",
    year: 2017,
    bodyStyle: "Suv",
    engine: "3.0L inline-6 turbo engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£52,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/6b4ab875-83d0-4a81-b3af-aa4ffa1e1755/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/ba2747d7-f9b0-412b-b52b-06358bc2fad9/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/9b1454e9-9ac3-4682-8205-d2b7bed6e6d7/je/1100xxs.jpg ",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/11/15/58/41/7f00a84a-1f5c-4a7e-87b1-fb44dd7c22da/je/1100xxs.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "G-Class G 550 Sport",
    year: 2019,
    bodyStyle: "Suv",
    engine: "Turbocharged 3.0L inline six ",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£100,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/f7d0d7b0-9f7f-4abb-ae73-d16c1dad4e38/je/900xxsxm.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/b87663ca-ea71-47ce-8194-a3de06403049/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/5a4a4fdc-269c-47a1-9e48-80e7fa85d7e3/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/1ab013a7-ab1e-4c0d-9625-1e7f721c7fe6/je/1100xxs.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "CLA 250 4MATIC",
    year: 2019,
    bodyStyle: "Coupe",
    engine: "208-HP, Turbocharged 2L 4-Cylinder",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/32080489-909f-4b25-83c4-e318ce0660be/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/7e321aae-0f9c-4f58-9f30-df5ed24fbb4e/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/a33a81c3-49f8-46aa-8578-8f2362ded14a/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/c0768914-a49f-494d-9142-b1b9d9d5b633/je/1100xxs.jpg",
  }, //75

  //Nissan (16) ##
  {
    brand: "Nissan",
    model: "Versa SV Sedan",
    year: 1994,
    bodyStyle: "Sedan",
    engine: "1.6L DOHC 16-valve 4-cylinder",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/0a29310a-26a2-41fd-9270-f290259c9122/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/6b96d229-71b4-411c-a134-59a85d67fdb4/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/4c600be5-9ebf-441b-84d2-938fbdc898d2/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/cdd4039f-15ac-48a7-92c9-6997f533f61e/je/1100xxs.jpg",
  },
  {
    brand: "Nissan",
    model: "370Z Coupe 2D",
    year: 2010,
    bodyStyle: "Coupe",
    engine: "3.7L V6 (VQ37VHR)",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/41f87835-653b-44ab-9cb9-6c0917ff354d/je/900xxsxm.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/2b2b6e70-82d2-4bb8-9720-73aa696714fe/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/33566cd6-55e0-4347-9edf-a4c30810c323/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/46d85f99-e436-46dd-82c6-4ae64c2ec00b/je/1100xxs.jpg",
  },
  {
    brand: "Nissan",
    model: "GT-R Premium Coupe",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "3.8L twin-turbo V6 (VR38DETT)",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Black",
    price: "£23,000",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/45d5ddc2-c43a-4fb0-9ba5-e469f73dfc48/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/3b1dbc28-9366-48eb-9e4d-36df0760cd84/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/13/8c15e6bb-5c31-47c9-b908-3ab250ac6b63/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/24/15/15/29/f8975b6b-518c-4875-818f-3b916ba93358/je/1100xxs.jpg",
  },
  {
    brand: "Nissan",
    model: "Skyline GT-R",
    year: 2023,
    bodyStyle: "Sedan",
    engine: "2.6L twin-turbo inline-6 (RB26DETT)",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/26/203cc757-d8bf-44f7-a1fd-29f8f4adf175/je/900xxsxm.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/27/80f9e3af-066b-4ac9-b994-f4c5794ccff4/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/27/e9f3d138-9c0d-4019-8e52-50959dc46fe2/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/27/989b6608-b453-416a-ae26-166f5704d126/je/1100xxs.jpg",
  },

  //Porsche (17)
  {
    brand: "Porsche",
    model: "911 Carrera",
    year: 2020,
    bodyStyle: "Coupé",
    engine: "3.8L 6-Cylinder",
    fuelType: "Gasoline",
    extColor: "Red",
    intColor: "Black",
    price: "£109,890",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/f49b2da5-d480-4f6c-8374-0a96a5f03a8a/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/79904526-95c2-47b0-8aa5-6b891b1ca39f/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/fb31335d-3e6f-4643-a69a-f70335f061a2/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/15/15/53/29/144ed55c-7bcd-45c3-8c7a-f39a78701295/je/1100xxs.jpg",
  },
  {
    brand: "Porsche",
    model: "Cayenne Turbo S",
    year: 2023,
    bodyStyle: "Coupé",
    engine: "4.0L Twin-Turbo V8 Engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/15/b8c4ffff-966a-428d-b316-1ab3d5c4fa89/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/11/643ab2ae-71e7-4dde-b132-194bf82335b3/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/11/4832b3ce-90f4-43bd-a1ce-fb97f9f73e81/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/14/d752ffe4-3ad7-4ee3-b8db-de955fb90f46/je/1100xxs.jpg",
  },
  {
    brand: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2023,
    bodyStyle: "Coupé",
    engine: "3.0L Turbocharged V6 Engine",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/14/827c1fb4-1a41-4ffa-9f81-2d0976c24a97/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/11/530d85c1-b45a-4e83-87c6-dfd155fbb83f/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/11/eceeb2ee-0275-4d40-b536-9dfa1dcc0fdd/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/12/55/11/e4959c73-722b-49de-8988-9ebd23ab8963/je/1100xxs.jpg",
  },
  {
    brand: "Porsche",
    model: "Macan",
    year: 2018,
    bodyStyle: "Suv",
    engine: "5.0L Twin-Turbo V8 Engine",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Red",
    price: "£35,900",
    condition: "Suv",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/19/11/23/13/26cd03d4-58bb-4351-b6b3-375dfb25ba44/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/19/11/23/13/97b5f875-3ee6-43be-ab2c-98f5c2911872/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/19/11/23/13/879db6d6-1b4d-49ee-92f1-e58fdd70a54d/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/19/11/23/13/9150de76-9808-4674-8055-a7ac4013aa50/je/1100xxs.jpg",
  },
  {
    brand: "Porsche",
    model: "Taycan",
    year: 2021,
    bodyStyle: "Sedan",
    engine: "2x AC synchronous electric motors",
    fuelType: "Gasoline",
    extColor: "Pink",
    intColor: "Beige",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/eeb6b385-c017-4218-a85d-cc87b1c1af37/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/3f767e2a-3409-4316-a78c-90cfcd6deb0e/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/15d6bff2-483d-46f4-9745-a3821dd2f79b/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/18/09/18/54/d7315878-3ea3-47e8-b736-3dfc2b814120/je/1100xxs.jpg",
  }, //85+

  //Rolls-Royce(18) ##
  {
    brand: "Rolls-Royce",
    model: "Phantom",
    year: 2021,
    bodyStyle: "Sedan",
    engine: "6.75L V12 Twin-Turbocharged",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Blue",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/52/c2e92bb2-86e8-4471-8c38-99002acc3025/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/3a6378b1-10ba-4491-bf72-7daf7b371ace/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/53/70493754-8454-4869-aeec-c21d38ca77f3/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/56/f855f164-971d-4687-8de8-32735b3efd24/je/2200xxs.jpg",
  },
  {
    brand: "Rolls-Royce",
    model: "Spectre",
    year: 2023,
    bodyStyle: "Coupe",
    engine: "6.75L V12 Twin-Turbocharged",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/ec1dbbaf-eeaf-4cbf-995b-7995a37cc8dc/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/4c975f96-ccf2-4d59-bc5c-5d71ade7ff63/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/17c90a0b-3638-4f32-ab90-10cc6cf2b78a/je/2200xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/05/16/15/28/9215c2d5-4d90-4db6-bd78-ddff740d518f/je/2200xxs.jpg",
  },
  {
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2020,
    bodyStyle: "Suv",
    engine: "6.75L V12 Twin-Turbocharged",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Orange",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/26/fbee1e11-5cc8-439e-b3b1-c769aaee2ceb/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/25/3b3b8c2d-7693-4d8f-8620-a3a6d7aaf7fd/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/26/a15fb101-dfea-4c0c-8468-dd43cd7f1706/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/07/15/10/27/1e5496e5-365d-4efd-8876-11becb1ed7e6/je/1100xxs.jpg",
  },
  {
    brand: "Rolls-Royce",
    model: "Dawn",
    year: 2022,
    bodyStyle: "Coupe",
    engine: "6.6L V12 Twin-Turbocharged",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Blue",
    price: "Price On Request",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/34363035-f57f-4eef-a997-5746650754dc/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/48da6733-f3ff-48ae-b588-aa4e2743e959/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/71b5f476-827c-4375-8057-97f19183210c/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/08/13/51/48/2fbd8c72-26be-479a-b5ad-618f46502857/je/1100xxs.jpg",
  },
  {
    brand: "Rolls-Royce",
    model: "Ghost",
    year: 2021,
    bodyStyle: "Sedan",
    engine: "6.6L V12 Twin-Turbocharged",
    fuelType: "Gasoline",
    extColor: "Silver",
    intColor: "Orange",
    price: "Price On Request",
    condition: "New",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/08/d48c41bf-19dc-4a45-b9ca-4d85a3848f6b/je/2200xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/08/1f388cb9-8abe-4668-8bfb-5f0acfed7e1b/je/2200xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/10/5f228e28-3e3f-4270-aba4-d31245d89af5/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/10/31/13/31/09/36c14794-e656-4043-a139-4e2e82eacb4e/je/1100xxs.jpg",
  }, //90+

  //Toyota(19) ##
  {
    brand: "Toyota",
    model: "Tundra",
    year: 2023,
    bodyStyle: "Truck",
    engine: "5.7L V8 ",
    fuelType: "Gasoline",
    extColor: "White",
    intColor: "Black",
    price: "£33,000",
    condition: "Used",
    mainImg:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/tundra/gallery/TUH_MY25_0004_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=2048",
    image1:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/tundra/gallery/TUH_MY25_0005_V0011.png?fmt=jpeg&fit=crop&qlt=90&wid=2048",
    image2:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/tundra/gallery/TUH_MY25_0010_V001_new.png?fmt=jpeg&fit=crop&qlt=90&wid=2048",
    image3:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/tundra/gallery/thumb/TUH_MY25_0011_V001_thumb.png?wid=380&hei=380&fmt=jpg&fit=crop",
  },
  {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
    bodyStyle: "Sedan",
    engine: "2.5L 4-cylinder",
    fuelType: "Gasoline",
    extColor: "Grey",
    intColor: "Red",
    price: "£45,000",
    condition: "New",
    mainImg:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/gallery/CAM_MY25_0029_V001_thumb.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image1:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/gallery/CAM_MY25_0028_V001_thumb.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image2:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/gallery/CAM_MY25_0011_V002_thumb.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image3:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/gallery/CAM_MY25_0030_V002_thumb.png?wid=380&hei=380&fmt=jpg&fit=crop",
  },
  {
    brand: "Toyota",
    model: "Corolla",
    year: 2025,
    bodyStyle: "Sedan",
    engine: "1.8L 4-cylinder",
    fuelType: "Gasoline",
    extColor: "Black",
    intColor: "Black",
    price: "£40,000",
    condition: "New",
    mainImg:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2025/corolla/fx/1870/2ye/18/3.png?fmt=png-alpha&wid=930&qlt=90",
    image1:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/mosaic/COR_MY25_0005_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=606&hei=284",
    image2:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/multi-tab/COR_MY25_0007_V001.png?fmt=jpeg&fit=crop&wid=1008",
    image3:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/corolla/mlp/modals/interior/COR_MY23_0010_V002.png?fmt=jpg&resMode=bisharp&qlt=100&hei=296",
  },
  {
    brand: "Toyota",
    model: "Supra",
    year: 2020,
    bodyStyle: "Coupe",
    engine: "3.0L turbocharged inline-six",
    fuelType: "Gasoline",
    extColor: "Yellow",
    intColor: "Black",
    price: "£50,000",
    condition: "Used",
    mainImg:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/51/bd975d1f-7648-4415-895c-6e11bbebd3e3/je/1100xxs.jpg",
    image1:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/51/52431566-149b-4036-a066-b33c29ea4f09/je/1100xxs.jpg",
    image2:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/51/55ce54d8-0666-4bda-b95c-b1fc119da208/je/1100xxs.jpg",
    image3:
      "https://img.jamesedition.com/listing_images/2024/11/14/16/45/51/a8612f9c-44f5-4f78-b24b-4d0b61a0be39/je/1100xxs.jpg",
  },
  {
    brand: "Toyota",
    model: "RAV4",
    year: 2024,
    bodyStyle: "Suv",
    engine: "2.4L 4-cylinder",
    fuelType: "Diesel",
    extColor: "Blue",
    intColor: "Black",
    price: "£27,000",
    condition: "New",
    mainImg:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/rav4/gallery/thumb/RHV_MY22_0005_V002_1x1_7MYDcPpp8kocuP.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image1:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/rav4/gallery/thumb/RHV_MY22_0008_V001_1x1_t28UJJpkx2.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image2:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/rav4/gallery/thumb/RHV_MY22_0014_V001_ZtmpBNRssRIp0KZJlZxZjd.png?wid=380&hei=380&fmt=jpg&fit=crop",
    image3:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2024/rav4/gallery/thumb/RAV_MY19_0050_V001_UYDE6eJR45gxcb.png?wid=380&hei=380&fmt=jpg&fit=crop",
  }, //90+
];

const carList = document.getElementById("carList");
const searchField = document.getElementById("searchField");
const carType = document.getElementById("carType");
const brandSelect = document.getElementById("brandSelect");
const extColor = document.getElementById("extColor");
const intColor = document.getElementById("intColor");
const minYear = document.getElementById("minYear");
const maxYear = document.getElementById("maxYear");
const addToCartButton = document.getElementById("addToCartButton");
const carsPerPage = 15;
let currentPage = 1;
// Global variable to store filtered cars
let filteredCars = cars;

function sortCars() {
  const sortOrder = document.getElementById("sortOrder").value;

  if (sortOrder === "lowest") {
    filteredCars.sort((a, b) => parsePrice(a.price) - parsePrice(b.price)); // Ascending order
  } else if (sortOrder === "highest") {
    filteredCars.sort((a, b) => parsePrice(b.price) - parsePrice(a.price)); // Descending order
  } else {
    // Default order (optional, depending on your use case)
    filteredCars = cars; // Reset to the original car list
  }

  // Reset to page 1 and display sorted results
  currentPage = 1;
  displayCars(currentPage);
  setupPagination();
}

// Helper function to parse price from string to number
function parsePrice(priceString) {
  if (priceString.toLowerCase() === "price on request") {
    return Infinity; // Use Infinity to push these to the end when sorting ascending
  }

  return Number(priceString.replace(/[£,]/g, ""));
}

// Function for search bar
function searchCars() {
  const searchText = searchField.value.toLowerCase();
  carType.innerHTML = `        <option value="" selected>All Car Type</option>
        <option value="Coupe">Coupe</option>
        <option value="Sedan">Sedan</option>
        <option value="Suv">Suv</option>
        <option value="Truck">Truck</option>`;

  brandSelect.innerHTML = `
<option value="">All Car Brand</option>
        <option value="Acura">Acura </option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Bentley">Bentley</option>
        <option value="BMW">BMW</option>
        <option value="Cadillac">Cadillac</option>
        <option value="Dodge">Dodge</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
        <option value="Jeep">Jeep</option>
        <option value="KIA">KIA</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Lexus">Lexus</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="Nissan">Nissan</option>
        <option value="Porsche">Porsche</option>
        <option value="Rolls-Royce">Rolls-Royce</option>
        <option value="Toyota">Toyota</option>
        `;
  intColor.innerHTML = `     
        <option value="">Any</option>  
        <option value="black">Black</option>
        <option value="Red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="yhite">White</option>
        <option value="orange">Orange</option>
        <option value="beige">Beige</option>
        <option value="gold">Gold</option>
        <option value="grey">Grey</option>
        <option value="brown">Brown</option>
        <option value="cream">Cream</option>
        <option value="burlywood">Burlywood</option>
        <option value="blue">Blue</option>`;

  extColor.innerHTML = `       
        <option value="">Any</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="grey">Grey</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="silver">Silver</option>
        <option value="Beige">Beige</option>
        <option value="goldenbrown">Golden brown</option>
        <option value="darkblue">Dark Blue</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>`;
  minYear.innerHTML = `<option selected value="">Min</option>
      <option value="1994">1994</option>
      <option value="1998">1998</option>
      <option value="2003">2003</option>
      <option value="2004">2004</option>
      <option value="2007">2007</option>
      <option value="2010">2010</option>
      <option value="2011">2011</option>
      <option value="2012">2012</option>
      <option value="2013">2013</option>
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>`;

  maxYear.innerHTML = `
            <option value="">Max</option>
            <option value="1994">1994</option>
            <option value="1998">1998</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2007">2007</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
      `;

  // Filter cars based on search text
  filteredCars = cars.filter((car) => {
    const combinedInfo = `${car.brand} ${car.model}`
      .toLowerCase()
      .replace(/\s+/g, "");
    const formattedSearchText = searchText.toLowerCase().replace(/\s+/g, "");
    return (
      car.brand.toLowerCase().includes(formattedSearchText) ||
      car.model.toLowerCase().includes(formattedSearchText) ||
      combinedInfo.includes(formattedSearchText)
    );
  });

  // Reset to page 1 and display results
  displayCars(currentPage);
  currentPage = 1;

  setupPagination();
}

let filterCount = 0;
// Function for side filters
function filterByBrandAndTypeYear() {

  filterCount = 0;

  const brandSelectSearch = brandSelect.value.toLowerCase();
  const carTypeSearch = carType.value.toLowerCase();
  const intColorSearch = intColor.value.toLowerCase();
  const extColorSearch = extColor.value.toLowerCase();
  const minimum = parseInt(minYear.value);
  const maximum = parseInt(maxYear.value);

  // document.getElementById("brandName").innerHTML = "All Brand";
  // document.getElementById("brandType").innerHTML = "All Car Type";
  // Apply filters only if brand or type is selected

  if (brandSelectSearch) filterCount++;
  if (carTypeSearch) filterCount++;
  if (intColorSearch) filterCount++;
  if (extColorSearch) filterCount++;
  if (!isNaN(minimum)) filterCount++;
  if (!isNaN(maximum)) filterCount++;

  filteredCars = cars.filter((car) => {
    const matchesBrand = brandSelectSearch
      ? car.brand.toLowerCase().includes(brandSelectSearch)
      : true;

    const matchesCarType = carTypeSearch
      ? car.bodyStyle.toLowerCase().includes(carTypeSearch)
      : true;
    // const disbrand = brandSelect.value;
    // if (disbrand) {
    //   document.getElementById(
    //     "brandName"
    //   ).innerHTML = `${disbrand.toUpperCase()}`;
    // } else {
    //   document.getElementById("brandName").innerHTML = "All Brand";
    // }

    // const distype = carType.value;
    // if (distype) {
    //   document.getElementById(
    //     "brandType"
    //   ).innerHTML = `${distype.toUpperCase()}`;
    // } else {
    //   document.getElementById("brandType").innerHTML = "All Car Type";
    // }
    const matchesIntColor = intColorSearch
      ? car.intColor.toLowerCase().includes(intColorSearch)
      : true;

    const matchesExtColor = extColorSearch
      ? car.extColor.toLowerCase().includes(extColorSearch)
      : true;

    document.getElementById("filterCount").textContent = `${filterCount}`;

    const matchedLessYear = minimum ? car.year >= minimum : true;
    const matchedMaxYear = maximum ? car.year <= maximum : true;

    return (
      matchesBrand &&
      matchesCarType &&
      matchesIntColor &&
      matchesExtColor &&
      matchedLessYear &&
      matchedMaxYear
    );
  });

  // Reset to page 1 and display results
  currentPage = 1;
  displayCars(currentPage);
  setupPagination();
}

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  searchCars();
});
searchField.addEventListener("input", () => {
  setTimeout(() => {
    searchCars();
  }, 800);
});

function clearFilters() {
  carType.innerHTML = `        <option value="" selected>All Car Type</option>
  <option value="Coupe">Coupe</option>
  <option value="Sedan">Sedan</option>
  <option value="Suv">Suv</option>
  <option value="Truck">Truck</option>`;

  brandSelect.innerHTML = `
<option value="">All Car Brand</option>
  <option value="Acura">Acura </option>
  <option value="Aston Martin">Aston Martin</option>
  <option value="Bentley">Bentley</option>
  <option value="BMW">BMW</option>
  <option value="Cadillac">Cadillac</option>
  <option value="Dodge">Dodge</option>
  <option value="Ferrari">Ferrari</option>
  <option value="Ford">Ford</option>
  <option value="Honda">Honda</option>
  <option value="Jeep">Jeep</option>
  <option value="KIA">KIA</option>
  <option value="Lamborghini">Lamborghini</option>
  <option value="Land Rover">Land Rover</option>
  <option value="Lexus">Lexus</option>
  <option value="Mercedes-Benz">Mercedes-Benz</option>
  <option value="Nissan">Nissan</option>
  <option value="Porsche">Porsche</option>
  <option value="Rolls-Royce">Rolls-Royce</option>
  <option value="Toyota">Toyota</option>
  `;
  intColor.innerHTML = `     
  <option value="">Any</option>  
  <option value="black">Black</option>
  <option value="Red">Red</option>
  <option value="yellow">Yellow</option>
  <option value="yhite">White</option>
  <option value="orange">Orange</option>
  <option value="beige">Beige</option>
  <option value="gold">Gold</option>
  <option value="grey">Grey</option>
  <option value="brown">Brown</option>
  <option value="cream">Cream</option>
  <option value="burlywood">Burlywood</option>
  <option value="blue">Blue</option>`;

  extColor.innerHTML = `       
  <option value="">Any</option>
  <option value="black">Black</option>
  <option value="white">White</option>
  <option value="grey">Grey</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="red">Red</option>
  <option value="silver">Silver</option>
  <option value="Beige">Beige</option>
  <option value="goldenbrown">Golden brown</option>
  <option value="darkblue">Dark Blue</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>`;
  minYear.innerHTML = `<option selected value="">Min</option>
<option value="1994">1994</option>
<option value="1998">1998</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2007">2007</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
<option value="2024">2024</option>
<option value="2025">2025</option>`;

  maxYear.innerHTML = `
<option value="">Max</option>
<option value="1994">1994</option>
<option value="1998">1998</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2007">2007</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
<option value="2024">2024</option>
<option value="2025">2025</option>
`;
  searchField.value = "";
  // Reset to page 1 and display results
  filteredCars = cars;
  currentPage = 1;
  filterCount = 0;
  document.getElementById("filterCount").textContent = `${filterCount}`;
  displayCars(currentPage);
  setupPagination();
}

document.querySelectorAll(".clearFilters").forEach((clF) => {
  clF.addEventListener("click", clearFilters);
});
brandSelect.addEventListener("input", filterByBrandAndTypeYear);
carType.addEventListener("input", filterByBrandAndTypeYear);
intColor.addEventListener("input", filterByBrandAndTypeYear);
extColor.addEventListener("input", filterByBrandAndTypeYear);
minYear.addEventListener("input", filterByBrandAndTypeYear);
maxYear.addEventListener("input", filterByBrandAndTypeYear);

//displays cars
function displayCars(page) {
  carList.innerHTML = "";
  const startIndex = (page - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  carList.innerHTML = "";
  if (carsToDisplay.length === 0) {

    carList.innerHTML = `
    <div class="error404">
      <div><ul><li><a href="/index.html">Go Back to Home</a></li><li><a href="/allCars.html">🔄 Refresh the page</a></li></div>
    <p class="no-cars-message"><i class="fa-solid fa-face-sad-tear"></i> Nothing to see here—just a whole lot of empty space!! 🤷‍♂️</p>
      <img src="/assets/images/electrocuted-caveman-animation-404-error-page.gif" class="gif404" alt="">
      </div>`;
    return;
  }

  carsToDisplay.forEach((car, index) => {
    const globalIndex = startIndex + index;
    const location = checkLocation(index);
    car.id = car.brand + "-" + car.model + "-" + car.year;
    const carItem = document.createElement("div");
    carItem.classList.add("swiper-slide", "car-item");
    carItem.innerHTML = `
         <img src="${car.mainImg}" alt="${car.brand} ${car.model}">
       <h4 class="price">${car.price}</h4>
        <h5>${car.year} ${car.brand}  ${car.model}</h3>
        
        
        <p class="bDS">${location}</p>
        `;

    // console.log(parseInt(car.price.replace(/[, £]/g, ""), 10) || 0);
    setTimeout(() => {
      carItem.classList.add("show"); // Trigger the animation
    }, index * 100);
    carList.appendChild(carItem);

    // Add click event to show car details<modal>
    carItem.addEventListener("click", () => {
      console.log("Car object:", car);
      console.log("Index value:", globalIndex);

      const brandName = document.querySelectorAll(".modalTitle");
      brandName.forEach((ele) => {
        ele.textContent = `${car.brand} ${car.model}`;
      });
      document.getElementById('addToCartButton').style.display = 'inline ';
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
      const modal =  new bootstrap.Modal(
        document.getElementById("staticBackdrop")
      );
      modal.show();
      // document.getElementById("floatingTextarea").innerHTML =
      //   "I am making enquiry for the " + car.model;

      // Save the selected car details in the button's dataset for adding to cart
      addToCartButton.dataset.index = globalIndex;
    });
  });
}

//image Switch
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
      const modal = bootstrap.Modal.getInstance( document.getElementById("staticBackdrop"));
      modal.hide();
    }, 500);
  }
}

// Close modal if user clicks outside of modal content
// window.addEventListener("click", (e) => {
//   if (e.target === document.getElementById("modal")) {
//     closeModal();
//   }
// });

// function closeModal() {
//   document.getElementById("modal").style.display = "none";
//   document.body.style.overflow = "auto";
// }
// Close modal event using close button
// document.querySelector(".close").addEventListener("click", () => {
//   closeModal();
// });

//Pagination
function setupPagination() {
  const totalPages = Math.ceil(cars.length / carsPerPage);
  const paginationContainer = document.getElementById("pagination");

  // Clear existing pagination buttons
  paginationContainer.innerHTML = "";

  if (totalPages === 0) {
    paginationContainer.style.display = "none"; // Hide pagination
    return;
  }
  paginationContainer.style.display = "flex";
  
  const previousButton = document.createElement("button");
  previousButton.textContent = "Back";
  previousButton.classList.add("previousButton");
  previousButton.disabled = currentPage === 1;
  previousButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayCars(currentPage);
      updateActiveButton();
      setupPagination();
    }
  });

  //Next Button
  const nextButton = document.createElement("button");
  nextButton.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
  nextButton.classList.add("nextButton");
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayCars(currentPage);
      updateActiveButton();
      setupPagination();
    }
  });

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;

    button.className = "pagination-btn";
    if (i === currentPage) button.classList.add("active");
    button.addEventListener("click", () => {
      currentPage = i;
      displayCars(currentPage);
      updateActiveButton();
      updateButtonStates(previousButton, nextButton, totalPages); // Update buttons when clicking a number
    });

    paginationContainer.appendChild(button);
  }
  paginationContainer.prepend(previousButton);
  paginationContainer.appendChild(nextButton);
}

function updateButtonStates(previousButton, nextButton, totalPages) {
  previousButton.disabled = currentPage === 1; // Disable Previous on first page
  nextButton.disabled = currentPage === totalPages; // Disable Next on last page
}

function updateActiveButton() {
  document
    .querySelectorAll(".pagination-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.pagination-btn:nth-child(${currentPage + 1})`)
    ?.classList.add("active"); // Adjust based on button positions
}

// Display all cars initially
displayCars(currentPage);
setupPagination();

//Brand from home page
const params = new URLSearchParams(window.location.search);
const searchInput = params.get("searchInput");

// Set the search bar value and apply the filter
if (searchInput) {
  searchField.value = decodeURIComponent(searchInput);
  searchCars();
}

//CART
//CART

//CART

addToCartButton.addEventListener("click", () => {
  const selectedIndex = parseInt(addToCartButton.dataset.index, 10);

  const selectedCar = filteredCars[selectedIndex] || cars[selectedIndex];


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

    const modal =   bootstrap.Modal.getInstance(
      document.getElementById("staticBackdrop")
    );
    modal.hide();

  }
});

// Function to update the cart count in the header
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartCount = document.querySelectorAll(".cartCount");
  cartCount.forEach((cartcunt) => {
    cartcunt.textContent = cartItems.length;
  });
}


updateCartCount();
const cartContainer = document.getElementById("cartContainer");


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
    
    const itemImage = cartItem.querySelector("img");
    const itemName = cartItem.querySelector("h5");


    [itemName, itemImage].forEach( kl =>{
      kl.addEventListener('click', ()=>{

        const brandName = document.querySelectorAll(".modalTitle");
        brandName.forEach((ele) => {
          ele.textContent = `${item.brand} ${item.model}`;
        })
      document.getElementById("modalLocation").textContent = loca;
      document.getElementById("year").textContent = item.year;
      document.getElementById("modalImage").src = item.mainImg;
      document.getElementById("modalImage").alt = item.model;
      document.getElementById('addToCartButton').style.display = 'none';
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
    // document.querySelector('.proceed').addEventListener('click', ()=>{
    //   const modal = new bootstrap.Modal(document.getElementById('proceedCheckout'))
    //   modal.show();
    //   proceed();
    // });

    
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
    <span class="summaryItemName">${item.brand} ${item.model}</span><span class="text-light">£${numericPrice.toLocaleString()}</span>`;

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
    deliveryEmail.classList.remove('is-invalid')
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
const signAgree = document.getElementById("agreeSign").checked;

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

// Initialize Auth State on Page Load
document.addEventListener("DOMContentLoaded", updateAuthButton);

document.getElementById("authButton").addEventListener("click", function () {
  console.log("Sign-Up Button clicked!");
  // Additional logic here
});

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

console.log(document.getElementById("sign")); // Should log the first modal
console.log(document.getElementById("log2")); // Should log the second modal

