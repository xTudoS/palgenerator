/**
 * @category  Misc
 * @author    Abrah�o Bittar
 * @link      www.github.com.br/abrahaobittar/palgenerator
 */


function inputFormInfo() {
    //Debug mode
    //console.log("-->inputFormInfo");
    var inputs = $('#form').serializeArray();
    //Captura todos campos do formulario e armazena em um array;
    console.log(inputs);
    return inputs;
}

function resetForm() {
    //$("textarea[name='bbcode']").val(""); Não funciona
    $('#bbcode').text('');
}

/**
 * Captura os dados e preenche o textArea com o bbcode
 */

function createBBCode() {
    //escreve no textarea o conteudo dos arrays;
    var info = new Array();
    var centralizar = 0;
    var categoria;
    info = inputFormInfo();
    console.log("-->CreateBBCode");

    for (i = 0; i < info.length; i++) {
        if (info[i].name === "check_centralizar" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[center]" + "\n");
            $("textarea[name='bbcode']").append("[face=Arial]" + "\n");
            console.log(centralizar);
            centralizar = 1;
        }

        if (info[i].name === "nome_formulario" && info[i].value !== "") {
            categoria = info[i].value;
        }

        if (info[i].name === "check_descricao" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]https://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/apresenta.png[/img]" + "\n");
        }

        if (info[i].name === "titulo_post" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[size=6]");
            $("textarea[name='bbcode']").append("[b][color=red]" + info[i].value);
            $("textarea[name='bbcode']").append("[/b][/color][/size]" + "\n");
            $("textarea[name='bbcode']").append("[size=4]" + "\n");
        }

        if (info[i].name === "check_capa" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]https://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/capa.png[/img]" + "\n");
        }

        if (info[i].name === "capa" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[img]" + info[i].value + "[/img]" + "\n");
        }

        if (info[i].name === "check_sinopse" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]https://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/sinopse.png[/img]" + "\n");
        }

        if (info[i].name === "sinopse" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Sinopse: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "titulo" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Título no Brasil: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "titulo_original" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Titulo Original: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "nome_autores" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Nome Autores: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "editora" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Editora: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "edicao" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Edição: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "paginas" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Paginas: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "situacao" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Situação: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "check_musicas" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]https://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/musicas.png[/img]" + "\n");
        }

        if (info[i].name === "musicas" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Músicas: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "elenco" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Elenco: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "check_ficha" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]https://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/fichatecnica.png[/img]" + "\n");
        }

        if (info[i].name === "autor" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Autor: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "ano" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Ano de lançamento: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "serie" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Série : [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "volume" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Volume : [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "idioma" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Idioma : [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "formato" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Formato : [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "temporada" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Temporada: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "ep" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Episódio: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "duracao" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Duração: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "genero" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Gênero: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "idioma_audio" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Idioma audio: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "pais_origem" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Pais de origem : [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "legendas" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Legendas: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "grupo_legendas" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000] Grupo de legendas: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "formato_tela" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Formato da tela: [/b][/color]" + info[i].value + "\n")
        }

        if (info[i].name === "check_dados_arquivos" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]http://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/dadosarquivos.png[/img]" + "\n");
        }

        if (info[i].name === "extensao" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Extensão: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "qualidade" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Qualidade: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "resolucao" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Resolução: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "codec_audio" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Codec de Audio: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "codec_video" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Codec de Video: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "canais_audio" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=#000000]Canais de Audio: [/b][/color]" + info[i].value + "\n");
        }

        if (info[i].name === "screenshot" && info[i].value == "on") {
            $("textarea[name='bbcode']").append("[img]http://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/screens.png[/img]" + "\n");
        }

        if (info[i].name === "screen1" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[img]" + info[i].value + "[/img]" + "\n");
        }

        if (info[i].name === "screen2" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[img]" + info[i].value + "[/img]" + "\n");
        }

        if (info[i].name === "screen3" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[img]" + info[i].value + "[/img]" + "\n");
        }

        if (info[i].name === "screen4" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[img]" + info[i].value + "[/img]" + "\n");
        }

        if (info[i].name === "uploader" && info[i].value === "on") {
            $("textarea[name='bbcode']").append("[img]http://www.manicomio-share.com/images/barras/grupos/Paltalk/" + categoria + "/uploader.png[/img]" + "\n");
        }

        if (info[i].name === "nick" && info[i].value !== "") {
            $("textarea[name='bbcode']").append("[b][color=red]Nick: [/color][/b]" + info[i].value + "\n");
        }

        if (info[i].name === "url_nick" && info[i].value !== "") {
            $("textarea[name='bbcode']").append(info[i].value + "\n");
        }

        if (info[i].name === "fique_de_seed" && info[i].value == "on") {
            $("textarea[name='bbcode']").append("[img]http://i.imgur.com/zKY5b9Y.png[/img]" + "\n");
        }
    }

    $("textarea[name='bbcode']").append("[/size]" + "\n");
    $("textarea[name='bbcode']").append("[/face]" + "\n");

    // Debug Mode
    // console.log(centralizar);

    if (centralizar = 1) {
        $("textarea[name='bbcode']").append("[/center]")
    }

}

/**
 *  Captura os dados pelo ID do ImDB
 *  Status: Em Desenvolvimento
 */
function iteraObjeto() {
    var id = $("#id_imdb").val();

    theMovieDb.find.getById({
        "language": "pt-BR",
        "id": id,
        "external_source": "imdb_id"
    },
        function sucessCB(data) {
            var jsonobj = JSON.parse(data);
            var data_imdb;
            var title = jsonobj.movie_results[0].title;
            var original_title = jsonobj.movie_results[0].original_title;
            var overview = jsonobj.movie_results[0].overview;
            console.log(jsonobj);
            console.log(JSON.stringify(jsonobj, null, '\t'));

            data_imdb = jsonobj.movie_results[0].release_date;
            $("#titulo_original").val(title);

        },
        function errorCB(data) {
            console.log("Error callback" + data);
        });
}