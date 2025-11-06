#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
IMGDIR="$ROOT_DIR/ryans-land/public/images"
mkdir -p "$IMGDIR"
cd "$IMGDIR"

echo "Replacing small/placeholder images in $IMGDIR with picsum seeds..."
THRESH=12000

# helper download
download() {
  local url="$1"
  local out="$2"
  curl --fail --location --silent --show-error --connect-timeout 6 --max-time 30 "$url" -o "$out" || return 1
  [ -s "$out" ] || return 1
  return 0
}

# mapping
picsum_query() {
  case "$1" in
    store.jpg) printf '%s' "storefront_building" ;;
    c-*) printf '%s' "${1#c-}" ;;
    e*) printf '%s' "electronics" ;;
    t*) printf '%s' "toys" ;;
    k*) printf '%s' "kitchen" ;;
    o*) printf '%s' "outdoors" ;;
    pet*) printf '%s' "pets" ;;
    p*) printf '%s' "product" ;;
    seed*|targets.txt) printf '%s' "skip" ;;
    *) printf '%s' "product" ;;
  esac
}

# ensure store.jpg
if [ ! -s store.jpg ] || [ $(stat -c%s store.jpg) -lt 15000 ]; then
  echo "Downloading store.jpg"
  if ! download "https://picsum.photos/seed/storefront_building/1200/800" store.jpg; then
    echo "store.jpg download failed, writing small placeholder"
    base64 -d > store.jpg <<'B64'
/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFhUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADwQAAIBAgQDBgQEBwAAAAAAAAECAAMRBBIhMQVBUQYTMmFxgZGh8CKx0RQyQmKSwfAVJDNzgpKy/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJREAAgIBAwMFAAAAAAAAAAAAAAECEQMhEjEEQRMiUXGBkcH/2gAMAwEAAhEDEQA/APqKiiiqKooor//2Q==
B64
  fi
fi

for f in *.jpg; do
  [ -f "$f" ] || continue
  # skip seeds and targets
  if [[ "$f" == seed* ]] || [[ "$f" == targets.txt ]]; then
    continue
  fi
  size=$(stat -c%s "$f")
  if [ $size -lt $THRESH ]; then
    q=$(picsum_query "$f")
    if [ "$q" = "skip" ]; then
      echo "Skipping $f"
      continue
    fi
    seedname=$(echo "$f" | sed 's/[^a-zA-Z0-9]/_/g')
    url="https://picsum.photos/seed/${seedname}_${q}/800/800"
    tmp=".tmp_${f}"
    echo "Attempting to download $f from $url"
    if download "$url" "$tmp"; then
      mv -f "$tmp" "$f"
      echo "Replaced $f (size now $(stat -c%s "$f"))"
    else
      echo "Failed to download for $f; keeping existing file"
      rm -f "$tmp" || true
    fi
  else
    echo "Skipping $f (size $size)"
  fi
done

ls -lah
