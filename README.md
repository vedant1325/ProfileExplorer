# Profile Explorer

## Overview

Profile Explorer is a React-based web application designed to allow users to view, edit, and manage profiles stored in the browser's local storage. It provides a user-friendly interface to display profile details, including names, images, summaries, and addresses. Additionally, users can visualize the location of a selected profile on an interactive map powered by OpenStreetMap.

You can access the deployed application here: [Profile Explorer](Profile Explorer)

## Features

-   **Profile Management:** Display a list of profiles with key information (name, image, summary, address).
-   **CRUD Operations:** Administrators can add, edit, and delete profile entries.
-   **Location Mapping:** Visualize profile addresses on an interactive map using OpenStreetMap.
-   **Local Storage Integration:** Store and retrieve profile data directly from the browser's local storage.
-   **React Router Navigation:** Enable seamless page transitions for a smooth user experience.

## Installation

To run the project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd profile-explorer
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

    The application will be accessible at `http://localhost:3000` in your web browser.

## Project Structure

-   `src/components/ProfilesPage.js`: Displays all profiles stored in local storage.
-   `src/components/UserListPage.js`: Provides an interface for administrators to edit or delete profiles.
-   `src/components/MapComponent.js`: Fetches location coordinates based on address input and displays them on a map.
-   `src/utils/localStorageHandler.js`: Handles retrieval and updating of profile data in local storage.
-   `src/App.js`: Manages route-based navigation using React Router.

## Troubleshooting

-   **Blank Profile Image:**
    -      Ensure a default image is set for profiles without images.
-   **Incorrect Location Mapping:**
    -      Verify that the entered address is valid and accurately formatted.
    -      Check for any issues with the OpenStreetMap API.
-   **Local Storage Issues:**
    -      Confirm that your browser allows local storage.
    -      Try clearing local storage to reset the data.
    -   Check for any browser console errors related to local storage access.

## Future Enhancements

-   **Database Integration:**
    -      Replace local storage with a backend database for persistent data storage.
-   **User Authentication:**
    -      Implement user authentication to restrict profile management to authorized users.
-   **Real-time Updates:**
    -      Utilize WebSockets to enable dynamic profile updates and real-time synchronization across clients.

## Live Demo

Try the application live here: [Profile Explorer](Profile Explorer)
