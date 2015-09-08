Rails.application.routes.draw do

  # root to: "pages#index" 

  root to: "workers#index" 

  resources :items

  resources :users

  resources :posts

end
