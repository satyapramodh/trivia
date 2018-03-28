class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :title
      t.references :question, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :answered_count
      t.boolean :correct

      t.timestamps
    end
  end
end
