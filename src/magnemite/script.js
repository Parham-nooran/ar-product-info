window.onload = () =>{
    
}

function getStaticObjects(){
    return [
        {
            name = 'Object'
        }
    ];
}
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
/*<a-sky color="lightblue"></a-sky>

<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0"
scale="2 2 2" position="4 2 10" animation-mixer/>

<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0"
scale="2 2 2" position="4 9 4" animation-mixer/>

<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0"
scale="2 2 2" position="4 1 -5" animation-mixer/>

<a-text value="Salam ostad vaghtetoon be kheir" color = "black" negate="true" scale="6 6 6" rotation="0 180 0"
position="2 4 4"></a-text>

<a-entity id="box-green" geometry="primitive: box" material="color: green" 
position="0 0 4" rotation="45 180 45" scale="1 1 1"/>

<a-entity id="box-green" geometry="primitive: box" material="color: green" 
position="0 0 4" rotation="45 180 45" scale="1 1 1"/>

<a-entity id="sphere-purple" geometry="primitive: sphere" material="color: purple" 
position="2 1 0" rotation="45 180 45" scale="1 1 1"/>

<a-entity id="box-red" geometry="primitive: box" material="color: red" 
position="5 0 4" rotation="45 180 45" scale="1 1 1"/>

<a-text value="Salam ostad vaghtetoon be kheir" color = "black" negate="true" scale="6 6 6"
position="2 4 0" ></a-text>

<a-entity id="box3" geometry="primitive: box" material="color: green" 
position="0 0 4" rotation="45 180 45" scale="1 1 1"/>

<a-entity id="sphere1" geometry="primitive: sphere" material="color: purple" 
position="2 1 0" rotation="45 180 45" scale="1 1 1"/>

<a-entity id="box2" geometry="primitive: box" material="color: red" 
position="5 0 0" rotation="45 180 45" scale="1 1 1"/>*/