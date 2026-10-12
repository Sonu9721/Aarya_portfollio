import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROJECTS, ALL_INSTAGRAM_REELS, COMIC_CAROUSELS } from '../src/projects-data.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function assetExists(urlPath) {
  const rel = urlPath.replace(/^\//, '');
  return fs.existsSync(path.join(root, 'public', rel));
}

test('page keeps the finished Vercel section structure', () => {
  for (const id of ['hero', 'showreel', 'works', 'reels', 'comics', 'arsenal', 'experience', 'pipeline', 'about', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /WATCH SHOWREEL 2026/);
  assert.match(html, /THE COMIC CHRONICLES/);
  assert.match(html, /DIRECTOR'S REELS/);
  assert.match(html, /data-filter="music_films"/);
});

test('showreel master is deferred until the player is needed', () => {
  assert.match(html, /data-src="\/assets\/videos\/reel_6_DAYbnEMITpG\.mp4"/);
  assert.match(html, /preload="none"/);
  assert.doesNotMatch(html, /<video[\s\S]*?\ssrc="\/assets\/videos\/reel_6/);
});

test('selected works, reels, and comics match the deployed archive', () => {
  assert.equal(PROJECTS.length, 29);
  assert.equal(ALL_INSTAGRAM_REELS.length, 32);
  assert.equal(ALL_INSTAGRAM_REELS.some((reel) => reel.title.includes('Chinchpokli')), false);
  assert.equal(ALL_INSTAGRAM_REELS.some((reel) => reel.title.includes('Childhood Roots')), false);
  assert.ok(PROJECTS.some((project) => project.title.includes('KAUN BANEGA CROREPATI')));
  assert.ok(PROJECTS.some((project) => project.youtubeId === 'y2YgJ0lXWMQ'));
  assert.equal(PROJECTS.some((project) => project.title === 'SWASTIK: SACRED CELEBRATIONS'), false);
  assert.equal(PROJECTS.some((project) => project.title === 'THE MONOCHROME APERTURE'), false);
  assert.equal(COMIC_CAROUSELS.length, 6);

  const panels = COMIC_CAROUSELS.reduce((sum, comic) => sum + comic.panels.length, 0);
  assert.equal(panels, 50);
  for (const comic of COMIC_CAROUSELS) {
    assert.equal(comic.panels.length, comic.panelCount);
    assert.ok(assetExists(comic.cover));
    for (const panel of comic.panels) assert.ok(assetExists(panel), panel);
  }
});

test('every gallery filter has at least one project and every media file exists', () => {
  for (const filter of ['films', 'music_films', 'ads']) {
    assert.ok(PROJECTS.some((project) => project.category === filter), filter);
  }

  for (const project of PROJECTS) {
    assert.ok(assetExists(project.image), project.image);
    if (project.videoFile) assert.ok(assetExists(project.videoFile), project.videoFile);
    if (project.previewVideo) assert.ok(assetExists(project.previewVideo), project.previewVideo);
    if (project.youtubeId) assert.match(project.youtubeUrl, /youtube\.com\/watch\?v=/);
  }

  for (const reel of ALL_INSTAGRAM_REELS) {
    assert.ok(assetExists(reel.thumbnail), reel.thumbnail);
    assert.match(reel.instagramUrl, /instagram\.com\/reel\//);
    if (reel.videoFile) {
      assert.ok(assetExists(reel.videoFile), reel.videoFile);
      assert.ok(assetExists(reel.previewVideo), reel.previewVideo);
    }
  }
});

test('resume and portrait referenced by the page are on disk', () => {
  assert.ok(assetExists('/assets/aarya_bhujade_resume.pdf'));
  assert.ok(assetExists('/assets/images/aarya_portrait_real.jpg'));
  assert.ok(assetExists('/assets/images/hero_film_reel.jpg'));
});
