import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once, client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// =========================================================
// Types
// =========================================================

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  scrollTrigger?: boolean;
  scrollTriggerStart?: string;
}

// =========================================================
// Core helpers
// =========================================================

/** Fade an element in from opacity 0. */
export function fadeIn(target: gsap.TweenTarget, options: AnimationOptions = {}): gsap.core.Tween {
  const {
    duration = 0.8,
    delay = 0,
    ease = "power2.out",
    scrollTrigger: useScrollTrigger = false,
    scrollTriggerStart = "top 85%",
  } = options;

  return gsap.from(target, {
    opacity: 0,
    duration,
    delay,
    ease,
    ...(useScrollTrigger && {
      scrollTrigger: {
        trigger: target as Element,
        start: scrollTriggerStart,
        toggleActions: "play none none none",
      },
    }),
  });
}

/** Slide an element up into view while fading in. */
export function slideUp(target: gsap.TweenTarget, options: AnimationOptions = {}): gsap.core.Tween {
  const {
    duration = 0.9,
    delay = 0,
    ease = "power3.out",
    scrollTrigger: useScrollTrigger = true,
    scrollTriggerStart = "top 85%",
  } = options;

  return gsap.from(target, {
    opacity: 0,
    y: 40,
    duration,
    delay,
    ease,
    ...(useScrollTrigger && {
      scrollTrigger: {
        trigger: target as Element,
        start: scrollTriggerStart,
        toggleActions: "play none none none",
      },
    }),
  });
}

/** Slide an element in from the left. */
export function slideInLeft(
  target: gsap.TweenTarget,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const { duration = 0.9, delay = 0, ease = "power3.out" } = options;

  return gsap.from(target, { opacity: 0, x: -60, duration, delay, ease });
}

/** Slide an element in from the right. */
export function slideInRight(
  target: gsap.TweenTarget,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const { duration = 0.9, delay = 0, ease = "power3.out" } = options;

  return gsap.from(target, { opacity: 0, x: 60, duration, delay, ease });
}

/** Stagger animate a list of elements into view. */
export function staggerReveal(
  target: gsap.TweenTarget,
  options: AnimationOptions = {}
): gsap.core.Tween {
  const {
    duration = 0.7,
    delay = 0,
    ease = "power2.out",
    stagger = 0.12,
    scrollTrigger: useScrollTrigger = true,
    scrollTriggerStart = "top 80%",
  } = options;

  return gsap.from(target, {
    opacity: 0,
    y: 30,
    duration,
    delay,
    ease,
    stagger,
    ...(useScrollTrigger && {
      scrollTrigger: {
        trigger: target as Element,
        start: scrollTriggerStart,
        toggleActions: "play none none none",
      },
    }),
  });
}

/** Scale in from slightly smaller. */
export function scaleIn(target: gsap.TweenTarget, options: AnimationOptions = {}): gsap.core.Tween {
  const { duration = 0.6, delay = 0, ease = "back.out(1.4)" } = options;

  return gsap.from(target, { opacity: 0, scale: 0.85, duration, delay, ease });
}

/**
 * Hero entrance — sequences title → subtitle → CTA using data attributes.
 * Elements inside `containerSelector` must have:
 *   data-hero-title | data-hero-subtitle | data-hero-cta
 */
export function heroEntrance(containerSelector: string): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(`${containerSelector} [data-hero-title]`, {
    opacity: 0,
    y: 30,
    duration: 1,
  })
    .from(
      `${containerSelector} [data-hero-subtitle]`,
      { opacity: 0, y: 20, duration: 0.8 },
      "-=0.5"
    )
    .from(`${containerSelector} [data-hero-cta]`, { opacity: 0, y: 15, duration: 0.7 }, "-=0.4");

  return tl;
}

/**
 * Kill all ScrollTrigger instances.
 * Call this in Astro `astro:before-swap` to prevent memory leaks
 * when using View Transitions.
 */
export function cleanupAnimations(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
