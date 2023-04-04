class CalcController < ApplicationController
    def index
        @q = Score.ransack(params[:q])
        @data = @q.result(distinct: true) 
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
