# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Rating.destroy_all
Event.destroy_all
City.destroy_all



atlanta = City.create!( name: 'Atlanta' , photo_url: "http://media.navigatored.com/images/940*630/shutterstock_603555710.jpg")
puts ("inside seeds")

disco = Event.create!(name: "70's Disco Party", address: "123 Peachtree Rd", description: "Must be 21+", photo_url:"https://r.hswstatic.com/w_907/gif/podcasts/stuffyoushouldknow-podcasts-wp-content-uploads-sites-16-2014-03-disco600x350.jpg", city_id: atlanta.id)

rating1 = Rating.create!(rating: 7, description: "corny but fun", event_id: disco.id)
