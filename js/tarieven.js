// Tarievenpagina: KNMT/NZa 2025 (uit tarievenboekje KNMT 2025 in deze repo)
// Dataset is bewust compact: veelvoorkomende prestaties + duidelijke categorieën.

(() => {
  const root = document.documentElement;

  const euro = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  /**
   * KNMT 2025 (NZa maximumtarieven) – geselecteerde veelvoorkomende prestaties.
   * Velden:
   * - code: prestatiecode
   * - omschrijving: officiële omschrijving (verkort waar nodig)
   * - punten: punten (indien van toepassing)
   * - tarief: maximumtarief in euro
   * - eenheid: korte uitleg van de eenheid (per opname / per 5 min / per kaak / etc.)
   */
  const KNMT_TARIEVEN_2025 = [
    {
      code: "C001",
      omschrijving:
        "Consult t.b.v. intake (nieuwe patiënt), incl. bepalen en bespreken zorgdoel",
      punten: 7.6,
      tarief: 57.66,
      eenheid: "per consult",
    },
    {
      code: "C002",
      omschrijving: "Consult voor een periodieke controle",
      punten: 3.8,
      tarief: 28.83,
      eenheid: "per consult",
    },
    {
      code: "C003",
      omschrijving: "Consult (niet zijnde periodieke controle)",
      punten: 3.8,
      tarief: 28.83,
      eenheid: "per consult",
    },
    {
      code: "X10",
      omschrijving: "Maken en beoordelen kleine röntgenfoto",
      punten: 2.8,
      tarief: 21.24,
      eenheid: "per opname",
    },
    {
      code: "X21",
      omschrijving: "Maken en beoordelen kaakoverzichtsfoto",
      punten: 12,
      tarief: 91.04,
      eenheid: "per opname",
    },
    {
      code: "M01",
      omschrijving: "Preventieve voorlichting en/of instructie",
      punten: 2.24166667,
      tarief: 17.01,
      eenheid: "per 5 minuten",
    },
    {
      code: "M02",
      omschrijving: "Consult voor evaluatie van preventie",
      punten: 2.24166667,
      tarief: 17.01,
      eenheid: "per 5 minuten",
    },
    {
      code: "M03",
      omschrijving: "Gebitsreiniging",
      punten: 2.24166667,
      tarief: 17.01,
      eenheid: "per 5 minuten",
    },
    {
      code: "M40",
      omschrijving: "Fluoridebehandeling",
      punten: 2.5,
      tarief: 18.97,
      eenheid: "per kaak (incl. polijsten)",
    },
    {
      code: "A10",
      omschrijving:
        "Geleidings-, infiltratie- en/of intraligamentaire verdoving",
      punten: 2.5,
      tarief: 18.97,
      eenheid: "per toepassing (conform NZa toelichting)",
    },
    {
      code: "V91",
      omschrijving: "Eénvlaksvulling composiet",
      punten: 8,
      tarief: 60.69,
      eenheid: "per vulling",
    },
    {
      code: "V92",
      omschrijving: "Tweevlaksvulling composiet",
      punten: 10.5,
      tarief: 79.66,
      eenheid: "per vulling",
    },
    {
      code: "V93",
      omschrijving: "Drievlaksvulling composiet",
      punten: 12.5,
      tarief: 94.83,
      eenheid: "per vulling",
    },
    {
      code: "V94",
      omschrijving: "Meervlaksvulling composiet",
      punten: 16,
      tarief: 121.38,
      eenheid: "per vulling",
    },
  ];

  const getCategory = (code) => {
    const prefix = code.slice(0, 1).toUpperCase();
    switch (prefix) {
      case "C":
        return { key: "consult", label: "Consulten & diagnostiek" };
      case "X":
        return { key: "foto", label: "Röntgenfoto’s" };
      case "M":
        return { key: "preventie", label: "Preventie & mondhygiëne" };
      case "A":
        return { key: "verdoving", label: "Verdoving" };
      case "V":
        return { key: "vullingen", label: "Vullingen" };
      default:
        return { key: "overig", label: "Overig" };
    }
  };

  const els = {
    search: document.querySelector("[data-tarieven-search]"),
    category: document.querySelector("[data-tarieven-category]"),
    body: document.querySelector("[data-tarieven-tbody]"),
    empty: document.querySelector("[data-tarieven-empty]"),
    count: document.querySelector("[data-tarieven-count]"),
  };

  if (!els.body) return; // only on tarieven page

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();

  const matches = (item, q) => {
    if (!q) return true;
    const hay = normalize(`${item.code} ${item.omschrijving} ${item.eenheid}`);
    return hay.includes(q);
  };

  const render = () => {
    const q = normalize(els.search?.value);
    const cat = els.category?.value || "all";

    const filtered = KNMT_TARIEVEN_2025.filter((it) => {
      const c = getCategory(it.code).key;
      if (cat !== "all" && c !== cat) return false;
      return matches(it, q);
    });

    els.body.innerHTML = filtered
      .map((it) => {
        const catInfo = getCategory(it.code);
        const points =
          typeof it.punten === "number"
            ? it.punten.toString().replace(".", ",")
            : "";
        return `
          <tr data-category="${catInfo.key}">
            <td class="tarieven__code" data-label="Code">
              <span class="tarieven__code-pill">${it.code}</span>
              <span class="tarieven__cat">${catInfo.label}</span>
            </td>
            <td class="tarieven__desc" data-label="Omschrijving">${it.omschrijving}</td>
            <td class="tarieven__unit" data-label="Eenheid">${it.eenheid}</td>
            <td class="tarieven__points" data-label="Punten">${points}</td>
            <td class="tarieven__price" data-label="Tarief">${euro.format(it.tarief)}</td>
          </tr>
        `;
      })
      .join("");

    const has = filtered.length > 0;
    if (els.empty) els.empty.style.display = has ? "none" : "block";
    if (els.count)
      els.count.textContent = filtered.length === 1 
        ? `${filtered.length} resultaat`
        : `${filtered.length} resultaten`;
  };

  els.search?.addEventListener("input", render);
  els.category?.addEventListener("change", render);

  // initial render
  render();

  // Small UX: show keyboard focus ring nicely (only when tabbing)
  // (relies on CSS that uses [data-focus-visible] attribute)
  let keyboard = false;
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (!keyboard) root.setAttribute("data-focus-visible", "true");
      keyboard = true;
    }
  });
  window.addEventListener("mousedown", () => {
    if (keyboard) root.removeAttribute("data-focus-visible");
    keyboard = false;
  });
})();


