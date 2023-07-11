import express from "express"
import { body } from "express-validator"
import favoriteController from "../controllers/favorite.controller.js"
import userController from "../controllers/user.controller.js"
import requestHandler from "../handlers/request.handler.js"
import userModel from "../models/user.models.js"
import tokenMiddleware from "../middleware/token.middleware.js"

const router = express.Router();

router.get("/test", 
body("username")
.exists().withMessage("username is required"),
requestHandler.validate,
userController.getAll);

router.post(
    "/signup",
    body("username")
    .exists().withMessage("username is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters")
    .custom(async value => {
        const user = await userModel.findOne({username:value});
        if (user) return Promise.reject("username already used");
    }),
    body("password")
    .exists().withMessage("password is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters"),
    body("confirmPassword")
    .exists().withMessage("confirmpassword is required")
    .isLength({min: 8}).withMessage("confirmPassowrd min 8 characters")
    .custom((value, {req}) => {
        if (value !== req.body.password) throw new Error("confirmPassowrd not match");
        return true;
    }),
    body("displayName")
    .exists().withMessage("displayName is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters"),
    requestHandler.validate,
    userController.signUp  
);

router.post(
    "/signin",
    body("username")
    .exists().withMessage("username is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters"),
    body("password")
    .exists().withMessage("passoword is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters"),
    requestHandler.validate,
    userController.singIn
);

router.put(
    "/update-password",
    tokenMiddleware.auth,
    body("username")
    .exists().withMessage("passoword is required")
    .isLength({min: 8}).withMessage("username minimum 8 characters"),
    body("newPassword")
    .exists().withMessage("newPassowrd is required")
    .isLength({min: 8}).withMessage("newPassword minimum 8 characters"),
    body("confirmPassword")
    .exists().withMessage("onfirmNewPassword is required")
    .isLength({min: 8}).withMessage("confirmNewPassword minimum 8 characters")
    .custom((value, {req}) => {
        if (value !== req.body.password) throw new Error("onfirmNewPassword not match");
        return true;
    }),
    requestHandler.validate,
    userController.updatePassword
);

router.get(
    "/info",
    tokenMiddleware.auth,
    userController.getInfo
);

router.get(
    "/favorites",
    tokenMiddleware.auth,
    favoriteController.getFavoriteOfUser
);

router.post(
    "/favorites",
    tokenMiddleware.auth,
    body("mediatype")
    .exists().withMessage("mediatype is required")
    .custom(type => ["movie", "tv"].includes(type))
    .withMessage("mediaType invalid"),
    body("mediaId")
    .exists().withMessage("mediaId is required")
    .isLength({min: 8}).withMessage("mediaId cannot be empty"),
    body("mediaTitle")
    .exists().withMessage("mediaTitle is required"),
    body("mediaPoster")
    .exists().withMessage("mediaPoster is required"),
    body("mediaRate")
    .exists().withMessage("mediaRate is required"),
    requestHandler.validate,
    favoriteController.addFavorite
);


router.delete(
    "/favorites/:favoriteId",
    tokenMiddleware.auth,
    favoriteController.removeFavorite
);

export default router;