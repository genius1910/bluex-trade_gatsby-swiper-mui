require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = process.env.GATSBY_URL || `https://www.bluextrade.com/`;

const localeStrapiObject = (type, locale, populate) => {
  return {
    singularName: type,
    queryParams: {
      populate: populate ? { ...populate } : "*",
    },
    pluginOptions: {
      i18n: {
        locale: locale,
      },
    },
  };
};

const StrapiQueryParams = {
  blog: {
    SEO: { populate: "*" },
    Url: "*",
    Title: "*",
    Category: "*",
    Type: "*",
    Author: "*",
    Date: "*",
    UpdateDate: "*",
    Image: "*",
    ContentList: { populate: "*" },
  },
  pricing: {
    Title: "*",
    Content: "*",
    Details: {
      populate: {
        title: "*",
        others: "*",
        comment: "*",
        list: "*",
      },
    },
    Note: "*",
    Order: "*",
  },
  release_note: {
    Url: "*",
    Date: "*",
    Paragraph: "*",
    Feature_List: { populate: "*" },
    Enhancement_List: { populate: "*" },
    Hotfix_List: { populate: "*" },
  },
  layout_content: {
    Product_Dropdown_Label: "*",
    Product_Dropdown_Groups: {
      populate: {
        name: "*",
        type: "*",
        links: { populate: "*" },
      },
    },
    Header_SubMenus: {
      populate: {
        title: "*",
        attachment: "*",
        links: { populate: "*" },
      },
    },
    Header_SignIn_Btn: "*",
    Header_Back_Btn: "*",
    Site_Map: {
      populate: {
        title: "*",
        attachment: "*",
        links: { populate: "*" },
      },
    },
    Footer_Form_Title: "*",
    Footer_Form_Button: "*",
    Footer_Input_First_Name_Label: "*",
    Footer_Input_Last_Name_Label: "*",
    Footer_Input_Email_Label: "*",
    Footer_Input_Company_Label: "*",
    Footer: "*",
    Right_Company: "*",
    Right_Reserved: "*",
    Footer_Form_End_Content: "*",
    Footer_Form_End_Button: "*",
  },
  front_content: {
    SEO: { populate: "*" },
    Section_1_Title: "*",
    Section_1_Content: "*",
    Section_1_Image: "*",
    Section_1_Image_Preview: "*",
    Section_1_Button: "*",
    Section_2_Title: "*",
    Section_2_Media_List: { populate: "*" },
    Section_2_Media: { populate: "*" },
    Section_3_Type: "*",
    Section_3_Title: "*",
    Section_3_Title_Styled_Keyword: "*",
    Section_3_Content: "*",
    Section_3_Image: "*",
    Section_3_Feature_List: "*",
    Section_3_Button: "*",
    Section_4_Page_Intro_List: { populate: "*" },
    Section_5_Title: "*",
    Section_5_Logo_List: "*",
    Section_6_Title: "*",
    Section_6_Testimonial_List: "*",
    Section_7_Title: "*",
    Section_7_FAQ_List: { populate: "*" },
    Section_8_Content: "*",
    Section_8_Button: "*",
    Section_8_Bg: "*",
  },
  payer_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Bg: "*",
    Section_1_Button: "*",
    Section_2_Title: "*",
    Section_2_Media_List: { populate: "*" },
    Section_3_Gallery: {
      populate: {
        image: { populate: "*" },
        type: "*",
        width: "*",
        height: "*",
        description: "*",
      },
    },
    Section_4_Title: "*",
    Section_4_Button: "*",
    Section_4_Image: "*",
  },
  vendor_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Bg: "*",
    Section_1_Button: "*",
    Section_2_Title: "*",
    Section_2_Media_List: { populate: "*" },
    Section_3_Gallery: {
      populate: {
        image: { populate: "*" },
        type: "*",
        width: "*",
        height: "*",
        description: "*",
      },
    },
    Section_4_Media_List: { populate: "*" },
    Section_4_Bg: "*",
    Section_5_Title: "*",
    Section_5_Button: "*",
    Section_5_Image: "*",
  },
  ecommerce_content: {
    SEO: { populate: "*" },
    Section_1_Title: "*",
    Section_1_Content: "*",
    Section_1_Image: "*",
    Section_1_Button: "*",
    Section_1_Media_List: { populate: "*" },
    Section_1_Bg: "*",
    Section_2_Title: "*",
    Section_2_Media_List: { populate: "*" },
    Section_3_Tab_Media: { populate: "*" },
    Section_4_Image: "*",
    Section_4_Content: "*",
    Section_4_Speaker_Paragraph: "*",
    Section_4_Bg: "*",
    Section_5_Title: "*",
    Section_5_Table_Headers: "*",
    Section_5_Table_Rows: { populate: "*" },
    Section_5_Notification: "*",
    Section_6_Title: "*",
    Section_6_First_Name_Input: "*",
    Section_6_Last_Name_Input: "*",
    Section_6_Email_Input: "*",
    Section_6_Company_Input: "*",
    Section_6_Plan_Input: "*",
    Section_6_Country_Input: "*",
    Section_6_Plan_Radio_List: { populate: "*" },
    Section_6_Submit_Btn: "*",
  },
  developer_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Btn: "*",
    Section_1_Image: "*",
    Section_1_Bg: "*",
    Section_2_Title: "*",
    Section_2_Main_Logo: "*",
    Section_2_Logo_List: "*",
    Section_3_Title: "*",
    Section_3_Media_List: { populate: "*" },
    Section_4_Title: "*",
    Section_4_Table_Row_Header_1: "*",
    Section_4_Table_Row_Data_1: { populate: "*" },
    Section_4_Table_Row_Header_2: "*",
    Section_4_Table_Row_Data_2: { populate: "*" },
    Section_4_Table_Row_Header_3: "*",
    Section_4_Table_Row_Data_3: { populate: "*" },
    Section_5_Title: "*",
    Section_5_First_Name_Input: "*",
    Section_5_Last_Name_Input: "*",
    Section_5_Email_Input: "*",
    Section_5_Company_Input: "*",
    Section_5_Mobile_Input: "*",
    Section_5_Country_Input: "*",
    Section_5_Confirm_Text: "*",
    Section_5_Confirm_Link_Text: "*",
    Section_5_Confirm_Link_Url: "*",
    Section_5_Submit_Btn: "*",
  },
  policy_content: {
    Sidebar_List: "*",
    Terms_Of_Service_SEO: { populate: "*" },
    Terms_Of_Service_Title: "*",
    Terms_Of_Service_Timestamp: "*",
    Terms_Of_Service_Preivew_List: { populate: "*" },
    Terms_Of_Service_Paragraph_List: { populate: "*" },
    Terms_Of_Service_Exhibit_List: { populate: "*" },
    Privacy_Policy_SEO: { populate: "*" },
    Privacy_Policy_Title: "*",
    Privacy_Policy_TimeStamp: "*",
    Privacy_Policy_Paragraph_List: { populate: "*" },
    Cookie_Policy_SEO: { populate: "*" },
    Cookie_Policy_Title: "*",
    Cookie_Policy_TimeStamp: "*",
    Cookie_Policy_Paragraph_List: { populate: "*" },
    Cookie_Policy_Table_Headers: "*",
    Cookie_Policy_Bluextrade_Table: "*",
    Cookie_Policy_Bluexpay_Table: "*",
    Assignment_Agreement_SEO: { populate: "*" },
    Assignment_Agreement_Title: "*",
    Assignment_Agreement_TimeStamp: "*",
    Assignment_Agreement_Paragraph_List: { populate: "*" },
    Factoring_Agreement_Title: "*",
    Factoring_Agreement_TimeStamp: "*",
    Factoring_Agreement_Paragraph_List: { populate: "*" },
    Cargo_Financing_Service_Agreement_Title: "*",
    Cargo_Financing_Service_Agreement_TimeStamp: "*",
    Cargo_Financing_Service_Agreement_Paragraph_List: { populate: "*" },
    Pay_It_Later_Service_Agreement_Title: "*",
    Pay_It_Later_Service_Agreement_TimeStamp: "*",
    Pay_It_Later_Service_Agreement_Paragraph_List: { populate: "*" },
    Promotion_Agreement_Title: "*",
    Promotion_Agreement_TimeStamp: "*",
    Promotion_Agreement_Paragraph_List: { populate: "*" },
    Trade_Service_Conditions_Title: "*",
    Trade_Service_Conditions_TimeStamp: "*",
    Trade_Service_Conditions_Paragraph_List: { populate: "*" },
    Trade_Service_Conditions_Exhibit_List: { populate: "*" },
  },
  about_us_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Button: "*",
    Section_1_Bg: "*",
    Section_2_Main_Text: "*",
    Section_2_Paragraph: "*",
    Section_2_Image: "*",
    Section_3_Paragraph: "*",
    Section_3_Icon: "*",
    Section_3_Image: "*",
    Section_4_Paragraph: "*",
    Section_4_Profile_List: {
      populate: {
        avatar: { populate: "*" },
        name: "*",
        title: "*",
        linkedin: { populate: "*" },
      },
    },
    Section_5_Investors_Title: "*",
    Section_5_Investors_Logo: "*",
    Section_5_Partners_Title: "*",
    Section_5_Partners_Logo: "*",
    Section_6_Title: "*",
    Section_6_Testimonial_List: {
      populate: {
        content: "*",
        logo: { populate: "*" },
        speaker: "*",
        title: "*",
      },
    },
    Section_7_Title: "*",
    Section_7_Icon: "*",
    Section_7_Button: "*",
  },
  career_content: {
    SEO: { populate: "*" },
    Section_1_Title: "*",
    Section_1_Bg: "*",
    Section_1_Content: "*",
    Section_2_Title: "*",
    Section_2_Image: "*",
    Section_2_Content: "*",
    Section_3_Media_List: { populate: "*" },
    Section_4_Title: "*",
    Section_4_Media_List: { populate: "*" },
    Section_5_Title: "*",
    Section_5_Images: "*",
    Section_6_Paragraph: "*",
    Section_6_Position_Types: "*",
    Section_6_Position_List: { populate: "*" },
    Section_7_Content: "*",
    Section_7_Button: "*",
    Section_7_Bg: "*",
  },
  pay_it_later_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Button: "*",
    Section_1_Feature_List: "*",
    Section_1_Image: "*",
    Section_1_Bg: "*",
    Section_1_Video: "*",
    Section_1_Video_Thumbnail: "*",
    Section_2_Title: "*",
    Section_2_Media_List: { populate: "*" },
    Section_3_Service_Intro_Title: "*",
    Section_3_Service_Intro_List: { populate: "*" },
    Section_3_Title: "*",
    Section_3_Image: "*",
    Section_3_Media_List: { populate: "*" },
    Section_4_Title: "*",
    Section_4_Image: "*",
    Section_4_Main_Paragraph: "*",
    Section_4_Button: "*",
    Section_4_Paragraph: "*",
    Section_4_Vendor_List: "*",
    Section_5_Title: "*",
    Section_5_Testimonial_List: {
      populate: {
        content: "*",
        logo: { populate: "*" },
        speaker: "*",
        title: "*",
      },
    },
    Section_6_Title: "*",
    Section_6_Content: "*",
    Section_6_Link_Button: "*",
    Section_6_Image: "*",
    Modal_Title: "*",
    Modal_Content: "*",
    Modal_Submit_Btn: "*",
  },
  resources_content: {
    Section_1_Paragraph: "*",
    Section_1_Image: "*",
    Section_2_Guides_Title: "*",
    Section_2_Guides_Icon: "*",
    Section_2_Flyers_Title: "*",
    Section_2_Flyers_Icon: "*",
    Section_2_Referrer_Title: "*",
    Section_2_Referrer_List: { populate: "*" },
    Section_2_PIL_Customer_Title: "*",
    Section_2_PIL_Customer_List: { populate: "*" },
  },
  dynamic_pricing_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Bg: "*",
    Section_2_Title: "*",
    Section_2_Gallery: {
      populate: {
        image: { populate: "*" },
        type: "*",
        width: "*",
        height: "*",
        description: "*",
      },
    },
    Section_3_Title: "*",
    Section_3_Bg: "*",
  },
  security_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_1_Bg: "*",
    Section_2_Title: "*",
    Section_2_Media_Markdown_List: {
      populate: {
        title: "*",
        image: { populate: "*" },
        content: "*",
      },
    },
  },
  pricing_content: {
    SEO: { populate: "*" },
    Section_1_Paragraph: "*",
    Section_3_Title: "*",
    Section_3_Button: "*",
    Modal_Trigger_Keyword: "*",
    Modal_1_Title: "*",
    Modal_1_Pricing_List: "*",
    Modal_1_Comment: "*",
    Modal_2_Title: "*",
    Modal_2_Local_Fees_Header_List: "*",
    Modal_2_Local_Fees_Group_List: {
      populate: {
        area: "*",
        locals: "*",
      },
    },
  },
  modal_content: {
    Successful_Paragraph: "*",
    Successful_Btn: "*",
    PIL_Modal_Title: "*",
    PIL_Modal_Content: { populate: "*" },
    PIL_Modal_Comment: "*",
    PIL_Modal_Image: "*",
    PIL_Modal_Paragraph: "*",
    PIL_Modal_Name_Label: "*",
    PIL_Modal_Email_Label: "*",
    PIL_Modal_Country_Label: "*",
    PIL_Modal_Company_Label: "*",
    PIL_Modal_Submit_Btn: "*",
    PIL_Modal_Successful_Message: "*",
    PIL_Modal_Successful_Btn: "*",
  },
};

const strapiOptions = {
  apiURL: process.env.GATSBY_STRAPI_URL,
  accessToken: process.env.GATSBY_STRAPI_TOKEN,
  queryLimit: 5000, // Defaults to 100
  collectionTypes: [
    localeStrapiObject("blog", "all", StrapiQueryParams.blog),
    localeStrapiObject("press-release", "all"),
    localeStrapiObject("press-new", "all"),
    localeStrapiObject("pricing", "all", StrapiQueryParams.pricing),
    localeStrapiObject("release-note", "all", StrapiQueryParams.release_note),
  ],
  singleTypes: [
    localeStrapiObject(
      "layout-content",
      "en",
      StrapiQueryParams.layout_content
    ),
    localeStrapiObject("front-content", "en", StrapiQueryParams.front_content),
    localeStrapiObject("payer-content", "en", StrapiQueryParams.payer_content),
    localeStrapiObject(
      "vendor-content",
      "en",
      StrapiQueryParams.vendor_content
    ),
    localeStrapiObject(
      "ecommerce-content",
      "en",
      StrapiQueryParams.ecommerce_content
    ),
    localeStrapiObject(
      "developer-content",
      "en",
      StrapiQueryParams.developer_content
    ),
    localeStrapiObject("blog-content", "en"),
    localeStrapiObject("press-content", "en"),
    localeStrapiObject(
      "policy-content",
      "en",
      StrapiQueryParams.policy_content
    ),
    localeStrapiObject("policy-bxtrade-content", "en"),
    localeStrapiObject(
      "about-us-content",
      "en",
      StrapiQueryParams.about_us_content
    ),
    localeStrapiObject(
      "career-content",
      "en",
      StrapiQueryParams.career_content
    ),
    localeStrapiObject(
      "pay-it-later-content",
      "en",
      StrapiQueryParams.pay_it_later_content
    ),
    localeStrapiObject("pil-referral-program-content", "en"),
    localeStrapiObject(
      "resources-content",
      "en",
      StrapiQueryParams.resources_content
    ),
    localeStrapiObject(
      "dynamic-pricing-content",
      "en",
      StrapiQueryParams.dynamic_pricing_content
    ),
    localeStrapiObject(
      "security-content",
      "en",
      StrapiQueryParams.security_content
    ),
    localeStrapiObject(
      "pricing-content",
      "en",
      StrapiQueryParams.pricing_content
    ),
    localeStrapiObject("release-note-content", "en"),
    localeStrapiObject("join-waitlist-content", "en"),
    localeStrapiObject("modal-content", "en", StrapiQueryParams.modal_content),
    localeStrapiObject("faq-content", "en"),
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.bluextrade.com/`,
    author: `BlueX`,
    title: `Bluex-Trade`,
    description: ``,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiOptions,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [...process.env.GATSBY_GOOGLE_ANALYTICS_ID.split(",")],
        gtagConfig: {
          send_page_view: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page };
          });
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.bluextrade.com/`,
        sitemap: `https://www.bluextrade.com/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
