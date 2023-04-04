class Score < ApplicationRecord
    def self.ransackable_attributes(auth_object = nil)
        ["correct", "created_at", "id", "total", "updated_at", "user"]
      end
end
