import mongoose from 'mongoose';

if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

const MONGO_URI = process.env.MONGO_URI;

interface GlobalMongoose {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

declare global {
  var mongoose: GlobalMongoose['mongoose'] | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  console.log('🔍 dbConnect: Starting connection process...');
  
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    console.log('✅ dbConnect: Using existing connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔍 dbConnect: Creating new connection promise...');
    console.log('🔍 dbConnect: MONGO_URI exists:', !!MONGO_URI);
    console.log('🔍 dbConnect: MONGO_URI preview:', MONGO_URI.substring(0, 20) + '...');
    
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      console.log('✅ dbConnect: MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    console.log('🔍 dbConnect: Awaiting connection...');
    cached.conn = await cached.promise;
    console.log('✅ dbConnect: Connection established');
  } catch (e) {
    console.error('❌ dbConnect: Connection failed:', e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;