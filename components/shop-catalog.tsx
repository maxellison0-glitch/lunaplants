"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/catalog";
import { ProductCard } from "./product-card";

type Filters = {
  material: string[];
  light: string[];
  room: string[];
  colour: string;
};

const emptyFilters: Filters = { material: [], light: [], room: [], colour: "" };

function ToggleGroup({
  title,
  values,
  selected,
  onToggle,
}: {
  title: string;
  values: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      {values.map((value) => (
        <label key={value}>
          <input type="checkbox" checked={selected.includes(value)} onChange={() => onToggle(value)} />
          <span className="custom-check" />
          {value}
        </label>
      ))}
    </fieldset>
  );
}

export function ShopCatalog({ initialQuery = "", initialRoom = "", initialCollection = "" }: { initialQuery?: string; initialRoom?: string; initialCollection?: string }) {
  const [filters, setFilters] = useState<Filters>(() => ({
    ...emptyFilters,
    room: initialRoom ? [initialRoom] : initialCollection === "Desk" ? ["Desk"] : [],
    light: initialCollection === "Low light" ? ["Low light"] : [],
  }));
  const [sort, setSort] = useState(initialCollection === "Gift" ? "price-asc" : "featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  function toggle(key: "material" | "light" | "room", value: string) {
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(value) ? current[key].filter((entry) => entry !== value) : [...current[key], value],
    }));
  }

  const result = useMemo(() => {
    const query = initialQuery.toLowerCase().trim();
    const matching = products.filter((product) => {
      const queryMatch = !query || `${product.name} ${product.botanicalName} ${product.description}`.toLowerCase().includes(query);
      const materialMatch = !filters.material.length || filters.material.includes(product.material);
      const lightMatch = !filters.light.length || filters.light.includes(product.light);
      const roomMatch = !filters.room.length || filters.room.includes(product.room);
      const colourMatch = !filters.colour || product.colours.some((colour) => colour.name === filters.colour);
      return queryMatch && materialMatch && lightMatch && roomMatch && colourMatch;
    });

    return [...matching].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return Number(Boolean(b.badge)) - Number(Boolean(a.badge));
    });
  }, [filters, sort, initialQuery]);

  const activeCount = filters.material.length + filters.light.length + filters.room.length + Number(Boolean(filters.colour));

  const filterContent = (
    <>
      <div className="filter-title"><h2>Filter the edit</h2>{activeCount > 0 && <button onClick={() => setFilters(emptyFilters)}>Clear all</button>}</div>
      <ToggleGroup title="Material" values={["PLA", "PETG"]} selected={filters.material} onToggle={(value) => toggle("material", value)} />
      <ToggleGroup title="Light" values={["Low light", "Bright indirect", "Flexible"]} selected={filters.light} onToggle={(value) => toggle("light", value)} />
      <ToggleGroup title="Room" values={["Living room", "Bedroom", "Desk", "Kitchen"]} selected={filters.room} onToggle={(value) => toggle("room", value)} />
      <fieldset className="filter-group colour-filter">
        <legend>Pot colour</legend>
        {[{ name: "Terracotta", hex: "#b95635" }, { name: "Chalk", hex: "#e7dfcf" }, { name: "Forest", hex: "#28483a" }, { name: "Charcoal", hex: "#363633" }].map((colour) => (
          <button key={colour.name} className={filters.colour === colour.name ? "is-selected" : ""} onClick={() => setFilters((current) => ({ ...current, colour: current.colour === colour.name ? "" : colour.name }))}>
            <span style={{ background: colour.hex }} />{colour.name}
          </button>
        ))}
      </fieldset>
    </>
  );

  return (
    <div className="shop-layout">
      <aside className="desktop-filters">{filterContent}</aside>
      <div className="shop-results">
        <div className="shop-toolbar">
          <button className="mobile-filter-trigger" onClick={() => setMobileFiltersOpen(true)}><SlidersHorizontal size={17} /> Filters {activeCount > 0 && <span>{activeCount}</span>}</button>
          <span>{result.length} {result.length === 1 ? "pairing" : "pairings"}</span>
          <label>Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="name">Name</option></select></label>
        </div>
        {initialQuery && <div className="search-result-note">Showing results for “{initialQuery}”</div>}
        {result.length ? (
          <div className="product-grid shop-product-grid">{result.map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div>
        ) : (
          <div className="empty-results"><span>Nothing in this corner—yet.</span><h2>Try opening up your filters.</h2><button className="button button-primary" onClick={() => setFilters(emptyFilters)}>Reset filters</button></div>
        )}
      </div>
      <div className={`mobile-filter-panel ${mobileFiltersOpen ? "is-open" : ""}`} aria-hidden={!mobileFiltersOpen}>
        <div className="mobile-filter-header"><span>Filters</span><button className="icon-button" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters"><X size={22} /></button></div>
        <div className="mobile-filter-scroll">{filterContent}</div>
        <button className="button button-primary button-wide" onClick={() => setMobileFiltersOpen(false)}>Show {result.length} pairings</button>
      </div>
    </div>
  );
}
