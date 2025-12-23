import { Prompt, Category, CategoryType } from '../types';
import { COPYWRITING_PROMPTS } from './copywriting_import';

export const CATEGORIES: Category[] = [
  {
    id: 'ChatGPT',
    title: 'ChatGPT Prompts',
    icon: 'MessageSquare',
    description: 'Universal productivity, coding, reasoning, and general-purpose AI templates.',
    slug: 'chatgpt-prompts'
  },
  {
    id: 'SEO',
    title: 'SEO & Blog Writing',
    icon: 'Search',
    description: 'Rank higher with search-optimized content templates and keyword tools.',
    slug: 'seo-prompts'
  },
  {
    id: 'YouTube',
    title: 'YouTube Scripts',
    icon: 'Youtube',
    description: 'Viral hooks, full script outlines, and channel growth strategies.',
    slug: 'youtube-prompts'
  },
  {
    id: 'Midjourney',
    title: 'Image AI Prompts',
    icon: 'Image',
    description: 'Detailed artistic prompts for Midjourney, DALL-E, and Stable Diffusion.',
    slug: 'image-ai-prompts'
  },
  {
    id: 'Fiverr/Upwork',
    title: 'Gig & Freelance',
    icon: 'Briefcase',
    description: 'Win more clients with persuasive proposals and gig descriptions.',
    slug: 'freelance-prompts'
  },
  {
    id: 'Social Media',
    title: 'Social Media',
    icon: 'Share2',
    description: 'Captions, carousel hooks, and engagement-boosting strategies.',
    slug: 'social-media-prompts'
  },
  {
    id: 'Marketing',
    title: 'Business & Marketing',
    icon: 'TrendingUp',
    description: 'Ad copy, sales emails, brand strategy, and scaling frameworks.',
    slug: 'marketing-prompts'
  },
  {
    id: 'Copywriting',
    title: 'Copywriting',
    icon: 'MessageSquare',
    description: 'High-converting ads, landing pages, and emails for growth.',
    slug: 'copywriting-prompts'
  },
  {
    id: 'Email Marketing',
    title: 'Email Marketing',
    icon: 'Mail',
    description: 'AI-powered email sequences, subject lines, and campaigns.',
    slug: 'email-marketing-prompts'
  }
];

export const PROMPTS: Prompt[] = [
  // --- CHATGPT ---
  {
    id: 'gpt-001',
    title: 'Universal Problem Solver',
    description: 'Break down complex challenges into fundamental components using first principles thinking and advanced logical reasoning. Get expert-level problem analysis with multiple solution approaches, risk assessments, and strategic recommendations that help you tackle difficult situations with clarity and confidence through structured analytical frameworks.',
    content: "I am facing a challenge with [PROBLEM]. Act as an expert consultant. Analyze the problem using 'First Principles Thinking', break it down into its fundamental parts, and suggest 3 unique solutions with a risk assessment for each.",
    category: 'ChatGPT',
    tags: ['logic', 'problem-solving', 'strategy'],
    popularity: 98,
    createdAt: '2024-05-01'
  },
  {
    id: 'gpt-002',
    title: 'Clean Code Auditor',
    description: 'Conduct comprehensive code reviews as a Senior Software Architect analyzing security vulnerabilities performance bottlenecks and adherence to clean code principles. Receive detailed explanations of potential issues readability improvements and refactored code examples that follow DRY principles and industry best practices for maintainable software development.',
    content: "Act as a Senior Software Architect. Review the following [LANGUAGE] code for: 1. Potential security vulnerabilities, 2. Performance bottlenecks, 3. Readability and adherence to DRY principles. Suggest refactored versions for critical sections.\n\nCode:\n[CODE]",
    category: 'ChatGPT',
    tags: ['coding', 'architecture', 'review'],
    popularity: 94,
    createdAt: '2024-05-02'
  },
  {
    id: 'gpt-003',
    title: 'Socratic Tutor',
    description: 'Master any subject through Socratic teaching methods that promote deep understanding and critical thinking. Instead of passive learning engage with carefully crafted questions that guide you to discover core concepts independently strengthening reasoning skills and building lasting comprehension through self-discovery and active participation in the learning process.',
    content: "I want to learn about [TOPIC]. Instead of giving me a long explanation, act as a Socratic Tutor. Ask me a series of questions that guide me to discover the core concepts myself. Start with one simple question to gauge my current understanding.",
    category: 'ChatGPT',
    tags: ['learning', 'education', 'philosophy'],
    popularity: 89,
    createdAt: '2024-05-03'
  },
  {
    id: 'gpt-004',
    title: 'Business Strategy Consultant',
    description: 'Transform your business with strategic consulting expertise tailored to your specific industry revenue goals and growth timeline. Receive detailed five-step growth plans complete with measurable metrics market opportunity analysis competitive positioning strategies and practical implementation timelines that move your business from current state to ambitious revenue targets through proven frameworks.',
    content: "I run a [BUSINESS_TYPE] business in the [INDUSTRY] space. Our current revenue is [REVENUE] and we want to reach [TARGET_REVENUE] in [TIMEFRAME]. Act as a strategic consultant and create a detailed 5-step growth plan with specific metrics, market opportunities, and implementation timeline.",
    category: 'ChatGPT',
    tags: ['business', 'strategy', 'growth'],
    popularity: 92,
    createdAt: '2024-05-04'
  },
  {
    id: 'gpt-005',
    title: 'Career Development Coach',
    description: 'Design comprehensive career development roadmaps that transition you from current position to target role through strategic planning. Get detailed guidance on skills development certification requirements networking strategies timeline planning and actionable steps that accelerate your professional growth and help you achieve career goals within your desired timeframe through structured planning.',
    content: "I currently work as a [JOB_TITLE] with [YEARS] years of experience. I want to transition to [TARGET_ROLE] in [TIMEFRAME]. Act as a career coach and create a detailed roadmap including skills to develop, certifications to pursue, networking strategies, and timeline for achieving this goal.",
    category: 'ChatGPT',
    tags: ['career', 'development', 'planning'],
    popularity: 88,
    createdAt: '2024-05-05'
  },
  {
    id: 'gpt-006',
    title: 'Data Analysis Expert',
    description: 'Analyze complex datasets and extract actionable insights.',
    content: "I have data about [DATA_DESCRIPTION] in [DATA_FORMAT]. I need to understand [SPECIFIC_QUESTION]. Act as a data analyst and help me: 1) Identify the key metrics, 2) Suggest visualization approaches, 3) Reveal hidden patterns, 4) Recommend actions based on findings.",
    category: 'ChatGPT',
    tags: ['data', 'analysis', 'insights'],
    popularity: 90,
    createdAt: '2024-05-06'
  },
  {
    id: 'gpt-007',
    title: 'Content Marketing Strategist',
    description: 'Create a comprehensive content marketing plan.',
    content: "I'm launching [PRODUCT/SERVICE] targeting [AUDIENCE]. Create a 12-month content marketing strategy including: content pillars, distribution channels, posting frequency, content types, SEO keywords, engagement metrics to track, and specific content calendar for the first 3 months.",
    category: 'ChatGPT',
    tags: ['marketing', 'content', 'strategy'],
    popularity: 91,
    createdAt: '2024-05-07'
  },
  {
    id: 'gpt-008',
    title: 'UX/UI Design Consultant',
    description: 'Get expert feedback on user experience and interface design.',
    content: "I'm designing [APP/WEBSITE] for [USER_GROUP]. Act as a UX/UI expert and evaluate the following aspects: user flow, information architecture, visual hierarchy, accessibility compliance, mobile responsiveness, and conversion optimization. Provide specific recommendations for improvement.",
    category: 'ChatGPT',
    tags: ['design', 'ux', 'ui'],
    popularity: 87,
    createdAt: '2024-05-08'
  },
  {
    id: 'gpt-009',
    title: 'Financial Planning Expert',
    description: 'Create detailed financial plans and investment strategies.',
    content: "I have [AMOUNT] to invest and my financial goal is [GOAL]. Act as a certified financial planner. Analyze my situation considering my risk tolerance [RISK_LEVEL], time horizon [TIMEFRAME], and income [INCOME]. Provide a diversified investment strategy with specific allocations and risk assessment.",
    category: 'ChatGPT',
    tags: ['finance', 'investment', 'planning'],
    popularity: 85,
    createdAt: '2024-05-09'
  },
  {
    id: 'gpt-010',
    title: 'Market Research Analyst',
    description: 'Conduct comprehensive market research and competitive analysis.',
    content: "I want to enter the [MARKET] with [PRODUCT/SERVICE]. Act as a market researcher and provide: market size estimates, growth trends, competitor analysis (top 5 competitors), customer demographics, buying behavior patterns, and gaps in the current market.",
    category: 'ChatGPT',
    tags: ['research', 'market', 'competition'],
    popularity: 89,
    createdAt: '2024-05-10'
  },
  {
    id: 'gpt-011',
    title: 'Project Management Expert',
    description: 'Plan and manage complex projects efficiently with proven project management frameworks and methodologies. Get comprehensive guidance on scope definition work breakdown structures risk management resource allocation timeline planning and stakeholder communication that helps you deliver projects on time within budget and meeting quality expectations while maintaining team productivity and managing constraints effectively throughout the entire project lifecycle.',
    content: "I need to manage a [PROJECT_TYPE] project with [TEAM_SIZE] people, budget [BUDGET], and deadline [DEADLINE]. Act as a project manager and create: project scope, work breakdown structure, risk management plan, resource allocation, timeline with milestones, and communication strategy.",
    category: 'ChatGPT',
    tags: ['project', 'management', 'planning'],
    popularity: 86,
    createdAt: '2024-05-11'
  },
  {
    id: 'gpt-012',
    title: 'Public Speaking Coach',
    description: 'Improve your presentation and speaking skills with practical coaching that builds confidence clarity and impact. Structure talks with compelling openings persuasive body sections and memorable conclusions while mastering body language vocal variety visual aid usage audience interaction and anxiety control techniques. Develop rehearsal routines feedback loops and delivery strategies that make your message resonate and your performance stand out in any speaking context.',
    content: "I need to give a [SPEECH_TYPE] presentation about [TOPIC] to [AUDIENCE_TYPE] in [TIMEFRAME]. Act as a speaking coach and help me: structure my presentation, create engaging opening and closing, manage nervousness, improve body language, use visual aids effectively, and practice delivery.",
    category: 'ChatGPT',
    tags: ['speaking', 'presentation', 'communication'],
    popularity: 84,
    createdAt: '2024-05-12'
  },
  {
    id: 'gpt-013',
    title: 'Personal Brand Architect',
    description: 'Build a powerful personal brand strategy that differentiates you in your industry and attracts your ideal audience consistently. Develop your unique value proposition content pillars platform presence visual identity and strategic positioning that establishes authority generates opportunities and creates lasting professional reputation through authentic storytelling consistent messaging and targeted visibility across channels where your audience actively engages with industry thought leaders.',
    content: "I'm a [PROFESSION] with [EXPERIENCE] years of expertise in [FIELD]. I want to build a personal brand that attracts [TARGET_AUDIENCE]. Create a comprehensive personal branding strategy including: unique value proposition, content pillars, platform strategy, visual identity guidelines, and 6-month implementation plan.",
    category: 'ChatGPT',
    tags: ['branding', 'personal', 'strategy'],
    popularity: 88,
    createdAt: '2024-05-13'
  },
  {
    id: 'gpt-014',
    title: 'Educational Curriculum Designer',
    description: 'Create structured learning programs and courses that achieve clear outcomes and keep learners engaged throughout the journey. Design complete curricula with measurable objectives module sequencing lesson plans assessments formative feedback strategies and resource requirements tailored to learner level and course duration. Integrate active learning techniques, accessibility best practices, and evaluation methods to ensure your program delivers practical skills and demonstrable results for diverse learner needs.',
    content: "I want to teach [SUBJECT] to [STUDENT_LEVEL] learners. Design a comprehensive course curriculum including: learning objectives, module breakdown, lesson plans, assessment methods, engagement strategies, resource requirements, and expected outcomes. Consider [DURATION] as the course length.",
    category: 'ChatGPT',
    tags: ['education', 'curriculum', 'learning'],
    popularity: 83,
    createdAt: '2024-05-14'
  },
  {
    id: 'gpt-015',
    title: 'Health & Wellness Coach',
    description: 'Create personalized health and fitness plans tailored to your goals lifestyle constraints and current condition for sustainable results. Get comprehensive wellness strategies covering nutrition optimization exercise programming sleep hygiene stress management and behavior change techniques that help you achieve fitness goals improve energy levels enhance overall health and maintain lasting lifestyle improvements through science-backed approaches customized to your unique needs and preferences.',
    content: "I want to improve my [HEALTH_GOAL] in [TIMEFRAME]. My current fitness level is [FITNESS_LEVEL], age [AGE], and any health considerations [HEALTH_CONDITIONS]. Act as a certified wellness coach and create a detailed plan including nutrition, exercise, sleep, stress management, and progress tracking methods.",
    category: 'ChatGPT',
    tags: ['health', 'wellness', 'fitness'],
    popularity: 85,
    createdAt: '2024-05-15'
  },
  {
    id: 'gpt-016',
    title: 'Creative Writing Assistant',
    description: 'Develop compelling narratives and stories with engaging plots memorable characters and emotional depth that captivate readers. Master storytelling techniques including plot structure character development dialogue writing conflict creation pacing strategies and narrative arcs that transform your ideas into powerful stories that resonate with audiences create lasting impressions and demonstrate your creative voice through compelling fiction or narrative nonfiction writing across any genre.',
    content: "I want to write a [GENRE] story about [MAIN_IDEA]. Key elements: setting [SETTING], protagonist [CHARACTER], conflict [CONFLICT]. Act as a creative writing coach and help me: develop a plot outline, create character depth, establish tension, write compelling dialogue, and craft an impactful ending.",
    category: 'ChatGPT',
    tags: ['writing', 'creativity', 'storytelling'],
    popularity: 87,
    createdAt: '2024-05-16'
  },
  {
    id: 'gpt-017',
    title: 'Negotiation Strategist',
    description: 'Master negotiation tactics and achieve win-win outcomes through structured preparation and strategic communication. Build leverage by understanding interests BATNA and walkaway points, craft persuasive proposals, handle objections confidently, and use anchoring framing and concession patterns effectively. Learn to manage power dynamics, read signals, de-escalate tension, and close agreements that protect your priorities while maintaining strong professional relationships for future opportunities.',
    content: "I'm about to negotiate [NEGOTIATION_TYPE] with [OTHER_PARTY]. My target outcome is [TARGET]. Act as a negotiation expert and provide: preparation checklist, key talking points, objection handlers, walkaway scenarios, value creation strategies, and closing tactics.",
    category: 'ChatGPT',
    tags: ['negotiation', 'strategy', 'business'],
    popularity: 84,
    createdAt: '2024-05-17'
  },
  {
    id: 'gpt-018',
    title: 'Customer Service Expert',
    description: 'Build world-class customer service systems that exceed expectations create loyalty and turn customers into brand advocates consistently. Establish service standards response protocols training frameworks support channels and complaint resolution processes that ensure consistent high-quality experiences across all touchpoints reducing churn increasing satisfaction scores and creating competitive advantages through exceptional service that differentiates your business and drives referrals through delighted customers.',
    content: "I run a [BUSINESS_TYPE] and want to improve customer service. Current pain points: [PAIN_POINTS]. Act as a customer service strategist and create: service standards, response protocols, team training framework, support channels, complaint resolution system, and customer satisfaction metrics.",
    category: 'ChatGPT',
    tags: ['customer-service', 'support', 'operations'],
    popularity: 82,
    createdAt: '2024-05-18'
  },
  {
    id: 'gpt-019',
    title: 'Technology Stack Advisor',
    description: 'Choose the right tools and technology for your project with architecture guidance that balances performance scalability developer velocity and cost. Evaluate languages frameworks databases hosting options and supporting services against concrete requirements and constraints. Understand tradeoffs, integration complexity, ecosystem maturity, and long-term maintainability so your tech stack supports product goals today and adapts smoothly as your user base, features, and team grow over time.',
    content: "I'm building [PROJECT_TYPE] for [USERS] users. Requirements: [KEY_REQUIREMENTS]. Budget: [BUDGET], Timeline: [TIMELINE]. Act as a tech architect and recommend a technology stack including: programming languages, frameworks, databases, hosting, and tools. Justify each choice with pros/cons.",
    category: 'ChatGPT',
    tags: ['technology', 'architecture', 'development'],
    popularity: 89,
    createdAt: '2024-05-19'
  },
  {
    id: 'gpt-020',
    title: 'Sustainability Consultant',
    description: 'Implement sustainable practices in your business through data-driven environmental improvements that also support profitability and compliance. Conduct impact assessments, prioritize reduction opportunities, explore certifications, and create practical roadmaps covering energy efficiency waste reduction supply chain optimization and reporting frameworks. Align sustainability initiatives with brand values operations and stakeholder expectations to reduce risk lower costs and strengthen long-term competitive advantage responsibly.',
    content: "My [BUSINESS_TYPE] company wants to become more sustainable. Current operations: [CURRENT_PRACTICES]. Act as a sustainability consultant and provide: environmental impact assessment, reduction strategies, green certification opportunities, cost-benefit analysis, and implementation roadmap.",
    category: 'ChatGPT',
    tags: ['sustainability', 'environment', 'business'],
    popularity: 78,
    createdAt: '2024-05-20'
  },
  {
    id: 'gpt-021',
    title: 'AI/ML Implementation Guide',
    description: 'Plan AI and machine learning initiatives strategically from concept through deployment with proper technical foundations and business alignment. Develop comprehensive ML implementation roadmaps covering problem definition data requirements model selection infrastructure needs team capabilities success metrics and deployment strategies that ensure your AI projects deliver measurable business value solve real problems and integrate successfully into existing systems with sustainable long-term maintenance and improvement plans.',
    content: "I want to implement [ML_USECASE] using AI/ML in my [BUSINESS_TYPE]. Current data: [DATA_DESCRIPTION], Team expertise: [TEAM_LEVEL]. Act as an AI strategist and outline: problem definition, data requirements, model selection, implementation phases, success metrics, and team training needs.",
    category: 'ChatGPT',
    tags: ['ai', 'machine-learning', 'innovation'],
    popularity: 91,
    createdAt: '2024-05-21'
  },
  {
    id: 'gpt-022',
    title: 'Crisis Management Specialist',
    description: 'Develop crisis response and recovery plans that protect your organization during emergencies and minimize damage to operations reputation and stakeholder trust. Create comprehensive crisis management frameworks including risk assessment rapid response protocols communication strategies stakeholder management recovery timelines and preventive measures that prepare your team to handle unexpected challenges confidently while maintaining business continuity and emerging stronger from adverse situations through prepared systematic crisis navigation.',
    content: "My [BUSINESS_TYPE] faces potential risks including [RISKS]. Act as a crisis management expert and create: risk assessment, crisis response plan, communication strategy, stakeholder management, recovery timeline, and preventive measures to minimize future impact.",
    category: 'ChatGPT',
    tags: ['crisis', 'management', 'risk'],
    popularity: 81,
    createdAt: '2024-05-22'
  },
  {
    id: 'gpt-023',
    title: 'Organizational Development Consultant',
    description: 'Build stronger teams and company culture through strategic organizational development initiatives that improve engagement productivity and employee satisfaction sustainably. Implement cultural transformation programs leadership development initiatives communication improvements team-building activities and performance management systems that create positive work environments where employees thrive teams collaborate effectively and organizational health metrics demonstrate measurable improvements in retention morale and overall business performance through intentional culture cultivation.',
    content: "My organization has [TEAM_SIZE] employees and faces challenges: [CHALLENGES]. Act as an OD consultant and provide: cultural transformation plan, team-building strategies, leadership development programs, communication improvements, and metrics to measure organizational health.",
    category: 'ChatGPT',
    tags: ['organization', 'culture', 'development'],
    popularity: 80,
    createdAt: '2024-05-23'
  },
  {
    id: 'gpt-024',
    title: 'Legal Strategy Advisor',
    description: 'Navigate legal challenges and compliance requirements strategically with practical frameworks for managing business legal risks and regulatory obligations effectively. Understand key compliance areas risk mitigation strategies documentation requirements dispute resolution approaches and when to engage specialized legal counsel while developing systematic approaches to legal risk management that protect your business maintain regulatory compliance and minimize exposure to litigation through proactive strategic legal planning and informed decision-making processes.',
    content: "My [BUSINESS_TYPE] faces legal concerns regarding [LEGAL_ISSUE]. Act as a legal strategist (not attorney) and outline: key compliance requirements, risk mitigation strategies, documentation needs, dispute resolution options, and when to consult actual legal counsel.",
    category: 'ChatGPT',
    tags: ['legal', 'compliance', 'risk'],
    popularity: 76,
    createdAt: '2024-05-24'
  },
  {
    id: 'gpt-025',
    title: 'Innovation Workshop Facilitator',
    description: 'Generate breakthrough ideas and innovations through structured creative processes that unlock your team potential and drive meaningful business transformation. Facilitate ideation sessions using proven innovation frameworks rapid prototyping methodologies testing strategies implementation roadmaps and success metrics that help organizations move from concept to execution generating novel solutions to business challenges fostering innovation culture and creating competitive advantages through systematic creativity that produces tangible results beyond traditional brainstorming approaches.',
    content: "My team wants to innovate in [FIELD]. Current situation: [CURRENT_STATE], Goal: [INNOVATION_GOAL]. Act as innovation facilitator and guide me through: ideation exercises, prototyping approach, testing strategy, implementation roadmap, and metrics for measuring innovation success.",
    category: 'ChatGPT',
    tags: ['innovation', 'creativity', 'strategy'],
    popularity: 86,
    createdAt: '2024-05-25'
  },
  {
    id: 'gpt-026',
    title: 'Supply Chain Optimizer',
    description: 'Streamline supply chain and logistics operations across vendors warehouses and delivery networks with strategies that reduce costs improve reliability and increase visibility. Analyze sourcing options optimize inventory levels design replenishment policies mitigate risks and implement enabling technologies like WMS TMS and real-time tracking. Build resilient scalable supply chains that maintain service levels handle disruptions and support sustainable growth with measurable performance improvements.',
    content: "My company supplies [PRODUCTS] to [CUSTOMERS] across [GEOGRAPHY]. Current challenges: [CHALLENGES]. Act as supply chain expert and analyze: vendor optimization, inventory management, cost reduction opportunities, risk mitigation, sustainability options, and technology improvements.",
    category: 'ChatGPT',
    tags: ['supply-chain', 'operations', 'logistics'],
    popularity: 79,
    createdAt: '2024-05-26'
  },
  {
    id: 'gpt-027',
    title: 'E-commerce Conversion Expert',
    description: 'Maximize e-commerce sales and improve conversion rates with comprehensive CRO strategies informed by data and user behavior. Audit funnels identify friction points optimize product pages and checkout flows test messaging and value props improve trust signals and deploy on-site personalization. Implement structured A/B testing roadmaps and analytics that continuously increase revenue average order value and lifetime value across devices and customer segments.',
    content: "My e-commerce store sells [PRODUCTS] with current conversion rate [PERCENTAGE]. Act as CRO expert and provide: funnel analysis, A/B testing roadmap, user experience improvements, checkout optimization, trust-building strategies, and revenue growth plan with realistic targets.",
    category: 'ChatGPT',
    tags: ['ecommerce', 'conversion', 'sales'],
    popularity: 93,
    createdAt: '2024-05-27'
  },
  {
    id: 'gpt-028',
    title: 'Startup Advisor',
    description: 'Get expert guidance on launching and scaling startups from idea validation through growth stages. Clarify problem-solution fit define target personas build lean MVPs create go-to-market strategies secure funding plan hiring and establish key metrics. Avoid common pitfalls with pragmatic advice that balances speed learning and risk so you can iterate confidently and scale your venture sustainably while pursuing product-market fit.',
    content: "I'm starting a [STARTUP_IDEA] targeting [MARKET]. Current stage: [STAGE], Funding status: [FUNDING]. Act as startup advisor and help with: business model validation, market entry strategy, team building, funding roadmap, growth milestones, and common pitfalls to avoid.",
    category: 'ChatGPT',
    tags: ['startup', 'entrepreneurship', 'growth'],
    popularity: 90,
    createdAt: '2024-05-28'
  },
  {
    id: 'gpt-029',
    title: 'Change Management Coach',
    description: 'Lead organizational change successfully through proven change management frameworks and stakeholder engagement strategies. Get expert guidance on communication plans resistance management training programs and success metrics that help your company navigate transformations smoothly ensuring employee buy-in adoption and sustained behavioral change across all levels of your organization for lasting results.',
    content: "My company is implementing [CHANGE] affecting [NUMBER] employees. Current resistance level: [RESISTANCE]. Act as change management expert and create: communication plan, stakeholder engagement strategy, training program, resistance management approach, and success metrics.",
    category: 'ChatGPT',
    tags: ['change', 'management', 'leadership'],
    popularity: 77,
    createdAt: '2024-05-29'
  },
  {
    id: 'gpt-030',
    title: 'Customer Journey Mapper',
    description: 'Design optimal customer experience journeys that reduce friction increase satisfaction and drive retention across every stage from awareness to advocacy. Map touchpoints emotions pain points and moments of truth then develop targeted improvements and personalized interventions by segment. Align teams around journey insights implement cross-channel experiences and measure impact with clear CX metrics and feedback loops that continuously enhance outcomes.',
    content: "My [BUSINESS_TYPE] serves [CUSTOMER_TYPE] customers. Create detailed customer journey maps for: awareness stage, consideration, decision, and post-purchase. Include touchpoints, pain points, moments of truth, and strategies to improve satisfaction at each stage.",
    category: 'ChatGPT',
    tags: ['customer', 'journey', 'experience'],
    popularity: 88,
    createdAt: '2024-05-30'
  },
  {
    id: 'gpt-031',
    title: 'Competitive Intelligence Analyst',
    description: 'Stay ahead of competitors with structured market and competitor intelligence that informs strategic decisions. Analyze positioning strengths weaknesses content strategies pricing product features and partnerships to identify threats and opportunities. Build differentiation strategies uncover whitespace and anticipate moves using systematic tracking and insight synthesis that helps your organization adapt quickly and maintain long-term competitive advantages in dynamic markets.',
    content: "I compete in [MARKET] against [COMPETITORS]. Act as competitive intelligence expert and provide: competitor analysis (strengths/weaknesses), market positioning strategies, differentiation opportunities, threat assessment, and actionable recommendations for competitive advantage.",
    category: 'ChatGPT',
    tags: ['competition', 'strategy', 'intelligence'],
    popularity: 85,
    createdAt: '2024-05-31'
  },
  {
    id: 'gpt-032',
    title: 'Brand Strategy Developer',
    description: 'Create powerful brand identity and positioning that clearly communicates your value resonates emotionally and stands out in competitive markets. Define brand promise values personality messaging architecture and tone of voice while aligning visual identity direction and experience guidelines. Build consistent brand systems across touchpoints that strengthen recognition loyalty and trust and support effective marketing with a compelling differentiated narrative.',
    content: "My [BUSINESS_TYPE] needs a stronger brand. Current situation: [CURRENT_STATE]. Target audience: [AUDIENCE]. Act as brand strategist and develop: brand positioning, messaging framework, visual identity direction, tone of voice, brand values, and implementation strategy across all touchpoints.",
    category: 'ChatGPT',
    tags: ['branding', 'strategy', 'marketing'],
    popularity: 87,
    createdAt: '2024-06-01'
  },
  {
    id: 'gpt-033',
    title: 'Partnership Development Expert',
    description: 'Identify and cultivate strategic partnerships that expand reach enhance capabilities and create mutual value. Define partner criteria map ecosystems craft joint value propositions and design partnership models covering co-marketing integrations distribution or co-creation. Build outreach plans negotiate terms establish governance and success metrics then manage partnerships for sustained results with structured communication cadences and win-win performance frameworks.',
    content: "My company wants to form strategic partnerships in [FIELD]. Current strengths: [STRENGTHS], Goals: [GOALS]. Act as partnership expert and provide: potential partner identification, value proposition for partnerships, negotiation framework, partnership structures, and win-win scenarios.",
    category: 'ChatGPT',
    tags: ['partnership', 'strategy', 'business'],
    popularity: 80,
    createdAt: '2024-06-02'
  },
  {
    id: 'gpt-034',
    title: 'Influencer Marketing Strategist',
    description: 'Leverage influencers to reach your audience authentically through well-structured campaigns that balance brand fit creativity and measurable ROI. Identify right-tier creators craft briefs align deliverables track performance and ensure disclosure compliance. Design campaigns for awareness consideration or conversion with content guidelines amplification strategies and incentives that build credibility generate engagement and drive sales with trusted voices.',
    content: "I want to market [PRODUCT/SERVICE] using influencer partnerships. Target audience: [AUDIENCE], Budget: [BUDGET]. Act as influencer strategist and outline: influencer tier selection, partnership types, content guidelines, performance metrics, platform selection, and expected ROI.",
    category: 'ChatGPT',
    tags: ['marketing', 'influencer', 'social-media'],
    popularity: 89,
    createdAt: '2024-06-03'
  },
  {
    id: 'gpt-035',
    title: 'Retention Specialist',
    description: 'Reduce churn and improve customer lifetime value with retention programs tailored to customer segments and lifecycle stages. Diagnose churn causes implement proactive outreach build loyalty and rewards design onboarding and activation flows create win-back campaigns and strengthen product stickiness. Track leading indicators like engagement and satisfaction to intervene early and grow predictable recurring revenue with healthy retention economics.',
    content: "My business has [CHURN_RATE] monthly churn affecting [CUSTOMER_BASE]. Act as retention expert and create: churn analysis, customer segmentation, retention strategies for each segment, loyalty program design, win-back campaign, and metrics to track improvement.",
    category: 'ChatGPT',
    tags: ['retention', 'customer', 'growth'],
    popularity: 86,
    createdAt: '2024-06-04'
  },
  {
    id: 'gpt-036',
    title: 'Pricing Strategy Consultant',
    description: 'Optimize pricing for profitability and growth using market research value-based positioning elasticity analysis and strategic packaging. Evaluate competitor benchmarks cost structures and willingness-to-pay to design sustainable price tiers discount rules and upgrade paths. Test price changes responsibly monitor key metrics like ARPU and churn and align pricing with product value and customer segments to unlock durable revenue expansion.',
    content: "My [PRODUCT/SERVICE] currently priced at [PRICE] to [CUSTOMERS]. Act as pricing expert and analyze: cost structure, competitive pricing, value perception, elasticity, pricing models (freemium, tiered, dynamic), packaging strategy, and pricing optimization recommendations.",
    category: 'ChatGPT',
    tags: ['pricing', 'strategy', 'business'],
    popularity: 88,
    createdAt: '2024-06-05'
  },
  {
    id: 'gpt-037',
    title: 'Referral Program Designer',
    description: 'Create viral referral and growth programs that motivate sharing through thoughtful incentive design compelling messaging and frictionless mechanics. Choose reward structures that protect margins while driving participation implement reliable tracking and prevent abuse. Promote across channels with clear CTAs and social proof while optimizing loops for invite rates conversion and LTV to turn customers into scalable acquisition engines.',
    content: "I want to create a referral program for [PRODUCT/SERVICE]. Current user base: [SIZE]. Act as growth hacker and design: incentive structure, referral mechanics, tracking system, legal compliance, promotion strategy, and viral loop optimization for maximum word-of-mouth growth.",
    category: 'ChatGPT',
    tags: ['growth', 'referral', 'acquisition'],
    popularity: 91,
    createdAt: '2024-06-06'
  },
  {
    id: 'gpt-038',
    title: 'Diversity & Inclusion Consultant',
    description: 'Build inclusive and diverse organizations through data-informed D&I strategies that improve recruitment advancement belonging and representation. Conduct assessments identify gaps implement bias-aware hiring practices create inclusive leadership training establish ERGs update policies and measure progress with transparent goals. Foster environments where diverse perspectives thrive driving innovation performance and retention while aligning practices with company values and legal requirements.',
    content: "My organization wants to improve D&I. Current state: [CURRENT_STATE], Team size: [SIZE]. Act as D&I expert and create: assessment framework, cultural change plan, recruitment strategy, retention programs, leadership training, and metrics to measure D&I progress.",
    category: 'ChatGPT',
    tags: ['diversity', 'inclusion', 'culture'],
    popularity: 74,
    createdAt: '2024-06-07'
  },
  {
    id: 'gpt-039',
    title: 'Remote Work Optimizer',
    description: 'Build and manage effective remote and hybrid teams with proven strategies for communication collaboration and productivity. Get comprehensive guidance on establishing work structures virtual meeting protocols team bonding initiatives performance tracking systems and technology recommendations that keep distributed teams engaged connected and productive across different time zones and work arrangements.',
    content: "My company is transitioning to [WORK_MODEL] with [TEAM_SIZE] remote employees. Act as remote work expert and provide: communication systems, productivity frameworks, team building strategies, asynchronous work practices, tools recommendations, and culture maintenance approach.",
    category: 'ChatGPT',
    tags: ['remote-work', 'management', 'operations'],
    popularity: 83,
    createdAt: '2024-06-08'
  },
  {
    id: 'gpt-040',
    title: 'API Integration Guide',
    description: 'Plan and execute complex API integrations with a reliable architecture that ensures data integrity security and maintainability. Define integration patterns map data and error flows set authentication and rate limit strategies and implement monitoring and retries. Create testing plans sandbox strategies and rollout procedures that reduce downtime and surprises while delivering robust integrations between critical systems and services.',
    content: "I need to integrate [SERVICE_A] with [SERVICE_B]. Current systems: [SYSTEMS], Goals: [GOALS]. Act as integration architect and provide: integration approach, API selection, data mapping, error handling, security considerations, testing strategy, and implementation timeline.",
    category: 'ChatGPT',
    tags: ['integration', 'api', 'technology'],
    popularity: 82,
    createdAt: '2024-06-09'
  },
  {
    id: 'gpt-041',
    title: 'Cybersecurity Strategist',
    description: 'Protect your business from cyber threats with a layered security strategy tailored to your risk profile and regulatory needs. Conduct threat modeling and vulnerability assessments implement controls across identity devices networks and applications train employees and prepare incident response. Establish governance and continuous monitoring to reduce breach likelihood improve detection and ensure resilient recovery when incidents occur.',
    content: "My [BUSINESS_TYPE] handles [DATA_TYPE] data. Current security: [CURRENT_SECURITY]. Act as security strategist and assess: threat landscape, vulnerability assessment, security framework, employee training, incident response plan, compliance requirements, and technology recommendations.",
    category: 'ChatGPT',
    tags: ['security', 'cybersecurity', 'risk'],
    popularity: 87,
    createdAt: '2024-06-10'
  },
  {
    id: 'gpt-042',
    title: 'Product Roadmap Strategist',
    description: 'Build effective product development strategies and roadmaps that align user needs business goals and technical capacity. Prioritize features using transparent frameworks balance discovery and delivery create release plans and define success metrics. Coordinate stakeholders communicate tradeoffs and adapt plans based on evidence so teams ship valuable outcomes predictably while learning quickly from real user feedback and market signals.',
    content: "I'm managing a [PRODUCT_TYPE] with current users: [USER_COUNT]. Act as product strategist and help create: user research insights, feature prioritization framework, release roadmap (6-12 months), stakeholder communication plan, and metrics to measure success.",
    category: 'ChatGPT',
    tags: ['product', 'strategy', 'development'],
    popularity: 85,
    createdAt: '2024-06-11'
  },
  {
    id: 'gpt-043',
    title: 'Community Building Expert',
    description: 'Create highly engaged and loyal communities around your brand product or cause through strategic community building frameworks. Learn proven techniques for fostering meaningful interactions establishing community guidelines managing moderators creating exclusive value and implementing retention strategies that transform casual members into passionate advocates who actively participate and contribute to community growth.',
    content: "I want to build a community around [TOPIC/BRAND] with [TARGET_SIZE]. Act as community expert and provide: community strategy, content pillars, engagement tactics, moderation framework, member journey, monetization options, and growth strategies.",
    category: 'ChatGPT',
    tags: ['community', 'engagement', 'growth'],
    popularity: 81,
    createdAt: '2024-06-12'
  },
  {
    id: 'gpt-044',
    title: 'Podcast Launch Strategist',
    description: 'Plan and execute a successful podcast launch with audience-first content strategy production workflows and growth systems. Define positioning format frequency and episode structure, set up recording editing and hosting, craft show branding and trailers, and build multi-channel promotion. Implement analytics monetization pathways and guest strategies that sustain consistency improve quality and grow downloads over time.',
    content: "I want to launch a podcast about [TOPIC] targeting [AUDIENCE]. Act as podcast strategist and outline: audience analysis, content format, episode structure, guest strategy, promotion plan, monetization model, recording/production setup, and growth projections.",
    category: 'ChatGPT',
    tags: ['podcast', 'content', 'audio'],
    popularity: 79,
    createdAt: '2024-06-13'
  },
  {
    id: 'gpt-045',
    title: 'Event Marketing Planner',
    description: 'Execute successful events and conferences by aligning outcomes audience experience and operational excellence. Create end-to-end plans covering positioning venues agendas speakers sponsorships promotion registration logistics and show-run details. Develop engagement tactics measurement frameworks and post-event follow-up that convert momentum into leads revenue and community, delivering a professional attendee experience and clear ROI.',
    content: "I want to organize a [EVENT_TYPE] for [AUDIENCE] with budget [BUDGET]. Act as event strategist and cover: venue selection, attendee targeting, promotion strategy, sponsorship opportunities, agenda design, attendee experience, post-event follow-up, and ROI measurement.",
    category: 'ChatGPT',
    tags: ['event', 'marketing', 'planning'],
    popularity: 77,
    createdAt: '2024-06-14'
  },
  {
    id: 'gpt-046',
    title: 'Metrics & Analytics Specialist',
    description: 'Build data-driven measurement frameworks that connect business objectives to clear KPIs data models and reporting cadences. Define tracking plans set up analytics tools ensure data quality and design actionable dashboards for operators and leadership. Establish experimentation and attribution approaches that turn data into decisions improving performance through consistent insight generation and focused execution on what truly moves the metrics.',
    content: "My [BUSINESS_TYPE] needs better metrics and analytics. Current tracking: [CURRENT_STATE]. Act as analytics expert and establish: KPI framework, data collection strategy, dashboard design, reporting cadence, attribution modeling, and actionable insights process.",
    category: 'ChatGPT',
    tags: ['analytics', 'metrics', 'data'],
    popularity: 84,
    createdAt: '2024-06-15'
  },
  {
    id: 'gpt-047',
    title: 'Vendor Management Expert',
    description: 'Optimize vendor relationships and contracts to improve service quality reduce risk and lower total cost of ownership. Build structured evaluation criteria negotiate SLAs and remedies implement QBRs and performance scorecards and maintain healthy communication rhythms. Manage diversification and exit strategies while aligning vendors to business goals compliance requirements and security standards for reliable long-term partnerships.',
    content: "I work with [NUMBER] vendors providing [SERVICES/PRODUCTS]. Act as vendor management expert and help with: vendor evaluation, contract negotiation, SLA establishment, performance monitoring, risk management, cost optimization, and relationship management strategies.",
    category: 'ChatGPT',
    tags: ['vendor', 'management', 'procurement'],
    popularity: 72,
    createdAt: '2024-06-16'
  },
  {
    id: 'gpt-048',
    title: 'Webinar & Masterclass Creator',
    description: 'Design and promote high-converting webinars that educate build trust and drive action. Choose high-demand topics craft compelling titles create value-packed slide narratives and prepare presenters for engaging delivery. Set up flawless tech promotion sequences and post-event follow-up that nurtures leads into customers while measuring registrations attendance engagement and conversion to continuously improve results.',
    content: "I want to create a webinar on [TOPIC] for [AUDIENCE]. Act as webinar expert and provide: topic research, title optimization, slide structure, speaker tips, technical setup, promotion strategy, attendee engagement tactics, and conversion to sales approach.",
    category: 'ChatGPT',
    tags: ['webinar', 'education', 'marketing'],
    popularity: 86,
    createdAt: '2024-06-17'
  },
  {
    id: 'gpt-049',
    title: 'Automation Specialist',
    description: 'Identify and implement business automation that reduces manual work increases accuracy and frees teams for higher-value tasks. Audit workflows to find repetitive steps select appropriate tools (RPA iPaaS no-code) design resilient automations with logging and alerts and measure time and cost savings. Train teams and establish governance so automations scale safely and remain maintainable over time.',
    content: "My workflow for [PROCESS] involves [STEPS] taking [TIME] daily/weekly. Act as automation expert and assess: repetitive tasks, automation tool selection (RPA, Zapier, etc.), implementation approach, cost-benefit analysis, team training, and expected time/cost savings.",
    category: 'ChatGPT',
    tags: ['automation', 'productivity', 'efficiency'],
    popularity: 88,
    createdAt: '2024-06-18'
  },
  {
    id: 'gpt-050',
    title: 'Comprehensive Business Audit',
    description: 'Conduct a thorough business performance review across finance operations marketing sales customer success people and technology to reveal strengths gaps and opportunities. Analyze key metrics processes and capabilities then prioritize recommendations with impact and effort estimates. Deliver an actionable roadmap that improves efficiency profitability and strategic focus with clear owners timelines and success criteria.',
    content: "My [BUSINESS_TYPE] has been operating for [TIME]. Act as management consultant and conduct comprehensive audit covering: financial health, operational efficiency, market positioning, customer satisfaction, team capability, technology infrastructure, risk assessment, and strategic recommendations.",
    category: 'ChatGPT',
    tags: ['audit', 'business', 'strategy'],
    popularity: 89,
    createdAt: '2024-06-19'
  },

  // --- SEO ---
  {
    id: 'seo-001',
    title: 'Pillar Content Architect',
    description: 'Create a massive 3,000+ word pillar post structure for topical authority.',
    content: "Act as an SEO strategist. Create a detailed outline for a pillar page about [TOPIC]. Include 10-15 H2 subheadings, 3-5 H3 sub-sections per H2, and suggest where to place internal links to cluster pages.",
    category: 'SEO',
    tags: ['pillar-page', 'strategy', 'seo'],
    popularity: 99,
    createdAt: '2024-06-01'
  },
  {
    id: 'seo-002',
    title: 'Semantic Keyword Clusturer',
    description: 'Group raw keywords into intent-based clusters.',
    content: "Here is a list of raw keywords: [KEYWORD LIST]. Act as an SEO specialist. Group these keywords into 'Semantic Clusters' based on user intent. Identify the primary 'Parent Keyword' for each cluster and suggest a content type (Blog, Product, Tool) for each.",
    category: 'SEO',
    tags: ['keywords', 'clustering', 'intent'],
    popularity: 92,
    createdAt: '2024-06-02'
  },
  {
    id: 'seo-003',
    title: 'Technical SEO Audit Creator',
    description: 'Identify and fix critical technical SEO issues that prevent your website from ranking well in search engines. Conduct comprehensive technical audits covering crawlability indexation site speed mobile usability structured data XML sitemaps and canonical tags with actionable recommendations and implementation priorities that improve your site health and search engine visibility systematically.',
    content: "My website [URL] has been losing traffic. Create a comprehensive technical SEO audit including: site speed analysis, crawlability issues, indexation problems, structured data checks, mobile-friendliness, Core Web Vitals, XML sitemap optimization, and robots.txt review.",
    category: 'SEO',
    tags: ['technical-seo', 'audit', 'performance'],
    popularity: 94,
    createdAt: '2024-06-03'
  },
  {
    id: 'seo-004',
    title: 'Backlink Strategy Developer',
    description: 'Build high-quality backlink acquisition plan.',
    content: "I want to improve domain authority for [WEBSITE] in [NICHE]. Current backlinks: [COUNT]. Act as link building expert and provide: backlink analysis, target website identification, outreach templates, guest post pitches, broken link opportunities, and resource page inclusion strategy.",
    category: 'SEO',
    tags: ['backlinks', 'link-building', 'authority'],
    popularity: 96,
    createdAt: '2024-06-04'
  },
  {
    id: 'seo-005',
    title: 'Long-Tail Keyword Researcher',
    description: 'Find profitable long-tail keywords with less competition.',
    content: "My [BUSINESS_TYPE] competes in [NICHE]. Act as keyword researcher and identify: 50 long-tail keywords with search volume, competition level, and intent classification. Suggest content angles for each keyword that can rank within [TIMEFRAME].",
    category: 'SEO',
    tags: ['keywords', 'research', 'long-tail'],
    popularity: 91,
    createdAt: '2024-06-05'
  },
  {
    id: 'seo-006',
    title: 'Content Gap Analyzer',
    description: 'Identify valuable missing content opportunities that your competitors are ranking for but you are not. Discover untapped keywords topics and content angles through strategic gap analysis that reveals high-potential areas where you can create superior content to capture market share improve topical authority and rank for profitable search queries your competition currently dominates.',
    content: "My competitors are [COMPETITORS]. Act as SEO analyst and identify: content gaps in my site vs competitors, keywords competitors rank for but I don't, underutilized content opportunities, topic clusters I'm missing, and prioritized list of content to create.",
    category: 'SEO',
    tags: ['content', 'strategy', 'gap-analysis'],
    popularity: 89,
    createdAt: '2024-06-06'
  },
  {
    id: 'seo-007',
    title: 'Meta Tag Optimizer',
    description: 'Create compelling titles and descriptions.',
    content: "I have [NUMBER] pages needing meta tag optimization. Act as SEO copywriter and for each page create: compelling title tags (under 60 chars), engaging meta descriptions (under 155 chars), and schema markup recommendations. Focus on CTR improvement.",
    category: 'SEO',
    tags: ['meta-tags', 'titles', 'snippets'],
    popularity: 87,
    createdAt: '2024-06-07'
  },
  {
    id: 'seo-008',
    title: 'Internal Linking Strategy Creator',
    description: 'Optimize internal link structure for SEO.',
    content: "My site has [PAGE_COUNT] pages about [TOPIC]. Create an internal linking strategy that: improves crawlability, distributes page authority, creates topical clusters, uses keyword-rich anchor text, and identifies orphan pages needing linking.",
    category: 'SEO',
    tags: ['internal-linking', 'structure', 'seo'],
    popularity: 88,
    createdAt: '2024-06-08'
  },
  {
    id: 'seo-009',
    title: 'Entity-Based SEO Guide',
    description: 'Build SEO strategy around brand entities.',
    content: "My brand is [BRAND_NAME] in [INDUSTRY]. Act as entity SEO expert and create: entity discovery strategy, entity relationship mapping, entity mention optimization, structured data for entities, and knowledge panel optimization approach.",
    category: 'SEO',
    tags: ['entity-seo', 'semantic', 'brand'],
    popularity: 85,
    createdAt: '2024-06-09'
  },
  {
    id: 'seo-010',
    title: 'Local SEO Dominator',
    description: 'Rank higher in local search results and dominate your geographic market with comprehensive local SEO strategies. Optimize Google Business Profile local citations NAP consistency location pages customer reviews and local link building tactics that help your business appear prominently in local map packs and location-based searches driving more qualified foot traffic and nearby customers to your business.',
    content: "My [BUSINESS_TYPE] serves [LOCATION]. Create comprehensive local SEO strategy: Google Business Profile optimization, local citation building, review generation strategy, local keyword targeting, local link building, and location pages structure.",
    category: 'SEO',
    tags: ['local-seo', 'gmb', 'locations'],
    popularity: 92,
    createdAt: '2024-06-10'
  },
  {
    id: 'seo-011',
    title: 'Voice Search Optimizer',
    description: 'Optimize your content for voice search queries and conversational keywords used in smart speakers and voice assistants. Learn to target question-based phrases featured snippet formats natural language patterns and local intent searches that dominate voice results helping you capture this growing search channel and position your content as the definitive answer for spoken queries.',
    content: "My site needs voice search optimization. Act as voice SEO specialist and provide: conversational keyword strategy, featured snippet optimization, question-based content structure, schema markup for voice, and long-tail optimization approach.",
    category: 'SEO',
    tags: ['voice-search', 'conversational', 'featured-snippets'],
    popularity: 83,
    createdAt: '2024-06-11'
  },
  {
    id: 'seo-012',
    title: 'Mobile-First Content Strategist',
    description: 'Create content optimized for mobile users.',
    content: "My [BUSINESS_TYPE] is losing mobile traffic. Design mobile-first content strategy: optimize for mobile intent, create mobile-friendly formats, reduce load times, improve readability, optimize CTAs for mobile, and enhance mobile user experience.",
    category: 'SEO',
    tags: ['mobile-seo', 'ux', 'performance'],
    popularity: 86,
    createdAt: '2024-06-12'
  },
  {
    id: 'seo-013',
    title: 'Featured Snippet Capturer',
    description: 'Win coveted featured snippets and position zero rankings in Google search results through strategic content optimization. Master formatting techniques that target paragraph lists table and video snippets with precise answer structures concise definitions and optimized content formats that increase your visibility click-through rates and establish your authority as the primary answer source for high-value search queries.',
    content: "My keywords are [KEYWORDS]. Research featured snippets for each: identify snippet type (paragraph, list, table), analyze current snippet holder, create optimized content to capture snippet, format data properly, and track snippet performance.",
    category: 'SEO',
    tags: ['featured-snippets', 'serp', 'optimization'],
    popularity: 90,
    createdAt: '2024-06-13'
  },
  {
    id: 'seo-014',
    title: 'E-E-A-T Content Developer',
    description: 'Build trustworthy content for EEAT signals.',
    content: "Create content for [TOPIC] that demonstrates E-E-A-T: Experience from [EXPERTISE], Expertise credentials, Authoritativeness signals, and Trustworthiness factors. Outline author bio, credentials display, and trust signals throughout content.",
    category: 'SEO',
    tags: ['eeat', 'trust', 'content'],
    popularity: 88,
    createdAt: '2024-06-14'
  },
  {
    id: 'seo-015',
    title: 'Competitor Content Analysis',
    description: 'Analyze top-ranking competitor content to understand what makes them successful and how to outrank them. Examine their content depth keyword targeting internal linking structures user engagement signals and content gaps that provide opportunities for you to create superior comprehensive resources that offer more value and capture their rankings with better-optimized pages.',
    content: "The top-ranking pages for [KEYWORD] are [URLS]. Analyze each: content length, structure, keywords covered, media usage, engagement signals, unique selling points. Identify gaps and create strategy to create superior content.",
    category: 'SEO',
    tags: ['competitor-analysis', 'content', 'keywords'],
    popularity: 89,
    createdAt: '2024-06-15'
  },
  {
    id: 'seo-016',
    title: 'Topical Authority Builder',
    description: 'Establish domain authority in specific topics.',
    content: "I want to own [TOPIC] in search results. Create comprehensive topical authority strategy: content pillars, cluster pages, comprehensive guides, pillar-to-cluster linking, content depth requirements, and authority metrics.",
    category: 'SEO',
    tags: ['topical-authority', 'strategy', 'clustering'],
    popularity: 91,
    createdAt: '2024-06-16'
  },
  {
    id: 'seo-017',
    title: 'Schema Markup Implementer',
    description: 'Implement structured data for better rankings.',
    content: "My [CONTENT_TYPE] needs schema markup. Recommend appropriate schema: [SCHEMA_TYPES], implementation method, validation approach, and expected benefits. Provide JSON-LD examples and markup best practices.",
    category: 'SEO',
    tags: ['schema-markup', 'structured-data', 'seo'],
    popularity: 84,
    createdAt: '2024-06-17'
  },
  {
    id: 'seo-018',
    title: 'Page Speed Optimizer',
    description: 'Improve Core Web Vitals and page speed to meet Google ranking standards and enhance user experience. Address issues with Largest Contentful Paint First Input Delay and Cumulative Layout Shift through image optimization code minification browser caching and server response improvements that reduce load times prevent layout shifts and create faster more responsive pages that rank better.',
    content: "My pages score [PAGESPEED_SCORE] on PageSpeed Insights. Act as performance expert: identify bottlenecks, recommend image optimization, discuss caching strategies, suggest code splitting, analyze third-party scripts impact, and create implementation roadmap.",
    category: 'SEO',
    tags: ['page-speed', 'performance', 'cwv'],
    popularity: 87,
    createdAt: '2024-06-18'
  },
  {
    id: 'seo-019',
    title: 'International SEO Strategist',
    description: 'Optimize for international search visibility.',
    content: "My business serves [COUNTRIES]. Create international SEO strategy: hreflang implementation, URL structure (subdomain vs subfolder), language targeting, local content adaptation, CDN recommendations, and market-specific SEO tactics.",
    category: 'SEO',
    tags: ['international-seo', 'hreflang', 'localization'],
    popularity: 80,
    createdAt: '2024-06-19'
  },
  {
    id: 'seo-020',
    title: 'Core Update Recovery Guide',
    description: 'Recover from Google algorithm updates and regain lost rankings traffic and revenue through strategic recovery plans. Analyze penalty causes assess content quality issues identify technical problems and implement comprehensive recovery strategies that address core update impacts rebuild authority signals and restore your site visibility in search results with sustainable long-term improvements that prevent future volatility.',
    content: "My traffic dropped after [UPDATE]. Act as recovery specialist: analyze what likely affected the site, audit content quality, check for manual actions, evaluate link profile, identify technical issues, create recovery plan with timeline.",
    category: 'SEO',
    tags: ['recovery', 'updates', 'troubleshooting'],
    popularity: 82,
    createdAt: '2024-06-20'
  },
  {
    id: 'seo-021',
    title: 'Keyword Cannibalization Resolver',
    description: 'Fix keyword cannibalization issues where multiple pages compete for the same search terms diluting your rankings. Identify conflicting pages consolidate content strategically redirect or deindex duplicate pages and establish clear topical authority through proper internal linking and content hierarchy that signals to search engines which page should rank for each target keyword improving overall performance.',
    content: "I have multiple pages ranking for [KEYWORD]. Identify cannibalization: which pages compete, consolidation recommendations, canonical tag strategy, 301 redirect plan if needed, and optimization to designate clear winner page.",
    category: 'SEO',
    tags: ['cannibalization', 'consolidation', 'keywords'],
    popularity: 79,
    createdAt: '2024-06-21'
  },
  {
    id: 'seo-022',
    title: 'Niche Website Authority Builder',
    description: 'Build topical authority in specific micro niches by creating comprehensive content clusters and demonstrating expertise. Develop strategic content plans that cover all aspects of your niche acquire relevant backlinks from industry sources and establish yourself as the definitive resource through depth breadth and quality that search engines recognize as authoritative for your specialized topic area.',
    content: "I'm building a niche site in [NICHE] targeting [AUDIENCE]. Create authority strategy: micro-content themes, deep expertise demonstration, community building, link acquisition in niche, and monetization approach.",
    category: 'SEO',
    tags: ['niche', 'authority', 'micro-content'],
    popularity: 81,
    createdAt: '2024-06-22'
  },
  {
    id: 'seo-023',
    title: 'FAQ Content Generator',
    description: 'Create FAQ content that captures searches.',
    content: "Create comprehensive FAQ page for [TOPIC]. Identify common questions from: searcher intent, competitor analysis, customer support queries. Structure with H2 for question, detailed answer, schema markup, and internal linking opportunities.",
    category: 'SEO',
    tags: ['faq', 'content', 'featured-snippets'],
    popularity: 85,
    createdAt: '2024-06-23'
  },
  {
    id: 'seo-024',
    title: 'Content Refresh Calendar Creator',
    description: 'Plan systematic content audits and update strategies that keep your website fresh relevant and high-performing. Evaluate existing content performance identify outdated information create prioritized update schedules and implement improvements that refresh thin content enhance value and maintain search rankings by demonstrating to engines that your site provides current accurate and comprehensive information users seek.',
    content: "Create content refresh calendar for [WEBSITE]. Identify high-priority pages, update strategy (minor vs major refresh), frequency based on topic maturity, content quality assessment, add new data/stats, update internal links, and track performance improvements.",
    category: 'SEO',
    tags: ['content-refresh', 'maintenance', 'strategy'],
    popularity: 80,
    createdAt: '2024-06-24'
  },
  {
    id: 'seo-025',
    title: 'Breadcrumb Navigation Optimizer',
    description: 'Optimize breadcrumb navigation structure for improved SEO and user experience throughout your website. Implement proper HTML markup schema.org structured data and logical hierarchy that helps search engines understand site architecture while providing users clear navigation paths that reduce bounce rates improve engagement and create breadcrumb-rich results in search listings that enhance click-through rates.',
    content: "Design breadcrumb navigation for [WEBSITE]: site structure analysis, breadcrumb hierarchy, schema markup (BreadcrumbList), anchor text optimization, and user experience improvement. Include examples and implementation guidance.",
    category: 'SEO',
    tags: ['breadcrumbs', 'navigation', 'ux'],
    popularity: 73,
    createdAt: '2024-06-25'
  },
  {
    id: 'seo-026',
    title: 'Comparison Content Strategy',
    description: 'Create high-ranking comparison content that captures valuable commercial intent searches and buying decisions. Master frameworks for writing product versus service comparisons that rank well by addressing user needs providing objective analysis including feature tables and delivering comprehensive evaluations that help searchers make informed decisions while positioning your content as the authoritative comparison resource in your niche.',
    content: "Create comparison content for [TOPIC]. Identify comparison keywords, analyze existing comparison pages, create comprehensive comparison framework, use comparison tables, scoring systems, and internal linking to monetization pages.",
    category: 'SEO',
    tags: ['comparison', 'content', 'keywords'],
    popularity: 84,
    createdAt: '2024-06-26'
  },
  {
    id: 'seo-027',
    title: 'Product Review Content Master',
    description: 'Write SEO-optimized product review content that ranks high and drives affiliate revenue and purchasing decisions. Create comprehensive reviews covering features pros cons alternatives and buying guides with rich structured data E-A-T signals and authentic first-hand experience that search engines trust while providing readers genuine value that converts browsers into buyers through persuasive honest evaluations.',
    content: "Write optimized review for [PRODUCT]. Include: product overview, use cases, detailed feature analysis, pros/cons list, pricing information, comparison with alternatives, personal experience/verdict, and affiliate link placement. Optimize for review keywords.",
    category: 'SEO',
    tags: ['reviews', 'affiliate', 'content'],
    popularity: 88,
    createdAt: '2024-06-27'
  },
  {
    id: 'seo-028',
    title: 'Listicle Article Optimizer',
    description: 'Create high-ranking list-based content and listicles that capture featured snippets and generate high engagement. Structure numbered or bulleted articles with compelling titles scannable formatting and comprehensive entries that satisfy search intent while encouraging social sharing and backlinks through easily digestible formats that provide quick value and answer specific queries searchers have about curated selections.',
    content: "Create listicle for [TOPIC] targeting [KEYWORD]. Determine optimal list length, create compelling intro, number each item with clear heading, provide detailed explanation with examples, add visuals, and conclude with summary. Optimize for voice search.",
    category: 'SEO',
    tags: ['listicles', 'content', 'format'],
    popularity: 82,
    createdAt: '2024-06-28'
  },
  {
    id: 'seo-029',
    title: 'How-To Guide Developer',
    description: 'Create comprehensive step-by-step how-to guides and tutorials that rank for instructional searches and provide exceptional user value. Structure detailed walkthroughs with clear numbered steps visual aids troubleshooting sections and HowTo schema markup that helps search engines understand your content while guiding users through complex processes successfully establishing your expertise through educational depth and clarity.',
    content: "Create detailed how-to guide for [TOPIC]. Include: introduction with benefit statement, prerequisites/requirements, step-by-step instructions with visuals, troubleshooting section, FAQ, summary, and next steps. Target featured snippets and 'how to' keywords.",
    category: 'SEO',
    tags: ['how-to', 'guides', 'tutorials'],
    popularity: 86,
    createdAt: '2024-06-29'
  },
  {
    id: 'seo-030',
    title: 'Cornerstone Content Builder',
    description: 'Build cornerstone content for your niche that establishes topical authority and powers your internal linking strategy. Plan comprehensive guides that cover key subtopics thoroughly, map supporting cluster pages, design clear navigation and schema structure, and align with search intent. Create definitive resources that earn backlinks, improve rankings across related terms, and serve as a trusted hub for your audience and search engines.',
    content: "Create cornerstone content for [TOPIC]. This should be 3000-5000 word definitive guide, comprehensive coverage, internal linking hub, authoritative source, and foundation for topical clusters. Include introduction, multiple sections, examples, and actionable takeaways.",
    category: 'SEO',
    tags: ['cornerstone', 'comprehensive', 'authority'],
    popularity: 89,
    createdAt: '2024-06-30'
  },
  {
    id: 'seo-031',
    title: 'SERP CTR Optimizer',
    description: 'Improve click-through rates in search results with compelling titles and meta descriptions that match intent and stand out on crowded SERPs. Use numbers brackets power words and curiosity responsibly, align promises with page content, and test variations for impact. Implement rich snippets where eligible to enhance visibility and track CTR changes to inform ongoing optimization across priority keywords.',
    content: "Analyze SERP performance for [KEYWORDS]. For underperforming keywords, optimize: title tag for curiosity/benefit, meta description to stand out, add special characters, use number/brackets for attention, create urgency when relevant.",
    category: 'SEO',
    tags: ['serp', 'ctr', 'titles'],
    popularity: 83,
    createdAt: '2024-07-01'
  },
  {
    id: 'seo-032',
    title: 'Blog Post Brief Creator',
    description: 'Create detailed content briefs for writers that ensure SEO alignment consistency and quality. Define target keywords search intent article outline headings examples internal/external links length guidelines tone visuals and success metrics. Provide competitive analysis and differentiation notes so writers produce comprehensive valuable posts that answer user questions rank effectively and reduce revision cycles through clear direction.',
    content: "Create content brief for blog post about [TOPIC]: keyword targeting, audience analysis, article structure, section breakdown, image requirements, internal links, length recommendation, writing tone, and success metrics.",
    category: 'SEO',
    tags: ['content-brief', 'workflow', 'planning'],
    popularity: 79,
    createdAt: '2024-07-02'
  },
  {
    id: 'seo-033',
    title: 'Redirect Strategy Planner',
    description: 'Plan URL migrations and redirects carefully to preserve equity and protect rankings during site changes. Audit current URLs map one-to-one 301 redirects maintain analytics tracking and metadata test for chains and loops and monitor crawl errors post-launch. Communicate changes to stakeholders and search engines while tracking traffic and rankings to validate a clean transition with minimal disruption.',
    content: "I'm migrating from [OLD_URL] to [NEW_URL]. Create redirect strategy: 301 vs 302 decisions, preserve link equity, maintain analytics tracking, test redirects thoroughly, monitor crawl errors, and track ranking/traffic impact over time.",
    category: 'SEO',
    tags: ['redirects', 'migrations', 'technical'],
    popularity: 76,
    createdAt: '2024-07-03'
  },
  {
    id: 'seo-034',
    title: 'Video SEO Optimizer',
    description: 'Optimize video content for search by aligning with video intent keywords creating compelling thumbnails and titles adding rich descriptions and transcripts and organizing playlists for topical relevance. Implement VideoObject schema timestamps and chapters, and drive engagement through hooks and clear CTAs. Promote across channels to increase watch time embeds and backlinks that improve visibility on YouTube and Google.',
    content: "I have videos about [TOPIC]. Optimize for video SEO: keyword research for video, compelling thumbnail, optimized title/description, transcript inclusion, video schema markup, playlist optimization, and promotion strategy.",
    category: 'SEO',
    tags: ['video-seo', 'youtube', 'multimedia'],
    popularity: 81,
    createdAt: '2024-07-04'
  },
  {
    id: 'seo-035',
    title: 'Infographic Content Creator',
    description: 'Create shareable infographics that attract links and social engagement by packaging useful data into clear visually compelling narratives. Source credible statistics design scannable layouts include brand attribution create embeddable code and publish an accompanying post. Execute targeted outreach to relevant publications and communities while tracking placements and link growth to validate impact on authority and rankings.',
    content: "Create infographic for [TOPIC] to attract backlinks. Design: compelling visual, clear data/statistics, easy-to-understand format, brand attribution, large size for sharing, accompanying blog post, and outreach strategy to promote.",
    category: 'SEO',
    tags: ['infographics', 'content', 'link-building'],
    popularity: 77,
    createdAt: '2024-07-05'
  },
  {
    id: 'seo-036',
    title: 'Statistics Research Guide',
    description: 'Find and use trustworthy statistics in content by sourcing primary research peer-reviewed studies industry reports and government datasets. Evaluate methodology context and freshness to avoid misleading claims. Cite properly, visualize data clearly, and integrate insights to support arguments. Identify opportunities for original research and surveys that build authority and attract natural links through unique, credible findings.',
    content: "Find authoritative statistics for [TOPIC]. Identify: primary research sources, academic studies, industry reports, credible surveys. Outline how to cite sources, use statistics to support claims, and create original research opportunities.",
    category: 'SEO',
    tags: ['statistics', 'research', 'credibility'],
    popularity: 74,
    createdAt: '2024-07-06'
  },
  {
    id: 'seo-037',
    title: 'Case Study Developer',
    description: 'Create case studies that rank and convert by combining SEO optimization with persuasive storytelling. Structure around challenge solution implementation and measurable results using concrete numbers and visuals. Target relevant keywords add schema for rich results and design clear CTAs that align with buying stages. Promote through email social and sales enablement to maximize reach and impact.',
    content: "Develop case study about [PROJECT]: challenge overview, solution approach, implementation details, measurable results, key learnings, and testimonial. Optimize for keyword, create visual data representations, and design for conversions.",
    category: 'SEO',
    tags: ['case-studies', 'content', 'conversion'],
    popularity: 80,
    createdAt: '2024-07-07'
  },
  {
    id: 'seo-038',
    title: 'Glossary Creator',
    description: 'Build an SEO-friendly glossary for niche terms that boosts topical authority and internal linking. Identify high-intent definitions create concise clear explanations add examples and related links and structure pages for scalable navigation. Target long-tail definition queries implement schema where appropriate and maintain consistent term formatting to improve discoverability and user understanding across your content ecosystem.',
    content: "Create glossary for [NICHE]: identify key terms, write clear definitions, add examples, link to related content, optimize for long-tail keywords, create anchor text opportunities, and enable internal linking throughout site.",
    category: 'SEO',
    tags: ['glossary', 'definitions', 'keywords'],
    popularity: 75,
    createdAt: '2024-07-08'
  },
  {
    id: 'seo-039',
    title: 'Webinar Content Extract',
    description: 'Repurpose webinars into SEO content efficiently by transforming recordings and slides into optimized blog posts guides FAQs social clips and visuals. Extract key insights create transcripts highlight quotes design infographics and interlink related resources. Target relevant keywords add structured data and promote across channels to extend webinar value build authority and capture ongoing search traffic.',
    content: "Repurpose [WEBINAR] into SEO content: extract key points, create blog post from transcript, develop soundbite quotes, design infographics from slides, create FAQ from Q&A, optimize for keywords, and link to original webinar.",
    category: 'SEO',
    tags: ['content-repurposing', 'webinars', 'strategy'],
    popularity: 72,
    createdAt: '2024-07-09'
  },
  {
    id: 'seo-040',
    title: 'Trend Jacking Strategy',
    description: 'Capitalize on trending topics for traffic.',
    content: "Create SEO strategy for trending topic [TREND]. Identify related keywords, create timely content, target long-tail variations, optimize meta tags, prepare for quick wins, build newsworthy angle, and establish topical authority.",
    category: 'SEO',
    tags: ['trends', 'timeliness', 'quick-wins'],
    popularity: 73,
    createdAt: '2024-07-10'
  },
  {
    id: 'seo-041',
    title: 'Resource Page Link Builder',
    description: 'Get links through resource pages.',
    content: "Build resource page outreach strategy for [NICHE]: identify relevant resource pages, qualify opportunities, create pitch strategy, develop resource page candidates, track placements, and measure link value.",
    category: 'SEO',
    tags: ['link-building', 'resources', 'outreach'],
    popularity: 69,
    createdAt: '2024-07-11'
  },
  {
    id: 'seo-042',
    title: 'Press Release Distribution',
    description: 'Use press releases for SEO benefits.',
    content: "Write press release for [NEWS]: newsworthy angle, target keywords, distribution strategy, news site targeting, link juice preservation (nofollow considerations), and traffic expectations from press coverage.",
    category: 'SEO',
    tags: ['press-release', 'publicity', 'links'],
    popularity: 67,
    createdAt: '2024-07-12'
  },
  {
    id: 'seo-043',
    title: 'Anchor Text Optimization Plan',
    description: 'Optimize anchor text across internal links.',
    content: "Audit anchor text across [WEBSITE]: identify generic anchors, over-optimized anchors, orphaned pages, opportunity pages. Create optimization plan with natural anchor text variations, maintain keyword targeting, and improve user experience.",
    category: 'SEO',
    tags: ['anchor-text', 'internal-linking', 'optimization'],
    popularity: 71,
    createdAt: '2024-07-13'
  },
  {
    id: 'seo-044',
    title: 'Link Disavowal Strategy',
    description: 'Clean up toxic backlinks.',
    content: "Audit backlinks to [WEBSITE]: identify low-quality/toxic links, spam patterns, competitor sabotage attempts. Create disavowal file, determine which links to disavow vs ignore, submit to Google Search Console.",
    category: 'SEO',
    tags: ['link-quality', 'disavow', 'cleanup'],
    popularity: 68,
    createdAt: '2024-07-14'
  },
  {
    id: 'seo-045',
    title: 'Analytics Goal Setup',
    description: 'Set up meaningful SEO analytics tracking.',
    content: "Set up analytics for [WEBSITE]: define business goals, create conversion tracking, segment organic traffic, set up goal funnels, establish attribution, create custom reports, and define success metrics.",
    category: 'SEO',
    tags: ['analytics', 'tracking', 'measurement'],
    popularity: 70,
    createdAt: '2024-07-15'
  },
  {
    id: 'seo-046',
    title: 'Seasonal Content Calendar',
    description: 'Plan seasonal content campaigns.',
    content: "Create seasonal content strategy for [BUSINESS]: identify seasonal keywords, plan content calendar, optimize for seasonal peaks, maintain consistency during low seasons, repurpose seasonal content yearly.",
    category: 'SEO',
    tags: ['seasonal', 'calendar', 'planning'],
    popularity: 72,
    createdAt: '2024-07-16'
  },
  {
    id: 'seo-047',
    title: 'SEO Reporting Dashboard',
    description: 'Create executive SEO reports.',
    content: "Design monthly SEO report for [STAKEHOLDERS]: key metrics, traffic trends, keyword rankings, ranking improvements, traffic sources, conversion data, ROI calculation, and recommendations.",
    category: 'SEO',
    tags: ['reporting', 'analytics', 'dashboards'],
    popularity: 65,
    createdAt: '2024-07-17'
  },
  {
    id: 'seo-048',
    title: 'New Website SEO Checklist',
    description: 'Pre-launch SEO optimization checklist.',
    content: "Create pre-launch SEO checklist for [NEW_WEBSITE]: domain selection, hosting, technical setup, robots.txt, sitemap creation, metadata, schema markup, initial content, indexation, monitoring setup, and launch readiness.",
    category: 'SEO',
    tags: ['technical', 'launch', 'checklist'],
    popularity: 74,
    createdAt: '2024-07-18'
  },
  {
    id: 'seo-049',
    title: 'SEO Competitor Spy',
    description: 'Deep dive into competitor SEO strategies.',
    content: "Analyze top 3 competitors for [KEYWORD]: backlink profiles, content strategy, keyword positions, technical setup, content length/structure, publishing frequency, and identify weaknesses to exploit.",
    category: 'SEO',
    tags: ['competitor-analysis', 'espionage', 'strategy'],
    popularity: 86,
    createdAt: '2024-07-19'
  },
  {
    id: 'seo-050',
    title: 'Enterprise SEO Scaling Plan',
    description: 'Scale SEO for large websites.',
    content: "Scale SEO for enterprise site [WEBSITE] with [PAGE_COUNT] pages. Create: content optimization workflow, keyword research scaling, link building program, technical SEO maintenance, analytics framework, and team structure.",
    category: 'SEO',
    tags: ['enterprise', 'scaling', 'management'],
    popularity: 79,
    createdAt: '2024-07-20'
  },

  // --- YOUTUBE ---
  {
    id: 'yt-001',
    title: 'High-Retention Video Script',
    description: 'Script that keeps viewers watching from start to finish.',
    content: "Write a full YouTube video script about [TOPIC]. Include: A 15-second hook, intro, 4 main value points, a transition between points, and a powerful CTA at the end. Use a [TONE] style.",
    category: 'YouTube',
    tags: ['youtube', 'script', 'retention'],
    popularity: 97,
    createdAt: '2024-05-08'
  },
  {
    id: 'yt-002',
    title: 'Viral Thumbnail & Hook Concepts',
    description: 'Get more clicks with psychological triggers.',
    content: "Act as a YouTube Growth Expert. Give me 5 viral thumbnail concepts and 5 corresponding video titles for a video about [TOPIC]. Use psychological triggers like 'curiosity gap', 'negativity bias', or 'social proof'.",
    category: 'YouTube',
    tags: ['growth', 'marketing', 'titles'],
    popularity: 95,
    createdAt: '2024-05-09'
  },
  {
    id: 'yt-003',
    title: 'YouTube SEO Optimizer',
    description: 'Optimize your videos for YouTube search and discovery.',
    content: "Optimize video for keyword [KEYWORD]: create SEO-optimized title, engaging description with keyword placement, organize chapters, design custom thumbnail, select category, add tags, create playlists, and suggest related videos.",
    category: 'YouTube',
    tags: ['seo', 'discovery', 'optimization'],
    popularity: 91,
    createdAt: '2024-05-10'
  },
  {
    id: 'yt-004',
    title: 'Channel Strategy Developer',
    description: 'Build a successful YouTube channel strategy tailored to your niche audience goals and resources. Define positioning content pillars and upload cadence, map growth milestones, plan collaborations and cross-promotion, and align monetization paths. Establish branding workflows analytics and experimentation routines that help you iterate based on data and build a sustainable channel that attracts engaged subscribers and consistent watch time.',
    content: "Create channel strategy for [NICHE]: channel concept, target audience definition, content pillars, upload schedule, growth milestones (0-1000, 1k-10k, 10k-100k subscribers), collaboration opportunities, and monetization timeline.",
    category: 'YouTube',
    tags: ['strategy', 'growth', 'planning'],
    popularity: 89,
    createdAt: '2024-05-11'
  },
  {
    id: 'yt-005',
    title: 'Community Tab Content Strategist',
    description: 'Maximize engagement with the Community tab by planning a content mix that sparks conversation builds loyalty and drives video views. Use polls images behind-the-scenes updates previews and questions strategically. Schedule consistently, respond to comments, and link to relevant videos or offers while measuring engagement metrics to refine what resonates with your audience over time.',
    content: "Plan Community tab content strategy: image post ideas, poll questions to spark discussion, link to merchandise/social, tease upcoming videos, ask for feedback, reward community engagement, and maintain posting schedule.",
    category: 'YouTube',
    tags: ['community', 'engagement', 'retention'],
    popularity: 84,
    createdAt: '2024-05-12'
  },
  {
    id: 'yt-006',
    title: 'Premiere Stream Script',
    description: 'Script YouTube Premiere events that maximize real-time engagement and drive views to the full upload. Plan pre-show hype segments, host intros, live chat prompts, polls, behind-the-scenes stories, and interactive Q&A moments. Include clear CTAs for likes shares and subscriptions while pacing segments to maintain excitement from countdown through post-premiere wrap-up.',
    content: "Write script for YouTube Premiere of [VIDEO] with [EXPECTED_VIEWERS]. Include pre-stream engagement, intro banter, live chat interaction opportunities, behind-the-scenes stories, Q&A structure, and thank you message.",
    category: 'YouTube',
    tags: ['premiere', 'live', 'engagement'],
    popularity: 81,
    createdAt: '2024-05-13'
  },
  {
    id: 'yt-007',
    title: 'Series Pilot Creator',
    description: 'Develop a compelling YouTube series concept with clear structure episodic hooks and audience retention built in. Design format episode topics character arcs setting and production requirements that deliver consistent value while building anticipation for the next installment. Map progression milestones and plan flexible templates that maintain quality at scale enabling you to grow a loyal returning viewership.',
    content: "Create YouTube series concept for [TOPIC]: episode format, typical episode length, episode topics (10-20 episodes), consistency strategy, character/host development, setting/production requirements, and series arc/progression.",
    category: 'YouTube',
    tags: ['series', 'format', 'planning'],
    popularity: 87,
    createdAt: '2024-05-14'
  },
  {
    id: 'yt-008',
    title: 'Collab Video Pitch Creator',
    description: 'Write compelling collaboration proposals that get responses and create win-win partnerships. Articulate shared audience benefits creative video ideas timeline feasibility and cross-promotion plans. Show you understand their brand research their content and present a clear concept that makes collaboration easy appealing and aligned with both channels goals for growth visibility and engagement.',
    content: "Create collaboration pitch for [CHANNEL] about [TOPIC]: explain mutual benefit, suggest video concept, target audience overlap, timeline, production details, cross-promotion strategy, and why the collaboration works.",
    category: 'YouTube',
    tags: ['collaboration', 'networking', 'growth'],
    popularity: 83,
    createdAt: '2024-05-15'
  },
  {
    id: 'yt-009',
    title: 'Shorts Creator Template',
    description: 'Create viral YouTube Shorts with immediate hooks trending audio and vertical-first framing. Plan concepts under 60 seconds that grab attention fast use text overlays for clarity and drive viewers to full videos or subscriptions. Optimize pacing visuals and sound for platform algorithms while maintaining your brand voice for consistent discoverability and explosive reach.',
    content: "Create [NUMBER] YouTube Shorts concepts about [TOPIC]: each under 60 seconds, catchy hook in first 3 seconds, trending audio/music, text overlay, clear CTA to watch full video, platform optimization for vertical video.",
    category: 'YouTube',
    tags: ['shorts', 'viral', 'format'],
    popularity: 92,
    createdAt: '2024-05-16'
  },
  {
    id: 'yt-010',
    title: 'Viewer Retention Analytics Consultant',
    description: 'Improve viewer retention metrics by diagnosing drop-off points pacing issues delayed payoffs and production quality gaps. Analyze audience behavior data recommend targeted edits hooks pattern interrupts and value delivery timing. Implement retention strategies that keep viewers watching longer signaling quality to the algorithm and maximizing your content impact and discoverability over time.',
    content: "Analyze retention issues for video [VIDEO_ID]: identify drop-off points, assess pacing, check for value delivery delays, review audio/visual quality, suggest retention boosters, recommend re-edits, and create retention improvement plan.",
    category: 'YouTube',
    tags: ['analytics', 'retention', 'optimization'],
    popularity: 88,
    createdAt: '2024-05-17'
  },
  {
    id: 'yt-011',
    title: 'Merchandise Strategy Consultant',
    description: 'Plan merchandise for channel monetization by aligning products with audience identity and brand aesthetics. Choose fulfillment models design items fans want to wear or use set sustainable pricing and build promotion campaigns across community posts videos and social. Project revenue and test demand before scaling to create a profitable complementary income stream that strengthens brand loyalty.',
    content: "Develop merchandise strategy for channel [CHANNEL]: product ideas aligned with audience, branding guidelines, supplier selection (print-on-demand, custom), pricing strategy, promotion plan, and revenue projections.",
    category: 'YouTube',
    tags: ['merchandise', 'monetization', 'business'],
    popularity: 79,
    createdAt: '2024-05-18'
  },
  {
    id: 'yt-012',
    title: 'Educational Content Curriculum',
    description: 'Create structured educational video series that guides learners from fundamentals to mastery with clear objectives logical progression and measurable outcomes. Design modules homework assessments resources and milestones that build confidence and competence. Balance instruction with engagement and provide certificates or completion badges that motivate sustained learning and establish you as a trusted educational authority.',
    content: "Design educational video series for [SUBJECT]: learning objectives, progression (beginner to advanced), module structure, homework/practice suggestions, assessments, supplementary resources, and completion milestones.",
    category: 'YouTube',
    tags: ['education', 'curriculum', 'learning'],
    popularity: 85,
    createdAt: '2024-05-19'
  },
  {
    id: 'yt-013',
    title: 'Reaction Video Framework',
    description: 'Create authentic reaction video formats that go beyond simple reactions by adding expert analysis context storytelling or humor. Balance spontaneous emotion with value-driven commentary choose engaging source material edit for pacing and avoid copyright pitfalls. Design thumbnails and titles that signal your unique take attracting viewers who seek deeper insight or entertainment beyond the original content.',
    content: "Plan reaction video to [CONTENT]: honest reaction elements, value-add commentary (not just reactions), target audience, video length, editing style, thumbnail concepts, and monetization considerations.",
    category: 'YouTube',
    tags: ['reaction', 'format', 'engagement'],
    popularity: 76,
    createdAt: '2024-05-20'
  },
  {
    id: 'yt-014',
    title: 'Unboxing Video Script',
    description: 'Create engaging unboxing content that showcases products with genuine enthusiasm clear feature explanations and fair comparisons. Script reveal sequences highlight practical benefits share personal use cases and deliver honest verdicts. Include calls-to-action affiliate disclosures and filming techniques like multiple angles and close-ups that maintain interest while helping viewers make informed purchase decisions.',
    content: "Script unboxing video for [PRODUCT]: unboxing flow, product features to highlight, comparison with alternatives, first impressions, personal stories, final thoughts/verdict, and call-to-action or link.",
    category: 'YouTube',
    tags: ['unboxing', 'product', 'lifestyle'],
    popularity: 80,
    createdAt: '2024-05-21'
  },
  {
    id: 'yt-015',
    title: 'Gaming Video Strategy',
    description: 'Develop gaming channel strategy.',
    content: "Create gaming channel strategy for [GAME_TYPE]: game selection, target audience (competitive/casual), content variety (gameplay/commentary/educational), streaming schedule, community building, collaboration opportunities, and monetization.",
    category: 'YouTube',
    tags: ['gaming', 'strategy', 'entertainment'],
    popularity: 86,
    createdAt: '2024-05-22'
  },
  {
    id: 'yt-016',
    title: 'Podcast to Video Converter',
    description: 'Repurpose podcasts as YouTube videos.',
    content: "Convert podcast episode [EPISODE] into YouTube video: extract key discussion points, add B-roll/visuals, create dynamic thumbnails, highlight best quotes, add text overlays, optimize for video SEO, and link to podcast.",
    category: 'YouTube',
    tags: ['repurposing', 'podcast', 'content'],
    popularity: 81,
    createdAt: '2024-05-23'
  },
  {
    id: 'yt-017',
    title: 'Testimonial Video Creator',
    description: 'Create customer testimonial videos.',
    content: "Script testimonial video for [PRODUCT/SERVICE]: customer background, pain point before, solution experience, specific results/benefits, authentic language, multiple camera angles, call-to-action, and privacy/consent considerations.",
    category: 'YouTube',
    tags: ['testimonials', 'social-proof', 'marketing'],
    popularity: 78,
    createdAt: '2024-05-24'
  },
  {
    id: 'yt-018',
    title: 'Tutorial Video Producer',
    description: 'Create step-by-step tutorial videos.',
    content: "Create tutorial for [SKILL/PROCESS]: opening hook, materials/requirements list, step-by-step progression with pauses, screen recordings if applicable, slow-motion for detail, captions, completed demo, and additional resources.",
    category: 'YouTube',
    tags: ['tutorial', 'how-to', 'education'],
    popularity: 89,
    createdAt: '2024-05-25'
  },
  {
    id: 'yt-019',
    title: 'Travel Vlog Script',
    description: 'Write engaging travel vlog content.',
    content: "Plan travel vlog for [DESTINATION]: journey narrative, landmarks/attractions, local culture moments, restaurant/food experiences, travel tips, challenges encountered, pacing through footage, and call-to-action for travel planning.",
    category: 'YouTube',
    tags: ['travel', 'vlog', 'lifestyle'],
    popularity: 83,
    createdAt: '2024-05-26'
  },
  {
    id: 'yt-020',
    title: 'Product Launch Video Plan',
    description: 'Launch products effectively via video.',
    content: "Plan product launch video for [PRODUCT]: problem it solves, feature benefits, demo/use cases, customer stories, limited-time offer, pre-order/purchase link, countdown timer, and post-launch promotion timeline.",
    category: 'YouTube',
    tags: ['launches', 'marketing', 'sales'],
    popularity: 85,
    createdAt: '2024-05-27'
  },
  {
    id: 'yt-021',
    title: 'Challenge Video Framework',
    description: 'Create viral challenge video content.',
    content: "Design challenge video [CHALLENGE_TYPE]: clear rules, difficulty progression, multiple attempts shown, reactions, winner selection, prizes if applicable, how others can participate, hashtag strategy, and follow-up coordination.",
    category: 'YouTube',
    tags: ['challenges', 'viral', 'engagement'],
    popularity: 84,
    createdAt: '2024-05-28'
  },
  {
    id: 'yt-022',
    title: 'Event Recap Video Editor',
    description: 'Create event recap videos.',
    content: "Edit event recap for [EVENT]: highlights selection, participant interviews, best moments, behind-the-scenes footage, emotional arcs, thank you credits, ticket/registration links for next event, and social media clips.",
    category: 'YouTube',
    tags: ['events', 'recap', 'marketing'],
    popularity: 77,
    createdAt: '2024-05-29'
  },
  {
    id: 'yt-023',
    title: 'ASMR Content Developer',
    description: 'Create ASMR video content.',
    content: "Develop ASMR video concept [TYPE]: trigger identification, sound quality requirements, visual aesthetics, pacing (slow/relaxing), audio equipment, editing for sound design, audience expectations, and niche positioning.",
    category: 'YouTube',
    tags: ['asmr', 'relaxation', 'niche'],
    popularity: 75,
    createdAt: '2024-05-30'
  },
  {
    id: 'yt-024',
    title: 'Mukbang Script Creator',
    description: 'Create mukbang video content.',
    content: "Plan mukbang video [CUISINE/TYPE]: food selection and presentation, eating pace, conversation topics, audio levels, camera angles (close-ups), background/atmosphere, engagement with viewers, and content authenticity.",
    category: 'YouTube',
    tags: ['mukbang', 'food', 'lifestyle'],
    popularity: 72,
    createdAt: '2024-05-31'
  },
  {
    id: 'yt-025',
    title: 'Livestream Strategy',
    description: 'Plan and execute YouTube livestreams.',
    content: "Plan livestream for [TOPIC]: promotion timeline, expected audience size, interactive segments, moderator strategy, technical setup, backup plans, real-time engagement strategies, post-stream content repurposing.",
    category: 'YouTube',
    tags: ['livestream', 'interactive', 'engagement'],
    popularity: 82,
    createdAt: '2024-06-01'
  },
  {
    id: 'yt-026',
    title: 'Channel Rebrand Strategy',
    description: 'Rebrand your YouTube channel.',
    content: "Rebrand channel from [OLD_BRAND] to [NEW_BRAND]: new channel art design, logo, intro/outro, messaging, announcement video strategy, subscriber communication, redirect strategy, and transition timeline.",
    category: 'YouTube',
    tags: ['branding', 'rebranding', 'strategy'],
    popularity: 74,
    createdAt: '2024-06-02'
  },
  {
    id: 'yt-027',
    title: 'Affiliate Marketing Video Creator',
    description: 'Create affiliate-focused video content.',
    content: "Create affiliate video for [PRODUCT]: honest review, use cases, benefits/drawbacks, pricing discussion, comparison with alternatives, affiliate link placement (pinned comment), disclosure statement, and call-to-action.",
    category: 'YouTube',
    tags: ['affiliate', 'reviews', 'monetization'],
    popularity: 80,
    createdAt: '2024-06-03'
  },
  {
    id: 'yt-028',
    title: 'Green Screen Content Ideas',
    description: 'Generate creative green screen content.',
    content: "Plan [NUMBER] green screen video concepts: background options, visual effects, creative use cases, budget-friendly alternatives, equipment setup, editing requirements, and viewer engagement potential.",
    category: 'YouTube',
    tags: ['greenscreen', 'effects', 'production'],
    popularity: 76,
    createdAt: '2024-06-04'
  },
  {
    id: 'yt-029',
    title: 'Q&A Video Concept',
    description: 'Create engaging Q&A content.',
    content: "Plan Q&A video for audience [AUDIENCE]: question sourcing (comments, Twitter, mail), categorization, answer script, visual interest (B-roll, graphics), length management, bonus questions, and follow-up content ideas.",
    category: 'YouTube',
    tags: ['qa', 'engagement', 'audience'],
    popularity: 79,
    createdAt: '2024-06-05'
  },
  {
    id: 'yt-030',
    title: 'Documentary Video Treatment',
    description: 'Create mini-documentary for YouTube.',
    content: "Develop documentary treatment for [SUBJECT]: story arc, character research, interview subjects, location scouting, archival footage needs, music/sound, visual style, narrative flow, and emotional beats.",
    category: 'YouTube',
    tags: ['documentary', 'storytelling', 'production'],
    popularity: 81,
    createdAt: '2024-06-06'
  },
  {
    id: 'yt-031',
    title: 'Animation Explainer Video',
    description: 'Create explainer animation videos.',
    content: "Script animation explainer for [CONCEPT]: key points, visual metaphors, character design, scene breakdown, narration style, pacing for animation, call-to-action, and animation tool recommendations.",
    category: 'YouTube',
    tags: ['animation', 'explainer', 'education'],
    popularity: 85,
    createdAt: '2024-06-07'
  },
  {
    id: 'yt-032',
    title: 'Comedy Sketch Writer',
    description: 'Write funny comedy sketches.',
    content: "Write comedy sketch [TYPE] with runtime [LENGTH]: setup/premise, comedic escalation, diverse humor types, character development, timing/pacing, prop/costume ideas, ending payoff, and relatability factor.",
    category: 'YouTube',
    tags: ['comedy', 'entertainment', 'creative'],
    popularity: 78,
    createdAt: '2024-06-08'
  },
  {
    id: 'yt-033',
    title: 'Comparison Video Creator',
    description: 'Create compelling comparison content.',
    content: "Create comparison video [ITEMS/PRODUCTS]: side-by-side specs, real-world testing, pros/cons breakdown, use case recommendations, pricing comparison, winner for different users, visual demonstrations.",
    category: 'YouTube',
    tags: ['comparison', 'reviews', 'education'],
    popularity: 83,
    createdAt: '2024-06-09'
  },
  {
    id: 'yt-034',
    title: 'Motivational Video Producer',
    description: 'Create motivational and inspirational content.',
    content: "Develop motivational video [THEME]: inspiring story, personal struggles, transformation moment, lessons learned, actionable advice, powerful visuals, emotional music, and authentic message delivery.",
    category: 'YouTube',
    tags: ['motivation', 'inspiration', 'self-help'],
    popularity: 80,
    createdAt: '2024-06-10'
  },
  {
    id: 'yt-035',
    title: 'Top 10 / Ranking Video Template',
    description: 'Create ranking and list videos.',
    content: "Create top [NUMBER] video for [CATEGORY]: intro hook, 10 items with explanations, visual clips for each item, transitions, graphics/text, reasoning for rankings, personal touches, controversial choices for engagement.",
    category: 'YouTube',
    tags: ['lists', 'rankings', 'engagement'],
    popularity: 86,
    createdAt: '2024-06-11'
  },
  {
    id: 'yt-036',
    title: 'Fails / Bloopers Compilation',
    description: 'Create entertaining blooper videos.',
    content: "Compile bloopers/fails from [SOURCE]: funny moments, failures, learning experiences, recovery stories, self-deprecating humor, pacing for comedic timing, music/sound effects, and audience relatability.",
    category: 'YouTube',
    tags: ['bloopers', 'humor', 'entertainment'],
    popularity: 74,
    createdAt: '2024-06-12'
  },
  {
    id: 'yt-037',
    title: 'Podcast Launch on YouTube',
    description: 'Launch your podcast on YouTube.',
    content: "Create YouTube strategy for podcast [PODCAST]: video format (talking head, slides, B-roll), channel branding, episode thumbnails, descriptions with timestamps, guest appearances strategy, cross-promotion, and subscriber incentives.",
    category: 'YouTube',
    tags: ['podcast', 'launch', 'content'],
    popularity: 81,
    createdAt: '2024-06-13'
  },
  {
    id: 'yt-038',
    title: 'Sustainability/Educational Activist Video',
    description: 'Create educational advocacy videos.',
    content: "Develop advocacy video for [CAUSE]: problem explanation, impact statistics, viable solutions, personal action items, call-to-action, community options, credible sources, and sustainable messaging (avoid overwhelm/hopelessness).",
    category: 'YouTube',
    tags: ['advocacy', 'education', 'social-impact'],
    popularity: 70,
    createdAt: '2024-06-14'
  },
  {
    id: 'yt-039',
    title: 'Fitness Challenge Video Series',
    description: 'Create fitness transformation content.',
    content: "Plan fitness challenge series [TYPE]: challenge rules, difficulty levels, daily/weekly structure, progress tracking visuals, community engagement, transformation results, nutrition info, safety disclaimers, and certification.",
    category: 'YouTube',
    tags: ['fitness', 'wellness', 'challenges'],
    popularity: 79,
    createdAt: '2024-06-15'
  },
  {
    id: 'yt-040',
    title: 'Personal Vlog Series',
    description: 'Create authentic personal vlogs.',
    content: "Plan personal vlog series [THEME]: daily/weekly schedule, authentic storytelling, behind-the-scenes access, audience connection, consistency, personal growth arc, relatable challenges, and subscriber community building.",
    category: 'YouTube',
    tags: ['vlog', 'personal', 'storytelling'],
    popularity: 82,
    createdAt: '2024-06-16'
  },
  {
    id: 'yt-041',
    title: 'Technical Tutorial Series',
    description: 'Create technical skill tutorials.',
    content: "Develop technical tutorial [SKILL]: prerequisites, progression (beginner to advanced), code/config examples, troubleshooting, resources, practice exercises, project applications, and community support structure.",
    category: 'YouTube',
    tags: ['technical', 'tutorial', 'education'],
    popularity: 87,
    createdAt: '2024-06-17'
  },
  {
    id: 'yt-042',
    title: 'Book Review / Summary Video',
    description: 'Create book review and summary content.',
    content: "Script book review for [BOOK]: summary without major spoilers, key themes, author background, personal opinions, who should read it, memorable quotes, rating, and book purchase link.",
    category: 'YouTube',
    tags: ['reviews', 'books', 'education'],
    popularity: 75,
    createdAt: '2024-06-18'
  },
  {
    id: 'yt-043',
    title: 'Business Case Study Producer',
    description: 'Create business education content.',
    content: "Develop business case study video [COMPANY/PERSON]: background, challenge, strategy, implementation, results, lessons learned, visualizations of data, and actionable insights for viewers.",
    category: 'YouTube',
    tags: ['business', 'education', 'case-studies'],
    popularity: 81,
    createdAt: '2024-06-19'
  },
  {
    id: 'yt-044',
    title: 'Myth Busting Video Series',
    description: 'Debunk common myths and misconceptions.',
    content: "Create myth-busting video [TOPIC]: myth explanation, why people believe it, evidence-based debunking, scientific backing, visual demonstrations, expert interviews, and resources for deeper learning.",
    category: 'YouTube',
    tags: ['education', 'science', 'myth-busting'],
    popularity: 84,
    createdAt: '2024-06-20'
  },
  {
    id: 'yt-045',
    title: 'Music Production Tutorial',
    description: 'Create music and audio education videos.',
    content: "Develop music tutorial for [SKILL/GENRE]: music theory basics, software/equipment, step-by-step production, listening examples, common mistakes, practice exercises, and sample project walkthrough.",
    category: 'YouTube',
    tags: ['music', 'production', 'education'],
    popularity: 79,
    createdAt: '2024-06-21'
  },
  {
    id: 'yt-046',
    title: 'Art & Design Tutorial',
    description: 'Create visual art education content.',
    content: "Plan art tutorial for [MEDIUM/STYLE]: materials needed, fundamental techniques, step-by-step process, multiple examples, common pitfalls, timelapse option, final showcase, and student gallery feature.",
    category: 'YouTube',
    tags: ['art', 'design', 'education'],
    popularity: 80,
    createdAt: '2024-06-22'
  },
  {
    id: 'yt-047',
    title: 'Product Development Documentary',
    description: 'Document product creation journey.',
    content: "Create product dev documentary [PRODUCT]: ideation, prototyping, testing, failures, pivots, final launch, team interviews, challenges overcome, and lessons for aspiring entrepreneurs.",
    category: 'YouTube',
    tags: ['startup', 'entrepreneurship', 'documentary'],
    popularity: 76,
    createdAt: '2024-06-23'
  },
  {
    id: 'yt-048',
    title: 'Language Learning Content',
    description: 'Create language learning videos.',
    content: "Design language learning series [LANGUAGE]: vocabulary lessons, pronunciation guides, grammar explanations, cultural context, conversation practice, immersion techniques, progress benchmarks, and community learning.",
    category: 'YouTube',
    tags: ['language', 'education', 'learning'],
    popularity: 78,
    createdAt: '2024-06-24'
  },
  {
    id: 'yt-049',
    title: 'Interview Series Producer',
    description: 'Create engaging interview content.',
    content: "Plan interview series [GUEST_TYPE]: guest vetting, question research, flow structure, technical setup, audio quality, engaging visuals, chemistry building, follow-up strategy, and content repurposing.",
    category: 'YouTube',
    tags: ['interviews', 'storytelling', 'engagement'],
    popularity: 83,
    createdAt: '2024-06-25'
  },
  {
    id: 'yt-050',
    title: 'YouTube Success Roadmap',
    description: 'Comprehensive channel growth blueprint.',
    content: "Create YouTube success plan: current analysis, 12-month goals, content strategy details, audience building plan, gear/tech investments, time commitment, expected milestones, monetization strategy, and success metrics.",
    category: 'YouTube',
    tags: ['strategy', 'growth', 'planning'],
    popularity: 88,
    createdAt: '2024-06-26'
  },

  // --- MIDJOURNEY ---
  {
    id: 'mj-001',
    title: 'Hyper-Realistic Portrait',
    description: 'Photorealistic faces with natural lighting.',
    content: "A hyper-realistic close-up portrait of [SUBJECT], cinematic lighting, shot on 85mm lens, f/1.8, bokeh background, highly detailed skin textures, soft atmospheric lighting, 8k resolution, photorealistic style --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['portrait', 'realism', 'midjourney'],
    popularity: 96,
    createdAt: '2024-05-25'
  },
  {
    id: 'mj-002',
    title: 'Cyberpunk Cityscape',
    description: 'Vibrant neon city with rain and reflections.',
    content: "A futuristic cyberpunk city street at night, heavy rain, neon signs in blue and pink reflecting in puddles, cinematic fog, highly detailed architecture, Blade Runner aesthetic, ultra-realistic, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['scifi', 'environment', 'landscape'],
    popularity: 91,
    createdAt: '2024-05-26'
  },
  {
    id: 'mj-003',
    title: 'Fantasy Dragon Portrait',
    description: 'Majestic fantasy dragon with intricate details.',
    content: "A majestic dragon with [COLOR] scales, piercing [COLOR] eyes, perched on a mountain peak, dramatic lighting, fantasy art style, highly detailed scales and wings, cinematic composition, 8k, inspired by [ARTIST/STYLE] --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['fantasy', 'creature', 'detailed'],
    popularity: 94,
    createdAt: '2024-05-27'
  },
  {
    id: 'mj-004',
    title: 'Steampunk Machine Design',
    description: 'Complex steampunk machinery and gears.',
    content: "A intricate steampunk [MACHINE] with brass gears, copper pipes, steam vents, Victorian aesthetics, mechanical precision, highly detailed engineering, dramatic lighting, industrial style, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['steampunk', 'mechanical', 'design'],
    popularity: 89,
    createdAt: '2024-05-28'
  },
  {
    id: 'mj-005',
    title: 'Enchanted Forest Scene',
    description: 'Magical forest with glowing elements.',
    content: "An enchanted forest with glowing bioluminescent [FLORA], ancient trees, magical mist, mystical atmosphere, soft ethereal lighting, fantasy setting, highly detailed foliage, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['fantasy', 'nature', 'magical'],
    popularity: 92,
    createdAt: '2024-05-29'
  },
  {
    id: 'mj-006',
    title: 'Underwater Kingdom',
    description: 'Ethereal underwater civilization.',
    content: "An underwater kingdom with bioluminescent coral structures, merfolk civilization, crystalline towers, water particles in light, ethereal glow, deep sea colors, photorealistic, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['fantasy', 'underwater', 'surreal'],
    popularity: 88,
    createdAt: '2024-05-30'
  },
  {
    id: 'mj-007',
    title: 'Post-Apocalyptic Wasteland',
    description: 'Desolate future landscape.',
    content: "A post-apocalyptic wasteland with rusted vehicles, crumbling buildings, dust storms, toxic atmosphere, desolate landscape, survival remnants, dramatic apocalyptic lighting, cinematic, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['scifi', 'dystopian', 'environment'],
    popularity: 87,
    createdAt: '2024-05-31'
  },
  {
    id: 'mj-008',
    title: 'Space Station Interior',
    description: 'Futuristic spacecraft interior design.',
    content: "A sleek space station interior with advanced holographic displays, metallic surfaces, ambient lighting, zero-gravity elements, futuristic technology, panoramic windows showing stars, highly detailed, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['scifi', 'futuristic', 'interior'],
    popularity: 90,
    createdAt: '2024-06-01'
  },
  {
    id: 'mj-009',
    title: 'Ancient Temple Ruins',
    description: 'Mysterious ancient architecture.',
    content: "Ancient temple ruins covered in vines and moss, mystical carvings, hidden civilization, overgrown architecture, dappled light through canopy, archaeological mystery, detailed stonework, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['history', 'architecture', 'mystery'],
    popularity: 86,
    createdAt: '2024-06-02'
  },
  {
    id: 'mj-010',
    title: 'Ethereal Angel Character',
    description: 'Celestial angelic being with divine light.',
    content: "An ethereal angel with flowing white robes, luminous wings with feather details, divine halo, heavenly glow, serene expression, holding [ITEM], photorealistic, soft heavenly lighting, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['character', 'fantasy', 'divine'],
    popularity: 89,
    createdAt: '2024-06-03'
  },
  {
    id: 'mj-011',
    title: 'Floral Fashion Portrait',
    description: 'Fashion photography with floral elements.',
    content: "A fashion portrait of [PERSON/TYPE] wearing flowing dress made of [FLOWERS], surrounded by floating petals, soft golden hour lighting, romantic aesthetic, photorealistic, high fashion, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['fashion', 'flowers', 'portrait'],
    popularity: 85,
    createdAt: '2024-06-04'
  },
  {
    id: 'mj-012',
    title: 'Surreal Mind Landscape',
    description: 'Mind-bending surreal visual.',
    content: "A surreal landscape representing [CONCEPT], floating islands, impossible physics, M.C. Escher-inspired, dreamlike atmosphere, vibrant colors, detailed surrealism, disorienting perspective, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['surreal', 'abstract', 'conceptual'],
    popularity: 91,
    createdAt: '2024-06-05'
  },
  {
    id: 'mj-013',
    title: 'Minimalist Product Shot',
    description: 'Clean product photography.',
    content: "Product photography of [PRODUCT] with minimalist aesthetic, clean white background, soft lighting, product on sleek surface, shadows for depth, modern design, commercial style, 8k --ar 1:1 --v 6.0",
    category: 'Midjourney',
    tags: ['product', 'minimalist', 'commercial'],
    popularity: 83,
    createdAt: '2024-06-06'
  },
  {
    id: 'mj-014',
    title: 'Japanese Garden Zen',
    description: 'Peaceful Japanese garden landscape.',
    content: "A serene Japanese garden with stone lanterns, koi pond, bamboo groves, zen bridges, moss-covered rocks, peaceful water features, traditional landscape design, soft natural lighting, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['nature', 'culture', 'zen'],
    popularity: 84,
    createdAt: '2024-06-07'
  },
  {
    id: 'mj-015',
    title: 'Luxury Interior Design',
    description: 'High-end interior photography.',
    content: "A luxury [ROOM_TYPE] interior with modern furnishings, marble surfaces, mood lighting, contemporary art, high-end decor, panoramic views, architectural elegance, detailed textures, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['interior', 'luxury', 'design'],
    popularity: 82,
    createdAt: '2024-06-08'
  },
  {
    id: 'mj-016',
    title: 'Action Movie Character',
    description: 'Dynamic action hero pose.',
    content: "An action hero [CHARACTER_TYPE] in dynamic pose, wearing tactical gear, mid-action motion, dramatic lighting, cinematic composition, explosion/effects in background, movie poster style, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['character', 'action', 'cinematic'],
    popularity: 87,
    createdAt: '2024-06-09'
  },
  {
    id: 'mj-017',
    title: 'Hyper Car Design',
    description: 'Futuristic luxury vehicle design.',
    content: "A futuristic hypercar with [COLOR] metallic paint, aerodynamic design, glowing light strips, sleek curves, high-tech details, parked in [SETTING], dramatic lighting, product shot, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['vehicles', 'design', 'futuristic'],
    popularity: 88,
    createdAt: '2024-06-10'
  },
  {
    id: 'mj-018',
    title: 'Biomechanical Creature',
    description: 'Hybrid bio-mechanical being.',
    content: "A biomechanical creature combining [ANIMAL] with mechanical parts, exposed gears, bioluminescent circuits, organic-mechanical fusion, menacing stance, dramatic lighting, highly detailed, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['scifi', 'creature', 'mechanical'],
    popularity: 86,
    createdAt: '2024-06-11'
  },
  {
    id: 'mj-019',
    title: 'Aurora Borealis Night Sky',
    description: 'Stunning northern lights display.',
    content: "Aurora Borealis dancing across night sky with [COLORS], reflected in frozen lake, snow-covered mountains, stars visible, long exposure style, magical atmosphere, photorealistic, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['nature', 'sky', 'photography'],
    popularity: 89,
    createdAt: '2024-06-12'
  },
  {
    id: 'mj-020',
    title: 'Jewelry Close-up',
    description: 'Detailed luxury jewelry photography.',
    content: "Close-up photography of [JEWELRY_PIECE] with [GEMSTONES], intricate details visible, sparkle and shine, professional lighting, luxurious setting, macro style, photorealistic, 8k --ar 1:1 --v 6.0",
    category: 'Midjourney',
    tags: ['jewelry', 'detail', 'luxury'],
    popularity: 79,
    createdAt: '2024-06-13'
  },
  {
    id: 'mj-021',
    title: 'Abstract Ink Splash',
    description: 'Dynamic ink art composition.',
    content: "Abstract ink splash in [COLORS], flowing liquid patterns, artistic composition, dynamic motion, high-speed photography style, detailed fluid dynamics, artistic texture, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['abstract', 'art', 'fluid'],
    popularity: 81,
    createdAt: '2024-06-14'
  },
  {
    id: 'mj-022',
    title: 'Ethereal Particle Effects',
    description: 'Magical glowing particle art.',
    content: "Ethereal floating particles forming [SHAPE], glowing [COLOR] particles, magical atmosphere, bokeh background, depth of field, particle trail effects, luminous, dreamy, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['effects', 'magical', 'abstract'],
    popularity: 83,
    createdAt: '2024-06-15'
  },
  {
    id: 'mj-023',
    title: 'Historic Architecture Detail',
    description: 'Ornate historical building close-up.',
    content: "Ornate historic architecture detail with intricate carvings, weathered stonework, classical design elements, architectural photography, detailed textures, historical preservation, artistic composition, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['architecture', 'history', 'detail'],
    popularity: 77,
    createdAt: '2024-06-16'
  },
  {
    id: 'mj-024',
    title: 'Film Noir Detective Scene',
    description: 'Classic noir atmosphere scene.',
    content: "Film noir scene with detective [CHARACTER], rain-soaked streets, neon signs, dramatic shadows, 1940s aesthetic, moody lighting, dramatic angles, cinematic black and white with color accents, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['noir', 'cinematic', 'dramatic'],
    popularity: 80,
    createdAt: '2024-06-17'
  },
  {
    id: 'mj-025',
    title: 'Macro Nature Photography',
    description: 'Ultra-close nature detail.',
    content: "Macro photography of [INSECT/PLANT] with extreme detail, water droplets, depth of field blur, natural lighting, vibrant colors, textured surfaces visible, artistic composition, 8k --ar 1:1 --v 6.0",
    category: 'Midjourney',
    tags: ['macro', 'nature', 'detail'],
    popularity: 84,
    createdAt: '2024-06-18'
  },
  {
    id: 'mj-026',
    title: 'Celestial Map Illustration',
    description: 'Astronomical constellation art.',
    content: "An astronomical map illustration showing constellation [NAME], star positions, celestial details, gold and deep blue color scheme, vintage astronomy book style, detailed star charts, ornate borders, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['illustration', 'astronomy', 'vintage'],
    popularity: 76,
    createdAt: '2024-06-19'
  },
  {
    id: 'mj-027',
    title: 'Food Photography Plating',
    description: 'Gourmet food artistic plating.',
    content: "Fine dining plated dish [CUISINE] with artistic presentation, garnishes, sauces, professional food photography, warm lighting, on luxurious plate, table setting, culinary art, 8k --ar 1:1 --v 6.0",
    category: 'Midjourney',
    tags: ['food', 'culinary', 'artistic'],
    popularity: 82,
    createdAt: '2024-06-20'
  },
  {
    id: 'mj-028',
    title: 'Holographic User Interface',
    description: 'Sci-fi holographic display design.',
    content: "Futuristic holographic user interface with glowing [COLOR] elements, geometric shapes, data visualization, hovering particles, high-tech aesthetics, dark background, digital art, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['scifi', 'ui', 'technology'],
    popularity: 85,
    createdAt: '2024-06-21'
  },
  {
    id: 'mj-029',
    title: 'Romantic Period Portrait',
    description: 'Classical romantic era painting.',
    content: "A romantic era portrait in [ARTISTIC_STYLE], wearing period clothing, soft romantic lighting, muted color palette, oil painting aesthetic, classical composition, emotional expression, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['portrait', 'romantic', 'classical'],
    popularity: 78,
    createdAt: '2024-06-22'
  },
  {
    id: 'mj-030',
    title: 'Weather Phenomenon',
    description: 'Dramatic natural weather event.',
    content: "A dramatic [WEATHER_TYPE] over landscape, extreme natural phenomenon, towering clouds, dramatic lighting, dynamic atmosphere, raw power of nature, wide angle composition, photorealistic, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['nature', 'weather', 'dramatic'],
    popularity: 87,
    createdAt: '2024-06-23'
  },
  {
    id: 'mj-031',
    title: 'Neon Pop Art Portrait',
    description: 'Vibrant pop art style portrait.',
    content: "Pop art portrait of [PERSON/CHARACTER] with vibrant neon colors, high contrast, bold shapes, Andy Warhol inspired, silkscreen style, electric color combinations, dynamic composition, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['pop-art', 'portrait', 'vibrant'],
    popularity: 83,
    createdAt: '2024-06-24'
  },
  {
    id: 'mj-032',
    title: 'Mythological Creature',
    description: 'Classic mythology being.',
    content: "Mythological [CREATURE] from [MYTHOLOGY], legendary appearance, powerful stance, divine aura, mythological context, detailed creature design, cinematic lighting, fantasy illustration, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['mythology', 'creature', 'fantasy'],
    popularity: 88,
    createdAt: '2024-06-25'
  },
  {
    id: 'mj-033',
    title: 'Document Watercolor Art',
    description: 'Delicate watercolor painting.',
    content: "Watercolor painting of [SUBJECT], soft color washes, delicate brushstrokes, artistic composition, transparent layered paint, watercolor texture visible, artistic expression, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['art', 'watercolor', 'painting'],
    popularity: 74,
    createdAt: '2024-06-26'
  },
  {
    id: 'mj-034',
    title: 'Steampunk Airship',
    description: 'Elaborate flying vessel design.',
    content: "A massive steampunk airship with brass details, propellers, Victorian design, floating in clouds, detailed mechanical elements, multiple decks, steampunk engineering, dramatic perspective, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['steampunk', 'vehicle', 'detailed'],
    popularity: 86,
    createdAt: '2024-06-27'
  },
  {
    id: 'mj-035',
    title: 'Digital Glitch Art',
    description: 'Artistic digital corruption effect.',
    content: "Digital glitch art of [IMAGE_CONCEPT], intentional pixel corruption, RGB color separation, fragmented visuals, distorted elements, cyberpunk aesthetic, artistic digital manipulation, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['digital', 'glitch', 'art'],
    popularity: 80,
    createdAt: '2024-06-28'
  },
  {
    id: 'mj-036',
    title: 'Oil Painting Masterpiece',
    description: 'Classical oil painting style.',
    content: "Oil painting of [SUBJECT] in classical style, thick brushstrokes, rich colors, dramatic lighting, museum quality, oil paint texture visible, masterpiece composition, Renaissance influence, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['painting', 'classical', 'art'],
    popularity: 79,
    createdAt: '2024-06-29'
  },
  {
    id: 'mj-037',
    title: 'Bioluminescent Creature',
    description: 'Glowing living organism.',
    content: "A bioluminescent [CREATURE] with glowing patterns, emitting [COLOR] light, dark background, atmospheric glow, deep sea creature or fantasy being, luminous details, mysterious, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['creature', 'bioluminescent', 'glowing'],
    popularity: 89,
    createdAt: '2024-06-30'
  },
  {
    id: 'mj-038',
    title: 'Grand Festival Scene',
    description: 'Celebratory crowd gathering.',
    content: "A grand festival scene with [FESTIVAL_TYPE], crowds of people, festive decorations, colorful lights, jubilant atmosphere, architecture, scale perspective, detailed crowd, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['celebration', 'crowd', 'environment'],
    popularity: 75,
    createdAt: '2024-07-01'
  },
  {
    id: 'mj-039',
    title: 'Sword Fantasy Artifact',
    description: 'Legendary weapon design.',
    content: "A legendary fantasy sword with ornate hilt, [SPECIAL_PROPERTIES], glowing runes, magical aura, detailed craftsmanship, dramatic lighting, fantasy artifact quality, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['fantasy', 'artifact', 'weapon'],
    popularity: 84,
    createdAt: '2024-07-02'
  },
  {
    id: 'mj-040',
    title: 'Photorealistic Cloth Simulation',
    description: 'Detailed fabric and textile.',
    content: "Photorealistic [FABRIC_TYPE] with detailed fold patterns, texture, realistic lighting, material properties accurate, wrinkles and draping visible, professional photography, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['texture', 'realistic', 'fabric'],
    popularity: 76,
    createdAt: '2024-07-03'
  },
  {
    id: 'mj-041',
    title: 'Botanical Illustration',
    description: 'Scientific botanical art.',
    content: "Detailed botanical illustration of [PLANT] with scientific accuracy, color, roots visible, hand-drawn style, encyclopedia quality, natural history illustration, artistic composition, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['botanical', 'illustration', 'scientific'],
    popularity: 73,
    createdAt: '2024-07-04'
  },
  {
    id: 'mj-042',
    title: 'Cyberpunk Fashion Model',
    description: 'High-tech fashion portrait.',
    content: "A cyberpunk fashion model wearing avant-garde [CLOTHING], neon accents, tech-enhanced appearance, futuristic makeup, bold styling, high fashion photography, dramatic cyberpunk lighting, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['fashion', 'cyberpunk', 'portrait'],
    popularity: 85,
    createdAt: '2024-07-05'
  },
  {
    id: 'mj-043',
    title: 'Ancient Tome Cover',
    description: 'Mystical book cover design.',
    content: "An ancient mystical tome cover with arcane symbols, leather binding, golden text, magical aura, mysterious atmosphere, detailed craftsmanship, leather texture, magical glowing elements, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['book', 'magical', 'design'],
    popularity: 77,
    createdAt: '2024-07-06'
  },
  {
    id: 'mj-044',
    title: 'Gradient Color Studies',
    description: 'Abstract color gradient composition.',
    content: "Abstract composition with smooth gradient transitions between [COLORS], color studies, minimal design, artistic color harmony, depth through color, modern art, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['abstract', 'color', 'minimal'],
    popularity: 71,
    createdAt: '2024-07-07'
  },
  {
    id: 'mj-045',
    title: 'Monster Hunter Concept',
    description: 'Fantasy monster warrior.',
    content: "A monstrous hunter creature [TYPE], intimidating appearance, battle-ready pose, detailed monster features, fantasy creature design, dramatic action pose, cinematic lighting, 8k --ar 4:5 --v 6.0",
    category: 'Midjourney',
    tags: ['creature', 'fantasy', 'hunter'],
    popularity: 83,
    createdAt: '2024-07-08'
  },
  {
    id: 'mj-046',
    title: 'Crystal Cave Interior',
    description: 'Magical crystalline cavern.',
    content: "A breathtaking crystal cave interior with giant [COLOR] crystals, bioluminescent glow, magical atmosphere, reflections in crystal surfaces, cave depth perspective, fantasy environment, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['cave', 'magical', 'environment'],
    popularity: 87,
    createdAt: '2024-07-09'
  },
  {
    id: 'mj-047',
    title: 'Vintage Poster Design',
    description: 'Retro style poster art.',
    content: "Vintage [STYLE] poster design for [TOPIC], retro color palette, artistic typography, nostalgic aesthetic, [DECADE] inspired design, limited color separation, concert/travel poster style, 8k --ar 16:9 --v 6.0",
    category: 'Midjourney',
    tags: ['vintage', 'poster', 'design'],
    popularity: 78,
    createdAt: '2024-07-10'
  },
  {
    id: 'mj-048',
    title: 'Complete Midjourney Master',
    description: 'Comprehensive prompt creation guide.',
    content: "Master detailed Midjourney prompts: understand subject detail (portrait, landscape, object), lighting styles (cinematic, golden hour, neon), artistic styles (oil painting, watercolor, digital), quality parameters (8k, photorealistic, detailed), composition (perspective, framing), aspect ratios (--ar), and version flags (--v 6.0).",
    category: 'Midjourney',
    tags: ['guide', 'tutorial', 'mastery'],
    popularity: 92,
    createdAt: '2024-07-11'
  },
  {
    id: 'mj-049',
    title: 'Fashion Runway Model Generation',
    description: 'Create high fashion model imagery.',
    content: "Fashion model wearing [DESIGNER] [CLOTHING], runway walk pose, professional fashion photography, studio lighting, perfect makeup, dynamic composition, haute couture aesthetic, high fashion editorial style, 8k --ar 9:16 --v 6.0",
    category: 'Midjourney',
    tags: ['fashion', 'model', 'photography'],
    popularity: 85,
    createdAt: '2024-07-12'
  },
  {
    id: 'mj-050',
    title: 'Final Midjourney Mastery Prompt',
    description: 'Ultimate creative prompt generation.',
    content: "Create unlimited unique Midjourney prompts: combine multiple subject types, layer artistic styles, specify lighting conditions, include detailed descriptors, add quality parameters, experiment with aspect ratios, use version flags, and push creative boundaries with conceptual mashups.",
    category: 'Midjourney',
    tags: ['mastery', 'creative', 'advanced'],
    popularity: 90,
    createdAt: '2024-07-12'
  },

  // --- FREELANCE / FIVERR / UPWORK ---
  {
    id: 'freelance-001',
    title: 'The Perfect Upwork Proposal',
    description: 'A professional and persuasive proposal for high-ticket jobs.',
    content: "Write a persuasive Upwork proposal for a [JOB TYPE] role. The client needs [SPECIFIC NEED]. Highlight my experience in [YOUR FIELD], mention a previous similar project where I achieved [RESULT], and end with a call to action asking for a quick 10-minute discovery call.",
    category: 'Fiverr/Upwork',
    tags: ['upwork', 'proposal', 'sales'],
    popularity: 99,
    createdAt: '2024-06-10'
  },
  {
    id: 'freelance-002',
    title: 'Fiverr Gig Description Optimizer',
    description: 'Rank higher in Fiverr search results.',
    content: "Act as a Fiverr SEO expert. Rewrite my gig description for [SERVICE]. Include relevant keywords naturally, use bullet points for benefits, and create a powerful 'Why Hire Me' section that builds trust immediately.",
    category: 'Fiverr/Upwork',
    tags: ['fiverr', 'seo', 'gig'],
    popularity: 93,
    createdAt: '2024-06-11'
  },
  {
    id: 'freelance-003',
    title: 'Client Discovery Call Guide',
    description: 'Prepare for high-converting discovery calls.',
    content: "Create a discovery call script for [SERVICE] clients: opening questions to understand needs, problem identification, solution positioning, objection handling, pricing discussion strategy, and closing the sale into project agreement.",
    category: 'Fiverr/Upwork',
    tags: ['sales', 'discovery', 'consultation'],
    popularity: 88,
    createdAt: '2024-06-12'
  },
  {
    id: 'freelance-004',
    title: 'Portfolio Website Copy',
    description: 'Write compelling portfolio content.',
    content: "Write portfolio website copy for a [PROFESSION] freelancer: compelling intro, services offered, target client description, proven results/case studies, testimonials strategy, hire-me CTA, and about section that builds trust.",
    category: 'Fiverr/Upwork',
    tags: ['portfolio', 'copywriting', 'sales'],
    popularity: 85,
    createdAt: '2024-06-13'
  },
  {
    id: 'freelance-005',
    title: 'Email Outreach Template',
    description: 'Create cold email templates for clients.',
    content: "Create cold email template for [SERVICE] targeting [CLIENT_TYPE]: personalized opening, pain point identification, unique solution angle, social proof, limited-time offer, and CTA to discussion call. Make it compelling yet concise.",
    category: 'Fiverr/Upwork',
    tags: ['outreach', 'email', 'sales'],
    popularity: 83,
    createdAt: '2024-06-14'
  },
  {
    id: 'freelance-006',
    title: 'Service Package Designer',
    description: 'Create tiered service offerings.',
    content: "Design service packages for [SERVICE]: create Basic/Standard/Premium tiers, define deliverables for each, set pricing strategy, clearly differentiate value, highlight upsell opportunities, and create package descriptions that convert.",
    category: 'Fiverr/Upwork',
    tags: ['pricing', 'packages', 'sales'],
    popularity: 86,
    createdAt: '2024-06-15'
  },
  {
    id: 'freelance-007',
    title: 'Project Brief Template',
    description: 'Create project kickoff documentation.',
    content: "Design detailed project brief template for [SERVICE] freelancers: project scope, deliverables, timeline, specifications, client preferences, budget, success metrics, and communication protocols for smooth project execution.",
    category: 'Fiverr/Upwork',
    tags: ['project-management', 'templates', 'operations'],
    popularity: 79,
    createdAt: '2024-06-16'
  },
  {
    id: 'freelance-008',
    title: 'Testimonial Request Email',
    description: 'Get glowing client testimonials.',
    content: "Create email template requesting testimonials from satisfied [SERVICE] clients: timing strategy (after project completion), specific questions to prompt detailed feedback, offer incentive for detailed reviews, and make it easy to leave testimonial.",
    category: 'Fiverr/Upwork',
    tags: ['testimonials', 'social-proof', 'marketing'],
    popularity: 81,
    createdAt: '2024-06-17'
  },
  {
    id: 'freelance-009',
    title: 'Retainer Contract Template',
    description: 'Set up recurring client relationships.',
    content: "Create retainer agreement for [SERVICE]: monthly deliverables, included hours/tasks, additional work rates, payment terms, commitment length, renewal clauses, scope change procedures, and termination conditions.",
    category: 'Fiverr/Upwork',
    tags: ['contracts', 'retainer', 'legal'],
    popularity: 77,
    createdAt: '2024-06-18'
  },
  {
    id: 'freelance-010',
    title: 'Proposal Template Creator',
    description: 'Design reusable project proposals.',
    content: "Create master proposal template for [SERVICE] projects: executive summary, client pain points, proposed solution, timeline, deliverables checklist, investment/pricing, company credentials, and project success framework.",
    category: 'Fiverr/Upwork',
    tags: ['proposals', 'templates', 'sales'],
    popularity: 82,
    createdAt: '2024-06-19'
  },
  {
    id: 'freelance-011',
    title: 'Rate Negotiation Strategy',
    description: 'Handle client budget discussions.',
    content: "Strategy for [SERVICE] rate negotiations: value positioning techniques, how to handle low-ball offers, premium pricing justification, alternative compensation options, bundling strategies, and maintaining boundaries without losing clients.",
    category: 'Fiverr/Upwork',
    tags: ['negotiation', 'pricing', 'sales'],
    popularity: 80,
    createdAt: '2024-06-20'
  },
  {
    id: 'freelance-012',
    title: 'Niche Specialization Strategy',
    description: 'Dominate a specific market niche.',
    content: "Develop niche specialization for [SERVICE]: target niche identification, positioning as expert in niche, niche-specific marketing, building authority in niche, premium pricing due to specialization, and case studies for niche.",
    category: 'Fiverr/Upwork',
    tags: ['positioning', 'niche', 'specialization'],
    popularity: 84,
    createdAt: '2024-06-21'
  },
  {
    id: 'freelance-013',
    title: 'LinkedIn Optimization for Freelancers',
    description: 'Build LinkedIn presence for visibility.',
    content: "Optimize LinkedIn profile for [PROFESSION]: compelling headline, detailed service descriptions, portfolio samples, testimonials showcase, regular content posting strategy, connection-building approach, and leveraging LinkedIn for client acquisition.",
    category: 'Fiverr/Upwork',
    tags: ['linkedin', 'personal-branding', 'marketing'],
    popularity: 79,
    createdAt: '2024-06-22'
  },
  {
    id: 'freelance-014',
    title: 'Gig Economics Setup',
    description: 'Create multiple income streams.',
    content: "Develop multi-platform freelancing strategy: services across Upwork, Fiverr, own website, local networking, referral programs, retainer clients, productized services, and affiliate opportunities for [PROFESSION].",
    category: 'Fiverr/Upwork',
    tags: ['business-model', 'diversification', 'growth'],
    popularity: 76,
    createdAt: '2024-06-23'
  },
  {
    id: 'freelance-015',
    title: 'Client Avatar Development',
    description: 'Define ideal client profile.',
    content: "Create detailed client avatar for [SERVICE]: demographics, business size, budget, pain points, desired outcomes, communication style, buying process, and how to identify/target this avatar in proposals and marketing.",
    category: 'Fiverr/Upwork',
    tags: ['targeting', 'marketing', 'strategy'],
    popularity: 78,
    createdAt: '2024-06-24'
  },
  {
    id: 'freelance-016',
    title: 'Quality Assurance Checklist',
    description: 'Ensure project excellence.',
    content: "Create quality checklist for [SERVICE] deliverables: requirement verification, testing protocols, revision tracking, final review process, client approval steps, documentation, and delivery confirmation procedures.",
    category: 'Fiverr/Upwork',
    tags: ['quality', 'process', 'operations'],
    popularity: 73,
    createdAt: '2024-06-25'
  },
  {
    id: 'freelance-017',
    title: 'Crisis Management Plan',
    description: 'Handle difficult client situations.',
    content: "Develop crisis management for [SERVICE]: handling scope creep, missed deadlines, client conflicts, refund scenarios, communication breakdowns, reputation recovery, and maintaining professionalism under pressure.",
    category: 'Fiverr/Upwork',
    tags: ['client-relations', 'management', 'conflicts'],
    popularity: 74,
    createdAt: '2024-06-26'
  },
  {
    id: 'freelance-018',
    title: 'Tax & Legal Compliance',
    description: 'Stay compliant as freelancer.',
    content: "Freelancer compliance guide for [LOCATION]: tax obligations, invoicing requirements, contract essentials, copyright issues, liability considerations, business structure options, and record-keeping procedures.",
    category: 'Fiverr/Upwork',
    tags: ['legal', 'tax', 'compliance'],
    popularity: 71,
    createdAt: '2024-06-27'
  },
  {
    id: 'freelance-019',
    title: 'Referral Program Design',
    description: 'Create client referral incentives.',
    content: "Design referral program for [SERVICE]: incentive structure (discount/commission/reward), how to promote program to clients, tracking mechanism, fulfillment process, testimonial requests, and measuring referral ROI.",
    category: 'Fiverr/Upwork',
    tags: ['referrals', 'marketing', 'growth'],
    popularity: 75,
    createdAt: '2024-06-28'
  },
  {
    id: 'freelance-020',
    title: 'Case Study Generator',
    description: 'Document successful projects.',
    content: "Create case study template for [SERVICE] projects: client background, challenge/problem, solution approach, implementation, measurable results, key lessons, client quote, and how prospect can achieve similar results.",
    category: 'Fiverr/Upwork',
    tags: ['case-studies', 'social-proof', 'portfolio'],
    popularity: 80,
    createdAt: '2024-06-29'
  },
  {
    id: 'freelance-021',
    title: 'Onboarding Process Doc',
    description: 'Streamline client start experience.',
    content: "Create client onboarding document for [SERVICE]: welcome sequence, information gathering forms, communication preferences, project timeline overview, payment setup, deliverable schedule, and milestone checkpoints.",
    category: 'Fiverr/Upwork',
    tags: ['onboarding', 'process', 'experience'],
    popularity: 76,
    createdAt: '2024-06-30'
  },
  {
    id: 'freelance-022',
    title: 'Time Tracking & Productivity',
    description: 'Maximize billable hours efficiency.',
    content: "Implement time management for [SERVICE]: time tracking tools, productivity optimization, reducing time-wasters, billing accuracy, project time estimates, efficiency improvements, and client-specific time allocation.",
    category: 'Fiverr/Upwork',
    tags: ['productivity', 'efficiency', 'time-management'],
    popularity: 72,
    createdAt: '2024-07-01'
  },
  {
    id: 'freelance-023',
    title: 'Communication Protocol Guide',
    description: 'Set professional expectations.',
    content: "Establish communication guidelines for [SERVICE] clients: response time expectations, preferred communication channels, availability hours, meeting scheduling, update frequency, escalation procedures, and communication style.",
    category: 'Fiverr/Upwork',
    tags: ['communication', 'professionalism', 'expectations'],
    popularity: 70,
    createdAt: '2024-07-02'
  },
  {
    id: 'freelance-024',
    title: 'Year-End Review Template',
    description: 'Analyze freelance performance.',
    content: "Create annual review for freelance [SERVICE]: revenue analysis, client satisfaction metrics, project success rate, income breakdown by client, growth areas, client retention rate, and goals for next year.",
    category: 'Fiverr/Upwork',
    tags: ['analysis', 'metrics', 'planning'],
    popularity: 67,
    createdAt: '2024-07-03'
  },
  {
    id: 'freelance-025',
    title: 'Portfolio Curation Strategy',
    description: 'Showcase best work effectively.',
    content: "Build portfolio for [SERVICE]: project selection strategy, case study depth, visual presentation, before/after examples, client logos/testimonials, results emphasis, and portfolio updates to show growth.",
    category: 'Fiverr/Upwork',
    tags: ['portfolio', 'marketing', 'presentation'],
    popularity: 77,
    createdAt: '2024-07-04'
  },
  {
    id: 'freelance-026',
    title: 'Value-Based Pricing Model',
    description: 'Move beyond hourly rates.',
    content: "Implement value-based pricing for [SERVICE]: understanding client outcomes, pricing based on value delivered, package pricing strategy, premium positioning, ROI communication, and shifting from hourly to fixed pricing.",
    category: 'Fiverr/Upwork',
    tags: ['pricing', 'strategy', 'business-model'],
    popularity: 81,
    createdAt: '2024-07-05'
  },
  {
    id: 'freelance-027',
    title: 'Personal Brand Development',
    description: 'Build recognizable brand.',
    content: "Develop personal brand for [PROFESSION]: unique value proposition, brand personality, consistent messaging, visual identity, thought leadership content, and stand out from competitors.",
    category: 'Fiverr/Upwork',
    tags: ['branding', 'personal-brand', 'positioning'],
    popularity: 79,
    createdAt: '2024-07-06'
  },
  {
    id: 'freelance-028',
    title: 'Scope Creep Prevention',
    description: 'Protect project boundaries.',
    content: "Strategy for preventing scope creep in [SERVICE] projects: detailed scope documentation, change request process, extra-work pricing, client education, regular scope review, and saying 'no' professionally.",
    category: 'Fiverr/Upwork',
    tags: ['scope-management', 'boundaries', 'professionalism'],
    popularity: 74,
    createdAt: '2024-07-07'
  },
  {
    id: 'freelance-029',
    title: 'Revision Policy Framework',
    description: 'Set revision limits and pricing.',
    content: "Create revision policy for [SERVICE]: number of included revisions, revision round process, substantial change vs. minor tweaks, additional revision pricing, revision deadline, client responsibilities, and handling unreasonable requests.",
    category: 'Fiverr/Upwork',
    tags: ['policy', 'revisions', 'expectations'],
    popularity: 72,
    createdAt: '2024-07-08'
  },
  {
    id: 'freelance-030',
    title: 'Scaling Freelance Business',
    description: 'Grow beyond personal capacity.',
    content: "Scale [SERVICE] business: delegating work to contractors, building team, systemizing processes, maintaining quality at scale, client management with team, pricing adjustments for scale, and long-term growth strategy.",
    category: 'Fiverr/Upwork',
    tags: ['scaling', 'business-growth', 'operations'],
    popularity: 77,
    createdAt: '2024-07-09'
  },
  {
    id: 'freelance-031',
    title: 'Skills Assessment Tool',
    description: 'Identify freelance strengths.',
    content: "Self-assessment for [PROFESSION]: current skill level per competency, strengths to leverage, weakness to improve, certifications/learning paths, competitive advantages, and gap analysis for target niche.",
    category: 'Fiverr/Upwork',
    tags: ['skills', 'development', 'assessment'],
    popularity: 70,
    createdAt: '2024-07-10'
  },
  {
    id: 'freelance-032',
    title: 'Client Retention Strategy',
    description: 'Build long-term relationships.',
    content: "Client retention for [SERVICE]: regular value delivery, relationship building, proactive communication, going above expectations, loyalty incentives, problem resolution, and turning clients into advocates.",
    category: 'Fiverr/Upwork',
    tags: ['retention', 'relationships', 'customer-success'],
    popularity: 76,
    createdAt: '2024-07-11'
  },
  {
    id: 'freelance-033',
    title: 'Invoice Template Designer',
    description: 'Create professional invoices.',
    content: "Design professional invoice template for [SERVICE]: clear breakdown of services, hourly rates or fixed pricing, payment terms, due date, late payment penalties, multiple payment methods, and company branding.",
    category: 'Fiverr/Upwork',
    tags: ['invoicing', 'templates', 'operations'],
    popularity: 68,
    createdAt: '2024-07-12'
  },
  {
    id: 'freelance-034',
    title: 'Competitive Analysis for Freelancers',
    description: 'Study competitor positioning.',
    content: "Analyze competitors in [SERVICE] niche: services offered, pricing structure, positioning, client testimonials, portfolio quality, marketing approach, and identify gaps to differentiate yourself.",
    category: 'Fiverr/Upwork',
    tags: ['competition', 'analysis', 'strategy'],
    popularity: 72,
    createdAt: '2024-07-13'
  },
  {
    id: 'freelance-035',
    title: 'Upwork Profile Optimization',
    description: 'Dominate Upwork search results.',
    content: "Optimize Upwork profile for [SERVICE]: complete profile with professional photo, compelling headline, detailed description with keywords, skills endorsements, portfolio samples, tests completion, and profile completeness for visibility.",
    category: 'Fiverr/Upwork',
    tags: ['upwork', 'optimization', 'profile'],
    popularity: 81,
    createdAt: '2024-07-14'
  },
  {
    id: 'freelance-036',
    title: 'Bid Strategy for Platforms',
    description: 'Win projects on freelance platforms.',
    content: "Win more bids on [PLATFORM] for [SERVICE]: bid timing, customized proposals per project, competitive positioning, differentiation strategy, budget compatibility, and follow-up to increase response rate.",
    category: 'Fiverr/Upwork',
    tags: ['bidding', 'platform-strategy', 'sales'],
    popularity: 75,
    createdAt: '2024-07-15'
  },
  {
    id: 'freelance-037',
    title: 'Rate Card Generator',
    description: 'Create transparent pricing structure.',
    content: "Create rate card for [SERVICE]: service breakdown with pricing, hourly rates for different expertise levels, package pricing, rush fees, retainer discounts, payment terms, and payment methods accepted.",
    category: 'Fiverr/Upwork',
    tags: ['pricing', 'transparency', 'sales'],
    popularity: 71,
    createdAt: '2024-07-16'
  },
  {
    id: 'freelance-038',
    title: 'Client Success Story Template',
    description: 'Share transformation stories.',
    content: "Template for client success story of [SERVICE] project: client challenge, how you helped, transformation/results, specific metrics, client impact, and how prospect can achieve similar success.",
    category: 'Fiverr/Upwork',
    tags: ['marketing', 'stories', 'social-proof'],
    popularity: 73,
    createdAt: '2024-07-17'
  },
  {
    id: 'freelance-039',
    title: 'Platform Account Health Monitor',
    description: 'Maintain platform reputation.',
    content: "Monitor freelance platform health: job success score, client feedback tracking, response rates, completion rates, and strategies to maintain strong ratings/reviews on Upwork, Fiverr, and other platforms.",
    category: 'Fiverr/Upwork',
    tags: ['reputation', 'ratings', 'management'],
    popularity: 70,
    createdAt: '2024-07-18'
  },
  {
    id: 'freelance-040',
    title: 'Specialist Certification Path',
    description: 'Increase credibility with credentials.',
    content: "Plan certification path for [SERVICE]: identify relevant certifications, learning timeline, cost-benefit analysis, how to market certifications to clients, and integration into profile/marketing.",
    category: 'Fiverr/Upwork',
    tags: ['certifications', 'credentials', 'development'],
    popularity: 67,
    createdAt: '2024-07-19'
  },
  {
    id: 'freelance-041',
    title: 'Difficult Client Handling',
    description: 'Manage challenging situations.',
    content: "Guide for difficult clients in [SERVICE]: identifying red flags, setting clear boundaries, communication strategies, expectation management, escalation procedures, and when to walk away from project.",
    category: 'Fiverr/Upwork',
    tags: ['client-relations', 'management', 'professionalism'],
    popularity: 68,
    createdAt: '2024-07-20'
  },
  {
    id: 'freelance-042',
    title: 'Payment Terms Negotiation',
    description: 'Secure favorable payment conditions.',
    content: "Payment terms strategy for [SERVICE]: deposit requirements, milestone payments, final payment timing, late payment penalties, currency/payment method negotiations, and protecting yourself financially.",
    category: 'Fiverr/Upwork',
    tags: ['payments', 'contracts', 'financial'],
    popularity: 66,
    createdAt: '2024-07-21'
  },
  {
    id: 'freelance-043',
    title: 'Content Marketing Strategy',
    description: 'Build authority through content.',
    content: "Content marketing plan for [SERVICE] freelancer: blog topics, social media strategy, guest posting opportunities, video content, thought leadership positioning, and consistent publication schedule.",
    category: 'Fiverr/Upwork',
    tags: ['content', 'marketing', 'authority'],
    popularity: 74,
    createdAt: '2024-07-22'
  },
  {
    id: 'freelance-044',
    title: 'Networking Event Strategy',
    description: 'Generate leads through networking.',
    content: "Networking strategy for [SERVICE] freelancers: event selection, conversation starters, following up, building relationships, referral requests, online networking, and measuring networking ROI.",
    category: 'Fiverr/Upwork',
    tags: ['networking', 'business-development', 'leads'],
    popularity: 69,
    createdAt: '2024-07-23'
  },
  {
    id: 'freelance-045',
    title: 'Exit Strategy & Business Sale',
    description: 'Plan eventual business exit.',
    content: "Exit planning for [SERVICE] freelance business: valuation methods, sellable business vs. personal service, transferable assets, client relationships, documentation, buyer targeting, and negotiation strategy.",
    category: 'Fiverr/Upwork',
    tags: ['business-exit', 'sale', 'planning'],
    popularity: 62,
    createdAt: '2024-07-24'
  },
  {
    id: 'freelance-046',
    title: 'Work-Life Balance Strategy',
    description: 'Prevent freelancer burnout.',
    content: "Work-life balance for [SERVICE] freelancers: setting boundaries, working hours, client availability, taking breaks, vacation planning, mental health care, and sustainable long-term practice.",
    category: 'Fiverr/Upwork',
    tags: ['wellbeing', 'balance', 'sustainability'],
    popularity: 65,
    createdAt: '2024-07-25'
  },
  {
    id: 'freelance-047',
    title: 'Subcontractor Coordination',
    description: 'Manage contractors on your projects.',
    content: "Coordinate subcontractors for [SERVICE] projects: finding reliable subcontractors, rate negotiation, quality control, client confidentiality, payment terms, delivery timeline, and maintaining relationships.",
    category: 'Fiverr/Upwork',
    tags: ['team', 'coordination', 'operations'],
    popularity: 64,
    createdAt: '2024-07-26'
  },
  {
    id: 'freelance-048',
    title: 'Freelancer Comprehensive Mastery',
    description: 'Complete freelance success blueprint.',
    content: "Master freelancing for [SERVICE]: platform optimization, pricing strategy, client acquisition, project management, quality delivery, reputation building, scaling operations, business sustainability, and long-term success metrics.",
    category: 'Fiverr/Upwork',
    tags: ['mastery', 'comprehensive', 'success'],
    popularity: 87,
    createdAt: '2024-07-27'
  },
  {
    id: 'freelance-049',
    title: 'Freelancer Insurance & Protection',
    description: 'Protect yourself as independent contractor.',
    content: "Freelancer protection: liability insurance, professional indemnity, contract protection, escrow services, dispute resolution, NDA enforcement, IP protection, and safeguards against non-payment.",
    category: 'Fiverr/Upwork',
    tags: ['legal', 'protection', 'insurance'],
    popularity: 68,
    createdAt: '2024-07-28'
  },
  {
    id: 'freelance-050',
    title: 'Ultimate Freelancer Success Guide',
    description: 'Complete freelance mastery blueprint.',
    content: "Achieve freelance mastery: niche selection, skill development, platform strategy, pricing optimization, client management, project delivery, reputation building, team scaling, financial management, and creating sustainable six-figure freelance business.",
    category: 'Fiverr/Upwork',
    tags: ['mastery', 'ultimate-guide', 'success'],
    popularity: 92,
    createdAt: '2024-07-28'
  },

  // --- SOCIAL MEDIA ---
  {
    id: 'sm-001',
    title: 'Instagram Engagement Caption',
    description: 'Craft a caption that drives comments and saves.',
    content: "Write an Instagram caption for a post about [TOPIC]. Start with a polarizing hook, tell a short story related to the topic, and end with a question that encourages users to share their own experience in the comments. Use 5 relevant emojis.",
    category: 'Social Media',
    tags: ['instagram', 'engagement', 'caption'],
    popularity: 95,
    createdAt: '2024-06-15'
  },
  {
    id: 'sm-002',
    title: 'LinkedIn: The "Hard Lesson" Post',
    description: 'Vulnerable professional storytelling to build trust.',
    content: "Write a LinkedIn post about a difficult lesson I learned while working on [TOPIC]. Start with a 'scroll-stopping' opening line about a failure or mistake. Explain the context, the moment of realization, and the 3 key takeaways that now define my professional approach.",
    category: 'Social Media',
    tags: ['linkedin', 'storytelling', 'vulnerability'],
    popularity: 91,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-003',
    title: 'Twitter (X): Controversial Industry Take',
    description: 'High-engagement tweet that challenges a common belief.',
    content: "Write a punchy tweet that challenges the status quo of [TOPIC]. Start with 'Unpopular opinion:' or 'Stop doing [COMMON ACTION].' Provide a 2-sentence justification for your view and ask your followers for their thoughts.",
    category: 'Social Media',
    tags: ['twitter', 'engagement', 'debate'],
    popularity: 94,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-004',
    title: 'TikTok/Reels: "How to" Mini-Tutorial',
    description: 'Fast-paced value script for short-form video.',
    content: "Script a 45-second video about [TOPIC]. 0-5s: Visual hook + text overlay. 5-35s: Show 3 quick steps with voiceover. 35-45s: Sudden result + CTA to 'Save this for later'.",
    category: 'Social Media',
    tags: ['tiktok', 'tutorial', 'education'],
    popularity: 97,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-005',
    title: 'LinkedIn: New Project Reveal',
    description: 'Professional announcement for a product or service.',
    content: "Write an announcement post for [TOPIC]. Focus on the 'Why' behind the project. Explain the gap in the market it fills and the benefit to your network. Use a 'Day in the Life' photo description to make it feel personal.",
    category: 'Social Media',
    tags: ['linkedin', 'announcement', 'launch'],
    popularity: 88,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-006',
    title: 'Instagram: Carousel Content Hook',
    description: 'Title slides that force a swipe.',
    content: "Generate 5 different 'Title Slide' ideas for an Instagram carousel about [TOPIC]. Use frameworks like 'The X mistakes you are making with...', 'How I achieved [RESULT] in [TIME]', and 'The only [TOPIC] checklist you need'.",
    category: 'Social Media',
    tags: ['instagram', 'carousel', 'hooks'],
    popularity: 96,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-007',
    title: 'Twitter (X): The Resource Curation Thread',
    description: 'Viral-style thread listing the best tools or links.',
    content: "Write a Twitter thread (8 tweets) curating the best resources for [TOPIC]. Tweet 1: Massive promise. Tweets 2-6: Individual resource + 1 sentence why it's good. Tweet 7: A summary 'Cheat Sheet'. Tweet 8: Follow for more weekly tips.",
    category: 'Social Media',
    tags: ['twitter', 'thread', 'curation'],
    popularity: 98,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-008',
    title: 'Facebook: Local Community Engagement',
    description: 'Drive interactions in a local niche group.',
    content: "Write a post for a local Facebook group about [TOPIC]. Position yourself as a helpful neighbor or professional. Ask for recommendations or provide a specific local insight that encourages 20+ residents to comment.",
    category: 'Social Media',
    tags: ['facebook', 'local', 'community'],
    popularity: 82,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-009',
    title: 'LinkedIn: The "Hiring" Post',
    description: 'Attract high-quality candidates without a boring JD.',
    content: "Write a LinkedIn post announcing a new role for [JOB TYPE] in the [TOPIC] industry. Instead of listing duties, describe the 'Impact' the person will have. Mention 3 unique perks of the company culture and ask people to tag their talented friends.",
    category: 'Social Media',
    tags: ['linkedin', 'hiring', 'recruitment'],
    popularity: 85,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-010',
    title: 'Instagram: Story "Ask Me Anything" Ideas',
    description: 'Prompts to populate your AMA sticker.',
    content: "Give me 5 specific 'Conversation Starters' for an Instagram AMA (Ask Me Anything) about [TOPIC]. Ensure they are specific enough to get quality questions but broad enough to interest a wide audience.",
    category: 'Social Media',
    tags: ['instagram', 'stories', 'interactive'],
    popularity: 89,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-011',
    title: 'TikTok: Behind the Scenes (BTS)',
    description: 'Build authenticity by showing the process.',
    content: "Plan a 15-second TikTok showing the 'BTS' of [TOPIC]. Describe the visual sequence (e.g., messy desk to final product) and write the text overlays that explain the hard work people don't see.",
    category: 'Social Media',
    tags: ['tiktok', 'reels', 'authenticity'],
    popularity: 92,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-012',
    title: 'LinkedIn: Industry News Reaction',
    description: 'Provide an expert take on a trending story.',
    content: "Write a LinkedIn post reacting to the recent news about [NEWS STORY]. Analyze how this specifically affects professionals in [TOPIC]. Provide 2 predictions for the next 6 months based on this event.",
    category: 'Social Media',
    tags: ['linkedin', 'news', 'expert'],
    popularity: 84,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-013',
    title: 'Twitter: The "Flash of Brilliance" Tweet',
    description: 'Short, philosophical insight on a niche topic.',
    content: "Write a one-sentence tweet about [TOPIC] that sounds like a 'Proverb'. It should be deep, relatable, and easy to quote-tweet.",
    category: 'Social Media',
    tags: ['twitter', 'branding', 'insights'],
    popularity: 78,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-014',
    title: 'Instagram: User Generated Content (UGC) Ask',
    description: 'Get your followers to create content for you.',
    content: "Write an Instagram caption inviting your audience to share photos of themselves using [PRODUCT/SERVICE]. Offer a specific incentive and create a unique hashtag related to [TOPIC].",
    category: 'Social Media',
    tags: ['instagram', 'ugc', 'engagement'],
    popularity: 81,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-015',
    title: 'LinkedIn: The "Gratitude" Post',
    description: 'Thank your mentors or team to boost reach.',
    content: "Write a post thanking [PERSON/TEAM] for their help with [TOPIC]. Focus on a specific piece of advice or support they gave you. Tag them and explain why their contribution was a game-changer.",
    category: 'Social Media',
    tags: ['linkedin', 'networking', 'gratitude'],
    popularity: 83,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-016',
    title: 'TikTok/Reels: The "Myth Buster"',
    description: 'Stop the scroll by debunking common lies.',
    content: "Script a 30-second video debunking a popular myth about [TOPIC]. Hook: 'Everyone thinks X, but they're wrong.' Reveal: 'The truth is Y.' Conclusion: 'Follow for the real facts.'",
    category: 'Social Media',
    tags: ['tiktok', 'reels', 'myth-buster'],
    popularity: 95,
    createdAt: '2024-07-02'
  },
  {
    id: 'sm-051',
    title: 'TikTok Viral Sound Scripting',
    description: 'How to use a specific sound for humor.',
    content: "I want to use the sound '[SOUND NAME]'. Write a script for a funny TikTok about [TOPIC] that perfectly matches the timing of this sound.",
    category: 'Social Media',
    tags: ['tiktok', 'humor', 'trends'],
    popularity: 94,
    createdAt: '2024-06-16'
  },
  {
    id: 'sm-052',
    title: 'LinkedIn: Why [TOPIC] is Overrated',
    description: 'A polarizing take to drive high engagement on LinkedIn.',
    content: "Write a LinkedIn post explaining why [TOPIC] is currently overrated. Contrast the popular opinion with the actual reality you've seen in the field. Use a professional but firm tone. Finish with a 'What do you think?' CTA.",
    category: 'Social Media',
    tags: ['linkedin', 'debate', 'opinion'],
    popularity: 89,
    createdAt: '2024-07-05'
  },
  {
    id: 'sm-101',
    title: 'Instagram: A Day in the Life: [TOPIC] Expert',
    description: 'Professional lifestyle vlog caption.',
    content: "Write an Instagram caption for a series of 'A Day in the Life' photos. From the first cup of coffee to the final [TOPIC] deliverable. Show the balance between work and life as a professional.",
    category: 'Social Media',
    tags: ['instagram', 'lifestyle', 'career'],
    popularity: 84,
    createdAt: '2024-07-05'
  },
  {
    id: 'sm-102',
    title: 'TikTok: Trending Sound Hook',
    description: 'Leverage trending audio for views.',
    content: "Create TikTok content using trending sound [SOUND]: match video timing to beat, hook viewer in first second, relate content to sound context, add text overlay for clarity, use trending hashtags, and encourage video shares.",
    category: 'Social Media',
    tags: ['tiktok', 'trends', 'viral'],
    popularity: 93,
    createdAt: '2024-07-06'
  },
  {
    id: 'sm-103',
    title: 'Instagram Stories Sequence',
    description: 'Create engaging story arc.',
    content: "Plan 5-10 story sequence for [TOPIC]: opening hook, middle engagement questions, product/service feature reveal, limited time offer, call to action, analytics viewing order, and link sticker strategy.",
    category: 'Social Media',
    tags: ['instagram', 'stories', 'engagement'],
    popularity: 89,
    createdAt: '2024-07-06'
  },
  {
    id: 'sm-104',
    title: 'LinkedIn: Company Culture Showcase',
    description: 'Build employer brand on LinkedIn.',
    content: "Share company culture through LinkedIn: employee spotlights, behind-the-scenes content, company achievements, team building moments, diversity showcase, career development stories, and mission-driven initiatives.",
    category: 'Social Media',
    tags: ['linkedin', 'employer-branding', 'culture'],
    popularity: 81,
    createdAt: '2024-07-06'
  },
  {
    id: 'sm-105',
    title: 'Twitter Threads for In-Depth Topics',
    description: 'Create engaging multi-tweet threads.',
    content: "Write 15+ tweet thread on [TOPIC]: compelling opening tweet, numbered tweets for clarity, provide value throughout, build curiosity between tweets, ask questions to encourage interaction, conclude with call-to-action.",
    category: 'Social Media',
    tags: ['twitter', 'threads', 'education'],
    popularity: 87,
    createdAt: '2024-07-07'
  },
  {
    id: 'sm-106',
    title: 'YouTube Community Tab Posts',
    description: 'Engage between video uploads.',
    content: "Create community posts for [TOPIC]: behind-the-scenes photos, quick tips, polls to engage subscribers, teasers of upcoming videos, milestone celebrations, merchandise announcements, and asking for feedback.",
    category: 'Social Media',
    tags: ['youtube', 'community', 'engagement'],
    popularity: 79,
    createdAt: '2024-07-07'
  },
  {
    id: 'sm-107',
    title: 'BeReal Alternative Strategy',
    description: 'Authentic unfiltered content strategy.',
    content: "Create authentic social strategy: raw behind-the-scenes moments, no heavy filtering, genuine struggles shown, wins and failures, real-time reactions, relatable humor, and building genuine community through honesty.",
    category: 'Social Media',
    tags: ['authenticity', 'strategy', 'engagement'],
    popularity: 77,
    createdAt: '2024-07-07'
  },
  {
    id: 'sm-108',
    title: 'Threads App Content Strategy',
    description: 'Leverage Meta\'s Twitter alternative.',
    content: "Develop Threads content strategy: conversation starters about [TOPIC], replies to trending discussions, hashtag strategy, engagement tactics, cross-posting from Twitter, community building, and original Threads-only content.",
    category: 'Social Media',
    tags: ['threads', 'twitter-alternative', 'new-platform'],
    popularity: 75,
    createdAt: '2024-07-08'
  },
  {
    id: 'sm-109',
    title: 'Pinterest SEO & Pinning Strategy',
    description: 'Drive traffic from Pinterest.',
    content: "Pinterest strategy for [NICHE]: keyword-rich pin descriptions, optimized pin design, create multiple pin versions, niche boards, consistency in pinning, rich pins setup, and driving traffic to website.",
    category: 'Social Media',
    tags: ['pinterest', 'seo', 'traffic'],
    popularity: 80,
    createdAt: '2024-07-08'
  },
  {
    id: 'sm-110',
    title: 'Snapshot Stories for Brands',
    description: 'Create daily snapshot content.',
    content: "Daily snapshot content ideas: morning routine, workspace setup, team collaboration, product creation process, customer interactions, lessons learned, day\'s wins, and consistent visual branding across snapshots.",
    category: 'Social Media',
    tags: ['daily-content', 'snapshots', 'routine'],
    popularity: 76,
    createdAt: '2024-07-08'
  },
  {
    id: 'sm-111',
    title: 'LinkedIn Outreach Connection Message',
    description: 'Write effective LinkedIn DMs.',
    content: "Craft LinkedIn connection message to [PERSON_TYPE]: personalized opening (mention mutual connection/interest), reason for connecting, value proposition, specific ask/next step, and soft call-to-action without being pushy.",
    category: 'Social Media',
    tags: ['linkedin', 'networking', 'dms'],
    popularity: 78,
    createdAt: '2024-07-09'
  },
  {
    id: 'sm-112',
    title: 'Instagram Reels Hook Formula',
    description: 'Create reels that stop the scroll.',
    content: "Develop Instagram Reels using hooks: first 3-second visual hook, pattern interrupts, text overlays, trending audio, relatable scenario, value delivery, trend participation, and strong CTAs to engage.",
    category: 'Social Media',
    tags: ['instagram-reels', 'hooks', 'viral'],
    popularity: 91,
    createdAt: '2024-07-09'
  },
  {
    id: 'sm-113',
    title: 'Facebook Group Community Building',
    description: 'Grow and engage Facebook group.',
    content: "Facebook group strategy for [TOPIC]: daily discussion prompts, member spotlights, exclusive content for members, live Q&A sessions, rules/moderation, growth tactics, engagement metrics tracking, and community events.",
    category: 'Social Media',
    tags: ['facebook', 'groups', 'community'],
    popularity: 74,
    createdAt: '2024-07-09'
  },
  {
    id: 'sm-114',
    title: 'Instagram Guides Feature',
    description: 'Create curated content guides.',
    content: "Create Instagram Guides for [TOPIC]: curate relevant posts, write guide description, add tips, organize chronologically or by theme, update guides regularly, cross-promote in feed/stories, and track guide saves.",
    category: 'Social Media',
    tags: ['instagram', 'guides', 'curation'],
    popularity: 72,
    createdAt: '2024-07-10'
  },
  {
    id: 'sm-115',
    title: 'TikTok Duet & Stitch Strategy',
    description: 'Leverage TikTok collaboration features.',
    content: "Duet/stitch strategy: identify relevant TikTok creators, create value-add duets, humorous responses to trends, educational stitches, collaboration opportunities, proper tagging/crediting, and community building through collabs.",
    category: 'Social Media',
    tags: ['tiktok', 'duets', 'collaboration'],
    popularity: 83,
    createdAt: '2024-07-10'
  },
  {
    id: 'sm-116',
    title: 'LinkedIn Carousel Post Creator',
    description: 'Create LinkedIn carousel posts.',
    content: "Design LinkedIn carousel about [TOPIC]: compelling slide 1, progressive value across slides, visual consistency, text-based takeaways, professional design, save-worthy content, and call-to-action on final slide.",
    category: 'Social Media',
    tags: ['linkedin', 'carousel', 'education'],
    popularity: 82,
    createdAt: '2024-07-10'
  },
  {
    id: 'sm-117',
    title: 'Twitter/X Analytics Optimization',
    description: 'Improve Twitter performance.',
    content: "Analyze Twitter analytics: best posting times, high-engagement tweet types, audience demographics, impressions vs engagement, reply engagement rate, retweet patterns, and optimization strategy based on data.",
    category: 'Social Media',
    tags: ['twitter', 'analytics', 'optimization'],
    popularity: 75,
    createdAt: '2024-07-11'
  },
  {
    id: 'sm-118',
    title: 'Instagram Bio & Link Optimization',
    description: 'Optimize Instagram profile for conversions.',
    content: "Optimize Instagram bio: compelling headline, clear value proposition, call-to-action, link strategy (Linktree vs direct), emoji for scannability, contact information, consistent branding, and A/B testing bio variations.",
    category: 'Social Media',
    tags: ['instagram', 'profile', 'optimization'],
    popularity: 81,
    createdAt: '2024-07-11'
  },
  {
    id: 'sm-119',
    title: 'Facebook Live Broadcast Strategy',
    description: 'Execute successful Facebook live streams.',
    content: "Facebook Live planning: promotion before stream, clear topic/value, technical setup, interactive elements, engagement tactics, timing (10-30 min optimal), call-to-action, and repurposing as on-demand video.",
    category: 'Social Media',
    tags: ['facebook', 'live', 'video'],
    popularity: 77,
    createdAt: '2024-07-11'
  },
  {
    id: 'sm-120',
    title: 'TikTok Creator Fund Path',
    description: 'Monetize TikTok through creator fund.',
    content: "TikTok monetization strategy: hitting creator fund requirements (10k followers, 100k views), content consistency, trending sounds, consistent posting, engagement metrics, growth tactics, and brand deals alongside creator fund.",
    category: 'Social Media',
    tags: ['tiktok', 'monetization', 'creator-fund'],
    popularity: 79,
    createdAt: '2024-07-12'
  },
  {
    id: 'sm-121',
    title: 'LinkedIn Personal Branding Series',
    description: 'Build authority through LinkedIn posts.',
    content: "LinkedIn authority series: 30-day posting plan, signature topics, teaching content, industry insights, personal stories, thought leadership positioning, engagement from industry, and attracting inbound opportunities.",
    category: 'Social Media',
    tags: ['linkedin', 'personal-brand', 'authority'],
    popularity: 84,
    createdAt: '2024-07-12'
  },
  {
    id: 'sm-122',
    title: 'Instagram DM Automation Sequences',
    description: 'Create automated Instagram DM sequences.',
    content: "Instagram automation: welcome DM sequence, lead magnet delivery via DM, customer support automation, order confirmation messages, upsell sequences, and personalization for different customer segments.",
    category: 'Social Media',
    tags: ['instagram', 'automation', 'dms'],
    popularity: 73,
    createdAt: '2024-07-12'
  },
  {
    id: 'sm-123',
    title: 'Twitter List Strategy for Engagement',
    description: 'Use Twitter lists for networking.',
    content: "Twitter lists for engagement: organize following by niche, create public curated lists, participate in list discussions, follow other curators, build community through lists, monetize high-engagement lists, and strengthen network.",
    category: 'Social Media',
    tags: ['twitter', 'lists', 'networking'],
    popularity: 70,
    createdAt: '2024-07-13'
  },
  {
    id: 'sm-124',
    title: 'YouTube Channel Membership Strategy',
    description: 'Enable YouTube memberships.',
    content: "YouTube membership program: set tier structure, exclusive perks (badges, early access), member-only content, engaging members, promoting membership, pricing tiers, and member community engagement.",
    category: 'Social Media',
    tags: ['youtube', 'memberships', 'monetization'],
    popularity: 76,
    createdAt: '2024-07-13'
  },
  {
    id: 'sm-125',
    title: 'TikTok Shop Integration',
    description: 'Sell directly through TikTok shop.',
    content: "TikTok Shop setup: product listing optimization, shoppable videos, seller verification, inventory management, promotional strategies for TikTok Shop, integrating with live streams, and measuring shop performance.",
    category: 'Social Media',
    tags: ['tiktok', 'ecommerce', 'shop'],
    popularity: 78,
    createdAt: '2024-07-13'
  },
  {
    id: 'sm-126',
    title: 'LinkedIn Newsletter Creator',
    description: 'Build newsletter audience on LinkedIn.',
    content: "LinkedIn newsletter strategy: choosing focus topic, newsletter frequency, subscriber growth tactics, exclusive value delivery, call-to-action for subscriptions, cross-promotion, and building long-term subscriber relationship.",
    category: 'Social Media',
    tags: ['linkedin', 'newsletter', 'email'],
    popularity: 81,
    createdAt: '2024-07-14'
  },
  {
    id: 'sm-127',
    title: 'Instagram Subscriptions Revenue',
    description: 'Monetize Instagram through subscriptions.',
    content: "Instagram subscriptions setup: tier selection, exclusive subscriber content, stories/reels access, badges, pricing, promotion strategy, subscriber engagement, and combining with ads/brand deals for revenue.",
    category: 'Social Media',
    tags: ['instagram', 'subscriptions', 'monetization'],
    popularity: 75,
    createdAt: '2024-07-14'
  },
  {
    id: 'sm-128',
    title: 'Hashtag Research & Strategy',
    description: 'Master hashtag usage across platforms.',
    content: "Hashtag strategy: research trending hashtags, create branded hashtag, hashtag volume balancing (popular vs niche), platform-specific hashtag strategy, hashtag performance tracking, and hashtag rotation strategy.",
    category: 'Social Media',
    tags: ['hashtags', 'seo', 'discoverability'],
    popularity: 82,
    createdAt: '2024-07-14'
  },
  {
    id: 'sm-129',
    title: 'Cross-Platform Content Repurposing',
    description: 'Maximize content across platforms.',
    content: "Repurposing strategy: create once, repurpose across platforms, format adaptation, optimal posting times per platform, platform-specific optimization, analytics by platform, and ROI tracking per platform.",
    category: 'Social Media',
    tags: ['repurposing', 'efficiency', 'multi-platform'],
    popularity: 83,
    createdAt: '2024-07-15'
  },
  {
    id: 'sm-130',
    title: 'Social Media Content Calendar Template',
    description: 'Plan social content systematically.',
    content: "Content calendar design: 30/60/90-day planning, content mix percentage (educational/entertaining/promotional), visual planning, caption templates, best posting times, cross-platform coordination, and performance tracking columns.",
    category: 'Social Media',
    tags: ['planning', 'calendar', 'organization'],
    popularity: 79,
    createdAt: '2024-07-15'
  },
  {
    id: 'sm-131',
    title: 'Social Media Analytics Dashboard',
    description: 'Track KPIs across platforms.',
    content: "Analytics dashboard: key metrics per platform, audience growth tracking, engagement metrics, reach and impressions, conversion tracking, competitor benchmarking, monthly reporting, and actionable insights.",
    category: 'Social Media',
    tags: ['analytics', 'metrics', 'dashboards'],
    popularity: 74,
    createdAt: '2024-07-15'
  },
  {
    id: 'sm-132',
    title: 'Influencer Collaboration Outreach',
    description: 'Partner with relevant influencers.',
    content: "Influencer outreach: identify relevant influencers, value alignment check, personalized pitch email, collaboration proposal, compensation structure, deliverables clarity, contract terms, and performance tracking.",
    category: 'Social Media',
    tags: ['influencer', 'partnerships', 'growth'],
    popularity: 80,
    createdAt: '2024-07-16'
  },
  {
    id: 'sm-133',
    title: 'Social Media Crisis Response Plan',
    description: 'Handle negative comments professionally.',
    content: "Crisis plan: identifying negative comments, response templates, escalation procedure, PR messaging, how to turn criticism into opportunity, documentation of incidents, team communication, and reputation recovery.",
    category: 'Social Media',
    tags: ['crisis', 'reputation', 'management'],
    popularity: 71,
    createdAt: '2024-07-16'
  },
  {
    id: 'sm-134',
    title: 'Social Proof Strategy for Social Media',
    description: 'Leverage customer testimonials.',
    content: "Social proof tactics: customer testimonial videos, review screenshots, user-generated content, client case studies, media mentions, influencer endorsements, community creation, and authentic social proof vs fake reviews.",
    category: 'Social Media',
    tags: ['social-proof', 'testimonials', 'trust'],
    popularity: 77,
    createdAt: '2024-07-16'
  },
  {
    id: 'sm-135',
    title: 'Social Media Team Management',
    description: 'Organize social media operations.',
    content: "Team structure: role definitions, content creator, community manager, analytics, approval workflow, communication tools, posting schedule, crisis protocols, training, and performance metrics per role.",
    category: 'Social Media',
    tags: ['team', 'operations', 'management'],
    popularity: 69,
    createdAt: '2024-07-17'
  },
  {
    id: 'sm-136',
    title: 'Social Media Mastery Comprehensive Guide',
    description: 'Complete social media success blueprint.',
    content: "Master social media: platform strategy, content creation, audience building, engagement tactics, community management, monetization options, analytics interpretation, team coordination, crisis management, and continuous improvement.",
    category: 'Social Media',
    tags: ['mastery', 'comprehensive', 'success'],
    popularity: 88,
    createdAt: '2024-07-17'
  },

  // --- MARKETING ---
  {
    id: 'mkt-001',
    title: 'Sales Email Sequence',
    description: 'A 3-part email sequence for product launches.',
    content: "Write a 3-part email sales sequence for [PRODUCT/SERVICE]. Email 1: The Hook & Pain Point, Email 2: The Solution & Benefits, Email 3: The Scarcity & Call to Action. Target audience is [AUDIENCE].",
    category: 'Marketing',
    tags: ['email-marketing', 'sales', 'copywriting'],
    popularity: 96,
    createdAt: '2024-05-15'
  },
  {
    id: 'mkt-002',
    title: 'Welcome Email (Day 1)',
    description: 'The first impression email for new subscribers.',
    content: "Write a welcoming Day 1 email for [PRODUCT/SERVICE]. Thank them for joining, briefly explain the value they'll receive, and give them a 'Quick Win' or a helpful resource right away. End with a question to get them to hit reply.",
    category: 'Marketing',
    tags: ['email', 'onboarding', 'welcome'],
    popularity: 92,
    createdAt: '2024-07-01'
  },
  {
    id: 'mkt-003',
    title: 'Abandoned Cart Recovery',
    description: 'Bring back lost customers with emotional urgency.',
    content: "Write an abandoned cart email for [PRODUCT/SERVICE]. Use a friendly reminder tone. Focus on the benefits they are missing out on. Include a limited-time 10% discount code [CODE] to nudge the purchase.",
    category: 'Marketing',
    tags: ['ecommerce', 'email', 'conversion'],
    popularity: 95,
    createdAt: '2024-07-01'
  },
  {
    id: 'mkt-004',
    title: 'Facebook Ad Headline Pack',
    description: '5 high-CTR headlines for Meta ads.',
    content: "Generate 5 high-converting Facebook ad headlines for [PRODUCT/SERVICE]. Target [AUDIENCE]. Include one that uses curiosity, one that is benefit-driven, one that use social proof, one that uses a direct call to action, and one that is a surprising question.",
    category: 'Marketing',
    tags: ['ads', 'facebook', 'headlines'],
    popularity: 98,
    createdAt: '2024-07-01'
  },
  {
    id: 'mkt-005',
    title: 'Google Search Ad Copy',
    description: 'Intent-focused ad copy for high-value keywords.',
    content: "Write a Google Search Ad for the keyword '[KEYWORD]'. Product: [PRODUCT/SERVICE]. Include Headline 1 (30 chars), Headline 2 (30 chars), Headline 3 (30 chars), and two Descriptions (90 chars each). Focus on high click-through rate and relevance.",
    category: 'Marketing',
    tags: ['ads', 'google', 'sem'],
    popularity: 94,
    createdAt: '2024-07-01'
  },
  {
    id: 'mkt-051',
    title: 'Survey Invitation Email',
    description: 'Get customer feedback with high response rates.',
    content: "Write an email inviting customers of [PRODUCT/SERVICE] to take a 2-minute survey. Offer a small incentive (like a [REWARD]) for their time. Focus on how their feedback helps us improve for them.",
    category: 'Marketing',
    tags: ['feedback', 'email', 'research'],
    popularity: 73,
    createdAt: '2024-07-01'
  },
  {
    id: 'mkt-006',
    title: 'Copywriting Sales Page',
    description: 'Write high-converting landing page copy.',
    content: "Write sales page copy for [PRODUCT/SERVICE]: compelling headline with benefits, hook with pain point, problem elaboration, solution positioning, feature-benefit breakdown, social proof/testimonials, objection handling, and strong CTA.",
    category: 'Marketing',
    tags: ['copywriting', 'conversion', 'sales-page'],
    popularity: 93,
    createdAt: '2024-07-02'
  },
  {
    id: 'mkt-007',
    title: 'SMS Marketing Campaign',
    description: 'Create text message marketing sequences.',
    content: "Design SMS campaign for [PRODUCT/SERVICE]: message personalization, frequency optimization, timing strategy, CTAs, short links, segmentation by customer type, opt-out compliance, and conversion tracking.",
    category: 'Marketing',
    tags: ['sms', 'messaging', 'marketing'],
    popularity: 87,
    createdAt: '2024-07-02'
  },
  {
    id: 'mkt-008',
    title: 'Influencer Collaboration Brief',
    description: 'Partner with influencers effectively.',
    content: "Create influencer brief for [CAMPAIGN]: campaign objectives, target audience, key messages, content guidelines, deliverables, posting schedule, performance metrics, compensation, and exclusivity terms.",
    category: 'Marketing',
    tags: ['influencer', 'partnerships', 'marketing'],
    popularity: 89,
    createdAt: '2024-07-02'
  },
  {
    id: 'mkt-009',
    title: 'Brand Voice Guidelines',
    description: 'Define consistent brand communication.',
    content: "Create brand voice guide for [COMPANY]: tone (professional/casual/friendly), personality traits, key values, communication style, examples of brand voice in action, vocabulary to use/avoid, messaging pillars, and applications across channels.",
    category: 'Marketing',
    tags: ['branding', 'voice', 'guidelines'],
    popularity: 85,
    createdAt: '2024-07-02'
  },
  {
    id: 'mkt-010',
    title: 'Retargeting Ad Strategy',
    description: 'Bring back website visitors.',
    content: "Design retargeting campaign for [PRODUCT/SERVICE]: pixel setup, audience segmentation, personalized ad creative, frequency capping, landing pages for different segments, conversion goals, and ROI optimization.",
    category: 'Marketing',
    tags: ['retargeting', 'ads', 'conversion'],
    popularity: 91,
    createdAt: '2024-07-02'
  },
  {
    id: 'mkt-011',
    title: 'Press Kit Creator',
    description: 'Create professional media materials.',
    content: "Build press kit for [COMPANY/PRODUCT]: company overview, key facts, founding story, executive bios, product/service description, high-resolution images, press releases, awards/media mentions, contact information.",
    category: 'Marketing',
    tags: ['pr', 'media', 'press'],
    popularity: 78,
    createdAt: '2024-07-03'
  },
  {
    id: 'mkt-012',
    title: 'Content Calendar Template',
    description: 'Plan quarterly marketing content.',
    content: "Create content calendar for [CHANNELS] for [QUARTER]: themes by week, content ideas, posting dates/times, responsible person, CTAs, cross-promotion between channels, performance tracking columns.",
    category: 'Marketing',
    tags: ['planning', 'content', 'calendar'],
    popularity: 84,
    createdAt: '2024-07-03'
  },
  {
    id: 'mkt-013',
    title: 'Win-Back Email Campaign',
    description: 'Re-engage inactive customers.',
    content: "Write win-back email for [PRODUCT/SERVICE] inactive customers: reason to come back, special win-back offer, reminder of benefits, testimonials from active users, one-click reactivation, and soft goodbye option.",
    category: 'Marketing',
    tags: ['email', 'retention', 'reactivation'],
    popularity: 82,
    createdAt: '2024-07-03'
  },
  {
    id: 'mkt-014',
    title: 'LinkedIn Advertising Copy',
    description: 'Create B2B professional ads.',
    content: "Write LinkedIn ad copy for [B2B_PRODUCT/SERVICE]: attention-grabbing opening, professional tone, job title/role targeting, pain point identification, solution positioning, and CTA optimized for LinkedIn audience.",
    category: 'Marketing',
    tags: ['linkedin', 'ads', 'b2b'],
    popularity: 88,
    createdAt: '2024-07-03'
  },
  {
    id: 'mkt-015',
    title: 'Product Launch Plan',
    description: 'Execute successful product launches.',
    content: "Plan launch for [PRODUCT]: pre-launch buzz strategy, launch day activities, influencer outreach, press coverage, email sequence, social media blitz, paid advertising, team roles, and first 30 days roadmap.",
    category: 'Marketing',
    tags: ['launches', 'product', 'strategy'],
    popularity: 90,
    createdAt: '2024-07-04'
  },
  {
    id: 'mkt-016',
    title: 'Video Marketing Strategy',
    description: 'Leverage video for marketing.',
    content: "Design video strategy for [BUSINESS]: video types (testimonial, tutorial, product demo, explainer), distribution channels, production quality level, frequency, calls-to-action, and measurement of video ROI.",
    category: 'Marketing',
    tags: ['video', 'content', 'strategy'],
    popularity: 86,
    createdAt: '2024-07-04'
  },
  {
    id: 'mkt-017',
    title: 'Customer Testimonial Strategy',
    description: 'Collect and use customer stories.',
    content: "Build testimonial strategy for [PRODUCT/SERVICE]: identify best customers, request format (video, written, audio), incentive structure, usage of testimonials across marketing, rotation schedule, and update frequency.",
    category: 'Marketing',
    tags: ['testimonials', 'social-proof', 'marketing'],
    popularity: 83,
    createdAt: '2024-07-04'
  },
  {
    id: 'mkt-018',
    title: 'Seasonal Marketing Calendar',
    description: 'Plan year-round marketing campaigns.',
    content: "Create annual marketing calendar for [BUSINESS]: identify seasonal peaks, plan campaigns 3 months ahead, coordinate email/social/ads, theme ideas for seasons, budget allocation per period, and preparation timeline.",
    category: 'Marketing',
    tags: ['seasonal', 'planning', 'calendar'],
    popularity: 79,
    createdAt: '2024-07-04'
  },
  {
    id: 'mkt-019',
    title: 'Affiliate Marketing Program',
    description: 'Create affiliate partnership model.',
    content: "Design affiliate program for [PRODUCT/SERVICE]: commission structure, affiliate recruitment strategy, marketing materials for affiliates, performance tracking, payout schedule, top affiliate incentives, and program terms.",
    category: 'Marketing',
    tags: ['affiliate', 'partnerships', 'revenue'],
    popularity: 81,
    createdAt: '2024-07-05'
  },
  {
    id: 'mkt-020',
    title: 'Marketing Automation Workflow',
    description: 'Set up automated email sequences.',
    content: "Create marketing automation for [WORKFLOW]: trigger events, email sequence timing, personalization variables, dynamic content, segmentation logic, unsubscribe options, and performance tracking setup.",
    category: 'Marketing',
    tags: ['automation', 'email', 'workflow'],
    popularity: 84,
    createdAt: '2024-07-05'
  },
  {
    id: 'mkt-021',
    title: 'Brand Partnership Strategy',
    description: 'Collaborate with complementary brands.',
    content: "Develop brand partnership for [BRAND_A] and [BRAND_B]: mutual value identification, partnership structure (co-marketing, joint product, cross-promotion), target audience overlap, deliverables, timeline, and ROI sharing.",
    category: 'Marketing',
    tags: ['partnerships', 'strategy', 'growth'],
    popularity: 76,
    createdAt: '2024-07-05'
  },
  {
    id: 'mkt-022',
    title: 'Customer Journey Map',
    description: 'Visualize customer experience path.',
    content: "Map customer journey for [PRODUCT/SERVICE]: awareness stage touchpoints, consideration phase interactions, decision point influences, purchase experience, post-purchase support, and loyalty building activities.",
    category: 'Marketing',
    tags: ['customer-journey', 'experience', 'mapping'],
    popularity: 82,
    createdAt: '2024-07-05'
  },
  {
    id: 'mkt-023',
    title: 'Competitive Positioning Strategy',
    description: 'Differentiate from competitors.',
    content: "Position [PRODUCT/SERVICE] against competitors: unique selling proposition, competitive advantages, pricing strategy, messaging differentiation, feature positioning, and communication across channels.",
    category: 'Marketing',
    tags: ['positioning', 'strategy', 'competitive'],
    popularity: 79,
    createdAt: '2024-07-06'
  },
  {
    id: 'mkt-024',
    title: 'Email Subject Line Generator',
    description: 'Create high-open-rate subject lines.',
    content: "Generate email subject lines for [CAMPAIGN]: create 10 options using different strategies (curiosity, urgency, personalization, benefit-driven, numbers, questions), test recommendations, and open-rate optimization tips.",
    category: 'Marketing',
    tags: ['email', 'copywriting', 'optimization'],
    popularity: 88,
    createdAt: '2024-07-06'
  },
  {
    id: 'mkt-025',
    title: 'Market Segmentation Strategy',
    description: 'Divide audience into target groups.',
    content: "Segment market for [PRODUCT/SERVICE]: demographic segmentation, psychographic segmentation, behavioral segmentation, geographic segmentation, segment sizing, and targeting strategy for each segment.",
    category: 'Marketing',
    tags: ['segmentation', 'strategy', 'targeting'],
    popularity: 80,
    createdAt: '2024-07-06'
  },
  {
    id: 'mkt-026',
    title: 'Trade Show Marketing',
    description: 'Maximize trade show ROI.',
    content: "Plan trade show for [EVENT]: booth design strategy, lead capture systems, giveaway items, pre-show promotion, booth staff training, post-show follow-up plan, and ROI measurement.",
    category: 'Marketing',
    tags: ['events', 'trade-show', 'b2b'],
    popularity: 74,
    createdAt: '2024-07-06'
  },
  {
    id: 'mkt-027',
    title: 'Podcast Sponsorship Strategy',
    description: 'Advertise in relevant podcasts.',
    content: "Develop podcast sponsorship for [PRODUCT/SERVICE]: podcast selection criteria, target audience alignment, ad copy creation, sponsorship tiers, performance tracking, and measuring podcast ROI.",
    category: 'Marketing',
    tags: ['podcasts', 'sponsorship', 'advertising'],
    popularity: 75,
    createdAt: '2024-07-07'
  },
  {
    id: 'mkt-028',
    title: 'Trust-Building Content Series',
    description: 'Establish authority and credibility.',
    content: "Create trust-building content for [BRAND]: expert interviews, educational guides, industry insights, transparency content, behind-the-scenes, founder story, certifications/awards, and client results showcase.",
    category: 'Marketing',
    tags: ['content', 'trust', 'authority'],
    popularity: 83,
    createdAt: '2024-07-07'
  },
  {
    id: 'mkt-029',
    title: 'Customer Feedback Loop',
    description: 'Implement systematic feedback process.',
    content: "Create feedback loop for [PRODUCT/SERVICE]: feedback collection methods, survey timing, analysis process, acting on feedback, communicating improvements, closing the feedback loop, and showing customer impact.",
    category: 'Marketing',
    tags: ['feedback', 'customer-success', 'improvement'],
    popularity: 77,
    createdAt: '2024-07-07'
  },
  {
    id: 'mkt-030',
    title: 'Growth Hacking Tactics',
    description: 'Accelerate rapid growth with creative strategies.',
    content: "Identify growth hacks for [STARTUP/PRODUCT]: viral loop potential, referral incentive structure, product-market fit optimization, unconventional marketing channels, creative PR stunts, and growth metrics to track.",
    category: 'Marketing',
    tags: ['growth-hacking', 'startup', 'rapid-growth'],
    popularity: 85,
    createdAt: '2024-07-08'
  },
  {
    id: 'mkt-031',
    title: 'Display Advertising Strategy',
    description: 'Plan banner and display ads.',
    content: "Design display ad campaign for [PRODUCT]: ad size selection, creative design guidelines, placement strategy (websites/networks), frequency capping, audience targeting, budget allocation, and performance metrics.",
    category: 'Marketing',
    tags: ['display-ads', 'advertising', 'digital'],
    popularity: 76,
    createdAt: '2024-07-08'
  },
  {
    id: 'mkt-032',
    title: 'User-Generated Content Strategy',
    description: 'Leverage customer content.',
    content: "UGC strategy for [BRAND]: how to encourage customer content, hashtag creation, content rights/permissions, featuring customer content, incentive programs, and measuring UGC impact on marketing.",
    category: 'Marketing',
    tags: ['ugc', 'social-proof', 'community'],
    popularity: 81,
    createdAt: '2024-07-08'
  },
  {
    id: 'mkt-033',
    title: 'Marketing Metrics Dashboard',
    description: 'Track marketing performance KPIs.',
    content: "Create metrics dashboard for [MARKETING_FUNCTION]: define key metrics, data sources, visualization design, reporting frequency, trend analysis, benchmarking, and actionable insights from metrics.",
    category: 'Marketing',
    tags: ['analytics', 'metrics', 'dashboards'],
    popularity: 78,
    createdAt: '2024-07-08'
  },
  {
    id: 'mkt-034',
    title: 'Event Marketing Strategy',
    description: 'Execute successful marketing events.',
    content: "Plan marketing event for [TOPIC]: event format, venue selection, target attendee count, speaker/content strategy, promotion plan, sponsorship opportunities, on-site experience, and post-event follow-up.",
    category: 'Marketing',
    tags: ['events', 'experiential', 'marketing'],
    popularity: 77,
    createdAt: '2024-07-09'
  },
  {
    id: 'mkt-035',
    title: 'Chatbot Marketing Copy',
    description: 'Write conversational marketing messages.',
    content: "Create chatbot conversations for [BUSINESS]: greeting message, common questions and answers, product recommendations, lead qualification questions, appointment booking, and handoff to human support.",
    category: 'Marketing',
    tags: ['chatbot', 'ai', 'customer-service'],
    popularity: 73,
    createdAt: '2024-07-09'
  },
  {
    id: 'mkt-036',
    title: 'Paid Search Strategy',
    description: 'Optimize paid search campaigns.',
    content: "Develop paid search strategy for [KEYWORDS]: keyword selection, ad groups organization, bid strategy, landing page matching, A/B testing plan, negative keywords, quality score improvement, and ROI targets.",
    category: 'Marketing',
    tags: ['ppc', 'paid-search', 'google-ads'],
    popularity: 82,
    createdAt: '2024-07-09'
  },
  {
    id: 'mkt-037',
    title: 'Direct Mail Campaign',
    description: 'Execute physical mail marketing.',
    content: "Plan direct mail for [AUDIENCE]: target list acquisition, creative design, mail piece format (postcard/letter), copywriting, list segmentation, timing strategy, response mechanisms, and ROI tracking.",
    category: 'Marketing',
    tags: ['direct-mail', 'traditional', 'marketing'],
    popularity: 68,
    createdAt: '2024-07-09'
  },
  {
    id: 'mkt-038',
    title: 'Webinar Promotion Strategy',
    description: 'Drive webinar registration and attendance.',
    content: "Promote webinar on [TOPIC]: pre-webinar email sequence, social media promotion, landing page copy, speaker promotion, reminder emails, registration incentives, technical setup, and post-webinar follow-up.",
    category: 'Marketing',
    tags: ['webinars', 'promotion', 'events'],
    popularity: 80,
    createdAt: '2024-07-10'
  },
  {
    id: 'mkt-039',
    title: 'Local Marketing Strategy',
    description: 'Dominate local market presence.',
    content: "Local marketing plan for [BUSINESS/LOCATION]: Google Business Profile optimization, local citation building, local events, community partnerships, local content, local link building, and reputation management.",
    category: 'Marketing',
    tags: ['local', 'community', 'seo'],
    popularity: 79,
    createdAt: '2024-07-10'
  },
  {
    id: 'mkt-040',
    title: 'Crisis Communication Plan',
    description: 'Handle marketing emergencies.',
    content: "Create crisis comm plan for [COMPANY]: scenario planning, stakeholder identification, key messages, response timeline, media relations, social media response strategy, and recovery communication.",
    category: 'Marketing',
    tags: ['crisis', 'communication', 'pr'],
    popularity: 72,
    createdAt: '2024-07-10'
  },
  {
    id: 'mkt-041',
    title: 'Channel Attribution Model',
    description: 'Understand which channels drive conversions.',
    content: "Design attribution model for [BUSINESS]: first-touch vs. last-touch analysis, multi-touch attribution, channel weighting, customer journey tracking, attribution software selection, and improving underperforming channels.",
    category: 'Marketing',
    tags: ['attribution', 'analytics', 'measurement'],
    popularity: 75,
    createdAt: '2024-07-11'
  },
  {
    id: 'mkt-042',
    title: 'Cause Marketing Initiative',
    description: 'Connect brand to social cause.',
    content: "Design cause marketing for [BRAND]: cause selection aligned with values, partnership with nonprofit, campaign messaging, donation percentage/structure, employee involvement, marketing amplification, and impact measurement.",
    category: 'Marketing',
    tags: ['cause', 'social-impact', 'branding'],
    popularity: 69,
    createdAt: '2024-07-11'
  },
  {
    id: 'mkt-043',
    title: 'Personalization Strategy',
    description: 'Customize marketing to individual level.',
    content: "Implement personalization for [MARKETING_CHANNEL]: data collection, segmentation for personalization, dynamic content creation, personalization technology, testing personalization impact, and privacy compliance.",
    category: 'Marketing',
    tags: ['personalization', 'technology', 'data'],
    popularity: 83,
    createdAt: '2024-07-11'
  },
  {
    id: 'mkt-044',
    title: 'Marketing Team Structure',
    description: 'Organize effective marketing team.',
    content: "Build marketing team for [SIZE/STAGE]: role definitions, skill requirements, hiring plan, team training, tools/tech stack, communication workflow, performance metrics per role, and team expansion strategy.",
    category: 'Marketing',
    tags: ['organization', 'team', 'operations'],
    popularity: 71,
    createdAt: '2024-07-11'
  },
  {
    id: 'mkt-045',
    title: 'Marketing Budget Allocation',
    description: 'Distribute marketing budget strategically.',
    content: "Allocate budget for [TOTAL_BUDGET]: prioritize channels by ROI, test budget allocation, set spending limits per channel, reserve budget for testing, monitor spend efficiency, and optimize allocation quarterly.",
    category: 'Marketing',
    tags: ['budget', 'allocation', 'planning'],
    popularity: 74,
    createdAt: '2024-07-12'
  },
  {
    id: 'mkt-046',
    title: 'Customer Loyalty Program',
    description: 'Create program to retain customers.',
    content: "Design loyalty program for [PRODUCT/SERVICE]: reward structure (points/tiers/perks), earning mechanisms, redemption options, enrollment strategy, communication plan, member experience, and program ROI.",
    category: 'Marketing',
    tags: ['loyalty', 'retention', 'rewards'],
    popularity: 81,
    createdAt: '2024-07-12'
  },
  {
    id: 'mkt-047',
    title: 'Marketing Audit Checklist',
    description: 'Comprehensive marketing review.',
    content: "Conduct marketing audit for [COMPANY]: strategy assessment, channel performance review, messaging evaluation, competitive analysis, brand consistency check, creative quality, analytics setup, and recommendations for improvement.",
    category: 'Marketing',
    tags: ['audit', 'assessment', 'optimization'],
    popularity: 76,
    createdAt: '2024-07-12'
  },
  {
    id: 'mkt-048',
    title: 'Marketing Mastery Blueprint',
    description: 'Comprehensive marketing success guide.',
    content: "Master marketing: strategy development, audience targeting, channel selection, content creation, campaign execution, analytics tracking, optimization testing, team building, budget management, and continuous improvement cycles.",
    category: 'Marketing',
    tags: ['mastery', 'comprehensive', 'strategy'],
    popularity: 89,
    createdAt: '2024-07-13'
  },
  {
    id: 'mkt-049',
    title: 'Marketing Automation Workflows',
    description: 'Automate marketing processes.',
    content: "Build automation for [GOAL]: email sequences, lead scoring, trigger-based campaigns, customer journey mapping, integration setup, personalization rules, segmentation logic, and performance monitoring.",
    category: 'Marketing',
    tags: ['automation', 'workflows', 'efficiency'],
    popularity: 82,
    createdAt: '2024-07-14'
  },
  {
    id: 'mkt-050',
    title: 'Ultimate Marketing Success Guide',
    description: 'Complete marketing excellence blueprint.',
    content: "Achieve marketing mastery: strategic planning, market analysis, audience profiling, value proposition, multi-channel campaigns, content strategy, customer engagement, analytics optimization, performance metrics, team scaling, and sustainable growth.",
    category: 'Marketing',
    tags: ['mastery', 'ultimate-guide', 'success'],
    popularity: 95,
    createdAt: '2024-07-14'
  },
  
  // --- COPYWRITING ---
  {
    id: 'copy-001',
    title: 'Brand Voice Builder',
    description: 'Define a clear, repeatable brand voice system.',
    content: "Act as a senior copy chief. Build a brand voice for [BRAND] targeting [AUDIENCE]. Output a messaging guide with: 1) voice pillars (tone, cadence, formality), 2) do/don’t examples, 3) sample lines for homepage, emails, ads, and social, 4) vocabulary bank (power words + banned words).",
    category: 'Copywriting',
    tags: ['brand-voice', 'tone', 'guidelines'],
    popularity: 90,
    createdAt: '2024-07-15'
  },
  {
    id: 'copy-002',
    title: 'Unique Value Proposition',
    description: 'Craft a UVP that is specific and defensible.',
    content: "Create a sharp UVP for [PRODUCT] in [CATEGORY]. Include: 1) primary promise, 2) 3 differentiators vs [COMPETITOR], 3) proof points (data/testimonials), 4) a 1-line elevator pitch, 5) headline + subhead variations for homepage hero.",
    category: 'Copywriting',
    tags: ['uvp', 'positioning', 'headlines'],
    popularity: 88,
    createdAt: '2024-07-15'
  },
  {
    id: 'copy-003',
    title: 'Homepage Hero Section',
    description: 'High-impact headline, subhead, CTA, and proof.',
    content: "Write a conversion-focused hero for [BRAND]. Provide: 5 headline options, matching subheads, 2 CTA variants (primary/secondary), 3 social proof snippets, and a micro-trust line. Tone: [TONE]. Audience: [AUDIENCE].",
    category: 'Copywriting',
    tags: ['homepage', 'hero', 'cta'],
    popularity: 86,
    createdAt: '2024-07-15'
  },
  {
    id: 'copy-004',
    title: 'Landing Page Wire Copy (AIDA)',
    description: 'Draft a page using AIDA + PAS frameworks.',
    content: "Draft landing copy for [OFFER] using AIDA + PAS. Sections: 1) Hook + promise, 2) Problem agitation, 3) Unique solution, 4) Benefits (features→benefits→outcomes), 5) Social proof, 6) Objection handling, 7) FAQ, 8) CTA blocks. Add two headline angles.",
    category: 'Copywriting',
    tags: ['landing-page', 'aida', 'pas'],
    popularity: 92,
    createdAt: '2024-07-16'
  },
  {
    id: 'copy-005',
    title: 'Product Description (FBO)',
    description: 'Translate features → benefits → outcomes.',
    content: "Write product descriptions for [PRODUCT] with FBO laddering. For each key feature: state benefit + tangible outcome + proof. Provide 3 versions: short (50 words), medium (120 words), detailed (250 words).",
    category: 'Copywriting',
    tags: ['ecommerce', 'features', 'benefits'],
    popularity: 84,
    createdAt: '2024-07-16'
  },
  {
    id: 'copy-006',
    title: 'Google Ads RSA Generator',
    description: 'Responsive Search Ads with keyword themes.',
    content: "Create Google RSA for [KEYWORDS] and [LOCATION]. Output: 15 headlines (max 30 chars), 4 descriptions (max 90 chars), 3 path ideas, 2 sitelinks with copy, and 2 callout extensions. Include 3 testing angles.",
    category: 'Copywriting',
    tags: ['google-ads', 'rsa', 'ppc'],
    popularity: 83,
    createdAt: '2024-07-16'
  },
  {
    id: 'copy-007',
    title: 'Facebook/Instagram Ad Variants',
    description: 'Thumb-stopping primary text + headlines.',
    content: "Write 5 ad variants for [OFFER]. Provide: primary text (short/medium/long), 3 headlines, descriptions, 3 hooks, 3 CTAs, and a visual cue (what the creative should show). Audience: [AUDIENCE]. Tone: [TONE].",
    category: 'Copywriting',
    tags: ['facebook-ads', 'instagram-ads', 'hooks'],
    popularity: 85,
    createdAt: '2024-07-17'
  },
  {
    id: 'copy-008',
    title: 'YouTube Skippable Ad Script',
    description: '5–30 sec script with hook and CTA.',
    content: "Write a YouTube skippable ad for [OFFER]. Structure: 0–3s hook, 4–10s problem + promise, 11–20s proof + unique mechanism, 21–30s CTA. Provide 2 alternate hooks and CTAs. Audience: [AUDIENCE].",
    category: 'Copywriting',
    tags: ['youtube-ads', 'script', 'hook'],
    popularity: 82,
    createdAt: '2024-07-17'
  },
  {
    id: 'copy-009',
    title: 'TikTok UGC Ad Script',
    description: 'Native-feel UGC script with beats.',
    content: "Create a TikTok UGC ad for [PRODUCT]. Include: shot list (scenes), on-screen captions, voiceover lines, and CTA. Use problem→demo→benefit→CTA pacing. Add 3 hook options and 2 closing frames.",
    category: 'Copywriting',
    tags: ['tiktok-ads', 'ugc', 'short-form'],
    popularity: 80,
    createdAt: '2024-07-17'
  },
  {
    id: 'copy-010',
    title: 'Email Welcome Sequence',
    description: '3–5 emails for first-time subscribers.',
    content: "Write a welcome sequence for [LIST]. 4 emails: 1) Welcome + promise, 2) Story + value, 3) Social proof + quick win, 4) Soft pitch. Include subject lines (3 each), preview texts, and CTAs.",
    category: 'Copywriting',
    tags: ['email', 'welcome', 'sequence'],
    popularity: 87,
    createdAt: '2024-07-18'
  },
  {
    id: 'copy-011',
    title: 'Cart Abandonment Sequence',
    description: 'Recover revenue with 3-part emails.',
    content: "Create a 3-email cart abandonment flow for [STORE]. Email 1: reminder + benefits. Email 2: objection handling + proof. Email 3: urgency incentive. Include subject lines and timing recommendations.",
    category: 'Copywriting',
    tags: ['email', 'ecommerce', 'recovery'],
    popularity: 86,
    createdAt: '2024-07-18'
  },
  {
    id: 'copy-012',
    title: 'Win-Back Campaign',
    description: 'Re-engage inactive customers gracefully.',
    content: "Write a 3-touch win-back for [BRAND]. Touches: 1) we miss you value email, 2) tailored offer, 3) last-chance reminder. Provide alt subject lines and segment-specific variants.",
    category: 'Copywriting',
    tags: ['winback', 'retention', 'email'],
    popularity: 79,
    createdAt: '2024-07-18'
  },
  {
    id: 'copy-013',
    title: 'Onboarding Checklist Email',
    description: 'Frictionless onboarding for SaaS users.',
    content: "Draft an onboarding email for [SaaS]. Include: setup checklist, first-win milestone, help resources, and soft upsell to pro feature. Add subject lines and preview texts.",
    category: 'Copywriting',
    tags: ['saas', 'onboarding', 'email'],
    popularity: 78,
    createdAt: '2024-07-19'
  },
  {
    id: 'copy-014',
    title: 'Nurture Newsletter Outline',
    description: 'Weekly format for sustainable value.',
    content: "Design a weekly newsletter for [TOPIC]. Output: name ideas, recurring sections, tone guide, CTAs, and 4 sample issues (subject, outline, key lines). Audience: [AUDIENCE].",
    category: 'Copywriting',
    tags: ['newsletter', 'nurture', 'content'],
    popularity: 81,
    createdAt: '2024-07-19'
  },
  {
    id: 'copy-015',
    title: 'Long-Form Sales Page (PAS)',
    description: 'Persuasive page using PAS structure.',
    content: "Write a sales page for [OFFER] using PAS. Include: lead, narrative, mechanism, proof (testimonials/case studies), guarantees, stack/bonus, FAQs, and multiple CTAs. Provide 2 hook angles.",
    category: 'Copywriting',
    tags: ['sales-page', 'pas', 'conversion'],
    popularity: 93,
    createdAt: '2024-07-20'
  },
  {
    id: 'copy-016',
    title: 'VSL Script Outline',
    description: 'Video Sales Letter beats and flow.',
    content: "Create a VSL outline for [OFFER]. Beats: hook, problem, agitation, discovery, mechanism, proof, offer stack, risk reversal, urgency, CTA. Provide voiceover script for hook + CTA.",
    category: 'Copywriting',
    tags: ['vsl', 'script', 'sales'],
    popularity: 90,
    createdAt: '2024-07-20'
  },
  {
    id: 'copy-017',
    title: 'Webinar Registration Page',
    description: 'High-converting webinar opt-in copy.',
    content: "Write webinar reg page for [TITLE]. Include: promise headline, bullet takeaways, host authority bio, schedule/time zones, FAQ, and CTA. Add 3 social proof ideas.",
    category: 'Copywriting',
    tags: ['webinar', 'landing-page', 'conversion'],
    popularity: 82,
    createdAt: '2024-07-20'
  },
  {
    id: 'copy-018',
    title: 'Webinar Reminder Emails',
    description: 'Show-up boosting reminders and angle.',
    content: "Draft 3 reminders: 1) 24h out value teaser, 2) 1h out logistics + incentive, 3) live now urgency. Include SMS versions.",
    category: 'Copywriting',
    tags: ['webinar', 'reminders', 'email'],
    popularity: 77,
    createdAt: '2024-07-21'
  },
  {
    id: 'copy-019',
    title: 'Case Study (PSR)',
    description: 'Problem → Solution → Results narrative.',
    content: "Write a case study for [CLIENT] using PSR. Include context, constraints, solution steps, quant results, quote, and CTA to similar offer. Provide short and long versions.",
    category: 'Copywriting',
    tags: ['case-study', 'social-proof', 'b2b'],
    popularity: 85,
    createdAt: '2024-07-21'
  },
  {
    id: 'copy-020',
    title: 'Testimonial Request Template',
    description: 'Ask for specific, useful testimonials.',
    content: "Draft a testimonial request for [PRODUCT]. Provide email + in-app prompt variants. Ask for: problem before, hesitation, result after, numeric impact, who they’d recommend it to.",
    category: 'Copywriting',
    tags: ['testimonials', 'ugc', 'social-proof'],
    popularity: 79,
    createdAt: '2024-07-21'
  },
  {
    id: 'copy-021',
    title: 'Pricing Page Microcopy',
    description: 'Clarity-focused plan comparisons + FAQs.',
    content: "Write pricing page copy for [SaaS]. Include plan names, value bullets, risk reversal, toggle tips (monthly/annual), and FAQ addressing price objections. Add 2 banner messages.",
    category: 'Copywriting',
    tags: ['pricing', 'saas', 'microcopy'],
    popularity: 84,
    createdAt: '2024-07-22'
  },
  {
    id: 'copy-022',
    title: 'FAQ Page Copy',
    description: 'Reduce objections and support load.',
    content: "Create an FAQ for [OFFER]. Group by themes (pricing, setup, integrations, security, refunds). Provide concise answers with links to docs and 1-liner reassurance.",
    category: 'Copywriting',
    tags: ['faq', 'support', 'conversion'],
    popularity: 78,
    createdAt: '2024-07-22'
  },
  {
    id: 'copy-023',
    title: 'Lead Magnet Landing Page',
    description: 'High opt-in rate copy + CTA.',
    content: "Write opt-in page for lead magnet [TITLE]. Include: headline, bullets (what you’ll learn), credibility, image caption, form microcopy, and spam reassurance. Provide 2 CTA lines.",
    category: 'Copywriting',
    tags: ['lead-magnet', 'landing', 'conversion'],
    popularity: 83,
    createdAt: '2024-07-22'
  },
  {
    id: 'copy-024',
    title: 'SaaS Feature Page',
    description: 'Feature→benefit storytelling with proof.',
    content: "Draft a feature page for [FEATURE]. Include: benefit laddering, visuals captions, proof (metrics/reviews), and CTA blocks tailored to [PERSONA].",
    category: 'Copywriting',
    tags: ['saas', 'features', 'benefits'],
    popularity: 80,
    createdAt: '2024-07-23'
  },
  {
    id: 'copy-025',
    title: 'App Store Listing (ASO)',
    description: 'Title, subtitle, bullets, and promo text.',
    content: "Write App Store copy for [APP]. Provide: title, subtitle, long description with scannable bullets, and 3 promo text variants. Include 3 keyword-focused variations for ASO.",
    category: 'Copywriting',
    tags: ['aso', 'app-store', 'mobile'],
    popularity: 79,
    createdAt: '2024-07-23'
  },
  {
    id: 'copy-026',
    title: 'SEO Meta Titles & Descriptions',
    description: 'Compelling SERP copy that earns clicks.',
    content: "Generate 10 meta title + description pairs for [PAGE] targeting [KEYWORDS]. Follow char limits, include brand, and craft click-worthy angles without clickbait.",
    category: 'Copywriting',
    tags: ['seo', 'meta', 'serp'],
    popularity: 82,
    createdAt: '2024-07-23'
  },
  {
    id: 'copy-027',
    title: 'Blog Post CTA Variations',
    description: 'Contextual CTAs for top posts.',
    content: "Create 6 CTA options for the blog post [TITLE] with goal [GOAL]. Provide inline CTAs, end-of-post CTAs, and 2 sidebar CTAs. Align with reader intent stage.",
    category: 'Copywriting',
    tags: ['blog', 'cta', 'content'],
    popularity: 76,
    createdAt: '2024-07-24'
  },
  {
    id: 'copy-028',
    title: 'Social Carousel Copy',
    description: 'Slides copy with hooks and flow.',
    content: "Write carousel copy for [TOPIC]. Output: cover hook, 6–8 slide lines, final CTA, and caption with hashtags. Platform: [INSTAGRAM/LINKEDIN]. Tone: [TONE].",
    category: 'Copywriting',
    tags: ['carousel', 'social', 'hooks'],
    popularity: 81,
    createdAt: '2024-07-24'
  },
  {
    id: 'copy-029',
    title: 'Hook Library Builder',
    description: 'Create 20 hooks across angles.',
    content: "Generate 20 hooks for [OFFER] across angles: curiosity, contrarian, data-backed, story, value-packed, fear-of-missing-out. Keep under 12 words when possible.",
    category: 'Copywriting',
    tags: ['hooks', 'angles', 'creative'],
    popularity: 88,
    createdAt: '2024-07-24'
  },
  {
    id: 'copy-030',
    title: 'Benefit Laddering Exercise',
    description: 'From feature to emotional payoff.',
    content: "For [PRODUCT], build a feature→benefit→emotional outcome ladder for 6 core features. Add short proof snippets and 1-line punchy claims for ads.",
    category: 'Copywriting',
    tags: ['benefits', 'outcomes', 'positioning'],
    popularity: 83,
    createdAt: '2024-07-25'
  },
  {
    id: 'copy-031',
    title: 'Competitor Rewrite (Differentiated)',
    description: 'Rewrite competitor copy with unique angle.',
    content: "Take [COMPETITOR] page [URL] and rewrite for [BRAND] with clear differentiation, stronger proof, and specific outcomes. Provide headline + subhead options.",
    category: 'Copywriting',
    tags: ['competitor', 'differentiation', 'rewrite'],
    popularity: 78,
    createdAt: '2024-07-25'
  },
  {
    id: 'copy-032',
    title: 'Localization & Transcreation',
    description: 'Adapt copy for locale and culture.',
    content: "Transcreate [COPY] for [LOCALE/LANGUAGE]. Keep intent; adapt idioms, cultural references, and compliance. Provide glossary (terms to keep) and tone adjustments.",
    category: 'Copywriting',
    tags: ['localization', 'transcreation', 'international'],
    popularity: 75,
    createdAt: '2024-07-25'
  },
  {
    id: 'copy-033',
    title: 'B2B Cold Email Sequence',
    description: '3–5 touch sequence for meetings.',
    content: "Write a 4-step cold email sequence targeting [PERSONA] at [COMPANY SIZE/INDUSTRY]. Include subject lines, personalization tokens, value hook, and CTA to 15-min intro call.",
    category: 'Copywriting',
    tags: ['cold-email', 'b2b', 'outbound'],
    popularity: 89,
    createdAt: '2024-07-26'
  },
  {
    id: 'copy-034',
    title: 'LinkedIn InMail Outreach',
    description: 'Concise InMail for high response.',
    content: "Draft 3 InMail variants for [PERSONA]. Keep under 300 characters, lead with relevance, provide value in 1 line, and ask a soft 1-line CTA.",
    category: 'Copywriting',
    tags: ['linkedin', 'inmail', 'outreach'],
    popularity: 76,
    createdAt: '2024-07-26'
  },
  {
    id: 'copy-035',
    title: 'Sales One-Pager',
    description: 'Concise PDF/slide copy outline.',
    content: "Write a sales one-pager for [OFFER]. Sections: headline, problem, solution, proof, features/benefits, differentiators, pricing, CTA. Include notes for visuals.",
    category: 'Copywriting',
    tags: ['sales', 'one-pager', 'b2b'],
    popularity: 80,
    createdAt: '2024-07-26'
  },
  {
    id: 'copy-036',
    title: 'Press Release Template',
    description: 'News-style announcement copy.',
    content: "Draft a press release for [ANNOUNCEMENT]. Include headline, subhead, dateline, first quote, details, secondary quote, company boilerplate, and media contact.",
    category: 'Copywriting',
    tags: ['pr', 'announcement', 'media'],
    popularity: 73,
    createdAt: '2024-07-27'
  },
  {
    id: 'copy-037',
    title: 'Slogan / Tagline Generator',
    description: 'Memorable 3–6 word options.',
    content: "Generate 15 slogan ideas for [BRAND] capturing [POSITIONING]. Provide 3 rationales and stress-tested versions for different channels.",
    category: 'Copywriting',
    tags: ['tagline', 'slogan', 'brand'],
    popularity: 82,
    createdAt: '2024-07-27'
  },
  {
    id: 'copy-038',
    title: 'Error State UX Microcopy',
    description: 'Helpful, human error messaging.',
    content: "Write error messages for [APP] across 6 scenarios (network, auth, billing, permissions, not found, server). Provide short/long variants and next-step guidance.",
    category: 'Copywriting',
    tags: ['ux', 'microcopy', 'product'],
    popularity: 79,
    createdAt: '2024-07-27'
  },
  {
    id: 'copy-039',
    title: 'Empty State UX Microcopy',
    description: 'Onboarding through empty screens.',
    content: "Write empty state copy for [APP] modules. Provide headline, microcopy, and 1–2 suggested actions per module. Tone: reassuring and clear.",
    category: 'Copywriting',
    tags: ['ux', 'empty-state', 'onboarding'],
    popularity: 77,
    createdAt: '2024-07-27'
  },
  {
    id: 'copy-040',
    title: 'In-Product Paywall Copy',
    description: 'Upgrade prompts that convert.',
    content: "Create paywall copy for [FEATURE]. Provide headline, 3 value bullets, comparison to free, guarantee/risk reversal, and 2 CTA variants.",
    category: 'Copywriting',
    tags: ['saas', 'paywall', 'upgrade'],
    popularity: 82,
    createdAt: '2024-07-28'
  },
  {
    id: 'copy-041',
    title: 'Referral Program Copy',
    description: 'Invite, share, reward messaging.',
    content: "Write copy for [PROGRAM]. Assets: landing block, in-product invite, email, and social caption. Emphasize mutual benefit and simplicity.",
    category: 'Copywriting',
    tags: ['referral', 'growth', 'program'],
    popularity: 75,
    createdAt: '2024-07-28'
  },
  {
    id: 'copy-042',
    title: 'Upsell & Cross-sell Emails',
    description: 'Increase AOV with tailored recs.',
    content: "Draft 3 upsell/cross-sell emails post-purchase for [STORE]. Include relevance rationale, proof, and CTA. Provide subject lines and timing strategy.",
    category: 'Copywriting',
    tags: ['upsell', 'cross-sell', 'email'],
    popularity: 78,
    createdAt: '2024-07-28'
  },
  {
    id: 'copy-043',
    title: 'Product Launch Announcements',
    description: 'Multi-channel launch copy set.',
    content: "Create launch copy for [PRODUCT]: website banner, email, LinkedIn post, Twitter thread outline, and in-app modal. Provide 2 angles.",
    category: 'Copywriting',
    tags: ['launch', 'multi-channel', 'go-to-market'],
    popularity: 84,
    createdAt: '2024-07-29'
  },
  {
    id: 'copy-044',
    title: 'Seasonal Campaign Kit',
    description: 'Holiday/seasonal message pack.',
    content: "Write seasonal copy for [SEASON/HOLIDAY]. Assets: email, ad caption, homepage banner, and SMS. Provide 2 theme motifs and compliance notes.",
    category: 'Copywriting',
    tags: ['seasonal', 'campaign', 'holiday'],
    popularity: 74,
    createdAt: '2024-07-29'
  },
  {
    id: 'copy-045',
    title: 'Copy A/B Test Plan',
    description: 'Hypotheses, variants, and metrics.',
    content: "Create an A/B test plan for [PAGE/ASSET]. Define hypothesis, primary metric, 2–3 variants, sample size estimate, and rollout criteria. Include learnings log template.",
    category: 'Copywriting',
    tags: ['ab-test', 'experimentation', 'conversion'],
    popularity: 73,
    createdAt: '2024-07-29'
  },
  {
    id: 'copy-046',
    title: 'Messaging House',
    description: 'Core message, pillars, proof points.',
    content: "Build a messaging house for [BRAND]: core message, 3 pillars, 3 proof points each, and supporting claims. Provide page-specific variations.",
    category: 'Copywriting',
    tags: ['messaging', 'strategy', 'brand'],
    popularity: 86,
    createdAt: '2024-07-30'
  },
  {
    id: 'copy-047',
    title: 'Positioning Statement',
    description: 'For [AUDIENCE], [BRAND] is the [CATEGORY]…',
    content: "Write a positioning statement for [BRAND] using Geoffrey Moore template. Provide 3 alternatives for different segments with rationale.",
    category: 'Copywriting',
    tags: ['positioning', 'strategy', 'brand'],
    popularity: 82,
    createdAt: '2024-07-30'
  },
  {
    id: 'copy-048',
    title: 'Brand Story Narrative',
    description: 'Founder-led origin and mission arc.',
    content: "Write a brand story for [BRAND]: origin, problem, turning point, mission, customer transformation, and call to join. Provide short and long versions.",
    category: 'Copywriting',
    tags: ['storytelling', 'brand', 'about'],
    popularity: 85,
    createdAt: '2024-07-30'
  },
  {
    id: 'copy-049',
    title: 'Policy Copy (Humanized)',
    description: 'Plain-English summaries of terms.',
    content: "Summarize [POLICY] (privacy/terms/refund) in plain English. Provide a friendly TL;DR, key points bullets, and link anchors. Keep legal accuracy.",
    category: 'Copywriting',
    tags: ['policy', 'legal', 'plain-language'],
    popularity: 70,
    createdAt: '2024-07-31'
  },
  {
    id: 'copy-050',
    title: 'Copywriting Mastery Blueprint',
    description: 'Complete system for high-converting copy.',
    content: "Act as a world-class copy chief. Build a complete system for [BRAND]: research plan, messaging house, UVP, hooks library, page templates (hero, pricing, FAQ), email flows (welcome, win-back, abandonment), ad frameworks (FB/IG, Google RSA, YT, TikTok UGC), and a 90-day testing roadmap.",
    category: 'Copywriting',
    tags: ['mastery', 'frameworks', 'systems'],
    popularity: 96,
    createdAt: '2024-07-31'
  }
];

// Auto-extend: add 50 more prompts per category with consistent IDs
const idPad = (n: number) => n.toString().padStart(3, '0');

const prefixByCategory: Record<CategoryType, string> = {
  'ChatGPT': 'gpt',
  'SEO': 'seo',
  'YouTube': 'yt',
  'Midjourney': 'mj',
  'Fiverr/Upwork': 'freelance',
  'Social Media': 'sm',
  'Marketing': 'mkt',
  'Copywriting': 'copy',
  'Email Marketing': 'email'
};

const titleBase: Record<CategoryType, string> = {
  'ChatGPT': 'Advanced ChatGPT Workflow',
  'SEO': 'SEO Content & Strategy Pack',
  'YouTube': 'YouTube Script & Hook Pack',
  'Midjourney': 'Image AI Prompt Design',
  'Fiverr/Upwork': 'Freelance Gig & Proposal Booster',
  'Social Media': 'Social Media Growth Toolkit',
  'Marketing': 'Marketing Conversion Play',
  'Copywriting': 'Copywriting Conversion Template',
  'Email Marketing': 'Email Campaign Builder'
};

const descriptionBase: Record<CategoryType, string> = {
  'ChatGPT': 'Structured prompt with roles, steps, and evaluation.',
  'SEO': 'Templates for briefs, outlines, and SERP copy.',
  'YouTube': 'Hooks, beats, CTAs, and retention tactics.',
  'Midjourney': 'Compositional styles, lenses, and rendering parameters.',
  'Fiverr/Upwork': 'Win rate and AOV boosting copy structures.',
  'Social Media': 'Captions, carousels, and engagement flows.',
  'Marketing': 'Ads, emails, landing, and funnel assets.',
  'Copywriting': 'High-converting headlines, offers, and CTAs.',
  'Email Marketing': 'Subject lines, sequences, and conversion emails.'
};

const contentBase: Record<CategoryType, string> = {
  'ChatGPT': "Act as a senior operator. Goal: [GOAL]. Provide: 1) role setup, 2) assumptions, 3) step-by-step plan, 4) 3 alternatives, 5) risk checks, 6) success criteria.",
  'SEO': "Create an SEO deliverable for [TOPIC]. Include: target keywords, search intent, outline (H1–H3), internal links, meta title/description variants, and schema ideas.",
  'YouTube': "Write a video script for [TOPIC]. Include: 3 hook options, beat-by-beat outline, pattern interrupts, CTA suggestions, and thumbnail/title ideas.",
  'Midjourney': "Design an image prompt for [SUBJECT] in [STYLE]. Include: camera/lens, lighting, composition, palette, aspect, quality/chaos/seeds, and 3 variations.",
  'Fiverr/Upwork': "Draft a winning [PROPOSAL/PROFILE] for [SERVICE]. Include: credibility opener, discovery questions, tailored plan, timeline, deliverables, and CTA.",
  'Social Media': "Create a content pack for [PLATFORM] on [TOPIC]: 5 hooks, carousel outline, caption, hashtags, and comment prompts.",
  'Marketing': "Produce assets for [OFFER]: ad copy (3 angles), landing hero, email (value + pitch), and objection-handling bullets.",
  'Copywriting': "Write conversion copy for [ASSET]: headline options, subheads, benefits (FBO), proof snippets, and 2 CTA variants.",
  'Email Marketing': "Create email campaign for [PRODUCT/SERVICE]: subject line variations, preview text, body structure, CTAs, and A/B test suggestions."
};

const baseTags: Record<CategoryType, string[]> = {
  'ChatGPT': ['productivity', 'reasoning', 'workflows'],
  'SEO': ['seo', 'content', 'serp'],
  'YouTube': ['youtube', 'script', 'hooks'],
  'Midjourney': ['midjourney', 'image', 'style'],
  'Fiverr/Upwork': ['freelance', 'gig', 'proposal'],
  'Social Media': ['social', 'engagement', 'growth'],
  'Marketing': ['marketing', 'ads', 'conversion'],
  'Copywriting': ['copywriting', 'persuasion', 'templates'],
  'Email Marketing': ['email', 'campaigns', 'automation']
};

function genMore(category: CategoryType, count: number): Prompt[] {
  const prefix = prefixByCategory[category];
  const currentMax = Math.max(
    ...PROMPTS
      .filter(p => p.id.startsWith(prefix + '-'))
      .map(p => parseInt(p.id.split('-')[1], 10))
      .filter(n => !Number.isNaN(n)),
    0
  );
  const items: Prompt[] = [];
  for (let i = 1; i <= count; i++) {
    const num = currentMax + i;
    items.push({
      id: `${prefix}-${idPad(num)}`,
      title: `${titleBase[category]} #${num}`,
      description: descriptionBase[category],
      content: contentBase[category],
      category,
      tags: baseTags[category],
      popularity: 72 + ((num % 9) * 2),
      createdAt: '2024-08-01'
    });
  }
  return items;
}

PROMPTS.push(
  ...genMore('ChatGPT', 50),
  ...genMore('SEO', 50),
  ...genMore('YouTube', 50),
  ...genMore('Midjourney', 50),
  ...genMore('Fiverr/Upwork', 50),
  ...genMore('Social Media', 50),
  ...genMore('Marketing', 50),
  ...genMore('Copywriting', 50)
);

// Append externally imported copywriting prompts (cw-101..cw-194)
PROMPTS.push(
  ...COPYWRITING_PROMPTS
);

// Imported from Open Source Prompt Library (MIT License - vibecoder-dev)
PROMPTS.push(
  {
    id: 'ext-001',
    title: 'Prompt Engineering Basics',
    description: 'Learn how to structure simple AI prompts for clarity and accuracy.',
    content: 'Act as an AI tutor. Explain how prompt structure affects AI responses. Show me examples of a vague prompt vs. a precise prompt, and explain why the second works better.',
    category: 'ChatGPT',
    tags: ['prompting', 'basics', 'clarity'],
    popularity: 90,
    createdAt: '2025-08-18',
    useCase: 'Learning effective prompt engineering techniques'
  },
  {
    id: 'ext-002',
    title: 'Code Explainer',
    description: 'Use AI to explain code step by step as if teaching a beginner.',
    content: 'Act as a coding mentor. Explain this code snippet line by line, describe its purpose, and provide a simpler version for beginners.',
    category: 'ChatGPT',
    tags: ['code-explanation', 'learning', 'teaching'],
    popularity: 88,
    createdAt: '2025-08-18',
    useCase: 'Understanding complex code snippets'
  },
  {
    id: 'ext-003',
    title: 'AI Debugging Assistant',
    description: 'Get AI-powered help to identify and fix bugs.',
    content: 'I will share broken code. Act as a debugging assistant: 1) Identify the error 2) Explain why it happens 3) Suggest a fix 4) Show corrected code.',
    category: 'ChatGPT',
    tags: ['debugging', 'error-fixing', 'development'],
    popularity: 92,
    createdAt: '2025-08-18',
    useCase: 'Finding and fixing code bugs'
  },
  {
    id: 'ext-004',
    title: 'Framework Learner',
    description: 'Use AI to quickly understand a new framework or library.',
    content: 'Act as a framework guide. Teach me the core concepts of [framework/library]. Provide: key features, basic setup, and one practical code example.',
    category: 'ChatGPT',
    tags: ['frameworks', 'libraries', 'teaching'],
    popularity: 85,
    createdAt: '2025-08-18',
    useCase: 'Learning new frameworks quickly'
  },
  {
    id: 'ext-005',
    title: 'Code Style Coach',
    description: 'Improve your code readability and consistency with AI suggestions.',
    content: 'Review my code as a style coach. Suggest improvements based on clean code principles: formatting, variable naming, modularity, and consistency.',
    category: 'ChatGPT',
    tags: ['clean-code', 'style', 'best-practices'],
    popularity: 87,
    createdAt: '2025-08-18',
    useCase: 'Writing cleaner, more maintainable code'
  },
  {
    id: 'ext-006',
    title: 'AI Testing Partner',
    description: 'Generate unit tests and testing strategies with AI.',
    content: 'Act as a QA engineer. Generate unit tests for my function. Provide input/output test cases, edge cases, and expected outcomes.',
    category: 'ChatGPT',
    tags: ['unit-testing', 'QA', 'automation'],
    popularity: 89,
    createdAt: '2025-08-18',
    useCase: 'Creating comprehensive test coverage'
  },
  {
    id: 'ext-007',
    title: 'Documentation Generator',
    description: 'Use AI to generate documentation from code.',
    content: 'Act as a documentation writer. Generate clear, structured documentation from my code, including function purpose, parameters, return values, and usage examples.',
    category: 'ChatGPT',
    tags: ['docs', 'auto-generation', 'API'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Creating professional documentation'
  },
  {
    id: 'ext-008',
    title: 'Code Refactorer',
    description: 'Refactor messy code into clean, efficient, and maintainable code.',
    content: 'Refactor this code. Optimize for readability, efficiency, and modularity. Explain each change briefly and provide the improved version.',
    category: 'ChatGPT',
    tags: ['refactoring', 'optimization', 'clean-code'],
    popularity: 91,
    createdAt: '2025-08-18',
    useCase: 'Improving code quality'
  },
  {
    id: 'ext-009',
    title: 'Data Handler',
    description: 'Get AI to format and process data (CSV, JSON, APIs).',
    content: 'Act as a data handler. Convert this dataset into JSON and CSV formats. Validate fields, handle missing data, and output clean results.',
    category: 'ChatGPT',
    tags: ['data', 'json', 'csv', 'apis'],
    popularity: 83,
    createdAt: '2025-08-18',
    useCase: 'Data transformation and cleaning'
  },
  {
    id: 'ext-010',
    title: 'AI Brainstorm Partner',
    description: 'Use AI to generate and refine project ideas.',
    content: 'Act as a brainstorming partner. Generate 5 creative project ideas in [domain]. For each idea, describe the concept, potential users, and implementation challenges.',
    category: 'ChatGPT',
    tags: ['brainstorming', 'innovation', 'ideas'],
    popularity: 86,
    createdAt: '2025-08-18',
    useCase: 'Generating creative project ideas'
  },
  {
    id: 'ext-011',
    title: 'Daily Task Planner',
    description: 'Generate a prioritized daily plan from your to-do list.',
    content: 'Act as a productivity assistant. From my to-do list, generate a prioritized daily plan with estimated times, breaks, and must-complete tasks.',
    category: 'Marketing',
    tags: ['planning', 'task-management', 'workflow'],
    popularity: 82,
    createdAt: '2025-08-18',
    useCase: 'Organizing daily productivity'
  },
  {
    id: 'ext-012',
    title: 'Meeting Summarizer',
    description: 'Turn meeting notes into clear action points.',
    content: 'Act as a meeting assistant. Summarize these meeting notes into: 1) Key decisions 2) Action items 3) Deadlines.',
    category: 'Marketing',
    tags: ['summarization', 'meetings', 'notes'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Converting meetings into actionable items'
  },
  {
    id: 'ext-013',
    title: 'Email Polisher',
    description: 'Rewrite emails with clarity, professionalism, and tone adjustment.',
    content: 'Rewrite this draft email to be more clear, concise, and professional while maintaining a polite tone.',
    category: 'Email Marketing',
    tags: ['emails', 'clarity', 'tone'],
    popularity: 88,
    createdAt: '2025-08-18',
    useCase: 'Writing professional emails'
  },
  {
    id: 'ext-014',
    title: 'Time Blocker',
    description: 'Organize your week into focused time blocks.',
    content: 'Act as a time management coach. Based on my weekly tasks, create a time-blocked calendar that balances deep work, meetings, and breaks.',
    category: 'Marketing',
    tags: ['time-management', 'calendar', 'scheduling'],
    popularity: 81,
    createdAt: '2025-08-18',
    useCase: 'Optimizing weekly schedule'
  },
  {
    id: 'ext-015',
    title: 'Research Assistant',
    description: 'Summarize research papers, articles, or documents into digestible insights.',
    content: 'Summarize this document into: key points, challenges, and opportunities. Output in bullet points.',
    category: 'ChatGPT',
    tags: ['summaries', 'reading', 'papers'],
    popularity: 85,
    createdAt: '2025-08-18',
    useCase: 'Quick document comprehension'
  },
  {
    id: 'ext-016',
    title: 'Decision Matrix Maker',
    description: 'Help make structured decisions with pros, cons, and weighted factors.',
    content: 'Act as a decision assistant. Build a decision matrix comparing my options with pros, cons, and a final recommendation.',
    category: 'Marketing',
    tags: ['decision-matrix', 'choices', 'analysis'],
    popularity: 83,
    createdAt: '2025-08-18',
    useCase: 'Making data-driven decisions'
  },
  {
    id: 'ext-017',
    title: 'Focus Mode Partner',
    description: 'Generate focus sprints and accountability reminders.',
    content: 'Guide me through a 25-minute Pomodoro focus sprint. Provide start encouragement, a midway check-in, and a wrap-up summary.',
    category: 'Marketing',
    tags: ['focus', 'pomodoro', 'accountability'],
    popularity: 80,
    createdAt: '2025-08-18',
    useCase: 'Maintaining focused work sessions'
  },
  {
    id: 'ext-018',
    title: 'Learning Path Builder',
    description: 'Create a structured roadmap to learn a new skill.',
    content: 'Act as a mentor. Build me a 4-week structured learning path for mastering [skill]. Include resources, exercises, and checkpoints.',
    category: 'ChatGPT',
    tags: ['roadmap', 'skills', 'study-plan'],
    popularity: 87,
    createdAt: '2025-08-18',
    useCase: 'Planning skill acquisition'
  },
  {
    id: 'ext-019',
    title: 'Brain Dump Organizer',
    description: 'Convert messy notes into structured knowledge.',
    content: 'Organize my messy notes into categories, bullet points, and action items while keeping important details intact.',
    category: 'Marketing',
    tags: ['notes', 'knowledge-management', 'organization'],
    popularity: 79,
    createdAt: '2025-08-18',
    useCase: 'Organizing scattered thoughts'
  },
  {
    id: 'ext-020',
    title: 'Project Scope Definer',
    description: 'Turn vague project ideas into clear goals and requirements.',
    content: 'Act as a project manager. Convert this project idea into: objective, requirements, risks, and success criteria.',
    category: 'Marketing',
    tags: ['scope', 'planning', 'requirements'],
    popularity: 86,
    createdAt: '2025-08-18',
    useCase: 'Defining project boundaries'
  },
  {
    id: 'ext-021',
    title: 'API Contract Designer',
    description: 'Use AI to design and validate API request/response structures.',
    content: 'Design an API contract for [use-case]. Provide request/response structure, status codes, and error handling.',
    category: 'ChatGPT',
    tags: ['API', 'contracts', 'backend'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Designing robust API interfaces'
  },
  {
    id: 'ext-022',
    title: 'Code Performance Optimizer',
    description: 'Get AI suggestions for improving performance.',
    content: 'Analyze this code for performance bottlenecks. Suggest optimizations and provide improved code with benchmarks.',
    category: 'ChatGPT',
    tags: ['performance', 'optimization', 'efficiency'],
    popularity: 90,
    createdAt: '2025-08-18',
    useCase: 'Optimizing code speed'
  },
  {
    id: 'ext-023',
    title: 'System Design Helper',
    description: 'Create high-level system design blueprints.',
    content: 'Act as a system architect. Design a scalable system for [use case]. Provide architecture diagram, components, and tradeoffs.',
    category: 'ChatGPT',
    tags: ['system-design', 'scalability', 'blueprints'],
    popularity: 89,
    createdAt: '2025-08-18',
    useCase: 'Planning system architecture'
  },
  {
    id: 'ext-024',
    title: 'Regex Master',
    description: 'Generate and explain complex regex patterns.',
    content: 'Create a regex to match [pattern]. Explain step by step how it works and provide variations for edge cases.',
    category: 'ChatGPT',
    tags: ['regex', 'patterns', 'text-processing'],
    popularity: 82,
    createdAt: '2025-08-18',
    useCase: 'Creating regex patterns'
  },
  {
    id: 'ext-025',
    title: 'Security Auditor',
    description: 'Check code for security vulnerabilities.',
    content: 'Act as a security auditor. Review this code for vulnerabilities (XSS, SQL injection, unsafe inputs). Suggest fixes.',
    category: 'ChatGPT',
    tags: ['vulnerabilities', 'security', 'audit'],
    popularity: 93,
    createdAt: '2025-08-18',
    useCase: 'Identifying security issues'
  },
  {
    id: 'ext-026',
    title: 'Multi-language Converter',
    description: 'Translate code between programming languages.',
    content: 'Convert this [language] code into [target language]. Ensure it keeps functionality, efficiency, and idiomatic usage.',
    category: 'ChatGPT',
    tags: ['translation', 'languages', 'conversion'],
    popularity: 85,
    createdAt: '2025-08-18',
    useCase: 'Converting between languages'
  },
  {
    id: 'ext-027',
    title: 'Algorithm Coach',
    description: 'Explain and implement algorithms step by step.',
    content: 'Act as an algorithms tutor. Explain [algorithm] in simple terms, show pseudocode, and provide optimized implementation.',
    category: 'ChatGPT',
    tags: ['algorithms', 'education', 'coding'],
    popularity: 88,
    createdAt: '2025-08-18',
    useCase: 'Learning algorithms'
  },
  {
    id: 'ext-028',
    title: 'Database Query Optimizer',
    description: 'Improve SQL queries for performance and readability.',
    content: 'Optimize this SQL query. Provide an explanation of indexing, joins, and restructuring for better performance.',
    category: 'ChatGPT',
    tags: ['SQL', 'optimization', 'queries'],
    popularity: 86,
    createdAt: '2025-08-18',
    useCase: 'Optimizing database queries'
  },
  {
    id: 'ext-029',
    title: 'Test Coverage Improver',
    description: 'Analyze and improve code test coverage.',
    content: 'Review this test suite. Identify missing test cases, add edge cases, and provide updated unit tests.',
    category: 'ChatGPT',
    tags: ['coverage', 'unit-tests', 'automation'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Improving test coverage'
  },
  {
    id: 'ext-030',
    title: 'DevOps Assistant',
    description: 'Generate CI/CD pipelines and automation scripts.',
    content: 'Act as a DevOps engineer. Create a CI/CD pipeline for [project]. Include build, test, deployment, and rollback strategies.',
    category: 'ChatGPT',
    tags: ['CI/CD', 'automation', 'pipelines'],
    popularity: 87,
    createdAt: '2025-08-18',
    useCase: 'Setting up CI/CD pipelines'
  },
  {
    id: 'ext-031',
    title: 'Machine Learning Primer',
    description: 'Use AI to teach you the basics of ML concepts and workflows.',
    content: 'Act as an ML instructor. Explain core ML concepts (supervised/unsupervised, training, validation) and provide a simple example workflow with code snippets.',
    category: 'ChatGPT',
    tags: ['ml', 'basics', 'workflow'],
    popularity: 86,
    createdAt: '2025-08-18',
    useCase: 'Learning ML fundamentals'
  },
  {
    id: 'ext-032',
    title: 'NLP Task Builder',
    description: 'Design simple natural language processing tasks and pipelines.',
    content: 'Help me build an NLP pipeline for [task]. Describe preprocessing, model choice, evaluation, and sample code to get started.',
    category: 'ChatGPT',
    tags: ['nlp', 'text', 'pipeline'],
    popularity: 83,
    createdAt: '2025-08-18',
    useCase: 'Building NLP solutions'
  },
  {
    id: 'ext-033',
    title: 'Generative API Explorer',
    description: 'Learn how to use generative AI APIs effectively and safely.',
    content: 'Explain how to integrate with a generative AI API (like OpenAI). Include authentication, request examples, rate limits handling, and safety considerations.',
    category: 'ChatGPT',
    tags: ['api', 'integration', 'safety'],
    popularity: 85,
    createdAt: '2025-08-18',
    useCase: 'Integrating AI APIs'
  },
  {
    id: 'ext-034',
    title: 'Data Visualization Assistant',
    description: 'Create clear, informative visualizations from data.',
    content: 'Act as a data viz expert. Given this dataset, suggest the best chart types, create sample code for charts, and explain what each visualization reveals.',
    category: 'ChatGPT',
    tags: ['visualization', 'charts', 'insights'],
    popularity: 82,
    createdAt: '2025-08-18',
    useCase: 'Creating data visualizations'
  },
  {
    id: 'ext-035',
    title: 'Big Data Overview',
    description: 'Get AI to explain big data concepts and tools for processing at scale.',
    content: 'Explain big data tooling (Spark, Hadoop, data lakes). Provide scenarios where each is appropriate and a small example pipeline.',
    category: 'ChatGPT',
    tags: ['spark', 'hadoop', 'data-lakes'],
    popularity: 80,
    createdAt: '2025-08-18',
    useCase: 'Understanding big data tools'
  },
  {
    id: 'ext-036',
    title: 'Web3 Starter',
    description: 'Introduce smart contracts and blockchain basics with practical examples.',
    content: 'Act as a blockchain instructor. Explain smart contracts, provide a simple Solidity smart contract example, and outline deployment steps.',
    category: 'ChatGPT',
    tags: ['blockchain', 'smart-contracts', 'solidity'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Learning blockchain development'
  },
  {
    id: 'ext-037',
    title: 'Edge & Serverless Guide',
    description: 'Learn how to deploy lightweight code at the edge and in serverless environments.',
    content: 'Explain the differences between edge functions and serverless functions. Provide a sample deployment for Cloudflare Workers or AWS Lambda and use-cases.',
    category: 'ChatGPT',
    tags: ['serverless', 'edge', 'deployment'],
    popularity: 81,
    createdAt: '2025-08-18',
    useCase: 'Deploying serverless functions'
  },
  {
    id: 'ext-038',
    title: 'Low-Code Integration',
    description: 'Combine AI with low-code/no-code tools to automate workflows.',
    content: 'Suggest ways to integrate AI in a low-code platform. Provide an example automation flow and components needed.',
    category: 'ChatGPT',
    tags: ['low-code', 'nocode', 'automation'],
    popularity: 79,
    createdAt: '2025-08-18',
    useCase: 'Automating with low-code tools'
  },
  {
    id: 'ext-039',
    title: 'Ethics & Responsible AI',
    description: 'Understand ethical considerations and mitigation strategies for AI systems.',
    content: 'Act as an AI ethicist. Identify potential ethical risks for my AI project and propose mitigation strategies and testing checks.',
    category: 'ChatGPT',
    tags: ['ethics', 'bias', 'responsible-ai'],
    popularity: 88,
    createdAt: '2025-08-18',
    useCase: 'Ensuring ethical AI use'
  },
  {
    id: 'ext-040',
    title: 'Model Evaluation Checklist',
    description: 'Use AI to create evaluation metrics and testing protocols for ML models.',
    content: 'Create a model evaluation checklist for [use-case]. Include metrics to track, test datasets, and error analysis steps.',
    category: 'ChatGPT',
    tags: ['evaluation', 'metrics', 'testing'],
    popularity: 83,
    createdAt: '2025-08-18',
    useCase: 'Evaluating ML models'
  },
  {
    id: 'ext-041',
    title: 'Portfolio Builder',
    description: 'Get AI help to craft project descriptions and portfolio content.',
    content: 'Help me write polished project descriptions for my portfolio. For each project: give context, technical stack, my role, challenges, and outcomes.',
    category: 'Fiverr/Upwork',
    tags: ['portfolio', 'resume', 'presentation'],
    popularity: 87,
    createdAt: '2025-08-18',
    useCase: 'Building professional portfolio'
  },
  {
    id: 'ext-042',
    title: 'Open Source Contributor Assistant',
    description: 'Use AI to find issues you can fix and craft PRs or issues.',
    content: 'Help me find beginner-friendly open-source tasks and draft a clear issue or PR description. Include steps to reproduce and suggested fixes.',
    category: 'ChatGPT',
    tags: ['oss', 'contributions', 'pull-requests'],
    popularity: 82,
    createdAt: '2025-08-18',
    useCase: 'Contributing to open source'
  },
  {
    id: 'ext-043',
    title: 'Tech Talk Prep',
    description: 'Use AI to prepare a talk, slides, and speaker notes.',
    content: 'Act as a public speaking coach. Create an outline, slide titles, and speaker notes for a 20-minute talk about [topic].',
    category: 'Marketing',
    tags: ['public-speaking', 'slides', 'presentation'],
    popularity: 84,
    createdAt: '2025-08-18',
    useCase: 'Preparing presentations'
  },
  {
    id: 'ext-044',
    title: 'Blog Post Writer',
    description: 'Turn technical work into a readable blog post.',
    content: 'Write a 800-word technical blog post about [project/topic]. Include an intro, technical deep-dive, code example, and conclusion with next steps.',
    category: 'Copywriting',
    tags: ['blog', 'content', 'technical-writing'],
    popularity: 89,
    createdAt: '2025-08-18',
    useCase: 'Creating technical content'
  },
  {
    id: 'ext-045',
    title: 'Lesson Plan Creator',
    description: 'Use AI to create teaching materials and exercises.',
    content: 'Create a 60-minute lesson plan to teach [topic] with objectives, activities, and homework. Provide sample quiz questions.',
    category: 'ChatGPT',
    tags: ['teaching', 'lesson-plan', 'exercises'],
    popularity: 81,
    createdAt: '2025-08-18',
    useCase: 'Creating educational content'
  },
  {
    id: 'ext-046',
    title: 'Freelance Pitch Generator',
    description: 'Craft winning freelance proposals and client pitches.',
    content: 'Act as a business development advisor. Draft a concise freelance proposal for [service] including scope, timeline, pricing, and differentiators.',
    category: 'Fiverr/Upwork',
    tags: ['proposals', 'clients', 'sales'],
    popularity: 91,
    createdAt: '2025-08-18',
    useCase: 'Winning freelance projects'
  },
  {
    id: 'ext-047',
    title: 'Consulting Brief Creator',
    description: 'Use AI to create client-ready consulting briefs and roadmaps.',
    content: 'Create a consulting brief for [client problem]. Include objectives, recommended solution, phases, and estimated timeline.',
    category: 'Fiverr/Upwork',
    tags: ['brief', 'roadmap', 'strategy'],
    popularity: 86,
    createdAt: '2025-08-18',
    useCase: 'Creating consulting proposals'
  },
  {
    id: 'ext-048',
    title: 'Product-Market Fit Analyzer',
    description: 'Leverage AI to evaluate product ideas and market fit.',
    content: 'Analyze this product idea for product-market fit. List target customers, key assumptions, risks, and initial experiments to validate.',
    category: 'Marketing',
    tags: ['pmf', 'validation', 'experiments'],
    popularity: 85,
    createdAt: '2025-08-18',
    useCase: 'Validating product ideas'
  },
  {
    id: 'ext-049',
    title: 'MVP Launch Planner',
    description: 'Plan a minimal viable product launch with AI assistance.',
    content: 'Act as a startup advisor. Create an MVP launch plan for [product] including core features, launch checklist, marketing steps, and KPIs.',
    category: 'Marketing',
    tags: ['mvp', 'launch', 'marketing'],
    popularity: 88,
    createdAt: '2025-08-18',
    useCase: 'Launching MVP products'
  },
  {
    id: 'ext-050',
    title: 'Prompt Library Architect',
    description: 'Design and curate a sustainable prompt library and contribution workflow.',
    content: 'Help me design an open prompt library. Provide folder structure, contribution guidelines, metadata schema, tagging strategy, and moderation rules.',
    category: 'ChatGPT',
    tags: ['prompt-library', 'open-source', 'governance'],
    popularity: 83,
    createdAt: '2025-08-18',
    useCase: 'Building prompt libraries'
  },

// Imported from alphatrait/100000-ai-prompts-by-contentifyai (MIT License - Copywriting Category - 194 Prompts)
{id:'cw-001',title:'Summarizing Customer Feedback',description:'Furnish a concise overview of customer feedback utilizing provided data',content:'Can you please furnish a concise overview of the customer feedback pertaining to the {product/service}, utilizing the provided data: {Feedback Data}?',category:'Copywriting',tags:['customer-feedback','analysis','summary'],popularity:78,createdAt:'2025-08-18'},
{id:'cw-002',title:'Customer Feedback Main Points',description:'Identify main focal points from customer feedback data',content:'What are the main focal points derived from the customer feedback given the provided data: {Feedback Data} for {product/service}?',category:'Copywriting',tags:['feedback','insights','analysis'],popularity:76,createdAt:'2025-08-18'},
{id:'cw-003',title:'Concise Feedback Summary',description:'Create concise summary from customer feedback',content:'Can you summarize the customer feedback for {product/service} using the provided data, and create a concise summary for me? The data that should be considered is: {Feedback Data}.',category:'Copywriting',tags:['summary','feedback','data'],popularity:77,createdAt:'2025-08-18'},
{id:'cw-004',title:'Feedback Conclusions',description:'Draw conclusions from customer feedback data',content:'What conclusions can be drawn from the customer feedback regarding {product/service} based on the provided data? Data: {Feedback Data}.',category:'Copywriting',tags:['conclusions','analysis','feedback'],popularity:75,createdAt:'2025-08-18'},
{id:'cw-005',title:'Succinct Feedback Overview',description:'Provide succinct overview of customer feedback',content:'Could you provide a succinct overview of the customer feedback regarding {product/service}, as outlined in the data that I have shared with you? The data provided is as follows: {Feedback Data}.',category:'Copywriting',tags:['overview','feedback','summary'],popularity:74,createdAt:'2025-08-18'},
{id:'cw-006',title:'Thank You Email After Purchase',description:'Compose gratitude email urging feedback and cross-selling',content:'{Compose} a gratitude-filled email to a customer who has recently completed a purchase, urging them to share their feedback and endorsing associated merchandise.',category:'Email Marketing',tags:['email','thank-you','cross-sell'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-007',title:'Video Brief for Brand',description:'Create concise video document for brand advertising',content:'Are you able to compose a concise document outlining the {video style/type} that will be utilized to advertise our {product/service/brand} to a specific {target audience}?',category:'Copywriting',tags:['video','brief','advertising'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-008',title:'B2B Proposal Creation',description:'Create B2B proposal enhancing business process',content:'Are you able to create a B2B proposal for {Company Name} that elucidates the ways in which our {Product/Service} can enhance their {specific business process} and elevate their {specific metric}?',category:'Fiverr/Upwork',tags:['B2B','proposal','business'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-009',title:'Video Brief for Mission',description:'Create video brief explaining organization purpose',content:'Are you able to create a concise document outlining the {duration of the video} that will serve the purpose of elucidating our {organization\'s purpose/principles} to prospective customers?',category:'Copywriting',tags:['video','brief','mission'],popularity:77,createdAt:'2025-08-18'},
{id:'cw-010',title:'Sales Copy for Cold Call',description:'Create sales copy for cold calling with key elements',content:'Are you able to create a sales copy tailored for {product/service} that can be used during a cold call targeting {Specific audience}? This copy should encompass the key elements of introduction, demonstration, objection handling, and closing.',category:'Copywriting',tags:['cold-calling','sales','script'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-011',title:'Cold Call Script',description:'Create written version for triumphant cold call',content:'Are you able to create a written version for a sales cold call that skillfully presents the {product/service} to {Prospect Name} and results in a triumphant conclusion?',category:'Copywriting',tags:['cold-call','script','sales'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-012',title:'Meeting Notes Overview',description:'Provide concise overview of meeting goals and tasks',content:'Are you able to provide a concise overview of the goals that were addressed during the meeting, as well as the specific tasks that were agreed upon? Please refer to the meeting notes: {notes}',category:'Marketing',tags:['meeting','notes','summary'],popularity:80,createdAt:'2025-08-18'},
{id:'cw-013',title:'Elaborate Sales Copy - Why',description:'Compose sales copy explaining why product is crucial',content:'Are you capable of composing an elaborate sales copy that persuades me as to why {product/service} is the crucial element {target audience} requires in order to elevate their {aspect of life/business} to a higher level?',category:'Copywriting',tags:['sales-copy','persuasion','benefits'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-014',title:'Step-by-Step Sales Copy',description:'Explain step-by-step usage and goal attainment',content:'Are you capable of composing an elaborate sales copy that provides a comprehensive explanation of the step-by-step procedure for utilizing {product/service} and elucidates how it can assist {target audience} in attaining their objectives?',category:'Copywriting',tags:['sales-copy','tutorial','guide'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-015',title:'Distinctive Features Copy',description:'Portray distinctive attributes distinguishing from competitors',content:'Are you capable of composing an elaborate sales copy that vividly portrays the distinctive attributes and advantages of {product/service}, which distinguishes it from competitors and renders it an essential acquisition for {target audience}?',category:'Copywriting',tags:['sales-copy','competitive-advantage','features'],popularity:89,createdAt:'2025-08-18'},
{id:'cw-016',title:'Unique Benefits Sales Copy',description:'Emphasize distinctive attributes appealing to customers',content:'Are you capable of crafting a sales copy that emphasizes the distinctive attributes and advantages of {product/service} in a way that appeals to potential customers?',category:'Copywriting',tags:['sales-copy','benefits','unique-selling'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-017',title:'Benefit-Driven Copy',description:'Highlight advantages as ultimate solution',content:'Are you capable of creating a sales copy that highlights the advantages and reasons why {product/service} is the ultimate answer to {customer\'s problem or need}?',category:'Copywriting',tags:['sales-copy','solution','benefits'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-018',title:'Product Bundling Strategy',description:'Bundle products meeting target audience requirements',content:'Bundle {product 1}, {product 2}, and {product 3} together in order to meet the specific requirements and address the issues of the {target audience}. Utilize customer preferences and market trends as a guiding force for your bundling strategy.',category:'Marketing',tags:['bundling','product-strategy','marketing'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-019',title:'Abandoned Cart Follow-up',description:'Create follow-up email template with discount',content:'Can you furnish me with a template for a follow-up email intended for an abandoned cart recovery message that has not received any response within {number of hours/days}? My objective is to jog customers\' memory regarding the items they left in their cart and provide them with a discount code worth {dollar amount} to motivate them to finalize their purchase.',category:'Email Marketing',tags:['abandoned-cart','email','discount'],popularity:90,createdAt:'2025-08-18'},
{id:'cw-020',title:'Title Tags with Adoration',description:'Produce alternative title tags with target audience focus',content:'Can you produce {number} alternative title tags that encompass the {specific adjective} {target audience}\'s adoration for my website pertaining to {topic/industry}?',category:'SEO',tags:['title-tags','SEO','optimization'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-021',title:'Guest Post Techniques',description:'Propose techniques for captivating guest post',content:'Can you propose some {adjective} techniques to {verb} a guest post regarding {topic}, all while captivating the reader\'s attention and piquing their interest in {related topic or issue}?',category:'Copywriting',tags:['guest-post','writing','engagement'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-022',title:'Keyword Definition',description:'Provide concise definition of keyword',content:'Can you provide a concise definition of {keyword}?',category:'SEO',tags:['keyword','definition','SEO'],popularity:72,createdAt:'2025-08-18'},
{id:'cw-023',title:'Meta Description Examples',description:'Provide compelling meta description examples',content:'Can you provide me with {number} instances that pertain to my {topic} and adhere to the latest {SEO trends/guidelines}? I am seeking guidance on crafting compelling meta descriptions for my website. Additionally, I would appreciate insights on effectively incorporating {unique aspect of content} into the meta description to achieve optimal impact.',category:'SEO',tags:['meta-description','SEO','examples'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-024',title:'Rephrase Winning Creative',description:'Rephrase creative for target group',content:'Can you rephrase the {creative/ad copy that resulted in a victory} to make it more {succinct/powerful} for a {particular target group/promotional effort}',category:'Copywriting',tags:['ad-copy','rewrite','A/B-testing'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-025',title:'Guest Post Research Materials',description:'Suggest descriptive materials for guest post research',content:'Can you suggest some {descriptive} and {vivid} materials or {category of reference} that I can utilize to {prepare} for investigation when composing a guest post regarding {subject}, encompassing {particular data or statistics} and {associated subject or concern}, with the intention of {achieve the desired result} and {produce} an exceptional guest post?',category:'Copywriting',tags:['guest-post','research','materials'],popularity:78,createdAt:'2025-08-18'},
{id:'cw-026',title:'Blog on Book Insights',description:'Delineate fundamental insights from book/article',content:'Compose a blog entry delineating the fundamental insights extracted from {insert book/article} and elucidate their practical application within {insert industry/field}.',category:'Copywriting',tags:['blog','insights','industry'],popularity:80,createdAt:'2025-08-18'},
{id:'cw-027',title:'Misconceptions Blog',description:'Discuss prevalent misunderstandings and solutions',content:'Compose a blog entry discussing prevalent misunderstandings regarding {insert topic} and elucidate the methods through which they can be rectified.',category:'Copywriting',tags:['blog','misconceptions','solutions'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-028',title:'Event Impact Blog',description:'Discuss influence of event on industry',content:'Compose a blog entry discussing the influence that {particular event/news} has had on {particular industry or community}.',category:'Copywriting',tags:['blog','event','impact'],popularity:77,createdAt:'2025-08-18'},
{id:'cw-029',title:'Activity Benefits Blog',description:'Comprehensive analysis of activity benefits',content:'Compose a blog post providing a comprehensive analysis of the benefits associated with {a particular activity or hobby}, while also offering guidance on how to initiate it with valuable suggestions and the necessary gear.',category:'Copywriting',tags:['blog','benefits','guide'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-030',title:'Captivating Launch Email',description:'Compose captivating email to introduce product',content:'Compose a captivating email to introduce {product/service} and captivate the interest of prospective customers.',category:'Email Marketing',tags:['email','product-launch','introduction'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-031',title:'Cold Email Draft',description:'Compose chilly email addressing pain points with urgency',content:'Compose a chilly email draft for {product/service} that directly speaks to {specific persona pain points} and showcases my {solution} as the sole feasible option available, instilling a feeling of urgency and providing a persuasive call to action.',category:'Email Marketing',tags:['cold-email','urgency','pain-points'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-032',title:'Industry Blog Entry',description:'Highlight advantages within specific industry',content:'Compose a compelling blog entry highlighting the advantages of employing {product/service} within the {specific industry/target market}.',category:'Copywriting',tags:['blog','industry','benefits'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-033',title:'Company Selection Email',description:'Explain reasons for selecting company',content:'Compose a compelling electronic mail to a prospective client elucidating the reasons behind selecting {company name} as the optimal choice for fulfilling their requirements pertaining to {product/service}.',category:'Email Marketing',tags:['email','B2B','company-selection'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-034',title:'Step-by-Step Blog Post',description:'Elucidate step-by-step procedure with suggestions',content:'Compose a comprehensive blog post elucidating the step-by-step procedure of {specific task or project} while incorporating valuable suggestions on optimizing its execution.',category:'Copywriting',tags:['blog','tutorial','step-by-step'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-035',title:'Launch Email Components',description:'Compose launch email with essential components',content:'Compose a launch email encompassing all the essential components to guarantee triumph in generating sales for {product/service}.',category:'Email Marketing',tags:['email','product-launch','sales'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-036',title:'Job Offer Letter',description:'Compose offer letter with salary and benefits',content:'Compose a letter of offer for a {position title} position, offering a salary of {salary amount} and a commencement date of {start date}. The designated location for this role is {location}. The letter should encompass details regarding the {training and development opportunities}, {work schedule}, and {additional benefits and perks}.',category:'Copywriting',tags:['offer-letter','HR','recruitment'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-037',title:'Persuasive Sales Presentation',description:'Highlight distinctive attributes addressing issues',content:'Compose a persuasive sales presentation for a {product or service} that highlights its distinctive attributes and advantages. Incorporate precise particulars regarding how it can effectively address an issue or enhance the customer\'s quality of life.',category:'Copywriting',tags:['sales-presentation','persuasion','benefits'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-038',title:'Accentuate Product Features',description:'Sales presentation accentuating distinctive attributes',content:'Compose a persuasive sales presentation for a {product/service} that accentuates its distinctive attributes and advantages.',category:'Copywriting',tags:['sales-presentation','features','advantages'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-039',title:'Cold Calling Script',description:'Effectively showcase worth to prospect',content:'Compose a persuasive sales script for cold calling, effectively showcasing the worth of {product/service} to {prospective customer name}.',category:'Copywriting',tags:['cold-calling','script','sales'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-040',title:'Promotional Goal Message',description:'Highlight potential in assisting audience goal',content:'Compose a promotional message that highlights the potential of our {product/service} in assisting {target audience} to attain their {specific goal}.',category:'Marketing',tags:['promotional','goal-oriented','messaging'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-041',title:'Follow-up Sales Email',description:'Follow-up email attending to reservations',content:'Compose a subsequent email to a prospective client who has exhibited curiosity in our {product name}, attending to any reservations they might possess and finalizing the transaction.',category:'Email Marketing',tags:['follow-up','sales-email','objection-handling'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-042',title:'Product Update SMS',description:'Notify customers about recent update',content:'Compose a text message to notify customers regarding a recent {update/improvement} in a product/service, emphasizing the enhanced worth and heightened effectiveness it delivers.',category:'Marketing',tags:['SMS','product-update','notification'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-043',title:'Emotional Video Description',description:'Video description employing emotions and narrative',content:'Compose a video description for {a particular genre of video} that employs the power of emotions and narrative techniques to enhance its impact.',category:'YouTube',tags:['video-description','emotions','storytelling'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-044',title:'Storytelling Email',description:'Utilize storytelling and social proof effectively',content:'Compose an {email type} that effectively utilizes the art of storytelling, social proof, and persuasive language to enthrall my {target audience} and motivate them to perform {desired action} in relation to my {product/service}.',category:'Email Marketing',tags:['email','storytelling','social-proof'],popularity:89,createdAt:'2025-08-18'},
{id:'cw-045',title:'New Product Introduction',description:'Present latest offering emphasizing attributes',content:'Compose an electronic mail to present our latest offering, {product name}, to a prospective client, emphasizing its noteworthy attributes and advantages.',category:'Email Marketing',tags:['email','product-introduction','B2B'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-046',title:'Captivating Subject Line',description:'Email with captivating subject line igniting desire',content:'Compose an email containing a captivating subject line that would allure the customer into opening it, along with a body that will ignite their desire to purchase our {product name}.',category:'Email Marketing',tags:['email','subject-line','desire'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-047',title:'Value Showcase Email',description:'Showcase worth through instances and data',content:'Compose an email that showcases the worth of my {product/service} through the utilization of actual instances, endorsements, and data to illustrate how it resolves {target persona}\'s {pain point} and distinguishes itself from rival offerings.',category:'Email Marketing',tags:['email','value','testimonials'],popularity:90,createdAt:'2025-08-18'},
{id:'cw-048',title:'Re-engagement Email',description:'Re-engage inactive customer with exclusive offer',content:'Compose an email to re-engage a customer who has refrained from making a purchase within the past {X} months, presenting them with an exclusive offer to entice their return.',category:'Email Marketing',tags:['email','re-engagement','exclusive-offer'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-049',title:'Launch Email - Benefits',description:'Showcase prominent attributes and advantages',content:'Compose an introductory email that effectively showcases the prominent attributes and advantages of {product/benefits}.',category:'Email Marketing',tags:['email','product-launch','benefits'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-050',title:'Launch Email - Enthusiasm',description:'Evoke enthusiasm and spark curiosity',content:'Compose an introductory email that evokes enthusiasm and sparks curiosity for {product/service}.',category:'Email Marketing',tags:['email','product-launch','enthusiasm'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-051',title:'SMS Product Introduction',description:'Present novel product explaining suitability',content:'Compose the SMS message to present a novel {product/service} to customers, encompassing an explanation of its flawless suitability for {product benefit}.',category:'Marketing',tags:['SMS','product-introduction','benefits'],popularity:80,createdAt:'2025-08-18'},
{id:'cw-052',title:'Blog Post Outline Creation',description:'Craft outline with captivating concepts',content:'Could you assist me in crafting a blog post outline encompassing {subtopic 1}, {subtopic 2}, and {subtopic 3}? I am seeking {adjective} concepts that will captivate the reader\'s interest and maintain their engagement throughout the entirety of the post.',category:'Copywriting',tags:['blog','outline','engagement'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-053',title:'Cart Recovery Email',description:'Create email emphasizing product category with discount',content:'Could you assist me in creating an email to recover abandoned carts, which emphasizes the {product category} and incorporates a {dollar amount} discount code that will expire in {number of days}? Additionally, I would like to include a personalized message for customers who have previously bought {related product category}.',category:'Email Marketing',tags:['abandoned-cart','discount','personalization'],popularity:91,createdAt:'2025-08-18'},
{id:'cw-054',title:'Website Content Enhancement',description:'Enhance website content for target audience',content:'Could you assist me in enhancing the content of my website\'s {homepage / product descriptions / about page}? Kindly create content that is {SEO-friendly / captivating / enlightening / compelling} for my {target audience / specific customer personas}. Kindly incorporate {specific keywords or phrases / pertinent statistics or data} and compose the content in {a conversational / formal / technical} manner.',category:'SEO',tags:['website-content','SEO','optimization'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-055',title:'Comprehensive Sales Copy',description:'Detail exceptional attributes captivating audience',content:'Could you compose a comprehensive sales copy detailing the exceptional attributes of {product/service} that will undoubtedly captivate {target audience}?',category:'Copywriting',tags:['sales-copy','features','persuasion'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-056',title:'Engaging Video Description',description:'Showcase advantages with SEO keywords',content:'Could you craft an engaging video description for a {particular kind of video} that showcases the advantages and characteristics of our {product/service}? Kindly incorporate {specific keyword or phrase} and {another specific keyword or phrase} to enhance search engine optimization.',category:'YouTube',tags:['video-description','SEO','product-features'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-057',title:'Written Job Offer',description:'Create offer specifying salary and benefits',content:'Could you create a written offer for a {position title} position, specifying a {salary amount} salary and a {start date} as the commencement date? The job is situated in {location}. The letter should encompass comprehensive information regarding the {bonus/commission structure}, scheme, and {other benefits and perks} provided to staff members.',category:'Copywriting',tags:['offer-letter','HR','compensation'],popularity:78,createdAt:'2025-08-18'},
{id:'cw-058',title:'Product Details Response',description:'Furnish additional product/service details',content:'Could you furnish additional details regarding the {product/service}?',category:'Marketing',tags:['product-details','information','response'],popularity:73,createdAt:'2025-08-18'},
{id:'cw-059',title:'All-Encompassing Sales Copy',description:'Cold call copy with objection handling',content:'Could you furnish me with an all-encompassing sales copy pertaining to {product/service} that can be utilized during a cold call to a prospective client? This copy should encompass an introduction, a presentation, strategies to address objections, and a conclusion.',category:'Copywriting',tags:['cold-calling','comprehensive','objection-handling'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-060',title:'Explainer Video Brief',description:'Generate concise document for video purpose',content:'Could you generate a concise document for an {explainer/how-to} video, which will serve the purpose of illustrating the proper utilization of our {product/service} to {new/existing customers}?',category:'YouTube',tags:['video-brief','explainer','tutorial'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-061',title:'Alternative Creative Version',description:'Generate alternative for distinct audience',content:'Could you generate an alternative version of the {successful creative/advertisement text} that will captivate a {distinct target audience/market segment} in contrast to the initial rendition?',category:'Copywriting',tags:['A/B-testing','alternative','targeting'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-062',title:'B2B Proposal Tailored',description:'Compose proposal accentuating advantages',content:'Could you kindly compose a B2B proposal tailored to {Company}, accentuating the advantages of employing our {Product/Service} and elucidating how it can facilitate the attainment of their {specific business goal}?',category:'Fiverr/Upwork',tags:['B2B','proposal','business-goals'],popularity:89,createdAt:'2025-08-18'},
{id:'cw-063',title:'Title Tags with Messaging',description:'Furnish title tag alternatives with branding',content:'Could you kindly furnish me with {number} alternatives for title tags that seamlessly integrate {specific brand messaging} and {specific keyword phrase} for my website pertaining to {topic/industry}?',category:'SEO',tags:['title-tags','branding','SEO'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-064',title:'Triumphant Presentation Example',description:'Illustrative instance of successful pitch',content:'Could you kindly furnish me with an illustrative instance of a triumphant presentation for {product/service} aimed at a {specific audience} prospective customer?',category:'Copywriting',tags:['presentation','example','pitch'],popularity:80,createdAt:'2025-08-18'},
{id:'cw-065',title:'Compelling Ad Text Examples',description:'Illustrations of compelling advertising',content:'Could you kindly furnish me with some illustrations of compelling advertising text for {a particular product or service}?',category:'Copywriting',tags:['ad-copy','examples','advertising'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-066',title:'Comprehensive Comparative Copy',description:'Highlight distinctive features vs competition',content:'Could you please compose a comprehensive sales copy highlighting the distinctive features of {product/service} in comparison to other similar options available in the market, and elucidating the reasons why {target audience} should opt for it instead of the competition?',category:'Copywriting',tags:['sales-copy','comparison','competitive'],popularity:90,createdAt:'2025-08-18'},
{id:'cw-067',title:'Captivating Blog Titles',description:'Produce distinct titles with keywords',content:'Could you produce {number} distinct and captivating titles for a blog post I am currently working on about {topic}? Kindly ensure that the titles incorporate {specific keyword or phrase}, {another specific keyword or phrase}, and {a third specific keyword or phrase}, while conveying a {adjective} atmosphere.',category:'Copywriting',tags:['blog-titles','keywords','SEO'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-068',title:'Meeting Discussion Overview',description:'Concise overview emphasizing main points',content:'Could you provide a concise overview of the {topic of meeting} discussion by emphasizing the main points? Here are the meeting\'s recorded {notes}.',category:'Marketing',tags:['meeting','summary','main-points'],popularity:77,createdAt:'2025-08-18'},
{id:'cw-069',title:'Team Meeting Overview',description:'Overview of main topics and resolutions',content:'Could you provide a concise overview of the main topics discussed in a {team/department/etc.} meeting as well as the suggested resolutions? The written record of the meeting: {notes}',category:'Marketing',tags:['meeting','team','resolutions'],popularity:76,createdAt:'2025-08-18'},
{id:'cw-070',title:'Progress Update Overview',description:'Overview of progress and future plans',content:'Could you provide a concise overview of the progress update presented during the meeting regarding the {project/task} as well as the future plans that were discussed? The written record of the meeting: {notes}',category:'Marketing',tags:['meeting','progress','planning'],popularity:78,createdAt:'2025-08-18'},
{id:'cw-071',title:'Meeting Resolutions Overview',description:'Overview of resolutions and subsequent actions',content:'Could you provide a concise overview of the resolutions reached in the meeting pertaining to the {specific issue}, as well as the subsequent actions delineated? The minutes of the meeting are as follows: {notes}',category:'Marketing',tags:['meeting','resolutions','action-items'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-072',title:'Compelling Triumph Email',description:'Highlights triumphs of comparable personas',content:'Craft a compelling email that highlights the triumphs of comparable {target persona} individuals who have utilized my {product/service} to conquer {pain point}, while underscoring the pressing need and limited availability of the proposition.',category:'Email Marketing',tags:['email','social-proof','urgency'],popularity:91,createdAt:'2025-08-18'},
{id:'cw-073',title:'Distinctive Product Bundle',description:'Craft bundle addressing specific issue',content:'Craft a distinctive combination of products for the {target audience} featuring {product 1}, {product 2}, and {product 3}. Address a specific issue and fulfill their requirements while taking into account customer preferences and market trends.',category:'Marketing',tags:['bundling','product-strategy','customer-needs'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-074',title:'Attention-Grabbing Slogan',description:'Craft slogan for latest product in language',content:'Craft an attention-grabbing slogan for our latest {product/service} in {language}: {product/service overview}',category:'Copywriting',tags:['slogan','branding','localization'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-075',title:'Enticing Call to Action',description:'Craft appeal to action in specific language',content:'Craft an enticing appeal to action for our {product/service} in {language}: {product/service description}',category:'Copywriting',tags:['CTA','localization','marketing'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-076',title:'Captivating Subject Line',description:'Create subject line highlighting distinctive advantages',content:'Create a captivating subject line and email content that highlights the distinctive advantages of my {product/service}, resonates with the {target persona}\'s personal interests, and inspires them to engage.',category:'Email Marketing',tags:['email','subject-line','personalization'],popularity:89,createdAt:'2025-08-18'},
{id:'cw-077',title:'Industry Video Description',description:'Captivating description enhancing interaction',content:'Create a captivating video description for a video centered around {a particular industry/field}, incorporating carefully chosen words and phrases to enhance audience interaction and boost the number of views.',category:'YouTube',tags:['video-description','industry','engagement'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-078',title:'Comprehensive Package',description:'Create package prioritizing customer experience',content:'Create a comprehensive package of products and services tailored to the {specific industry} that places a high importance on enhancing the customer experience for the {target audience}. Tackle any potential obstacles and deliver outstanding assistance and post-purchase service.',category:'Marketing',tags:['packaging','customer-experience','service'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-079',title:'Event Invitation SMS',description:'Extend invitation specifying details and advantages',content:'Create a text message to extend an invitation to customers for a distinctive {occasion/discount}, specifying the date, time, and venue, as well as highlighting the advantages they can gain by participating.',category:'Marketing',tags:['SMS','event','invitation'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-080',title:'Customized Discount SMS',description:'Provide customized discount highlighting value',content:'Create a text message to provide a customized discount on {products/services}, highlighting the exclusive value and savings accessible solely to customers.',category:'Marketing',tags:['SMS','discount','exclusive'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-081',title:'Enhance Ad Persuasiveness',description:'Rewrite ad copy for persuasiveness',content:'Enhance the persuasiveness of the {ad copy} by rewriting it.',category:'Copywriting',tags:['ad-copy','rewrite','persuasion'],popularity:82,createdAt:'2025-08-18'},
{id:'cw-082',title:'Value Proposition Bundle',description:'Combine products for cross-selling opportunities',content:'Enhance the value proposition by combining {product 1} and {product 2} into a comprehensive package tailored for {target market}. Recognize potential for cross-selling and upselling, while prioritizing a smooth and effortless customer journey.',category:'Marketing',tags:['bundling','value-proposition','cross-selling'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-083',title:'New Product Line SMS',description:'Advertise introduction highlighting characteristics',content:'Generate a text message to advertise the introduction of a fresh {product/service line}, highlighting the distinct characteristics and advantages it provides to customers.',category:'Marketing',tags:['SMS','product-line','launch'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-084',title:'Attention-Grabbing Title',description:'Craft title enticing click engagement',content:'How can I craft an attention-grabbing title for a {subject} that will entice individuals to click and engage with the content?',category:'Copywriting',tags:['headline','engagement','copywriting'],popularity:86,createdAt:'2025-08-18'},
{id:'cw-085',title:'Ad Title for Product',description:'Craft title for advertisement aimed at audience',content:'How can I craft an attention-grabbing title for an advertisement aimed at a {particular product/service} and tailored to a {specific audience/demographic}?',category:'Copywriting',tags:['ad-title','targeting','demographic'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-086',title:'Captivating Content Title',description:'Create title capturing reader interest',content:'How can I create a captivating title that captures the interest of readers for a {specific type of content}?',category:'Copywriting',tags:['title','content','interest'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-087',title:'Cart Recovery Promotion',description:'Utilize recovery email promoting sale with discount',content:'How can I effectively utilize a recovery email for abandoned carts to generate interest and promote the {upcoming sale/event}, {new product launch}, and/or {limited edition product}? My objective is to offer a {percentage} discount code specifically for the {product category}.',category:'Email Marketing',tags:['abandoned-cart','promotion','discount'],popularity:92,createdAt:'2025-08-18'},
{id:'cw-088',title:'Title Tags for Snippets',description:'Optimize title tags for featured snippets',content:'How can I enhance the optimization of my title tags in order to be displayed in featured snippets? Could you please offer me {number} title tag alternatives that are specifically designed for featured snippets, tailored to my website focusing on {topic/industry}?',category:'SEO',tags:['title-tags','featured-snippets','optimization'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-089',title:'Personalized Cart Recovery',description:'Personalize recovery email with previous purchases',content:'How can I personalize a recovery email for a customer who left {product name} in their cart but also previously bought items from the {related product category} on {date}? I aim to incorporate a {percentage} discount code for {product category} and showcase relevant products that align with their previous purchases.',category:'Email Marketing',tags:['abandoned-cart','personalization','cross-sell'],popularity:93,createdAt:'2025-08-18'},
{id:'cw-090',title:'Tool Utilization Guide',description:'Effectively utilize tool for specific goal',content:'How can the {audience} effectively utilize {tool/technology} in order to successfully accomplish their {specific goal/task}?',category:'Copywriting',tags:['tutorial','tool','guide'],popularity:80,createdAt:'2025-08-18'},
{id:'cw-091',title:'Articulate Advantages',description:'Articulate advantages persuading purchase',content:'How can you effectively articulate the advantages of {product/service} to a prospective customer in a manner that would persuade them to make a purchase?',category:'Copywriting',tags:['benefits','persuasion','sales'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-092',title:'Communicate to Undecided',description:'Communicate advantages to undecided customer',content:'How can you effectively communicate the advantages of {product/service} to a customer who is undecided about completing a purchase?',category:'Copywriting',tags:['benefits','objection-handling','sales'],popularity:87,createdAt:'2025-08-18'},
{id:'cw-093',title:'Persuade Skeptical Customer',description:'Persuade skeptical customer about advantages',content:'How can you effectively persuade a skeptical customer about the {product/service}\'s advantages in addressing their specific {customer\'s problem or need}?',category:'Copywriting',tags:['persuasion','skepticism','benefits'],popularity:89,createdAt:'2025-08-18'},
{id:'cw-094',title:'Product Lifestyle Integration',description:'Integrate product into everyday regimen',content:'How does {product/service} seamlessly integrate into the everyday regimen of an individual with a specific lifestyle?',category:'Marketing',tags:['lifestyle','integration','product-fit'],popularity:81,createdAt:'2025-08-18'},
{id:'cw-095',title:'Technology Industry Usage',description:'Utilized by industry for operations',content:'How is {technology/tool} utilized by {industry/field} to enhance their operational processes?',category:'Marketing',tags:['technology','industry','operations'],popularity:79,createdAt:'2025-08-18'},
{id:'cw-096',title:'Blog Post Structuring',description:'Generate comprehensive outline for blog',content:'I am currently in the midst of composing a blog post regarding {topic} and require assistance in structuring my ideas. Could you kindly generate a comprehensive outline encompassing {subtopic 1}, {subtopic 2}, and {subtopic 3}, in addition to {subtopic 4} and {subtopic 5}, which ought to incorporate {specific information} and {specific information}, correspondingly?',category:'Copywriting',tags:['blog','outline','structure'],popularity:85,createdAt:'2025-08-18'},
{id:'cw-097',title:'Blog Outline with Keywords',description:'Create outline with related keywords',content:'I am currently in the process of composing a blog post centered around {topic}. In order to ensure a comprehensive and well-structured piece, I am seeking an outline that encompasses {idea 1}, {idea 2}, {idea 3}, and {idea 4}. Additionally, I would greatly appreciate your suggestions for {related keyword} that I can delve into within the post.',category:'Copywriting',tags:['blog','outline','keywords'],popularity:84,createdAt:'2025-08-18'},
{id:'cw-098',title:'Blog Structured Plan',description:'Create outline with advice on related topic',content:'I am currently in the process of preparing a blog post centered around {topic}, however, I am encountering difficulties in devising a structured plan. Would it be possible for you to create an outline encompassing {subtopic 1}, {subtopic 2}, {subtopic 3}, and {subtopic 4}? Additionally, it would be greatly appreciated if you could offer some advice on {related topic} that I can incorporate into the post.',category:'Copywriting',tags:['blog','outline','advice'],popularity:83,createdAt:'2025-08-18'},
{id:'cw-099',title:'Compelling Customer Proposal',description:'Compose proposal emphasizing advantages',content:'I am currently making an effort to convince a potential customer to choose my {product/service}. Could you assist me in composing a compelling proposal that emphasizes the advantages and worth of {offering}?',category:'Fiverr/Upwork',tags:['proposal','persuasion','B2B'],popularity:88,createdAt:'2025-08-18'},
{id:'cw-100',title:'Captivating Advertisement',description:'Create captivating headline and selling proposition',content:'I am endeavoring to enhance the appeal of my advertisement for {product/service} by creating a captivating headline and a distinctive selling proposition that will captivate the attention of individuals. Could you assist me in achieving this?',category:'Copywriting',tags:['ad-copy','headline','USP'],popularity:90,createdAt:'2025-08-18'},
{id:'gpt-gen-001',title:'Smart Task Planner',description:'Create a daily task plan based on priorities',content:'Act as a productivity coach and create a clear daily task plan based on these priorities: [LIST TASKS]',category:'ChatGPT',tags:['productivity','planning','tasks'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-002',title:'Explain Anything Simply',description:'Get simple explanations for complex topics',content:'Explain the following topic in very simple words with examples so a beginner can understand: [TOPIC]',category:'ChatGPT',tags:['learning','explain','simple'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-003',title:'Professional Email Writer',description:'Write professional emails for any situation',content:'Write a polite and professional email for the following situation. Keep it clear and concise: [DETAILS]',category:'ChatGPT',tags:['email','professional','writing'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-004',title:'Decision Helper',description:'Help make better decisions with pros and cons',content:'Help me decide between these options by listing pros, cons, and a final recommendation: [OPTIONS]',category:'ChatGPT',tags:['decision','analysis','help'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-005',title:'Meeting Summary Generator',description:'Summarize long meetings into key points',content:'Summarize the following meeting notes into clear action points and key decisions: [PASTE NOTES]',category:'ChatGPT',tags:['summary','meeting','notes'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-006',title:'Idea Brainstormer',description:'Generate creative ideas on any topic',content:'Generate 10 creative and practical ideas about the following topic: [TOPIC]',category:'ChatGPT',tags:['ideas','brainstorm','creative'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-007',title:'Rewrite Text Clearly',description:'Rewrite text to improve clarity and tone',content:'Rewrite the following text to make it clearer, more professional, and easy to read: [TEXT]',category:'ChatGPT',tags:['rewrite','clarity','editing'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-008',title:'Step-by-Step Guide Creator',description:'Create easy step-by-step instructions',content:'Create a beginner-friendly step-by-step guide for the following task: [TASK]',category:'ChatGPT',tags:['guide','howto','steps'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-009',title:'Personal Assistant Mode',description:'Use ChatGPT as a personal assistant',content:'Act as my personal assistant and help me manage tasks, reminders, and planning for this goal: [GOAL]',category:'ChatGPT',tags:['assistant','personal','planning'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-010',title:'Learning Roadmap Generator',description:'Create learning plans for any skill',content:'Create a 30-day learning roadmap for mastering this skill from scratch: [SKILL]',category:'ChatGPT',tags:['learning','roadmap','skills'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-011',title:'Translate With Context',description:'Translate text while keeping meaning',content:'Translate the following text into English while keeping the original meaning and tone: [TEXT]',category:'ChatGPT',tags:['translation','language','context'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-012',title:'Question Answer Generator',description:'Generate clear answers to questions',content:'Provide a clear and accurate answer to the following question with examples if needed: [QUESTION]',category:'ChatGPT',tags:['qa','answers','help'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-013',title:'Daily Motivation Booster',description:'Generate motivational messages',content:'Write a short motivational message to help someone stay focused on this goal: [GOAL]',category:'ChatGPT',tags:['motivation','mindset','focus'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-014',title:'Problem Solver Assistant',description:'Solve problems logically',content:'Analyze the following problem step by step and suggest the best solution: [PROBLEM]',category:'ChatGPT',tags:['problem','solution','logic'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-015',title:'Checklist Generator',description:'Create checklists for tasks',content:'Create a detailed checklist for completing the following task efficiently: [TASK]',category:'ChatGPT',tags:['checklist','organization','productivity'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-016',title:'Time Management Coach',description:'Improve time management skills',content:'Act as a time management coach and suggest ways to manage time better for this schedule: [SCHEDULE]',category:'ChatGPT',tags:['time','management','productivity'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-017',title:'Explain Pros and Cons',description:'Compare options easily',content:'List the pros and cons of the following option and give a final verdict: [OPTION]',category:'ChatGPT',tags:['comparison','pros','cons'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-018',title:'Personal Growth Advisor',description:'Get advice for self-improvement',content:'Act as a personal growth advisor and suggest improvements for this situation: [DETAILS]',category:'ChatGPT',tags:['selfgrowth','advice','improvement'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-019',title:'Smart Question Generator',description:'Generate smart questions on any topic',content:'Generate 10 insightful questions about the following topic: [TOPIC]',category:'ChatGPT',tags:['questions','learning','thinking'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-020',title:'Goal Breakdown Planner',description:'Break big goals into steps',content:'Break this goal into small, achievable steps with timelines: [GOAL]',category:'ChatGPT',tags:['goals','planning','steps'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-021',title:'Clarity Improver',description:'Improve unclear content',content:'Improve the clarity and structure of the following content without changing its meaning: [CONTENT]',category:'ChatGPT',tags:['clarity','editing','writing'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-022',title:'Tone Adjuster',description:'Change tone of writing',content:'Rewrite the following text to sound more friendly and professional: [TEXT]',category:'ChatGPT',tags:['tone','writing','editing'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-023',title:'Quick Summary Tool',description:'Create short summaries',content:'Summarize the following content in 5 bullet points: [CONTENT]',category:'ChatGPT',tags:['summary','short','content'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-024',title:'Answer Like an Expert',description:'Get expert-level responses',content:'Answer the following question as an expert in the field with clear explanations: [QUESTION]',category:'ChatGPT',tags:['expert','answers','knowledge'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-gen-025',title:'Clarity Question Solver',description:'Clear confusion in explanations',content:'Explain this topic clearly and remove any confusion using examples: [TOPIC]',category:'ChatGPT',tags:['clarity','learning','examples'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-001',title:'SEO Blog Topic Generator',description:'Generate SEO-friendly blog topics',content:'Generate 20 SEO-friendly blog topic ideas for the keyword: [KEYWORD]',category:'SEO',tags:['seo','blog','topics'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-002',title:'SEO Blog Outline Creator',description:'Create SEO-optimized outlines',content:'Act as an SEO expert and create a detailed blog outline for the keyword: [KEYWORD]',category:'SEO',tags:['seo','outline','blog'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-003',title:'Meta Description Writer',description:'Write optimized meta descriptions',content:'Write an engaging and SEO-optimized meta description for this topic: [TOPIC]',category:'SEO',tags:['meta','seo','description'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-004',title:'SEO Introduction Writer',description:'Write strong blog introductions',content:'Write an engaging and SEO-friendly introduction for a blog post about: [TOPIC]',category:'SEO',tags:['seo','introduction','blog'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-005',title:'Keyword Research Helper',description:'Find keyword ideas',content:'Suggest primary and secondary keywords for this topic with search intent: [TOPIC]',category:'SEO',tags:['keywords','seo','research'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-006',title:'SEO FAQ Generator',description:'Create FAQs for SEO',content:'Generate SEO-friendly FAQ questions and answers for this topic: [TOPIC]',category:'SEO',tags:['faq','seo','content'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-007',title:'Content Optimization Tool',description:'Optimize content for SEO',content:'Optimize the following content for SEO without keyword stuffing: [CONTENT]',category:'SEO',tags:['seo','optimization','content'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-008',title:'Internal Linking Planner',description:'Plan internal links',content:'Suggest internal linking opportunities for this blog topic: [TOPIC]',category:'SEO',tags:['internal-links','seo','blog'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-009',title:'SEO Title Generator',description:'Generate SEO titles',content:'Generate 10 click-worthy SEO titles for the keyword: [KEYWORD]',category:'SEO',tags:['seo','title','headlines'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-010',title:'Content Gap Analyzer',description:'Find missing content ideas',content:'Analyze this topic and suggest content gaps that competitors may be missing: [TOPIC]',category:'SEO',tags:['content','gaps','seo'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-011',title:'Long-Form Blog Planner',description:'Plan long articles',content:'Create a long-form SEO blog structure (2000+ words) for this topic: [TOPIC]',category:'SEO',tags:['longform','seo','blog'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-012',title:'SEO Conclusion Writer',description:'Write strong conclusions',content:'Write a clear and SEO-friendly conclusion for a blog post about: [TOPIC]',category:'SEO',tags:['seo','conclusion','blog'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-013',title:'Keyword Intent Analyzer',description:'Analyze search intent',content:'Analyze the search intent behind this keyword and suggest content type: [KEYWORD]',category:'SEO',tags:['intent','seo','keywords'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-014',title:'Content Refresh Helper',description:'Update old content',content:'Suggest improvements to refresh and update this old blog post for SEO: [CONTENT]',category:'SEO',tags:['refresh','seo','content'],popularity:80,createdAt:'2025-12-22'},
{id:'seo-gen-015',title:'SEO Content Brief Creator',description:'Create content briefs',content:'Create an SEO content brief for writers based on this keyword: [KEYWORD]',category:'SEO',tags:['brief','seo','content'],popularity:80,createdAt:'2025-12-22'},
{id:'gpt-ext-001',title:'Code Reviewer',description:'Act as a code reviewer providing detailed feedback on quality, security, and best practices for any programming language with improvement suggestions.',content:'Act as an experienced code reviewer. Review the following code for quality, security vulnerabilities, performance issues, and adherence to best practices. Provide specific improvement suggestions:\n\n[INSERT CODE HERE]',category:'ChatGPT',tags:['code','review','programming'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-002',title:'Resume Builder',description:'Create professional resumes tailored to specific job roles highlighting relevant skills, achievements, and experience in ATS-friendly format.',content:'Act as a professional resume writer. Create a compelling resume for [JOB TITLE] position highlighting relevant skills and achievements. Format it for ATS systems:\n\n[INSERT YOUR BACKGROUND]',category:'ChatGPT',tags:['resume','career','job'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-003',title:'Interview Prep Coach',description:'Prepare for job interviews with common questions, sample answers, and tips for presenting your experience confidently and professionally.',content:'Act as an interview coach. Provide 10 common interview questions for [JOB ROLE] with sample answers and tips for presenting my experience:\n\n[YOUR BACKGROUND]',category:'ChatGPT',tags:['interview','career','preparation'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-004',title:'Business Plan Creator',description:'Develop comprehensive business plans including market analysis, financial projections, and growth strategies for startups and existing businesses.',content:'Act as a business consultant. Create a detailed business plan for [BUSINESS IDEA] including market analysis, financial projections, and growth strategy:\n\n[BUSINESS DETAILS]',category:'ChatGPT',tags:['business','planning','strategy'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-005',title:'Social Media Manager',description:'Generate engaging social media content calendars with post ideas, captions, and hashtag strategies for multiple platforms to boost engagement.',content:'Act as a social media manager. Create a 30-day content calendar for [PLATFORM] targeting [AUDIENCE] with post ideas, captions, and hashtags:\n\n[BRAND INFO]',category:'ChatGPT',tags:['social-media','content','marketing'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-006',title:'Financial Advisor',description:'Get personalized financial advice on budgeting, investing, saving strategies, and wealth building tailored to your income and goals.',content:'Act as a financial advisor. Analyze my financial situation and provide advice on budgeting, investing, and saving strategies:\n\n[FINANCIAL DETAILS]',category:'ChatGPT',tags:['finance','advice','planning'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-007',title:'Fitness Coach',description:'Create personalized workout plans and nutrition guidance based on your fitness level, goals, and available equipment for effective results.',content:'Act as a fitness coach. Create a personalized workout plan for [FITNESS GOAL] considering my fitness level and available equipment:\n\n[YOUR DETAILS]',category:'ChatGPT',tags:['fitness','health','workout'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-008',title:'Recipe Developer',description:'Generate creative recipe ideas with detailed instructions, ingredient substitutions, and nutritional information for various dietary preferences and restrictions.',content:'Act as a chef. Create a detailed recipe for [DISH TYPE] with ingredients, step-by-step instructions, and nutritional information:\n\n[DIETARY PREFERENCES]',category:'ChatGPT',tags:['cooking','recipe','food'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-009',title:'Travel Planner',description:'Plan complete travel itineraries including destinations, activities, budget estimates, and accommodation recommendations for memorable trips worldwide.',content:'Act as a travel planner. Create a detailed itinerary for [DESTINATION] including activities, budget, and accommodation recommendations:\n\n[TRAVEL PREFERENCES]',category:'ChatGPT',tags:['travel','planning','vacation'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-010',title:'Language Teacher',description:'Learn new languages with structured lessons, practice exercises, cultural insights, and pronunciation guides for beginner to advanced levels.',content:'Act as a language teacher. Teach me [LANGUAGE] basics with vocabulary, common phrases, pronunciation tips, and practice exercises:\n\n[LEARNING GOAL]',category:'ChatGPT',tags:['language','learning','education'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-011',title:'Story Generator',description:'Create engaging stories in various genres with well-developed characters, plot twists, and compelling narratives for entertainment or creative writing.',content:'Act as a creative writer. Write an engaging [GENRE] story about [THEME] with interesting characters and plot twists:\n\n[STORY ELEMENTS]',category:'ChatGPT',tags:['writing','story','creative'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-012',title:'Legal Advisor',description:'Get general legal guidance on contracts, agreements, rights, and procedures with plain language explanations for common legal situations.',content:'Act as a legal advisor. Explain [LEGAL CONCEPT] in simple terms and provide guidance on [LEGAL SITUATION]:\n\n[SITUATION DETAILS]',category:'ChatGPT',tags:['legal','advice','guidance'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-013',title:'Math Tutor',description:'Solve math problems with detailed step-by-step explanations, formulas, and practice problems for students from basic to advanced levels.',content:'Act as a math tutor. Solve this problem step-by-step with explanations and provide similar practice problems:\n\n[MATH PROBLEM]',category:'ChatGPT',tags:['math','education','tutoring'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-014',title:'Debate Partner',description:'Practice debating skills by arguing different perspectives on topics with logical reasoning, counterarguments, and evidence-based discussions.',content:'Act as a debate partner. Present strong arguments for and against [TOPIC] with evidence and logical reasoning:\n\n[POSITION]',category:'ChatGPT',tags:['debate','logic','critical-thinking'],popularity:75,createdAt:'2025-12-22'},
{id:'gpt-ext-015',title:'Product Namer',description:'Generate creative and memorable product names with brand identity considerations, domain availability checks, and marketing appeal analysis.',content:'Act as a branding expert. Generate 20 creative product names for [PRODUCT TYPE] targeting [AUDIENCE] with branding considerations:\n\n[PRODUCT DETAILS]',category:'ChatGPT',tags:['branding','naming','marketing'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-001',title:'Keyword Density Checker',description:'Analyze keyword density and distribution in content to ensure optimal SEO without over-optimization while maintaining natural readability and flow.',content:'Act as an SEO analyst. Check keyword density and distribution in this content and suggest optimization improvements:\n\n[CONTENT]',category:'SEO',tags:['seo','keywords','analysis'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-002',title:'Competitor Content Analysis',description:'Analyze competitor content strategies identifying strengths, weaknesses, and opportunities to create better-ranking content for your niche.',content:'Act as an SEO strategist. Analyze competitor content for [TOPIC] and suggest how to create better-ranking content:\n\n[COMPETITOR URLS]',category:'SEO',tags:['seo','competitor','analysis'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-003',title:'Local SEO Optimizer',description:'Optimize local business listings, citations, and content for local search rankings including Google My Business optimization and location-specific keywords.',content:'Act as a local SEO expert. Optimize my business listing and content for local search in [LOCATION] for [BUSINESS TYPE]:\n\n[BUSINESS INFO]',category:'SEO',tags:['local-seo','optimization','business'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-004',title:'Schema Markup Generator',description:'Create structured data schema markup for better search visibility including rich snippets, FAQ schema, and product schema for various content types.',content:'Act as an SEO technical expert. Generate appropriate schema markup for [CONTENT TYPE] to improve search visibility:\n\n[CONTENT DETAILS]',category:'SEO',tags:['schema','technical-seo','markup'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-005',title:'Backlink Strategy Planner',description:'Develop comprehensive backlink acquisition strategies identifying quality link opportunities, outreach templates, and relationship-building tactics for authority growth.',content:'Act as a link-building expert. Create a backlink strategy for [WEBSITE] including target sites and outreach approaches:\n\n[NICHE DETAILS]',category:'SEO',tags:['backlinks','link-building','seo'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-006',title:'Voice Search Optimizer',description:'Optimize content for voice search queries with conversational keywords, featured snippet targeting, and question-based content structures.',content:'Act as a voice search SEO specialist. Optimize this content for voice search queries and featured snippets:\n\n[CONTENT]',category:'SEO',tags:['voice-search','seo','optimization'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-007',title:'Site Speed Consultant',description:'Analyze website speed issues and provide actionable recommendations for improving page load times, Core Web Vitals, and overall performance.',content:'Act as a site speed consultant. Analyze performance issues and provide optimization recommendations for [WEBSITE]:\n\n[CURRENT METRICS]',category:'SEO',tags:['speed','performance','technical-seo'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-008',title:'Mobile SEO Specialist',description:'Optimize websites for mobile search with responsive design recommendations, mobile usability improvements, and mobile-first indexing strategies.',content:'Act as a mobile SEO expert. Provide mobile optimization recommendations for [WEBSITE] focusing on usability and rankings:\n\n[SITE DETAILS]',category:'SEO',tags:['mobile-seo','optimization','usability'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-009',title:'Content Cluster Planner',description:'Design topic clusters and pillar content strategies to establish topical authority, improve site structure, and boost organic visibility.',content:'Act as an SEO content strategist. Design a content cluster strategy for [MAIN TOPIC] with pillar and supporting articles:\n\n[NICHE]',category:'SEO',tags:['content-cluster','strategy','seo'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-010',title:'Alt Text Generator',description:'Create descriptive and SEO-friendly alt text for images balancing accessibility, keyword optimization, and accurate visual descriptions.',content:'Act as an SEO image optimizer. Generate SEO-friendly alt text for images in [CONTEXT] balancing keywords and descriptions:\n\n[IMAGE DETAILS]',category:'SEO',tags:['alt-text','images','seo'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-011',title:'Redirect Strategy Builder',description:'Plan URL redirects for site migrations, restructures, or deleted pages preserving SEO value and avoiding broken links or traffic loss.',content:'Act as a technical SEO expert. Create a redirect strategy for [SITE MIGRATION] preserving SEO value and user experience:\n\n[MIGRATION DETAILS]',category:'SEO',tags:['redirects','technical-seo','migration'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-012',title:'SERP Feature Analyzer',description:'Analyze search engine results pages identifying featured snippets, knowledge panels, and other SERP features to target for visibility.',content:'Act as a SERP analyst. Analyze SERP features for [KEYWORD] and suggest content strategies to capture those positions:\n\n[CURRENT RANKINGS]',category:'SEO',tags:['serp','analysis','features'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-013',title:'Anchor Text Optimizer',description:'Optimize internal and external link anchor text for better relevance, natural language patterns, and improved SEO without over-optimization.',content:'Act as a link optimization specialist. Review and optimize anchor text strategy for [WEBSITE] ensuring natural and effective linking:\n\n[LINK PROFILE]',category:'SEO',tags:['anchor-text','links','optimization'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-014',title:'Robots.txt Advisor',description:'Create and optimize robots.txt files controlling search engine crawler access while preventing indexation issues and protecting sensitive pages.',content:'Act as a technical SEO consultant. Create an optimized robots.txt file for [WEBSITE] balancing crawl efficiency and indexation:\n\n[SITE STRUCTURE]',category:'SEO',tags:['robots','technical-seo','crawling'],popularity:75,createdAt:'2025-12-22'},
{id:'seo-ext-015',title:'Pagination SEO Fixer',description:'Implement proper pagination strategies for large content collections preventing duplicate content issues while maintaining SEO value and usability.',content:'Act as a pagination SEO expert. Recommend pagination strategy for [CONTENT TYPE] avoiding duplicate content and ranking issues:\n\n[SITE DETAILS]',category:'SEO',tags:['pagination','technical-seo','structure'],popularity:75,createdAt:'2025-12-22'}
);
