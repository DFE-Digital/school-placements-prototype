module.exports = router => {

// Notifications

router.get("/support-users/v1/placement-added", (req, res) => {
    req.flash('success', 'Placement added')
    if (req.session.data.onboarding == "true") {
        req.session.data.onboardingPlacement = "true"
        res.redirect(req.originalUrl.replace("placement-added","onboarding"))
    }
    else {
        res.redirect(req.originalUrl.replace("placement-added","placements"))
    }
})

router.get("/support-users/v1/itt-added", (req, res) => {
    req.flash('success', 'Placement contact added')
    res.redirect(req.originalUrl.replace("itt-added","school"))

})

}
