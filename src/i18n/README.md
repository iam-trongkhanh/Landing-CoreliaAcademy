# 🌐 i18n Implementation Guide

## Cấu trúc thư mục / Folder Structure

```
src/i18n/
├── locales/
│   ├── vi.json          # Tiếng Việt
│   └── en.json          # English
├── utils.ts             # i18n utilities
├── example-index.astro  # Example usage
└── README.md            # This file
```

## 📝 Cách sử dụng / How to Use

### 1. Trong Astro Pages (.astro files)

```astro
---
import { getLangFromUrl, useTranslations } from "../i18n/utils";

// Get current language
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
<button>{t('hero.cta.apply')}</button>
```

### 2. Trong React Components (.tsx files)

```tsx
import { useTranslations } from '../i18n/utils';
import type { Language } from '../i18n/utils';

interface MyComponentProps {
  lang: Language;
}

export function MyComponent({ lang }: MyComponentProps) {
  const t = useTranslations(lang);

  return (
    <div>
      <h2>{t('departments.title')}</h2>
      <p>{t('departments.items.psychology.description')}</p>
    </div>
  );
}
```

### 3. Truyền language vào React Components

```astro
---
import { MyComponent } from "../components/MyComponent";
import { getLangFromUrl } from "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
---

<MyComponent lang={lang} client:load />
```

## 🔗 URL Structure

### Default (prefixDefaultLocale: false)

- Vietnamese (default): `/`, `/about`, `/programs`
- English: `/en`, `/en/about`, `/en/programs`

### Alternative (prefixDefaultLocale: true)

- Vietnamese: `/vi`, `/vi/about`, `/vi/programs`
- English: `/en`, `/en/about`, `/en/programs`

## 📂 Page Structure Required

```
src/pages/
├── index.astro          # Vietnamese homepage
├── about.astro          # Vietnamese about page
├── programs.astro       # Vietnamese programs page
└── en/
    ├── index.astro      # English homepage
    ├── about.astro      # English about page
    └── programs.astro   # English programs page
```

## 🎯 Adding New Translations

### Bước 1: Thêm vào file JSON

```json
// src/i18n/locales/vi.json
{
  "newSection": {
    "title": "Tiêu đề mới",
    "description": "Mô tả mới"
  }
}

// src/i18n/locales/en.json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

### Bước 2: Sử dụng trong code

```astro
<h1>{t('newSection.title')}</h1>
<p>{t('newSection.description')}</p>
```

## 🔄 Language Switcher

Đã tạo component `LanguageSwitcher.tsx` - thêm vào header:

```astro
---
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { getLangFromUrl } from "../i18n/utils";

const lang = getLangFromUrl(Astro.url);
---

<header>
  <nav>
    <!-- Navigation items -->
  </nav>
  <LanguageSwitcher
    currentLang={lang}
    currentPath={Astro.url.pathname}
    client:load
  />
</header>
```

## 🎨 Styling Language Switcher

Component đã có style cơ bản. Customize theo design của bạn:

```tsx
// src/components/LanguageSwitcher.tsx
// Thay đổi className để match với design system
```

## ⚙️ Configuration

### astro.config.mjs

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
```

## 📋 Best Practices

1. **Luôn dùng translation keys**, không hardcode text:
   ```astro
   ❌ <h1>Welcome to Corelia Academy</h1>
   ✅ <h1>{t('hero.title')}</h1>
   ```

2. **Organize translations theo sections**:
   ```json
   {
     "hero": { ... },
     "departments": { ... },
     "footer": { ... }
   }
   ```

3. **Fallback to default language** nếu thiếu translation
   - Utils đã handle auto fallback về Vietnamese

4. **Keep translation keys descriptive**:
   ```json
   ❌ "btn1": "Apply Now"
   ✅ "hero.cta.apply": "Apply Now"
   ```

## 🚀 Migration Steps

### Để migrate existing pages:

1. Update `astro.config.mjs` với i18n config
2. Tạo folder `en/` trong `src/pages/`
3. Copy Vietnamese pages vào `en/` folder
4. Update content với `t()` function
5. Test cả 2 languages: `/` và `/en`

## 🐛 Troubleshooting

### Translation không hiển thị?

1. Check key có đúng trong JSON không
2. Check đã import `useTranslations` chưa
3. Check đã pass `lang` prop cho React components chưa

### Language switcher không hoạt động?

1. Check `client:load` directive có trong component không
2. Check paths có đúng không

### 404 error khi switch language?

1. Check đã tạo corresponding page trong `en/` folder chưa
2. Check routing config trong `astro.config.mjs`

## 📚 Resources

- [Astro i18n Docs](https://docs.astro.build/en/guides/internationalization/)
- [Astro i18n Routing](https://docs.astro.build/en/guides/internationalization/#routing)
