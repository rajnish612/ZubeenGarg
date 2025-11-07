import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Tribute from '@/models/Tribute';

// GET - Fetch tributes with pagination
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Get tributes sorted by creation date (latest first)
    const tributes = await Tribute.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Tribute.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const hasMore = page < totalPages;

    return NextResponse.json({
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
    });

  } catch (error) {
    console.error('Error fetching tributes:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch tributes' 
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