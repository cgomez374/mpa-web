const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));

export async function getStaticProps(context) {
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