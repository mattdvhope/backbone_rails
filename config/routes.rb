Rails.application.routes.draw do

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)

  resources :songs

  resources :albums

  root to: "pages#index" 

  # root to: "workers#index" 

  resources :items

  resources :users

  resources :posts

end
