module.exports = router => {

// Notifications

router.get("/school-user-001/placement-added", (req, res) => {
    req.flash('success', 'Placement added')
    res.redirect(req.originalUrl.replace("placement-added","placements"))
})

router.get("/school-user-001/placement-updated", (req, res) => {
    req.flash('success', 'Placement updated')
    res.redirect(req.originalUrl.replace("placement-updated","placement-detail"))
})

router.get("/school-user-001/mentor-added", (req, res) => {
    req.flash('success', 'Mentor added')
    req.session.data.mentorTRN = 1
    res.redirect(req.originalUrl.replace("mentor-added","mentors"))
})

router.get("/school-user-001/provider-added", (req, res) => {
    req.flash('success', 'Partner provider added')
    res.redirect(req.originalUrl.replace("provider-added","providers"))
})


}