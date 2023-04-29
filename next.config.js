/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n:{
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  images: {
    domains: ["adm.rixmy.com"],
    // formats: ['image/png', 'image/jpg']
  },
  env: {
    GOOGLE_ANALYTICS_ID: "G-G1FZMRCV8T"
  }
}

module.exports = nextConfig

