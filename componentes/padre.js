Vue.component('divsuperior',{
    template:
    `
    <div id="header">
        <div class="container" id="cabecera">
            <div id="content_name">
                <label id="name_user">{{name_user}}</label>
                <img id="img_moneda" src="sass/img/moneda.png" >
                <label id="puntos_user">{{puntos}}</label>
                <img id="img_insignea" src="sass/img/insignea.png" >
                <label id="medallas_user">{{medallas}}</label>
                <img id="img_copa" src="sass/img/copa.png" >
                <label id="trofeos_user">{{trofeos}}</label>
                <button id="btn_home" class="btn" ><img id="img_home" src="sass/img/home.png" ></button>
                <button id="btn_config" class="btn"><img id="img_config" src="sass/img/config.png" ></button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            name_user:'Fernando Diaz Trinidad',
            puntos:16800,
            medallas:0,
            trofeos:0
        }
    }
});