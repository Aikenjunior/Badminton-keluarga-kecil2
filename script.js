const players = [
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
  {
    name: "",
    age: null,
    height: "",
    weight: "",
    dominantHand: "",
    yearsPlaying: null,
    racket: "",
    string: "",
    tension: "",
    shoes: "",
    style: "",
    overall: null,
    attack: null,
    defense: null,
    speed: null,
    power: null,
    footwork: null,
    netplay: null,
    strengths: [],
    weaknesses: [],
    notes: "",
    image: "images/placeholder.jpg", // placeholder image path
  },
];

// Render player cards
function renderPlayers(filteredPlayers = players) {
  const container = document.getElementById("player-cards");
  container.innerHTML = "";
  filteredPlayers.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name || "Player"}" />
      <h2>${p.name || "Unnamed Player"}</h2>
      <div class="badge">${p.style || "No Style"}</div>
      <div>Overall: ${p.overall !== null ? p.overall : "-"}</div>
    `;
    card.onclick = () => showPlayerDetail(p);
    container.appendChild(card);
  });
  document.getElementById("player-detail").classList.add("hidden");
}

// Show detailed profile
function showPlayerDetail(player) {
  const detail = document.getElementById("player-detail");
  detail.classList.remove("hidden");
  detail.innerHTML = `
    <img src="${player.image}" alt="${player.name || "Player"}" style="width:150px; height:150px; border-radius:50%; display:block; margin: 0 auto 1rem;" />
    <h2>${player.name || "Unnamed Player"}</h2>
    <hr />
    <h3>PERSONAL</h3>
    <p>Age: ${player.age !== null ? player.age : "-"}</p>
    <p>Height: ${player.height || "-"}</p>
    <p>Weight: ${player.weight || "-"}</p>
    <p>Dominant Hand: ${player.dominantHand || "-"}</p>
    <p>Years Playing: ${player.yearsPlaying !== null ? player.yearsPlaying : "-"}</p>
    <hr />
    <h3>EQUIPMENT</h3>
    <p>?? Racket: ${player.racket || "-"}</p>
    <p>?? String: ${player.string || "-"}</p>
    <p>?? Tension: ${player.tension || "-"}</p>
    <p>?? Shoes: ${player.shoes || "-"}</p>
    <hr />
    <h3>STAT</h3>
    ${renderStatBar("Attack", player.attack)}
    ${renderStatBar("Defense", player.defense)}
    ${renderStatBar("Power", player.power)}
    ${renderStatBar("Speed", player.speed)}
    ${renderStatBar("Footwork", player.footwork)}
    ${renderStatBar("Net Play", player.netplay)}
    <hr />
    <h3>Strength</h3>
    <div class="strengths">${player.strengths.length > 0 ? player.strengths.map(s => `<span>? ${s}</span>`).join("") : "<span>-</span>"}</div>
    <h3>Weakness</h3>
    <div class="weaknesses">${player.weaknesses.length > 0 ? player.weaknesses.map(w => `<span>• ${w}</span>`).join("") : "<span>-</span>"}</div>
    <hr />
    <h3>Notes</h3>
    <div class="notes">${player.notes || "-"}</div>
  `;
}

function renderStatBar(label, value) {
  if (value === null || value === undefined) value = 0;
  const widthPercent = Math.min(value, 100);
  return `
    <div>${label}</div>
    <div class="stat-bar">
      <div class="stat-fill" style="width:${widthPercent}%;"></div>
    </div>
  `;
}

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = players.filter(p => p.name.toLowerCase().includes(query));
  renderPlayers(filtered);
});

// Initial render
renderPlayers();
