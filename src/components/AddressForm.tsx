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
import { getData } from "country-list";
import { ReactElement, useState } from "react";

const getCountryOptions = (): ReactElement[] => {
  const list = getData().sort(({ name: a }, { name: b }) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return list.map(({ code, name }, idx) => (
    <MenuItem key={`${code} ${idx}`} value={code}>
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
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Contact/Order Form
      </Typography>
      <Typography variant="subtitle1">
        Please fill out the form with orders or questions. We will reply quickly
        by phone or email.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName}
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
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressLineOne}
            onChange={(e) => {
              setAddressLineOne(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressLineTwo}
            onChange={(e) => {
              setAddressLineTwo(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={stateProvinceRegion}
            onChange={(e) => {
              setStateProvinceRegion(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zipPostalCode}
            onChange={(e) => {
              setZipPostalCode(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="countryLabel">Country</InputLabel>
            <Select
              id="country"
              labelId="countryLabel"
              label="Country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {getCountryOptions()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "10em" }}>
            <InputLabel id="platformSizeLabel">Platform Size</InputLabel>
            <Select
              id="platformSize"
              labelId="platformSizeLabel"
              label="Platform Size"
              value={platformSize}
              onChange={(e) => {
                setPlatformSize(e.target.value);
              }}
            >
              <MenuItem value="s">{`24" x 60" - $350`}</MenuItem>
              <MenuItem value="m">{`32" x 68" - $400`}</MenuItem>
              <MenuItem value="l">{`36" x 75" - $450`}</MenuItem>
              <MenuItem value="c">{`Custom - quote`}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Questions or Comments"
            multiline
            rows={8}
            fullWidth
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
          <FormHelperText>
            Please leave any details regarding sizing or construction
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Send</Button>
        </Grid>
      </Grid>
    </>
  );
}
