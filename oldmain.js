$(document).ready(function(){



    $(".content")
    .first()
    .show()

    $(".tabs").on("click", "a", function(e) {
        e.preventDefault()
    var tab = $(this).attr("href")
    $(".content").hide()
    $(tab).show()
})

   
        $.get("https://obscure-tundra-54269.herokuapp.com/bar-food")
        .done(function(data){
            // console.log(data)
            // const result = data.appetizers[0]
            // const name=appetizers.name
            // const price=appetizers.price
            // const description=appetizers.description
            const html = data.appetizers.map(item => (
                `
                <div id="menuapi">${item.name} ($${item.price})<br>
                ${item.description}<br>
                <br></div>
                <br>
                `
            ))
            

            $("#appapi").html(html)
        })

        $.get("https://obscure-tundra-54269.herokuapp.com/bar-food")
        .done(function(data){
            // console.log(data)
            // const result = data.appetizers[0]
            // const name=appetizers.name
            // const price=appetizers.price
            // const description=appetizers.description
            const html = data.entrees.map(item => (
                `
                <div id="menuapi">${item.name} ($${item.price})<br>
                ${item.description}<br>
                <br></div>
                `
            ))
            

            $("#entreesapi").html(html)
        })

        $.get("https://obscure-tundra-54269.herokuapp.com/bar-food")
        .done(function(data){
            // console.log(data)
            // const result = data.appetizers[0]
            // const name=appetizers.name
            // const price=appetizers.price
            // const description=appetizers.description
            const html = data.desserts.map(item => (
                
                `
                <div id="menuapi">${item.name} ($${item.price})<br>
                ${item.description}<br>
                <br></div>
                `
            ))
            

            $("#dessertsapi").html(html)
        })
})

