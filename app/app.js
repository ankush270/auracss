/* ==========================================================================
   AURACSS - THEME SHOWCASE & DOCUMENTATION ENGINE
   ========================================================================== */

const THEMES_DATA = [
  // Category: AI Assistants & Conversational
  { id: "agentic", name: "Agentic", category: "ai", primary: "#FF5701", secondary: "#F6F6F1", bg: "#F6F6F1", surface: "#FFFFFF", text: "#111827", font: "Playfair Display", desc: "Conversational AI-first interface with orange action accents & delegated task flows." },
  { id: "claude", name: "Claude", category: "ai", primary: "#141413", secondary: "#FAF9F6", bg: "#FAF9F6", surface: "#FFFFFF", text: "#141413", font: "Anthropic Sans", desc: "Anthropic-inspired clean web UI on warm stone with near-black ink typography." },
  { id: "codex", name: "Codex", category: "ai", primary: "#000000", secondary: "#FFFFFF", bg: "#FFFFFF", surface: "#F9FAFB", text: "#111827", font: "Open Sans", desc: "OpenAI-inspired radically minimal blank-canvas interface driven by stark black structure." },
  { id: "matrix", name: "Matrix", category: "ai", primary: "#2DB58A", secondary: "#0B0C14", bg: "#0B0C14", surface: "#141724", text: "#2DB58A", font: "Space Mono", desc: "Dark cyber-terminal green on dark background, console outputs, and cybernetic grids." },

  // Category: B2B SaaS & Dashboards
  { id: "ant", name: "Ant", category: "saas", primary: "#1677FF", secondary: "#8B5CF6", bg: "#FAFAFA", surface: "#FFFFFF", text: "#111827", font: "Plus Jakarta Sans", desc: "Structured, enterprise-focused design system emphasizing clarity and high data density." },
  { id: "sleek", name: "Sleek", category: "saas", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#F9FAFB", text: "#111827", font: "Inter", desc: "Minimalist aesthetics focusing on clean lines, 60-30-10 colors, and low cognitive load." },
  { id: "clean", name: "Clean", category: "saas", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#FFFFFF", text: "#111827", font: "Poppins / Roboto", desc: "Pure whites, ultra-light grays, ample whitespace, and structured layouts." },
  { id: "spacious", name: "Spacious", category: "saas", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#FAFAFA", text: "#111827", font: "Montserrat / Open Sans", desc: "Generous spacing scale (8pt baseline grid), breathing layouts, and wide paddings." },
  { id: "minimal", name: "Minimal", category: "saas", primary: "#0C0C09", secondary: "#312C85", bg: "#F4F4F1", surface: "#FFFFFF", text: "#0C0C09", font: "Inter / Open Sans", desc: "Stripped-back essentialist layout on warm stone with off-black typography." },
  { id: "shadcn", name: "Shadcn", category: "saas", primary: "#000000", secondary: "#111111", bg: "#FFFFFF", surface: "#FFFFFF", text: "#111827", font: "Geist", desc: "Clean border outlines, Radix-style neutrals, and high accessibility focus." },
  { id: "refined", name: "Refined", category: "saas", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#FAF9F6", text: "#111827", font: "Playfair Display", desc: "Smooth transitions, sophisticated rounded corners, and understated luxury." },
  { id: "contemporary", name: "Contemporary", category: "saas", primary: "#C800DF", secondary: "#E60076", bg: "#FAFAFA", surface: "#FFFFFF", text: "#111827", font: "Jost", desc: "Modern split screens, neon magenta accents, asymmetrical balance, and sleek layout cards." },
  { id: "corporate", name: "Corporate", category: "saas", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#F8FAFC", surface: "#FFFFFF", text: "#1E293B", font: "Poppins / Open Sans", desc: "Highly structured B2B design, enterprise data tables, and crisp form controls." },
  { id: "enterprise", name: "Enterprise", category: "saas", primary: "#0C5CAB", secondary: "#0A4A8A", bg: "#09090B", surface: "rgba(24,24,27,0.75)", text: "#FAFAFA", font: "IBM Plex Sans", desc: "Dark-themed cloud-platform dashboard (Vercel/GitHub style) with glass-like panels." },
  { id: "professional", name: "Professional", category: "saas", primary: "#FECE14", secondary: "#000000", bg: "#FFFFFF", surface: "#FAFAFA", text: "#111827", font: "Poppins", desc: "Trustworthy, standard components, crisp yellow-gold accents, and black borders." },
  { id: "stitch", name: "Stitch", category: "saas", primary: "#072C2C", secondary: "#FF5F03", bg: "#EDEADE", surface: "#FFFFFF", text: "#111827", font: "Oswald / Ubuntu", desc: "Grid-aligned layout, precise dark-teal border division, and vibrant orange accents." },

  // Category: Gaming & Retro
  { id: "sega", name: "Sega", category: "retro", primary: "#4502FF", secondary: "#FFDA14", bg: "#FFFFFF", surface: "#FAF9FE", text: "#111827", font: "VT323", desc: "Retro 8-bit arcade aesthetic, VT323 pixel typography, blocky neon components." },
  { id: "pacman", name: "Pacman", category: "retro", primary: "#2A3FE5", secondary: "#F4B9B0", bg: "#000000", surface: "#0A0A10", text: "#FFFF00", font: "Press Start 2P", desc: "Dark gaming board layout, neon yellow details, Press Start 2P font & dotted mazes." },
  { id: "tetris", name: "Tetris", category: "retro", primary: "#1C202B", secondary: "#7107E7", bg: "#DFE7FF", surface: "#FFFFFF", text: "#1C398E", font: "Bangers", desc: "Blocky multi-color borders, retro console splits, puzzle-style headers." },
  { id: "roku", name: "Roku", category: "retro", primary: "#9333EA", secondary: "#A855F7", bg: "#FAFAFC", surface: "#FFFFFF", text: "#09090B", font: "Inter", desc: "TV-style grid view, large purple buttons, and fluid card focus navigation." },
  { id: "vintage", name: "Vintage", category: "retro", primary: "#008080", secondary: "#C0C0C0", bg: "#C0C0C0", surface: "#FFFFFF", text: "#000000", font: "Silkscreen", desc: "1950s-1990s retro nostalgia with skeuomorphic touches, silver chrome & pixel font." },
  { id: "retro", name: "Retro Y2K", category: "retro", primary: "#FFD84D", secondary: "#FF3D6B", bg: "#FF85C2", surface: "#FFF5DC", text: "#1A0A2E", font: "Press Start 2P / Nunito", desc: "Early-internet Y2K desktop OS chrome, bubblegum background, hard offset 4px shadows." },

  // Category: Creative, Portfolios & Art
  { id: "artistic", name: "Artistic", category: "creative", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#F9FAFB", text: "#111827", font: "Limelight", desc: "High-contrast, expressive style with Limelight display typography and hard offset shadow." },
  { id: "bento", name: "Bento", category: "creative", primary: "#FAD4C0", secondary: "#80A1C1", bg: "#FFF5E6", surface: "#FFFFFF", text: "#111827", font: "Inter", desc: "Modular grid layout with card-like blocks, clear hierarchy, soft spacing, and rounded radiuses." },
  { id: "basic", name: "Basic", category: "creative", primary: "#A855F7", secondary: "#0A1829", bg: "#FFFFFF", surface: "#FAF9F6", text: "#0A1829", font: "Oswald / Nunito", desc: "Print-inspired visual language for books, magazines, and reports with editorial grids." },
  { id: "brutalism", name: "Brutalism", category: "creative", primary: "#DD614C", secondary: "#DAA144", bg: "#FFFFFF", surface: "#F4F4F0", text: "#111827", font: "Darker Grotesque", desc: "Raw, anti-design aesthetic inspired by concrete architecture with terracotta accents." },
  { id: "brutalist", name: "Brutalist", category: "creative", primary: "#FF4081", secondary: "#2196F3", bg: "#F5F0E6", surface: "#FFFFFF", text: "#000000", font: "Space Grotesk", desc: "Authentic neobrutalism (Gumroad style). Hard shadows, thick black strokes, saturated pink/yellow." },
  { id: "claymorphism", name: "Claymorphism", category: "creative", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#F0F4F8", surface: "#FFFFFF", text: "#1C398E", font: "Poppins / Montserrat", desc: "Soft, rounded 3D-like inflated shapes mimicking clay with volumetric drop shadows." },
  { id: "doodle", name: "Doodle", category: "creative", primary: "#49B6E5", secondary: "#263D5B", bg: "#FFFFFF", surface: "#FAFDFE", text: "#111827", font: "Delius Swash Caps", desc: "Hand-drawn, sketch-like style with handwritten font, imperfect lines, and informal feel." },
  { id: "editorial", name: "Editorial", category: "creative", primary: "#111111", secondary: "#F1F1F1", bg: "#FFFFFF", surface: "#F9F9F8", text: "#111827", font: "Gelasio", desc: "Magazine-inspired editorial layout with refined serif typography and structured grids." },
  { id: "expressive", name: "Expressive", category: "creative", primary: "#DB2777", secondary: "#2563EB", bg: "#FFFFFF", surface: "#FDF2F8", text: "#111827", font: "IBM Plex Mono", desc: "Vibrant, personality-driven design with deep pink & blue monospace typography." },
  { id: "fiction", name: "Fiction", category: "creative", primary: "#222222", secondary: "#FFE9CE", bg: "#FFFBF5", surface: "#FFFFFF", text: "#111827", font: "Cossette Texte", desc: "Playful, storybook-inspired interface with warm peach surfaces and chunky outlines." },
  { id: "flat", name: "Flat", category: "creative", primary: "#F2673C", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#F9FAFB", text: "#111827", font: "Inter", desc: "Two-dimensional minimalist style with vibrant coral, clean typography, and zero shadows." },
  { id: "friendly", name: "Friendly", category: "creative", primary: "#F2D9DC", secondary: "#D9F2D8", bg: "#FFFFFF", surface: "#FAF6F7", text: "#111827", font: "Noto Serif Display", desc: "Approachable design with rounded elements, soft pastel rose & sage color palettes." },
  { id: "paper", name: "Paper", category: "creative", primary: "#111111", secondary: "#8B5CF6", bg: "#FAF9F6", surface: "#FFFFFF", text: "#111827", font: "Montserrat / PT Mono", desc: "Paper-textured, print-inspired design with minimal colors and tactile surface qualities." },
  { id: "pulse", name: "Pulse", category: "creative", primary: "#EA580B", secondary: "#F59E0B", bg: "#FFEDD5", surface: "#FDBA74", text: "#EA580C", font: "Limelight", desc: "Dynamic, vibrant style with thick orange borders, geometric shapes, and high energy." },
  { id: "riso", name: "Riso", category: "creative", primary: "#F237A1", secondary: "#2C40A7", bg: "#FFFDF9", surface: "#FFFFFF", text: "#111827", font: "Space Grotesk", desc: "Playful 2-color risograph-inspired system with paper-like warmth & vivid pink actions." },
  { id: "sketch", name: "Sketch", category: "creative", primary: "#1DAD97", secondary: "#F4EDE0", bg: "#FFFFFF", surface: "#F4EDE0", text: "#111827", font: "Delicious Handrawn", desc: "Hand-drawn sketch aesthetic on warm paper with soft teal accents and dashed outlines." },
  { id: "skeumorphism", name: "Skeumorphism", category: "creative", primary: "#FA3C00", secondary: "#F08321", bg: "#F4F4F6", surface: "#FFFFFF", text: "#111827", font: "Germania One", desc: "Real-world mimicry with textured surfaces, 3D effects, and familiar physical metaphors." },
  { id: "storytelling", name: "Storytelling", category: "creative", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FFFFFF", surface: "#FAF9F6", text: "#111827", font: "Abril Fatface", desc: "Narrative-driven design using Abril Fatface display typography to guide users." },
  { id: "terracotta", name: "Terracotta", category: "creative", primary: "#C56A3C", secondary: "#F3E9D8", bg: "#FAF6EE", surface: "#FFFFFF", text: "#2C1D16", font: "DM Serif Display", desc: "Sun-baked, clay-toned editorial system with warm cream surfaces & terracotta accent." },
  { id: "vibrant", name: "Vibrant", category: "creative", primary: "#7C61D4", secondary: "#EAAE87", bg: "#FFFFFF", surface: "#FAF8FE", text: "#2F281D", font: "Fascinate", desc: "Lively, colorful design with bold playful typography, warm amber accents, and energy." },

  // Category: Premium & Luxury
  { id: "bold", name: "Bold", category: "luxury", primary: "#0077BC", secondary: "#009866", bg: "#111111", surface: "#1A1A1A", text: "#FFFFFF", font: "Archivo Black", desc: "Strong visual presence with Archivo Black heavyweight typography and commanding dark layout." },
  { id: "cafe", name: "Cafe", category: "luxury", primary: "#5D4432", secondary: "#E9E3DD", bg: "#F9F7F5", surface: "#FFFFFF", text: "#3E2B1E", font: "Poppins", desc: "Cozy cafe-inspired interface with warm espresso brown tones, soft typography, and artisan feel." },
  { id: "cosmic", name: "Cosmic", category: "luxury", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#0B0E17", surface: "#151926", text: "#F1F5F9", font: "Audiowide", desc: "Futuristic sci-fi aesthetic with dark themes, vibrant neon accents, and glowing spatial halos." },
  { id: "dark-luxury", name: "Dark Luxury", category: "luxury", primary: "#161412", secondary: "#d4a03c", bg: "#0a0907", surface: "#161412", text: "#f0ebe0", font: "Inter", desc: "Dark luxury SaaS (amber gold #d4a03c on warm near-black #0a0907) with inset top highlights." },
  { id: "dithered", name: "Dithered", category: "luxury", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#F3F4F6", surface: "#FFFFFF", text: "#111827", font: "Space Grotesk", desc: "Game-Boy inspired dithering dot-pattern visual style with Space Grotesk display typography." },
  { id: "dramatic", name: "Dramatic", category: "luxury", primary: "#8B5CF6", secondary: "#F43F5E", bg: "#09090B", surface: "#18181B", text: "#FAFAFA", font: "Outfit", desc: "High-contrast, theatrical dark-mode design with Outfit font (weights 400 & 900) and rose glows." },
  { id: "fantasy", name: "Fantasy", category: "luxury", primary: "#0250CC", secondary: "#FDC800", bg: "#FFFFFF", surface: "#F8FAFC", text: "#111827", font: "New Rocker", desc: "Game-inspired fantasy aesthetic with Royal Blue, Gold borders, and New Rocker display font." },
  { id: "futuristic", name: "Futuristic", category: "luxury", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FAFAFC", surface: "#FFFFFF", text: "#111827", font: "Audiowide", desc: "Forward-looking design with Audiowide tech typography, modern layouts, and innovation feel." },
  { id: "geometric", name: "Geometric", category: "luxury", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FAFAFA", surface: "#FFFFFF", text: "#111827", font: "Inter", desc: "Geometric, structured design with clean typography, precise shapes, and mathematical layout." },
  { id: "glassmorphism", name: "Glassmorphism", category: "luxury", primary: "#1856FF", secondary: "#3A344E", bg: "linear-gradient(135deg, #0F172A, #1E1B4B)", surface: "rgba(255,255,255,0.08)", text: "#FFFFFF", font: "Plus Jakarta Sans", desc: "Frosted glass effect with translucent layers, backdrop blur, and luminous borders." },
  { id: "gradient", name: "Gradient", category: "luxury", primary: "#990FFA", secondary: "#E60076", bg: "#FAFAFC", surface: "#FFFFFF", text: "#111827", font: "Space Grotesk / Montserrat", desc: "Smooth color transitions and gradient-rich surfaces (Purple to Pink) for modern visual depth." },
  { id: "immersive", name: "Immersive", category: "luxury", primary: "#00592B", secondary: "#0023D1", bg: "#002914", surface: "#00592B", text: "#FFFFFF", font: "Oswald", desc: "Exhibit-style interface blending storytelling on a continuous Deep Emerald Green canvas." },
  { id: "impeccable", name: "Impeccable", category: "luxury", primary: "#CC8800", secondary: "#C55221", bg: "#FFFDF9", surface: "#FFFFFF", text: "#111827", font: "Chakra Petch", desc: "Graphic editorial-poster aesthetic with warm cream, burnt-orange, and sharp amber accents." },
  { id: "levels", name: "Levels", category: "luxury", primary: "#27272A", secondary: "#8B5CF6", bg: "#FAFAFA", surface: "#FFFFFF", text: "#111827", font: "Inter", desc: "Conversion-focused design that removes friction and guides users toward action with clarity." },
  { id: "neon", name: "Neon", category: "luxury", primary: "#BBF351", secondary: "#00BCFF", bg: "#0B0E14", surface: "#141A26", text: "#F3F4F6", font: "STIX Two Text", desc: "Electric neon glow effects with high-voltage Lime (#BBF351) & Cyan (#00BCFF) contrast." },
  { id: "perspective", name: "Perspective", category: "luxury", primary: "#00BD7D", secondary: "#00BD7D", bg: "#F4FAF7", surface: "#FFFFFF", text: "#111827", font: "Oswald / Poppins", desc: "Spatial depth design with 3D isometric views, vanishing points, and layered emerald cards." },
  { id: "power", name: "Power", category: "luxury", primary: "#FAFAFA", secondary: "#FAFAFA", bg: "#000000", surface: "#111111", text: "#FFFFFF", font: "Oswald", desc: "Command-center dark aesthetic with bold headings, monochromatic palette, and power feel." },
  { id: "premium", name: "Premium", category: "luxury", primary: "#3B82F6", secondary: "#8B5CF6", bg: "#FAFAFC", surface: "#FFFFFF", text: "#111827", font: "Inter", desc: "Apple-inspired premium aesthetic with precise spacing, modern typography, and polished look." }
];

let activeFilter = 'all';
let searchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderThemesGrid();
  setupEventListeners();
});

function setupEventListeners() {
  // Search Bar
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderThemesGrid();
    });
  }

  // Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.dataset.filter;
      renderThemesGrid();
    });
  });

  // Modal Close
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('theme-modal-overlay');
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function renderThemesGrid() {
  const gridContainer = document.getElementById('themes-grid');
  const countBadge = document.getElementById('theme-count-badge');
  if (!gridContainer) return;

  const filteredThemes = THEMES_DATA.filter(theme => {
    const matchesFilter = activeFilter === 'all' || theme.category === activeFilter;
    const matchesSearch = !searchQuery || 
      theme.name.toLowerCase().includes(searchQuery) ||
      theme.desc.toLowerCase().includes(searchQuery) ||
      theme.font.toLowerCase().includes(searchQuery) ||
      theme.id.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filteredThemes.length} / ${THEMES_DATA.length} Themes`;
  }

  if (filteredThemes.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state">
        <h3>No themes match your search</h3>
        <p>Try searching for keywords like "cyberpunk", "dark", "serif", "glass", or "retro".</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filteredThemes.map(theme => `
    <div class="theme-showcase-card" data-theme="${theme.id}">
      <div class="card-preview-header">
        <div class="swatches">
          <span class="swatch" style="background: ${theme.primary};" title="Primary Accent: ${theme.primary}"></span>
          <span class="swatch" style="background: ${theme.secondary};" title="Secondary Accent: ${theme.secondary}"></span>
          <span class="swatch" style="background: ${theme.surface}; border: 1px solid #ddd;" title="Surface BG: ${theme.surface}"></span>
        </div>
        <span class="category-pill">${theme.category.toUpperCase()}</span>
      </div>

      <div class="card-preview-body">
        <h3 class="theme-title">${theme.name}</h3>
        <p class="theme-desc">${theme.desc}</p>

        <div class="mini-component-demo">
          <div class="theme-card">
            <span class="theme-badge">${theme.name}</span>
            <div class="action-row" style="margin-top: 0.75rem;">
              <button class="theme-btn">Button</button>
              <input class="theme-input" placeholder="Input..." readonly style="pointer-events: none;" />
            </div>
          </div>
        </div>
      </div>

      <div class="card-preview-footer">
        <span class="font-tag">Font: ${theme.font}</span>
        <button class="view-detail-btn" onclick="openThemeModal('${theme.id}')">Explore & Copy Code →</button>
      </div>
    </div>
  `).join('');
}

function openThemeModal(themeId) {
  const theme = THEMES_DATA.find(t => t.id === themeId);
  if (!theme) return;

  const modalOverlay = document.getElementById('theme-modal-overlay');
  const modalBody = document.getElementById('modal-body');
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div data-theme="${theme.id}">
      <div class="modal-header-row">
        <div>
          <span class="theme-badge">${theme.category.toUpperCase()} SYSTEM</span>
          <h2 style="margin-top: 0.5rem; font-size: 2rem;">${theme.name} Theme</h2>
          <p style="color: var(--text-sub);">${theme.desc}</p>
        </div>
        <div>
          <button class="theme-btn" onclick="setGlobalDemoTheme('${theme.id}')">Apply to Entire Site</button>
        </div>
      </div>

      <div class="modal-sandbox-grid">
        <!-- Live Sandbox Container -->
        <div class="sandbox-box">
          <h4 style="margin-bottom: 1rem;">Live Component Sandbox</h4>
          <div class="theme-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <span class="theme-badge">${theme.name} Active</span>
              <small style="font-family: var(--font-mono, monospace);">data-theme="${theme.id}"</small>
            </div>
            <h3>Sample Heading Component</h3>
            <p style="margin-bottom: 1.5rem;">This interactive card shows live typography, surfaces, radiuses, and borders configured for ${theme.name}.</p>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem;">
              <button class="theme-btn">Primary Action</button>
              <button class="theme-btn theme-btn-secondary">Secondary Action</button>
            </div>

            <input class="theme-input" placeholder="Type text here to test input field focus state..." />
          </div>
        </div>

        <!-- Color & Token Specs -->
        <div class="specs-box">
          <h4 style="margin-bottom: 1rem;">Design Tokens & Colors</h4>

          <div class="token-list">
            <div class="token-item">
              <span>Primary Accent:</span>
              <code>${theme.primary}</code>
            </div>
            <div class="token-item">
              <span>Secondary Accent:</span>
              <code>${theme.secondary}</code>
            </div>
            <div class="token-item">
              <span>Surface Canvas:</span>
              <code>${theme.surface}</code>
            </div>
            <div class="token-item">
              <span>Primary Font:</span>
              <code>${theme.font}</code>
            </div>
          </div>

          <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Integration Code Snippet</h4>
          <div class="code-snippet-box">
            <pre><code>&lt;!-- Plain HTML --&gt;
&lt;html data-theme="${theme.id}"&gt;
  &lt;body&gt;
    &lt;div class="theme-card"&gt;
      &lt;button class="theme-btn"&gt;Click&lt;/button&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
            <button class="copy-snippet-btn" onclick="copySnippet('html', '${theme.id}')">Copy HTML Code</button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');
}

function closeModal() {
  const modalOverlay = document.getElementById('theme-modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('open');
}

function setGlobalDemoTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.innerText = `Global website theme set to "${themeId}"!`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function copyNpmCommand() {
  navigator.clipboard.writeText('npm install auracss');
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.innerText = 'Copied to clipboard: npm install auracss';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

function copySnippet(type, themeId) {
  const text = `<html data-theme="${themeId}">\n  <body>\n    <div class="theme-card">\n      <button class="theme-btn">Click Me</button>\n    </div>\n  </body>\n</html>`;
  navigator.clipboard.writeText(text);
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.innerText = `Copied ${themeId} HTML integration snippet to clipboard!`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}
