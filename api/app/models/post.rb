class Post < ApplicationRecord
  paginates_per 10
  validates_presence_of :title, :content, :readtime, :upvotes
end
