OJAS MICROGREENS — IMAGE FOLDER
================================

Replace the placeholder emojis in the HTML with your actual photos.
Add your image files to this folder, then update the <img> tags in index.html.

REQUIRED IMAGES:
-------------------------------
hero-microgreens.jpg       — Main hero image (fresh microgreens tray, landscape)
about-farm.jpg             — Your growing setup / farm photo
sunflower-microgreens.jpg  — Sunflower microgreens product photo
radish-microgreens.jpg     — Radish microgreens product photo
broccoli-microgreens.jpg   — Broccoli microgreens product photo
pea-shoots.jpg             — Pea shoots product photo
mixed-microgreens.jpg      — Mixed microgreens product photo
purple-radish.jpg          — Purple radish microgreens product photo
mustard-microgreens.jpg    — Mustard microgreens product photo
fenugreek-microgreens.jpg  — Fenugreek / methi microgreens product photo
beetroot-microgreens.jpg   — Beetroot microgreens product photo
wheatgrass.jpg             — Wheatgrass product photo
og-image.jpg               — Open Graph share image (1200×630px)
favicon.png                — Your logo as a small icon (32×32px or 64×64px)

RECOMMENDED IMAGE SPECS:
-------------------------------
Product photos:   800×600px minimum, JPEG, <150KB each
Hero image:       1400×900px minimum, JPEG, <300KB
OG image:         1200×630px, JPEG
Favicon:          64×64px, PNG

HOW TO ADD IMAGES:
-------------------------------
1. Add your .jpg/.png file to this /images/ folder.
2. In index.html, find the product card you want to update.
3. Inside the <div class="product-img"> block, uncomment the <img> tag.
4. Change the src to match your filename.
5. The emoji placeholder will be replaced by your photo automatically.

Example — to add a sunflower photo:
  BEFORE: <!-- <img src="images/sunflower-microgreens.jpg" ... /> -->
  AFTER:  <img src="images/sunflower-microgreens.jpg" alt="Sunflower microgreens by Ojas Microgreens Bengaluru" loading="lazy" />
