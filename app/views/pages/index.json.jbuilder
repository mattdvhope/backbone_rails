json.array! @users do |user|

  json.id        user.id
  json.name      user.name
# json.username  user.username
# json.email     user.email
# json.address do
#   json.street  user.address.street
#   json.suite   user.address.suite
#   json.city    user.address.city
#   json.zipcode user.address.zipcode
#   json.geo do
#     json.lat   user.address.geo.lat
#     json.lng   user.address.geo.lng
#   end
# end
# json.phone     user.phone
# json.website   user.website
# json.company do
#   json.name          user.company.name
#   json.catch_phrase  user.company.catch_phrase
#   json.bs            user.company.bs
# end

end



