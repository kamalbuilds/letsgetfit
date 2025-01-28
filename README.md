# LetsgetFit

This project is based on zkTLS 


Problems aimed to be solved ->

1. https://reclaimprotocol.org/blog/posts/zktls-rfps#strict-fitness-trainer

2. Sleep2Earn tackles the growing issue of sleep deprivation in modern society. Poor sleep negatively impacts productivity, mental health, and overall well-being. The app incentivizes better sleep by rewarding users with tokens for meeting predefined sleep goals, verified securely using zkTLS. Users gain rewards without compromising sensitive health data, ensuring privacy.

**Problem Solved:** Encouraging healthier sleep habits through a gamified and secure platform that respects user privacy.

**Solution Offered:** Users connect sleep-tracking devices (e.g., smartwatches) to the app. zkTLS verifies the authenticity of sleep data (e.g., duration, quality) without exposing raw metrics. Rewards are distributed in the form of tokens that can be redeemed for discounts, gift cards, or other perks.

https://github.com/Lazychain/lazychain

This demonstrates a minimal working installation of the privy sdk in a fresh expo app. We recommend reading the [documentation](https://docs.privy.io/guide/expo/dashboard) for a more detailed guide.

## Setup

1. Install dependencies

   ```sh
   npm i
   ```

2. Configure an app client in your [Dashboard](https://dashboard.privy.io/apps?page=settings&setting=clients), and add your Privy app ID and app client ID in `app.json`

   ```json
   ...
    "extra": {
      "privyAppId": "<your-app-id>",
      "privyClientId": "<your-client-id>"
    }
   ...
   ```

   If you are using Expo go, be sure to add `host.exp.Exponent` to Allowed app identifiers under app clients in your [Dashboard]('https://dashboard.privy.io/apps?page=settings&setting=clients')

3. Configure your application identifier in `app.json`. This should match the bundle identifier for your app in the app store.

   ```json
   ...
    "ios": {
      "bundleIdentifier": "com.example.myapp"
    },
    "android": {
      "package": "com.example.myapp"
    }
   ...
   ```

4. If you are making use of passkeys, ensure that you have an [associated website](https://docs.privy.io/guide/expo/setup/passkey#_3-update-native-app-settings) for your application. Once you have this your `app.json` should be updated as follows:

   ```json
   ...
   "associatedDomains": ["webcredentials:<your-associated-domain>"],
   ...
   "extra": {
      ...
      "passkeyAssociatedDomain": "https://<your-associated-domain>"
    },
   ...
   ```

## Run the app

```sh
# expo go
npx expo start

# ios
npx expo run:ios

# android
npx expo run:android
```
