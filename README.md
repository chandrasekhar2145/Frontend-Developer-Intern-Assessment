# Pioneer Labs Frontend Assessment Reference Doc

### Task 1: Create a Side Navigation Bar

**Approach:**

1. Use React JS with the `react-router-dom` library for routing and `CSS` for styling.
2. Create a component for the side navigation bar using React class components.
3. Implement responsiveness using media queries in CSS to collapse the navigation into a hamburger menu on smaller screens.
4. Use React Router to handle navigation between different pages and highlight the active navigation item.

### Task 2: Graph Population Data

**Approach:**

1. Utilize React JS with the `recharts` library for creating graphs.
2. Create a component to fetch population data from the provided API using React class lifecycle methods.
3. Use the `fetch` API or Axios to fetch data asynchronously.
4. Use Recharts to create a graph representing the population data with appropriate labels, legends, and axis titles.

### Task 3: Display Cryptocurrency Prices

**Approach:**

1. Use React JS to create a component for fetching and displaying cryptocurrency prices.
2. Fetch data from the provided API asynchronously using React class lifecycle methods.
3. Design visually appealing cards using CSS or a UI library like Material-UI.
4. Display prices for at least two cryptocurrencies, such as Bitcoin and Ethereum, in the cards.

### **Web3.js Integration (for Task 4)**

To use Web3.js for interacting with Ethereum and MetaMask, you need to follow these steps:

1. **Install Web3.js**: If you're using npm, you can install Web3.js by running:
    
    ```
    npm install web3
    ```
    
2. **Import Web3.js**: In your JavaScript file, import Web3.js at the top:
    
    ```jsx
    import Web3 from 'web3';
    ```
    
3. **Initialize Web3**: Create a new instance of Web3 and connect it to the Ethereum provider (MetaMask):
    
    ```jsx
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        // Now you can use 'web3' to interact with Ethereum
    } else {
        // MetaMask not detected, handle the case accordingly
    }
    ```
    
4. **Interact with Ethereum**: Once Web3 is initialized, you can use its methods to interact with the Ethereum blockchain. For example, to get the current Ethereum network ID:
    
    ```jsx
    const networkId = await web3.eth.net.getId();
    ```
    
5. **Handle User Authorization**: Before making any transactions or reading data from the blockchain, you need to request user authorization using MetaMask:
    
    ```jsx
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        // User denied account access
    }
    ```
    
6. **Use Ethereum Methods**: You can now use Web3 methods to interact with Ethereum, such as sending transactions, reading data from smart contracts, etc. For example, to get the user's Ethereum address:
    
    ```jsx
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    
    ```
    
7. **Handling Events**: You can also listen for events from MetaMask or Ethereum using Web3's event subscription methods:
    
    ```jsx
    window.ethereum.on('accountsChanged', function (accounts) {
        // Handle account change event
    });
    
    ```
    

### Task 4: Integrate MetaMask Wallet (Optional)

**Approach:**

1. Create a React class component named `MetaMaskIntegration`.
2. Use the `web3.js` library to interact with MetaMask.
3. Implement a function to handle the wallet connection process.
4. Display a button labeled "Connect Wallet" on the UI.
5. Add an event handler to the button that triggers the wallet connection process when clicked.
6. Use conditional rendering to display success/error messages based on the connection status.

**Sample Code:**

```jsx
import React, { Component } from 'react';
import Web3 from 'web3';

class MetaMaskIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      errorMessage: ''
    };
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        // Check if connected
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          this.setState({ isConnected: true, errorMessage: '' });
        }
      } else {
        this.setState({ isConnected: false, errorMessage: 'MetaMask extension not detected.' });
      }
    } catch (error) {
      this.setState({ isConnected: false, errorMessage: error.message });
    }
  };

  render() {
    const { isConnected, errorMessage } = this.state;
    return (
      <div>
        <button onClick={this.connectWallet}>Connect Wallet</button>
        {isConnected && <p>Wallet connected successfully!</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default MetaMaskIntegration;

```

### **Submission Guidelines:**

1. Create a GitHub repository containing the code for all tasks.
2. Include clear instructions on how to run the code locally.
3. Optionally, provide a hosted link (e.g., GitHub Pages) for interactive viewing.
4. Ensure code organization, commenting, and adherence to best practices.
