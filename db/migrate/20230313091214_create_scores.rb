class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.text :user
      t.integer :total
      t.integer :collect

      t.timestamps
    end
  end
end
