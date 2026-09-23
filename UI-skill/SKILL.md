---
name: UI-design
description: "Frontend UI design system coordinator that manages 70+ specialized visual themes and aesthetic styles. Resolves theme routing based on project domains (e.g., Fintech, SaaS, Entertainment, etc.), guides styling applications, and chains with other UI/UX capabilities for layout planning, token lookup, and visual verification."
---

# UI Design Theme Coordinator

The `UI-design` skill serves as the master routing directory and application coordinator for over 70 specialized visual styles and aesthetic systems located under the [UI-skill](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/) directory. It ensures that any frontend project matches the requested style guidelines, or automatically resolves to the most compatible design system based on user context.

---

## 🎨 Theme Directory & Domain-Based Index

With over 70 visual styles available, themes are grouped below by application domains (industries/use cases) to help you quickly identify the best visual direction for a project:

### 1. AI Assistants, Conversational & Chatbots
For chat-first, command-driven, or delegated agentic workflows.
*   **[agentic](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/agentic/SKILL.md)**: Conversational, prompt-driven, minimal inputs, clear outcome status, delegated task flows.
*   **[claude](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/claude/SKILL.md)**: Anthropic-inspired clean web UI, subtle beige tones, sleek card structures.
*   **[codex](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/codex/SKILL.md)**: OpenAI-inspired workspace layout, combining logs and terminal aesthetics.
*   **[matrix](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/matrix/SKILL.md)**: Retro terminal green on dark background, console outputs, cybernetic grids.

### 2. B2B SaaS, Admin Portals & Dashboards
For functional, accessible, and structured productivity applications.
*   **[sleek](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/sleek/SKILL.md)**: Minimalist aesthetics focusing on clean lines, 60-30-10 colors, low cognitive load.
*   **[clean](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/clean/SKILL.md)**: Pure whites, ultra-light grays, and structured layouts.
*   **[spacious](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/spacious/SKILL.md)**: Generous spacing scale (8pt baseline grid), breathing layouts, wide paddings.
*   **[minimal](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/minimal/SKILL.md)**: Borderless layouts, structural typography scale, absolute essentialism.
*   **[shadcn](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/shadcn/SKILL.md)**: Clean border outlines, Radix-style neutrals, high accessibility focus.
*   **[refined](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/refined/SKILL.md)**: Smooth transitions, sophisticated rounded corners, subtle offset shadows.
*   **[contemporary](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/contemporary/SKILL.md)**: Modern split screens, asymmetrical balance, sleek layout cards.
*   **[corporate](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/corporate/SKILL.md)** / **[enterprise](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/enterprise/SKILL.md)**: Highly structured B2B design, data tables, slate gray/navy, dense layouts.
*   **[professional](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/professional/SKILL.md)**: Trustworthy, standard components, crisp form controls, balanced margins.
*   **[ant](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/ant/SKILL.md)**: Inspired by Ant Design, structured components, focus on high information density.
*   **[stitch](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/stitch/SKILL.md)**: Grid-aligned layout, precise border division, modular look.

### 3. Fintech, Wealth & Crypto
For high-end finance, trading terminals, luxury assets, and portfolio tracking.
*   **[dark luxury](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/dark%20luxury/SKILL.md)**: Deep charcoal/black surfaces, thin gold or bronze accents, premium typography.
*   **[premium](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/premium/SKILL.md)**: Balanced dark-to-light ratios, subtle gradient overlays, high-end look.
*   **[power](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/power/SKILL.md)**: Saturated, command-center styling, neon indicators, dynamic metrics dashboards.
*   **[perspective](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/perspective/SKILL.md)**: Isometric 3D angles, layered cards, visual depth for portfolio values.
*   **[flat](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/flat/SKILL.md)**: Pure solid panels, zero borders, clear visual divisions.
*   **[levels](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/levels/SKILL.md)**: Tiered layer offsets, progressive card structures.
*   **[pulse](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/pulse/SKILL.md)**: Real-time active charts focus, subtle pulsing micro-animations.

### 4. Entertainment, Gaming & Media
For interactive hubs, video streaming, games, or high-energy marketing campaigns.
*   **[sega](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/sega/SKILL.md)**: Retro arcade aesthetic, VT323 pixel typography, blocky neon components.
*   **[pacman](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/pacman/SKILL.md)**: Dark gaming board layout, neon yellow details, thick border mazes.
*   **[tetris](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/tetris/SKILL.md)**: Blocky multi-color borders, retro console splits, puzzle-style headers.
*   **[roku](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/roku/SKILL.md)**: TV-style grid view, large purple buttons, fluid focus navigation.
*   **[lingo](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/lingo/SKILL.md)**: Alphabet grid boxes, clean text alignments, color-changing state tiles.
*   **[glassmorphism](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/glassmorphism/SKILL.md)**: Translucent overlays, blurs (`backdrop-filter: blur(12px)`), futuristic panels.
*   **[neon](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/neon/SKILL.md)**: Pitch-black backdrops, glowing borders, high-vibe neon glow shadows.
*   **[immersive](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/immersive/SKILL.md)**: Full-bleed graphic backgrounds, floating content cards, cinema layout.
*   **[cosmic](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/cosmic/SKILL.md)**: Deep space purple, stars elements, sci-fi style panels.
*   **[vibrant](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/vibrant/SKILL.md)**: Saturated dynamic color mixes, strong hover transitions.

### 5. Creative, Portfolios, Blogs & Art
For personal portfolios, illustration sites, design agencies, or cozy blogs.
*   **[riso](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/riso/SKILL.md)**: Playful, warm paper backdrop, overlapping 2-color risograph printing feel.
*   **[doodle](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/doodle/SKILL.md)** / **[sketch](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/sketch/SKILL.md)**: Hand-drawn borders, scribbled icons, pencil/notebook look.
*   **[cafe](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/cafe/SKILL.md)**: Warm espresso/terracotta palette, elegant serif layout, cozy artisan feel.
*   **[terracotta](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/terracotta/SKILL.md)**: Organic earth tones, hand-crafted clay textures.
*   **[artistic](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/artistic/SKILL.md)**: Editorial design typography, off-center titles, creative content containers.
*   **[storytelling](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/storytelling/SKILL.md)**: Comic layout grids, dialog clouds, story progression panels.
*   **[claymorphism](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/claymorphism/SKILL.md)**: Soft volumetric 3D shadows, puffy pill buttons, pastel colors.
*   **[neumorphism](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/neumorphism/SKILL.md)**: Double soft-shadow indentations, extruded buttons blending into background.
*   **[paper](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/paper/SKILL.md)**: Folded paper creases texture, sketch fonts, warm stock paper.
*   **[fantasy](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/fantasy/SKILL.md)** / **[fiction](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/fiction/SKILL.md)**: Mythical/literary themes, medieval colors, vintage typography.
*   **[vintage](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/vintage/SKILL.md)** / **[retro](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/retro/SKILL.md)**: Muted nostalgic tones, typewriter fonts, layout grain.
*   **[colorful](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/colorful/SKILL.md)** / **[expressive](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/expressive/SKILL.md)** / **[dramatic](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/dramatic/SKILL.md)**: Saturated color blocking, high contrast accents.
*   **[dithered](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/dithered/SKILL.md)**: Game Boy-inspired dithering dots, pixel art vibes.

### 6. E-Commerce & Retail
For online shopping, customer cart checkout flows, and product catalogs.
*   **[modern](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/modern/SKILL.md)**: Symmetrical grids, large high-res product card frames, bold CTA buttons.
*   **[bold](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/bold/SKILL.md)**: Heavy attention-grabbing titles, stark contrast checkout panels.
*   **[square](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/square/SKILL.md)**: Sharp card items, clean pricing grids, modular layout.
*   **[basic](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/basic/SKILL.md)**: Ultra-clean, direct layout focus, distraction-free purchasing.

---

## 🤖 The "Agentic" Theme (In-Depth Guide)

The **Agentic** theme is a special, AI-first design style designed specifically for applications that involve autonomous agents, conversational workflows, task delegation, and automated execution.

### 🎯 Key Purpose
Traditional UIs require the user to configure every single detail through complex forms, checkboxes, and side-menus. The **Agentic** theme flips this paradigm: **it treats the interface as a conversational partnership.** The UI is built around delegating tasks and displaying transparent AI outcomes.

### 💡 When to Use the Agentic Theme
*   Building AI chatbot companions or assistant interfaces.
*   Creating automation tools (e.g., automated email campaign managers, database cleaners).
*   Developing AI developer tools, automated bug checkers, or agent monitors.
*   Designing interfaces that rely on a single primary search/command bar and show running logs.

### 🎨 Visual & Spacing Foundations
*   **Typography**: Serif display headers (e.g., `Playfair Display`) to convey thoughtful deliberation, paired with Monospace labels (e.g., `JetBrains Mono`) for system status and logs.
*   **Color Scheme**: High-contrast, warm/cream backdrops with a vibrant action color (like high-energy orange `#FF5701`) that denotes "agency" and "activity".
*   **Interface Structure**:
    1.  **The Prompt Bar**: Centralized conversational box with action chips.
    2.  **The Execution Log**: A real-time, collapsible timeline showing the agent's thoughts (`thought` tags, tool calls, and execution steps).
    3.  **Outcome Cards**: Rich preview blocks showing the completed result (so the user doesn't just get text, but a structured artifact or document).
    4.  **Verification Controls**: Simple, prominent "Approve", "Modify", or "Reject" buttons.

---

## 🗺️ Use-Case Routing Matrix (Which Theme When)

When a theme is not explicitly requested, analyze the project requirements and select the most appropriate theme folder:

| Project Type | Best Fit Theme | Purpose & Visual Cue |
| :--- | :--- | :--- |
| **AI Assistants, Chatbots, Automation Tools** | `agentic` | Conversational prompt bars, task execution timelines, serif headers. |
| **B2B SaaS, Admin Portals, Analytics Dashboards** | `sleek` or `corporate` | Clean, 60-30-10 palette, focus on information density and readable tables. |
| **Developer Tools, Personal Portfolios, Tech Blogs** | `neobrutalism` or `brutalist` | Raw styling, high contrast thick borders, flat drop shadows. |
| **Consumer Apps, Visual Dashboards, Gadget UIs** | `glassmorphism` or `neumorphism` | Frosted glass look, volumetric soft buttons, high modern feel. |
| **Creative Portfolios, Art/Indie Projects** | `riso` or `sketch` | Hand-drawn wires, riso-print grain textures, playful color combinations. |
| **Gaming Hubs, Arcade Apps, Retro Demos** | `sega` or `retro` | Monospace pixel typography, dark grid backgrounds, neon elements. |
| **E-Commerce (Luxury, Lifestyle, Fine Art)** | `dark luxury` or `refined` | Gold accents, dark elegant backdrop, thin serif headers, expansive layouts. |
| **Documentation, E-Learning, Text Readers** | `spacious` or `clean` | Wide line-heights, generous margins, clean typography for reading comfort. |

---

## 🔗 Cross-Skill Chaining & Connection Guidelines

`UI-design` is a coordinator. It does not work in isolation. You must chain it with sibling skills under [ui-and-ux](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/) based on the development phase:

### 1. Layout Planning (`UI-design` ➡️ `ui-ux-designer`)
*   **Scenario**: The user wants a dashboard in the `neobrutalism` style, but the layout structure is complex.
*   **Action**: Before applying the theme styling, read [ui-ux-designer](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/ui-ux-designer/SKILL.md) to draft the wireframe structure, grid system, and semantic HTML outline. Once the blueprint is approved, return to `UI-design` to apply the visual skin (thick black borders, flat colors).

### 2. Palette & Stack Search (`UI-design` ➡️ `ui-ux-pro-max`)
*   **Scenario**: You are implementing a `sleek` theme and need specific Tailwind classes, font-pairing configs, or SVG icons.
*   **Action**: Call [ui-ux-pro-max](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/ui-ux-pro-max/SKILL.md) to inspect typography stacks, import Heroicons or Lucide icons, and verify optimal setup for the framework (e.g., React or Vite).

### 3. Visual & A11y Verification (`UI-design` ➡️ `ui-visual-validator`)
*   **Scenario**: You have written the styles for the theme and need to verify compliance.
*   **Action**: Chain into [ui-visual-validator](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/ui-visual-validator/SKILL.md) to perform a self-audit: check hover/focus state visibility, calculate color contrast ratios (min 4.5:1), and review screenshots for layout shifts.

---

## 🛠️ Step-by-Step Theme Application Workflow

To apply any visual theme to a project, execute these steps:

1.  **Resolve Theme**: Identify the requested theme (or select the best fit from the matrix above).
2.  **Load Theme Specifications**:
    *   Navigate to the target theme directory: `c:\Users\ankus\.gemini\config\skills\ui-and-ux\UI-skill\<theme_name>\`.
    *   View its [DESIGN.md](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/agentic/DESIGN.md) (contains hex colors, fonts, margins).
    *   View its [SKILL.md](file:///c:/Users/ankus/.gemini/config/skills/ui-and-ux/UI-skill/agentic/SKILL.md) (contains writing tone, do's/don'ts, accessibility).
3.  **Draft Implementation**: Create the styles in the CSS file (e.g., `index.css` or Tailwind config) using the exact token values.
4.  **Execute & Verify**: Deploy locally and inspect the results. Verify that all components match the chosen visual guidelines and respect standard accessibility rules.
