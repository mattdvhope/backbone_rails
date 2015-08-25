Rails.application.routes.draw do

  root to: "pages#index" 

  resources :items

  resources :users

  resources :posts

end
