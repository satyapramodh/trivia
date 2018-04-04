require 'rails_helper'

RSpec.describe Answer, type: :model do

  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:question) }
    # it { should validate_presence_of(:user) }
    ## shoulda matchers: testing inclusion of boolean
    ## is not possible to fully test it. Not recommended to test
    # it { should validate_inclusion_of(:correct).
    #   in_array([true, false]) }
    # it { should validate_exclusion_of(:correct).
    #   in_array([nil]) }
  end

  context "associations" do
    it { should belong_to :question }
    it { should belong_to :user }
  end

end
