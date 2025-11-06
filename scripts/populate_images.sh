#!/usr/bin/env bash
set -euo pipefail
# Root-aware paths
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PUBLIC_DIR="$ROOT_DIR/ryans-land/public"
IMAGE_DIR="$PUBLIC_DIR/images"
mkdir -p "$IMAGE_DIR"
cd "$IMAGE_DIR"

echo "Downloading seed images..."
SEEDS=(
  "https://source.unsplash.com/800x800/?product,generic"
  "https://source.unsplash.com/800x800/?grocery"
  "https://source.unsplash.com/800x800/?electronics"
  "https://source.unsplash.com/800x800/?toys"
  "https://source.unsplash.com/800x800/?kitchen,utensils"
  "https://source.unsplash.com/800x800/?outdoor,camping"
  "https://source.unsplash.com/800x800/?pets"
  "https://source.unsplash.com/800x800/?snack,food"
  "https://source.unsplash.com/800x800/?health,personal+care"
  "https://source.unsplash.com/800x800/?tools"
  "https://source.unsplash.com/800x800/?stationery"
  "https://source.unsplash.com/800x800/?home,decor"
)

echo "Writing placeholder seeds (no network)..."
for i in $(seq 1 12); do
  out="seed${i}.jpg"
  if [ ! -s "$out" ]; then
  base64 -d > "$out" << 'B64'
/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADwQAAIBAgQDBgQEBwAAAAAAAAECAAMRBBIhMQVBUQYTMmFxgZGh8CKx0RQyQmKSwfAVJDNzgpKy/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJREAAgIBAwMFAAAAAAAAAAAAAAECEQMhEjEEQRMiUXGBkcH/2gAMAwEAAhEDEQA/APqKiiiqKooor//2Q==
B64
  fi
done

echo "Generating target list from products.js..."
python3 - "$ROOT_DIR/ryans-land/src/data/products.js" <<'PY'
import re, sys
path = sys.argv[1]
p = open(path).read()
imgs = re.findall(r'img:\s*"([^\"]+)"', p)
targets = [img.split('/',1)[1] for img in imgs if img.startswith('images/')]
# dedupe while preserving order
seen=set(); uniq=[]
for t in targets:
  if t not in seen:
    seen.add(t); uniq.append(t)
open('targets.txt','w').write('\n'.join(uniq))
print('Wrote', len(uniq), 'targets')
PY

if [ ! -f targets.txt ]; then
  echo "No targets.txt found, aborting." >&2
  exit 1
fi

echo "Copying seeds to targets (round-robin)..."
n=0
count=0
while IFS= read -r t; do
  s=$(( n % 12 + 1 ))
  if [ -f "seed${s}.jpg" ]; then
    cp -f "seed${s}.jpg" "$t" || true
    count=$((count+1))
  fi
  n=$((n+1))
done < targets.txt

echo "Done. Created $count images in $IMAGE_DIR"
ls -lah "$IMAGE_DIR"
