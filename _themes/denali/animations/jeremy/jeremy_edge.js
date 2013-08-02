/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='assets/animations/jeremy/images/';

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
            id:'jeremy_arm_upper',
            type:'image',
            rect:['0','0','140px','210px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"jeremy_arm_upper.png",'0px','0px'],
            transform:[[],[],[],[],['50%','30%']]
         },
         {
            id:'jeremy_arm_lower',
            type:'image',
            rect:['0','0','140px','210px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"jeremy_arm_lower.png",'0px','0px'],
            transform:[[],[],[],[],['37%','43%']]
         },
         {
            id:'jeremy_body',
            type:'image',
            rect:['0','0','140px','210px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"jeremy_body.png",'0px','0px']
         },
         {
            id:'jeremy_head',
            type:'image',
            rect:['0px','0px','140px','210px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"jeremy_head.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Jeremy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '140px'],
            ["style", "height", '210px'],
            ["style", "overflow", 'hidden']
         ],
         "${_jeremy_arm_upper}": [
            ["style", "-webkit-transform-origin", [50,30], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,30],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,30],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,30],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,30],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${_jeremy_head}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_jeremy_arm_lower}": [
            ["style", "-webkit-transform-origin", [37,43], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [37,43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [37,43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [37,43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [37,43],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
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
            { id: "eid4", tween: [ "transform", "${_jeremy_arm_lower}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutQuint" },
            { id: "eid11", tween: [ "transform", "${_jeremy_arm_lower}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid20", tween: [ "transform", "${_jeremy_arm_lower}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid25", tween: [ "transform", "${_jeremy_arm_lower}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 1500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid2", tween: [ "transform", "${_jeremy_arm_upper}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutQuint" },
            { id: "eid12", tween: [ "transform", "${_jeremy_arm_upper}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid21", tween: [ "transform", "${_jeremy_arm_upper}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid26", tween: [ "transform", "${_jeremy_arm_upper}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid7", tween: [ "style", "${_jeremy_arm_lower}", "left", '1px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuint" },
            { id: "eid9", tween: [ "style", "${_jeremy_arm_lower}", "left", '0px', { fromValue: '1px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid18", tween: [ "style", "${_jeremy_arm_lower}", "left", '1px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid23", tween: [ "style", "${_jeremy_arm_lower}", "left", '0px', { fromValue: '1px'}], position: 1500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid8", tween: [ "style", "${_jeremy_arm_lower}", "top", '-11px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInOutQuint" },
            { id: "eid10", tween: [ "style", "${_jeremy_arm_lower}", "top", '0px', { fromValue: '-11px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid19", tween: [ "style", "${_jeremy_arm_lower}", "top", '-11px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid24", tween: [ "style", "${_jeremy_arm_lower}", "top", '0px', { fromValue: '-11px'}], position: 1500, duration: 500, easing: "easeInOutQuint" }         ]
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
})(jQuery, AdobeEdge, "EDGE-37565355");
