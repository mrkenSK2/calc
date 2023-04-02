class CalcController < ApplicationController
    def index
        @data = Score.all.page(params[:page])
    end
    
    def sol
        @q_num = params[:q_num].to_i
        @score = Score.new
        @username = params[:name]
        @digit = params[:digit]
    end

    def delete
        obj = Score.find(params[:id])
        obj.destroy
        redirect_to "/calc"
    end

    def find
        @msg = '検索したいプレイヤー名を入力してください'
        @data = Array.new
        if request.post? then
          obj = Score.where user: params['find']
          #@data.push obj
          redirect_to "/calc"
        end
      end
        
    def create
        if request.post? then
            Score.create(score_params)
        end        
        redirect_to "/calc"
    end

    private
    def score_params
        params.require(:score).permit(:user, :total, :correct)
    end
end
