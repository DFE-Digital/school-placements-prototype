//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

const flash = require('connect-flash')
router.use(flash())

router.all('*', (req, res, next) => {
    res.locals.flash = req.flash('success')
    next()
})

// Link to school router files

require('./views/school-users/v1/router/routes')(router)
require('./views/school-users/v1-1/router/routes')(router)

require('./views/ur-archive/school-user-001/router/routes')(router)
require('./views/ur-archive/school-user-002/router/routes')(router)
require('./views/ur-archive/school-user-003/router/routes')(router)

// Link to provider router files

require('./views/provider-users/v1/router/routes')(router)
