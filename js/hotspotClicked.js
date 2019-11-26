AFRAME.registerComponent('hotspot-clicked', {
    schema: {
        loadScene: {default: 'sceneMain'}
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        el.addEventListener('click', function () {
            setScenesVisibleToFalse();

            var sceneToLoad = document.getElementById(data.loadScene);
            sceneToLoad.object3D.visible = true;

            let entity = document.querySelectorAll('#' + sceneToLoad.id + ' .link');
            for (let i = 0; i < entity.length; i++) {
                entity[i].classList.add('clickable');
            }
        });
    }
});

/**
 * Hide all Scenes
 */
function setScenesVisibleToFalse() {
    var scenes = document.getElementsByClassName('scene');

    for(var i = 0; i < scenes.length; i++) {
        scenes[i].object3D.visible = false;
    }

    let query = document.getElementsByClassName('link');
		for (let j = 0; j < query.length; j++) {
				query[j].classList.remove('clickable');
		}
}