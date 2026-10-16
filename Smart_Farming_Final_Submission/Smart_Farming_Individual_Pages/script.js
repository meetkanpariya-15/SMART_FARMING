// Smart Farming JavaScript
// Uses basic JavaScript, DOM and Events concepts.

// Array of objects
const cropData = [
  {
    name: "Wheat",
    value: "wheat",
    seed: "Choose certified, clean wheat seed suited to the local season. Sow in a well-prepared, level seedbed at an even depth. In many Indian regions, wheat is a cool-season crop; avoid waterlogging and use locally recommended sowing dates.",
    fertilizer:
      "Before sowing, use a soil test to guide nitrogen, phosphorus and potassium needs. Apply nutrients in the recommended split schedule rather than adding extra fertilizer at once. Irrigation and fertilizer timing should follow local agricultural advice.",
    technique:
      "Prepare a fine, level seedbed and sow in straight rows with locally recommended spacing. Keep the field free of early weeds and irrigate at critical growth stages without waterlogging.",
    prediction:
      "Wheat generally prefers cool growing weather and a relatively dry period as grain matures.",
    price: 28,
  },
  {
    name: "Rice",
    value: "rice",
    seed: "Select a locally recommended rice variety based on season, water availability and field conditions. Use healthy seed and follow local guidance for direct sowing or nursery transplanting. Maintain reliable water management, especially during establishment.",
    fertilizer:
      "Use a soil test and local rice recommendations to plan nitrogen, phosphorus and potassium. Split nitrogen applications during growth and avoid applying fertilizer immediately before heavy rain or uncontrolled drainage.",
    technique:
      "Level the field carefully and choose direct seeding or transplanting according to local practice. Maintain suitable plant spacing, control weeds early and manage water efficiently rather than keeping unnecessary standing water.",
    prediction:
      "Rice commonly needs warm conditions and dependable moisture; variety and water system strongly affect suitability.",
    price: 32,
  },
  {
    name: "Cotton",
    value: "cotton",
    seed: "Choose certified cotton seed appropriate for the region and approved growing practices. Sow when the soil is warm and moisture is adequate, and avoid poorly drained fields. Follow local spacing and seed-rate recommendations for the selected variety.",
    fertilizer:
      "Base fertilizer on a soil test and the crop's growth stage. Balance nitrogen with phosphorus, potassium and other nutrients where indicated; excess nitrogen can encourage leafy growth and delay maturity.",
    technique:
      "Prepare well-drained rows and maintain the recommended spacing for the variety. Monitor weeds, sucking pests and bollworms regularly, and use integrated pest management with locally approved measures.",
    prediction:
      "Cotton generally suits warm, frost-free conditions and benefits from well-drained soil and appropriately timed moisture.",
    price: 70,
  },
  {
    name: "Groundnut",
    value: "peanut",
    seed: "Use healthy, undamaged groundnut kernels of a variety recommended for the area. Plant in warm soil with good drainage and enough moisture for germination. Avoid sowing into waterlogged or very dry soil.",
    fertilizer:
      "Use soil-test guidance for nutrients, with particular attention to calcium and sulphur where local recommendations indicate a need. Do not apply lime or micronutrients without considering soil conditions and extension advice.",
    technique:
      "Choose loose, well-drained soil so pegs can enter the ground easily. Keep spacing uniform, control early weeds and avoid disturbing the soil around flowering and pegging.",
    prediction:
      "Groundnut usually performs best in warm weather, loose well-drained soil and moderate, well-timed moisture.",
    price: 55,
  },
  {
    name: "Vegetables",
    value: "vegetables",
    seed: "Select the exact vegetable and variety for the current season, local temperature and market demand. Use fresh, reliable seed and raise seedlings in a clean nursery when appropriate. The best sowing method differs between leafy vegetables, roots and fruiting crops.",
    fertilizer:
      "Vegetable nutrient needs vary greatly by crop. Add mature compost where suitable and use soil-test-based fertilizer; avoid excessive nitrogen, which can produce leafy growth at the expense of fruit or root yield.",
    technique:
      "Prepare well-drained beds, follow crop-specific spacing and plan irrigation before sowing. Rotate crop families, mulch where appropriate and inspect plants regularly for pests and disease.",
    prediction:
      "Vegetable suitability depends on the specific vegetable, season, temperature, soil drainage and water availability.",
    price: 40,
  },
  {
    name: "Maize",
    value: "corn",
    seed: "Choose a certified maize hybrid or variety suitable for the season and intended use. Sow into moist, well-drained soil at a consistent depth and maintain recommended row and plant spacing for good pollination.",
    fertilizer:
      "Use a soil test to determine nutrient needs. Maize often benefits from split nitrogen application during early growth, while phosphorus and potassium should follow soil-test and local recommendations.",
    technique:
      "Sow in rows with enough space for sunlight and airflow. Keep weeds under control during early growth and provide moisture around flowering and grain filling, avoiding waterlogging.",
    prediction:
      "Maize generally prefers warm weather, fertile well-drained soil and adequate moisture, especially around flowering.",
    price: 24,
  },
  {
    name: "Chickpea",
    value: "chana",
    seed: "Use clean, disease-free chickpea seed of a locally adapted variety. Sow in the recommended cool season into well-drained soil; avoid fields with standing water and follow local seed treatment guidance where applicable.",
    fertilizer:
      "Follow soil-test advice and local pulse-crop recommendations. Chickpea can benefit from suitable phosphorus and sulphur levels; avoid excessive nitrogen and use inoculants only as recommended for the crop and region.",
    technique:
      "Prepare a firm, well-drained seedbed and maintain crop-specific spacing. Manage weeds early and avoid excessive irrigation, particularly during flowering and pod development.",
    prediction:
      "Chickpea generally prefers cooler, relatively dry growing conditions and does poorly in waterlogged soil.",
    price: 60,
  },
  {
    name: "Soybean",
    value: "soybean",
    seed: "Choose a locally recommended soybean variety and healthy seed with good germination. Sow after dependable seasonal rain into warm, moist soil, using recommended spacing and appropriate inoculation guidance where available.",
    fertilizer:
      "Use a soil test to guide phosphorus, potassium, sulphur and other nutrients. Avoid unnecessary nitrogen application and follow local recommendations for seed inoculants and micronutrients.",
    technique:
      "Use well-drained fields and sow at uniform depth. Control weeds early, ensure good drainage during heavy rain and rotate crops to help manage pests and soil health.",
    prediction:
      "Soybean generally needs warm conditions, adequate moisture during establishment and good drainage during the rainy season.",
    price: 45,
  },
  {
    name: "Pearl Millet",
    value: "pearlmillet",
    seed: "Select pearl millet seed suited to local rainfall and the growing season. Sow at the onset of dependable rains into a prepared seedbed, at the locally recommended depth and spacing.",
    fertilizer:
      "Use soil-test and local extension guidance for fertilizer rates. Apply nutrients according to soil fertility and expected rainfall; avoid applying fertilizer just before heavy rain that could wash it away.",
    technique:
      "Prepare rows that support uniform emergence and make thinning easier if needed. Control weeds early and use moisture-conservation practices suitable for the farm's rainfall conditions.",
    prediction:
      "Pearl millet is relatively drought tolerant once established and is often suited to warm, semi-arid regions, but still needs moisture for germination.",
    price: 30,
  },
  {
    name: "Tomato",
    value: "tomato",
    seed: "Choose a tomato variety suitable for the season and local disease pressure. Raise healthy seedlings in a clean nursery and transplant sturdy plants after they have developed several true leaves, following local spacing advice.",
    fertilizer:
      "Base nutrient application on a soil test and crop stage. Tomatoes need balanced nutrition; avoid excess nitrogen and follow local guidance for potassium and calcium management, especially during fruit development.",
    technique:
      "Use well-drained beds, consistent watering and mulch where practical. Provide staking or support for suitable varieties, maintain airflow and monitor for pests and diseases without wetting foliage unnecessarily.",
    prediction:
      "Tomato needs suitable moderate-to-warm conditions, steady moisture and good drainage; extreme heat can affect flowering and fruit set.",
    price: 35,
  },
  { name: "Onion", value: "onion", seed: "Choose a locally recommended onion variety and healthy planting material. Use a well-drained nursery or sets as recommended for the season.", fertilizer: "Use soil-test guidance and local onion recommendations. Avoid excess nitrogen late in growth and follow safe application rates.", technique: "Use well-drained soil, suitable spacing and steady moisture. Keep weeds under control and cure bulbs properly after harvest.", prediction: "Onion needs suitable temperatures, good drainage and consistent early growth conditions.", price: 25 },
  { name: "Potato", value: "potato", seed: "Use healthy certified seed potatoes suited to the local season. Avoid damaged or diseased tubers.", fertilizer: "Base fertilizer on a soil test and local potato recommendations. Avoid excess nitrogen and follow recommended timing.", technique: "Plant in loose, well-drained soil, earth up plants as needed and avoid waterlogging.", prediction: "Potato generally prefers cool conditions and loose, well-drained soil.", price: 22 },
  { name: "Garlic", value: "garlic", seed: "Choose healthy, disease-free cloves from a locally suitable variety.", fertilizer: "Use compost and fertilizer according to soil-test results and local guidance.", technique: "Plant cloves in well-drained soil at recommended spacing. Control weeds and reduce watering as bulbs mature.", prediction: "Garlic usually performs best in mild-to-cool conditions with good drainage.", price: 80 },
  { name: "Mango", value: "mango", seed: "Choose a healthy grafted sapling of a variety suited to the local climate.", fertilizer: "Apply manure and fertilizer based on tree age, soil testing and local horticulture advice.", technique: "Plant in a sunny, well-drained location, allow enough space and prune only as recommended.", prediction: "Mango suits warm climates and needs protection from severe frost and waterlogging.", price: 60 },
  { name: "Banana", value: "banana", seed: "Use healthy, disease-free suckers or certified tissue-culture plants.", fertilizer: "Banana has high nutrient needs; follow soil-test and local horticulture recommendations for split applications.", technique: "Provide good drainage, regular moisture, suitable spacing and support where strong winds are common.", prediction: "Banana generally needs warm, humid conditions, steady moisture and fertile, well-drained soil.", price: 18 },
];

function findCrop(value) {
  for (let crop of cropData) {
    if (crop.value === value) {
      return crop;
    }
  }
  return null;
}

// WEATHER PAGE - live weather using the free Open-Meteo geocoding and forecast APIs.
// No API key is required. The user can type a city or allow browser location access.
const weatherLocationInput = document.getElementById("weatherLocationInput");
const weatherBtn = document.getElementById("weatherBtn");
let currentWeather = null;

function showWeatherMessage(message, isError) {
  const messageBox = document.getElementById("weatherMessage");
  if (messageBox) {
    messageBox.textContent = message;
    messageBox.className = isError ? "mt-3 text-danger" : "mt-3 text-success";
  }
}

function displayLiveWeather(weather, placeName) {
  currentWeather = weather;
  document.getElementById("temperature").textContent =
    Math.round(weather.temperature) + "°C";
  document.getElementById("rainfall").textContent = weather.rainChance + "%";
  document.getElementById("humidity").textContent = weather.humidity + "%";
  showWeatherMessage("Live weather loaded for " + placeName + ".", false);
}

async function fetchWeatherForCoordinates(latitude, longitude, placeName) {
  showWeatherMessage("Fetching live weather...", false);
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      latitude +
      "&longitude=" +
      longitude +
      "&current=temperature_2m,relative_humidity_2m,precipitation" +
      "&hourly=precipitation_probability" +
      "&forecast_days=1&timezone=auto";
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("Weather service is unavailable right now.");
    const data = await response.json();
    if (!data.current) throw new Error("No current weather data was returned.");

    let rainChance = 0;
    if (
      data.hourly &&
      data.hourly.precipitation_probability &&
      data.hourly.time
    ) {
      const now = new Date();
      let closestIndex = 0;
      let smallestDifference = Infinity;
      for (let i = 0; i < data.hourly.time.length; i++) {
        const difference = Math.abs(
          new Date(data.hourly.time[i]).getTime() - now.getTime(),
        );
        if (difference < smallestDifference) {
          smallestDifference = difference;
          closestIndex = i;
        }
      }
      rainChance = data.hourly.precipitation_probability[closestIndex] || 0;
    }

    displayLiveWeather(
      {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        rainChance: rainChance,
      },
      placeName,
    );
  } catch (error) {
    showWeatherMessage(
      error.message + " Check your internet connection and try again.",
      true,
    );
  }
}

async function loadWeatherForPlace() {
  const place = weatherLocationInput.value.trim();
  if (place === "") {
    showWeatherMessage("Please enter a city, town or village first.", true);
    weatherLocationInput.focus();
    return;
  }
  showWeatherMessage("Finding " + place + "...", false);
  try {
    const response = await fetch(
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
        encodeURIComponent(place) +
        "&count=1&language=en&format=json",
    );
    if (!response.ok)
      throw new Error("Location search is unavailable right now.");
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      showWeatherMessage(
        "Location not found. Try a nearby city or a more specific name.",
        true,
      );
      return;
    }
    const result = data.results[0];
    const fullName = [result.name, result.admin1, result.country]
      .filter(Boolean)
      .join(", ");
    weatherLocationInput.value = fullName;
    await fetchWeatherForCoordinates(
      result.latitude,
      result.longitude,
      fullName,
    );
  } catch (error) {
    showWeatherMessage(
      error.message + " Check your internet connection and try again.",
      true,
    );
  }
}

if (weatherBtn) {
  weatherBtn.addEventListener("click", loadWeatherForPlace);
}
if (weatherLocationInput) {
  weatherLocationInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") loadWeatherForPlace();
  });
  weatherLocationInput.addEventListener("change", loadWeatherForPlace);
}
const predictBtn = document.getElementById("predictBtn");
if (predictBtn) {
  predictBtn.addEventListener("click", function () {
    const crop = findCrop(document.getElementById("weatherCrop").value);
    if (!currentWeather) {
      document.getElementById("suitability").textContent = "--";
      document.getElementById("predictionText").textContent =
        "Load live weather for a location before predicting crop suitability.";
      return;
    }
    let result = "Check conditions";
    if (crop.value === "wheat" && currentWeather.temperature <= 30) {
      result = "Good";
    } else if (crop.value === "rice" && currentWeather.rainChance >= 50) {
      result = "Good";
    } else if (crop.value === "cotton" && currentWeather.temperature >= 25) {
      result = "Good";
    } else if (currentWeather.humidity >= 50) {
      result = "Moderate";
    }
    document.getElementById("suitability").textContent = result;
    document.getElementById("predictionText").textContent =
      crop.prediction +
      " Current conditions: " +
      Math.round(currentWeather.temperature) +
      "°C, " +
      currentWeather.humidity +
      "% humidity and " +
      currentWeather.rainChance +
      "% rain chance. " +
      "This is a basic educational estimate, not professional agricultural advice.";
  });
}

// SEED PAGE
const seedBtn = document.getElementById("seedBtn");

if (seedBtn) {
  seedBtn.addEventListener("click", function () {
    let location = document.getElementById("seedLocation").value;
    let crop = findCrop(document.getElementById("seedCrop").value);

    if (location === "") {
      location = "your location";
    }

    document.getElementById("seedResult").textContent =
      "Seed planting suggestion for " + crop.name + " in " + location + "\n\n" +
      "1. Choose healthy seeds or planting material suited to your area.\n" +
      "2. Prepare clean, well-drained soil before planting.\n" +
      "3. Plant at the depth and spacing recommended for the crop.\n" +
      "4. Water gently and keep the soil moist without flooding it.\n" +
      "5. Check the plants regularly and remove weeds.\n" +
      "6. Watch for pests or disease and seek local farming advice when needed.";
  });
}

// FERTILIZER PAGE
const fertilizerBtn = document.getElementById("fertilizerBtn");

if (fertilizerBtn) {
  fertilizerBtn.addEventListener("click", function () {
    const cropName = document.getElementById("fertilizerCrop").selectedOptions[0].text;
    document.getElementById("fertilizerResult").textContent =
      "General fertilizer suggestion for " + cropName + ":\n\n" +
      "1. Test the soil to understand which nutrients it needs.\n" +
      "2. Add well-rotted compost to improve the soil.\n" +
      "3. Choose fertilizer suited to the crop and soil test results.\n" +
      "4. Follow the amount and timing recommended on the label.\n" +
      "5. Water after applying fertilizer when appropriate.\n" +
      "6. Avoid using too much fertilizer, as it can harm plants and soil.\n\n" +
      "Ask a local agriculture expert for advice specific to your farm.";
  });
}
// SCHEMES PAGE
let schemeButtons = document.getElementsByClassName("schemeBtn");

for (let button of schemeButtons) {
  button.addEventListener("click", function () {
    let name = this.getAttribute("data-name");

    document.getElementById("schemeResult").textContent =
      name +
      ": Check the latest official eligibility, documents " +
      "and application process before applying.";
  });
}

// PRICE PAGE
const priceBtn = document.getElementById("priceBtn");

if (priceBtn) {
  priceBtn.addEventListener("click", function () {
    let crop = findCrop(document.getElementById("priceCrop").value);
    let quantity = Number(document.getElementById("quantity").value);

    if (quantity <= 0 || isNaN(quantity)) {
      document.getElementById("priceNote").textContent =
        "Please enter a valid quantity.";
      return;
    }

    let total = crop.price * quantity;

    document.getElementById("priceDisplay").textContent =
      "₹" + crop.price + " / kg";

    document.getElementById("totalValue").textContent = "₹" + total;

    document.getElementById("priceNote").textContent =
      "Estimated value for " + quantity + " kg of " + crop.name + ".";
  });
}

// FARM PLANNER PAGE
const planBtn = document.getElementById("planBtn");

if (planBtn) {
  planBtn.addEventListener("click", function () {
    let location = document.getElementById("planLocation").value;
    let crop = findCrop(document.getElementById("planCrop").value);

    if (location === "") {
      location = "your location";
    }

    let result =
      "Farming Plan for " +
      crop.name +
      " in " +
      location +
      "\n\n" +
      "1. Seed selection: " +
      crop.seed +
      "\n\n" +
      "2. Fertilizer: " +
      crop.fertilizer +
      "\n\n" +
      "3. Planting and care: " +
      crop.technique +
      "\n\n" +
      "4. Crop suitability: " +
      crop.prediction +
      "\n\n" +
      "Reminder: This is general educational guidance. Confirm the variety, timing and fertilizer rates with local agricultural advice and a soil test.";

    document.getElementById("planResult").textContent = result;
  });
}
