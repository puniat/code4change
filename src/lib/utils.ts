import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function submitToGoogleForm(data: {
  name: string;
  grade: string;
  feedback: string;
}) {
  // Replace with your actual Google Form URL
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdn4MSiPLaICb8ZDGLWrq8XClqPsgVRVFk3b85-psGrGlECJg/formResponse';
  
  const formData = new URLSearchParams({
    'entry.1879701440': data.name,     // Replace with your name field ID
    'entry.666694634': data.grade,    // Replace with your grade field ID
    'entry.1354208415': data.feedback  // Replace with your feedback field ID
  });

  try {
    const response = await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });
    
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
}
