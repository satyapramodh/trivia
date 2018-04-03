module RequestSpecHelper

  def json
    JSON.parse(response.body)
  end

  def token_headers(token)
    { "Authorization": "Bearer #{token}" }
  end
end