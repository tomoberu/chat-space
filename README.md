## usersテーブル
## user_idを削除完了
## "groupsに接続しました"
|Column|Type|Options|
|------|----|-------|
|password|string|null: false| 
|e-mail|string|null: false|
|nickname|string|null: false|
### アソシエーション
- has_many :groups, through:  :groups_users
- has_many :posts
- has_many :groups_users

## postsテーブル
## "余分な制約を削除"
## "groupsに接続"
## "textの型を修正。integer→string"
## "has_many→belongs＿toへ修正"
## "groups_idを作成"
|Column|Type|Options|
|------|----|-------|
|text|string ||
|image|string ||
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### アソシエーション
- belongs_to :user
- belongs_to :group

## groupsテーブル
## "group_name → nameへ変更。型を変更。"
## "groupsに接続しました"
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### アソシエーション
- has_many :users, through:  :groups_users
- has_many :posts
- has_many :groups_users

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