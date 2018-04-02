# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

users = FactoryBot.create_list(:user, 5)
puts "created users: #{users.length}"

questions = []
5.times do
  questions << FactoryBot.create_list(:radio_question, 5, user: users.sample)
end

5.times do
  questions << FactoryBot.create_list(:text_question, 5, user: users.sample)
end

puts "created questions: #{questions.flatten.length}"