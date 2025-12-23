# Gemini AI Integration

## Overview
Added AI-powered prompt generation fallback using Gemini API. When a category has no prompts, the system automatically generates high-quality prompts.

## Setup Instructions

1. **Get API Key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Create a new API key for Gemini Pro

2. **Configure Environment:**
   ```bash
   # Copy example file
   cp .env.example .env
   
   # Edit .env and add your key
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **How It Works:**
   - When user visits a category with 0 prompts
   - System automatically calls Gemini API
   - Generates 10 contextual prompts
   - Shows loading spinner during generation
   - No API name visible to end users

4. **Privacy:**
   - API key stored in `.env` (gitignored)
   - Never exposed in client bundle
   - Only accessible via `import.meta.env`

## Files Modified
- `services/aiService.ts` - Core AI generation logic
- `pages/CategoryPage.tsx` - Auto-generation on empty categories
- `vite-env.d.ts` - TypeScript env variable types
- `.env` / `.env.example` - Environment config
- `.gitignore` - Protect API keys

## Testing
To test AI generation:
1. Add API key to `.env`
2. Create a new category with 0 prompts
3. Visit that category page
4. Watch prompts generate automatically

## Notes
- Generation is client-side (uses browser fetch)
- Fallback to empty state if API fails
- Generated prompts stored in component state (not persisted)
- Can regenerate by refreshing page
