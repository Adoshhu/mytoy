Rails.application.routes.draw do

  get "signup", to: "users#new"
  get "login", to: "sessions#new"
  get "update", to: "sessions#edit"
  post "login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy", as: :logout
  resources :users, except: [:new]
  get 'users', to: 'users#index'
  delete 'users/:id', to: 'users#destroy', as: :delete_user
  resources :sessions, only: [:edit, :update]
  resources :toys
  root 'toys#home'
  




  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
