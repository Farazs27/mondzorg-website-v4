# ⚡ Quick Reference Guide - Common Edits

**Fast lookup for the most common changes you'll make.**

---

## 🖼️ Image Locations

### Homepage
```
Hero Background: index.html, line ~383
→ Search for: "hero-bg.jpg"
→ Location: assets/hero-bg.jpg
```

### Team Photos
```
Dr. Farbod: team.html
→ Search for: "farbod-sharifi.jpg"
→ Location: assets/team/farbod-sharifi.jpg

Dr. Fati: team.html
→ Search for: "fati-soltani.jpg"
→ Location: assets/team/fati-soltani.jpg
```

### Service Icons
```
All icons: behandelingen.html & index.html
→ Location: assets/icons/
→ Files: 1. Rechte Tanden.png, 2. Kiespijn.png, etc.
```

### Logo
```
All pages: Search for "logo.png"
→ Location: assets/logos/logo.png
```

---

## ✏️ Text Locations

### Homepage Hero
```html
File: index.html, line ~50
<h1 class="hero-title">
    <span class="hero-title-light">THE NEXTGEN</span>
    <span class="hero-title-bold">DENTISTS</span>
</h1>
<p class="hero-description">Biomimetic and Minimally Invasive Dentistry</p>
```

### Contact Info (Update in ALL files)
```
Phone: +31 (0)6 15231259
Email: info@mondzorgsloterweg.nl
Address: Sloterweg 1048, 1066 DC Amsterdam
WhatsApp: https://wa.me/31615231259
```

### Section Headings
```
Search for the heading text in the file
Example: "OVER MONDZORG SLOTERWEG" in index.html
Change text between <h2> and </h2>
```

---

## 🎨 Colors

### Main Accent Color (Gold)
```css
File: css/style.css, line ~93
--accent: #b8a369;
```

### Other Colors
```css
File: css/style.css, lines 81-96
--black: #000000;
--white: #ffffff;
--accent-light: #d4c592;
--accent-dark: #9a8855;
```

---

## 📏 Spacing

### Section Padding
```css
File: css/style.css, lines 115-119
--section-sm: 48px;
--section-md: 64px;
--section-lg: 80px;
--section-xl: 120px;
```

---

## 🔄 Workflow (Every Time You Edit)

1. **Open GitHub Desktop**
2. **Click "Fetch origin"** (get latest version)
3. **Edit files** in your text editor
4. **Save all changes**
5. **Go to GitHub Desktop**
6. **Write commit message** (e.g., "Updated hero image")
7. **Click "Commit to main"**
8. **Click "Push origin"**
9. **Wait 30 seconds**
10. **Refresh website** (Ctrl+Shift+R / Cmd+Shift+R)

---

## 🆘 Emergency: Undo Changes

1. Open GitHub Desktop
2. Go to "History" tab
3. Right-click on the bad commit
4. Click "Revert this commit"
5. Click "Push origin"
6. Website restored! ✅

---

## 📞 Contact Numbers to Update

**Search and replace in ALL HTML files:**

Old: `+31615231259` or `+31 (0)6 15231259`
Files: index.html, contact.html, team.html, behandelingen.html, tarieven.html, inschrijven.html, esthetische-analyse.html

---

## 🔗 Useful Links

- **Your GitHub Repo**: https://github.com/Farazs27/mondzorg-website
- **Live Website**: https://new-v3-website-mondzorg-sloterweg.vercel.app
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Desktop**: https://desktop.github.com
- **VS Code**: https://code.visualstudio.com
- **Image Compressor**: https://tinypng.com
- **Color Picker**: https://htmlcolorcodes.com

---

**💡 Pro Tip**: Bookmark this file for quick access!
