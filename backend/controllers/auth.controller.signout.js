export const signout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Signed out successfully",
  });
};
