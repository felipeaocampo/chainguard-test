import { useEffect } from "react";

//USEFUL LINK https://mahmoodchowdhury.com/blog/integrating-hubspot-forms-into-your-next-js-application/

export default function HubSpotForm() {
  //THIS CURRENTLY ACCESS THE TEST HUBSPOT FORM THEO MADE. MAKE SURE YOU DON'T GET IN TROUBLE FOR THIS.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      console.log("inside load handler");
      //@ts-ignore
      if (window.hbspt) {
        //@ts-ignore
        window.hbspt.forms.create({
          portalId: "21744766",
          formId: "a957b911-8cfe-4915-bafd-59e412749131",
          target: "#hubspotForm",
          region: "na1",
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="hubspotForm"></div>;
}

{
  /* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
hbspt.forms.create({
region: "na1",
portalId: "21744766",
formId: "a957b911-8cfe-4915-bafd-59e412749131"
});
</script> */
}
