

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    token: 'e6421893b64882a3107568de1ad81896b43b1b8251d205fe83a43761ae5b76204712a773ef08b37318e3f740ec2b11596ec30dca327e8a771848715dbd603f071b3fa0b9e960829b24494fdda0837d99aedebcd3af03ff2bdff9a2d839cf79cb4d6c3601b3e06eadf5cf5dd575c913bef7f83c9cc10de6910c2987a840bf64ae',
    api: 'http://10.0.0.191:1337',
    apiParams: 'populate[0]=schedule.monday&populate[1]=schedule.tuesday&populate[2]=schedule.wednesday&populate[3]=schedule.thursday&populate[4]=schedule.friday&populate[5]=schedule.saturday&populate[6]=schedule.sunday&populate[7]=address.region&populate[8]=address.locality&populate[9]=address.street&populate[10]=address.coordinates&populate[11]=delivery.locality&populate[12]=coal_products&populate[13]=additional_services&populate[14]=contacts.emails&populate[15]=contacts.phones'
  },
  reactStrictMode: true,
}

module.exports = nextConfig