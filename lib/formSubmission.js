export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function saveFormSubmission(formType, data) {
  try {
    // Generate a unique ID for the submission
    const submissionId = `${formType}_${Date.now()}`;
    
    // Retrieve existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(
      localStorage.getItem('a_little_god_time_submissions') || '[]'
    );

    // Add new submission
    const newSubmission = {
      id: submissionId,
      ...data,
      timestamp: new Date().toISOString()
    };

    existingSubmissions.push(newSubmission);

    // Save updated submissions
    localStorage.setItem(
      'a_little_god_time_submissions', 
      JSON.stringify(existingSubmissions)
    );

    // Optional: Log to console (replace with actual backend submission in production)
    console.log(`${formType} submission saved:`, newSubmission);

    return {
      success: true,
      message: 'Submission received successfully.',
      submissionId
    };
  } catch (error) {
    console.error('Submission error:', error);
    return {
      success: false,
      message: 'Unable to save submission. Please try again.'
    };
  }
}

export function getSubmissions(formType) {
  try {
    const submissions = JSON.parse(
      localStorage.getItem('a_little_god_time_submissions') || '[]'
    );

    return submissions.filter(submission => 
      submission.id.startsWith(`${formType}_`)
    );
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    return [];
  }
}
