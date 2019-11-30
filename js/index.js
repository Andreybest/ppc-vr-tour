
// add clickble class to a-enities of main scene.
AFRAME.registerComponent('starting-scene', {
  	schema: {
		scene: {default: 'sceneMain'}
	},

	init: function () {
		let sceneToLoad = document.getElementById(this.data.scene);
		sceneToLoad.object3D.visible = true;

		let entity = document.querySelectorAll('#' + sceneToLoad.id + ' .link');
		for (let i = 0; i < entity.length; i++) {
			entity[i].classList.add('clickable');
		}
	}
});