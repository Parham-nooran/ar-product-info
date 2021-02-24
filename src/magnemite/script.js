window.onload = () =>{
    /**let camera = document.querySelector("a-camera");
    const origin = {
        lat: camera.getAttribute('gps-camera').simulateLatitude,
        lang: camera.getAttribute('gps-camera').simulateLongitude
    };*/
    let objects = getStaticObjects();
    
    renderPlaces(objects);
};

function getStaticObjects(){
    let objects = [];
    let n = 3;
    for(let i = 0;i<n;i++){
        objects[i] = {name : 'Object'+i};
    }
    return objects;
}

function setModelAttributes(entity){
    entity.setAttribute('geometry', 'primitive: box');
    entity.setAttribute('material', 'color:blue');
    entity.setAttribute('scale', '2 2 2');
}
let positions = ["4 2 -10", "4 9 4", "4 1 -5", "0 0 4"];
function renderPlaces(objects) {
    let scene = document.querySelector('a-scene');
    let count = 0;
    /*let sky = document.createElement('a-sky');
    sky.setAttribute('color', 'lightblue');
    scene.appendChild(sky);*/

    objects.forEach((object) => {
        //let latitude = place.location.lat;
        //let longitude = place.location.lng;
        let model = document.createElement('a-entity');
        setModelAttributes(model);
        //model.setAttribute('gps-entity-place', ``);
        model.setAttribute('position', positions[count++]);
        model.setAttribute('id',count);
        //model.setAttribute('animation-mixer', '');

        /*document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });*/
        
        scene.appendChild(model);
    });
}

/*

<a-scene vr-mode-ui='enabled: false' embedded arjs='sourceType: webcam;'>

<a-sky color="lightblue"></a-sky>

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
/*
<!-- a-scence vr-mode-ui="enabled: false"
         embedded
         arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;
          debugUIEnabled: false;'></a-scence-->
        <!--a-camera gps-camera rotation-reader></a-camera>

        <div class="centered">
    <button data-action="change" ></button>
</div-->
*/