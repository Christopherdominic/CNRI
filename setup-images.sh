#!/bin/bash

# CNRI Website - Image Setup Script
# This script helps organize images for the website

echo "🖼️  CNRI Website - Image Setup"
echo "================================"
echo ""

# Create necessary directories
echo "📁 Creating image directories..."
mkdir -p public/activities
mkdir -p public/partners
mkdir -p public/team
echo "✅ Directories created!"
echo ""

# Check if images exist
echo "🔍 Checking for images..."
echo ""

if [ -f "public/hero-nutrition-bg.jpg" ]; then
    echo "✅ Hero background found"
else
    echo "❌ Hero background missing: public/hero-nutrition-bg.jpg"
    echo "   Download from: https://unsplash.com/s/photos/nutrition"
fi

if [ -f "public/activities/townhall-breastfeeding.jpg" ]; then
    echo "✅ Town hall activity image found"
else
    echo "❌ Missing: public/activities/townhall-breastfeeding.jpg"
fi

if [ -f "public/activities/community-outreach.jpg" ]; then
    echo "✅ Community outreach image found"
else
    echo "❌ Missing: public/activities/community-outreach.jpg"
fi

if [ -f "public/activities/radio-program.jpg" ]; then
    echo "✅ Radio program image found"
else
    echo "❌ Missing: public/activities/radio-program.jpg"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Extract images from your PDF (see IMAGE-SETUP.md)"
echo "2. Download a hero background from Unsplash"
echo "3. Place images in the correct folders"
echo "4. Run: npm run dev"
echo ""
echo "For detailed instructions, see: IMAGE-SETUP.md"
