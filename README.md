# 📂 DocuGod Site – File Map

This repository powers the **DocuGod static site** (hosted on Netlify).  
Below is a map of all key files and what they do:

---

## Root Files
- **index.html** → The homepage of DocuGod.
- **pricing.html** → Pricing page with subscription or one-time cost info.
- **redact.html** → Demo page for AI-powered document redaction.
- **ad.html** → Viral TikTok-style advert with audio/music & CTA.
- **style.css** → Global styles used across all pages.
- **redactor.js** → JavaScript for document editing/redaction logic.
- **netlify.toml** → Netlify configuration for deployment.
- **README.md** → Project documentation (this file).

---

## Assets
- **/assets/** → Folder for static media (audio, images, video, fonts).
  - `voice.mp3` → ElevenLabs-generated AI voiceover.  
  - `music.mp3` → Background soundtrack (Soul track).  
  - *(Add any logos, images, icons here too)*

---

## How It Links Together
1. **index.html** links to:
   - `/pricing.html`
   - `/redact.html`
   - `/ad.html`

2. **ad.html** loads:
   - `/assets/voice.mp3`
   - `/assets/music.mp3`

3. **style.css** is imported into all HTML files for consistent design.

4. **netlify.toml** ensures correct routing when hosted on Netlify.

---

## Next Steps
- ✅ Audio files added in `/assets/`  
- ✅ Ad page created as `ad.html`  
- 🔄 Ensure `index.html` has a link to `ad.html` (for easy access).  
- 🚀 Netlify automatically redeploys when you push updates.

---