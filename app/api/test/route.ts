import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('🔍 Test API: Environment variables check');
    console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
    console.log('NEXT_PUBLIC_API_KEY exists:', !!process.env.NEXT_PUBLIC_API_KEY);
    
    return NextResponse.json({
      success: true,
      environment: {
        mongoUri: !!process.env.MONGO_URI,
        apiKey: !!process.env.NEXT_PUBLIC_API_KEY,
        nodeEnv: process.env.NODE_ENV
      },
      message: 'Test API working'
    });
  } catch (error) {
    console.error('❌ Test API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Test API failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}