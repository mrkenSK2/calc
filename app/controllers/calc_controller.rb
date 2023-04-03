class CalcController < ApplicationController
    def index
        if params[:find].present?
            @ko = "ihuihiuh"
        end    
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
        
    def create
        if request.post? then
            Score.create(score_params)
        end        
        redirect_to "/calc"
    end

    def find
        @ko = params[:text]
        @score = Array.new
        if request.post? then
            @data = Score.where name: params[:find]
        end
        redirect_to "/calc"
    end

    private
    def score_params
        params.require(:score).permit(:user, :total, :correct)
    end
end
