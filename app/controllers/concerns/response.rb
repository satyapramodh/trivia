# Handling json responses the json-api way
# https://philsturgeon.uk/api/2017/01/03/building-apis-with-rails-handling-errors-nicely/

include ErrorSerializer

module Response
  def render_json(object, status = :ok)
    render json: object, status: status
  end

  def render_json_error(status, error_code, extra = {})
    # map error code to status symbol
    status = Rack::Utils::SYMBOL_TO_STATUS_CODE[status] if status.is_a? Symbol

    error = {
      title: I18n.t("error_messages.#{error_code}.title"),
      status: status,
      code: I18n.t("error_messages.#{error_code}.code")
    }.merge(extra)

    detail = I18n.t("error_messages.#{error_code}.detail", default: '')
    error[:detail] = detail unless detail.empty?
    render json: { errors: [error] }, status: status
  end

  def render_json_validation_error(resource)
    render json: ErrorSerializer.serialize(resource.errors), status: :bad_request
  end
end