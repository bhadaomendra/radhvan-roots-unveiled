# Admin guide: blog aur on-page SEO

Website ka admin panel yahan hai: **https://radhvanorigins.com/admin/**

Isse aap bina code chhue:
- naye blog articles likh aur publish kar sakte hain,
- har page (Home, Contact, Cordycepin, FAQ, Blog...) ka **Google title, meta description, keywords, share image, canonical, noindex** badal sakte hain.

## Kaise kaam karta hai

Admin me **Save/Publish** dabate hi change GitHub repo ke `main` branch me commit hota hai. Phir existing GitHub Action site ko build karke FTP se upload kar deta hai. **Live hone me 3 se 6 minute** lagte hain. Koi alag server ya database nahi hai.

Progress dekhne ke liye: GitHub repo, Actions tab, "Deploy to domainz (FTP)".

## Pehli baar login (har editor ke liye, ek baar)

1. Editor ko GitHub repo me **Write access** do (Repo Settings, Collaborators).
2. Editor GitHub par jaye: Settings, Developer settings, Personal access tokens, **Fine-grained tokens**, Generate new token.
3. Repository access: **Only select repositories**, sirf `radhvan-roots-unveiled`.
4. Permissions: **Contents: Read and write** (Metadata: Read-only apne aap aa jata hai). Expiry 90 din ya zyada rakhein.
5. `/admin/` kholein, **Sign in with GitHub using a Personal Access Token** chunein, token paste karein.

Token kisi ko share na karein. Kho jaye to GitHub se revoke karke naya banayein.

## Naya blog article publish karna

1. Admin me **Blog posts**, **New Blog post**.
2. **Title**, **Summary**, **Article** likhein. Article me sirf Heading 2 aur Heading 3 use karein (Heading 1 nahi, title hi H1 hai).
3. Cover image upload karein aur **Cover image description (alt text)** bharein.
4. SEO section bharein (neeche checklist dekhein).
5. **Draft** ko **OFF** karein, phir **Publish**.

Draft ON rehne par article website par nahi aata. Pehle se ek `Sample post: how to write...` draft padha hai, use delete kar sakte hain ya copy karke use karein.

Article ka address hota hai `radhvanorigins.com/blog/<slug>`. Slug khali chhodo to file ka naam (title se bana) use hota hai. **Publish ke baad slug badalna mat**, warna purane links aur Google ranking toot jate hain.

## On-page SEO checklist (har article ke liye)

| Cheez | Kya karein |
| --- | --- |
| SEO title | 50 se 60 characters, main keyword shuru me |
| Meta description | 140 se 160 characters, click karne ka reason do |
| Title (H1) | Ek hi H1, clear aur specific |
| Headings | Section ke liye H2, sub-point ke liye H3 |
| Internal links | Article me kam se kam 2 doosre pages ke links (FAQ, Training, Contact) |
| Images | Har image ka alt text, size 200 KB se kam (WebP ya compressed JPG) |
| FAQ | 2 se 4 sawal-jawab. Isse FAQ rich result schema apne aap ban jata hai |
| Medical claims | Health ka koi claim research ke bina nahi. Site ka disclaimer neeche apne aap lagta hai |

Har article par apne aap yeh sab bante hain: canonical link, Open Graph aur Twitter tags, `BlogPosting` + `BreadcrumbList` (+ `FAQPage`) schema, sitemap entry (`/sitemap.xml`), RSS feed (`/rss.xml`).

## Purane pages ka SEO badalna

Admin me **Page SEO (existing pages)**, **SEO for every page**, jis page ko badalna hai usse kholein. Title, description, keywords, share image, canonical, noindex badal sakte hain. Page ka path mat badlein.

- Jo value yahan bhari hai wahi live hoti hai aur page ke code wali value ko override karti hai. Pehle se sab pages ki **abhi ki live values** bhari hui hain.
- Title aur description Open Graph/Twitter (WhatsApp, LinkedIn share) me bhi wahi jati hain.
- **Hide from Google (noindex)** ON karne par page sitemap se bhi hat jata hai.

### Kya admin se nahi badal sakta

Existing pages ka **body text, headings (H1/H2) aur schema (JSON-LD)** code me hai (`src/components/site/*.tsx`, `src/routes/*.tsx`). Inhe badalne ke liye developer ya Lovable chahiye. Agar yeh sab bhi admin se chahiye to agla step hai in pages ko bhi content files me convert karna.

## Dhyan rakhne wali baatein

- **Repo public hai**, isliye draft articles bhi GitHub par sabko dikhte hain (website par nahi). Confidential cheez draft me bhi na likhein.
- Ek saath do log ek hi article edit na karein. Last save jeet jata hai.
- Article galat ho gaya to GitHub me us commit ko revert karna sabse safe tareeka hai (history rewrite nahi, `AGENTS.md` dekhein, Lovable sync ke liye).
- Naya article live hone me 3 se 6 minute lagte hain. Turant na dikhe to Actions tab dekhein ki build pass hua ya nahi.
- Blog posts build ke waqt site ke JS me bundle hote hain. 100 se zyada articles hone par blog ko lazy-load karna chahiye (developer ka kaam).

## Developer notes

- Articles: `content/blog/*.md` (YAML front matter + Markdown). Page SEO: `content/seo/pages.json`.
- Admin config: `public/admin/config.yml`. Panel Sveltia CMS hai, `public/admin/index.html` me exact version aur SRI hash pinned hai. Upgrade ke liye version badlein aur hash dobara nikalein: `npm pack @sveltia/cms@<version>` phir `openssl dgst -sha384 -binary package/dist/sveltia-cms.js | openssl base64 -A`.
- Build: `blog.html` aur `blog/<slug>.html` har build par `scripts/blog-entries.mjs` banata hai (git-ignored). `scripts/prerender.mjs` unhe pre-render karta hai. `scripts/postbuild.mjs` page SEO apply karta hai, `sitemap.xml` aur `rss.xml` banata hai.
- Server `.htaccess` me `/blog` ke liye explicit rewrite rule `deploy-ftp.yml` me jodi gayi hai.
- Scheduled publishing abhi nahi hai: publish date sirf dikhane ke liye hai. Future date par auto-publish chahiye to GitHub Action me daily `schedule` cron add karein aur build me future-dated posts filter karein.
