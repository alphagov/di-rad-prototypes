const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// V1
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

// V2

router.post('/tgo/v2/married-or-civil-partnership-redirect', function (req, res) {
    req.session.data['married-or-civil-partnership'] === "yes"
        ? res.redirect('/tgo/v2/05-your-contact-details')
        : res.redirect('/tgo/v2/04a-next-of-kin')
})

router.post('/tgo/v2/next-of-kin-redirect', function (req, res) {
    req.session.data['next-of-kin'] === "yes"
        ? res.redirect('/tgo/v2/05-your-contact-details')
        : res.redirect('/tgo/v2/04b-managing-estate')
})

router.post('/tgo/v2/managing-estate-redirect', function (req, res) {
    req.session.data['managing-estate'] === "yes"
        ? res.redirect('/tgo/v2/05-your-contact-details')
        : res.redirect('/tgo/v2/04c-do-you-have-permission')
})

router.post('/tgo/v2/do-you-have-permission-redirect', function (req, res) {
    req.session.data['do-you-have-permission'] === "yes"
        ? res.redirect('/tgo/v2/05-your-contact-details')
        : res.redirect('/tgo/v2/04d-no-permission-end')
})

router.post('/tgo/v2/other-addresses-redirect', function (req, res) {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/06a-what-is-other-address')
        : res.redirect('/tgo/v2/07-local-council')
})

router.post('/tgo/v2/07-local-council', (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/07b-local-council')
        : res.redirect('/tgo/v2/08-in-hospital')
})

router.post('/tgo/v2/08-in-hospital', (req, res) => {
    req.session.data['in-hospital'] === "yes"
        ? res.redirect('/tgo/v2/08b-which-hospital')
        : res.redirect('/tgo/v2/09-council-services')
})
const blueBadgePicker = (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/10a-blue-badge-multi-council')
        : res.redirect('/tgo/v2/10-blue-badge')
}

router.post('/tgo/v2/09-council-services', (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/09b-council-services')
        : blueBadgePicker(req, res)
})

router.post('/tgo/v2/09b-council-services', blueBadgePicker)

router.post('/tgo/v2/10-blue-badge', (req, res) => {
    req.session.data['blue-badge'].includes("yes")
        ? res.redirect("/tgo/v2/10b-what-to-do-about-blue-badge")
        : res.redirect("/tgo/v2/11-keeper-of-vehicle")
})

router.post('/tgo/v2/11-keeper-of-vehicle', (req, res) => {
    req.session.data['keeper-of-vehicle'] === "yes"
        ? res.redirect('/tgo/v2/11a-what-to-do-about-vehicles')
        : res.redirect('/tgo/v2/12-driving-license')
})

router.post('/tgo/v2/search-address-redirect', function (req, res) {
    switch (req.session.data['house-number-name']) {
        case "0":
            res.redirect('/tgo/v2/05c-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/v2/05e-confirm-address')
            break;
        default:
            res.redirect('/tgo/v2/05b-select-address')
            break;
    }
})

router.post('/tgo/v2/further-address-search-redirect', function (req, res) {
    switch (req.session.data['further-address-house-number-name']) {
        case "0":
            res.redirect('/tgo/v2/06c-further-address-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/v2/06e-confirm-further-address')
            break;
        default:
            res.redirect('/tgo/v2/06b-select-further-address')
            break;
    }
})
