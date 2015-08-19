Rails.application.routes.draw do

  root to: "pages#index"

  resources :users, only: [:index, :show]

  resources :posts

end
