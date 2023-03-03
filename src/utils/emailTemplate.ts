import { template } from "lodash";

export const emailTemplate = template(`
<div>
  <div>
    <b>Name:</b> <%= firstName%> <%= lastName%>
  </div>
  <div>
    <b>Address Line 1:</b> <%= addressLineOne%>
  </div>
  <div>
    <b>Address Line 2:</b> <%= addressLineTwo%>
  </div>
  <div>
    <b>City:</b> <%= city%>
  </div>
  <div>
    <b>State/Province/Region:</b> <%= stateProvinceRegion%>
  </div>
  <div>
    <b>Zip/Postal Code:</b> <%= zipPostalCode%>
  </div>
  <div>
    <b>Country:</b> <%= country%>
  </div>
  <div>
    <b>Phone:</b> <%= phoneNumber%>
  </div>
  <div>
    <b>Email:</b> <%= email%>
  </div>
  <div>
    <b>Platform Size:</b> <%= platformSize%>
  </div>
  <div>
    <b>Questions or Comments:</b>
    <div style="width: 40%;">
      <%= questionsOrComments%>
    </div>
  </div>
</div>
`);