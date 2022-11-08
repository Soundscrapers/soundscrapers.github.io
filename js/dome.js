//Dome test 11.7.22
const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const center = new BABYLON.Vector3(-25,116,4);

var createScene = async function () {
    var scene = new BABYLON.Scene(engine);

    //Adding a light
    var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0.25, -0.6, 0), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);

    const wire = new BABYLON.StandardMaterial("wire", scene);
  //  wire.wireframe = true;
  //  wire.diffuseColor = new BABYLON.Color3(0, 0.72, 1);

    // The first parameter can be used to specify which mesh to import. Here we import all meshes
   const result = await BABYLON.SceneLoader.ImportMeshAsync("", "https://raw.githubusercontent.com/Soundscrapers/psychic-octo-palm-tree/main/", "dome.babylon", scene);
        // Set the target of the camera to the first imported mesh

   var cube = scene.getMeshByName("Cube");
   cube.position = center;

   var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameterX: 100, diameterY: 50, diameterZ: 75});
   sphere.position.x += 200;

   var plane = BABYLON.MeshBuilder.CreateGround("plane", {width: 400, height: 400});
   plane.material = wire;
   plane.position.y = -21;

   camera.target = cube;

    var dome = scene.getMeshByName("DIY-dome-raising");

   //dome.material = wire;


    // Move the light with the camera
    scene.registerBeforeRender(function () {
        light.position = camera.position;
    });

    var rain = new BABYLON.Sound("rain", "https://raw.githubusercontent.com/Soundscrapers/psychic-octo-palm-tree/main/rain.wav", scene,
		null, { loop: true, autoplay: true, spatialSound: true, maxDistance: 225 });
	rain.setPosition(center);

   /*
    LOAD GUI

    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, scene);
    let loadedGUI = await advancedTexture.parseFromSnippetAsync("5SK3PQ");

    let buttonIn = advancedTexture.getControlByName("ButtonIn");
    buttonIn.onPointerClickObservable.add( function(){
        buttonIn.isVisible = false;
    });
*/

    BABYLON.NodeMaterial.ParseFromSnippetAsync("#81NNDY#2", scene).then((nodeMaterial) => {
    dome.material = nodeMaterial;
    sphere.material = nodeMaterial;
    });

    return scene;
}

createScene().then(function(scene){
  engine.runRenderLoop(function () {
          scene.render();
          console.log("scene loaded");
        });
  });


//const scene = await createScene(); //Call the createScene function
