// init controller
var controller = new ScrollMagic.Controller();

//SEC TITLE 1

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle1',
        reverse: false
    })
    .setClassToggle('#secTitle1', 'show')


    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 2

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle2',
        reverse: false
    })
    .setClassToggle('#secTitle2', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 2

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText2',
        reverse: false
    })
    .setClassToggle('#secTitleText2', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 3

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle3',
        reverse: false
    })
    .setClassToggle('#secTitle3', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 3

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText3',
        reverse: false
    })
    .setClassToggle('#secTitleText3', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 4

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle4',
        reverse: false
    })
    .setClassToggle('#secTitle4', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 4

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText4',
        reverse: false
    })
    .setClassToggle('#secTitleText4', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 5

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle5',
        reverse: false
    })
    .setClassToggle('#secTitle5', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 5

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText5',
        reverse: false
    })
    .setClassToggle('#secTitleText5', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 6

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle6',
        reverse: false
    })
    .setClassToggle('#secTitle6', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 6

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText6',
        reverse: false
    })
    .setClassToggle('#secTitleText6', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 7

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle7',
        reverse: false
    })
    .setClassToggle('#secTitle7', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 7

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText7',
        reverse: false
    })
    .setClassToggle('#secTitleText7', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE 8

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitle8',
        reverse: false
    })
    .setClassToggle('#secTitle8', 'show')

    // assign the scene to the controller
    .addTo(controller);

//SEC TITLE TEXT 8

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#secTitleText8',
        reverse: false
    })
    .setClassToggle('#secTitleText8', 'show')

    // assign the scene to the controller
    .addTo(controller);

//BATTERY1

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#battery',
        reverse: false
    })
    .setClassToggle('#battery', 'show')

    // assign the scene to the controller
    .addTo(controller);

//BATTERY2

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#batteryBar1',
        reverse: false
    })
    .setClassToggle('#batteryBar1', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#batteryBar2',
        reverse: false
    })
    .setClassToggle('#batteryBar2', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#batteryBar3',
        reverse: false
    })
    .setClassToggle('#batteryBar3', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#batteryBar4',
        reverse: false
    })
    .setClassToggle('#batteryBar4', 'show')

    // assign the scene to the controller
    .addTo(controller);

//GRID

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#gridRight',
        reverse: false
    })
    .setClassToggle('#gridRight', 'move')

    // assign the scene to the controller
    .addTo(controller);

//SATELLITE

var R = 800;

if (document.documentElement.clientWidth < 768) {
    var R = 240;
}

TweenMax.to("#satellite", 5, {
    bezier: {
        curviness: 1.5,
        values: [{
            x: 0,
            y: 0
        }, {
            x: -R / 2,
            y: R / 2
        }, {
            x: 0,
            y: R
        }, {
            x: R / 2,
            y: R / 2
        }, {
            x: 0,
            y: 0
        }]
    },
    ease: Power0.easeNone,
    repeat: -1
});

//GRAPH

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#path',
        reverse: false
    })
    .setClassToggle('#path', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#graphDollar',
        reverse: false
    })
    .setClassToggle('#graphDollar', 'show')

    // assign the scene to the controller
    .addTo(controller);

//NATION

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#china',
        reverse: false
    })

    .setClassToggle('#china', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#america',
        reverse: false
    })
    .setClassToggle('#america', 'show')

    // assign the scene to the controller
    .addTo(controller);

//TURBINE

rotateCD = new TweenMax.to('#turbine', 10, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
}, {
    timeScale: 0
});

rotateCD = new TweenMax.to('#turbineshadow', 10, {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
}, {
    timeScale: 0
});

//DOLLAR

//ROW ONE

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y1',
        reverse: false
    })
    .setClassToggle('#dollarX1Y1', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y2',
        reverse: false
    })
    .setClassToggle('#dollarX1Y2', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y3',
        reverse: false
    })
    .setClassToggle('#dollarX1Y3', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y4',
        reverse: false
    })
    .setClassToggle('#dollarX1Y4', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y5',
        reverse: false
    })
    .setClassToggle('#dollarX1Y5', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y6',
        reverse: false
    })
    .setClassToggle('#dollarX1Y6', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX1Y7',
        reverse: false
    })
    .setClassToggle('#dollarX1Y7', 'show')

    // assign the scene to the controller
    .addTo(controller);

//ROW TWO

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y1',
        reverse: false
    })
    .setClassToggle('#dollarX2Y1', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y2',
        reverse: false
    })
    .setClassToggle('#dollarX2Y2', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y3',
        reverse: false
    })
    .setClassToggle('#dollarX2Y3', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y4',
        reverse: false
    })
    .setClassToggle('#dollarX2Y4', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y5',
        reverse: false
    })
    .setClassToggle('#dollarX2Y5', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y6',
        reverse: false
    })
    .setClassToggle('#dollarX2Y6', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX2Y7',
        reverse: false
    })
    .setClassToggle('#dollarX2Y7', 'show')

    // assign the scene to the controller
    .addTo(controller);

//ROW 3

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y1',
        reverse: false
    })
    .setClassToggle('#dollarX3Y1', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y2',
        reverse: false
    })
    .setClassToggle('#dollarX3Y2', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y3',
        reverse: false
    })
    .setClassToggle('#dollarX3Y3', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y4',
        reverse: false
    })
    .setClassToggle('#dollarX3Y4', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y5',
        reverse: false
    })
    .setClassToggle('#dollarX3Y5', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y6',
        reverse: false
    })
    .setClassToggle('#dollarX3Y6', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX3Y7',
        reverse: false
    })
    .setClassToggle('#dollarX3Y7', 'show')

    // assign the scene to the controller
    .addTo(controller);

//ROW 4

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y1',
        reverse: false
    })
    .setClassToggle('#dollarX4Y1', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y2',
        reverse: false
    })
    .setClassToggle('#dollarX4Y2', 'show')

    // assign the scene to the controller
    .addTo(controller);

// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y3',
        reverse: false
    })
    .setClassToggle('#dollarX4Y3', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y4',
        reverse: false
    })
    .setClassToggle('#dollarX4Y4', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y5',
        reverse: false
    })
    .setClassToggle('#dollarX4Y5', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y6',
        reverse: false
    })
    .setClassToggle('#dollarX4Y6', 'show')

    // assign the scene to the controller
    .addTo(controller);


// create a scene
var ourScene = new ScrollMagic.Scene({
        triggerElement: '#dollarX4Y7',
        reverse: false
    })
    .setClassToggle('#dollarX4Y7', 'show')

    // assign the scene to the controller
    .addTo(controller);
