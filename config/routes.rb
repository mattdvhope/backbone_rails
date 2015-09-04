Rails.application.routes.draw do

  # root to: "pages#index" 

  root to: "histories#index" 

  resources :items

  resources :users

  resources :posts

end
