import glob
import os
import re

files = sorted(glob.glob("dist/*.html"))
print(f"============================================================")
print(f"📊 SEO / GEO / AEO AUDIT REPORT (Radhvan Origins)")
print(f"============================================================\n")

for f in files:
    with open(f, "r", encoding="utf-8") as file:
        html = file.read()
    
    title_m = re.search(r"<title>(.*?)</title>", html, re.IGNORECASE)
    title = title_m.group(1) if title_m else "MISSING"
    
    desc_m = re.search(r'<meta name="description" content="(.*?)"', html, re.IGNORECASE)
    desc = desc_m.group(1) if desc_m else "MISSING"
    
    canon_m = re.findall(r'<link rel="canonical" href="(.*?)"', html, re.IGNORECASE)
    
    h1_list = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    h2_list = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.IGNORECASE | re.DOTALL)
    
    jsonld_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.IGNORECASE | re.DOTALL)
    
    og_title = re.search(r'<meta property="og:title" content="(.*?)"', html, re.IGNORECASE)
    og_image = re.search(r'<meta property="og:image" content="(.*?)"', html, re.IGNORECASE)
    
    body_match = re.search(r'<div id="root">(.*?)</div>\s*<script', html, re.DOTALL)
    body_len = len(body_match.group(1)) if body_match else len(html)
    
    print(f"📄 File: {os.path.basename(f)}")
    print(f"   • Title ({len(title)} chars): {title}")
    print(f"   • Meta Description ({len(desc)} chars): {desc}")
    print(f"   • Canonical Tag ({len(canon_m)} count): {canon_m[0] if canon_m else 'None'}")
    print(f"   • Headings: H1={len(h1_list)}, H2={len(h2_list)}")
    print(f"   • JSON-LD Structured Data: {len(jsonld_blocks)} schema block(s) found")
    print(f"   • OG Title: {'YES' if og_title else 'NO'} | OG Image: {og_image.group(1) if og_image else 'NO'}")
    print(f"   • Prerendered Content Size: {body_len / 1024:.1f} KB HTML content")
    print("-" * 60)
