const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    const story = {
        "storyTitle": "The MEAN developer",
        "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra ipsum nunc aliquet bibendum enim. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Sed euismod nisi porta lorem mollis aliquam ut. Feugiat in ante metus dictum at tempor. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. A arcu cursus vitae congue mauris rhoncus. Vulputate eu scelerisque felis imperdiet proin fermentum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut etiam sit amet nisl purus. At tellus at urna condimentum mattis pellentesque id nibh.\nVolutpat sed cras ornare arcu dui vivamus arcu. Velit egestas dui id ornare arcu odio ut. Ut porttitor leo a diam sollicitudin tempor. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Convallis aenean et tortor at risus viverra. Leo vel fringilla est ullamcorper eget nulla facilisi. Habitant morbi tristique senectus et netus et malesuada fames ac. Tellus mauris a diam maecenas sed enim ut sem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tincidunt arcu non sodales neque sodales. Eu augue ut lectus arcu bibendum at varius. Odio ut sem nulla pharetra diam sit amet. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Neque gravida in fermentum et sollicitudin ac orci phasellus.\nAliquam sem fringilla ut morbi tincidunt augue. Tellus in hac habitasse platea. Lobortis scelerisque fermentum dui faucibus in ornare. Elit ullamcorper dignissim cras tincidunt lobortis. Morbi non arcu risus quis varius quam quisque id diam. Laoreet non curabitur gravida arcu ac. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Dictum sit amet justo donec enim diam vulputate. Lacinia quis vel eros donec ac odio tempor orci dapibus. Quam viverra orci sagittis eu volutpat odio. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Neque vitae tempus quam pellentesque nec. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Tempor orci eu lobortis elementum. Enim praesent elementum facilisis leo vel fringilla.\nFacilisis gravida neque convallis a cras. Vel facilisis volutpat est velit egestas dui id ornare. Metus vulputate eu scelerisque felis imperdiet proin fermentum. A erat nam at lectus. Elementum nibh tellus molestie nunc non blandit massa enim nec. Elit duis tristique sollicitudin nibh sit amet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Id faucibus nisl tincidunt eget nullam non nisi est sit. Ultrices dui sapien eget mi proin sed libero. Eu non diam phasellus vestibulum lorem. Enim facilisis gravida neque convallis. Sit amet nulla facilisi morbi tempus iaculis. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.\nPulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Rhoncus mattis rhoncus urna neque viverra. Mi proin sed libero enim sed faucibus turpis. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Euismod elementum nisi quis eleifend quam adipiscing. Arcu risus quis varius quam quisque. Massa eget egestas purus viverra accumsan. Augue eget arcu dictum varius duis at consectetur lorem donec. Ultricies integer quis auctor elit. Id cursus metus aliquam eleifend mi in nulla."
    };
    response.json(story);
});

module.exports = router;