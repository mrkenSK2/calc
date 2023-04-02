Rails.application.routes.draw do
  get '/', to: 'calc#index'  #この1行を追加
  get 'calc/index'
  get 'calc', to: 'calc#index'
  get 'calc/delete/:id', to: 'calc#delete'
  post 'calc/sol'
  post 'calc/ans'
  post 'calc/result'
  post 'calc/create'
end
