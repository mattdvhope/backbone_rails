Rails.application.routes.draw do

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)

  root to: "shopitems#index" 

  resources :categories

  resources :shopitems

  resources :types  

  # resources :albums

  # resources :songs, only: [:index, :show]

  # resources :products, only: [:index, :show]

  # root to: "workers#index" 

  # resources :items

  # resources :users

  # resources :posts

end
