const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    const education = [
        {
            "schoolName": "Stevens Institute of Technology",
            "degree": "Graduate Degree",
            "favoriteClass": "CS 546: Web Programming",
            "favoriteMemory": "Building Cool WebApps"
        },
        {
            "schoolName": "Pune University",
            "degree": "Under Graduate Degree",
            "favoriteClass": "Data Structures and Algorithms",
            "favoriteMemory": "Winning Hackathons"
        },
        {
            "schoolName": "N. W. College",
            "degree": "High School",
            "favoriteClass": "Computers",
            "favoriteMemory": "Learning coding"
        },
        {
            "schoolName": "J. N. Petit School",
            "degree": "Elementary School",
            "favoriteClass": "Mathematics",
            "favoriteMemory": "Playing Soccer"
        },
    ];
    response.json(education);
});

module.exports = router;