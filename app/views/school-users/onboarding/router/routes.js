module.exports = router => {

// Notifications

router.get("/school-users/onboarding/placement-added", (req, res) => {
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingMentor = "true"
        res.redirect(req.originalUrl.replace("placement-added","onboarding"))
    }
    else {
        req.flash('success', 'Placement added')
        res.redirect(req.originalUrl.replace("placement-added","placements"))
    }
})

router.get("/school-users/onboarding/placement-updated", (req, res) => {
    req.flash('success', 'Placement updated')
    res.redirect(req.originalUrl.replace("placement-updated","placement-detail"))
})

router.get("/school-users/onboarding/mentor-added", (req, res) => {
    if (req.session.data.onboarding == "true") {
        req.session.data.mentorTRN = 1
        req.session.data.onboardingMentor = "true"
        res.redirect(req.originalUrl.replace("mentor-added","add-placement-phase"))
    }
    else {
        req.flash('success', 'Mentor added')
        req.session.data.mentorTRN = 1
        res.redirect(req.originalUrl.replace("mentor-added","mentors"))
    }
})

router.get("/school-users/onboarding/provider-added", (req, res) => {
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingProvider = "true"
        res.redirect(req.originalUrl.replace("provider-added","add-mentor"))
    }
    else {
        req.flash('success', 'Partner provider added')
        res.redirect(req.originalUrl.replace("provider-added","providers"))
    }
})

router.get("/school-users/onboarding/itt-added", (req, res) => {
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingITTcontact = "true"
        res.redirect(req.originalUrl.replace("itt-added","onboarding-add-users-question"))
    }
    else {
        req.flash('success', 'ITT placement contact added')
        res.redirect(req.originalUrl.replace("itt-added","details"))
    }
})

router.get("/school-users/onboarding/user-added", (req, res) => {
    req.flash('success', 'User added')
    res.redirect(req.originalUrl.replace("itt-added","details"))
})

// Onboarding routes

router.get("/school-users/onboarding/signin-redirect", (req, res) => {
    req.session.data.onboarding = "true"
    res.redirect(req.originalUrl.replace("signin-redirect","onboarding"))
})

router.get("/school-users/onboarding/onboarding-add-itt-contact-answer", (req, res) => {
    if (req.session.data.ittContactQuestion == "Yes") {
        req.session.data.ittContactName = "Ann Smith"
        req.session.data.ittContactEmail = "ann@example.com"
        req.session.data.onboardingITTcontact = "true"
		res.redirect(req.originalUrl.replace("onboarding-add-itt-contact-answer","onboarding-add-users-question"))
	}
	else {
		res.redirect(req.originalUrl.replace("onboarding-add-itt-contact-answer","add-itt-contact"))
	}
})

router.get("/school-users/onboarding/onboarding-add-users-answer", (req, res) => {
    req.session.data.onboardingAdminUsers = "true"
    if (req.session.data.addUsersQuestion == "Yes") {
		res.redirect(req.originalUrl.replace("onboarding-add-users-answer","add-user"))
	}
	else {
		res.redirect(req.originalUrl.replace("onboarding-add-users-answer","add-provider"))
	}
})


}
