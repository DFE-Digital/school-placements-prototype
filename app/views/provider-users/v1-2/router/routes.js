module.exports = router => {

// Notifications
router.get("/provider-users/v1-2/user-added", (req, res) => {
    req.flash('success', 'User added')
    res.redirect(req.originalUrl.replace("user-added","users"))
})

router.get("/provider-users/v1-2/school-added", (req, res) => {
    req.flash('success', 'Partner school added')
        res.redirect(req.originalUrl.replace("school-added","schools"))

})
// Routes

}