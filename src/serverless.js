const { Component } = require('@serverless/core')

class AwsSSMDocument extends Component {
  /**
   * Deploy
   * @param {*} inputs
   */
  async deploy(inputs = {}) {
    // Update state
    this.state = inputs

    // Export outputs
    return this.state
  }

  /**
   * Remove
   * @param {*} inputs
   */
  async remove() {
    // Empty state
    this.state = {}
    return {}
  }
}

module.exports = AwsSSMDocument
