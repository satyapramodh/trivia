# making rails g controller create a request spec instead of controller spec
# https://stackoverflow.com/a/43439778/1124639

Rails.application.configure do
  config.generators do |g|
    # your setup here, like g.javascripts = false
  end

  def self.load_generators(*)
    super
    require 'rails/generators/rails/controller/controller_generator'
    Rails::Generators::ControllerGenerator.class_eval do
      remove_hook_for :test_framework
      hook_for :test_framework, as: :request
    end
  end
end