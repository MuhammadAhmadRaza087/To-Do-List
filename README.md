# React Native To-Do List App

This React Native application is a simple To-Do List app that allows users to manage their tasks. The app comes in two variants: one without storage (local state only) and the other with AsyncStorage for persistent storage.

## Features

### Without Storage

- **Add Item:** Users can add new items to the to-do list.
- **Delete Item:** Users can delete items from the list.
- **Update Item:** Users can update the description of existing items.

### With AsyncStorage Storage

- **Data Persistence:** To-do items are stored locally using AsyncStorage, ensuring data persistence even if the app is closed or restarted.
- **Add Item:** Users can add new items to the to-do list, and the data is saved to AsyncStorage.
- **Delete Item:** Users can delete items from the list, and the changes are reflected in AsyncStorage.
- **Update Item:** Users can update the description of existing items, and the updated data is stored in AsyncStorage.

## Project Structure

- **components:**
  - **ListWithoutStorage.js:** React component for the To-Do List without AsyncStorage.
  - **ListWithStorage.js:** React component for the To-Do List with AsyncStorage.
- **themes:**
  - **Theme.js:** Defines the color themes for light and dark modes.

## How to Run

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/react-native-todo-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-native-todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npx react-native run-android
    ```

    or

    ```bash
    npx react-native run-ios
    ```

## Theme Customization

- The app supports both light and dark themes. Themes can be customized in the `Theme.js` file.

## Contributors

- Muhammad Ahmad Raza

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
