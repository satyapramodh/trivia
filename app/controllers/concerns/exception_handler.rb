module ExceptionHandler
  # provides the more graceful `included` method
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |e|
      res = request['controller'].split("/").last.singularize
      render_json_error :not_found, "#{res}_not_found".to_sym
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      res = request['controller'].split("/").last.singularize
      render_json_error :unprocessable_entity, "#{res}_not_found".to_sym      
    end
  end
end