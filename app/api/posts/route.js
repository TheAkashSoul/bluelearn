import { NextResponse } from "next/server"

export function GET(req){
    const posts = 
        { "startup" : [
            {
            "title": "The Future of Startups in AI and Machine Learning",
            "description": "Exploring the impact of AI and machine learning on the startup landscape.",
            "likes": 120,
            "comments": 25,
            "views": 500,
            "commentList": [
                "AI-driven startups are becoming increasingly prevalent.",
                "The potential for AI in startups is immense!",
                "Excited to see how AI continues to revolutionize startups."
            ],
            "category": "Startup Club"
            },
            {
            "title": "Funding Strategies for Early-Stage Startups",
            "description": "Insights into securing funding for startups in their initial stages.",
            "likes": 85,
            "comments": 15,
            "views": 300,
            "commentList": [
                "Funding is crucial for startups' growth.",
                "Raising capital requires a well-thought-out strategy.",
                "Bootstrapping vs. VC funding - a constant debate in startups."
            ],
            "category": "Startup Club"
            },
            {
            "title": "Tech Innovations Shaping the Startup Ecosystem",
            "description": "Examining technological advancements influencing startups worldwide.",
            "likes": 200,
            "comments": 30,
            "views": 750,
            "commentList": [
                "Startups embracing blockchain are on the rise.",
                "IoT is redefining various industry verticals.",
                "The synergy between startups and emerging tech is fascinating."
            ],
            "category": "Startup Club"
            },
            {
                "title": "Scaling Strategies for Startups: From Growth Hacking to Sustainable Growth",
                "description": "Strategies and challenges involved in scaling startups sustainably.",
                "likes": 150,
                "comments": 20,
                "views": 600,
                "commentList": [
                "Scaling too fast can lead to unforeseen challenges.",
                "Finding the right balance between growth and stability is key.",
                "Success stories of startups that scaled effectively inspire others."
                ],
                "category": "Startup Club"
            },
            {
                "title": "The Role of Diversity in Startup Success",
                "description": "Exploring how diversity fosters innovation and success in startups.",
                "likes": 90,
                "comments": 18,
                "views": 400,
                "commentList": [
                "Diversity in teams brings unique perspectives and ideas.",
                "Inclusive startups tend to have better problem-solving capabilities.",
                "Challenges in promoting diversity and inclusion in startup culture."
                ],
                "category": "Startup Club"
            },
            {
                "title": "Cybersecurity Challenges for Startups: Protecting Innovation",
                "description": "Addressing cybersecurity risks faced by startups and ways to mitigate them.",
                "likes": 120,
                "comments": 25,
                "views": 550,
                "commentList": [
                "Startups often overlook cybersecurity until it's too late.",
                "Investing in cybersecurity is crucial, especially in tech-focused startups.",
                "Balancing innovation with security measures is a significant challenge."
                ],
                "category": "Startup Club"
            },
            {
                "title": "Social Entrepreneurship: Impact-Driven Ventures Changing the World",
                "description": "Exploring the intersection of business and social impact in startups.",
                "likes": 180,
                "comments": 35,
                "views": 700,
                "commentList": [
                "Startups addressing social issues have a profound impact.",
                "The concept of 'doing well by doing good' is gaining momentum.",
                "Challenges faced by social entrepreneurs in funding and scaling."
                ],
                "category": "Startup Club"
            },
            {
                "title": "Adapting to Remote Work Culture in Startups",
                "description": "Navigating the challenges and opportunities of remote work in startups.",
                "likes": 100,
                "comments": 22,
                "views": 450,
                "commentList": [
                "Remote work opens doors to a global talent pool for startups.",
                "Maintaining team cohesion and communication in remote setups is vital.",
                "Tools and best practices for effective remote work in startups."
                ],
                "category": "Startup Club"
            },
            {
                "title": "HealthTech Innovation: Transforming Healthcare through Startups",
                "description": "The role of startups in revolutionizing healthcare through technology.",
                "likes": 220,
                "comments": 42,
                "views": 850,
                "commentList": [
                "Startups are reshaping healthcare delivery through digital solutions.",
                "AI-driven diagnostics and telemedicine are transforming patient care.",
                "Regulatory hurdles and adoption challenges in HealthTech startups."
                ],
                "category": "Startup Club"
            },
            {
                "title": "Sustainability in Startups: Building Eco-Friendly Business Models",
                "description": "Strategies for startups to integrate sustainability into their core operations.",
                "likes": 130,
                "comments": 28,
                "views": 600,
                "commentList": [
                "Consumer demand for sustainable products is driving startup initiatives.",
                "Measuring and communicating the environmental impact of startups.",
                "Challenges in implementing sustainable practices while staying profitable."
                ],
                "category": "Startup Club"
            },
            {
                "title": "Data Privacy in Startups: Navigating Regulatory Compliance",
                "description": "Addressing the importance of data privacy and compliance for startups.",
                "likes": 110,
                "comments": 20,
                "views": 500,
                "commentList": [
                "Startups handling user data must prioritize data privacy.",
                "GDPR, CCPA, and other regulations affecting startups' data practices.",
                "Data breaches and their impact on startups' reputation and trust."
                ],
                "category": "Startup Club"
            }
            ],
            "bangalore": [
                {
                  "title": "Tech Hub Bangalore: Innovation Amidst Silicon Valley of India",
                  "description": "Exploring Bangalore's tech scene and its impact on startups.",
                  "likes": 160,
                  "comments": 30,
                  "views": 700,
                  "commentList": [
                    "Bangalore's startup ecosystem fosters incredible innovation.",
                    "The city's talent pool and resources attract entrepreneurs globally.",
                    "Challenges faced by startups in Bangalore's competitive market."
                  ],
                  "category": "Bangalore Club"
                },
                {
                  "title": "Startup Events in Bangalore: Networking and Knowledge Sharing",
                  "description": "Highlighting the significance of startup events in Bangalore.",
                  "likes": 120,
                  "comments": 25,
                  "views": 600,
                  "commentList": [
                    "Events provide a platform for startups to connect and learn.",
                    "Success stories often emerge from networking at these events.",
                    "Prominent startup events and their impact on Bangalore's ecosystem."
                  ],
                  "category": "Bangalore Club"
                },
                {
                  "title": "Coworking Spaces in Bangalore: Fostering Collaboration and Innovation",
                  "description": "The rise of coworking spaces and their influence on Bangalore's startups.",
                  "likes": 100,
                  "comments": 20,
                  "views": 500,
                  "commentList": [
                    "Coworking spaces offer flexibility and a collaborative environment.",
                    "Networking opportunities and cost-effectiveness in shared workspaces.",
                    "Popular coworking spaces empowering startups in Bangalore."
                  ],
                  "category": "Bangalore Club"
                },
                {
                  "title": "Investment Landscape in Bangalore: Funding Opportunities for Startups",
                  "description": "Insights into funding avenues available to startups in Bangalore.",
                  "likes": 180,
                  "comments": 35,
                  "views": 800,
                  "commentList": [
                    "Venture capital, angel investors, and government initiatives in Bangalore.",
                    "Navigating the process of securing funding for Bangalore-based startups.",
                    "Successful funding stories and their impact on Bangalore's startup ecosystem."
                  ],
                  "category": "Bangalore Club"
                },
                {
                  "title": "Startup Culture in Bangalore: Balancing Work and Lifestyle",
                  "description": "Examining the work-life balance and culture in Bangalore's startups.",
                  "likes": 150,
                  "comments": 28,
                  "views": 750,
                  "commentList": [
                    "Bangalore's vibrant culture attracts and retains talent in startups.",
                    "Challenges in maintaining a healthy work-life balance in startups.",
                    "Innovations in workplace practices contributing to Bangalore's startup culture."
                  ],
                  "category": "Bangalore Club"
                },
                {
                    "title": "AI and Healthcare: Bangalore's Pioneering Startups",
                    "description": "Innovative AI solutions improving healthcare in Bangalore.",
                    "likes": 140,
                    "comments": 26,
                    "views": 650,
                    "commentList": [
                      "AI-driven healthcare startups are transforming patient care.",
                      "Bangalore's ecosystem encourages innovation in HealthTech.",
                      "Challenges in AI adoption within the healthcare sector."
                    ],
                    "category": "Bangalore Club"
                  },
                  {
                    "title": "E-commerce Boom in Bangalore: Challenges and Opportunities",
                    "description": "The growth and challenges of e-commerce startups in Bangalore.",
                    "likes": 130,
                    "comments": 22,
                    "views": 600,
                    "commentList": [
                      "Bangalore's e-commerce startups are reshaping the market.",
                      "Logistics and customer acquisition are critical challenges.",
                      "Success stories of e-commerce startups in Bangalore."
                    ],
                    "category": "Bangalore Club"
                  },
                  {
                    "title": "SaaS Revolution in Bangalore: Cloud-based Innovations",
                    "description": "Exploring Bangalore's Software as a Service (SaaS) landscape.",
                    "likes": 160,
                    "comments": 30,
                    "views": 700,
                    "commentList": [
                      "Bangalore is a hub for SaaS startups catering to global markets.",
                      "The scalability and potential of SaaS businesses in Bangalore.",
                      "Challenges in customer acquisition and product differentiation."
                    ],
                    "category": "Bangalore Club"
                  },
                  {
                    "title": "Women in Tech Startups: Empowering Bangalore's Entrepreneurs",
                    "description": "Highlighting the role and challenges faced by women in Bangalore's tech startups.",
                    "likes": 120,
                    "comments": 28,
                    "views": 650,
                    "commentList": [
                      "Supporting women entrepreneurs enhances Bangalore's startup ecosystem.",
                      "Barriers and opportunities for women in Bangalore's tech scene.",
                      "Success stories of women-led startups in Bangalore."
                    ],
                    "category": "Bangalore Club"
                  },
                  {
                    "title": "Green Initiatives in Bangalore Startups: Sustainable Innovations",
                    "description": "Startups in Bangalore contributing to environmental sustainability.",
                    "likes": 110,
                    "comments": 24,
                    "views": 600,
                    "commentList": [
                      "Sustainability is a focus for Bangalore's forward-thinking startups.",
                      "Efforts towards reducing carbon footprint and eco-friendly practices.",
                      "Collaborations and partnerships for sustainable initiatives in Bangalore."
                    ],
                    "category": "Bangalore Club"
                  }
              ],
              "tech": [
                {
                  "title": "Blockchain Revolution: Transforming Industries",
                  "description": "The impact of blockchain technology on diverse sectors.",
                  "likes": 200,
                  "comments": 40,
                  "views": 1000,
                  "commentList": [
                    "Blockchain's potential for secure and transparent transactions is promising.",
                    "Challenges in mainstream adoption of blockchain technology.",
                    "Use cases of blockchain beyond cryptocurrencies."
                  ],
                  "category": "Tech Club"
                },
                {
                  "title": "Future of Artificial Intelligence: Trends and Implications",
                  "description": "Exploring the latest developments and applications in AI.",
                  "likes": 250,
                  "comments": 45,
                  "views": 1200,
                  "commentList": [
                    "AI's role in reshaping industries like healthcare and finance.",
                    "Ethical considerations in AI development and deployment.",
                    "Predictions for the future of AI-driven innovation."
                  ],
                  "category": "Tech Club"
                },
                {
                  "title": "Cybersecurity Challenges in a Connected World",
                  "description": "Addressing the evolving threats and strategies in cybersecurity.",
                  "likes": 180,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Rising cyber threats and the need for robust security measures.",
                    "The importance of user education in preventing cyber attacks.",
                    "Innovations in cybersecurity technologies."
                  ],
                  "category": "Tech Club"
                },
                {
                  "title": "Augmented Reality: Transforming User Experiences",
                  "description": "The potential of AR technology in various industries.",
                  "likes": 150,
                  "comments": 30,
                  "views": 800,
                  "commentList": [
                    "AR's impact on gaming, education, and retail sectors.",
                    "Challenges in mass adoption of AR applications.",
                    "Examples of successful AR implementations."
                  ],
                  "category": "Tech Club"
                },
                {
                  "title": "Internet of Things (IoT): Interconnecting the World",
                  "description": "The evolution and future prospects of IoT.",
                  "likes": 220,
                  "comments": 38,
                  "views": 1100,
                  "commentList": [
                    "IoT's role in smart cities, healthcare, and industry automation.",
                    "Privacy concerns and security challenges in IoT ecosystems.",
                    "Innovative IoT applications driving digital transformation."
                  ],
                  "category": "Tech Club"
                },
                {
                    "title": "Quantum Computing: The Next Frontier",
                    "description": "Exploring the potential of quantum computing technology.",
                    "likes": 190,
                    "comments": 36,
                    "views": 950,
                    "commentList": [
                      "Quantum computing's revolutionary power in solving complex problems.",
                      "Challenges in developing scalable quantum computers.",
                      "Real-world applications of quantum computing."
                    ],
                    "category": "Tech Club"
                  },
                  {
                    "title": "Edge Computing: Redefining Data Processing",
                    "description": "The significance of edge computing in the era of IoT and AI.",
                    "likes": 170,
                    "comments": 32,
                    "views": 850,
                    "commentList": [
                      "Edge computing's role in reducing latency and improving efficiency.",
                      "Challenges and security considerations in edge computing.",
                      "Use cases of edge computing in various industries."
                    ],
                    "category": "Tech Club"
                  },
                  {
                    "title": "Robotics: Advancements and Applications",
                    "description": "Recent breakthroughs and uses of robotics technology.",
                    "likes": 210,
                    "comments": 42,
                    "views": 1000,
                    "commentList": [
                      "Robotics' impact on manufacturing, healthcare, and exploration.",
                      "Ethical concerns surrounding the integration of robotics.",
                      "Innovations in AI-driven robotics."
                    ],
                    "category": "Tech Club"
                  },
                  {
                    "title": "Bioinformatics: Merging Biology and Data Science",
                    "description": "The intersection of biology, computer science, and data analytics.",
                    "likes": 160,
                    "comments": 28,
                    "views": 900,
                    "commentList": [
                      "Bioinformatics' role in genomics and drug discovery.",
                      "Challenges in managing and analyzing large biological datasets.",
                      "Emerging trends in bioinformatics research."
                    ],
                    "category": "Tech Club"
                  },
                  {
                    "title": "5G Technology: Reshaping Connectivity",
                    "description": "The potential of 5G networks in transforming communication.",
                    "likes": 230,
                    "comments": 40,
                    "views": 1100,
                    "commentList": [
                      "5G's impact on IoT, mobile technology, and smart infrastructure.",
                      "Challenges and opportunities in deploying widespread 5G networks.",
                      "Use cases and industries benefiting most from 5G technology."
                    ],
                    "category": "Tech Club"
                  }
              ],
              "ai": [
                {
                  "title": "Introduction to Neural Networks",
                  "description": "Fundamentals and applications of neural networks in AI.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Neural networks are the backbone of modern AI applications.",
                    "Deep learning's impact on neural network advancements.",
                    "Challenges in training and optimizing neural networks."
                  ],
                  "category": "AI Club"
                },
                {
                  "title": "Natural Language Processing: Understanding Text Data",
                  "description": "The role and advancements in NLP technologies.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "NLP's applications in chatbots, sentiment analysis, and translation.",
                    "Ethical considerations in NLP and bias in language models.",
                    "Innovations and challenges in NLP research."
                  ],
                  "category": "AI Club"
                },
                {
                  "title": "Reinforcement Learning: Exploring AI Decision-Making",
                  "description": "The principles and applications of reinforcement learning.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Reinforcement learning in game playing and robotics.",
                    "Balancing exploration and exploitation in reinforcement learning.",
                    "Applications of RL in real-world scenarios."
                  ],
                  "category": "AI Club"
                },
                {
                  "title": "AI Ethics and Responsible AI",
                  "description": "Addressing ethical considerations in AI development and deployment.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "AI's societal impact and the need for responsible AI practices.",
                    "Fairness, transparency, and accountability in AI algorithms.",
                    "Regulations and guidelines for ethical AI development."
                  ],
                  "category": "AI Club"
                },
                {
                  "title": "Computer Vision: Understanding Visual Data",
                  "description": "The role and advancements in computer vision technologies.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Computer vision applications in image recognition and object detection.",
                    "Challenges in image understanding and interpretation by machines.",
                    "Innovations and trends in computer vision research."
                  ],
                  "category": "AI Club"
                },
                {
                    "title": "Generative Adversarial Networks (GANs): Creative AI",
                    "description": "Understanding GANs and their applications in generating content.",
                    "likes": 190,
                    "comments": 33,
                    "views": 880,
                    "commentList": [
                      "GANs' role in generating realistic images, music, and text.",
                      "Ethical concerns in using AI-generated content.",
                      "Innovations and challenges in GAN research."
                    ],
                    "category": "AI Club"
                  },
                  {
                    "title": "Explainable AI: Interpreting Machine Learning Models",
                    "description": "Methods to interpret and understand complex AI models.",
                    "likes": 210,
                    "comments": 38,
                    "views": 920,
                    "commentList": [
                      "The importance of explainability in AI decision-making.",
                      "Techniques for making AI models more transparent and interpretable.",
                      "Use cases and challenges in explainable AI."
                    ],
                    "category": "AI Club"
                  },
                  {
                    "title": "AI in Healthcare: Revolutionizing Patient Care",
                    "description": "AI applications and advancements in the healthcare industry.",
                    "likes": 230,
                    "comments": 40,
                    "views": 950,
                    "commentList": [
                      "AI's impact on diagnostics, drug discovery, and personalized medicine.",
                      "Ethical considerations in AI-driven healthcare.",
                      "Challenges in implementing AI solutions in healthcare."
                    ],
                    "category": "AI Club"
                  },
                  {
                    "title": "AI in Finance: Transforming the Financial Sector",
                    "description": "The role of AI in financial services and innovations.",
                    "likes": 220,
                    "comments": 39,
                    "views": 930,
                    "commentList": [
                      "AI applications in fraud detection, risk assessment, and trading.",
                      "Ethical considerations and regulatory challenges in AI-powered finance.",
                      "Success stories and challenges in AI adoption in finance."
                    ],
                    "category": "AI Club"
                  },
                  {
                    "title": "AI-driven Personalization: Enhancing User Experiences",
                    "description": "How AI enables personalized experiences in various industries.",
                    "likes": 200,
                    "comments": 36,
                    "views": 900,
                    "commentList": [
                      "AI's role in recommending products, content, and services.",
                      "Privacy concerns and user acceptance of AI-driven personalization.",
                      "Innovations and challenges in personalized AI systems."
                    ],
                    "category": "AI Club"
                  }
              ],
              "placements": [
                {
                  "title": "Resume Writing Tips for Successful Placements",
                  "description": "Guidelines and best practices for crafting an effective resume.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Tailoring resumes to highlight skills and achievements.",
                    "The importance of a well-structured resume in job applications.",
                    "Common mistakes to avoid in resume writing."
                  ],
                  "category": "Placements Club"
                },
                {
                  "title": "Interview Preparation Strategies",
                  "description": "Preparing for job interviews and acing them with confidence.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Effective interview techniques and etiquette.",
                    "Handling common interview questions and behavioral assessments.",
                    "Mock interviews and their role in interview preparation."
                  ],
                  "category": "Placements Club"
                },
                {
                  "title": "Networking for Career Growth",
                  "description": "The importance of networking and building professional connections.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Utilizing networking events and platforms for career advancement.",
                    "Nurturing professional relationships and networking etiquette.",
                    "Strategies for effective networking in various industries."
                  ],
                  "category": "Placements Club"
                },
                {
                  "title": "Job Search Strategies in a Competitive Market",
                  "description": "Strategies and tips for navigating the job search process.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Utilizing job search engines, career fairs, and referrals.",
                    "Tailoring job applications and cover letters for different roles.",
                    "Overcoming challenges in job hunting and staying motivated."
                  ],
                  "category": "Placements Club"
                },
                {
                  "title": "Skills Development for Career Success",
                  "description": "Identifying and developing skills essential for career growth.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Continuous learning and upskilling in a dynamic job market.",
                    "In-demand skills across industries and sectors.",
                    "Online courses and certifications for skill enhancement."
                  ],
                  "category": "Placements Club"
                },
                {
                    "title": "Internship Opportunities: Gaining Valuable Experience",
                    "description": "Strategies for securing internships and their significance.",
                    "likes": 190,
                    "comments": 33,
                    "views": 880,
                    "commentList": [
                      "The role of internships in gaining practical knowledge.",
                      "Finding and applying to suitable internship programs.",
                      "Maximizing learning and networking during internships."
                    ],
                    "category": "Placements Club"
                  },
                  {
                    "title": "Career Transition: Switching Paths Successfully",
                    "description": "Guidance on transitioning careers and making a smooth switch.",
                    "likes": 210,
                    "comments": 38,
                    "views": 920,
                    "commentList": [
                      "Assessing transferable skills and identifying new career paths.",
                      "Steps for a successful career transition and overcoming challenges.",
                      "Case studies of successful career changes."
                    ],
                    "category": "Placements Club"
                  },
                  {
                    "title": "Salary Negotiation Techniques",
                    "description": "Strategies for negotiating salaries and benefits.",
                    "likes": 230,
                    "comments": 40,
                    "views": 950,
                    "commentList": [
                      "Preparing for salary discussions during job interviews.",
                      "Tactics for effective salary negotiation and achieving desired compensation.",
                      "Negotiating beyond salary: perks, benefits, and work-life balance."
                    ],
                    "category": "Placements Club"
                  },
                  {
                    "title": "Professional Development and Growth Mindset",
                    "description": "Fostering a growth mindset for continuous career growth.",
                    "likes": 220,
                    "comments": 39,
                    "views": 930,
                    "commentList": [
                      "The importance of continuous learning and self-improvement.",
                      "Cultivating resilience and adaptability in the professional sphere.",
                      "Inspirational stories of professionals embracing a growth mindset."
                    ],
                    "category": "Placements Club"
                  },
                  {
                    "title": "Remote Work: Navigating the Virtual Workspace",
                    "description": "Adapting to remote work culture and maximizing productivity.",
                    "likes": 200,
                    "comments": 36,
                    "views": 900,
                    "commentList": [
                      "Tips for staying productive and focused while working remotely.",
                      "Building effective communication and collaboration in remote teams.",
                      "Challenges and benefits of remote work."
                    ],
                    "category": "Placements Club"
                  }
              ],
              "finance": [
                {
                  "title": "Introduction to Personal Finance Management",
                  "description": "Fundamentals of managing personal finances and budgeting.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Budgeting tips and creating a financial plan.",
                    "Managing debt, savings, and investments.",
                    "Tools and apps for effective personal finance management."
                  ],
                  "category": "Finance Club"
                },
                {
                  "title": "Investment Strategies for Beginners",
                  "description": "Understanding different investment options and strategies.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Introduction to stocks, bonds, mutual funds, and ETFs.",
                    "Risk management and diversification in investments.",
                    "Long-term vs. short-term investment approaches."
                  ],
                  "category": "Finance Club"
                },
                {
                  "title": "Financial Markets Overview",
                  "description": "Exploring the functioning of financial markets.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Understanding stock exchanges, forex, and commodities markets.",
                    "Factors influencing market movements and volatility.",
                    "Impact of global events on financial markets."
                  ],
                  "category": "Finance Club"
                },
                {
                  "title": "Corporate Finance Essentials",
                  "description": "Fundamentals of finance within corporate structures.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Financial decision-making in corporations.",
                    "Capital structure, valuation, and risk management in firms.",
                    "Financial statements and analysis."
                  ],
                  "category": "Finance Club"
                },
                {
                  "title": "Fintech Innovations: Transforming Finance",
                  "description": "The impact of technology on financial services.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Emerging trends in financial technology.",
                    "Digital banking, cryptocurrencies, and blockchain innovations.",
                    "Challenges and opportunities in fintech."
                  ],
                  "category": "Finance Club"
                },{
                    "title": "Financial Planning for Retirement",
                    "description": "Strategies for planning and securing a comfortable retirement.",
                    "likes": 190,
                    "comments": 33,
                    "views": 880,
                    "commentList": [
                      "Investment options and retirement savings plans.",
                      "Calculating retirement needs and setting financial goals.",
                      "Transitioning from work life to retirement."
                    ],
                    "category": "Finance Club"
                  },
                  {
                    "title": "Venture Capital and Startup Funding",
                    "description": "Insights into venture capital investment and funding startups.",
                    "likes": 210,
                    "comments": 38,
                    "views": 920,
                    "commentList": [
                      "The role of venture capital in fostering entrepreneurship.",
                      "Venture capital funding process and evaluation criteria.",
                      "Success stories and challenges in startup funding."
                    ],
                    "category": "Finance Club"
                  },
                  {
                    "title": "International Finance and Global Markets",
                    "description": "Understanding finance in the context of global economies.",
                    "likes": 230,
                    "comments": 40,
                    "views": 950,
                    "commentList": [
                      "Foreign exchange markets and international trade finance.",
                      "Factors influencing global economic trends and policies.",
                      "Risk management in international finance."
                    ],
                    "category": "Finance Club"
                  },
                  {
                    "title": "Financial Regulations and Compliance",
                    "description": "Overview of financial regulations and compliance standards.",
                    "likes": 220,
                    "comments": 39,
                    "views": 930,
                    "commentList": [
                      "Understanding regulatory frameworks and compliance requirements.",
                      "Role of regulatory bodies and their impact on financial markets.",
                      "Challenges in maintaining compliance in finance."
                    ],
                    "category": "Finance Club"
                  },
                  {
                    "title": "Behavioral Economics and Financial Decision-Making",
                    "description": "Exploring human behavior's impact on financial choices.",
                    "likes": 200,
                    "comments": 36,
                    "views": 900,
                    "commentList": [
                      "Psychological biases influencing financial decisions.",
                      "Applications of behavioral economics in finance.",
                      "Strategies to overcome biases in financial planning."
                    ],
                    "category": "Finance Club"
                  }
              ],
              "design": [
                {
                  "title": "Fundamentals of Graphic Design",
                  "description": "Introduction to basic principles and elements of graphic design.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Understanding typography, color theory, and layout design.",
                    "Applying design principles in creating impactful visuals.",
                    "Tools and software for graphic design."
                  ],
                  "category": "Design Club"
                },
                {
                  "title": "User Interface (UI) Design Essentials",
                  "description": "Principles and best practices in designing user interfaces.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Creating intuitive and user-friendly interfaces.",
                    "Designing for different devices and user interactions.",
                    "UI design trends and case studies."
                  ],
                  "category": "Design Club"
                },
                {
                  "title": "The Art of UX (User Experience) Design",
                  "description": "Understanding the importance of user experience in design.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Crafting seamless and engaging user experiences.",
                    "User research, prototyping, and usability testing.",
                    "Design thinking methodologies."
                  ],
                  "category": "Design Club"
                },
                {
                  "title": "Web Design Trends and Innovations",
                  "description": "Exploring modern trends and innovations in web design.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Responsive design, animations, and micro-interactions.",
                    "Incorporating storytelling and visual hierarchy in web design.",
                    "Accessible and inclusive web design practices."
                  ],
                  "category": "Design Club"
                },
                {
                  "title": "Motion Graphics and Animation in Design",
                  "description": "Using motion to enhance visual storytelling in design.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Creating captivating motion graphics and animations.",
                    "Tools, software, and techniques for motion design.",
                    "Applications of motion graphics in various industries."
                  ],
                  "category": "Design Club"
                },
                {
                    "title": "Product Design Principles",
                    "description": "Guidelines for designing successful and user-centric products.",
                    "likes": 190,
                    "comments": 33,
                    "views": 880,
                    "commentList": [
                      "Balancing aesthetics and functionality in product design.",
                      "Iterative design processes: prototyping and user feedback.",
                      "Case studies of innovative product designs."
                    ],
                    "category": "Design Club"
                  },
                  {
                    "title": "Branding and Identity Design",
                    "description": "Developing strong brand identities through design.",
                    "likes": 210,
                    "comments": 38,
                    "views": 920,
                    "commentList": [
                      "Creating brand visuals, logos, and brand guidelines.",
                      "Maintaining consistency in brand communication.",
                      "Successful brand redesigns and rebranding strategies."
                    ],
                    "category": "Design Club"
                  },
                  {
                    "title": "Spatial Design and Architecture",
                    "description": "Exploring design in physical spaces and architecture.",
                    "likes": 230,
                    "comments": 40,
                    "views": 950,
                    "commentList": [
                      "Principles of spatial design and environmental aesthetics.",
                      "Innovations and sustainable practices in architectural design.",
                      "Influence of design on user experience in physical spaces."
                    ],
                    "category": "Design Club"
                  },
                  {
                    "title": "Illustration and Visual Storytelling",
                    "description": "Using illustration for visual storytelling and communication.",
                    "likes": 220,
                    "comments": 39,
                    "views": 930,
                    "commentList": [
                      "Different styles and techniques in illustration.",
                      "Illustration in editorial design, advertising, and digital media.",
                      "Conveying narratives through visual storytelling."
                    ],
                    "category": "Design Club"
                  },
                  {
                    "title": "Design Ethics and Inclusivity",
                    "description": "Exploring ethical considerations and inclusivity in design.",
                    "likes": 200,
                    "comments": 36,
                    "views": 900,
                    "commentList": [
                      "Addressing diversity, accessibility, and ethical responsibilities in design.",
                      "Ethical dilemmas in design decisions.",
                      "Promoting inclusivity through design solutions."
                    ],
                    "category": "Design Club"
                  }
              ],
              "product": [
                {
                  "title": "Product Management Fundamentals",
                  "description": "Introduction to the core concepts of product management.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Roles and responsibilities of a product manager.",
                    "Understanding the product lifecycle.",
                    "Tools and methodologies used in product management."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Product Roadmapping Strategies",
                  "description": "Creating and managing effective product roadmaps.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Prioritizing features and defining product goals.",
                    "Communicating roadmap plans across teams.",
                    "Adapting roadmaps to evolving market needs."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "User-Centered Design in Product Development",
                  "description": "Applying user-centered design principles in product creation.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Conducting user research and creating user personas.",
                    "Prototyping and iterative design based on user feedback.",
                    "Balancing user needs with business objectives."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Product Metrics and Analytics",
                  "description": "Utilizing metrics to measure and improve product performance.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Identifying key performance indicators (KPIs) for products.",
                    "Interpreting data to make informed product decisions.",
                    "Using analytics to iterate and optimize products."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Agile Product Development Practices",
                  "description": "Implementing Agile methodologies in product development.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Scrum, Kanban, and other Agile frameworks.",
                    "Sprints, stand-ups, and Agile team collaboration.",
                    "Benefits and challenges of Agile in product management."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Product Prototyping and MVP Development",
                  "description": "Creating prototypes and minimum viable products (MVPs) for validation.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Tools and methods for rapid prototyping.",
                    "Iterative development and testing of MVPs.",
                    "Validating product ideas with real user feedback."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Product Marketing Strategies",
                  "description": "Crafting effective marketing strategies for product launches.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Identifying target markets and positioning products.",
                    "Creating compelling product messaging and campaigns.",
                    "Measuring marketing effectiveness and ROI."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Innovation and Ideation in Product Development",
                  "description": "Fostering creativity and generating innovative product ideas.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "Techniques for brainstorming and ideation.",
                    "Encouraging a culture of innovation within teams.",
                    "Transforming ideas into actionable product concepts."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Product Launch and Go-to-Market Strategies",
                  "description": "Planning successful product launches and market entry.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "Developing go-to-market (GTM) strategies.",
                    "Coordination between product, marketing, and sales teams.",
                    "Post-launch evaluation and iteration."
                  ],
                  "category": "Product Club"
                },
                {
                  "title": "Scaling Products and Growth Strategies",
                  "description": "Strategies for scaling products and achieving sustainable growth.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Managing growth challenges and scaling infrastructure.",
                    "Expansion strategies and entering new markets.",
                    "Balancing growth with maintaining product quality."
                  ],
                  "category": "Product Club"
                }
              ],
              "marketing": [
                {
                  "title": "Digital Marketing Strategies",
                  "description": "Overview of digital marketing channels and strategies.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Social media marketing, SEO, PPC, and email marketing.",
                    "Creating effective digital marketing campaigns.",
                    "Measuring ROI in digital marketing."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Content Marketing Best Practices",
                  "description": "Strategies for creating and distributing valuable content.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Developing engaging and shareable content.",
                    "Content distribution across different platforms.",
                    "Content metrics and performance analysis."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Brand Management and Positioning",
                  "description": "Crafting and managing brand identity and positioning.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Building brand equity and brand consistency.",
                    "Brand perception and brand differentiation.",
                    "Rebranding strategies and case studies."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Marketing Analytics and Data-driven Insights",
                  "description": "Utilizing data for marketing decisions and optimizations.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Interpreting marketing data and analytics tools.",
                    "Segmentation, targeting, and personalization using data.",
                    "Data-driven strategies for marketing success."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Social Media Marketing Trends",
                  "description": "Current trends and innovations in social media marketing.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Emerging platforms, features, and influencer marketing.",
                    "Effective engagement and community building on social media.",
                    "Measuring social media ROI and performance."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Influencer Marketing Strategies",
                  "description": "Strategies for collaborating with influencers for brand promotion.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Identifying and partnering with relevant influencers.",
                    "Negotiating terms and executing influencer marketing campaigns.",
                    "Measuring the impact of influencer collaborations."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Email Marketing Essentials",
                  "description": "Best practices and strategies for effective email marketing.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Building subscriber lists and crafting compelling emails.",
                    "Segmentation, personalization, and automation in email marketing.",
                    "Analyzing email campaign performance and metrics."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Customer Relationship Management (CRM)",
                  "description": "Strategies for managing and nurturing customer relationships.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "Implementing CRM systems and customer journey mapping.",
                    "Personalizing customer experiences and retention strategies.",
                    "Leveraging data for better CRM practices."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Event Marketing and Experiential Campaigns",
                  "description": "Strategies for planning and executing successful events.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "Planning and promoting events to engage target audiences.",
                    "Creating memorable experiences and brand activations.",
                    "Measuring event success and post-event analysis."
                  ],
                  "category": "Marketing Club"
                },
                {
                  "title": "Marketing Strategy Development",
                  "description": "Developing comprehensive marketing strategies for businesses.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Market analysis, SWOT, and setting marketing objectives.",
                    "Developing effective marketing plans and tactics.",
                    "Evaluating and adapting marketing strategies."
                  ],
                  "category": "Marketing Club"
                }
              ],
              "photography": [
                {
                  "title": "Introduction to Photography: Basics and Techniques",
                  "description": "Fundamentals of photography and essential techniques.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Understanding exposure, composition, and lighting.",
                    "Different types of photography: portrait, landscape, macro, etc.",
                    "Choosing the right gear and camera settings."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Mastering Composition in Photography",
                  "description": "Techniques to enhance composition and visual storytelling.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Rule of thirds, leading lines, framing, and symmetry.",
                    "Balancing elements and creating impactful compositions.",
                    "Studying composition in famous photographs."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Understanding Light and Exposure in Photography",
                  "description": "Exploring the role of light and exposure in photography.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Natural light vs. artificial light sources.",
                    "Exposure triangle: aperture, shutter speed, ISO.",
                    "Controlling and manipulating light for desired effects."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Portrait Photography: Capturing Expressions",
                  "description": "Techniques for capturing compelling portraits.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Posing, framing, and composition in portrait photography.",
                    "Working with natural light and studio lighting for portraits.",
                    "Expressive portrait photography tips."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Landscape Photography: Capturing Nature's Beauty",
                  "description": "Tips and tricks for stunning landscape photography.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Scouting locations and timing for landscape shots.",
                    "Utilizing different lenses and filters in landscape photography.",
                    "Post-processing techniques for enhancing landscapes."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Macro Photography: Exploring the Details",
                  "description": "Capturing intricate details with macro photography.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Choosing the right equipment and settings for macro shots.",
                    "Finding subjects and composition in macro photography.",
                    "Post-processing to enhance macro photographs."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Street Photography: Capturing Everyday Life",
                  "description": "Exploring the art of capturing moments in street photography.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Techniques for candid and storytelling street photography.",
                    "Dealing with challenges and ethics in street photography.",
                    "Editing and presenting street photographs."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Night Photography: Capturing the Night Sky",
                  "description": "Tips and techniques for captivating night photography.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "Long exposures and capturing cityscapes at night.",
                    "Astrophotography and capturing stars, galaxies, and the Milky Way.",
                    "Post-processing for enhancing night photographs."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Travel Photography: Documenting Adventures",
                  "description": "Capturing memorable moments during travels.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "Tips for photographing landscapes, cultures, and people while traveling.",
                    "Packing and protecting photography gear for travel.",
                    "Editing and showcasing travel photographs."
                  ],
                  "category": "Photography Club"
                },
                {
                  "title": "Wildlife Photography: Capturing Nature's Wonders",
                  "description": "Techniques for capturing wildlife in its natural habitat.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Choosing the right equipment and settings for wildlife shots.",
                    "Approaches to wildlife photography and ethical considerations.",
                    "Post-processing techniques for wildlife photographs."
                  ],
                  "category": "Photography Club"
                }
              ],
              "anime": [
                {
                  "title": "Anime Recommendations for Beginners",
                  "description": "Introduction to anime for newcomers with recommended series.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Popular starter anime for different genres.",
                    "Understanding anime themes and storytelling.",
                    "Getting started with anime streaming platforms."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Exploring Different Anime Genres",
                  "description": "Diving into various genres and their characteristics in anime.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Shonen, Shojo, Seinen, and other anime genres explained.",
                    "Identifying genres based on themes and target audiences.",
                    "Recommendations for notable series in each genre."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Understanding Anime Production and Industry",
                  "description": "Insights into the anime production process and industry.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Anime studios, directors, and key figures in the industry.",
                    "Overview of the production stages: from concept to airing.",
                    "Challenges and trends in the anime industry."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Classic Anime: Timeless Favorites",
                  "description": "Exploring iconic and classic anime series and films.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Timeless anime that shaped the industry.",
                    "Appreciating the significance of classic anime.",
                    "Recommendations for must-watch classic anime."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Character Analysis and Archetypes",
                  "description": "Understanding character tropes and archetypes in anime.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Common character archetypes in anime.",
                    "Exploring character development and tropes.",
                    "Examples of popular character archetypes."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Fandom and Community Engagement",
                  "description": "Engaging with the anime community and fandom.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Participating in anime forums and fan communities.",
                    "Attending anime conventions and events.",
                    "Connecting with fellow anime enthusiasts."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Soundtracks and Music in Anime",
                  "description": "Exploring the significance of music and soundtracks in anime.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Iconic anime soundtracks and their impact.",
                    "Music genres and themes in different anime series.",
                    "Composers and artists behind popular anime music."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Adaptations: From Manga to Screen",
                  "description": "Comparing anime adaptations to their original manga sources.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "Differences and similarities between anime and manga.",
                    "Effectiveness of adapting manga into anime.",
                    "Notable adaptations and their reception."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Crossovers and Collaborations",
                  "description": "Exploring collaborations and crossovers in the anime world.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "Crossover events, special episodes, and collaborations.",
                    "Impact of crossovers on different anime series.",
                    "Fan reception and reactions to anime crossovers."
                  ],
                  "category": "Anime Club"
                },
                {
                  "title": "Anime Movie Nights and Watch Parties",
                  "description": "Organizing and hosting anime movie nights and watch parties.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Planning and inviting attendees to anime watch parties.",
                    "Curating movie lists for themed anime nights.",
                    "Engaging activities and discussions during watch parties."
                  ],
                  "category": "Anime Club"
                }
              ],
              "meme": [
                {
                  "title": "Introduction to Memes",
                  "description": "Understanding the history and culture of internet memes.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Evolution of memes from internet forums to social media.",
                    "Notable meme trends and their impact.",
                    "Memes in pop culture and society."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Popular Memes of the Decade",
                  "description": "Exploring the most viral and iconic memes from recent years.",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Compilation of popular memes from different periods.",
                    "Analyzing the longevity and relevance of memes.",
                    "The influence of social media platforms on meme popularity."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Creating Memes: Tools and Techniques",
                  "description": "Tips and tricks for making engaging and humorous memes.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Meme generators, editing software, and apps.",
                    "Understanding meme formats and templates.",
                    "Humor and creativity in meme creation."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Meme Culture and Online Communities",
                  "description": "Exploring the community aspect and culture surrounding memes.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Communities on Reddit, 4chan, and other platforms.",
                    "Inside jokes and subcultures within meme communities.",
                    "Meme etiquette and online trends."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Niche Memes and Subgenres",
                  "description": "Diving into specialized and niche meme categories.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Niche memes related to specific interests or communities.",
                    "Understanding subgenres and their unique humor.",
                    "The spread of niche memes across different platforms."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Memes in Advertising and Branding",
                  "description": "Exploring the use of memes in marketing and branding.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Successful meme-based marketing campaigns.",
                    "Challenges and risks of using memes in advertising.",
                    "Consumer reactions and reception to meme-based ads."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Meme Review and Analysis",
                  "description": "Analyzing and critiquing trending memes and meme formats.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Deconstructing meme formats and their humor.",
                    "Critiques of viral memes and their impact.",
                    "Predicting meme trends and their life cycles."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Memes and Humor Psychology",
                  "description": "Understanding the psychology of humor through memes.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "The science behind what makes memes funny.",
                    "Psychological factors influencing meme reception.",
                    "Cultural differences in meme humor."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Meme Ethics and Responsible Sharing",
                  "description": "Discussing ethics and responsible behavior in meme sharing.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "Ethical considerations when sharing memes.",
                    "Addressing offensive or sensitive content in memes.",
                    "Promoting positive and respectful meme culture."
                  ],
                  "category": "Meme Club"
                },
                {
                  "title": "Future of Memes and Memetic Culture",
                  "description": "Speculating on the future evolution of memes and their impact.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Trends in meme creation and consumption.",
                    "Emerging platforms and technologies for memes.",
                    "The role of memes in shaping digital culture."
                  ],
                  "category": "Meme Club"
                }
              ],
              "mba": [
                {
                  "title": "Choosing the Right MBA Program",
                  "description": "Factors to consider when selecting an MBA program.",
                  "likes": 150,
                  "comments": 25,
                  "views": 800,
                  "commentList": [
                    "Types of MBA programs: full-time, part-time, online, etc.",
                    "Selecting based on specialization and career goals.",
                    "Researching rankings, accreditations, and program structures."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "GMAT Preparation Strategies",
                  "description": "Preparing for the GMAT (Graduate Management Admission Test).",
                  "likes": 180,
                  "comments": 30,
                  "views": 850,
                  "commentList": [
                    "Studying tips and resources for GMAT preparation.",
                    "Practice tests and time management strategies.",
                    "GMAT scores and their significance in MBA admissions."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "MBA Specializations and Concentrations",
                  "description": "Exploring various MBA specializations and their relevance.",
                  "likes": 160,
                  "comments": 28,
                  "views": 820,
                  "commentList": [
                    "Popular specializations: finance, marketing, HR, etc.",
                    "Choosing a specialization aligned with career aspirations.",
                    "Future job prospects in different MBA concentrations."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Case Study Analysis in MBA Programs",
                  "description": "Understanding the significance of case studies in MBA education.",
                  "likes": 200,
                  "comments": 35,
                  "views": 900,
                  "commentList": [
                    "Approaches to analyzing and presenting case studies.",
                    "Learning from real-world business scenarios.",
                    "Effective case study discussion and problem-solving."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Networking and Building Connections in MBA",
                  "description": "The importance of networking during and after MBA studies.",
                  "likes": 170,
                  "comments": 32,
                  "views": 830,
                  "commentList": [
                    "Networking events, alumni associations, and industry connections.",
                    "Leveraging networking for career opportunities.",
                    "Developing strong relationships within the MBA community."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Leadership Skills Development",
                  "description": "Developing leadership qualities during MBA programs.",
                  "likes": 190,
                  "comments": 33,
                  "views": 880,
                  "commentList": [
                    "Courses, workshops, and exercises focused on leadership.",
                    "Case studies highlighting effective leadership strategies.",
                    "Applying leadership skills in real-world scenarios."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Entrepreneurship and Innovation in MBA",
                  "description": "Exploring entrepreneurship and innovation within MBA education.",
                  "likes": 210,
                  "comments": 38,
                  "views": 920,
                  "commentList": [
                    "Courses and resources for aspiring entrepreneurs.",
                    "Developing business ideas and startup ventures.",
                    "MBA's role in fostering an entrepreneurial mindset."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "MBA Internships and Practical Experience",
                  "description": "The significance of internships and practical exposure in MBA programs.",
                  "likes": 230,
                  "comments": 40,
                  "views": 950,
                  "commentList": [
                    "Securing internships and their impact on career advancement.",
                    "Learning opportunities during internship experiences.",
                    "Applying classroom knowledge to real business settings."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Global Perspectives in MBA Education",
                  "description": "Understanding global business perspectives in MBA programs.",
                  "likes": 220,
                  "comments": 39,
                  "views": 930,
                  "commentList": [
                    "International collaborations, study tours, and cross-cultural experiences.",
                    "Adapting business strategies in different global contexts.",
                    "The value of diverse perspectives in MBA learning."
                  ],
                  "category": "MBA Club"
                },
                {
                  "title": "Post-MBA Career Paths and Opportunities",
                  "description": "Exploring career paths and opportunities after completing an MBA.",
                  "likes": 200,
                  "comments": 36,
                  "views": 900,
                  "commentList": [
                    "Job markets, industries, and roles for MBA graduates.",
                    "Career guidance and support from MBA programs.",
                    "Transitioning from MBA studies to professional careers."
                  ],
                  "category": "MBA Club"
                }
              ]
        }
      

      return NextResponse.json(posts)
}