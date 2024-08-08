module.exports = router => {

// Notifications

router.get("/school-users/v2/placement-added", (req, res) => {
    req.flash('success', 'Placement added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingPlacement = "true"
        res.redirect(req.originalUrl.replace("placement-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("placement-added","placements"))
    }
})

router.get("/school-users/v2/placement-mentor-updated", (req, res) => {
    req.flash('success', 'Mentor updated')
    res.redirect(req.originalUrl.replace("placement-mentor-updated","placement-detail"))
})

router.get("/school-users/v2/placement-year-group-updated", (req, res) => {
    req.flash('success', 'Year group updated')
    res.redirect(req.originalUrl.replace("placement-year-group-updated","placement-detail"))
})

router.get("/school-users/v2/placement-assigned", (req, res) => {
    req.flash('success', 'Provider assigned')
    res.redirect(req.originalUrl.replace("placement-assigned","placement-detail"))
})

router.get("/school-users/v2/mentor-added", (req, res) => {
    req.flash('success', 'Mentor added')
    if (req.session.data.onboarding == "true") {
        req.session.data.mentorTRN = 1
        req.session.data.onboardingMentor = "true"
        res.redirect(req.originalUrl.replace("mentor-added","onboarding"))
    }
    else {
        req.session.data.mentorTRN = 1
        res.redirect(req.originalUrl.replace("mentor-added","mentors"))
    }
})

router.get("/school-users/v2/provider-added", (req, res) => {
    req.flash('success', 'Partner provider added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingProvider = "true"
        res.redirect(req.originalUrl.replace("provider-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("provider-added","providers"))
    }
})

router.get("/school-users/v2/itt-added", (req, res) => {
    req.flash('success', 'Placement contact added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingITTcontact = "true"
        res.redirect(req.originalUrl.replace("itt-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("itt-added","details"))
    }
})

router.get("/school-users/v2/user-added", (req, res) => {
    req.flash('success', 'User added')
    res.redirect(req.originalUrl.replace("user-added","users"))
})

router.get("/school-users/v2/placement-deleted", (req, res) => {
    req.flash('success', 'Placement deleted')
    res.redirect(req.originalUrl.replace("placement-deleted","placements"))
})

router.get("/school-users/v2/mentor-deleted", (req, res) => {
    req.flash('success', 'Mentor deleted')
    res.redirect(req.originalUrl.replace("mentor-deleted","mentors"))
})

router.get("/school-users/v2/provider-deleted", (req, res) => {
    req.flash('success', 'Provider deleted')
    res.redirect(req.originalUrl.replace("provider-deleted","[providers]"))
})

router.get("/school-users/v2/user-deleted", (req, res) => {
    req.flash('success', 'User deleted')
    res.redirect(req.originalUrl.replace("user-deleted","users"))
})

}