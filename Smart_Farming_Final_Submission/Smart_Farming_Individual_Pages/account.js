// Simple browser-only demo account and profile functions.
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const saveButton = document.getElementById("saveProfileButton");

function getAccounts() {
    return JSON.parse(localStorage.getItem("smartFarmingAccounts") || "[]");
}

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const accounts = getAccounts();
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim().toLowerCase();
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");

        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === email) {
                message.textContent = "This email is already registered. Please log in.";
                return;
            }
        }
        accounts.push({ name: name, email: email, password: password, created: new Date().toLocaleDateString() });
        localStorage.setItem("smartFarmingAccounts", JSON.stringify(accounts));
        localStorage.setItem("smartFarmingCurrentUser", email);
        window.location.href = "dashboard.html";
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const accounts = getAccounts();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === email && accounts[i].password === password) {
                localStorage.setItem("smartFarmingCurrentUser", email);
                window.location.href = "dashboard.html";
                return;
            }
        }
        message.textContent = "Email or password is incorrect. Please try again.";
    });
}

if (document.getElementById("dashboardName")) {
    const email = localStorage.getItem("smartFarmingCurrentUser");
    const accounts = getAccounts();
    let user = null;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email) user = accounts[i];
    }
    if (user) {
        document.getElementById("dashboardName").textContent = user.name;
        document.getElementById("dashboardNameCard").textContent = user.name;
        document.getElementById("profileEmail").textContent = user.email;
        document.getElementById("profileUsername").textContent = user.name;
        document.getElementById("profileCreated").textContent = user.created || "Not available";
    } else {
        document.getElementById("dashboardName").textContent = "Guest Farmer";
        document.getElementById("dashboardNameCard").textContent = "Guest";
        document.getElementById("profileEmail").textContent = "No account logged in";
        document.getElementById("profileUsername").textContent = "Guest";
        document.getElementById("profileCreated").textContent = "Not available";
    }
    const savedLocation = localStorage.getItem("smartFarmingLocation");
    if (savedLocation) document.getElementById("profileLocation").value = savedLocation;
}

if (saveButton) {
    saveButton.addEventListener("click", function () {
        const location = document.getElementById("profileLocation").value.trim();
        localStorage.setItem("smartFarmingLocation", location);
        document.getElementById("profileMessage").textContent = "Farm preference saved in this browser.";
    });
}
