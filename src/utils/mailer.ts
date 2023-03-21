import { getPlatformSizeFromKey } from "./PlatformSizes";
import {
  clientInquiryTemplate,
  clientOrderTemplate,
  emailTemplate,
  stateRegionErrorTemplate,
  stateRegionTemplate,
  stateRegionTemplateInquiry,
} from "./templates";
import { Country, State } from "country-state-city";
import { escape } from "lodash";
import * as nodemailer from "nodemailer";
import { phone } from "phone";

const {
  SENDER_EMAIL,
  SENDER_SECURE_MAIL_KEY,
  RECEIVER_EMAIL,
  NODE_ENV,
  RECEIVER_EMAIL_SECONDARY,
  PHONE,
  PHONE_FORMATTED,
} = process.env;
interface MailerArgs {
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
  formType: "order" | "questionInquiry";
}

interface GetStateRegionArgs {
  stateProvinceRegion: MailerArgs["stateProvinceRegion"];
  country: MailerArgs["country"];
  formType: MailerArgs["formType"];
}

const getStateRegion = ({
  stateProvinceRegion,
  country,
  formType,
}: GetStateRegionArgs): string => {
  const stateFullName = State.getStateByCodeAndCountry(
    stateProvinceRegion ?? "",
    country
  )?.name;

  return stateFullName
    ? stateRegionTemplate({ stateProvinceRegion, stateFullName })
    : formType === "order"
    ? stateRegionErrorTemplate({ stateProvinceRegion })
    : stateRegionTemplateInquiry();
};

export const sendEmail = async ({
  firstName,
  lastName,
  addressLineOne,
  addressLineTwo,
  city,
  stateProvinceRegion,
  zipPostalCode,
  country,
  comments,
  platformSize,
  phoneNumber,
  email,
  formType,
}: MailerArgs) => {
  const stateFullNameEscaped = getStateRegion({
    stateProvinceRegion,
    country,
    formType,
  });
  const countryFullName =
    Country.getCountryByCode(country ?? "")?.name ?? "Country not found";
  const phoneFormatted =
    phone(phoneNumber, { country }).phoneNumber ?? undefined;

  const serverEmailBody = emailTemplate({
    firstName: firstName,
    lastName: lastName,
    addressLineOne: addressLineOne,
    addressLineTwo: addressLineTwo,
    city: city,
    stateProvinceRegion: stateFullNameEscaped,
    zipPostalCode: zipPostalCode,
    country: countryFullName,
    platformSize: getPlatformSizeFromKey(platformSize),
    questionsOrComments: comments,
    phoneNumber: phoneFormatted,
    email: email,
  });

  const clientTemplateOptions = {
    platformSize: getPlatformSizeFromKey(platformSize).split(" - ")[0],
    receiverEmail: RECEIVER_EMAIL,
    phone: PHONE,
    phoneFormatted: PHONE_FORMATTED,
  };

  const clientEmailBody =
    formType === "order"
      ? clientOrderTemplate(clientTemplateOptions)
      : clientInquiryTemplate(clientTemplateOptions);

  const transporter = nodemailer.createTransport({
    host: "outbound.att.net",
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_SECURE_MAIL_KEY,
    },
  });

  const serverEmail = transporter
    .sendMail({
      from: `"ThePlatformGuy.com" <${SENDER_EMAIL}>`,
      to: `${RECEIVER_EMAIL}`,
      bcc: `${RECEIVER_EMAIL_SECONDARY || ""}`,
      subject: `${NODE_ENV === "development" ? "TEST " : ""}Platform ${
        formType === "order" ? "Order" : "Inquiry"
      } from: ${escape(firstName)} ${escape(lastName)}`,
      html: serverEmailBody,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });

  const clientEmail = transporter.sendMail({
    from: `"ThePlatformGuy.com" <${SENDER_EMAIL}>`,
    to: email,
    subject: `${
      formType === "order" ? "Order" : "Inquiry"
    } Confirmation - ThePlatformGuy.com`,
    html: clientEmailBody,
  });

  Promise.all([clientEmail, serverEmail]);
};
