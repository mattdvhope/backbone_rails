json.array! @products do |product|

  json.id           product.id
  json.title        product.title
  json.console      product.console
  json.release_year product.release_year
  json.upc          product.upc
  json.genre        product.genre
  json.cover        product.cover

end



