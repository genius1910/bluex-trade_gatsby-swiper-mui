import { LinkType } from "../page/layout";

const LayoutContents = {
  Header_SubMenus: [
    {
      title: "Products",
      attachment: "Products",
      links: [
        {
          label: "For Payers",
          url: "/pay-it-later",
          type: LinkType.INTERIOR,
        },
        {
          label: "For Vendors",
          url: "/vendor",
          type: LinkType.INTERIOR,
        },
      ],
    },
    {
      title: "About Us",
      attachment: "/about-us",
      links: [],
    },
    {
      title: "Resources",
      attachment: "Resources",
      links: [
        {
          label: "FAQ",
          url: "https://support.bluexpay.com/en/knowledge",
          type: LinkType.EXTERIOR,
        },
        {
          label: "Blog",
          url: "/blog",
          type: LinkType.INTERIOR,
        },
        {
          label: "Press Releases",
          url: "/press-release",
          type: LinkType.INTERIOR,
        },
      ],
    },
    {
      title: "Pricing",
      attachment: "/pricing",
      links: [],
    },
  ],
  Header_SignIn_Btn: {
    text: "Sign In",
    link: "https://portal.bluexpay.com/",
  },
  Header_Back_Btn: "Back",
  Site_Map: [
    {
      title: "Resources",
      links: [
        {
          label: "FAQ",
          url: "https://support.bluexpay.com/en/knowledge",
          type: LinkType.EXTERIOR,
        },
        {
          label: "Blog",
          url: "/blog",
          type: LinkType.INTERIOR,
        },
      ],
    },
    {
      title: "Keep in Touch",
      links: [
        {
          label: "US: +1-855-832-BLUE",
          type: LinkType.TEXT,
        },
        {
          label: "ASIA: +886-2-2500-7833",
          type: LinkType.TEXT,
        },
        {
          label: "info@bluexpay.com",
          type: LinkType.TEXT,
        },
      ],
    },
  ],
  Footer_Form_Title: "Sign up to get the latest news in freight and fintech",
  Footer_Form_Button: "Subscribe",
  Footer_Input_First_Name_Label: "First Name",
  Footer_Input_Last_Name_Label: "Last Name",
  Footer_Input_Email_Label: "Email",
  Footer_Input_Company_Label: "Company",
  Footer: [
    {
      label: "Terms of Service",
      url: "/terms-of-service",
      type: LinkType.INTERIOR,
    },
    {
      label: "Privacy Policy",
      url: "/privacy-policy",
      type: LinkType.INTERIOR,
    },
    {
      label: "Cookie Policy",
      url: "/cookie-policy",
      type: LinkType.INTERIOR,
    },
  ],
  Right_Company: "BlueX Pay.",
  Right_Reserved: "All Rights Reserved.",
  Footer_Form_End_Content: "Thank you for subscribing.",
  Footer_Form_End_Button: "Finish",
  locale: "en",
};

export default LayoutContents;
