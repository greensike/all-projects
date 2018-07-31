Rails.application.routes.draw do
  namespace :api do
    resources :cities do
      resources :events do
        resources :ratings
      end
    end
  end
end
