$filePath = "E:\Site\complete\PROMPT MASTER\data\prompts.ts"
$content = Get-Content $filePath -Raw

# Define expansions for remaining short descriptions
$expansions = @{
    "description: 'Develop gaming channel strategy.'" = "description: 'Develop gaming channel strategy tailored to your game genre competitive level and audience preferences. Choose games that match your personality plan content variety like gameplay commentary tutorials and highlights set streaming schedules build community and establish collaboration networking and sponsorship pathways. Balance entertainment with authenticity to grow a dedicated gaming fanbase.'"
    
    "description: 'Repurpose podcasts as YouTube videos.'" = "description: 'Repurpose podcasts as YouTube videos by adding visual elements that enhance audio content. Extract highlights create dynamic thumbnails add B-roll text overlays speaker visuals and chapter markers. Optimize titles descriptions and tags for discoverability while linking back to full podcast episodes building cross-platform audience and maximizing content ROI.'"
    
    "description: 'Create customer testimonial videos.'" = "description: 'Create customer testimonial videos that build trust through authentic stories measurable results and emotional connection. Script interviews that highlight pain points solutions and transformations, film with professional quality ensure consent and privacy and edit for compelling narrative flow. Include clear CTAs and distribute across marketing channels to drive conversions.'"
    
    "description: 'Create step-by-step tutorial videos.'" = "description: 'Create step-by-step tutorial videos that teach skills clearly and comprehensively with visual demonstrations pauses for understanding and on-screen captions. Structure prerequisites materials detailed instructions troubleshooting and next steps. Use screen recordings close-ups and slow-motion where needed to ensure viewers can follow replicate and succeed with your guidance.'"
    
    "description: 'Write engaging travel vlog content.'" = "description: 'Write engaging travel vlog content that transports viewers through immersive storytelling beautiful cinematography local experiences and practical travel tips. Plan narrative arcs showcase landmarks food culture and hidden gems maintain pacing and energy add personal reflections and provide value through recommendations budgets and logistics that inspire and inform travelers.'"
    
    "description: 'Launch products effectively via video.'" = "description: 'Launch products effectively via video with clear value propositions compelling demos customer proof and strong calls-to-action. Build anticipation through teasers explain problems solved showcase features in action and create urgency with limited offers. Coordinate launch timing promotion channels and follow-up content to maximize initial momentum and sustained sales.'"
    
    "description: 'Create viral challenge video content.'" = "description: 'Create viral challenge video content with clear rules escalating difficulty entertaining attempts and participation hooks. Design challenges that are fun achievable and shareable encourage viewers to try and tag you use branded hashtags and coordinate across platforms. Balance entertainment with safety and ride trends for maximum algorithmic boost and community engagement.'"
    
    "description: 'Create event recap videos.'" = "description: 'Create event recap videos that capture highlights energy and key moments with dynamic editing participant perspectives and behind-the-scenes footage. Structure emotional arcs thank sponsors and attendees promote future events and deliver shareable clips for social amplification. Balance information with entertainment to extend event impact and build anticipation for next time.'"
}

foreach ($old in $expansions.Keys) {
    $new = $expansions[$old]
    if ($content -match [regex]::Escape($old)) {
        $content = $content -replace [regex]::Escape($old), $new
        Write-Host "Replaced: $old"
    } else {
        Write-Host "NOT FOUND: $old" -ForegroundColor Yellow
    }
}

# Save updated content
Set-Content $filePath $content -NoNewline
Write-Host "`nExpansion complete!" -ForegroundColor Green
