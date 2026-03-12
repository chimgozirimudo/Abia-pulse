// Data Object
const resources = [
  // --- TECH & INNOVATION (ABIA SPECIFIC) ---
  {
    id: 1,
    name: "Vegis Tech Hub",
    cat: "tech",
    loc: "No 2 Ikojo Street, Opposite MOUAU Gate 5, Umudike",
    info: " for the Umudike tech community.",
    contact: "08162201403",
    mail: "info@vegistech.com" 
  },
  {
    id: 6,
    name: "Airtel Showroom Aba",
    cat: "tech",
    loc: "154B Okigwe Road, Aba",
    info: "Full customer support and Airtel network solutions.",
    contact: "08021500111",
  },
  {
    id: 2,
    name: "Abia Tech Hub",
    cat: "tech",
    loc: "6 Warri Street, Umuahia (Opp. Ultra-Modern Bus Station)",
    info: "Innovation center providing ICT training and co-working space also a Key 3MTT learning hub.",
    contact: "08052749600",
  },
  {
    id: 3,
    name: "Innovation Growth (IG) Hub",
    cat: "tech",
    loc: "10 Factory Road, Aba",
    info: "The primary tech ecosystem driver in Aba for startups.",
    contact: "08030907949",
  },
  {
    id: 4,
    name: "Softicu Hub",
    cat: "tech",
    loc: "10 Ogoja Lane, Umuahia",
    info: "Focused on digital skills and software development.",
    contact: "08064141402",
  },
  {
    id: 5,
    name: "Clintonel Innovation Centre",
    cat: "tech",
    loc: "7 Factory Road, Aba",
    info: "STEM center and hardware makerspace.",
    contact: "08068901111",
  },
  {
    id: 6,
    name: "Airtel Experience Centre (Aba)",
    cat: "tech",
    loc: "154B Okigwe Road, Aba",
    info: "Full service support and 5G network upgrades.",
    contact: "111",
  },
  {
    id: 7,
    name: "Airtel Shop (Umuahia)",
    cat: "tech",
    loc: "21 Abiriba Road, Umuahia",
    info: "Customer service and Airtel Money solutions.",
    contact: "121",
  },

  // --- COMMUNITY & ESSENTIALS (LOCAL ABIA) ---
  {
    id: 8,
    name: "Federal Medical Centre (FMC)",
    cat: "essentials",
    loc: "Umuahia City Centre",
    info: "The state's leading federal tertiary healthcare facility.",
    contact: "08133556900",
  },
  {
    id: 9,
    name: "ABSUTH (Teaching Hospital)",
    cat: "essentials",
    loc: "Aba",
    info: "Major medical facility for emergencies and training.",
    contact: "08033000000",
  },
  {
    id: 10,
    name: "Abia State Fire Service",
    cat: "essentials",
    loc: "Library Avenue, Umuahia",
    info: "Emergency fire response and rescue services.",
    contact: "08096001819",
  },
  {
    id: 11,
    name: "NIMC Abia HQ",
    cat: "essentials",
    loc: "Gov. Station Layout, Umuahia",
    info: "National ID enrollment and NIN management.",
    contact: "08100000000",
  },
  {
    id: 12,
    name: "Police State Command",
    cat: "essentials",
    loc: "Bende Road, Umuahia",
    info: "Primary contact for security and incident reporting.",
    contact: "08079260355",
  },
  {
    id: 13,
    name: "INEC State Office",
    cat: "essentials",
    loc: "UCDA Road, Umuahia",
    info: "PVC collection and voter registration info.",
    contact: "0700-CALL-INEC",
  },

  // --- NATIONAL/OUTSIDE ABIA RESOURCES ---
  {
    id: 14,
    name: "NITDA Nigeria",
    cat: "tech",
    loc: "Abuja / Online",
    info: "National Information Technology Development Agency.",
    contact: "08168401351",
  },
  {
    id: 15,
    name: "NCDC Emergency Toll-Free",
    cat: "essentials",
    loc: "National",
    info: "Disease control and public health emergencies.",
    contact: "6232",
  },
  {
    id: 16,
    name: "Airtel Nigeria HQ",
    cat: "tech",
    loc: "Lagos / National",
    info: "Corporate headquarters for Airtel Africa/Nigeria.",
    contact: "08021500000",
  },
];

let currentCategory = "tech";

// Set Tab Category
function setCategory(cat) {
  currentCategory = cat;
  document.getElementById("techBtn").className =
    cat === "tech" ? "tab-btn active-tech" : "tab-btn";
  document.getElementById("essBtn").className =
    cat === "essentials" ? "tab-btn active-essentials" : "tab-btn";
  filterDirectory();
}

// Filter and Display Cards
function filterDirectory() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const container = document.getElementById("directory");
  container.innerHTML = "";

  const filtered = resources.filter(
    (res) =>
      res.cat === currentCategory &&
      (res.name.toLowerCase().includes(query) ||
        res.info.toLowerCase().includes(query)),
  );

  filtered.forEach((res) => {
    const card = `
      <div class="card">
          <span class="tag ${res.cat === "tech" ? "tech-tag" : "ess-tag"}">${res.cat}</span>
          <h3>${res.name}</h3>
          <p><strong>📍 ${res.loc}</strong></p>
          <p>${res.info}</p>
          
          <div style="display: flex; gap: 10px; margin-top: 15px;">
            <a href="tel:${res.contact}" class="btn-call" style="flex: 1; margin-top: 0;">CALL</a>
            <a href="mailto:${res.mail || 'info@abia.gov.ng'}" class="btn-email" style="flex: 1;">EMAIL</a>
          </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Register Service Worker for Offline Use
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(() => {
      console.log("Service Worker Registered!");
    });
  });
}

// Offline/Online Detection
window.addEventListener(
  "offline",
  () => (document.getElementById("offline-notice").style.display = "block"),
);
window.addEventListener(
  "online",
  () => (document.getElementById("offline-notice").style.display = "none"),
);

// Initialize
filterDirectory();
