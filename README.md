# React Native Pokémon App Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Dependencies](#dependencies)
4. [Folder Structure](#folder-structure)
5. [Getting Started](#getting-started)
6. [Components](#components)
   - [PokemonList](#pokemonlist)
   - [PokemonCard](#pokemoncard)
7. [API Integration](#api-integration)
8. [Styling](#styling)
9. [Running the App](#running-the-app)
10. [Troubleshooting](#troubleshooting)
11. [Future Enhancements](#future-enhancements)
12. [Conclusion](#conclusion)

---

## 1. Introduction

This documentation provides information on how to set up and use a React Native app that renders a list of Pokémon along with their HP, images, and powers.

## 2. Installation

To get started, clone the repository from GitHub:

```bash
git clone https://github.com/your-username/react-native-pokemon-app.git
cd react-native-pokemon-app
```

Install the dependencies using:

```bash
npm install
```

or

```bash
yarn install
```

## 3. Dependencies

The app relies on the following dependencies:

- `react-native`: The core React Native library.
- `axios`: For making HTTP requests to the Pokémon API.
- `react-navigation`: For handling navigation between screens.

Install these dependencies using:

```bash
npm install axios react-navigation
```

or

```bash
yarn add axios react-navigation
```

## 4. Folder Structure

The project has the following folder structure:

```
|-- src
|   |-- components
|       |-- PokemonList.js
|       |-- PokemonCard.js
|   |-- screens
|       |-- HomeScreen.js
|   |-- App.js
|-- package.json
```

## 5. Getting Started

Ensure that you have a working React Native development environment set up. If not, follow the official React Native documentation for instructions.

## 6. Components

### 6.1 PokemonList

The `PokemonList` component renders a scrollable list of Pokémon. It fetches data from the Pokémon API and passes it to the `PokemonCard` component.

### 6.2 PokemonCard

The `PokemonCard` component displays information about a single Pokémon, including its name, HP, image, and powers.

## 7. API Integration

The app integrates with the [Pokémon API](https://pokeapi.co/) to retrieve information about Pokémon. The API endpoints are called in the `PokemonList` component.

## 8. Styling

Basic styling is applied using inline styles in the components. Feel free to enhance the styling based on your design preferences.

## 9. Running the App

To run the app on an emulator or physical device, use the following command:

```bash
npx react-native run-android
```

or

```bash
npx react-native run-ios
```

## 10. Troubleshooting

If you encounter issues, refer to the [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting).

## 11. Future Enhancements

Potential future enhancements include:

- Implementing pagination for the Pokémon list.
- Adding a search feature to find specific Pokémon.
- Enhancing the UI with animations and transitions.

## 12. Conclusion

Congratulations! You have successfully set up and documented a React Native app that renders Pokémon information. Feel free to explore and customize the app further based on your requirements. If you have any questions or feedback, please refer to the [GitHub repository](https://github.com/your-username/react-native-pokemon-app) for support.
