(function () {
  "use strict";

  const data = INDEX_DATA;
  const grid = document.getElementById("grid");
  const results = document.getElementById("results");
  const emptyEl = document.getElementById("empty");
  const form = document.getElementById("lookup");
  const input = document.getElementById("q");
  const clearBtn = document.getElementById("clear");
  const minFallback = data.minFallbackLength || 3;

  document.getElementById("title").textContent = data.masthead.title;
  document.getElementById("standfirst").textContent = data.masthead.standfirst;
  document.getElementById("stats").textContent = data.masthead.stats;

  const cards = data.entries.map((entry, i) => makeCard(entry, i));
  cards.forEach((c) => grid.appendChild(c.el));

  function makeCard(entry, i) {
    const num = String(i + 1).padStart(2, "0");
    const file = entry.img || `${entry.id}.jpg`;
    const path = `img/${file}`;

    const li = document.createElement("li");

    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    card.setAttribute(
      "aria-label",
      `Entry ${num}, ${entry.term}. Activate to read the definition.`
    );

    const inner = document.createElement("div");
    inner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "face front no-image";
    const ph = document.createElement("span");
    ph.className = "ph";
    ph.textContent = path;
    front.appendChild(ph);

    const img = new Image();
    img.alt = "";
    img.addEventListener("load", () => {
      front.classList.remove("no-image");
      ph.remove();
      front.insertBefore(img, front.firstChild);
    });
    img.src = path;

    const tag = document.createElement("div");
    tag.className = "tag";
    const numEl = document.createElement("span");
    numEl.className = "num";
    numEl.textContent = num;
    const termEl = document.createElement("span");
    termEl.className = "term";
    termEl.textContent = entry.term;
    tag.append(numEl, termEl);
    front.appendChild(tag);

    const back = document.createElement("div");
    back.className = "face back";
    const bTerm = document.createElement("p");
    bTerm.className = "back-term";
    bTerm.textContent = entry.term;
    const def = document.createElement("p");
    def.className = "definition";
    def.textContent = entry.definition;
    const src = document.createElement("p");
    src.className = "source";
    src.textContent = entry.source || "";
    back.append(bTerm, def, src);

    inner.append(front, back);
    card.appendChild(inner);
    li.appendChild(card);

    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");
    });

    return { el: li, card, category: entry.category };
  }

  function unflip(c) {
    c.card.classList.remove("flipped");
    c.card.setAttribute("aria-pressed", "false");
  }

  function setDim(c, dim) {
    c.card.classList.toggle("dim", dim);
    c.card.tabIndex = dim ? -1 : 0;
    if (dim) c.card.setAttribute("aria-hidden", "true");
    else c.card.removeAttribute("aria-hidden");
  }

  function setHidden(c, hide) {
    c.el.classList.toggle("hide", hide);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    runLookup(input.value);
  });
  clearBtn.addEventListener("click", resetIndex);

  function runLookup(raw) {
    const word = raw.trim().toLowerCase();
    if (!word) { resetIndex(); return; }

    const cats = resolve(word);

    if (cats.length === 0) {
      cards.forEach((c) => {
        unflip(c);
        setDim(c, false);
        setHidden(c, true);
      });
      results.innerHTML =
        `You looked up <span class="q">"${escapeHtml(word)}"</span>. ` +
        `<span class="n">0</span> of ${cards.length} entries.`;
      emptyEl.hidden = false;
      emptyEl.innerHTML =
        `<span class="lead">Nothing is indexed under that.</span> ` +
        `The system saved a self for me out of home decor, weddings and skincare. ` +
        `It never saved one under "${escapeHtml(word)}."`;
      clearBtn.hidden = false;
      return;
    }

    let shown = 0;
    cards.forEach((c) => {
      const match = cats.includes(c.category);
      setHidden(c, false);
      setDim(c, !match);
      unflip(c);
      if (match) shown++;
    });

    emptyEl.hidden = true;
    const names = cats
      .map((id) => data.categoryLabels[id] || id)
      .join(", ");
    results.innerHTML =
      `You looked up <span class="q">"${escapeHtml(word)}"</span>. ` +
      `<span class="n">${shown}</span> of ${cards.length} entries, ` +
      `filed under ${escapeHtml(names)}.`;
    clearBtn.hidden = false;
  }

  function resolve(word) {
    if (Object.prototype.hasOwnProperty.call(data.queries, word)) {
      return data.queries[word];
    }
    if (word.length < minFallback) return [];

    const hits = [];
    for (const id in data.categoryLabels) {
      const label = data.categoryLabels[id].toLowerCase();
      if (id.replace(/_/g, " ").includes(word) || label.includes(word)) {
        hits.push(id);
      }
    }
    return hits;
  }

  function resetIndex() {
    cards.forEach((c) => {
      setHidden(c, false);
      setDim(c, false);
    });
    results.textContent = "";
    emptyEl.hidden = true;
    clearBtn.hidden = true;
    input.value = "";
    input.focus();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }
})();