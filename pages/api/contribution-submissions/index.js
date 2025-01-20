import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const submissions = await prisma.contributionSubmission.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });
      res.status(200).json(submissions);
    } catch (error) {
      console.error('Failed to fetch contribution submissions:', error);
      res.status(500).json({ error: 'Failed to fetch contribution submissions' });
    }
  } else if (req.method === 'POST') {
    const { title, author, content } = req.body;
    try {
      const submission = await prisma.contributionSubmission.create({
        data: {
          title,
          author,
          content,
          isResolved: false
        }
      });
      res.status(201).json(submission);
    } catch (error) {
      console.error('Failed to create contribution submission:', error);
      res.status(500).json({ error: 'Failed to create contribution submission' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}