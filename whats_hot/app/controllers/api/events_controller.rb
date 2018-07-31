class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render json: @events
    end
    
    def create
        @city = City.find(params[:city_id])
        @event = @city.events.create(event_params)
        render json: @event
    end

    def show
        @city = City.find(params[:city_id])
        @event = @city.events.find(params[:id])
        render json: @event
    end

    def update
        @event = Event.find(params[:event_id])
        @event.update!(event_params)
        render json: @event
    end
        
    def destroy
        @event = Event.find(params[:id]).destroy
        render status: :ok
    end
        
    private    
    def event_params
        params.require(:event).permit(:address, :description, :date, :name, :photo_url, :city_id)
    end
end
