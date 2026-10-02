const attributes = [
  { key: "artist", label: "Artist" },
  { key: "century", label: "Century" },
  { key: "movement", label: "Movement" },
  { key: "medium", label: "Medium" },
  { key: "palette", label: "Palette" }
];

const movementFamilies = {
  "Post-Impressionism": ["Impressionism", "Expressionism", "Modernism"],
  "Impressionism": ["Post-Impressionism", "Modernism"],
  "Renaissance": ["Baroque", "Mannerism"],
  "Baroque": ["Renaissance", "Rococo"],
  "Ukiyo-e": ["Japonisme", "Post-Impressionism"],
  "Surrealism": ["Modernism", "Symbolism"],
  "Modernism": ["Expressionism", "Surrealism", "Post-Impressionism"],
  "Expressionism": ["Modernism", "Post-Impressionism", "Symbolism"],
  "Regionalism": ["Realism", "Modernism"],
  "Byzantine": ["Symbolism", "Art Nouveau"],
  "Art Nouveau": ["Symbolism", "Byzantine"]
};

const mediumFamilies = {
  "Oil on Canvas": ["Oil on Wood", "Oil on Panel"],
  "Oil on Wood": ["Oil on Canvas", "Oil on Panel"],
  "Oil on Panel": ["Oil on Canvas", "Oil on Wood"],
  "Tempera and Gold Leaf": ["Oil on Canvas", "Mosaic"],
  "Woodblock Print": ["Ink on Paper", "Print"],
  "Ink on Paper": ["Woodblock Print", "Print"]
};

const paletteAdjacency = {
  Blue: ["Violet", "Green", "Orange"],
  Green: ["Blue", "Yellow", "Red"],
  Yellow: ["Green", "Orange", "Violet"],
  Orange: ["Yellow", "Red", "Blue"],
  Red: ["Orange", "Violet", "Green"],
  Violet: ["Blue", "Red", "Yellow"],
  Neutral: ["Blue", "Yellow", "Red"],
  Gold: ["Yellow", "Orange", "Violet"]
};

const artworks = [
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    nationality: "Dutch",
    century: 19,
    movement: "Post-Impressionism",
    medium: "Oil on Canvas",
    palette: "Blue",
    focus: ["52%", "38%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#183d72"/>
      <path d="M0 260 C80 190 155 310 230 235 C310 152 370 300 455 215 C520 150 580 220 600 190 L600 600 L0 600Z" fill="#101b2f"/>
      <g fill="none" stroke-linecap="round">
        <path d="M44 110 C130 40 210 150 90 175 C210 230 265 70 150 48" stroke="#f6d75a" stroke-width="24"/>
        <path d="M310 122 C390 62 485 98 518 174 C435 126 375 172 308 128" stroke="#8fc7d0" stroke-width="18"/>
        <path d="M44 300 C190 245 310 265 600 238" stroke="#63a8c3" stroke-width="18"/>
        <path d="M10 330 C135 298 270 328 600 292" stroke="#f7dc6b" stroke-width="14"/>
      </g>
      <g fill="#f8df70">
        <circle cx="96" cy="96" r="18"/><circle cx="252" cy="80" r="12"/><circle cx="440" cy="95" r="16"/><circle cx="520" cy="210" r="18"/>
      </g>
      <path d="M115 600 C90 445 118 315 168 215 C210 330 202 478 226 600Z" fill="#12130f"/>
      <rect y="420" width="600" height="180" fill="#14251d"/>
      <g fill="#d59b3b"><rect x="310" y="410" width="42" height="75"/><rect x="370" y="382" width="48" height="105"/><rect x="450" y="425" width="32" height="62"/></g>
    </svg>`
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    nationality: "Italian",
    century: 16,
    movement: "Renaissance",
    medium: "Oil on Wood",
    palette: "Neutral",
    focus: ["50%", "38%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#554838"/>
      <path d="M0 210 C120 140 180 240 280 150 C390 58 510 150 600 95 L600 600 L0 600Z" fill="#766f52"/>
      <path d="M178 592 C190 415 185 235 300 180 C415 238 410 420 430 592Z" fill="#211f18"/>
      <ellipse cx="300" cy="240" rx="95" ry="122" fill="#caa177"/>
      <path d="M202 255 C205 138 268 92 343 128 C395 150 412 216 397 300 C360 188 248 182 202 255Z" fill="#171610"/>
      <path d="M240 376 C285 408 338 406 380 374 L438 600 H160Z" fill="#27342c"/>
      <path d="M248 275 C276 288 324 288 352 274" fill="none" stroke="#5e4232" stroke-width="8" stroke-linecap="round"/>
      <path d="M270 323 C300 338 326 334 346 320" fill="none" stroke="#7d4e3d" stroke-width="6" stroke-linecap="round"/>
      <circle cx="262" cy="246" r="9" fill="#2d211c"/><circle cx="340" cy="245" r="9" fill="#2d211c"/>
    </svg>`
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    nationality: "Dutch",
    century: 17,
    movement: "Baroque",
    medium: "Oil on Canvas",
    palette: "Blue",
    focus: ["54%", "36%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#12120f"/>
      <path d="M182 600 C198 430 215 300 310 260 C402 300 425 440 442 600Z" fill="#9a6b38"/>
      <ellipse cx="320" cy="245" rx="92" ry="118" fill="#c79568"/>
      <path d="M216 225 C235 102 356 74 430 145 C376 172 304 168 216 225Z" fill="#e6c948"/>
      <path d="M270 118 C352 84 416 125 454 182 C402 178 332 170 250 160Z" fill="#23598d"/>
      <path d="M246 164 C300 218 384 190 424 158 C418 250 375 336 322 360 C258 328 230 242 246 164Z" fill="#201713" opacity=".8"/>
      <circle cx="404" cy="342" r="20" fill="#f2efe4"/>
      <path d="M250 250 C282 268 335 268 365 245" fill="none" stroke="#654130" stroke-width="8" stroke-linecap="round"/>
      <path d="M291 315 C320 330 348 323 368 306" fill="none" stroke="#7d4036" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    nationality: "Japanese",
    century: 19,
    movement: "Ukiyo-e",
    medium: "Woodblock Print",
    palette: "Blue",
    focus: ["38%", "42%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#e8d7b6"/>
      <path d="M410 260 L470 138 L535 260Z" fill="#d0b17c"/>
      <path d="M0 432 C110 260 210 328 292 250 C380 166 486 212 600 128 L600 600 L0 600Z" fill="#235c9e"/>
      <path d="M0 395 C92 268 210 350 265 280 C360 170 455 210 540 150" fill="none" stroke="#f5f1de" stroke-width="44" stroke-linecap="round"/>
      <path d="M106 408 C192 352 280 392 372 322 C450 262 490 240 600 244" fill="none" stroke="#123b74" stroke-width="22" stroke-linecap="round"/>
      <g fill="#f5f1de">
        <circle cx="410" cy="220" r="20"/><circle cx="454" cy="206" r="16"/><circle cx="493" cy="185" r="14"/><circle cx="532" cy="160" r="12"/>
        <circle cx="230" cy="285" r="16"/><circle cx="180" cy="318" r="13"/><circle cx="120" cy="350" r="11"/>
      </g>
      <path d="M80 485 C190 448 270 468 358 438 C455 402 520 415 600 395 L600 600 L0 600 L0 510Z" fill="#173768"/>
    </svg>`
  },
  {
    title: "The Persistence of Memory",
    artist: "Salvador Dali",
    nationality: "Spanish",
    century: 20,
    movement: "Surrealism",
    medium: "Oil on Canvas",
    palette: "Orange",
    focus: ["45%", "57%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#d7a75d"/>
      <rect y="338" width="600" height="262" fill="#7e552f"/>
      <path d="M340 275 C430 196 500 202 600 230 L600 338 L270 338Z" fill="#c78c45"/>
      <path d="M90 425 C175 365 250 430 310 392 C375 352 438 408 472 455 C382 484 246 486 90 425Z" fill="#decaa6"/>
      <path d="M155 352 C210 318 275 342 268 382 C260 430 178 410 140 380Z" fill="#e9c979"/>
      <circle cx="203" cy="371" r="37" fill="#45688a"/><circle cx="203" cy="371" r="27" fill="#d5b96f"/>
      <path d="M315 330 C372 304 444 308 456 344 C426 388 342 384 306 352Z" fill="#d9c6a5"/>
      <circle cx="384" cy="347" r="36" fill="#41617f"/><circle cx="384" cy="347" r="27" fill="#d8be78"/>
      <rect x="74" y="323" width="98" height="96" fill="#3a2a21"/>
      <path d="M70 320 C112 292 172 306 190 342 C160 368 100 360 70 320Z" fill="#ddbf70"/>
    </svg>`
  },
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    nationality: "Austrian",
    century: 20,
    movement: "Art Nouveau",
    medium: "Oil on Canvas",
    palette: "Gold",
    focus: ["52%", "38%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#947327"/>
      <g fill="#d8b84f"><circle cx="74" cy="68" r="22"/><circle cx="524" cy="126" r="28"/><circle cx="118" cy="488" r="20"/><circle cx="480" cy="502" r="24"/></g>
      <path d="M214 540 C184 370 214 190 308 152 C430 198 450 390 418 540Z" fill="#d7b542"/>
      <path d="M228 196 C290 112 386 140 414 220 C330 238 270 232 228 196Z" fill="#493322"/>
      <ellipse cx="326" cy="218" rx="72" ry="86" fill="#d6a272"/>
      <path d="M292 302 C342 352 378 430 386 540 L218 540 C226 434 242 354 292 302Z" fill="#f0cf69"/>
      <g fill="#2e2b24"><rect x="260" y="350" width="26" height="70"/><rect x="322" y="376" width="30" height="58"/><rect x="366" y="324" width="22" height="80"/></g>
      <g fill="#e7d276"><circle cx="275" cy="280" r="10"/><circle cx="342" cy="300" r="12"/><circle cx="392" cy="270" r="8"/></g>
    </svg>`
  },
  {
    title: "American Gothic",
    artist: "Grant Wood",
    nationality: "American",
    century: 20,
    movement: "Regionalism",
    medium: "Oil on Panel",
    palette: "Neutral",
    focus: ["50%", "34%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#9aa77b"/>
      <path d="M175 250 L300 118 L425 250 L425 600 L175 600Z" fill="#e2d9c2"/>
      <rect x="275" y="205" width="50" height="110" fill="#242826"/>
      <path d="M210 600 C216 405 245 305 305 302 C370 305 390 420 400 600Z" fill="#1f2926"/>
      <ellipse cx="273" cy="238" rx="48" ry="66" fill="#d9ae82"/>
      <ellipse cx="364" cy="252" rx="50" ry="62" fill="#d4a77e"/>
      <path d="M226 182 C246 132 296 138 320 180Z" fill="#5e4a36"/>
      <path d="M328 194 C362 164 402 174 420 216Z" fill="#6d513a"/>
      <path d="M455 250 L455 590" stroke="#38312a" stroke-width="8"/>
      <path d="M432 250 L478 250 M442 205 L468 250 M468 205 L442 250" stroke="#38312a" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    nationality: "Norwegian",
    century: 19,
    movement: "Expressionism",
    medium: "Oil on Canvas",
    palette: "Orange",
    focus: ["48%", "46%"],
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#d16435"/>
      <path d="M0 96 C160 38 330 118 600 60" stroke="#f0b84f" stroke-width="42" fill="none"/>
      <path d="M0 165 C190 96 315 185 600 120" stroke="#2b6990" stroke-width="30" fill="none"/>
      <path d="M0 345 C200 292 398 320 600 270 L600 600 L0 600Z" fill="#263b47"/>
      <path d="M0 380 L600 208" stroke="#4e3026" stroke-width="28"/>
      <path d="M246 600 C260 430 290 352 330 340 C384 374 396 465 402 600Z" fill="#232328"/>
      <ellipse cx="330" cy="296" rx="54" ry="82" fill="#d6b38e"/>
      <ellipse cx="310" cy="285" rx="9" ry="16" fill="#2a211e"/><ellipse cx="350" cy="286" rx="9" ry="16" fill="#2a211e"/>
      <ellipse cx="332" cy="333" rx="21" ry="30" fill="#2a211e"/>
      <path d="M266 320 C216 302 210 365 260 394 M394 320 C448 300 450 360 402 394" stroke="#d6b38e" stroke-width="18" fill="none" stroke-linecap="round"/>
    </svg>`
  }
];

const maxGuesses = 6;
let target;
let guesses = [];
let isFinished = false;

const image = document.querySelector("#artwork-image");
const form = document.querySelector("#guess-form");
const input = document.querySelector("#guess-input");
const options = document.querySelector("#artwork-options");
const board = document.querySelector("#guess-board");
const message = document.querySelector("#message");
const attemptCount = document.querySelector("#attempt-count");
const template = document.querySelector("#guess-template");
const meterSegments = [...document.querySelectorAll(".reveal-meter span")];

function svgUrl(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}`;
}

function chooseTarget() {
  const epoch = new Date("2026-01-01T00:00:00");
  const today = new Date();
  const day = Math.floor((today - epoch) / 86400000);
  return artworks[Math.abs(day) % artworks.length];
}

function relatedMovement(guess, answer) {
  return movementFamilies[guess]?.includes(answer) || movementFamilies[answer]?.includes(guess);
}

function similarMedium(guess, answer) {
  return mediumFamilies[guess]?.includes(answer) || mediumFamilies[answer]?.includes(guess);
}

function adjacentPalette(guess, answer) {
  return paletteAdjacency[guess]?.includes(answer) || paletteAdjacency[answer]?.includes(guess);
}

function sameArtLineage(guess, answer) {
  if (guess.nationality === answer.nationality) return true;
  const relatedNationalities = {
    Dutch: ["French", "Italian"],
    Italian: ["Dutch", "Austrian"],
    Austrian: ["Italian", "Norwegian"],
    Norwegian: ["Austrian", "Dutch"],
    Spanish: ["French", "Italian"],
    Japanese: ["Dutch", "French"],
    American: ["French", "Dutch"]
  };
  return relatedNationalities[guess.nationality]?.includes(answer.nationality) || false;
}

function scoreAttribute(key, guess, answer) {
  if (guess[key] === answer[key]) return "green";
  if (key === "artist" && sameArtLineage(guess, answer)) return "yellow";
  if (key === "century" && Math.abs(guess.century - answer.century) === 1) return "yellow";
  if (key === "movement" && relatedMovement(guess.movement, answer.movement)) return "yellow";
  if (key === "medium" && similarMedium(guess.medium, answer.medium)) return "yellow";
  if (key === "palette" && adjacentPalette(guess.palette, answer.palette)) return "yellow";
  return "gray";
}

function displayValue(key, artwork) {
  return key === "century" ? `${artwork.century}th` : artwork[key];
}

function updateReveal() {
  const step = Math.min(guesses.length, maxGuesses);
  const zoom = [3.4, 2.75, 2.2, 1.75, 1.35, 1.1, 1][step];
  const blur = [12, 9, 6, 4, 2, 1, 0][step];
  image.style.setProperty("--zoom", zoom);
  image.style.setProperty("--blur", `${blur}px`);
  meterSegments.forEach((segment, index) => segment.classList.toggle("active", index < step));
}

function renderEmptyState() {
  board.innerHTML = `<div class="empty-state">No guesses yet</div>`;
}

function renderGuess(artwork) {
  const row = template.content.firstElementChild.cloneNode(true);
  row.querySelector("h2").textContent = artwork.title;
  const grid = row.querySelector(".attribute-grid");

  attributes.forEach(({ key, label }) => {
    const status = scoreAttribute(key, artwork, target);
    const tile = document.createElement("div");
    tile.className = `tile ${status}`;
    tile.title = `${label}: ${status}`;
    tile.innerHTML = `<strong>${label}</strong><span>${displayValue(key, artwork)}</span>`;
    grid.append(tile);
  });

  board.append(row);
}

function setMessage(text, tone = "error") {
  message.textContent = text;
  message.style.color = tone === "success" ? "var(--green)" : "var(--red)";
}

function normalize(text) {
  return text.trim().toLowerCase();
}

function finish(win) {
  isFinished = true;
  input.disabled = true;
  form.querySelector("button").disabled = true;
  image.style.setProperty("--zoom", "1");
  image.style.setProperty("--blur", "0px");
  meterSegments.forEach((segment) => segment.classList.add("active"));
  setMessage(
    win ? `Correct: ${target.title}.` : `The artwork was ${target.title} by ${target.artist}.`,
    win ? "success" : "error"
  );
}

function handleGuess(event) {
  event.preventDefault();
  if (isFinished) return;

  const guess = artworks.find((artwork) => normalize(artwork.title) === normalize(input.value));
  if (!guess) {
    setMessage("Choose a title from the artwork list.");
    return;
  }

  if (guesses.some((artwork) => artwork.title === guess.title)) {
    setMessage("That artwork is already on the board.");
    return;
  }

  guesses.push(guess);
  attemptCount.textContent = guesses.length;
  if (guesses.length === 1) board.innerHTML = "";
  renderGuess(guess);
  updateReveal();
  input.value = "";
  setMessage("");

  if (guess.title === target.title) {
    finish(true);
  } else if (guesses.length >= maxGuesses) {
    finish(false);
  }
}

function init() {
  target = chooseTarget();
  image.src = svgUrl(target.svg);
  image.style.setProperty("--focus-x", target.focus[0]);
  image.style.setProperty("--focus-y", target.focus[1]);
  artworks
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .forEach((artwork) => {
      const option = document.createElement("option");
      option.value = artwork.title;
      options.append(option);
    });
  renderEmptyState();
  updateReveal();
  form.addEventListener("submit", handleGuess);
}

init();
