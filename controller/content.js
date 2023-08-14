const asyncHandler = require("../middleware/asyncHandler");
const mongoose = require("mongoose");
const Content = require("../model/contentModel");
exports.newContent = async (req, res, next) => {
  try {
    const newContent = await Content.create(req.body);
    res.send({
      success: true,
      newContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.GetAllContent = async (req, res, next) => {
  try {
    const allContent = await Content.find();
    res.status(200).json({
      success: true,
      allContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.updateContent = async (req, res, next) => {
  try {
    const updateContent = await Content.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        image: req.file.filename,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      updateContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.deleteContent = async (req, res, next) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      deletedContent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
// exports.ddeleteContent = asyncHandler(async (req, res, next) => {
//   const contect = await contentModel.findbyId(req.params.id);
//   if (contect.newUser.toString() != req.params.id);
//   throw new MyError("ta hereglegciin medeelel ustgah erhgui baina");
//   res.send({
//     success: true,
//     data: await userModel.findByIdAndDelete(req.pramas.id),
//   });
// });
