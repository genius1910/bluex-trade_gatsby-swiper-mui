export const JoinWaitListContent = {
  Step1: {
    Title: "Join Waitlist",
    Content:
      "Thank you for your interest. We’re currently only taking on customers that meet our requirements to use BlueX Pay. The service will be open to a wider customer base in the near future.",
    Form: {
      TextInput: {
        Name: "Name",
        Email: "Email",
        Country: "Country",
        Company: "Company",
      },
      MemberType: {
        Label: "What type of user are you?",
        Options: [
          {
            label: "Vendor",
            value: "vendor",
          },
          {
            label: "Payer",
            value: "payer",
          },
          {
            label: "Both (Payer and Vendor)",
            value: "both",
          },
        ],
      },
      WIFFA: {
        Label: "Are you a WIFFA member?",
        Hint: "(World International Freight Forwarder Alliance)",
        Options: [
          {
            label: "Yes",
            value: "true",
          },
          {
            label: "No",
            value: "false",
          },
        ],
      },
    },
  },
  Step2: {
    Title:
      "Thank you for joining our waitlist.\nWe'll be in touch soon",
  },
  Button: {
    Submit: "Submit",
    Close: "Close",
  },
}

export const PayItLaterContent = {
  Title: "BlueX Pay-it-Later: The Better Way to Get More Time To Pay",
  Content:
    "We’re currently only taking on customers that meet our requirements to use BlueX Pay-it-Later. The service will be open to a wider customer base in the near future. So join our waitlist now and be contacted when you can get Net 30/60 terms on your ocean freight payments.",
  Hint: "*Terms and conditions apply, including availability of trade insurance and funding",
  Form: {
    Title: "Join Waitlist",
    TextInput: {
      Name: "Name",
      Email: "Email",
      JobTitle: "Job Title",
      Company: "Company",
      FinanceAmount: "Amount of Monthly Freight Payments (USD)",
    },
    MemberType: {
      Label: "What type of user are you?",
      Hint: "(Please check all that apply)",
      Warning: "Please answer",
      Options: [
        {
          label: "Freight forwarder",
          value: "freight_forwarder",
        },
        {
          label: "Importer",
          value: "importer",
        },
        {
          label: "Exporter",
          value: "exporter",
        },
      ],
    },
    WIFFA: {
      Label: "Are you a WIFFA member?",
      Hint: "(World International Freight Forwarder Alliance)",
      Warning: "Please answer",
      Options: [
        {
          label: "Yes",
          value: "true",
        },
        {
          label: "No",
          value: "false",
        },
      ],
    },
  },
  Modal: {
    Title: "Thank you for joining our waitlist.",
    Content: "We'll be in touch soon",
  },
  Button: {
    Submit: "Submit",
    Close: "Close",
  },
}