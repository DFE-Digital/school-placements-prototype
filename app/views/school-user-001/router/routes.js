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

}