class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    respond_to do |format|
      @user = User.new(user_params)
      if @user.save
        format.html { render partial: 'id_and_name', locals: { user: @user } }
        format.json { render json: @user }
        format.js
      else
        format.html { render partial: 'everything_is_bad', status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
        format.js { render status: :unprocessable_entity }
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
