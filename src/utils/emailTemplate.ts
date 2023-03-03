import { template } from "lodash";

export const emailTemplate = template(`
<div>
  <div>
    <b>Name:</b> <%- firstName%> <%- lastName%>
  </div>
  <div>
    <b>Address Line 1:</b> <%- addressLineOne%>
  </div>
  <div>
    <b>Address Line 2:</b> <%- addressLineTwo%>
  </div>
  <div>
    <b>City:</b> <%- city%>
  </div>
  <div>
    <%= stateProvinceRegion%>
  </div>
  <div>
    <b>Zip/Postal Code:</b> <%- zipPostalCode%>
  </div>
  <div>
    <b>Country:</b> <%- country%>
  </div>
    <br>
  <div>
    <b>Phone:</b> <%- phoneNumber%>
  </div>
  <div>
    <b>Email:</b> <%- email%>
  </div>
    <br>
  <div>
    <b>Platform Size:</b> <%- platformSize%>
  </div>
  <br>
  <div>
    <b>Questions or Comments:</b>
    <div style="width: 75%;">
      <%- questionsOrComments%>
    </div>
  </div>
</div>
`);
