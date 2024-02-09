import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const userManagementValidation = {
  createNewUser: [
      check("userId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("User Id must be text")
      .isLength({ min:0, max: 10})
      .withMessage("User Id must be 10 characters")
      .trim(),

      check("firstName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("First Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("First Name must be 10 characters")
      .trim(),

      check("middleName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Middle Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Middle Name must be 10 characters")
      .trim(),

      check("lastName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Last Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Last Name must be 10 characters")
      .trim(),

      check("email")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Email must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Email must be 10 characters")
      .trim(),

      check("mobile")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Mobile must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Mobile must be 10 characters")
      .trim(),

      check("companyId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Company Id must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Company Id must be 10 characters")
      .trim(),

     check("emergencyMobile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Emergency Mobile must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Emergency Mobile must be 10 characters")
      .trim(),
    
      check("dob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Date of birth must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Date of birth must be 10 characters")
      .trim(),

      check("bloodGroup")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Blood Group must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Blood Group must be 10 characters")
      .trim(),




     check("roleId")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Role Id must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Role Id must be 10 characters")
      .trim(),

      check("roleName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Role Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Role Name must be 10 characters")
      .trim(),

      check("password")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Password must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Password must be 10 characters")
      .trim(),

     check("dateOfJoining")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Date of joining must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Date of joining must be 10 characters")
      .trim(),

      check("designation")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Designation must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Designation must be 10 characters")
      .trim(),

      check("department")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Department must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Department must be 10 characters")
      .trim(),

      check("reportingManager")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Reporting Manager must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Reporting Manager must be 10 characters")
      .trim(),

       check("officialEmail")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Official Email must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Official Email must be 10 characters")
      .trim(),

      check("officialContact")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Official Contact must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Official Contact must be 10 characters")
      .trim(),

      check("currentAddress.houseNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("House Number must be text")
      .isLength({ min:0, max: 10})
      .withMessage("House Number must be 10 characters")
      .trim(),

      check("currentAddress.street")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Street Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Street Name must be 10 characters")
      .trim(),

      check("currentAddress.city")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("City must be text")
      .isLength({ min:0, max: 10})
      .withMessage("City must be 10 characters")
      .trim(),

      check("currentAddress.district")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("District must be text")
      .isLength({ min:0, max: 10})
      .withMessage("District must be 10 characters")
      .trim(),

      check("currentAddress.pincode")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Pincode must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Pincode must be 10 characters")
      .trim(),

      check("currentAddress.state")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("State  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("State must be 10 characters")
      .trim(),

      check("currentAddress.country")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Country  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Country must be 10 characters")
      .trim(),

      check("permanentAddress.houseNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("House Number must be text")
      .isLength({ min:0, max: 10})
      .withMessage("House Number must be 10 characters")
      .trim(),

      check("permanentAddress.street")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Street Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Street Name must be 10 characters")
      .trim(),

      check("permanentAddress.city")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("City must be text")
      .isLength({ min:0, max: 10})
      .withMessage("City must be 10 characters")
      .trim(),

      check("permanentAddress.district")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("District must be text")
      .isLength({ min:0, max: 10})
      .withMessage("District must be 10 characters")
      .trim(),

      check("permanentAddress.pincode")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Pincode must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Pincode must be 10 characters")
      .trim(),

      check("permanentAddress.state")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("State  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("State must be 10 characters")
      .trim(),

      check("permanentAddress.country")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Country  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Country must be 10 characters")
      .trim(),

      check("bankDetails.bankName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Bank Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Name must be 10 characters")
      .trim(),

      check("bankDetails.branchName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Branch Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Branch Name must be 10 characters")
      .trim(),

       check("bankDetails.bankAccountNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Bank Account Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Account Number must be 10 characters")
      .trim(),

       check("bankDetails.bankAccountHolderName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Bank Account Holder Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Account Holder Name must be 10 characters")
      .trim(),

      check("bankDetails.ifscCode")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Ifsc Code  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Ifsc Code must be 10 characters")
      .trim(),

      check("bankDetails.accountType")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Account Type  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Account Type must be 10 characters")
      .trim(),

      check("bankDetails.chequeNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Cheque Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Cheque Number must be 10 characters")
      .trim(),

       check("bankDetails.chequeFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Cheque File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Cheque File must be 10 characters")
      .trim(),

       check("additionalInformation.aadharNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Aadhar Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Aadhar Number must be 10 characters")
      .trim(),

       check("additionalInformation.aadharFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Aadhar File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Aadhar File must be 10 characters")
      .trim(),

       check("additionalInformation.panNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("PAN Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("PAN Number must be 10 characters")
      .trim(),

      check("additionalInformation.panFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("PAN File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("PAN File must be 10 characters")
      .trim(),

       check("additionalInformation.currentAddressId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Current Address Id  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Current Address Id must be 10 characters")
      .trim(),

      check("additionalInformation.currentAddressFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Current Address File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Current Address File must be 10 characters")
      .trim(),

      check("additionalInformation.permanentAddressId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Permanent Address Id  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Permanent Address Id must be 10 characters")
      .trim(),

      check("additionalInformation.permanentAddressFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Permanent Address File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Permanent Address File must be 10 characters")
      .trim(),

      check("additionalInformation.uanNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("UAN Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("UAN Number must be 10 characters")
      .trim(),

      check("additionalInformation.uanFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("UAN File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("UAN File must be 10 characters")
      .trim(),

      check("additionalInformation.passportNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Passport Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Passport Number must be 10 characters")
      .trim(),

      check("additionalInformation.passportFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Passport File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Passport File must be 10 characters")
      .trim(),

       check("familyInformation.spouseName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Spouse Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Spouse Name must be 10 characters")
      .trim(),

      check("familyInformation.spouseDob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Spouse Date of birth  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Spouse Date of birth must be 10 characters")
      .trim(),

       check("familyInformation.childOneName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child One Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child One Name must be 10 characters")
      .trim(),

      check("familyInformation.childOneDob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child One Date of birth  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child One Date of birth must be 10 characters")
      .trim(),

      check("familyInformation.childTwoName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child Two Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child Two Name must be 10 characters")
      .trim(),

      check("familyInformation.childTwoDob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child Two Date of birth  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child Two Date of birth must be 10 characters")
      .trim(),

      check("familyInformation.motherName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Mother Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Mother Name must be 10 characters")
      .trim(),

      check("familyInformation.motherDob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Mother Date of birth must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Mother Date of birth must be 10 characters")
      .trim(),

       check("familyInformation.fatherName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Father Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Father Name must be 10 characters")
      .trim(),

       check("familyInformation.fatherDob")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Father Date of birth must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Father Date of birth must be 10 characters")
      .trim(),

      check("familyInformation.maritalStatus")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Marital Status must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Marital Status must be 10 characters")
      .trim(),

      check("createdBy")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Created by name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Created by name must be 10 characters")
      .trim(),

      check("createdAt")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Created at must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Created at must be 10 characters")
      .trim(),

      check("isActive")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Created at must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Created at must be 10 characters")
      .trim(),

       check("isDeleted")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Created at must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Created at must be 10 characters")
      .trim(),












    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],

  updateUser: [

    check("userId")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("User Id must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("User Id must be 10 characters")
      .trim(),

     check("firstName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("First Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("First Name must be 3 to 10 characters")
      .trim(),

      check("middleName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Middle Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Middle Name must be 10 characters")
      .trim(),

      check("lastName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Last Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Last Name must be 3 to 10 characters")
      .trim(),

      check("email")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Email must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Email must be 3 to 10 characters")
      .trim(),

      check("mobile")
      .exists({ checkFalsy: true })
      .isNumeric()
      .withMessage("Mobile Number must be a number")
      .isLength({ min: 3, max: 10 })
      .withMessage("Mobile Number must be 3 to 10 characters")
      .trim(),

       check("companyId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Company Id must be a text")
      .isLength({ min:0, max: 10})
      .withMessage("Company Id must be 10 characters")
      .trim(),

     check("emergencyMobile")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Emergency Mobile Number must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Emergency Mobile Number must be 10 characters")
      .trim(),
    
      check("dob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Date of birth must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Date of birth must be 10 characters")
      .trim(),

      check("bloodGroup")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Blood Group must be a text")
      .isLength({ min:0, max: 10})
      .withMessage("Blood Group must be 10 characters")
      .trim(),

      check("roleId")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Role Id must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Role Id must be 3 to 10 characters")
      .trim(),

      check("roleName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Role Name must be text")
      .isLength({ min: 3, max: 10 })
      .withMessage("Role Name must be 3 to 10 characters")
      .trim(),

      check("password")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Password must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Password must be 10 characters")
      .trim(),

     check("dateOfJoining")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Date of joining must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Date of joining must be 10 characters")
      .trim(),

      check("designation")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Designation must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Designation must be 10 characters")
      .trim(),

      check("department")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Department must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Department must be 10 characters")
      .trim(),

      check("reportingManager")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Reporting Manager must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Reporting Manager must be 10 characters")
      .trim(),

       check("officialEmail")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Official Email must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Official Email must be 10 characters")
      .trim(),

      check("officialContact")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Official Contact must be a Number")
      .isLength({ min:0, max: 10})
      .withMessage("Official Contact must be 10 numbers")
      .trim(),


      check("currentAddress.houseNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("House Number must be text")
      .isLength({ min:0, max: 10})
      .withMessage("House Number must be 10 characters")
      .trim(),

      check("currentAddress.street")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Street Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Street Name must be 10 characters")
      .trim(),

      check("currentAddress.city")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("City must be text")
      .isLength({ min:0, max: 10})
      .withMessage("City must be 10 characters")
      .trim(),

      check("currentAddress.district")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("District must be text")
      .isLength({ min:0, max: 10})
      .withMessage("District must be 10 characters")
      .trim(),

      check("currentAddress.pincode")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Pincode must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Pincode must be 10 characters")
      .trim(),

      check("currentAddress.state")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("State  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("State must be 10 characters")
      .trim(),

      check("currentAddress.country")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Country  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Country must be 10 characters")
      .trim(),

      check("permanentAddress.houseNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("House Number must be text")
      .isLength({ min:0, max: 10})
      .withMessage("House Number must be 10 characters")
      .trim(),

      check("permanentAddress.street")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Street Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Street Name must be 10 characters")
      .trim(),

      check("permanentAddress.city")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("City must be text")
      .isLength({ min:0, max: 10})
      .withMessage("City must be 10 characters")
      .trim(),

      check("permanentAddress.district")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("District must be text")
      .isLength({ min:0, max: 10})
      .withMessage("District must be 10 characters")
      .trim(),

      check("permanentAddress.pincode")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Pincode must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Pincode must be 10 characters")
      .trim(),

      check("permanentAddress.state")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("State  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("State must be 10 characters")
      .trim(),

      check("permanentAddress.country")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Country  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Country must be 10 characters")
      .trim(),

      check("bankDetails.bankName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Bank Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Name must be 10 characters")
      .trim(),

      check("bankDetails.branchName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Branch Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Branch Name must be 10 characters")
      .trim(),

       check("bankDetails.bankAccountNumber")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Bank Account Number  must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Account Number must be 10 characters")
      .trim(),

       check("bankDetails.bankAccountHolderName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Bank Account Holder Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Bank Account Holder Name must be 10 characters")
      .trim(),

      check("bankDetails.ifscCode")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Ifsc Code  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Ifsc Code must be 10 characters")
      .trim(),

      check("bankDetails.accountType")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Account Type  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Account Type must be 10 characters")
      .trim(),

      check("bankDetails.chequeNo")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Cheque Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Cheque Number must be 10 characters")
      .trim(),

       check("bankDetails.chequeFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Cheque File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Cheque File must be 10 characters")
      .trim(),

       check("additionalInformation.aadharNumber")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Aadhar Number  must be a Number")
      .isLength({ min:0, max: 10})
      .withMessage("Aadhar Number must be 10 characters")
      .trim(),

       check("additionalInformation.aadharFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Aadhar File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Aadhar File must be 10 characters")
      .trim(),

       check("additionalInformation.panNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("PAN Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("PAN Number must be 10 characters")
      .trim(),

      check("additionalInformation.panFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("PAN File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("PAN File must be 10 characters")
      .trim(),

       check("additionalInformation.currentAddressId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Current Address Id  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Current Address Id must be 10 characters")
      .trim(),

      check("additionalInformation.currentAddressFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Current Address File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Current Address File must be 10 characters")
      .trim(),

      check("additionalInformation.permanentAddressId")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Permanent Address Id  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Permanent Address Id must be 10 characters")
      .trim(),

      check("additionalInformation.permanentAddressFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Permanent Address File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Permanent Address File must be 10 characters")
      .trim(),

      check("additionalInformation.uanNumber")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("UAN Number  must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("UAN Number must be 10 characters")
      .trim(),

      check("additionalInformation.uanFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("UAN File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("UAN File must be 10 characters")
      .trim(),

      check("additionalInformation.passportNumber")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Passport Number  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Passport Number must be 10 characters")
      .trim(),

      check("additionalInformation.passportFile")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Passport File  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Passport File must be 10 characters")
      .trim(),

       check("familyInformation.spouseName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Spouse Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Spouse Name must be 10 characters")
      .trim(),

      check("familyInformation.spouseDob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Spouse Date of birth  must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Spouse Date of birth must be 10 characters")
      .trim(),

       check("familyInformation.childOneName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child One Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child One Name must be 10 characters")
      .trim(),

      check("familyInformation.childOneDob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Child One Date of birth  must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Child One Date of birth must be 10 characters")
      .trim(),

      check("familyInformation.childTwoName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Child Two Name  must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Child Two Name must be 10 characters")
      .trim(),

      check("familyInformation.childTwoDob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Child Two Date of birth  must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Child Two Date of birth must be 10 characters")
      .trim(),

      check("familyInformation.motherName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Mother Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Mother Name must be 10 characters")
      .trim(),

      check("familyInformation.motherDob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Mother Date of birth must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Mother Date of birth must be 10 characters")
      .trim(),

       check("familyInformation.fatherName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Father Name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Father Name must be 10 characters")
      .trim(),

       check("familyInformation.fatherDob")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Father Date of birth must be number")
      .trim(),

      check("familyInformation.maritalStatus")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Marital Status must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Marital Status must be 10 characters")
      .trim(),

      check("createdBy")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Created by name must be text")
      .isLength({ min:0, max: 10})
      .withMessage("Created by name must be 10 characters")
      .trim(),

      check("createdAt")
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage("Created at must be a number")
      .isLength({ min:0, max: 10})
      .withMessage("Created at must be 10 characters")
      .trim(),

      check("isActive")
      .optional({ checkFalsy: true })
      .isBoolean()
      .withMessage("Is Active must be boolean")
      .trim(),

       check("isDeleted")
      .optional({ checkFalsy: true })
      .isBoolean()
      .withMessage("Is Deleted must be boolean")
      .trim(),




 


    

    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],

  updateUserMyProfile: [
    check("userId")
      .exists({ checkFalsy: true })
      .isNumeric()
      .withMessage("userId must be a number")
      .isLength({ min: 4, max: 7 })
      .withMessage("userId must be min 4 and max 7 length")
      .trim(),

    check("roleId")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("roleId must be text")
      .isLength({ min: 36, max: 36 })
      .withMessage("roleId must be 36 characters")
      .trim(),

    check("companyId")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("companyId must be text")
      .isLength({ min: 36, max: 36 })
      .withMessage("companyId must be 36 characters")
      .trim(),

    check("email")
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage("email must be text")
      .normalizeEmail()
      .trim()
      .toLowerCase(),

    check("mobile")
      .exists({ checkFalsy: true })
      .withMessage("mobile must be text")
      .matches(/^[1-9]{1}[0-9]{9}$/)
      .withMessage("mobile must be 10 digit numeric")
      .trim(),

    check("firstName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("First Name must be text")
      .whitelist(`/[A-Za-z]/gm`)
      .withMessage("First Name must plain text")
      .isLength({ min: 3, max: 20 })
      .withMessage("First Name must be min 3 and max 20 characters")
      .trim(),

    check("middleName")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Middle Name must be text")
      .whitelist(`/[A-Za-z]/gm`)
      .withMessage("Middle Name must plain text")
      .isLength({ min: 0, max: 20 })
      .withMessage("Middle Name must be max 20 characters")
      .trim(),

    check("lastName")
      .exists({ checkFalsy: true })
      .isString()
      .withMessage("Last Name must be text")
      .whitelist(`/[A-Za-z]/gm`)
      .withMessage("Last Name must be plain text")
      .isLength({ min: 3, max: 20 })
      .withMessage("Last Name must be min 3 and max 20 characters")
      .trim(),

    check("dob").optional().isNumeric().withMessage("dob must be a number"),

    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],

  getUser: [
    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],

  getAllUser: [
    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    check("searchKey")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Search Key must be text")
      .isLength({ min: 0, max: 20 })
      .withMessage("Search Key must be max 20 characters")
      .trim(),

    check("searchText")
      .optional({ checkFalsy: true })
      .isString()
      .withMessage("Search value must be text")
      .isLength({ min: 0, max: 20 })
      .withMessage("Search value must be max 20 characters")
      .trim(),
    check("skip").optional().isNumeric().withMessage("skip must be a number"),
    check("limit").optional().isNumeric().withMessage("limit must be a number"),
    check("pageNo")
      .optional()
      .isNumeric()
      .withMessage("pageNo must be a number"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],

  deleteUser: [
    check("userId")
      .exists({ checkFalsy: true })
      .isNumeric()
      .withMessage("userId must be a number")
      .isLength({ min: 4, max: 7 })
      .withMessage("userId must be min 4 and max 7 characters")
      .trim(),

    check("authorization")
      .customSanitizer((value) => value?.split(" ")[1])
      .isJWT()
      .withMessage("token is not valid"),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],
};