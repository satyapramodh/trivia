# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180401230907) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string "title"
    t.bigint "question_id"
    t.bigint "user_id"
    t.integer "answered_count"
    t.boolean "correct"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "title"
    t.integer "difficulty"
    t.string "mode"
    t.bigint "user_id"
    t.integer "answered_count"
    t.integer "correct_count"
    t.integer "incorrect_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "rounds", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "question_id"
    t.bigint "answer_id"
    t.string "response"
    t.boolean "correct"
    t.integer "round", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer_id"], name: "index_rounds_on_answer_id"
    t.index ["question_id"], name: "index_rounds_on_question_id"
    t.index ["round"], name: "index_rounds_on_round"
    t.index ["user_id"], name: "index_rounds_on_user_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.bigint "user_id"
    t.string "token", default: "", null: false
    t.boolean "expired", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_sessions_on_token", unique: true
    t.index ["user_id"], name: "index_sessions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "salt"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "answers", "users"
  add_foreign_key "questions", "users"
  add_foreign_key "rounds", "answers"
  add_foreign_key "rounds", "questions"
  add_foreign_key "rounds", "users"
  add_foreign_key "sessions", "users"
end
