class CalcController < ApplicationController
    def index
        @data = Score.all
    end
    
    def sol
        @q_num = params[:q_num].to_i
    end
        
    def create
        if request.post? then
            obj = Score.create(
                user: "sa",
                total: params[:q_num],
                correct: params[:correct]
            )
        end        
        redirect_to "/calc"
    end
end
