class CreateSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :sessions do |t|
      t.references :user, foreign_key: true
      t.string :token, null: false, default: ""
      t.boolean :expired, null: false, default: false

      t.timestamps
    end
    add_index :sessions, :token, unique: true
  end
end
