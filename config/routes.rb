Rails.application.routes.draw do
  get 'calc/index'
  get 'calc', to: 'calc#index'
  post 'calc/sol'
  post 'calc/ans'
  post 'calc/result'
  post 'calc/create'
end
