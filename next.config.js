const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");
const tailwindCss = require("tailwindcss");
module.exports = withCSS(withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [tailwindCss("./tailwind.config.js")]
          }
        },
        { loader: "sass-loader" }
      ]
    });

    return config;
  }
}));

// removed export 

async function getStaticProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

module.exports = {
  env: {
    PAYPAL_CLIENT_ID: 'AcE2FJA6KsYpWWoouBGFMsatcYY-iuqBUdQ2bmIVA58b3Y1nx2mOezWv1M0mAMVbz6vbaCgIxHsii97_',
    STRIPE_SECRET: 'sk_test_51IJ7AkCjeDJlMiD8gG9fxLT79xqREjuQxyYDuL4J7LwhJmJAoDgj2vcnTJjbbwt8fgq3JLDmQ34r5wUu2czXsmkP00p2ob9p6J',
    STRIPE_PUBLISHABLE_KEY: 'pk_test_51IJ7AkCjeDJlMiD8HZcbugYazebPLglw4Fx1OrZR02oKm0WA1P7JJQoYuhbmIhrBC8rvZvTKCT0av1OJxIOUIDFY007LPf97ct '

  },
}