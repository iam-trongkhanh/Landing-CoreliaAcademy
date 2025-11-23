# SEO Testing Guide - Eduvet University

## 🚀 Quick Start Testing

### 1. Google Search Console Setup

1. **Verify Ownership**:

   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://www.eduvet.edu` (update with your actual domain)
   - Choose verification method (HTML file, meta tag, or DNS)
   - Add verification code to `lib/seo.ts` in the `verification` object

2. **Submit Sitemap**:
   - After verification, go to Sitemaps section
   - Submit: `https://www.eduvet.edu/sitemap.xml`
   - Wait 24-48 hours for Google to crawl

### 2. Google PageSpeed Insights

**Test URL**: `https://pagespeed.web.dev/`

1. Enter your website URL
2. Test on both Mobile and Desktop
3. Target scores:
   - **Performance**: > 90
   - **Accessibility**: > 90
   - **Best Practices**: > 90
   - **SEO**: > 95

**Core Web Vitals Targets**:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 3. Schema Markup Validation

**Test URL**: `https://validator.schema.org/`

1. Enter your website URL
2. Check for:
   - ✅ Organization Schema
   - ✅ Breadcrumb Schema
   - ✅ FAQ Schema (homepage)
   - ✅ Course Schema (programs page)

**Alternative**: Use [Google Rich Results Test](https://search.google.com/test/rich-results)

### 4. Mobile-Friendly Test

**Test URL**: `https://search.google.com/test/mobile-friendly`

1. Enter your website URL
2. Verify:
   - ✅ Mobile-friendly
   - ✅ Text is readable
   - ✅ Tap targets are appropriately sized
   - ✅ Content fits mobile screen

### 5. Lighthouse Audit (Chrome DevTools)

1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
4. Click "Generate report"
5. Target: All scores > 90

### 6. SEO Checklist Verification

Run through this checklist:

#### Technical SEO

- [ ] All pages have unique `<title>` tags (50-60 characters)
- [ ] All pages have unique meta descriptions (150-160 characters)
- [ ] All images have descriptive `alt` attributes
- [ ] Canonical URLs are set correctly
- [ ] Sitemap.xml is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] HTTPS is enabled (SSL certificate)
- [ ] 404 page exists and is user-friendly
- [ ] Internal linking structure is logical

#### Content SEO

- [ ] H1 tag is present and unique on each page
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] Keywords are naturally integrated in content
- [ ] Content is original and valuable
- [ ] URLs are SEO-friendly (e.g., `/programs/psychology`)

#### Schema Markup

- [ ] Organization schema is present
- [ ] Breadcrumb schema on all pages
- [ ] FAQ schema on homepage
- [ ] Course schema on programs page

#### Performance

- [ ] Page load time < 3 seconds
- [ ] Images are optimized (WebP/AVIF format)
- [ ] Fonts load with `display: swap`
- [ ] JavaScript is minified
- [ ] CSS is minified

#### Mobile

- [ ] Responsive design works on all devices
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling

## 📊 Monitoring Tools

### Free Tools

1. **Google Search Console**: Monitor search performance, indexing, clicks
2. **Google Analytics 4**: Track user behavior, conversions
3. **Bing Webmaster Tools**: Submit sitemap for Bing
4. **Google PageSpeed Insights**: Monitor Core Web Vitals
5. **Ahrefs Free Tools**: Check backlinks, keyword rankings
6. **Ubersuggest**: Keyword research and competitor analysis

### Paid Tools (Optional)

1. **Ahrefs**: Comprehensive SEO toolkit
2. **SEMrush**: Keyword research and competitor analysis
3. **Moz Pro**: SEO analytics and link building

## 🎯 Keyword Tracking

### Primary Keywords to Monitor

1. "university in NYC"
2. "NYC university"
3. "social science programs"
4. "psychology degree NYC"
5. "quality education"

### How to Track

1. Set up Google Search Console
2. Go to "Performance" section
3. Monitor:
   - Impressions (how often your site appears)
   - Clicks (how often users click)
   - Average position (your ranking)
   - CTR (click-through rate)

## 📈 Monthly SEO Tasks

### Week 1: Analytics Review

- [ ] Review Google Search Console for errors
- [ ] Check keyword rankings
- [ ] Analyze top-performing pages
- [ ] Identify pages with low traffic

### Week 2: Content Updates

- [ ] Update outdated content
- [ ] Add new blog posts
- [ ] Optimize underperforming pages
- [ ] Add internal links

### Week 3: Technical Audit

- [ ] Check for broken links
- [ ] Verify schema markup
- [ ] Test page speed
- [ ] Check mobile usability

### Week 4: Link Building

- [ ] Reach out for guest posts
- [ ] Submit to directories
- [ ] Build relationships with education sites
- [ ] Create shareable content

## 🔍 Advanced Testing

### 1. Structured Data Testing

```bash
# Test schema markup
curl https://www.eduvet.edu | grep -o 'application/ld+json'
```

### 2. Sitemap Validation

```bash
# Check sitemap
curl https://www.eduvet.edu/sitemap.xml
```

### 3. Robots.txt Validation

```bash
# Check robots.txt
curl https://www.eduvet.edu/robots.txt
```

### 4. Core Web Vitals Monitoring

- Use Google Search Console → Core Web Vitals report
- Monitor real user metrics (RUM)
- Set up alerts for performance degradation

## 🐛 Common Issues & Fixes

### Issue: Pages not indexed

**Fix**:

- Check robots.txt
- Submit sitemap in Search Console
- Request indexing for important pages

### Issue: Low Core Web Vitals scores

**Fix**:

- Optimize images (use Next/Image)
- Minimize JavaScript
- Use CDN for static assets
- Enable compression

### Issue: Duplicate content

**Fix**:

- Set canonical URLs
- Use 301 redirects for duplicate pages
- Consolidate similar content

### Issue: Mobile usability issues

**Fix**:

- Test on real devices
- Fix viewport meta tag
- Optimize touch targets
- Reduce content width

## 📝 SEO Report Template

### Monthly Report Should Include:

1. **Traffic Overview**

   - Total sessions
   - Organic traffic
   - Top landing pages
   - Bounce rate

2. **Keyword Performance**

   - Top 10 keywords
   - Ranking changes
   - New keywords ranking

3. **Technical Issues**

   - Crawl errors
   - Indexing issues
   - Page speed issues

4. **Content Performance**

   - Top content
   - Underperforming pages
   - Content gaps

5. **Backlinks**
   - New backlinks
   - Lost backlinks
   - Domain authority changes

## 🎓 Learning Resources

1. **Google SEO Starter Guide**: https://developers.google.com/search/docs/beginner/seo-starter-guide
2. **Next.js SEO Documentation**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
3. **Schema.org Documentation**: https://schema.org/
4. **Web.dev Performance**: https://web.dev/performance/

## ✅ Pre-Launch Checklist

Before going live, ensure:

- [ ] All metadata is filled
- [ ] Sitemap is submitted
- [ ] Robots.txt is configured
- [ ] Schema markup is validated
- [ ] All images have alt text
- [ ] Mobile-friendly test passes
- [ ] PageSpeed score > 90
- [ ] SSL certificate is installed
- [ ] Analytics is tracking
- [ ] Search Console is verified

## 🚀 Post-Launch Actions

1. **Week 1**:

   - Monitor Google Search Console for errors
   - Check indexing status
   - Verify analytics tracking

2. **Month 1**:

   - Review keyword rankings
   - Analyze traffic patterns
   - Optimize underperforming pages

3. **Month 3**:

   - Evaluate SEO strategy
   - Expand content calendar
   - Build more backlinks

4. **Month 6**:
   - Comprehensive SEO audit
   - Competitor analysis
   - Strategy refinement
