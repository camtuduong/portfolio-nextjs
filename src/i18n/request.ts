import fs from "fs";
import { getRequestConfig } from "next-intl/server";
import path from "path";
import { routing } from "./routing";
import { Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  const dirPath = path.join(process.cwd(), "messages", locale);
  const files = fs.readdirSync(dirPath);
  const messages = files.reduce((acc, fileName) => {
    const filePath = path.join(dirPath, fileName);
    const fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return { ...acc, ...fileContent };
  }, {});
  return {
    locale,
    messages: messages,
  };
});
