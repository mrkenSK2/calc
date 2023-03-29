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
