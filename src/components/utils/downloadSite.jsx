import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { buttons } from '../ui-kit/buttons/ButtonComponents';
import { cards } from '../ui-kit/cards/CardComponents';
import { inputs } from '../ui-kit/inputs/InputComponents';
import { forms } from '../ui-kit/forms/FormComponents';
import { navigations } from '../ui-kit/navigation/NavigationComponents';
import { alerts } from '../ui-kit/alerts/AlertComponents';
import { logins } from '../ui-kit/logins/LoginComponents';
import { sections } from '../ui-kit/sections/SectionComponents';
import { badges } from '../ui-kit/badges/BadgeComponents';
import { avatars } from '../ui-kit/avatars/AvatarComponents';
import { emails } from '../ui-kit/emails/EmailComponents';
import { ctas } from '../ui-kit/ctas/CTAComponents';
import { heroes } from '../ui-kit/heroes/HeroComponents';

const packageJson = `{
  "name": "fluidui-components",
  "version": "1.0.0",
  "description": "FluidUI - Free & Open Source UI Component Library",
  "dependencies": {
    "react": "^18.2.0",
    "lucide-react": "latest",
    "framer-motion": "^10.16.4"
  },
  "keywords": ["ui", "components", "react", "tailwind", "design-system"],
  "license": "MIT"
}`;

const readme = `# FluidUI Components

A beautiful collection of 100+ production-ready UI components built with React & Tailwind CSS.

## 🚀 Installation

1. Make sure you have Tailwind CSS installed in your project
2. Install dependencies:
   \`\`\`bash
   npm install lucide-react framer-motion
   \`\`\`

3. Copy the component files you need from the \`components/\` folder

## 📦 What's Included

- **Buttons** (10 components)
- **Cards** (10 components)
- **Inputs** (10 components)
- **Forms** (10 components)
- **Navigation** (10 components)
- **Alerts & Toasts** (10 components)
- **Login Pages** (10 components)
- **Landing Sections** (10 components)
- **Badges** (10 components)
- **Avatars** (10 components)

## 🎨 Usage

Each component is copy-paste ready. Simply:

1. Copy the code from the component file
2. Paste it into your project
3. Customize as needed

## 📝 License

MIT License - Free to use in personal and commercial projects.

## 💖 Support

Star us on GitHub: https://github.com/fluidui/components

---

Made with ❤️ by the FluidUI team
`;

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

const floatingShapesCode = `import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingShapes({ variant = 'default' }) {
  const shapes = {
    default: [
      { type: 'sphere', color: 'from-violet-500 to-purple-600', size: 'w-32 h-32', position: 'top-20 right-20', delay: 0 },
      { type: 'cube', color: 'from-indigo-500 to-blue-600', size: 'w-24 h-24', position: 'top-40 left-10', delay: 0.2 },
      { type: 'torus', color: 'from-pink-500 to-rose-600', size: 'w-20 h-20', position: 'bottom-32 right-32', delay: 0.4 },
      { type: 'cone', color: 'from-amber-400 to-orange-500', size: 'w-16 h-16', position: 'bottom-20 left-20', delay: 0.6 },
    ],
    login: [
      { type: 'sphere', color: 'from-violet-500 to-purple-600', size: 'w-40 h-40', position: '-top-10 -right-10', delay: 0 },
      { type: 'cube', color: 'from-indigo-500 to-blue-600', size: 'w-28 h-28', position: 'bottom-10 -left-10', delay: 0.3 },
      { type: 'torus', color: 'from-pink-500 to-rose-600', size: 'w-24 h-24', position: 'top-1/2 -right-12', delay: 0.5 },
    ],
  };

  const renderShape = (shape, index) => {
    const baseStyles = \`absolute \${shape.position} \${shape.size} bg-gradient-to-br \${shape.color} opacity-80 blur-sm\`;
    
    const shapeStyles = {
      sphere: 'rounded-full',
      cube: 'rounded-2xl rotate-45',
      torus: 'rounded-full ring-8 ring-white/20',
      cone: 'rounded-full skew-y-12',
    };

    return (
      <motion.div
        key={index}
        className={\`\${baseStyles} \${shapeStyles[shape.type]}\`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 0.7, 
          scale: 1,
          y: [0, -20, 0],
          rotate: shape.type === 'cube' ? [45, 90, 45] : 0
        }}
        transition={{
          delay: shape.delay,
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes[variant]?.map(renderShape)}
    </div>
  );
}`;

export async function downloadAllComponents() {
  const zip = new JSZip();

  // Root files
  zip.file('README.md', readme);
  zip.file('package.json', packageJson);
  zip.file('tailwind.config.js', tailwindConfig);

  // Fetch actual TypeScript files from the app
  const fetchFile = async (path) => {
    try {
      const response = await fetch(`/__base44/files?path=${encodeURIComponent(path)}`);
      if (response.ok) {
        const text = await response.text();
        return text;
      }
    } catch (e) {
      console.error(`Failed to fetch ${path}:`, e);
    }
    return null;
  };

  // Pages folder
  const pagesFolder = zip.folder('pages');
  
  // Fetch all page files
  const pageFiles = ['Home.jsx', 'Kits.jsx', 'KitsStandard.jsx', 'Components.jsx', 'LandingKit.jsx', 'Docs.jsx'];
  for (const pageFile of pageFiles) {
    const content = await fetchFile(`pages/${pageFile}`);
    if (content) {
      pagesFolder.file(pageFile, content);
    }
  }

  // Components folder
  const componentsFolder = zip.folder('components');

  // Fetch actual component files from the app
  const uiKitFolder = componentsFolder.folder('ui-kit');
  
  // Fetch all component category files
  const componentCategories = [
    'buttons/ButtonComponents.jsx',
    'cards/CardComponents.jsx',
    'inputs/InputComponents.jsx',
    'forms/FormComponents.jsx',
    'navigation/NavigationComponents.jsx',
    'alerts/AlertComponents.jsx',
    'logins/LoginComponents.jsx',
    'sections/SectionComponents.jsx',
    'badges/BadgeComponents.jsx',
    'avatars/AvatarComponents.jsx',
    'emails/EmailComponents.jsx',
    'ctas/CTAComponents.jsx',
    'heroes/HeroComponents.jsx',
    'FloatingShapes.jsx',
    'ComponentCard.jsx',
    'Logo.jsx'
  ];

  for (const categoryFile of componentCategories) {
    const content = await fetchFile(`components/ui-kit/${categoryFile}`);
    if (content) {
      // Create folder structure if needed
      if (categoryFile.includes('/')) {
        const parts = categoryFile.split('/');
        const folder = uiKitFolder.folder(parts[0]);
        folder.file(parts[1], content);
      } else {
        uiKitFolder.file(categoryFile, content);
      }
    }
  }

  // Fetch utils
  const utilsFolder = componentsFolder.folder('utils');
  const downloadSiteContent = await fetchFile('components/utils/downloadSite.js');
  if (downloadSiteContent) {
    utilsFolder.file('downloadSite.js', downloadSiteContent);
  }

  // Fetch Layout file
  const layoutContent = await fetchFile('Layout.js');
  if (layoutContent) {
    zip.file('Layout.js', layoutContent);
  }

  // Generate and download
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'fluidui-components.zip');
  
  return true;
}