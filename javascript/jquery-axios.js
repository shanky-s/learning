const getRandomCat = function(){
    let url = "http://aws.random.cat/meow"
    $.getJSON(url,(res)=>{
        console.log("Get Successful");
    })
    .done((doneParmas)=>{
        console.log(doneParmas);
        console.log($(".cat-img-container img"));
        $(".cat-img-container img").attr("src", doneParmas.file);
    })
    .fail((err)=>{
        console.log(err);
    })
    .always((alwaysParams) => {
        console.log(alwaysParams);
    })
}