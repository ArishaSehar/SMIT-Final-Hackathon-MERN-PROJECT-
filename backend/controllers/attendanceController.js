import Attendance from '../models/Attendance.js';

export const checkIn = async (req, res) => {
  try {
    const attendance = new Attendance({ user: req.user.id, checkIn: new Date() });
    await attendance.save();
    res.json({ message: 'Checked In Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkOut = async (req, res) => {
  try {
    const attendance = await Attendance.findOne({ user: req.user.id, checkOut: null });
    if (!attendance) return res.status(400).json({ message: 'No active check-in found' });

    attendance.checkOut = new Date();
    await attendance.save();
    res.json({ message: 'Checked Out Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
