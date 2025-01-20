// Mock data - In production, this would come from a database
const devotionals = [
  {
    id: 1,
    title: "Finding Peace in His Presence",
    date: "2025-01-20",
    scripture: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    content: `In our fast-paced world, finding moments of true peace can seem like an impossible task. Our days are filled with endless notifications, deadlines, and responsibilities that constantly demand our attention. Yet, in the midst of this chaos, God extends a gentle invitation to find rest in His presence.

When Jesus spoke these words, He wasn't just offering a temporary respite from physical tiredness. He was extending an invitation to experience deep, soul-level rest that can only come from connecting with our Creator. This rest isn't about escaping our responsibilities or finding a quiet corner to hide away; it's about finding peace in the midst of our daily lives.

Take a moment to consider: What burdens are you carrying today? What's making you feel weary? Jesus invites you to bring these to Him. Sometimes we hold onto our struggles, thinking we need to figure everything out on our own. But true rest comes when we surrender our burdens to Him and trust in His perfect timing and plan.

Prayer:
Dear Heavenly Father, thank you for your invitation to find rest in your presence. Help me to release my burdens to you and trust in your perfect plan. Teach me to find moments of peace throughout my day by turning my thoughts to you. Give me the wisdom to prioritize time with you and the courage to let go of the things that weigh me down. In Jesus' name, Amen.

Today's Practice:
Set aside 5 minutes today to simply be still in God's presence. Find a quiet place, take a few deep breaths, and focus on this verse. What burdens can you release to Him today? Write them down as a symbolic act of surrendering them to God.`,
    excerpt: "In our fast-paced world, finding moments of true peace can seem like an impossible task...",
    slug: "finding-peace-in-his-presence",
    author: {
      name: "Sarah Johnson",
      bio: "Sarah is a writer and ministry leader passionate about helping others find peace in God's presence."
    },
    themes: ["Peace", "Rest", "God's Presence"]
  },
  // Add more devotionals here
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { page = 1, limit = 10, theme, search } = req.query
    
    let filteredDevotionals = [...devotionals]
    
    // Filter by theme
    if (theme) {
      filteredDevotionals = filteredDevotionals.filter(d => 
        d.themes.includes(theme)
      )
    }
    
    // Search functionality
    if (search) {
      const searchLower = search.toLowerCase()
      filteredDevotionals = filteredDevotionals.filter(d => 
        d.title.toLowerCase().includes(searchLower) ||
        d.content.toLowerCase().includes(searchLower) ||
        d.scripture.toLowerCase().includes(searchLower)
      )
    }
    
    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const totalPages = Math.ceil(filteredDevotionals.length / limit)
    
    const paginatedDevotionals = filteredDevotionals.slice(startIndex, endIndex)
    
    res.status(200).json({
      devotionals: paginatedDevotionals,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems: filteredDevotionals.length
      }
    })
  } else if (req.method === 'POST') {
    // This would handle creating new devotionals
    // Add authentication check here
    res.status(401).json({ message: 'Not authenticated' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}