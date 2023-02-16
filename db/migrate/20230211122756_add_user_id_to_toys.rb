class AddUserIdToToys < ActiveRecord::Migration[7.0]
  def change
    add_column :toys, :user_id, :integer
  end
end
