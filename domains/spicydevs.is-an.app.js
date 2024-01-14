addSubDomain({
  description: 'redirect for spicydevs website', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'spicydevs', // desired subdomain name
  owner: {
    repo: 'https://github.com/SpicyDevs/spicydevs.github.io/',
    email: 'aayushmagrawal@gmail.com',
  },
  record: {
    CNAME: 'spicydevs.pages.dev', // e.g.: <your-github-account>.github.io
  },
       
