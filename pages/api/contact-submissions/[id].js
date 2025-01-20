import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PATCH') {
    try {
      const submission = await prisma.contactSubmission.update({
        where: { id },
        data: {
          isResolved: req.body.isResolved
        }
      });
      res.status(200).json(submission);
    } catch (error) {
      console.error('Failed to update contact submission:', error);
      res.status(500).json({ error: 'Failed to update contact submission' });
    }
  } else {
    res.setHeader('Allow', ['PATCH']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}