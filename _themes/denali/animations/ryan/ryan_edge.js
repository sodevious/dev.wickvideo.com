/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='assets/animations/ryan/images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'ryan_arm_L_upper',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_arm_L_upper.png",'0px','0px'],
            transform:[[],[],[],[],['39%','33%']]
         },
         {
            id:'ryan_arm_L_lower',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_arm_L_lower.png",'0px','0px'],
            transform:[[],[],[],[],['13%','37%']]
         },
         {
            id:'ryan_arm_R_upper',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_arm_R_upper.png",'0px','0px'],
            transform:[[],[],[],[],['61%','33%']]
         },
         {
            id:'ryan_arm_R_lower',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_arm_R_lower.png",'0px','0px'],
            transform:[[],[],[],[],['87%','37%']]
         },
         {
            id:'ryan_body',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_body.png",'0px','0px']
         },
         {
            id:'ryan_head',
            type:'image',
            rect:['0','0','400px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ryan_head.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_ryan_arm_L_upper}": [
            ["style", "-webkit-transform-origin", [39,33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [39,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [39,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [39,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [39,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ryan_arm_R_upper}": [
            ["style", "-webkit-transform-origin", [61,33], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [61,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [61,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [61,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [61,33],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_ryan_arm_L_lower}": [
            ["style", "-webkit-transform-origin", [13,37], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [13,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [13,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [13,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [13,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Ryan}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '400px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ryan_arm_R_lower}": [
            ["style", "-webkit-transform-origin", [87,37], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [87,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [87,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [87,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [87,37],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "transform", "${_ryan_arm_L_upper}", "rotateZ", '35deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid29", tween: [ "transform", "${_ryan_arm_L_upper}", "rotateZ", '0deg', { fromValue: '35deg'}], position: 500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid43", tween: [ "transform", "${_ryan_arm_L_upper}", "rotateZ", '35deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid53", tween: [ "transform", "${_ryan_arm_L_upper}", "rotateZ", '0deg', { fromValue: '35deg'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid10", tween: [ "style", "${_ryan_arm_L_lower}", "left", '-4px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid13", tween: [ "style", "${_ryan_arm_L_lower}", "left", '0px', { fromValue: '-4px'}], position: 250, duration: 250, easing: "easeInOutCubic" },
            { id: "eid23", tween: [ "style", "${_ryan_arm_L_lower}", "left", '-4px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeInOutCubic" },
            { id: "eid27", tween: [ "style", "${_ryan_arm_L_lower}", "left", '0px', { fromValue: '-4px'}], position: 750, duration: 250, easing: "easeInOutCubic" },
            { id: "eid37", tween: [ "style", "${_ryan_arm_L_lower}", "left", '-4px', { fromValue: '0px'}], position: 1000, duration: 250, easing: "easeInOutCubic" },
            { id: "eid41", tween: [ "style", "${_ryan_arm_L_lower}", "left", '0px', { fromValue: '-4px'}], position: 1250, duration: 250, easing: "easeInOutCubic" },
            { id: "eid45", tween: [ "style", "${_ryan_arm_L_lower}", "left", '-4px', { fromValue: '0px'}], position: 1500, duration: 250, easing: "easeInOutCubic" },
            { id: "eid51", tween: [ "style", "${_ryan_arm_L_lower}", "left", '0px', { fromValue: '-4px'}], position: 1750, duration: 250, easing: "easeInOutCubic" },
            { id: "eid15", tween: [ "style", "${_ryan_arm_R_lower}", "left", '4px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutCubic" },
            { id: "eid21", tween: [ "style", "${_ryan_arm_R_lower}", "left", '0px', { fromValue: '4px'}], position: 250, duration: 250, easing: "easeInOutCubic" },
            { id: "eid22", tween: [ "style", "${_ryan_arm_R_lower}", "left", '4px', { fromValue: '0px'}], position: 500, duration: 250, easing: "easeInOutCubic" },
            { id: "eid24", tween: [ "style", "${_ryan_arm_R_lower}", "left", '0px', { fromValue: '4px'}], position: 750, duration: 250, easing: "easeInOutCubic" },
            { id: "eid36", tween: [ "style", "${_ryan_arm_R_lower}", "left", '4px', { fromValue: '0px'}], position: 1000, duration: 250, easing: "easeInOutCubic" },
            { id: "eid38", tween: [ "style", "${_ryan_arm_R_lower}", "left", '0px', { fromValue: '4px'}], position: 1250, duration: 250, easing: "easeInOutCubic" },
            { id: "eid44", tween: [ "style", "${_ryan_arm_R_lower}", "left", '4px', { fromValue: '0px'}], position: 1500, duration: 250, easing: "easeInOutCubic" },
            { id: "eid48", tween: [ "style", "${_ryan_arm_R_lower}", "left", '0px', { fromValue: '4px'}], position: 1750, duration: 250, easing: "easeInOutCubic" },
            { id: "eid8", tween: [ "style", "${_ryan_arm_L_lower}", "top", '-64px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid28", tween: [ "style", "${_ryan_arm_L_lower}", "top", '0px', { fromValue: '-64px'}], position: 500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid42", tween: [ "style", "${_ryan_arm_L_lower}", "top", '-64px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid52", tween: [ "style", "${_ryan_arm_L_lower}", "top", '0px', { fromValue: '-64px'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid4", tween: [ "transform", "${_ryan_arm_R_upper}", "rotateZ", '-35deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid26", tween: [ "transform", "${_ryan_arm_R_upper}", "rotateZ", '0deg', { fromValue: '-35deg'}], position: 500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid40", tween: [ "transform", "${_ryan_arm_R_upper}", "rotateZ", '-35deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid50", tween: [ "transform", "${_ryan_arm_R_upper}", "rotateZ", '0deg', { fromValue: '-35deg'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid20", tween: [ "style", "${_ryan_arm_R_lower}", "top", '-64px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid25", tween: [ "style", "${_ryan_arm_R_lower}", "top", '0px', { fromValue: '-64px'}], position: 500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid39", tween: [ "style", "${_ryan_arm_R_lower}", "top", '-64px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
            { id: "eid49", tween: [ "style", "${_ryan_arm_R_lower}", "top", '0px', { fromValue: '-64px'}], position: 1500, duration: 500, easing: "easeInOutCubic" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-39292798");
