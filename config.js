/* ============================================================
   HUNTLY COMMUNITY CHURCH — SITE SETTINGS
   ============================================================
   This is the ONLY file you need to edit for day-to-day changes.
   You can edit it straight from GitHub (pencil icon -> commit).

   After you edit and commit, the live site updates within a minute.
   ============================================================ */

window.SITE_CONFIG = {

  /* ----------------------------------------------------------
     1) NOTICE BANNER  (the bold bar at the very top of the page)
     ----------------------------------------------------------
     Use this for special services, holiday times, cancellations, etc.

     - enabled:  true  = banner shows
                 false = banner is hidden
     - message:  the text people see. Keep it short and clear.
     - buttonText / buttonLink: optional button on the banner.
                 Leave buttonText as "" to hide the button.
     ---------------------------------------------------------- */
  notice: {
    enabled: true,
    message: "Special Easter Service — Sunday 5 April, 9:00am @ 629 Midland Hwy, Huntly. All welcome!",
    buttonText: "Questions? Contact us",
    buttonLink: "#contact"
  },

  /* ----------------------------------------------------------
     2) CONTACT FORM
     ----------------------------------------------------------
     The form is powered by Web3Forms (free).

     ONE-TIME SETUP:
       1. Go to  https://web3forms.com
       2. Type the church email address and press "Create Access Key".
       3. You'll be emailed an access key (looks like a long code).
       4. Paste that key between the quotes below, then commit.

     Until you do this, the form will show a friendly setup message
     instead of sending. Submissions are emailed to the address you
     used in step 2.
     ---------------------------------------------------------- */
  form: {
    web3formsAccessKey: "843851b1-43f3-4fc9-88bb-3c1e666de6f0"
  },

  /* ----------------------------------------------------------
     3) SOCIAL LINKS
     ----------------------------------------------------------
     Paste your Facebook page address between the quotes.
     The Facebook icon (next to "Find us" and in the footer)
     appears automatically once a link is set. Leave it as ""
     to hide the icon.

     Example: "https://www.facebook.com/YourChurchPage"
     ---------------------------------------------------------- */
  social: {
    facebookUrl: ""
  }

};
