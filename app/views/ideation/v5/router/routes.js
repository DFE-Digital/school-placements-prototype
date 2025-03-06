module.exports = router => {

// Routes
router.get("/ideation/v5/hosting-question", (req, res) => {
    if (req.session.data.hostingroute == "hosting") {
        res.redirect(req.originalUrl.replace("hosting-question","green"))
    }
    else if (req.session.data.hostingroute == "interested") {
        res.redirect(req.originalUrl.replace("hosting-question","interested-contact"))
    }
    else {
        res.redirect(req.originalUrl.replace("hosting-question","not-hosting-why"))
    }
})
}
