Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: 'json'} do
    api_routes = lambda do
      resources :questions, only: [:index, :show, :create]

      resources :users, only: [:create] do
        collection do
          get :me
        end
      end

      resources :sessions, only: [:create, :destroy]

      post 'login', action: :create, controller: :sessions
      delete 'logout', action: :destroy, controller: :sessions
    end

    # v1 routes
    namespace :v1, &api_routes
  end
end
