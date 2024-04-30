module.exports = router => {

// Notifications

router.get("/school-user-002/placement-added", (req, res) => {
    req.flash('success', 'Placement added')
    res.redirect(req.originalUrl.replace("placement-added","placements"))
})

router.get("/school-user-002/placement-updated", (req, res) => {
    req.flash('success', 'Placement updated')
    res.redirect(req.originalUrl.replace("placement-updated","placement-detail"))
})

router.get("/school-user-002/placement-updated-2", (req, res) => {
    req.flash('success', 'Placement updated')
    res.redirect(req.originalUrl.replace("placement-updated-2","placement-detail-2"))
})

router.get("/school-user-002/mentor-added", (req, res) => {
    req.flash('success', 'Mentor added')
    res.redirect(req.originalUrl.replace("mentor-added","mentors"))
})

router.get("/school-user-002/provider-added", (req, res) => {
    req.flash('success', 'Partner provider added')
    res.redirect(req.originalUrl.replace("provider-added","providers"))
})

// Routes

}