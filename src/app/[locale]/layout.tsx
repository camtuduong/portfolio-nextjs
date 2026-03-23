import AnimationRouteChange from "@/components/motion/AnimationRouteChange";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { THEME } from "@/constants/theme";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { notFound } from "next/dist/client/components/navigation";
import "../globals.css";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme={THEME.LIGHT} attribute="class">
          <NextIntlClientProvider>
            <AnimationRouteChange>
              <SmoothScroll>{children}</SmoothScroll>
            </AnimationRouteChange>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
