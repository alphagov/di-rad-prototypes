const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/tgo/married-or-civil-partnership-redirect', function (req, res) {
    req.session.data['married-or-in-civil-partnership']
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04a-next-of-kin')
})

router.post('/tgo/next-of-kin-redirect', function (req, res) {
    req.session.data['next-of-kin'] === "yes"
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04b-managing-estate')
})

router.post('/tgo/managing-estate-redirect', function (req, res) {
    req.session.data['married-or-in-civil-partnership'] === "yes"
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04c-do-you-have-permission')
})

router.post('/tgo/do-you-have-permission-redirect', function (req, res) {
    req.session.data['do-you-have-permission'] === "yes"
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04d-no-permission-end')
})

router.post('/tgo/other-addresses-redirect', function (req, res) {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/06a-what-is-other-address')
        : res.redirect('/tgo/07-local-council')
})

router.post('/tgo/blue-badge-redirect', function (req, res) {
    req.session.data['has-blue-badge'] === "yes"
        ? res.redirect('/tgo/09a-what-to-do-about-blue-badge')
        : res.redirect('/tgo/10-keeper-of-vehicle')
})

router.post('/tgo/keeper-of-vehicle-redirect', function (req, res) {
    req.session.data['keeper-of-vehicle'] === "yes"
        ? res.redirect('/tgo/10a-what-to-do-about-vehicles')
        : res.redirect('/tgo/11-driving-license')
})
