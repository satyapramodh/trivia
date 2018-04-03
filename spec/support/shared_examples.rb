shared_examples "user authentication" do |method, url, params|
  let(:session) { FactoryBot.create(:session) }

  context "when valid user token is sent" do
    it "request should succeed" do
      params ||= {}
      params.merge!({headers: token_headers(session.token)})

      send(method, url, params)
      expect(response).to have_http_status(:ok)
    end
  end

  context "when invalid user token is sent" do
    it "request should fail" do
      params ||= {}

      send(method, url, params)
      expect(response).to have_http_status(:unauthorized)
    end
  end
end