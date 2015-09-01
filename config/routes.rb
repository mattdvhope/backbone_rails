Rails.application.routes.draw do

  # root to: "pages#index" 

  root to: "geolocations#index" 

  resources :items

  resources :users

  resources :posts

end
