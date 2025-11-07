import mongoose, { Schema, Document } from 'mongoose';

export interface ITribute extends Document {
  name: string;
  location: string;
  message: string;
  messageAssamese?: string;
  createdAt: Date;
}

const TributeSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  messageAssamese: {
    type: String,
    trim: true,
    maxlength: [1000, 'Assamese message cannot exceed 1000 characters']
  }
}, {
  timestamps: true
});

// Create index for sorting by creation date (latest first)
TributeSchema.index({ createdAt: -1 });

export default mongoose.models.Tribute || mongoose.model<ITribute>('Tribute', TributeSchema);