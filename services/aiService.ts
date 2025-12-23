import { Prompt, CategoryType } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

interface GeneratePromptsRequest {
  category: CategoryType;
  count: number;
  searchQuery?: string;
}

export async function generatePrompts({ category, count, searchQuery }: GeneratePromptsRequest): Promise<Prompt[]> {
  if (!API_KEY) {
    console.warn('AI API key not configured');
    return [];
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

  try {
    const systemPrompt = `Generate ${count} ${category} prompts${searchQuery ? ` about "${searchQuery}"` : ''}. Return ONLY a JSON array, no markdown:
[{"id":"${category.toLowerCase().replace(/[^a-z]/g,'')}-X","title":"Title","description":"Short benefit","content":"Detailed prompt with [PLACEHOLDERS]","category":"${category}","tags":["tag1","tag2"],"popularity":75,"createdAt":"2024-12-22"}]`;

    const response = await fetch(`${API_ENDPOINT}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 20,
          topP: 0.8,
          maxOutputTokens: 2048,
        }
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`AI generation failed: ${response.status}`);
    }

    const data = await response.json();
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textContent) {
      throw new Error('No content returned from AI');
    }

    // Extract JSON from markdown code blocks if present
    const jsonMatch = textContent.match(/```(?:json)?\s*(\[[\s\S]*?\])\s*```/) || 
                     textContent.match(/(\[[\s\S]*?\])/);
    
    const jsonStr = jsonMatch ? jsonMatch[1] : textContent;
    const prompts = JSON.parse(jsonStr) as Prompt[];

    // Validate and sanitize
    return prompts.map((p, idx) => ({
      ...p,
      id: p.id || `ai-${category.toLowerCase().replace(/[^a-z]/g, '')}-${Date.now()}-${idx}`,
      category: category,
      popularity: Math.min(99, Math.max(60, p.popularity || 75)),
      createdAt: p.createdAt || new Date().toISOString().split('T')[0]
    }));

  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('AI generation timeout - request took too long');
    } else {
      console.error('AI prompt generation failed:', error);
    }
    return [];
  }
}

export function isAIConfigured(): boolean {
  return !!API_KEY && API_KEY.length > 10;
}
