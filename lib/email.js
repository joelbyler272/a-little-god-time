import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendWelcomeEmail = async (email, name) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Welcome to A Little God Time',
    templateId: process.env.SENDGRID_WELCOME_TEMPLATE_ID,
    dynamicTemplateData: {
      name: name || 'Friend',
    },
  }

  try {
    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Error sending welcome email:', error)
    return false
  }
}

export const sendDailyDevotional = async (subscribers, devotional) => {
  const messages = subscribers.map(subscriber => ({
    to: subscriber.email,
    from: process.env.FROM_EMAIL,
    subject: `Today's Devotional: ${devotional.title}`,
    templateId: process.env.SENDGRID_DAILY_TEMPLATE_ID,
    dynamicTemplateData: {
      name: subscriber.name || 'Friend',
      title: devotional.title,
      scripture: devotional.scripture,
      reference: devotional.reference,
      excerpt: devotional.excerpt,
      link: `${process.env.NEXT_PUBLIC_URL}/devotional/${devotional.slug}`
    },
  }))

  try {
    await sgMail.send(messages)
    return true
  } catch (error) {
    console.error('Error sending daily devotionals:', error)
    return false
  }
}

export const sendContributorNotification = async (email, devotional) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Your Devotional Has Been Published!',
    templateId: process.env.SENDGRID_CONTRIBUTOR_TEMPLATE_ID,
    dynamicTemplateData: {
      title: devotional.title,
      link: `${process.env.NEXT_PUBLIC_URL}/devotional/${devotional.slug}`
    },
  }

  try {
    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Error sending contributor notification:', error)
    return false
  }
}

export const sendPasswordReset = async (email, token) => {
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Reset Your Password - A Little God Time',
    templateId: process.env.SENDGRID_RESET_TEMPLATE_ID,
    dynamicTemplateData: {
      resetLink: `${process.env.NEXT_PUBLIC_URL}/auth/reset-password?token=${token}`
    },
  }

  try {
    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Error sending password reset email:', error)
    return false
  }
}

export const sendCommentNotification = async (authorEmail, devotionalTitle, commenterName) => {
  const msg = {
    to: authorEmail,
    from: process.env.FROM_EMAIL,
    subject: 'New Comment on Your Devotional',
    templateId: process.env.SENDGRID_COMMENT_TEMPLATE_ID,
    dynamicTemplateData: {
      devotionalTitle,
      commenterName
    },
  }

  try {
    await sgMail.send(msg)
    return true
  } catch (error) {
    console.error('Error sending comment notification:', error)
    return false
  }
}