# Landing Corelia Academy - Astro Project

Dự án landing page cho Corelia Academy được xây dựng bằng **Astro** với React components.

## 🚀 Tech Stack

- **Astro** v5.16.3 - Static site generator
- **React** v19.2.0 - UI components
- **Tailwind CSS** v4.1.17 - Styling
- **TypeScript** - Type safety

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Chạy dev server:

```bash
npm run dev
```

Truy cập: `http://localhost:4321`

## 🏗️ Build

Build production:

```bash
npm run build
```

Output sẽ được tạo trong folder `dist/`

## 📁 Project Structure

```
/
├── src/
│   ├── components/     # React & Astro components
│   ├── layouts/       # Layout templates
│   ├── pages/         # Route pages (.astro files)
│   ├── lib/           # Utilities & helpers
│   └── styles/        # Global styles
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
└── package.json       # Dependencies
```

## 🌐 Deployment

Dự án đã được cấu hình cho **Netlify**:

- Build command: `npm run build`
- Publish directory: `dist`

## 📝 Notes

- Tất cả React components cần `client:load` directive khi sử dụng trong `.astro` files
- JSX trong props phải dùng function call: `icon={UserIcon({})}` thay vì `icon={<UserIcon />}`
- Static assets đặt trong `public/` folder
