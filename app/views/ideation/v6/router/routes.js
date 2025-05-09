module.exports = router => {

// Routes

router.get("/ideation/v6/phase", (req, res) => {
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

router.get("/ideation/v6/hosting-question", (req, res) => {
    if (req.session.data.hostingroute == "hosting") {
        res.redirect(req.originalUrl.replace("hosting-question","placement-hosting-yes"))
    }
    else if (req.session.data.hostingroute == "interested") {
        res.redirect(req.originalUrl.replace("hosting-question","placement-hosting-yes"))
    }
    else {
        res.redirect(req.originalUrl.replace("hosting-question","not-hosting-why"))
    }
})

router.get("/ideation/v6/hosting-question-two", (req, res) => {
    if (req.session.data.hostingroute == "hosting") {
        res.redirect(req.originalUrl.replace("hosting-question-two","placements-phase"))
    }
    else if (req.session.data.hostingroute == "interested") {
        res.redirect(req.originalUrl.replace("hosting-question-two","interested-contact"))
    }
})

router.get("/ideation/v6/submitprimary", (req, res) => {
    if (req.session.data.placementPhase[0] == "Secondary") {
        res.redirect(req.originalUrl.replace("submitprimary","placements-providers"))
    }
    else if (req.session.data.placementPhase[1] == "Secondary" ) {
        res.redirect(req.originalUrl.replace("submitprimary","placements-subjects-secondary"))
    }
    else {
        res.redirect(req.originalUrl.replace("submitprimary","placements-contact"))
    }
})

router.get("/ideation/v6/placements-done", (req, res) => {
    req.flash('success', 'Placement information uploaded')
    res.redirect(req.originalUrl.replace("placements-done","placements"))
})

}
