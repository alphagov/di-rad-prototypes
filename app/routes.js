const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()



router.post('/tgo/married-or-civil-partnership-redirect', function (req, res) {
    req.session.data['married-or-civil-partnership'] === "yes"
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04a-next-of-kin')
})

router.post('/tgo/next-of-kin-redirect', function (req, res) {
    req.session.data['next-of-kin'] === "yes"
        ? res.redirect('/tgo/05-your-contact-details')
        : res.redirect('/tgo/04b-managing-estate')
})

router.post('/tgo/managing-estate-redirect', function (req, res) {
    req.session.data['managing-estate'] === "yes"
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

router.post('/tgo/07-local-council', (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/07b-local-council')
        : res.redirect('/tgo/08-in-hospital')
})

router.post('/tgo/08-in-hospital', (req, res) => {
    req.session.data['in-hospital'] === "yes"
        ? res.redirect('/tgo/08b-which-hospital')
        : res.redirect('/tgo/09-council-services')
})
const blueBadgePicker = (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/10a-blue-badge-multi-council')
        : res.redirect('/tgo/10-blue-badge')
}

router.post('/tgo/09-council-services', (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/09b-council-services')
        : blueBadgePicker(req, res)
})

router.post('/tgo/09b-council-services', blueBadgePicker)

router.post('/tgo/10-blue-badge', (req, res) => {
    req.session.data['blue-badge'].includes("yes")
        ? res.redirect("/tgo/10b-what-to-do-about-blue-badge")
        : res.redirect("/tgo/11-keeper-of-vehicle")
})

router.post('/tgo/11-keeper-of-vehicle', (req, res) => {
    req.session.data['keeper-of-vehicle'] === "yes"
        ? res.redirect('/tgo/11a-what-to-do-about-vehicles')
        : res.redirect('/tgo/12-driving-license')
})

router.post('/tgo/search-address-redirect', function (req, res) {
    switch (req.session.data['house-number-name']) {
        case "0":
            res.redirect('/tgo/05c-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/05e-confirm-address')
            break;
        default:
            res.redirect('/tgo/05b-select-address')
            break;
    }
})

router.post('/tgo/further-address-search-redirect', function (req, res) {
    switch (req.session.data['further-address-house-number-name']) {
        case "0":
            res.redirect('/tgo/06c-further-address-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/06e-confirm-further-address')
            break;
        default:
            res.redirect('/tgo/06b-select-further-address')
            break;
    }
})
