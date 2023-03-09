// @desc    Auth user
// @route   POST /api/auth/login
// @access  Public

export const authUser = async (reg, res) => {
  res.json({ message: "You are authenticated" });
};
