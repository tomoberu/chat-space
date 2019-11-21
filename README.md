## usersテーブル
## user_idを削除完了
|Column|Type|Options|
|------|----|-------|
|password|string|null: false| 
|e-mail|string|null: false|
|nickname|string|null: false|
### アソシエーション
- has_many :groups, through:  :groups_users
- has_many :posts

## postsテーブル
## "余分な制約を削除"
## "groupsに接続"
## "textの型を修正。integer→string"
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### アソシエーション
- belongs_to :user
- has_many :groups

## groupsテーブル
## "group_name → nameへ変更。型を変更。"
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### アソシエーション
- has_many :users, through:  :groups_users
- has_many :posts

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

### users_postsテーブルの削除しました。
### 余分な外部キー制約を削除しました。