import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

      const newDevotional = await prisma.devotional.create({
        data: {
          title,
          author,
          content,
          scripture,
          category,
          isPublished: isPublished || true
        }
      });

      res.status(201).json(newDevotional);
    } catch (error) {
      console.error('Request error', error);
      res.status(500).json({ error: 'Error creating devotional' });
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
