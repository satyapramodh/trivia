class CreateRounds < ActiveRecord::Migration[5.1]
  def change
    create_table :rounds do |t|
      t.references :user, foreign_key: true
      t.references :question, foreign_key: true
      t.references :answer, foreign_key: true
      t.string :response
      t.boolean :correct
      t.integer :round, default: 0

      t.timestamps
    end
    add_index :rounds, :round
  end
end
