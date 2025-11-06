const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const outDir = path.join(repoRoot, 'ryans-land', 'public', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const targets = {
  o1: 'camping lantern',
  o2: 'insulated water bottle',
  pet1: 'dog chew toy',
  pet2: 'cat treats'
};

function safeQuery(q){
  return encodeURIComponent(q.replace(/\s+/g,' '));
}

for(const id of Object.keys(targets)){
  const q = targets[id];
  const outPath = path.join(outDir, `${id}.jpg`);
  const metaPath = path.join(outDir, `${id}.json`);
  console.log('\nFetching', id, 'for query', q);
  let done = false;
  // try source.unsplash
  for(let attempt=1; attempt<=3 && !done; attempt++){
    const url = `https://source.unsplash.com/1080x720/?${safeQuery(q)}`;
    try{
      execSync(`curl -sSL -o "${outPath}" "${url}"`);
      const size = fs.existsSync(outPath) ? fs.statSync(outPath).size : 0;
      if(size>2000){
        fs.writeFileSync(metaPath, JSON.stringify({id, source:'source.unsplash', query:q, url},null,2));
        console.log('Saved', outPath, 'size', size);
        done = true;
        break;
      } else {
        if(fs.existsSync(outPath)) fs.unlinkSync(outPath);
      }
    } catch(e){
      // ignore and retry
    }
  }
  // fallback loremflickr
  for(let attempt=1; attempt<=3 && !done; attempt++){
    const url = `https://loremflickr.com/800/600/${safeQuery(q)}`;
    try{
      execSync(`curl -sSL -o "${outPath}" "${url}"`);
      const size = fs.existsSync(outPath) ? fs.statSync(outPath).size : 0;
      if(size>2000){
        fs.writeFileSync(metaPath, JSON.stringify({id, source:'loremflickr', query:q, url},null,2));
        console.log('Saved', outPath, 'size', size);
        done = true;
        break;
      } else {
        if(fs.existsSync(outPath)) fs.unlinkSync(outPath);
      }
    } catch(e){
    }
  }
  if(!done) console.error('Failed to fetch usable image for', id);
}

console.log('\nDone fallback fetch');
