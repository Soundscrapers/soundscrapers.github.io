class Building {
  constructor(x,y,z,l,idnum, scene){
    this.x = x;
    this.y = y;
    this.z = z;
    this.l = l; //length of building
    this.idnum = idnum; //object id
    var myPaths = [];
    for (let i = 0; i < l; i++ ){
    myPaths.push([

        new BABYLON.Vector3(x,y,i),
        new BABYLON.Vector3(x,y+1,i),
        new BABYLON.Vector3(x+1,y+1,i),
        new BABYLON.Vector3(x+1,y,i)

    ])
  }
    this.material = new BABYLON.StandardMaterial("mat1", scene);
    this.material.alpha = 1.0;
    this.material.diffuseColor = new BABYLON.Color3(0.5,0.5,1.0);
    this.material.wireframe = true;

    this.ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", {
      pathArray: myPaths,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      updatable: true
    }, scene)
    this.ribbon.material = this.material;
  }


}
