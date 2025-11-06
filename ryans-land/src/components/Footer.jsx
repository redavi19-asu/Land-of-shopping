import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-600 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold">Ryan's Land</div>
          <div className="mt-2">A tiny demo storefront — built for fun.</div>
        </div>
        <div>
          <div className="font-bold">Links</div>
          <div className="mt-2 flex flex-col gap-1">
            <a href="#categories" className="hover:underline">Categories</a>
            <a href="#featured" className="hover:underline">Featured</a>
            <a href="#story" className="hover:underline">How it’s built</a>
          </div>
        </div>
        <div>
          <div className="font-bold">Contact</div>
          <div className="mt-2">Built with ❤️ — demo only</div>
        </div>
      </div>
    </footer>
  );
}
