This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

# How to Build & Run the Project

Follow these steps to set up, build, and run the React Native app locally:

# 1. Clone the Repository

## Using SSH

```bash
git clone git@github.com:Boghos/Navigation-App.git
cd Navigation-App
```

## Using HTTPS

````bash
git clone https://github.com/Boghos/Navigation-App.git
cd Navigation-App

# 2. Install Dependencies

Make sure you have Node.js, npm or yarn, and React Native CLI installed.

Then install the project dependencies:

```bash
npm install
````

or

```bash
yarn install
```

# 3. Install Android Dependencies

If this is your first time running a React Native Android project:

Install Android Studio and set up the Android SDK.

Make sure the ANDROID_HOME environment variable is set.

Start an Android emulator or connect a physical device via USB with debugging enabled.

# 4. Build the App

Before running, ensure Metro bundler is running in a terminal:

```bash
npm start
```

Then, in a new terminal, build and launch the Android app:

```bash
npx react-native run-android
```

If you’re using iOS (on macOS):

```bash
npx pod-install ios
npx react-native run-ios
```

# 5. Test Deep Links (Custom Scheme)

This project supports deep linking to the Set Company ID screen.

After building the app, run:

```bash
npx uri-scheme open myapp://settings/set-company-id --android
```

This will open the app and navigate directly to the “Set Company ID” screen — skipping the onboarding flow.

# Notes

The deep link scheme is configured as myapp://.

If you modify deep link paths, update them in both:

src/navigation/index.tsx (linking config)

android/app/src/main/AndroidManifest.xml (intent filters)

If changes to the manifest are made, rebuild the app with:

```bash
npx react-native run-android
```

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
