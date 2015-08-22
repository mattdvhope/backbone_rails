class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
# binding.pry
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create(post_params)
  end

  def update
    respond_with Post.update(params[:id], post_params)
  end

  # def destroy
  #   respond_with Post.destroy(params[:id])
  # end

  private

    def post_params
      params.require(:post).permit(:user_id, :title, :body)
    end

end
