class ActionController::Base

  # Log request data
  before_action :log_requests
  rescue_from StandardError do |exception|
    log_errors exception
    raise exception
  end

  def log_errors exception
    logger.info "Date Time: #{Time.now.to_s.colorize(:red)}"
    logger.info "Class: #{exception.class.to_s.colorize(:red)}"
    logger.info "Message: #{exception.message.to_s.colorize(:red)}"
    logger.info "Backtrace: #{exception.backtrace.map{|v| "  " + v}.join("\n").colorize(:red)}"
  end

  def log_requests
    logger.info "Date Time: #{Time.now.to_s.colorize(:green)}"
    logger.info "Method: #{request.method.colorize(:green)}"
    logger.info "Controller: #{params[:controller].colorize(:green)}"
    logger.info "Action: #{params[:action].colorize(:green)}"
    logger.info "Params: #{params.to_s.colorize(:green)}"
  end
end