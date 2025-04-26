import mongoose from 'mongoose';

const attendanceSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  checkIn: Date,
  checkOut: Date,
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);
