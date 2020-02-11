Rails.application.routes.draw do
  root "static_pages#index"
  devise_for :users

  get "/", to: "static_pages#index"
  get "/courses", to: "static_pages#index"
  get "/courses/:id", to: "static_pages#index"

  namespace "api" do
    namespace "v1" do
      resources :courses, only: [:index, :show]
    end
  end
end
