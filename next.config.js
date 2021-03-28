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