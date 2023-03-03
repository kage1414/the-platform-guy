import * as emailValidator from "email-validator";
import { phone } from "phone";

interface ValidateArgs {
  firstName: string;
  lastName: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  stateProvinceRegion?: string;
  zipPostalCode: string;
  country: string;
  comments?: string;
  platformSize: string;
  phoneNumber: string;
  email: string;
}

export const validate = ({
  firstName,
  lastName,
  addressLineOne,
  city,
  zipPostalCode,
  country,
  platformSize,
  phoneNumber,
  email,
}: ValidateArgs): boolean => {
  const nameProvided = Boolean(firstName || lastName);
  const fullAddressProvided = Boolean(
    addressLineOne && city && zipPostalCode && country
  );
  const emailValid = emailValidator.validate(email);
  const { isValid: phoneValid } = phone(phoneNumber);
  const platformSizeSelected = !!platformSize;

  return (
    nameProvided &&
    fullAddressProvided &&
    emailValid &&
    phoneValid &&
    platformSizeSelected
  );
};
