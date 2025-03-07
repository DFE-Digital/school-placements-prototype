module.exports = router => {

// Routes

router.get("/ideation/v5/phase", (req, res) => {
    if (req.session.data.placementPhase[0] == "Secondary") {
        req.session.data.phase = "secondary"
        res.redirect(req.originalUrl.replace("phase","placements-subjects-secondary"))
    }
    else if (req.session.data.placementPhase[1] == "Secondary" ) {
        req.session.data.phase = "both"
        res.redirect(req.originalUrl.replace("phase","placements-subjects-primary"))
    }
    else {
        req.session.data.phase = "primary"
        res.redirect(req.originalUrl.replace("phase","placements-subjects-primary"))
    }
})

router.get("/ideation/v5/hosting-question", (req, res) => {
    if (req.session.data.hostingroute == "hosting") {
        res.redirect(req.originalUrl.replace("hosting-question","placements-phase"))
    }
    else if (req.session.data.hostingroute == "interested") {
        res.redirect(req.originalUrl.replace("hosting-question","interested-contact"))
    }
    else {
        res.redirect(req.originalUrl.replace("hosting-question","not-hosting-why"))
    }
})

router.get("/ideation/v5/submitprimary", (req, res) => {
    if (req.session.data.placementPhase[0] == "Secondary") {
        res.redirect(req.originalUrl.replace("submitprimary","placements-providers"))
    }
    else if (req.session.data.placementPhase[1] == "Secondary" ) {
        res.redirect(req.originalUrl.replace("submitprimary","placements-subjects-secondary"))
    }
    else {
        res.redirect(req.originalUrl.replace("submitprimary","placements-providers"))
    }
})

}
