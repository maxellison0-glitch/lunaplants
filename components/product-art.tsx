import type { Product } from "@/lib/catalog";

type ProductArtProps = {
  shape: Product["shape"];
  palette: Product["palette"];
  colour?: string;
  className?: string;
  priorityLabel?: string;
};

export function ProductArt({
  shape,
  palette,
  colour,
  className = "",
  priorityLabel,
}: ProductArtProps) {
  return (
    <div
      className={`product-art palette-${palette} ${className}`}
      role="img"
      aria-label={priorityLabel ?? "Plant in a sculptural Terra pot"}
      style={colour ? ({ "--selected-pot": colour } as React.CSSProperties) : undefined}
    >
      <span className="art-sun" aria-hidden="true" />
      <span className={`plant plant-${shape}`} aria-hidden="true">
        <span className="leaf leaf-one" />
        <span className="leaf leaf-two" />
        <span className="leaf leaf-three" />
        <span className="leaf leaf-four" />
        <span className="leaf leaf-five" />
      </span>
      {shape === "mini" ? (
        <span className="mini-group" aria-hidden="true">
          <span className="mini-pot mini-pot-one" />
          <span className="mini-pot mini-pot-two" />
          <span className="mini-pot mini-pot-three" />
        </span>
      ) : (
        <span className={`pot pot-${shape}`} aria-hidden="true">
          <span className="pot-rim" />
          <span className="pot-mark">t</span>
        </span>
      )}
      <span className="art-shadow" aria-hidden="true" />
    </div>
  );
}
