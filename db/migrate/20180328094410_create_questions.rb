class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :difficulty
      t.string :mode
      t.references :user, foreign_key: true
      t.integer :answered_count
      t.integer :correct_count
      t.integer :incorrect_count

      t.timestamps
    end
  end
end
