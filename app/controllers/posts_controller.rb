class PostsController < ApplicationController
  before_filter :authenticate, :except => [ :index, :show ]

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post
    else
      render ('new')
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to @post
    else
      render ('index')
    end
  end

  def delete
    @post = Post.find(params[:id])
  end

  def destroy
    Post.find(params[:id]).destroy
    redirect_to(:action => 'index')
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def authenticate
    authenticate_or_request_with_http_basic do |name, password|
      name == "suzyogiadmin" && password == "elc12345"
    end
  end

end
