import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();
    
    // Here you would typically integrate with an email service
    // For now, we'll just log the data and return a success response
    console.log('Email submission:', { email, subject, message });
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 