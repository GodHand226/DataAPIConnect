// @mui material components
import Card from "@mui/material/Card";
import * as React from "react";
import axios from "axios";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import TextField from "@mui/material/TextField";
// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import Snippet from "./components/index";
import { useSelector } from "react-redux";

function Tables() {
  const [phone, setPhone] = React.useState("");
  const [state, setState] = React.useState([]);
  const [min_age, setMinAge] = React.useState(0);
  const [max_age, setMaxAge] = React.useState(500);
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [record, setRecord] = React.useState("");
  const [res, setRes] = React.useState("");
  // const [cities, setCities] = React.useState([]);
  // const [zips, setZips] = React.useState([]);
  const [curlcode, setCurl] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [payload, setPayload] = React.useState("");

  const items = useSelector((state) => state.items);

  const handleChange = (event) => {
    setPhone(event.target.value);
  };
  const stateChange = (event) => {
    setState(event.target.value);
    // setCities([]);
  };
  const MinAgeChange = (event) => {
    setMinAge(event.target.value);
  };
  const MaxAgeChange = (event) => {
    setMaxAge(event.target.value);
  };
  const CityChange = (event) => {
    setCity(event.target.value);
    // setZips([]);
  };
  const ZipChange = (event) => {
    setZip(event.target.value);
  };
  const getdata = async () => {
    const url = "http://localhost/api";

    const header = {
      access_token: items,
    };
    const data = {
      phone: "wireless",
      state: ["TX"],
      city: [{ city }],
      zip: [{ zip }],
      min_age: 50,
      max_age: 60,
      record: 1,
    };
    const result = await axios.post(url, { headers: header, data: data });
    return result.data;
  };
  const Searchclicked = async () => {
    let curl = `curl -X 'POST' 'http://localhost/api' -H 'accept: application/json' -H 'access_token: ${items}' -H 'Content-Type: application/json'`;
    setCurl(curl);
    setUrl("http://localhost/api");
    setRecord("1");
    let body = {
      phone: phone,
      state: state,
      city: city,
      zip: zip,
      min_age: min_age,
      max_age: max_age,
      record: record,
    };
    console.log({ phone });
    setPayload(JSON.stringify(body, null, 2));
    const data = JSON.stringify(await getdata(), null, 2);
    setRes(data);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Data Viewer</SuiTypography>
            </SuiBox>
            <Grid container p={2}>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" component="h6" p={2}>
                    Phone Type:
                  </SuiTypography>
                  <FormControl>
                    <Select
                      labelId="phone_type_label"
                      id="phone_type"
                      value={phone}
                      onChange={handleChange}
                      label="Phone Type"
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Wireless"}>Wireless</MenuItem>
                      <MenuItem value={"Landline"}>Landline</MenuItem>
                    </Select>
                  </FormControl>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Min_Age:
                  </SuiTypography>
                  <SuiInput id="min_age" value={min_age} onChange={MinAgeChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={3}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Max_Age:
                  </SuiTypography>
                  <SuiInput id="max_age" value={max_age} onChange={MaxAgeChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                <SuiButton variant="contained" startIcon={<SearchIcon />} onClick={Searchclicked}>
                  Search
                </SuiButton>
              </Grid>
            </Grid>
            <Grid container p={2} display="flex" justifyContent="space-around" alignItems="center">
              <Grid item xs={2}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    State:
                  </SuiTypography>
                  <SuiBox>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="state_select"
                        multiple
                        value={state}
                        onChange={stateChange}
                      >
                        <MenuItem value={"AK"}>AK</MenuItem>
                        <MenuItem value={"AL"}>AL</MenuItem>
                        <MenuItem value={"AR"}>AR</MenuItem>
                        <MenuItem value={"AZ"}>AZ</MenuItem>
                        <MenuItem value={"CA"}>CA</MenuItem>
                        <MenuItem value={"CO"}>CO</MenuItem>
                        <MenuItem value={"CT"}>CT</MenuItem>
                        <MenuItem value={"DC"}>DC</MenuItem>
                        <MenuItem value={"DE"}>DE</MenuItem>
                        <MenuItem value={"FL"}>FL</MenuItem>
                        <MenuItem value={"GA"}>GA</MenuItem>
                        <MenuItem value={"GU"}>GU</MenuItem>
                        <MenuItem value={"HI"}>HI</MenuItem>
                        <MenuItem value={"IA"}>IA</MenuItem>
                        <MenuItem value={"ID"}>ID</MenuItem>
                        <MenuItem value={"IL"}>IL</MenuItem>
                        <MenuItem value={"IN"}>IN</MenuItem>
                        <MenuItem value={"KS"}>KS</MenuItem>
                        <MenuItem value={"KY"}>KY</MenuItem>
                        <MenuItem value={"LA"}>LA</MenuItem>
                        <MenuItem value={"MA"}>MA</MenuItem>
                        <MenuItem value={"MD"}>MD</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"MI"}>MI</MenuItem>
                        <MenuItem value={"MO"}>MO</MenuItem>
                        <MenuItem value={"MS"}>MS</MenuItem>
                        <MenuItem value={"MT"}>MT</MenuItem>
                        <MenuItem value={"NC"}>NC</MenuItem>
                        <MenuItem value={"ND"}>ND</MenuItem>
                        <MenuItem value={"NE"}>NE</MenuItem>
                        <MenuItem value={"NH"}>NH</MenuItem>
                        <MenuItem value={"NJ"}>NJ</MenuItem>
                        <MenuItem value={"NM"}>NM</MenuItem>
                        <MenuItem value={"NV"}>NV</MenuItem>
                        <MenuItem value={"NY"}>NY</MenuItem>
                        <MenuItem value={"OH"}>OH</MenuItem>
                        <MenuItem value={"OK"}>OK</MenuItem>
                        <MenuItem value={"OR"}>OR</MenuItem>
                        <MenuItem value={"PA"}>PA</MenuItem>
                        <MenuItem value={"PR"}>PR</MenuItem>
                        <MenuItem value={"PI"}>PI</MenuItem>
                        <MenuItem value={"SC"}>SC</MenuItem>
                        <MenuItem value={"SD"}>SD</MenuItem>
                        <MenuItem value={"TN"}>TN</MenuItem>
                        <MenuItem value={"TX"}>TX</MenuItem>
                        <MenuItem value={"UT"}>UT</MenuItem>
                        <MenuItem value={"VA"}>VA</MenuItem>
                        <MenuItem value={"VT"}>VT</MenuItem>
                        <MenuItem value={"WA"}>WA</MenuItem>
                        <MenuItem value={"WI"}>WI</MenuItem>
                        <MenuItem value={"WV"}>WV</MenuItem>
                        <MenuItem value={"WY"}>WY</MenuItem>
                      </Select>
                    </FormControl>
                  </SuiBox>
                </SuiBox>
              </Grid>
              <Grid item xs={2}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    City:
                  </SuiTypography>
                  {/* <FormControl>
                    <Select
                      labelId="city_label"
                      id="city"
                      value={city}
                      onChange={CityChange}
                      label="City"
                      style={{ width: "100%" }}
                    >
                      {cities.map((c) => (
                        <MenuItem value={c} key={c}>
                          {c}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}
                  <SuiInput id="city" value={city} onChange={CityChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={2}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Zip:
                  </SuiTypography>
                  {/* <FormControl>
                    <Select
                      labelId="zip_label"
                      id="zip"
                      value={zip}
                      onChange={ZipChange}
                      label="Zip"
                      style={{ width: "100%" }}
                    >
                      {zips.map((z) => (
                        <MenuItem value={z} key={z}>
                          {z}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}
                  <SuiInput id="zip" value={zip} onChange={ZipChange}></SuiInput>
                </SuiBox>
              </Grid>
              <Grid item xs={2}>
                <SuiBox p={1} display="flex" justifyContent="center" alignItems="center">
                  <SuiTypography variant="h6" p={2}>
                    Record:
                  </SuiTypography>
                  <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </SuiBox>
              </Grid>
            </Grid>
          </Card>
        </SuiBox>
        <SuiBox>
          <Snippet title="cURL" code={curlcode}></Snippet>
          <Snippet title="Request URL" code={url}></Snippet>
          <Snippet title="Body" code={payload}></Snippet>
          <Snippet title="Response" code={res}></Snippet>
        </SuiBox>
      </SuiBox>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
