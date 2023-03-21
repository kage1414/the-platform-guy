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

export const stateRegionErrorTemplate = template(`
  <span><b>State/Province/Region:</b> <%- stateProvinceRegion%></span>
  <div style="color: red;">State/Province/Region does not match Country. Verify address with customer.</div>
`);

export const stateRegionTemplate = template(`
  <span><b>State/Province/Region:</b> <%- stateProvinceRegion%> - <%- stateFullName%></span>
`);

export const stateRegionTemplateInquiry = template(`
  <span><b>State/Province/Region:</b></span>
`);

export const clientOrderTemplate = template(`
  <div>
    <div>
      <b>DO NOT REPLY TO THIS EMAIL</b>
    </div>
    <br/>
    <div>
      <span>Order received for <%- platformSize%> platform. We will reach out soon to verify any remaining details.</span>
    </div>
    <div>
      <span>
        If you have questions regarding your order, please contact Mark at 
        <a href="<%- receiverEmail%>"><%- receiverEmail%></a> or 
        <a href="tel:<%- phone%>"><%- phoneFormatted%></a>
      </span>
    </div>
  </div>
`);

export const clientInquiryTemplate = template(`
  <div>
    <div>
      <b>DO NOT REPLY TO THIS EMAIL</b>
    </div>
    <br/>
    <div>
      <span>Inquiry received. We will reach out soon to verify any remaining details.</span>
    </div>
    <div>
      <span>
        If you have further questions, please contact Mark at 
        <a href="<%- receiverEmail%>"><%- receiverEmail%></a> or 
        <a href="tel:<%- phone%>"><%- phoneFormatted%></a>
      </span>
    </div>
  </div>
`);
