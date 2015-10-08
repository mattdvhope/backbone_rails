Rails.application.routes.draw do

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)

  root to: "pages#index" 

  resources :albums, only: [:index, :show, :new, :create]

  resources :songs, only: [:index, :show]

  # resources :products, only: [:index, :show]

  # root to: "workers#index" 

  # resources :items

  # resources :users

  # resources :posts

end
