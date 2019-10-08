const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    const aboutMe = {
        "name": "Zubair Shaikh",
        "cwid": "10444383",
        "biography": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit amet aliquam id diam. Elementum nisi quis eleifend quam adipiscing vitae. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Egestas sed tempus urna et pharetra pharetra massa massa. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Egestas erat imperdiet sed euismod nisi porta. Arcu dictum varius duis at consectetur lorem. Rhoncus dolor purus non enim praesent elementum. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Pellentesque elit eget gravida cum. Mattis rhoncus urna neque viverra. Consequat id porta nibh venenatis cras sed. Sed odio morbi quis commodo odio aenean. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Morbi tristique senectus et netus et malesuada fames. Tempor id eu nisl nunc mi ipsum faucibus vitae. Sollicitudin tempor id eu nisl nunc mi ipsum. Nullam non nisi est sit amet facilisis magna etiam.\nMassa massa ultricies mi quis. Nulla facilisi cras fermentum odio eu. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Aliquet enim tortor at auctor urna nunc id. Non odio euismod lacinia at quis risus sed vulputate odio. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Id leo in vitae turpis massa sed. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Laoreet sit amet cursus sit amet. Risus nullam eget felis eget.",
        "favoriteShows": ["quis", "risus", "sed", "vulputate", "odio"],
        "hobbies": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Arcu vitae elementum curabitur vitae nunc.",
            "Leo urna molestie at elementum eu facilisis sed odio morbi.",
            "Sociis natoque penatibus et magnis dis parturient montes nascetur.",
            "Sed cras ornare arcu dui vivamus arcu felis bibendum ut."]
    };
    response.json(aboutMe);
});

module.exports = router;