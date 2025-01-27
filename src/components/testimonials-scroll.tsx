'use client'
import { useEffect, useState } from 'react';
import { Testimonial } from '@/types/testimonial';

export function TestimonialsScroll() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Replace with your published Google Sheet URL
        const SHEET_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdV5MmyOEptPSxS1Fgspyf_ZBk3Cw3JqEqG1CRrDWwLpnd3_Q/viewform";
        const response = await fetch(SHEET_URL);
        const data = await response.json();
        
        const formattedData = data.values.slice(1).map((row: any[]) => ({
          Timestamp: row[0],
          Name: row[1],
          Grade: row[2],
          Feedback: row[3]
        }));

        setTestimonials(formattedData);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <div className="relative overflow-hidden mt-8">
      <div className="flex animate-scroll gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex-none w-80 bg-card p-6 rounded-lg shadow-sm"
          >
            <p className="text-muted-foreground mb-4">{testimonial.Feedback}</p>
            <div className="mt-4">
              <p className="font-medium">{testimonial.Name}</p>
              <p className="text-sm text-primary">{testimonial.Grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}