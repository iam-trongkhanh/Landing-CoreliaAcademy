# 🚀 Hướng Dẫn Deploy Next.js Lên Netlify - Chi Tiết

## 📋 Mục Lục

1. [Chuẩn Bị](#chuẩn-bị)
2. [Phương Pháp 1: Deploy Qua Netlify CLI (Nhanh)](#phương-pháp-1-deploy-qua-netlify-cli)
3. [Phương Pháp 2: Deploy Qua GitHub (Khuyên Dùng)](#phương-pháp-2-deploy-qua-github)
4. [Cấu Hình Build Settings](#cấu-hình-build-settings)
5. [Cấu Hình Domain](#cấu-hình-domain)
6. [Kiểm Tra Sau Khi Deploy](#kiểm-tra-sau-khi-deploy)
7. [Troubleshooting](#troubleshooting)

---

## 📦 Chuẩn Bị

### 1. Kiểm Tra Project

Đảm bảo project build thành công:

```bash
# Chạy trong terminal
cd /Users/mac/Documents/Working/academy/landing-page-2/landing-page-academy

# Build project
npm run build

# Kiểm tra build thành công (không có lỗi)
```

### 2. Tạo File `netlify.toml` (Quan Trọng)

Tạo file cấu hình Netlify trong root của project:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"

# Redirects cho Next.js
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Lưu ý**: Next.js trên Netlify cần plugin đặc biệt. Chúng ta sẽ cài đặt sau.

### 3. Cập Nhật `package.json`

Đảm bảo có script build:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

---

## 🎯 Phương Pháp 1: Deploy Qua Netlify CLI (Nhanh Nhất)

### Bước 1: Cài Đặt Netlify CLI

**⚠️ Lưu ý**: Nếu gặp lỗi permission, dùng `npx` thay vì cài global.

**Option A: Dùng npx (Khuyên dùng - Không cần cài global)**

```bash
# Không cần cài, chỉ cần dùng npx
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --prod
```

**Option B: Cài global với sudo (Nếu cần)**

```bash
# Cài đặt với quyền admin
sudo npm install -g netlify-cli

# Sau đó dùng bình thường
netlify login
```

**Option C: Cấu hình npm prefix (Giải pháp tốt nhất)**

```bash
# Tạo thư mục cho global packages
mkdir ~/.npm-global

# Cấu hình npm
npm config set prefix '~/.npm-global'

# Thêm vào PATH (thêm vào ~/.zshrc hoặc ~/.bash_profile)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Sau đó cài bình thường
npm install -g netlify-cli
```

### Bước 2: Login vào Netlify

```bash
# Login



# Mở browser và đăng nhập
```

### Bước 3: Khởi Tạo Site

```bash
# Trong thư mục project
cd /Users/mac/Documents/Working/academy/landing-page-2/landing-page-academy

# Khởi tạo site
netlify init

# Chọn:
# - Create & configure a new site
# - Team: Chọn team của bạn
# - Site name: eduvet-university (hoặc tên bạn muốn)
# - Build command: npm run build
# - Directory to deploy: .next
```

### Bước 4: Deploy

```bash
# Deploy production
netlify deploy --prod

# Hoặc deploy draft (để test trước)
netlify deploy
```

### Bước 5: Xem Kết Quả

Sau khi deploy, bạn sẽ nhận được URL:

- **Production URL**: `https://your-site-name.netlify.app`
- **Draft URL**: `https://random-id--your-site-name.netlify.app`

---

## 🔄 Phương Pháp 2: Deploy Qua GitHub (Khuyên Dùng)

### Bước 1: Push Code Lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm remote
git remote add origin https://github.com/your-username/landing-page-academy.git

# Commit code
git add .
git commit -m "Initial commit - Ready for Netlify deployment"

# Push lên GitHub
git push -u origin main
```

### Bước 2: Tạo Tài Khoản Netlify

1. Truy cập: https://www.netlify.com
2. Click **"Sign up"**
3. Chọn **"Sign up with GitHub"** (khuyên dùng)
4. Authorize Netlify truy cập GitHub

### Bước 3: Tạo Site Mới Từ GitHub

1. Vào **Netlify Dashboard**
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn **"Deploy with GitHub"**
4. Chọn repository: `landing-page-academy`
5. Click **"Connect"**

### Bước 4: Cấu Hình Build Settings

Netlify sẽ tự động detect Next.js, nhưng bạn cần kiểm tra:

**Build settings:**

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Base directory**: (để trống)

**Environment variables** (nếu cần):

- `NODE_VERSION`: `20`
- Thêm các biến môi trường khác nếu có

### Bước 5: Deploy

1. Click **"Deploy site"**
2. Đợi build hoàn tất (2-5 phút)
3. Xem kết quả tại URL được cung cấp

---

## ⚙️ Cấu Hình Build Settings Chi Tiết

### 1. Tạo File `netlify.toml` trong Root

Tạo file `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"

# Headers cho security và performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Redirects
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Cài Đặt Netlify Next.js Plugin

```bash
# Cài đặt plugin
npm install --save-dev @netlify/plugin-nextjs
```

Hoặc thêm vào `package.json`:

```json
{
  "devDependencies": {
    "@netlify/plugin-nextjs": "^4.39.0"
  }
}
```

### 3. Cấu Hình Trong Netlify Dashboard

Vào **Site settings** → **Build & deploy** → **Build settings**:

- **Base directory**: (để trống)
- **Build command**: `npm run build`
- **Publish directory**: `.next`

---

## 🌐 Cấu Hình Domain

### 1. Domain Mặc Định

Netlify tự động cung cấp domain:

- `https://your-site-name.netlify.app`

### 2. Thêm Custom Domain

1. Vào **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Nhập domain: `www.yourdomain.com`
4. Làm theo hướng dẫn để cấu hình DNS:
   - Thêm CNAME record trỏ đến `your-site-name.netlify.app`
   - Hoặc A record trỏ đến IP của Netlify

### 3. SSL Certificate

- Netlify tự động cung cấp SSL certificate (HTTPS)
- Miễn phí và tự động renew

---

## ✅ Kiểm Tra Sau Khi Deploy

### 1. Kiểm Tra URL Chính

Truy cập:

- `https://your-site-name.netlify.app`
- Kiểm tra homepage load đúng

### 2. Kiểm Tra Các Pages

- `/about` - About page
- `/programs` - Programs page
- `/sitemap.xml` - Sitemap
- `/robots.txt` - Robots.txt

### 3. Kiểm Tra SEO

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Schema Validator**: https://validator.schema.org/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### 4. Kiểm Tra Console

- Mở DevTools (F12)
- Kiểm tra không có lỗi JavaScript
- Kiểm tra images load đúng

### 5. Kiểm Tra Responsive

- Test trên mobile, tablet, desktop
- Kiểm tra navigation menu
- Kiểm tra forms hoạt động

---

## 🔧 Troubleshooting

### Lỗi 1: Build Failed

**Nguyên nhân**: Thiếu dependencies hoặc lỗi code

**Giải pháp**:

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install

# Build lại local
npm run build

# Kiểm tra lỗi
```

### Lỗi 2: 404 Not Found

**Nguyên nhân**: Next.js routing không hoạt động

**Giải pháp**:

- Đảm bảo đã cài `@netlify/plugin-nextjs`
- Kiểm tra `netlify.toml` có redirects đúng

### Lỗi 3: Images Không Load

**Nguyên nhân**: Next.js Image optimization

**Giải pháp**:

- Netlify tự động hỗ trợ Next.js Image
- Kiểm tra `next.config.ts` có cấu hình đúng

### Lỗi 4: Environment Variables

**Nguyên nhân**: Thiếu biến môi trường

**Giải pháp**:

1. Vào **Site settings** → **Environment variables**
2. Thêm các biến cần thiết
3. Redeploy site

### Lỗi 5: Build Timeout

**Nguyên nhân**: Build quá lâu (>15 phút)

**Giải pháp**:

- Tối ưu dependencies
- Giảm số lượng images
- Kiểm tra `package.json` có dependencies không cần thiết

---

## 📝 Checklist Trước Khi Deploy

- [ ] Project build thành công local (`npm run build`)
- [ ] Đã tạo file `netlify.toml`
- [ ] Đã cài `@netlify/plugin-nextjs`
- [ ] Code đã push lên GitHub (nếu dùng phương pháp 2)
- [ ] Đã cập nhật `siteConfig.url` trong `lib/seo.ts`
- [ ] Đã test responsive trên local
- [ ] Đã kiểm tra không có lỗi console

---

## 🚀 Quick Deploy Commands

### Deploy Lần Đầu

```bash
# 1. Login
netlify login

# 2. Init
netlify init

# 3. Deploy
netlify deploy --prod
```

### Deploy Lần Sau (Khi Có Thay Đổi)

```bash
# Nếu dùng CLI
netlify deploy --prod

# Nếu dùng GitHub
git add .
git commit -m "Update"
git push
# Netlify tự động deploy
```

---

## 📊 Monitoring & Analytics

### 1. Netlify Analytics

- Vào **Analytics** tab trong Netlify Dashboard
- Xem traffic, page views, top pages

### 2. Deploy Logs

- Vào **Deploys** tab
- Xem build logs chi tiết
- Kiểm tra lỗi nếu có

### 3. Function Logs

- Nếu có serverless functions
- Xem logs trong **Functions** tab

---

## 🎯 Best Practices

1. **Luôn test build local trước khi deploy**
2. **Sử dụng GitHub để auto-deploy**
3. **Thiết lập branch previews** (deploy preview cho mỗi PR)
4. **Monitor Core Web Vitals** sau khi deploy
5. **Cập nhật sitemap URL** trong Google Search Console
6. **Test trên nhiều devices** sau khi deploy

---

## 📞 Support

Nếu gặp vấn đề:

1. Kiểm tra **Deploy logs** trong Netlify Dashboard
2. Xem **Netlify Docs**: https://docs.netlify.com/
3. **Next.js on Netlify**: https://docs.netlify.com/integrations/frameworks/next-js/

---

**Chúc bạn deploy thành công! 🎉**
