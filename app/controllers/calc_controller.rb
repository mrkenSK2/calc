class CalcController < ApplicationController
    def index
        @cnt = 0
        @collect=0
        @data = Score.all
    end
    def sol
        @cnt = params[:cnt].to_i + 1
        @q_num = params[:q_num].to_i
        @collect = params[:collect].to_i
        @rand = Random.new
        @num1 = @rand.rand(10000)
        @num2 = @rand.rand(10000)
        @opnum = @rand.rand(2)
        case @opnum
            when 0 then
                @op='+'
                @ans = @num1+@num2
            when 1 then
                @op='-'
                @ans = @num1-@num2
        end
    end
    
    def ans
        @flag = true
        @cnt = params[:cnt].to_i
        @q_num = params[:q_num].to_i
        @collect = params[:collect].to_i
        if params[:input_ans] == params[:ans]
            @msg = "正解"
            @collect += 1
        else
            @flag = false
            @msg = '不正解'
            @wrong = params[:input_ans]
            @ans = params[:ans]
        end
    end
    
    def result
        @collect = params[:collect].to_i
    end
    def create
        if request.post? then
            obj = Score.create(
                user: "sa",
                total: params[:q_num],
                collect: params[:tit]
            )
        end        
        redirect_to "/calc"
    end
end
