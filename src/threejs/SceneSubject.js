import * as THREE from 'three'

export default scene => {

  var geometry = new THREE.BoxGeometry(30, 30, 30, 50, 10, 10);
  var material = new THREE.MeshBasicMaterial({color: 0xfffff, wireframe: true});
  var cube1 = new THREE.Mesh(geometry, material);

  var geometry2 = new THREE.BoxGeometry(20, 20, 20, 10, 10, 10);
  var material2 = new THREE.MeshBasicMaterial({color: 0xf442f4, wireframe: true});
  var cube2 = new THREE.Mesh(geometry2, material2);

  scene.add(cube1);
  scene.add(cube2);

  function update(time) {
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x -= 0.01;
    cube2.rotation.y -= 0.01;
  }

  return {
    update
  }
}