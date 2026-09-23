# 📚 Theme Vault Documentation - Batch 1

This document covers the first 5 themes included in `@uiexchange/themes`.

---

## 🎨 Overview of Batch 1 Themes

| Theme Name | Primary Accent | Main Vibe / Domain | Display Font | Border Style |
| :--- | :--- | :--- | :--- | :--- |
| **Agentic** | `#FF5701` (Orange) | AI Conversational & Task Delegation | Playfair Display | `1px solid #E5E7EB` |
| **Ant** | `#1677FF` (Blue) | Enterprise B2B & Data Dense | Plus Jakarta Sans | `1px solid #F0F0F0` |
| **Artistic** | `#3B82F6` (Electric Blue)| Expressive High-Contrast | Limelight | `2px solid #111827` |
| **Basic** | `#A855F7` (Purple) | Editorial Print & Magazines | Oswald | `1px solid #0A1829` |
| **Bento** | `#FAD4C0` (Peach) | Modular Card Grids | Inter | `1px solid #EAD7C5` (Radius: 16px) |

---

## 🤖 1. Agentic Theme (`data-theme="agentic"`)
Designed specifically for AI-first interfaces, chatbot companions, and automated task execution monitors.

### Token Specs:
- **Background**: `#F6F6F1` (Warm Cream)
- **Primary Color**: `#FF5701` (High Energy Orange)
- **Typography**: Display: `Playfair Display`, Mono: `JetBrains Mono`
- **Border Radius**: `8px`

### Example HTML:
```html
<div data-theme="agentic">
  <div class="theme-card">
    <span class="theme-badge">Agent Active</span>
    <h2>AI Task Execution</h2>
    <button class="theme-btn">Run Workflow</button>
  </div>
</div>
```

---

## 📊 2. Ant Theme (`data-theme="ant"`)
Inspired by enterprise design systems, optimized for high data density, dashboards, and structured B2B portals.

### Token Specs:
- **Background**: `#FAFAFA`
- **Primary Color**: `#1677FF` (Ant Blue)
- **Typography**: Display: `Plus Jakarta Sans`
- **Border Radius**: `6px`

### Example HTML:
```html
<div data-theme="ant">
  <div class="theme-card">
    <span class="theme-badge">B2B Dashboard</span>
    <h2>Data Overview</h2>
    <button class="theme-btn">Export Metrics</button>
  </div>
</div>
```

---

## 🎨 3. Artistic Theme (`data-theme="artistic"`)
Expressive, high-contrast visual style with bold offset shadows and creative display headers.

### Token Specs:
- **Background**: `#FFFFFF`
- **Primary Color**: `#3B82F6`
- **Typography**: Display: `Limelight`
- **Box Shadow**: `4px 4px 0px #111827` (Hard offset shadow)

### Example HTML:
```html
<div data-theme="artistic">
  <div class="theme-card">
    <span class="theme-badge">Exhibition</span>
    <h2>Creative Portfolio</h2>
    <button class="theme-btn">Explore Works</button>
  </div>
</div>
```

---

## 📰 4. Basic Theme (`data-theme="basic"`)
Editorial, print-inspired visual style perfect for blogs, online magazines, and report layouts.

### Token Specs:
- **Background**: `#FFFFFF` (Surface: `#FAF9F6`)
- **Primary Color**: `#A855F7`
- **Typography**: Display: `Oswald`, Body: `Nunito`
- **Border**: `1px solid #0A1829`

---

## 🍱 5. Bento Theme (`data-theme="bento"`)
Soft, modular card grid aesthetics with generous border radiuses (`16px`) and warm peach accents.

### Token Specs:
- **Background**: `#FFF5E6` (Soft Warm Cream)
- **Primary Color**: `#FAD4C0` (Peach)
- **Typography**: Display: `Inter`
- **Border Radius**: `16px`

---

## 🚀 How to Switch Between Batch 1 Themes

Simply update the `data-theme` attribute on any parent wrapper:

```javascript
// Toggle themes dynamically
document.documentElement.setAttribute('data-theme', 'bento'); // Switch to Bento
document.documentElement.setAttribute('data-theme', 'agentic'); // Switch to Agentic
```
