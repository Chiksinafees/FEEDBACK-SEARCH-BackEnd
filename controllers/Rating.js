const Feedback = require("../models/CompanyRating");

exports.createFeedback = async (req, res) => {
  try {
    const { companyName, pros, cons, rating } = req.body;
    const feedback = await Feedback.create({ companyName, pros, cons, rating });
    res.status(201).json(feedback);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll();
    res.status(200).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
