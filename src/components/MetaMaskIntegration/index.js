import React, {Component} from 'react'
import Web3 from 'web3'
import './index.css'

class MetaMaskIntegration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isConnected: false,
      errorMessage: '',
    }
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({method: 'eth_requestAccounts'})
        const web3 = new Web3(window.ethereum)
        // Check if connected
        const accounts = await web3.eth.getAccounts()
        if (accounts.length > 0) {
          this.setState({isConnected: true, errorMessage: ''})
        }
      } else {
        this.setState({
          isConnected: false,
          errorMessage: 'MetaMask extension not detected.',
        })
      }
    } catch (error) {
      this.setState({isConnected: false, errorMessage: error.message})
    }
  }

  render() {
    const {isConnected, errorMessage} = this.state
    return (
      <div>
        <button className="connect-wallet-button" onClick={this.connectWallet}>
          Connect Wallet
        </button>
        {isConnected && <p>Wallet connected successfully!</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  }
}

export default MetaMaskIntegration
