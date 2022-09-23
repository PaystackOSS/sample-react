# Getting Started with Paystack and React

This repository includes a sample application that shows how to integrate Paystack payments to your React apps.

The sample app is a simple checkout form to purchase an item and check out using the [Paystack Popup](https://paystack.com/docs/payments/accept-payments/#popup) checkout. It uses [iamraphson's](https://github.com/iamraphson) [react-paystack](https://github.com/iamraphson/react-paystack) library.

The library offers 3 integration methods:
- [Using hooks](https://github.com/iamraphson/react-paystack#1-using-the-paystack-hook)
- [Using a `<PaystackButton/>` component](https://github.com/iamraphson/react-paystack#2-using-the-paystack-button)
- [Using the Context API](https://github.com/iamraphson/react-paystack#3-using-the-paystack-consumer)

This sample uses the `<PaystackButton/>` component, but you can swap it out for any of the other methods. All 3 methods will bear the same results


## Demo

View a live demo of the app [here](https://react-paystack-guide.netlify.app/)

## Get Started

1. Clone this repo:
```
git clone https://github.com/PaystackOSS/sample-react.git
```

2. Navigate to the root directory and install dependencies
```
cd sample-react
yarn install
```

## Usage

1. Rename the `.env.example` file to `.env` and add your Paystack public key:

```
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_domain_xxxxxx
```

2. Start the application

```
yarn start
```

3. Visit http://localhost:3000 in your browser, if React doesn't automatically open it for you. You should now see your checkout form, and be able to make a purchase.

**Note**: This is a simple client-side integration, that uses a callback to perform post-payment logic. For a more stable, robust solution, you should use webhooks to listen for transaction success and perform any post-payment logic on your server.


## Contributing
If you notice any issues with this app, please [open an issue](https://github.com/PaystackOSS/sample-react/issues/new). PRs are also more than welcome, so feel free to [submit a PR](https://github.com/PaystackOSS/sample-react/compare) to fix an issue, or add a new feature!

## License

This repository is made available under the MIT license. Read [LICENSE.md](https://github.com/PaystackOSS/sample-react/blob/master/LICENSE.md) for more information.

