import { PlatformSizes } from "@/utils/PlatformSizes";
import {
  CircularProgress,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Country, ICountry, IState, State } from "country-state-city";
import * as emailValidator from "email-validator";
import MuiPhoneNumber from "material-ui-phone-number";
import { useTranslation } from "next-i18next";
import Router from "next/router";
import { phone } from "phone";
import { ReactElement, useEffect, useState } from "react";

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

const sortCountryStateAlphabetically = (
  { name: a }: ICountry | IState,
  { name: b }: ICountry | IState
) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const getCountryOptions = (): ReactElement[] => {
  const list = Country.getAllCountries().sort(sortCountryStateAlphabetically);
  return list.map(({ isoCode, name }, idx) => (
    <MenuItem key={`${isoCode} ${idx}`} value={isoCode}>
      {name}
    </MenuItem>
  ));
};

const getStateOptions = (): ReactElement[] => {
  const usaStates = State.getStatesOfCountry("US").sort(
    sortCountryStateAlphabetically
  );
  const canadaProvinces = State.getStatesOfCountry("CA").sort(
    sortCountryStateAlphabetically
  );
  const statesAndProvinces = [...usaStates, ...canadaProvinces];
  return statesAndProvinces.map(({ isoCode, name }, idx) => (
    <MenuItem key={`${isoCode} ${idx}`} value={isoCode}>
      {name}
    </MenuItem>
  ));
};

export default function AddressForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [addressLineOne, setAddressLineOne] = useState<string>("");
  const [addressLineTwo, setAddressLineTwo] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [stateProvinceRegion, setStateProvinceRegion] = useState<string>("");
  const [zipPostalCode, setZipPostalCode] = useState<string>("");
  const [country, setCountry] = useState<string>("US");
  const [comments, setComments] = useState<string>("");
  const [platformSize, setPlatformSize] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [fieldsDisabled, setFieldsDisabled] = useState(loading || sent);
  const [formType, setFormType] = useState<"order" | "questionInquiry">(
    "order"
  );

  const { t } = useTranslation("order");

  const handleSend = () => {
    if (
      validate({
        firstName,
        lastName,
        addressLineOne,
        city,
        zipPostalCode,
        country,
        platformSize,
        phoneNumber,
        email,
      })
    ) {
      setLoading(true);
      axios
        .post("form./api/order", {
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
        })
        .then(() => {
          setLoading(false);
          setSent(true);
          setTimeout(() => {
            Router.push("/");
          }, 3000);
        })
        .then(() => {
          setLoading(false);
        });
    }
  };

  const validate = ({
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
    const fullAddressProvided =
      formType === "order"
        ? Boolean(addressLineOne && city && zipPostalCode && country)
        : true;
    const emailValid = emailValidator.validate(email);
    setEmailError(!emailValid);
    const { isValid: phoneValid } = phone(phoneNumber);
    setPhoneError(!phoneValid);
    const platformSizeSelected =
      !!platformSize || formType === "questionInquiry";

    setError(
      !(
        nameProvided &&
        fullAddressProvided &&
        platformSizeSelected &&
        emailValid &&
        phoneValid
      )
    );

    return (
      nameProvided &&
      fullAddressProvided &&
      platformSizeSelected &&
      emailValid &&
      phoneValid
    );
  };

  useEffect(() => {
    setFieldsDisabled(sent || loading);
  }, [sent, loading]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t("form.title")}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label={t("form.first-name")}
            error={!firstName && error}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label={t("form.last-name")}
            error={!lastName && error}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required={formType === "order"}
            id="address1"
            name="address1"
            label={t("form.address-1")}
            error={!addressLineOne && error && formType === "order"}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressLineOne}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setAddressLineOne(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label={t("form.address-2")}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressLineTwo}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setAddressLineTwo(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={formType === "order"}
            id="city"
            name="city"
            label={t("form.city")}
            error={!city && error && formType === "order"}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="stateLabel">{t("form.state")}</InputLabel>
            <Select
              id="state"
              name="state"
              labelId="stateLabel"
              label={t("form.state")}
              value={stateProvinceRegion}
              disabled={fieldsDisabled}
              onChange={(e) => {
                setStateProvinceRegion(e.target.value);
              }}
            >
              {getStateOptions()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={formType === "order"}
            id="zip"
            name="zip"
            label={t("form.zip")}
            type="number"
            error={!zipPostalCode && error && formType === "order"}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zipPostalCode}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setZipPostalCode(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="countryLabel">{t("form.country")}</InputLabel>
            <Select
              required={formType === "order"}
              id="country"
              labelId="countryLabel"
              label={t("form.country")}
              error={!country && error && formType === "order"}
              value={country}
              disabled={fieldsDisabled}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {getCountryOptions()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPhoneNumber
            required
            value={phoneNumber}
            defaultCountry="us"
            onChange={(value) => {
              if (typeof value === "string") {
                setPhoneNumber(value);
              }
            }}
            error={(!phoneNumber && error) || phoneError}
            type="tel"
            id="phone"
            name="phone"
            label={t("form.phone")}
            fullWidth={true}
            autoComplete="billing tel-national"
            variant="standard"
            disabled={fieldsDisabled}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label={t("form.email")}
            type="email"
            error={(!email && error) || emailError}
            fullWidth
            autoComplete="billing email"
            variant="standard"
            value={email}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "10em" }}>
            <InputLabel id="platformSizeLabel">
              {t("form.platform-size")}
            </InputLabel>
            <Select
              required={formType === "order"}
              id="platformSize"
              labelId="platformSizeLabel"
              label={t("form.platform-size")}
              value={platformSize}
              disabled={fieldsDisabled}
              onChange={(e) => {
                setPlatformSize(e.target.value);
              }}
              error={!platformSize && error && formType === "order"}
            >
              {Object.entries(PlatformSizes).map(([k, v], idx) => (
                <MenuItem key={`${k} ${idx}`} value={k}>
                  {v}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t("form.questions-comments.title")}
            multiline
            rows={8}
            fullWidth
            value={comments}
            disabled={fieldsDisabled}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          <FormHelperText>{t("form.questions-comments.info")}</FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {t("form.radio.descriptions")}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="order"
              name="radio-buttons-group"
              onChange={(e) => {
                if (
                  e.target.value === "questionInquiry" ||
                  e.target.value === "order"
                ) {
                  setFormType(e.target.value);
                }
              }}
            >
              <FormControlLabel
                value="order"
                control={<Radio />}
                label={t("form.radio.order")}
              />
              <FormControlLabel
                value="questionInquiry"
                control={<Radio />}
                label={t("form.radio.question-inquiry")}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {error ? (
            <Typography color="error">{t("form.info.error")}</Typography>
          ) : sent ? (
            <Typography color="secondary">{t("form.info.sent")}</Typography>
          ) : loading ? (
            <Typography color="secondary">{t("form.info.loading")}</Typography>
          ) : (
            <Typography color="secondary">{t("form.info.default")}</Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSend}
            disabled={loading}
            sx={{ width: 70 }}
          >
            {fieldsDisabled ? (
              <CircularProgress size={24} />
            ) : (
              t("form.send-button")
            )}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
