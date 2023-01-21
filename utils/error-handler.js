const errorHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((error) => {
    if (error && error.code && error.message) {
      return res
        .status(error.code)
        .json({ message: error.message.toString(), result: error.data });
    } else {
      return res.status(500).json({
        message: error.toString(),
        result: null,
      });
    }
  });

module.exports = { errorHandler };
