Rails.application.routes.draw do
  root  'calc#index'  #この1行を追加
  get 'calc/index'
  get 'calc', to: 'calc#index'
  post 'calc/sol'
  post 'calc/ans'
  post 'calc/result'
  post 'calc/create'
end
