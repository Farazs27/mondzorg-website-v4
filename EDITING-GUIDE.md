# 📝 Website Editing Guide - Mondzorg Sloterweg

**Easy guide for changing text, images, and basic styling on your website.**

---

## 🎯 Quick Start: 3 Ways to Edit Your Website

### Method 1: GitHub Desktop (Recommended - Easiest)
### Method 2: GitHub Web Interface
### Method 3: Direct File Upload to Vercel

---

## 📦 Method 1: GitHub Desktop (RECOMMENDED)

### One-Time Setup (5 minutes):

1. **Download GitHub Desktop**
   - Go to: https://desktop.github.com
   - Download and install

2. **Login to GitHub**
   - Open GitHub Desktop
   - Click "Sign in to GitHub.com"
   - Use your credentials

3. **Clone Your Repository**
   - Click: `File` → `Clone Repository`
   - Find: `mondzorg-website`
   - Choose where to save it on your computer
   - Click `Clone`

4. **Download a Text Editor** (if you don't have one)
   - **VS Code** (Recommended): https://code.visualstudio.com
   - Or use any text editor (Notepad++, Sublime Text, etc.)

### How to Make Changes:

1. **Open your project folder** (where you cloned it)
2. **Edit the files** (see sections below for what to edit)
3. **Save your changes**
4. **Open GitHub Desktop**
5. **You'll see your changes listed**
6. **Write a summary** (e.g., "Updated hero image")
7. **Click "Commit to main"**
8. **Click "Push origin"**
9. **Wait 30 seconds** - Your website is now updated! ✅

---

## 🖼️ How to Change Images

### Step 1: Prepare Your Image
- **Recommended size**: 1920x1080px for hero images, 800x600px for other images
- **Format**: JPG (for photos), PNG (for logos/icons)
- **Optimize**: Use https://tinypng.com to compress images

### Step 2: Upload Image to Your Project

**Option A: Using File Explorer**
1. Open your project folder
2. Go to the `assets/` folder
3. Drag and drop your new image there
4. Remember the filename (e.g., `new-hero.jpg`)

**Option B: Organize by Section**
- Hero images → `assets/`
- Team photos → `assets/team/`
- Icons → `assets/icons/`
- Logos → `assets/logos/`

### Step 3: Update the HTML File

**Example: Changing the Homepage Hero Background**

1. Open `index.html`
2. Find line ~383 (search for `hero-bg.jpg`):
   ```css
   background: url('../assets/hero-bg.jpg') center/cover no-repeat;
   ```
3. Change to your new image:
   ```css
   background: url('../assets/your-new-image.jpg') center/cover no-repeat;
   ```
4. Save the file
5. Commit and push (GitHub Desktop)

**Example: Changing Team Member Photo**

1. Open `team.html`
2. Find the team member section (search for the name)
3. Look for something like:
   ```html
   <img src="assets/team/farbod-sharifi.jpg" alt="Dr. Farbod Sharifi">
   ```
4. Replace with your new image:
   ```html
   <img src="assets/team/new-photo.jpg" alt="Dr. Farbod Sharifi">
   ```
5. Save, commit, and push

---

## ✏️ How to Change Text

### Homepage Hero Text

**File**: `index.html`
**Lines**: ~50-51

```html
<h1 class="hero-title">
    <span class="hero-title-light">THE NEXTGEN</span><br>
    <span class="hero-title-bold">DENTISTS</span>
</h1>
<p class="hero-description">Biomimetic and Minimally Invasive Dentistry</p>
```

**To change:**
1. Open `index.html`
2. Find these lines (Ctrl+F / Cmd+F: search for "THE NEXTGEN")
3. Change the text between the tags
4. Save, commit, and push

---

### Section Headings

**Example: "OVER MONDZORG SLOTERWEG"**

**File**: `index.html`
**Line**: ~62

```html
<h2>OVER MONDZORG SLOTERWEG</h2>
```

**To change:**
1. Search for the heading text in the file
2. Change the text between `<h2>` and `</h2>`
3. Save, commit, and push

---

### Paragraphs

**Example: About section text**

**File**: `index.html`
**Lines**: ~66-72

```html
<p class="lead-text">
    Onze praktijk staat voor interdisciplinaire tandheelkunde...
</p>
```

**To change:**
1. Find the paragraph (search for a few words from it)
2. Change the text between `<p>` and `</p>`
3. Keep the HTML tags intact
4. Save, commit, and push

---

### Contact Information

**Phone Number**

Search for: `+31615231259` or `+31 (0)6 15231259`

**Files to update:**
- `index.html` (footer, emergency section)
- `contact.html` (contact info)
- `team.html` (footer)
- All other HTML files (footer)

**Email Address**

Search for: `info@mondzorgsloterweg.nl`

**Files to update:**
- All HTML files (footer and contact sections)

---

## 🎨 How to Change Colors

**File**: `css/style.css`
**Lines**: 81-96 (Root Variables)

```css
:root {
    /* Monochrome Palette */
    --black: #000000;
    --white: #ffffff;
    
    /* Accent - warm gold */
    --accent: #b8a369;
    --accent-light: #d4c592;
    --accent-dark: #9a8855;
}
```

**To change the gold/accent color:**
1. Open `css/style.css`
2. Find `:root {` near the top
3. Change the `--accent` value to your new color (use hex code)
4. Example: `--accent: #ff6b6b;` (for red)
5. Save, commit, and push

**Color Picker Tool**: https://htmlcolorcodes.com

---

## 📏 How to Change Spacing/Padding

**File**: `css/style.css`
**Lines**: 105-119 (Spacing Variables)

```css
:root {
    /* Spacing Scale */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
    
    /* Section Spacing */
    --section-sm: 48px;
    --section-md: 64px;
    --section-lg: 80px;
    --section-xl: 120px;
}
```

**To change overall spacing:**
1. Open `css/style.css`
2. Find the spacing variables
3. Increase or decrease the pixel values
4. Save, commit, and push

---

## 📱 Important Files Reference

| File | What It Controls |
|------|------------------|
| `index.html` | Homepage content |
| `contact.html` | Contact page |
| `team.html` | Team/About page |
| `behandelingen.html` | Treatments page |
| `tarieven.html` | Pricing page |
| `inschrijven.html` | Registration form |
| `esthetische-analyse.html` | Smile Makeover page |
| `css/style.css` | ALL styling (colors, fonts, spacing) |
| `js/main.js` | Interactive features |

---

## 🔍 Quick Search Tips

**To find what you want to change:**

1. Open the HTML file in your text editor
2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
3. Type a few words from the text you want to change
4. Press Enter to find it
5. Edit the text
6. Save

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T:
- Delete HTML tags (like `<div>`, `</p>`, etc.)
- Change file names without updating references
- Edit files directly on the live site
- Forget to commit and push changes

### ✅ DO:
- Keep HTML tags intact
- Test locally if possible
- Make small changes at a time
- Write clear commit messages
- Keep backup of original files

---

## 🆘 Troubleshooting

### Problem: Changes don't appear on the website
**Solution:**
1. Make sure you pushed changes (GitHub Desktop)
2. Wait 30-60 seconds for Vercel to deploy
3. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. Check if you edited the correct file

### Problem: Website looks broken after changes
**Solution:**
1. Open GitHub Desktop
2. Right-click on your commit
3. Click "Revert this commit"
4. Push the revert
5. Your site will go back to working state

### Problem: Image doesn't show up
**Solution:**
1. Check the image filename matches exactly (case-sensitive)
2. Make sure the image is in the correct folder
3. Check the file path in the HTML (e.g., `assets/team/photo.jpg`)
4. Verify the image was committed and pushed

---

## 📞 Need Help?

If you get stuck:
1. Check this guide again
2. Search for the error message online
3. Contact me (Cursor AI) for assistance
4. Or reach out to a developer

---

## 🎓 Learning Resources

**HTML Basics**: https://www.w3schools.com/html/
**CSS Basics**: https://www.w3schools.com/css/
**GitHub Desktop Guide**: https://docs.github.com/en/desktop

---

## ✅ Quick Checklist for Making Changes

- [ ] Open GitHub Desktop
- [ ] Make sure you're on the latest version (click "Fetch origin")
- [ ] Open your project folder
- [ ] Edit the file(s) you need
- [ ] Save all changes
- [ ] Go back to GitHub Desktop
- [ ] Review your changes
- [ ] Write a commit message
- [ ] Click "Commit to main"
- [ ] Click "Push origin"
- [ ] Wait 30 seconds
- [ ] Check your live website
- [ ] Hard refresh browser if needed

---

**That's it! You're now ready to edit your website independently.** 🎉

**Pro Tip**: Make small changes one at a time. This way, if something goes wrong, you know exactly what caused it and can easily revert.
