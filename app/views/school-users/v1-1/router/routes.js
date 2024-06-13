module.exports = router => {

// Notifications

router.get("/school-users/v1-1/placement-added", (req, res) => {
    req.flash('success', 'Placement added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingPlacement = "true"
        res.redirect(req.originalUrl.replace("placement-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("placement-added","placements"))
    }
})

router.get("/school-users/v1-1/placement-mentor-updated", (req, res) => {
    req.flash('success', 'Mentor updated')
    res.redirect(req.originalUrl.replace("placement-mentor-updated","placement-detail"))
})

router.get("/school-users/v1-1/placement-year-group-updated", (req, res) => {
    req.flash('success', 'Year group updated')
    res.redirect(req.originalUrl.replace("placement-year-group-updated","placement-detail"))
})

router.get("/school-users/v1-1/placement-assigned", (req, res) => {
    req.flash('success', 'Provider assigned')
    res.redirect(req.originalUrl.replace("placement-assigned","placement-detail"))
})

router.get("/school-users/v1-1/mentor-added", (req, res) => {
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

router.get("/school-users/v1-1/provider-added", (req, res) => {
    req.flash('success', 'Partner provider added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingProvider = "true"
        res.redirect(req.originalUrl.replace("provider-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("provider-added","providers"))
    }
})

router.get("/school-users/v1-1/itt-added", (req, res) => {
    req.flash('success', 'Placement contact added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingITTcontact = "true"
        res.redirect(req.originalUrl.replace("itt-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("itt-added","details"))
    }
})

router.get("/school-users/v1-1/user-added", (req, res) => {
    req.flash('success', 'User added')
    res.redirect(req.originalUrl.replace("user-added","users"))
})

// Onboarding routes

router.get("/school-users/v1-1/skip-onboarding", (req, res) => {
    req.session.data.onboarding = "false"
    req.session.data.mentorTRN = 1
    req.session.data.ittContactFirstName = "James"
    req.session.data.ittContactLastName = "Richardson"
    req.session.data.ittContactEmail = "james.richardson@whitburn.ac.uk"
    req.session.data.placementPhase = "Secondary"
    req.session.data.placementSubject = "Computing"
    req.session.data.placementMentor = "Not known yet"
    req.session.data.placementMonths = "All months"
    req.session.data.placementYear = "2024-2025"
    res.redirect(req.originalUrl.replace("skip-onboarding","index"))
})

router.get("/school-users/v1-1/signin-redirect", (req, res) => {
    if (req.session.data.onboarding == "false") {
        res.redirect(req.originalUrl.replace("signin-redirect","placements"))
    }
    else {
        req.session.data.onboarding = "true"
        res.redirect(req.originalUrl.replace("signin-redirect","onboarding"))
    }
})

router.get("/school-users/v1-1/onboarding-add-itt-contact-answer", (req, res) => {
    if (req.session.data.ittContactQuestion == "Yes") {
        req.flash('success', 'ITT placement contact added')
        req.session.data.ittContactName = "Ann Smith"
        req.session.data.ittContactEmail = "ann@example.com"
        req.session.data.onboardingITTcontact = "true"
		res.redirect(req.originalUrl.replace("onboarding-add-itt-contact-answer","onboarding"))
	}
	else {
		res.redirect(req.originalUrl.replace("onboarding-add-itt-contact-answer","add-itt-contact"))
	}
})

router.get("/school-users/v1-1/onboarding-add-users-answer", (req, res) => {
    req.session.data.onboardingAdminUsers = "true"
    if (req.session.data.addUsersQuestion == "Yes") {
		res.redirect(req.originalUrl.replace("onboarding-add-users-answer","add-user"))
	}
	else {
		res.redirect(req.originalUrl.replace("onboarding-add-users-answer","onboarding"))
	}
})

router.get("/school-users/v1-1/onboarding-complete", (req, res) => {
    req.session.data.onboarding = "false"
	res.redirect(req.originalUrl.replace("onboarding-complete","placements"))
})

}
