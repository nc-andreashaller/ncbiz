import { readBlockConfig } from '../../scripts/lib-franklin.js';

const defaultHeaderPath = '/header';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  block.textContent = '';

  // fetch nav content
  const resp = await fetch(`${defaultHeaderPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();
    block.innerHTML = html;
  }
}
