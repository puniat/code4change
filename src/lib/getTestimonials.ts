import { Testimonial } from '@/types/testimonial';

const GOOGLE_SHEET_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdn4MSiPLaICb8ZDGLWrq8XClqPsgVRVFk3b85-psGrGlECJg/viewform';

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(GOOGLE_SHEET_URL);
    const data = await response.json();
    
    return data.map((row: any) => ({
      name: row['Name'],
      grade: row['Grade'],
      course: row['Course'],
      text: row['Feedback'],
      date: new Date(row['Timestamp']).toLocaleDateString()
    }));
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
}