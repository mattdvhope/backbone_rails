json.id              @album.id
json.artist          @album.artist
json.title           @album.title
json.url             @album.url
json.date            @album.date
json.cover           @album.cover

json.songs @album.songs do |song|
  json.id      song.id
  json.title   song.title
  json.length  song.length
end
