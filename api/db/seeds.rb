# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

50.times do
  Post.create!(
    title: Faker::Hipster.sentence(),
    content: Faker::Hipster.paragraphs(rand(1...6)).join(" "),
    readtime: rand(1...10),
    upvotes: rand(0...240)
  )
end
