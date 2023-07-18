/** @type {import('next').NextConfig} */
const nextConfig = {
env:{
    NEXT_PUBLIC_IMAGIN_API_KEY:"hrjavascript-mastery"
},
images: {
    domains: ["cdn.imagin.studio"]
}

}

module.exports = nextConfig
