import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const submissions = await prisma.contactSubmission.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Failed to fetch contact submissions:', error);
      res.status(500).json({ error: 'Failed to fetch contact submissions' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}