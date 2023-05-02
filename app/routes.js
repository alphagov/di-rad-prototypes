const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// V1
router.post('/tgo/v1/married-or-civil-partnership-redirect', function (req, res) {
    req.session.data['married-or-civil-partnership'] === "yes"
        ? res.redirect('/tgo/v1/05-your-contact-details')
        : res.redirect('/tgo/v1/04a-next-of-kin')
})

router.post('/tgo/v1/next-of-kin-redirect', function (req, res) {
    req.session.data['next-of-kin'] === "yes"
        ? res.redirect('/tgo/v1/05-your-contact-details')
        : res.redirect('/tgo/v1/04b-managing-estate')
})

router.post('/tgo/v1/managing-estate-redirect', function (req, res) {
    req.session.data['managing-estate'] === "yes"
        ? res.redirect('/tgo/v1/05-your-contact-details')
        : res.redirect('/tgo/v1/04c-do-you-have-permission')
})

router.post('/tgo/v1/do-you-have-permission-redirect', function (req, res) {
    req.session.data['do-you-have-permission'] === "yes"
        ? res.redirect('/tgo/v1/05-your-contact-details')
        : res.redirect('/tgo/v1/04d-no-permission-end')
})

router.post('/tgo/v1/other-addresses-redirect', function (req, res) {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v1/06a-what-is-other-address')
        : res.redirect('/tgo/v1/07-local-council')
})

router.post('/tgo/v1/blue-badge-redirect', function (req, res) {
    req.session.data['has-blue-badge'] === "yes"
        ? res.redirect('/tgo/v1/09a-what-to-do-about-blue-badge')
        : res.redirect('/tgo/v1/10-keeper-of-vehicle')
})

router.post('/tgo/v1/keeper-of-vehicle-redirect', function (req, res) {
    req.session.data['keeper-of-vehicle'] === "yes"
        ? res.redirect('/tgo/v1/10a-what-to-do-about-vehicles')
        : res.redirect('/tgo/v1/11-driving-license')
})

router.post('/tgo/v1/search-address-redirect', function (req, res) {
    switch (req.session.data['house-number-name']) {
        case "0":
            res.redirect('/tgo/v1/05c-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/v1/05e-confirm-address')
            break;
        default:
            res.redirect('/tgo/v1/05b-select-address')
            break;
    }
})

router.post('/tgo/v1/further-address-search-redirect', function (req, res) {
    switch (req.session.data['further-address-house-number-name']) {
        case "0":
            res.redirect('/tgo/v1/06c-further-address-no-address-found')
            break;
        case "1":
            res.redirect('/tgo/v1/06e-confirm-further-address')
            break;
        default:
            res.redirect('/tgo/v1/06b-select-further-address')
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

router.post('/tgo/v2/07a-council-services', (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/07b-local-council')
        : res.redirect('/tgo/v2/08-in-hospital')
})

const blueBadgePicker = (req, res) => {
    req.session.data['has-other-addresses'] === "yes"
        ? res.redirect('/tgo/v2/09a-blue-badge-multi-council')
        : res.redirect('/tgo/v2/09-blue-badge')
}

router.post('/tgo/v2/08-in-hospital', (req, res) => {
    req.session.data['in-hospital'] === "yes"
        ? res.redirect('/tgo/v2/08b-which-hospital')
        : blueBadgePicker(req, res)
})

router.post('/tgo/v2/08b-which-hospital', blueBadgePicker)

router.post('/tgo/v2/09-blue-badge', (req, res) => {
    req.session.data['blue-badge'].includes("yes")
        ? res.redirect("/tgo/v2/09b-what-to-do-about-blue-badge")
        : res.redirect("/tgo/v2/10-keeper-of-vehicle")
})

router.post('/tgo/v2/10-keeper-of-vehicle', (req, res) => {
    req.session.data['keeper-of-vehicle'] === "yes"
        ? res.redirect('/tgo/v2/10a-what-to-do-about-vehicles')
        : res.redirect('/tgo/v2/11-driving-license')
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
