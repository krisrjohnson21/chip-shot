Rails.application.routes.draw do
  root "static_pages#index"
  devise_for :users

  get "/", to: "static_pages#index"
  get "/courses", to: "static_pages#index"
  get "/courses/:id", to: "static_pages#index"
  get "/courses/:id/reviews", to: "static_pages#index"
  get "/users/:id/profile", to: "static_pages#index"

  namespace "api" do
    namespace "v1" do
      post "courses/search", to: "courses#search"
      resources :courses, only: [:index, :show] do
        resources :reviews, only: [:index, :show, :create, :destroy, :update]
      end
      resources :users, only: [:show] do
        resources :rounds, only: [:index, :show, :create, :destroy, :update]
        resources :reviews, only: [:index, :show, :create, :destroy, :update]
      end
    end
  end
end
