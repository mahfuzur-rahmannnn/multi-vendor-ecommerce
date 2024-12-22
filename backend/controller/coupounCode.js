const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller } = require("../middleware/auth");
const CoupounCode = require("../model/coupounCode");

// create coupoun code
router.post(
  "/create-coupoun-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isCoupounCodeExists = await CoupounCode.find({
        name: req.body.name,
      });

      if (isCoupounCodeExists.length !== 0) {
        return next(new ErrorHandler("Coupoun code already exist!", 400));
      }
      const coupounCode = await CoupounCode.create(req.body);
      res.status(201).json({
        success: true,
        coupounCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all coupouns of a shop
router.get(
  "/get-coupoun/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const coupounCodes = await CoupounCode.find({
        shopId: req.seller.id,
      });
      res.status(201).json({
        success: true,
        coupounCodes,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);


// delete coupoun code of a shop
router.delete(
    "/delete-coupoun/:id",
    isSeller,
    catchAsyncErrors(async (req, res, next) => {
      try {
        const coupounCode = await CoupounCode.findByIdAndDelete(req.params.id);
  
        if (!coupounCode) {
          return next(new ErrorHandler("Coupoun code dosen't exists!", 400));
        }
        res.status(201).json({
          success: true,
          message: "Coupoun code deleted successfully!",
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
    })
  );

module.exports = router;
