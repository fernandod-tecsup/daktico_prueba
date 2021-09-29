Vue.component('divcuerpo',{
    template:
    `
    <div id="header">
        <div class="container" id="container_cuerpo">
            <div id="content_name">
                <img id="img_start" src="sass/img/start.png" >
                <div class="meter orange">
                    <span style="width: 25%"></span>
                </div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            numero:0
        }
    }
});