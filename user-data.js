'use strict';
/**
 * `userData`
 * Construct userData object as per https://threejs.org/docs/#api/en/core/Object3D '
An object that can be used to store custom data about the Object3D'
 * @param {size} integer giving size of skybox e.g. 50
 * @param {position} array holiding 3d coordinates [x,y,z] giving position of skybox e.g. [0,0,0]
 * @returns {userData} object encapsulating size and position data
 */

// Setup skybox default userData.
const userData = (size, position) => {
  const width = size;  // x.
  const height = size; // y.
  const depth = size;  // z.

  return {
    size: [width, height, depth],
    position,
    minX: -(width / 2),
    maxX: width / 2,
    minY: -(height / 2),
    maxY: height / 2,
    minZ: -(depth / 2),
    maxZ: depth / 2
  };
};

module.exports = userData;
