#!/usr/bin/env bash
# Quick Start Guide for Excel HOPE Application

echo "🎓 Excel HOPE Charity Application - Quick Start"
echo "=============================================="
echo ""

# Check if Node modules are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo "Visit http://localhost:3000 in your browser"
echo ""
echo "📍 Key Pages:"
echo "   - Home: http://localhost:3000"
echo "   - Projects: http://localhost:3000/project"
echo "   - Sponsor a Child: http://localhost:3000/sponser-a-child"
echo "   - About Us: http://localhost:3000/about-us"
echo ""
echo "📋 Next Steps:"
echo "   1. Review APPLICATION_UPDATES.md for all changes"
echo "   2. Test the sponsorship flow on http://localhost:3000/sponser-a-child"
echo "   3. For Google Sheets integration, follow GOOGLE_SHEETS_SETUP.md"
echo "   4. Update project images and organize logos in /public"
echo ""

npm run dev
