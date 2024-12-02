// variable to hold a reference to our A-Frame world
let world;
let light1;
let light2;

// speed variable for moving our point light around
let lightSpeed = 0.05;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set a background color for the world using RGB values
	world.setBackground(93,151,199);

	// now that we have a world we can add elements to it using a series of wrapper classes

	var b = new Box({
  x: -10, y: 1, z: -20,
  width: 50, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b);

// Step 2
var b1 = new Box({
  x: -9, y: 2.2, z: -20,
  width: 48, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b1);

// Step 3
var b2 = new Box({
  x: -8, y: 3.4, z: -20,
  width: 46, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b2);

// Step 4
var b3 = new Box({
  x: -7, y: 4.6, z: -20,
  width: 44, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b3);

// Step 5
var b4 = new Box({
  x: -6, y: 5.8, z: -20,
  width: 42, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b4);

// Step 6
var b5 = new Box({
  x: -5, y: 7, z: -20,
  width: 40, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b5);

// Step 7
var b6 = new Box({
  x: -4, y: 8.2, z: -20,
  width: 38, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b6);

// Step 8
var b7 = new Box({
  x: -3, y: 9.4, z: -20,
  width: 36, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b7);

// Step 9
var b8 = new Box({
  x: -2, y: 10.6, z: -20,
  width: 34, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b8);

// Step 10
var b9 = new Box({
  x: -1, y: 11.8, z: -20,
  width: 32, height: 1.2, depth: 20,
  red: 255, green: 255, blue: 255
});
world.add(b9);


	// plane primitive
	var p = new Plane({
						x: -1, y:16.4, z:-10,
						width: 4, height:8,
						red:random(0), green:random(0), blue:random(0),
						side:'double'
					});
  
  world.add(p);
  
    var towerBox1 = new Box({ x: -20, y: 1, z: 10, width: 4, height: 1.2, depth: 4, red: 110, green: 140, blue: 200 });
    var towerBox2 = new Box({ x: -20, y: 2.5, z: 10, width: 4, height: 1.2, depth: 4, red: 120, green: 130, blue: 200 });
    var towerBox3 = new Box({ x: -20, y: 4, z:10, width: 4, height: 1.2, depth: 4, red: 130, green: 120, blue: 200 });
    world.add(towerBox1);
    world.add(towerBox2);
    world.add(towerBox3);
  
    var sphere1 = new Sphere({ x: -5, y: 5, z: 5, radius: 1, red: 200, green: 150, blue: 50 });
    var sphere2 = new Sphere({ x: 0, y: 7.5, z: 5, radius: 1, red: 210, green: 160, blue: 60 });
    var sphere3 = new Sphere({ x: 5, y: 10, z: 5, radius: 1, red: 220, green: 170, blue: 70 });
    world.add(sphere1);
    world.add(sphere2);
    world.add(sphere3);
  
    var torus1 = new Torus({ x: -20, y: 8, z: 10, radius: 1.5, tube: 0.3, red: 100, green: 50, blue: 200 });
    var torus2 = new Torus({ x: -20, y: 10, z: 10, radius: 1.5, tube: 0.3, red: 100, green: 50, blue: 220 });
    var torus3 = new Torus({ x: -20, y: 12, z: 10, radius: 1.5, tube: 0.3, red: 100, green: 50, blue: 240 });
    var torus4 = new Torus({ x: -18, y: 10, z: 10, radius: 1.5, tube: 0.3, red: 100, green: 50, blue: 200 });
    var torus5 = new Torus({ x: -22, y: 10, z: 10, radius: 1.5, tube: 0.3, red: 100, green: 50, blue: 220 });
    world.add(torus1);
    world.add(torus2);
    world.add(torus3);
    world.add(torus4);
    world.add(torus5);
	
  
	var text = new Text({
		text: 'The gate',
		red: 0, green: 0, blue: 0,
		side: 'double',
		x: 0, y: 30, z: 0,
		scaleX: 50, scaleY: 50, scaleZ: 50
	});
	world.add(text);


	var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:0, blue:0, rotationX:-90});

	// add the plane to our world
	world.add(g);
  

	light1 = new Light({
		x: 0, y: 15, z: 2,
		color: '#9C27B0',
		type: 'point',
		intensity: 1.0
	})
	world.add(light1)



	light2 = new Light({
		color: '#FFFFFF',
		type: 'ambient',
		intensity: 0.5
	})
	world.add(light2)
  
  clock = new AFrameP5.OBJ({
        asset: 'clock',
        mtl: 'robot_mtl',
        x: -2,
        y: 1.3,
        z: -5,
        rotationX: 0,
        rotationY: 180,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
    });
    world.add(clock);
}

function draw() {
  light1.nudge(lightSpeed, 0, 0)

	// bounce logic
	if (light1.getX() > 10 || light1.getX() < -10) {
		lightSpeed *= -1
	}

}
