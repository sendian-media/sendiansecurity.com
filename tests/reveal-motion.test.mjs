import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const source = readFileSync(new URL('../src/components/home/HomeMotion.astro', import.meta.url), 'utf8');
const script = source
  .match(/<script>([\s\S]*?)<\/script>/)[1]
  .replace(/ as [A-Za-z]+/g, '')
  .replace(/: Element/g, '');

function initialize(reduced = false, observerAvailable = true) {
  const dataset = {};
  const observations = [];
  let options;
  const elements = [true, true, false].map((hero, index) => {
    const classes = new Set();
    return {
      classList: { add: (name) => classes.add(name), contains: (name) => classes.has(name) },
      closest: (selector) => selector === '.home-hero' && hero ? {} : null,
      getBoundingClientRect: () => ({ top: dataset.homeMotion ? 900 : index * 200, bottom: 1000 }),
    };
  });
  const window = { innerHeight: 793, matchMedia: () => ({ matches: reduced }) };
  class IntersectionObserver {
    constructor(_callback, config) { options = config; }
    observe(element) { observations.push(element); }
    unobserve() {}
  }
  if (observerAvailable) window.IntersectionObserver = IntersectionObserver;
  runInNewContext(script, {
    window, IntersectionObserver,
    document: { documentElement: { dataset }, querySelectorAll: () => elements },
  });
  return { elements, dataset, options, observations };
}

test('hero reveals even when its entrance position is outside the viewport', () => {
  const { elements } = initialize();
  assert.ok(elements.slice(0, 2).every((element) => element.classList.contains('is-revealed')));
});

test('already visible content is measured before hiding is enabled', () => {
  assert.ok(initialize().elements.every((element) => element.classList.contains('is-revealed')));
});

test('scroll reveals trigger ahead of the viewport', () => {
  const { options } = initialize();
  assert.equal(options.rootMargin, '0px 0px 120px');
  // A threshold of 0 fires for any positive intersection: within the 120px bottom
  // margin the top edge of a tall below-fold element (e.g. the About SISS image
  // holder at ~707px on a ~633px viewport) already intersects at load, so it
  // revealed without any scroll. Require a minimum visible fraction instead.
  assert.ok(options.threshold >= 0.1, 'must require a visible fraction');
});

test('reduced motion and missing observer leave all content visible', () => {
  for (const state of [initialize(true), initialize(false, false)]) {
    assert.ok(state.elements.every((element) => element.classList.contains('is-revealed')));
    assert.equal(state.dataset.homeMotion, undefined);
  }
});
