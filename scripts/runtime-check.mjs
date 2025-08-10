#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import net from 'node:net';
import puppeteer from 'puppeteer';

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

function detectFramework() {
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  if (deps?.next) return 'next';
  if (deps?.vite) return 'vite';
  if (deps?.gatsby) return 'gatsby';
  if (deps?.nuxt || deps?.['nuxt3']) return 'nuxt';
  return 'unknown';
}

function getPublishDir(framework) {
  if (framework === 'next') return '.next';
  if (framework === 'vite') return 'dist';
  if (framework === 'gatsby') return 'public';
  if (framework === 'nuxt') return '.output/public';
  return 'dist';
}

async function findOpenPort(start = 3100, end = 3199) {
  for (let port = start; port <= end; port++) {
    const isFree = await new Promise((resolve) => {
      const srv = net.createServer()
        .once('error', () => resolve(false))
        .once('listening', () => srv.close(() => resolve(true)))
        .listen(port, '127.0.0.1');
    });
    if (isFree) return port;
  }
  throw new Error('No open port found');
}

async function waitForServer(url, attempts = 80) {
  for (let i = 0; i < attempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(url, res => { res.resume(); resolve(); });
        req.on('error', reject);
        req.setTimeout(1000, () => { req.destroy(new Error('timeout')); });
      });
      return true;
    } catch {
      await delay(200);
    }
  }
  return false;
}

async function main() {
  const framework = detectFramework();
  const publishDir = getPublishDir(framework);

  // Ensure build exists
  if (framework === 'next') {
    if (!fs.existsSync(path.join(root, '.next'))) {
      await new Promise((resolve, reject) => {
        const p = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
        p.on('exit', code => (code === 0 ? resolve() : reject(new Error('build failed'))));
      });
    }
  } else {
    if (!fs.existsSync(path.join(root, publishDir))) {
      await new Promise((resolve, reject) => {
        const p = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
        p.on('exit', code => (code === 0 ? resolve() : reject(new Error('build failed'))));
      });
    }
  }

  // Start server
  let serverProc;
  let url = '';
  if (framework === 'next') {
    const port = await findOpenPort();
    serverProc = spawn('npx', ['next', 'start', '-p', String(port)], { stdio: 'inherit' });
    url = `http://localhost:${port}`;
    const up = await waitForServer(url, 80);
    if (!up) {
      try { serverProc.kill(); } catch {}
      throw new Error('Failed to start Next.js server');
    }
  } else {
    const port = await findOpenPort(3200, 3299);
    const servePath = path.join(root, publishDir);
    serverProc = spawn('npx', ['serve', '-s', servePath, '-l', String(port)], { stdio: 'inherit' });
    url = `http://localhost:${port}`;
    const up = await waitForServer(url, 80);
    if (!up) {
      try { serverProc.kill(); } catch {}
      throw new Error('Failed to start static server');
    }
  }

  // Puppeteer checks
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => consoleErrors.push(String(err?.message || err)));

  const pathsToTest = ['/', '/#menu', '/#about', '/#contact'];
  for (const pth of pathsToTest) {
    await page.goto(url + pth, { waitUntil: 'networkidle0', timeout: 60000 });
  }

  await browser.close();
  try { serverProc.kill(); } catch {}

  if (consoleErrors.length > 0) {
    console.error('Runtime console errors detected:', consoleErrors);
    process.exit(1);
  } else {
    console.log('Runtime check passed with zero console errors.');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});