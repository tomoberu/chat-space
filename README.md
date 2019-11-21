## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|
### アソシエーション
- has_many :groups, through:  :groups_users
- has_many :posts, through:  :users_posts

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|integer|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### アソシエーション
- has_many :users,  through:  :users_posts

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|
### アソシエーション
- has_many :users, through:  :groups_users
- has_many :posts, through:  :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## users_postsテーブル
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :user
