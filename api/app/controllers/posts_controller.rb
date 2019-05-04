class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :authenticate_request, only: %i[index show create update destroy]

  # GET /posts
  def index
    @posts = Post.page params[:page]

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private
    def post_params
      params.require(:post).permit(:title, :subtitle, :content, :readtime, :upvotes)
    end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.fetch(:post, {})
    end
end
