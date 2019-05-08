class Post < ApplicationRecord
  paginates_per 10
  validates_presence_of :title, :content, :readtime, :upvotes
  has_attached_file :picture, default_url: "assets/images/missing.png"
  validates_attachment :picture, presence: true
  do_not_validate_attachment_file_type :picture
end
