$(document).ready(function() {
  $(".content")
    .first()
    .show()

  $(".tabs").on("click", "a", function(e) {
    e.preventDefault()
    var tab = $(this).attr("href")
    $(".content").hide()
    $(tab).show()
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food").done(function(
    data
  ) {
    // console.log(data)
    // const result = data.appetizers[0]
    // const name=appetizers.name
    // const price=appetizers.price
    // const description=appetizers.description
    const html = data.appetizers.map(
      item =>
        `
                <div id="menuapi">
                ${item.name} ($${item.price})<br>
                ${item.description}<br>
                </div>
                <div id="extra">
                <i id="spicy" class="fa fa-fire">${item.extra.spicy}</i>
                <i id="glutenfree" class="fa fa-circle">${item.extra.glutenfree}</i>
                <i id="vegetarian" class="fa fa-leaf">${item.extra.vegetarian}</i>
                </div>
                <br>
                `
    )
    $("#appapi").html(html)
    // if (false)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food").done(function(
    data
  ) {
    // console.log(data)
    // const result = data.appetizers[0]
    // const name=appetizers.name
    // const price=appetizers.price
    // const description=appetizers.description
    const html = data.entrees.map(
      item =>
        `
                <div id="menuapi">${item.name} ($${item.price})<br>
                ${item.description}<br>
                <br>
                </div>
                <div id="extra">
                <i id="spicy" class="fa fa-fire">${item.extra.spicy}</i>
                <i id="glutenfree" class="fa fa-circle">${item.extra.glutenfree}</i>
                <i id="vegetarian" class="fa fa-leaf">${item.extra.vegetarian}</i>
                </div>
                `
    )

    $("#entreesapi").html(html)
  })

  $.get("https://obscure-tundra-54269.herokuapp.com/bar-food").done(function(
    data
  ) {
    // console.log(data)
    // const result = data.appetizers[0]
    // const name=appetizers.name
    // const price=appetizers.price
    // const description=appetizers.description
    const html = data.desserts.map(
      item =>
        `
                <div id="menuapi">${item.name} ($${item.price})<br>
                ${item.description}<br>
                <br>
                </div>
                <div id="extra">
                <i id="spicy" class="fa fa-fire">${item.extra.spicy}</i>
                <i id="glutenfree" class="fa fa-circle">${item.extra.glutenfree}</i>
                <i id="vegetarian" class="fa fa-leaf">${item.extra.vegetarian}</i></div>
                `
    )
    $("#dessertsapi").html(html)
  })
})
