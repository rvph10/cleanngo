import { gsap } from "gsap";

/**
 * Splits an element's text content into per-word spans suitable for
 * typographic reveal animations. Returns the inner animated spans.
 *
 * ⚠️  Replaces innerHTML — only safe for plain-text elements (no HTML children).
 */
export function splitWords(el: HTMLElement): HTMLSpanElement[] {
  const text = el.innerText.trim();
  el.innerHTML = "";
  const words = text.split(/\s+/);

  return words.map((word, i) => {
    const outer = document.createElement("span");
    outer.style.cssText = "display:inline-block;overflow:hidden;vertical-align:bottom;";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    // Non-breaking space after every word except the last
    inner.textContent = i < words.length - 1 ? word + "\u00A0" : word;
    outer.appendChild(inner);
    el.appendChild(outer);
    return inner;
  });
}

/**
 * Magnetic hover effect — element drifts toward the cursor and snaps back
 * on leave with a slight elastic rebound.
 *
 * @param selector  CSS selector for elements to magnetise
 * @param strength  Movement factor (0–1). Lower = subtler. Default 0.2.
 */
export function magneticEffect(selector: string, strength = 0.2): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "back.out(2)", overwrite: "auto" });
    });
  });
}
