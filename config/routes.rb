Rails.application.routes.draw do

  # root to: "pages#index" 

  root to: "workers#index" 

  get '/task.js', to: 'workers#tasks'

  resources :items

  resources :users

  resources :posts

end
