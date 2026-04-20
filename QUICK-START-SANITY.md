# 🚀 Quick Start - Sanity CMS Integration

## Your website is now fully integrated with Sanity CMS!

All static content has been replaced with dynamic content while preserving the exact UI.

## Step 1: Start Sanity Studio

```bash
cd studio-cnri-website
npm run dev
```

Open: **http://localhost:3333**

## Step 2: Add Content

In Sanity Studio, add content for each type:

### Required Content (in order):

1. **Site Settings** (singleton)
   - Contact email, phone, address
   - Social media links
   - Site description

2. **About Page** (singleton)
   - Mission statement
   - Vision statement
   - Commitment text

3. **Programs** (add all 10)
   - NPRP, TDFP, GHAP, AP-PIP, NECEP, NDMP, FESSP, IYCN-P, AYNEP, ENHAP
   - Set order: 0-9

4. **Focus Areas** (add 5)
   - Research, Climate-Smart Agriculture, Education, Policy, Empowerment
   - Set icons: Microscope, Sprout, BookOpen, Scale, Users
   - Set colors: bg-blue-500, bg-primary-500, bg-accent-500, bg-purple-500, bg-pink-500
   - Set order: 0-4

5. **Team Members**
   - Add all staff with categories: leadership, coordinators, staff, technical, advisory, interns
   - Set order for display

6. **Partners** (add 5)
   - Ministry of Budget and Planning, State Nutrition Office, KADENAP, H4CC, KADMAM
   - Set order: 0-4

7. **Activities** (add 3+)
   - Mark 3 as "featured" to show on homepage
   - Upload images

8. **Conference**
   - Add conference details
   - Set isActive = true
   - Add objectives, sub-themes, participants

## Step 3: Start Website

```bash
cd cnri-website
npm run dev
```

Open: **http://localhost:3000**

## ✅ What Changed

- **Data Source**: Static arrays → Sanity CMS
- **UI/Styling**: Unchanged (100% preserved)
- **Components**: Same structure, just different data source
- **Updates**: Content changes appear immediately

## 📋 Content Checklist

- [ ] Site Settings configured
- [ ] About page content added
- [ ] 10 Programs added
- [ ] 5 Focus Areas added
- [ ] Team members added
- [ ] 5 Partners added
- [ ] 3+ Activities added (3 marked as featured)
- [ ] Conference added (isActive = true)

## 🎯 Testing

After adding content in Sanity:
1. Refresh website pages
2. Content should appear immediately
3. All styling and layout preserved

## 💡 Tips

- Use the "order" field to control display sequence
- Upload images for better visual appeal
- Mark activities as "featured" to show on homepage
- Only one conference should have isActive = true

That's it! Your CNRI website is now powered by Sanity CMS! 🎉
