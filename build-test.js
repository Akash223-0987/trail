import { build } from 'vite';

async function runBuild() {
  try {
    await build();
  } catch (e) {
    console.error(e);
  }
}

runBuild();
