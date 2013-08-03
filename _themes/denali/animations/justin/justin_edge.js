/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='assets/animations/justin/images/';

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
            id:'justin_arm_upper',
            type:'image',
            rect:['0','0','360px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"justin_arm_upper.png",'0px','0px'],
            transform:[]
         },
         {
            id:'justin_body',
            type:'image',
            rect:['0','0','120px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"justin_body.png",'0px','0px']
         },
         {
            id:'justin_arm_lower',
            type:'image',
            rect:['0%','0%','360px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"justin_arm_lower.png",'0px','0px'],
            transform:[]
         },
         {
            id:'justin_head',
            type:'image',
            rect:['0','0','120px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"justin_head.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_justin_arm_upper}": [
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '200px'],
            ["style", "-webkit-transform-origin", [50,31], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,31],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "width", '120px']
         ],
         "${_justin_body}": [
            ["style", "height", '200px'],
            ["style", "width", '120px']
         ],
         "${_justin_arm_lower}": [
            ["style", "top", '0%'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '200px'],
            ["style", "-webkit-transform-origin", [60,44], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [60,44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [60,44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [60,44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [60,44],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '0%'],
            ["style", "width", '120px']
         ],
         "${_StageJu}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '120px'],
            ["style", "height", '200px'],
            ["style", "overflow", 'hidden']
         ],
         "${_justin_head}": [
            ["style", "height", '200px'],
            ["style", "width", '120px']
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
            { id: "eid8", tween: [ "style", "${_justin_arm_lower}", "left", '0.86%', { fromValue: '0%'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid10", tween: [ "style", "${_justin_arm_lower}", "left", '0%', { fromValue: '0.86%'}], position: 500, duration: 499, easing: "easeInOutCubic" },
            { id: "eid13", tween: [ "style", "${_justin_arm_lower}", "left", '0.86%', { fromValue: '0%'}], position: 999, duration: 501, easing: "easeInOutCubic" },
            { id: "eid17", tween: [ "style", "${_justin_arm_lower}", "left", '0%', { fromValue: '0.86%'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid2", tween: [ "transform", "${_justin_arm_upper}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid3", tween: [ "transform", "${_justin_arm_upper}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 500, duration: 499, easing: "easeInOutCubic" },
            { id: "eid16", tween: [ "transform", "${_justin_arm_upper}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 999, duration: 501, easing: "easeInOutCubic" },
            { id: "eid20", tween: [ "transform", "${_justin_arm_upper}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid9", tween: [ "style", "${_justin_arm_lower}", "top", '-0.23%', { fromValue: '0%'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid11", tween: [ "style", "${_justin_arm_lower}", "top", '0%', { fromValue: '-0.23%'}], position: 500, duration: 499, easing: "easeInOutCubic" },
            { id: "eid14", tween: [ "style", "${_justin_arm_lower}", "top", '-0.23%', { fromValue: '0%'}], position: 999, duration: 501, easing: "easeInOutCubic" },
            { id: "eid18", tween: [ "style", "${_justin_arm_lower}", "top", '0%', { fromValue: '-0.23%'}], position: 1500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid7", tween: [ "transform", "${_justin_arm_lower}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInOutCubic" },
            { id: "eid12", tween: [ "transform", "${_justin_arm_lower}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 500, duration: 499, easing: "easeInOutCubic" },
            { id: "eid15", tween: [ "transform", "${_justin_arm_lower}", "rotateZ", '18deg', { fromValue: '0deg'}], position: 999, duration: 501, easing: "easeInOutCubic" },
            { id: "eid19", tween: [ "transform", "${_justin_arm_lower}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 1500, duration: 500, easing: "easeInOutCubic" }         ]
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
})(jQuery, AdobeEdge, "justin");
