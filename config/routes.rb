Rails.application.routes.draw do

  resources :songs

  resources :albums

  root to: "pages#index" 

  # root to: "workers#index" 

  resources :items

  resources :users

  resources :posts

end
