Profile Explorer

Overview

Profile Explorer is a React-based web application that allows users to view, edit, and manage profiles stored in local storage. Users can navigate to a map view that displays the location of a selected profile. The app is deployed at: Profile Explorer.

Features

Profile Management: Users can view a list of profiles with names, images, summaries, and addresses.

Add, Edit, and Delete Profiles: Admins can modify profile details.

Location Mapping: Displays the profile's address on an interactive map using OpenStreetMap.

Local Storage Integration: Profiles are stored in the browser's local storage.

Navigation: Uses React Router for seamless page transitions.

Installation

To run the project locally:

Clone the repository:

git clone <repository_url>

Navigate to the project folder:

cd profile-explorer

Install dependencies:

npm install

Start the development server:

npm start

Project Structure

Profiles Page: Displays all profiles stored in local storage.

User List Page: Allows admins to edit or delete profiles.

Map Component: Fetches location coordinates based on address input.

Local Storage Handling: Retrieves and updates profile data.

Navigation: React Router manages route-based navigation.

Troubleshooting

Blank Profile Image: If a profile has no image, ensure a default image is displayed.

Incorrect Location Mapping: Address lookup may fail if the entered address is invalid.

Local Storage Issues: If profiles are not saving, check browser settings or clear local storage.

Future Enhancements

Database Integration: Replace local storage with a backend database.

User Authentication: Restrict profile management to authenticated users.

Real-time Updates: Use WebSockets for dynamic profile updates.

Live Demo

Try the app here: Profile Explorer
