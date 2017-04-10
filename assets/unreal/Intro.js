(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 400,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Intro_atlas_.png", id:"Intro_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Intro_atlas_", frames: [[499,602,91,64],[402,0,400,600],[0,0,400,600],[317,602,180,87],[0,602,315,369]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Aureolasanluisgonzaga = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BackgroundIntro = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CopiadeDestelloBackgroundIntro = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.menustep3 = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sanluisgonzaga = function() {
	this.spriteSheet = ss["Intro_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.menustep3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.149,1.149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.9,100);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3BA2B2").s().p("AD7GgIiZiEQhFg6geAAQkxAAjXh/QjXh+AAi0QAAi0DXh/QDXiAExAAQEuAADYCAQDXB/AAC0QAAC0jXB+QgfASgQAqQgSAzANBAQAjCrDtDGQjxgej1jFg");
	this.shape.setTransform(73.8,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,128.7);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Aureolasanluisgonzaga();
	this.instance.parent = this;
	this.instance.setTransform(-30,-21,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-21,56.9,40);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.sanluisgonzaga();
	this.instance.parent = this;
	this.instance.setTransform(-128,-130,0.542,0.542);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-130,170.8,200);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.CopiadeDestelloBackgroundIntro();
	this.instance.parent = this;
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-300,400,600);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.CopiadeDestelloBackgroundIntro();
	this.instance.parent = this;
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-300,400,600);


// stage content:
(lib.Unreal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3BA2B2").ss(1,1,1).p("AhoiLIAAEXIDRiMg");
	this.shape.setTransform(344.5,65.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40).to({_off:false},0).wait(72));

	// Capa 7 copia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BA2B2").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_1.setTransform(295,83.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3BA2B2").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_2.setTransform(284.7,83.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3BA2B2").s().p("AgiBCQgNgOAAgWQAAgaAOgNQANgQAVAAQALAAAGADIAJAIIADg4QACgJAHABQAJAAAAAJQAAANgEAvIgBAbQAAAgADAQIAAADQAAAEgCACQgDADgEAAQgGAAgDgJQgHAFgHADQgIACgGAAQgUAAgOgNgAgWABQgIAKAAATQAAANAJAJQAJAJAMAAQAGAAAGgDQADgCAIgGIADgDIgBgRIAAgLIABgMQgEgHgGgDQgGgDgJAAQgOAAgJAHg");
	this.shape_3.setTransform(273.1,80.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3BA2B2").s().p("AgIBGQgDgDAAgEIAAgSIAAgRIABgXIABgVQgBgEADgDQADgDAEAAQACAAADADQACADABAEIgBAVIgBAXIAAARIABASQAAAEgDADQgDADgCAAQgFAAgCgDgAgFg1QgDgDgBgFQABgEADgDQADgEADAAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAQgDAAgDgEg");
	this.shape_4.setTransform(264.7,80.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3BA2B2").s().p("AgQBGQgMgdgPg2IgHgbQgGgUAAgGQAAgFADgDQADgCAEAAQAHAAACAIIAEARIAJAhQAKAjAJAaIAAgCIAYhFIAJgXQAFgPAHgIQADgDAEAAQAEAAADACQADADAAAFQAAADgCADQgGAIgEALIgHAVIgaBFQgFAMgGANQgBAFgGAAQgHAAgDgIg");
	this.shape_5.setTransform(255.8,81.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3BA2B2").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_6.setTransform(311.5,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3BA2B2").s().p("AgEA5QgDgDAAgEIgCgjQgDgVAAgMQAAgKgDgGQgHADgHAHIgLANIgFAGIgBAQIgBAQIABAJIABAHQAAAEgDADQgDADgEAAQgLAAAAgZIABgSIABgPIgBgQIgBgPQAAgXAKAAQAEAAADAEQADADAAAEIgBAGIAAAGIAAAKQAFgLAKgIQAKgIAHAAQAPAAAEAPQAFgHAIgEQAHgDAKAAQAQAAAGARIAEAcIAHA1QAAAEgDADQgCADgFAAQgIAAgBgJIgEgeIgDgcIgDgNQgEgJgDAAQgEAAgKAGQgJAGgDADIAAASIADAZQACAPAAAKQAAAEgDADQgCADgEAAQgDAAgCgDg");
	this.shape_7.setTransform(298.2,53.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3BA2B2").s().p("AgcApQgNgOgBgWQAAgUALgRQAOgUAXAAQATAAAKASQAIAOAAAUQAAAUgLAQQgNARgTAAQgQAAgMgMgAgQgTQgGAMAAAMQAAAOAHAIQAHAGAIAAQAJAAAHgHQAIgIABgOQABgkgWAAQgMAAgIANg");
	this.shape_8.setTransform(284.9,53.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3BA2B2").s().p("AgaArQgOgNgBgVQABgSANgVQAOgXAQAAQAKgBAMAFQAPAGAAAIQAAAEgDADQgCACgEABQgDgBgBgBIgFgEQgFgEgOAAQgIAAgKASQgIAQAAAKQAAANAIAHQAJAIAKAAQAHgBAGgDIALgGIAEgBQAEAAADACQACADAAAEQAAAHgOAHQgNAFgKABQgRgBgNgLg");
	this.shape_9.setTransform(274.8,53.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3BA2B2").s().p("AgKBGIABgjIABgjIABgiIAAgkQAAgJAIAAQAKAAAAAJIgBAkIAAAiIgCAwIgBAWQgBAKgGAAQgKAAAAgKg");
	this.shape_10.setTransform(266.8,50.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3BA2B2").s().p("AggAqQgPgMAAgWQAAgYAMgRQANgTAWAAQAPAAAKAGQANAGAAAOQAAAKgLAIIgVAJIgjASQAFAIAIAEQAJAEAIAAQAHAAAJgCQAMgEADgFQADgFAEAAQAEAAACACQADADAAADQAAALgRAIQgPAHgPAAQgUAAgNgLgAgTgZQgIAJgEARIAegMQAQgJAHgGQgIgIgOAAQgLAAgIAJg");
	this.shape_11.setTransform(258.8,53.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3BA2B2").s().p("AAVBMQgDgDAAgEQgFgMgBgHIgIgqIgFgpQgIAhgKAUQgMAagDAOIABAFQAAAEgEADQgDADgEAAQgOAAAAgMIgDgMIgKgwQgHgXgPgtIgBgEQAAgJAKAAQAHAAADAHIAHAUQAGASAFAZIAKApQAKgYALghIAKgdQAIgWAHAAQAHAAADAHQADAIAEAgIAGAlIAIAmQANgfAVg0IAEgTQADgLAEgGQAEgGAFAAQAKAAAAAKIgDAKIgEAKIgFASIgdBEIgOAiQgEAHgHAAQgEAAgEgDg");
	this.shape_12.setTransform(243.2,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},37).wait(75));

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(511.5,65,1,1,0,0,0,103.5,50);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({x:449.6},0).wait(1).to({x:387.8},0).wait(1).to({x:325.9},0).wait(1).to({x:264},0).wait(1).to({x:276.7},0).wait(1).to({x:289.3},0).wait(1).to({x:302},0).wait(1).to({x:297.5},0).wait(1).to({x:293},0).wait(1).to({x:288.5},0).wait(1).to({x:284},0).wait(75));

	// Capa 7
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMBRIACgpIABgoIAAgoIABgoQAAgLAJAAQAMAAAAALIgBAoIgBAoIgBA3IgCAaQgBALgIAAQgLAAAAgLg");
	this.shape_13.setTransform(134.5,224.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjA5IgHgIIgTAIQgIADgEAAQgaAAgMgPQgMgNAAgdQAAgZATgUQATgTAYAAQAKAAAMAFQAPAGAAAJQAAADgCADIgCAOIgBAXQAAAOACAIQABAFAGAOIADAGIABACQAAAFgEADQgDADgEAAQgCAAgGgFgAgSgbQgMAOAAARQAAASAGAJQAHAKANAAQAIAAAIgEQAEgCAHgHQgDgcAAgOIAAgLIACgMIgHgDIgFgBQgPAAgNAOg");
	this.shape_14.setTransform(125.5,227.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglAwQgRgOAAgZQAAgbAOgUQAPgWAZAAQARAAAMAHQAPAHAAAQQAAAMgNAJIgYALIgpAUQAHAJAJAFQAJAFALAAQAIAAAKgDQANgEAEgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgUAJQgRAIgQAAQgYAAgPgNgAgWgdQgJALgFATIAjgOQASgKAJgHQgKgJgQAAQgNAAgJAKg");
	this.shape_15.setTransform(113.5,227.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAzIAAhMIAAgMIAAgLQAAgLAKAAQALAAAAATQAVgWAZABQAJAAAFAGQAEAIAAANIAAAIQgBAOgKAAQgKAAAAgLIAAgIIAAgJQgSACgJAIQgKAHgGAOIAAA8QAAAMgLAAQgKAAAAgMg");
	this.shape_16.setTransform(101.8,227.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbA2IgDgYIgCgZIABgJIAAgKQAAgZgJAAQgMAAgKAPQgKAOgHATIgBALIAAALIAAAKIABAKQAAAFgDADQgDADgFAAQgFAAgDgDQgCgDAAgFIgBgKIgBgKIACgfIABggIAAgKIgBgLQAAgFADgDQAEgDAEAAQALAAABAPIAAANQATgZASAAQASAAAHAQQAFAKAAAVIAAALIAAAJQAAAJACAPQADAOAAAKQAAAFgDADQgDADgGAAQgJAAgBgLg");
	this.shape_17.setTransform(90.2,227.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxBCQgOgQgDggQgCgOAAgpIABgZIACgOQADgIAHAAQAKAAAAASIAABCQAABCAuAAQAtAAAAhwIAAgLIAAgJQAAgHACgFQADgHAGAAQAMAAAAAPIAAAOIAAAOQAACAhEAAQggAAgSgUg");
	this.shape_18.setTransform(75.6,225.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggAvQgQgPAAgaQgBgYANgTQAQgXAaAAQAXAAALAVQAJAQAAAXQAAAYgNARQgOAUgWAAQgTAAgNgOgAgTgVQgHANAAAOQAAAQAJAJQAHAIAKgBQAKABAIgJQAKgKAAgPQACgqgZAAIgBAAQgOAAgJAQg");
	this.shape_19.setTransform(53.9,227.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGBPQgDgDAAgEIAAgOIABgMIgDg/IgYgCQgKgCAAgKQAAgFADgDQADgDAEAAIAXABIAAgOIgBgPQABgEADgDQADgEAFABQAIAAACAQIAAAKIAAAGIAAAHIAQgBQALAAAEABQAGACABAIQAAAGgDACQgEAEgEAAIgGAAIgFAAIgPABIABBAIAAAGIAAAFQABAZgMgBQgCAAgEgCg");
	this.shape_20.setTransform(42.6,225.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglAwQgRgOAAgZQAAgbAOgUQAPgWAZAAQARAAAMAHQAPAHAAAQQAAAMgNAJIgYALIgpAUQAHAJAJAFQAJAFALAAQAIAAAKgDQANgEAEgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgUAJQgRAIgQAAQgYAAgPgNgAgWgdQgJALgFATIAjgOQASgKAJgHQgKgJgQAAQgNAAgJAKg");
	this.shape_21.setTransform(129.9,193.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBCQgDgEAAgFQAAgNgDgbQgDgYAAgOQAAgMgDgGQgIADgIAIIgNAPIgGAHIgBASIgCATIABAKIABAJQAAAEgDADQgDADgFAAQgNAAAAgcIACgUIABgTIgBgRIgBgSQAAgaALAAQAFAAADAEQAEAEAAAEIgBAHIAAAHIAAALQAGgMALgJQALgKAIAAQASAAAFASQAGgJAIgEQAJgEALAAQATAAAHAUIAEAgIAIA+QABAFgEADQgDADgFAAQgJAAgCgKIgEgjIgEggQgBgIgCgHQgEgLgFAAQgEAAgLAHQgLAHgDAEIAAAVIADAcQADASAAALQAAAFgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_22.setTransform(114.6,193.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAvQgQgQAAgaQgBgXANgTQAQgXAaAAQAXAAALAUQAJARAAAXQAAAYgNARQgOAUgWAAQgTAAgNgOgAgTgWQgHANAAAOQAAARAJAJQAHAHAKAAQAKAAAIgIQAKgJAAgRQACgpgZAAIgBAAQgOAAgJAPg");
	this.shape_23.setTransform(99.3,193.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAxQgQgPAAgYQAAgUAPgZQARgbATAAQALAAAOAGQAQAGAAAKQAAAEgCADQgDAEgEAAQgDAAgCgCIgGgEQgGgGgPAAQgKAAgLAVQgKATAAALQAAAPAKAJQAJAIANAAQAHAAAIgEIANgHIAFgCQAEAAADAEQADADAAAEQAAAIgRAIQgPAHgLAAQgVAAgPgOg");
	this.shape_24.setTransform(87.6,193.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLBRIABgpIABgoIAAgoIABgoQAAgLAJAAQAMAAAAALIgBAoIgBAoIgCA3IgBAaQAAALgJAAQgLAAABgLg");
	this.shape_25.setTransform(78.5,190.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglAwQgRgOAAgZQAAgbAOgUQAPgWAZAAQARAAAMAHQAPAHAAAQQAAAMgNAJIgYALIgpAUQAHAJAJAFQAJAFALAAQAIAAAKgDQANgEAEgGQAEgGAEAAQAEAAADADQADADAAAEQAAAMgUAJQgRAIgQAAQgYAAgPgNgAgWgdQgJALgFATIAjgOQASgKAJgHQgKgJgQAAQgNAAgJAKg");
	this.shape_26.setTransform(69.2,193.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAZBYQgFgEAAgFQgFgNgBgJIgJgwQgFgcgBgTQgKAlgMAYQgMAegFARIACAFQAAAFgFADQgDADgGAAQgPAAAAgOIgEgOIgLg3QgIgagRg0IgBgEQgBgLAMAAQAIAAADAIIAJAYQAGAUAHAdIALAvQAMgcAMgmQAHgYAEgJQAKgZAIAAQAIAAADAIQAEAJAEAlQACASAGAYIAJAsQAPgkAXg8IAGgVQADgNAFgHQAEgHAGAAQALAAAAAMIgDALIgFAMIgGAUIghBPIgQAnQgEAIgIAAQgFAAgEgDg");
	this.shape_27.setTransform(51.3,191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},26).wait(86));

	// Welcome
	this.instance_1 = new lib.Símbolo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.2,229.6,1,1,0,0,0,73.8,64.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({x:-24.5},0).wait(1).to({x:31.2},0).wait(1).to({x:86.8},0).wait(86));

	// Aureola
	this.instance_2 = new lib.Interpolación9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.5,266);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},3).wait(3).to({y:260},0).wait(3).to({y:266},0).wait(3).to({y:260},0).wait(3).to({y:266},0).wait(86));

	// San Luis G
	this.instance_3 = new lib.Interpolación4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(234.5,410.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},3).wait(101));

	// destello
	this.instance_4 = new lib.Interpolación1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(201,300);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolación2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(201,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true,alpha:1},4).wait(104));

	// Background
	this.instance_6 = new lib.BackgroundIntro();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201,300,400,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;