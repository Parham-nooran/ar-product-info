window.onload = () =>{
    let objects = getStaticObjects();
    renderPlaces();
}

function getStaticObjects(){
    return [
        {
            name = 'Object'
        }
    ];
}
let positions = ["4 2 10", "4 9 4", "4 1 -5", "0 0 4"];
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        //let latitude = place.location.lat;
        //let longitude = place.location.lng;
        
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
/*
<!--a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="200 200 200"
         gps-entity-place="longitude: 35.718007; latitude: 51.445341;" animation-mixer/-->

         <!--a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="200 200 200" 
         position="0 0 0" rotation="45 90 45" scale="2 2 2" animation-mixer/-->
         <!--a-camera id='camera1' look-controls-enabled='true'
          arjs-look-controls='smoothingFactor: 0.1' gps-camera='gpsMinDistance: 5' rotation-reader> </a-camera>
         

         <a-entity  id="box-green" geometry="primitive: box" material="color: green"  rotation="0 180 0" scale="20 20 20"
         gps-entity-place="longitude: 35.7180166; latitude: 51.4453922;">
         
         <a-entity id="sphere-purple" geometry="primitive: sphere" material="color: purple" 
         position="2 1 10" rotation="45 180 45" scale="1 1 1"/-->

         <!--a-camera gps-camera rotation-reader></a-camera-->
         <!-- a-scence vr-mode-ui="enabled: false"
         embedded
         arjs='sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960;
          debugUIEnabled: false;'></a-scence-->
        <!--a-camera gps-camera rotation-reader></a-camera-->
*/