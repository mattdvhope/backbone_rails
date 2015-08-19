class CompaniesController < ApplicationController

  respond_to :json, :html

  def index
    @companies = Company.all
    respond_with @companies
  end

  def show
    @company = Company.find(params[:id])
    respond_with @company
  end

  def create
    respond_with Company.create(company_params)
  end

  def update
    respond_with Company.update(params[:id], company_params)
  end

  def destroy
    respond_with Company.destroy(params[:id])
  end

  private

    def company_params
      params.require(:company).permit(:user_id, :name, :catch_phrase, :bs)
    end

end
