module.exports = router => {

// Notifications

router.get("/provider-users/v1/trainee-proposed", (req, res) => {
    req.flash('success', 'Trainee profile has been sent to the school')
        res.redirect(req.originalUrl.replace("trainee-proposed","placement-detail"))
})

// Routes

}
