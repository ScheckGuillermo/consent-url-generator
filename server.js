
const querystring = require('querystring');
require('dotenv').config();
function getGoogleUrl() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: 'http://localhost:3000',
        client_id: process.env.GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope:
            [
                'https://www.googleapis.com/auth/userinfo.email', 'openid', 'https://www.googleapis.com/auth/userinfo.profile'
            ].join(' ')
    };
    return `${rootUrl}?${querystring.stringify(options)}`;
}

const app = require('express')()

app.listen(3000, () => { { console.log(`Url: ${getGoogleUrl()}`) } })

app.get('/', (req, res) => {
    console.log(req.query.code)
    res.send('Code sent')
})

