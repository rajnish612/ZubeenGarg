import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Tribute from '@/models/Tribute';

// GET - Fetch tributes with pagination
export async function GET(request: NextRequest) {
  try {
    console.log('🔍 API Route: Starting tribute fetch...');
    console.log('🔍 Environment check - MONGO_URI exists:', !!process.env.MONGO_URI);
    console.log('🔍 Tribute model imported:', !!Tribute);
    
    console.log('🔍 Attempting database connection...');
    await dbConnect();
    console.log('✅ Database connected successfully');
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    console.log(`🔍 Query params - Page: ${page}, Limit: ${limit}, Skip: ${skip}`);

    // Get tributes sorted by creation date (latest first)
    console.log('🔍 Fetching tributes from database...');
    const tributes = await Tribute.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    console.log(`✅ Found ${tributes.length} tributes`);

    // Get total count for pagination
    console.log('🔍 Getting total count...');
    const total = await Tribute.countDocuments();
    console.log(`✅ Total tributes: ${total}`);
    
    const totalPages = Math.ceil(total / limit);
    const hasMore = page < totalPages;

    const response = {
      success: true,
      data: {
        tributes,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasMore
        }
      }
    };

    console.log('✅ Sending response:', JSON.stringify(response, null, 2));
    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ Error in tribute API:', error);
    console.error('❌ Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      name: error instanceof Error ? error.name : 'Unknown error type'
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch tributes',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST - Add new tribute
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, location, message, messageAssamese } = body;

    // Validation
    if (!name || !location || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name, location, and message are required' 
        },
        { status: 400 }
      );
    }

    // Create new tribute
    const tribute = await Tribute.create({
      name: name.trim(),
      location: location.trim(),
      message: message.trim(),
      messageAssamese: messageAssamese?.trim() || undefined
    });

    return NextResponse.json({
      success: true,
      data: tribute
    }, { status: 201 });

  } catch (error: unknown) {
    console.error('Error creating tribute:', error);
    
    // Handle validation errors
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation error',
          details: error.message
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create tribute' 
      },
      { status: 500 }
    );
  }
}