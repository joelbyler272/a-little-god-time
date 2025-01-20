import { PrismaClient } from '@prisma/client';

// Create a single PrismaClient instance
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { 
        title, 
        author, 
        content, 
        scripture, 
        category, 
        isPublished 
      } = req.body;

      // Log the incoming request data
      console.log('Received devotional data:', {
        title,
        author,
        content,
        scripture,
        category,
        isPublished
      });

      const newDevotional = await prisma.devotional.create({
        data: {
          title,
          author,
          content,
          scripture: scripture || null,
          category: category || null,
          isPublished: Boolean(isPublished)
        }
      });

      console.log('Created devotional:', newDevotional);
      res.status(201).json(newDevotional);
    } catch (error) {
      console.error('Detailed error:', {
        message: error.message,
        code: error.code,
        meta: error.meta
      });
      res.status(500).json({ error: 'Error creating devotional', details: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const devotionals = await prisma.devotional.findMany({
        where: { isPublished: true },
        orderBy: { date: 'desc' }
      });

      res.status(200).json(devotionals);
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error fetching devotionals' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}