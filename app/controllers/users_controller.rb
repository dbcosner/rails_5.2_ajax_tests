class UsersController < ApplicationController

  def index

  end

  def new
    @user = User.new
  end

  def create
    respond_to do |format|
      @user = User.new(user_params)
      if @user.save
        format.html { redirect_to action: 'index', notice: 'User was successfully created.' }
        format.json { render json: @user }
        format.js
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
