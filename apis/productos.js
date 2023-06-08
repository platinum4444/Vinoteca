
/*
var productos = [
    {categoria: "Enzimas", subcategoria: "Extracción tinto", textSubcategoria: "Una enzima de extracción, durante la elaboración de variedades tintas, debe de fragilizar las paredes celulares del hollejo lo suficiente como para permitir que mediante una suave acción mecánica se pueda extraer el máximo de los componentes que nos interesan (antocianos, polifenoles y polisacáridos).", nombre: "Vinozym Vintage FCE G", informacion: "Enzima microgranulada para la optimización de la extracción durante la maceración de variedades tintas, es purificada (FCE) y por tanto no contiene Cinamil Esterasa ni otras actividades secundarias de dudosa utilidad."},
    {categoria: "Enzimas", subcategoria: "Extracción tinto", textSubcategoria: "Una enzima de extracción, durante la elaboración de variedades tintas, debe de fragilizar las paredes celulares del hollejo lo suficiente como para permitir que mediante una suave acción mecánica se pueda extraer el máximo de los componentes que nos interesan (antocianos, polifenoles y polisacáridos).", nombre: "Vinozym Vintage FCE G", informacion: "Enzima microgranulada para la optimización de la extracción durante la maceración de variedades tintas, es purificada (FCE) y por tanto no contiene Cinamil Esterasa ni otras actividades secundarias de dudosa utilidad."},
    {categoria: "Enzimas", subcategoria: "Extracción tinto", textSubcategoria: "Una enzima de extracción, durante la elaboración de variedades tintas, debe de fragilizar las paredes celulares del hollejo lo suficiente como para permitir que mediante una suave acción mecánica se pueda extraer el máximo de los componentes que nos interesan (antocianos, polifenoles y polisacáridos).", nombre: "Vinozym Vintage FCE G", informacion: "Enzima microgranulada para la optimización de la extracción durante la maceración de variedades tintas, es purificada (FCE) y por tanto no contiene Cinamil Esterasa ni otras actividades secundarias de dudosa utilidad."},
    {categoria: "Enzimas", subcategoria: "Extracción tinto", textSubcategoria: "Una enzima de extracción, durante la elaboración de variedades tintas, debe de fragilizar las paredes celulares del hollejo lo suficiente como para permitir que mediante una suave acción mecánica se pueda extraer el máximo de los componentes que nos interesan (antocianos, polifenoles y polisacáridos).", nombre: "Vinozym Vintage FCE G", informacion: "Enzima microgranulada para la optimización de la extracción durante la maceración de variedades tintas, es purificada (FCE) y por tanto no contiene Cinamil Esterasa ni otras actividades secundarias de dudosa utilidad."}
];
*/

var subcategorias = [
    {categoria: "Enzimas", subcategorias: ["Extracción tinto", "Extracción Blanco", "Desfangado y/o Flotación"]},
    {categoria: "Levaduras", subcategorias: ["Blancos y rosados", "Tintos", "Refermentación"]},
    {categoria: "Taninos", subcategorias: []}
];

var productosDiv = $(".productos");

for (let i = 0; i < subcategorias.length; i++) {
        const categoria = subcategorias[i]["categoria"];
        var tieneSubcategorias = false;

        if(subcategorias[i]["subcategorias"].length > 0) {
            tieneSubcategorias = true;
        }

        if(tieneSubcategorias) {
            productosDiv.append(`
            <div class="productos__categoria">
                <div class="productos__categoria-info">
                    <h2 class="productos__categoria-title">${categoria}</h2>
                </div>
                <div class="productos__subcategorias">
                
                </div>
            </div>
        `);
        }else {
            productosDiv.append(`
            <div class="productos__categoria">
                <div class="productos__categoria-info">
                    <a href='' class="productos__categoria-link">${categoria}</a>
                </div>
            </div>
        `);
        }

        var productosCategoria = $(".productos__categoria").eq(i).find(".productos__subcategorias");
      
        for (let j = 0; j < subcategorias[i]["subcategorias"].length; j++) {
            const subcategoria = subcategorias[i]["subcategorias"][j];  
            console.log(subcategoria);

            if(tieneSubcategorias) {
                productosCategoria.append(`

                    <h3 class="productos__subcategoria-item">
                        ${subcategoria}
                    </h3>

                `);
            }
            
        }
    
}



$(".productos__categoria-title").click(function() {
    console.log($(this).parent().parent().find(".productos__subcategorias"));
    $(this).parent().parent().find(".productos__subcategorias").slideToggle();
});

