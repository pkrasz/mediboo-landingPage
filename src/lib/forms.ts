export const formProvider = {
  endpoint:
    process.env.NEXT_PUBLIC_FORMS_ENDPOINT || "https://api.staticforms.xyz/submit",
  accessKey:
    process.env.NEXT_PUBLIC_STATICFORMS_ACCESS_KEY || "YOUR_STATICFORMS_ACCESS_KEY",
};

export const honeypotFieldName = "company";
