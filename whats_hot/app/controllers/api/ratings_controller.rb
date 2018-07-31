class Api::RatingsController < ApplicationController
    def index
        puts 'start'
        puts params
        @city = City.find(params[:city_id])
        @event = Event.find_by_id(params[:event_id])
        # @ratings = @event.find(params[:event_id]).events.order(created_at: :desc)
        @ratings = @event.ratings
        render json: @ratings
    end
    
    def create
        @city = City.find(params[:city_id])
        @event = Event.find_by_id(params[:event_id])
        @rating = @event.ratings.create!(rating_params)
        render json: @rating
    end

    def show   
        @event = Event.find(params[:id])
        render json: @event
    end

    def update
        @event = Event.find(params[:id])
        @event.update!(event_params)
        render json: @event
    end
        
    def destroy
        @event = Event.find(params[:id]).destroy
        render status: :ok
    end

      private
      def rating_params
        params.require(:rating).permit(:rating_value, :description, :event_id)
      end
    
end
