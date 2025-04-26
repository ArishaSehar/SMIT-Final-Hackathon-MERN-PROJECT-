import Salary from '../models/Salary.js';

export const getSalaryDetails = async (req, res) => {
  try {
    const salary = await Salary.find({ user: req.user.id });
    res.json(salary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
