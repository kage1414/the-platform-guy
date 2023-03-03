import { escape } from "lodash";
import { emailTemplate } from "./emailTemplate";
import * as nodemailer from "nodemailer";
import { phone } from 'phone'

const { SENDER_EMAIL, SENDER_SECURE_MAIL_KEY, RECEIVER_EMAIL } = process.env;

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
}

const PlatformSizes = {
  s: `24" x 60" - $350`,
  m: `32" x 68" - $400`,
  l: `36" x 75" - $450`,
  c: `Custom - quote`,
}

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
  }: MailerArgs) => {

  const emailBody = emailTemplate({
    firstName: escape(firstName),
    lastName: escape(lastName),
    addressLineOne: escape(addressLineOne),
    addressLineTwo: escape(addressLineTwo),
    city: escape(city),
    stateProvinceRegion: escape(stateProvinceRegion),
    zipPostalCode: escape(zipPostalCode),
    country: escape(country),
    // @ts-ignore
    platformSize: escape(PlatformSizes[platformSize]),
    questionsOrComments: escape(comments),
    phoneNumber: escape(phone(phoneNumber, { country }).phoneNumber ?? undefined),
    email: escape(email),
  });

  let transporter = nodemailer.createTransport({
    host: "outbound.att.net",
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_SECURE_MAIL_KEY,
    },
  });

  let info = await transporter.sendMail({
    from: `"ThePlatformGuy.com" <${SENDER_EMAIL}>`,
    to: `"${RECEIVER_EMAIL}`,
    subject: `Platform order from: ${escape(firstName)} ${escape(lastName)}`,
    html: emailBody,
  });

  return info.messageId;
};
