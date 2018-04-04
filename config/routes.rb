Rails.application.routes.draw do

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

      resources :trivia, only: [:create, :index]
    end

    # v1 routes
    namespace :v1, &api_routes
  end

end
