var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
let building;

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the sceÒne and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    // var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
    building = new Building(0,0,0,10,1, scene);
    building.material.wireframe = true;

    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Resize Window");
    button1.width = "150px"
    button1.height = "40px";
    button1.color = "white";
    button1.cornerRadius = 20;
    button1.background = "green";
    button1.onPointerUpObservable.add(function() {
      window.innerWidth = 400;
      window.innerHeight = 300;
    });
    advancedTexture.addControl(button1);

    return scene;
};
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

var initTone = function(){

}

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
        toneUpdate();
});

/* Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});
*/
// Update the sound server
var toneUpdate = function(){
}
