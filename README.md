# Cinemate 🎬🎥

Welcome to **Cinemate**, a sleek and modern movie and TV show discovery platform. This React-based application provides a seamless experience for exploring popular and top-rated content, complete with dark mode and a responsive design.

## Tech Stack 🛠️

- **React**: A powerful JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern UIs.
- **TMDB API**: The Movie Database API, used for fetching movie and TV show data.
- **FlowBite**: A library of pre-built components compatible with Tailwind CSS, used for enhancing UI elements.

## Description 📖

Cinemate is a five-page website designed to offer a comprehensive browsing experience for movie enthusiasts. The application features:

- **Movie Categories** 🎞️: Users can explore movies and TV shows by categories such as popular and top-rated. The content is dynamically fetched from the **TMDB API**, ensuring up-to-date information.

- **Dark Mode** 🌙: A dark mode feature is implemented using Tailwind CSS, providing a comfortable viewing experience, especially in low-light conditions.

- **FlowBite Components** 💻: Key UI elements like the header, footer, and movie cards are designed using FlowBite components, offering a cohesive and visually appealing design.

- **Search Functionality** 🔍: A search option is available for users to find specific movies or TV shows. This feature utilizes the `useSearchParams()` hook to manage query parameters and fetch relevant data from the TMDB API.

- **Detailed Movie Page** 📄: Clicking on a movie or TV show redirects users to a detail page, showcasing comprehensive information such as the title, description, release date, ratings, and more.

- **Error Handling** 🚫: The application gracefully handles situations like "Page Not Found" and missing images, ensuring a smooth user experience even in edge cases.

## Installation 📥

To run Cinemate locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Ankit-Kum-ar/cinemate.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd cinemate
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the root directory and add your TMDB API key:

    ```plaintext
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```

5. **Start the development server**:

    ```bash
    npm start
    ```

## Usage 🚀

1. Open your browser and go to `http://localhost:3000`.
2. Browse through different categories, search for movies or TV shows, and explore detailed pages for each selection.

## Features ✨

- **Responsive Design**: Cinemate is fully responsive, ensuring a seamless experience across desktop and mobile devices.
- **Dynamic Data**: All movie and TV show data is fetched in real-time from the TMDB API.
- **Dark Mode**: Toggle between light and dark modes for an optimal viewing experience.

<br />

## Visit the website ✌️: [cinemate-psi.vercel.app](https://cinemate-psi.vercel.app/)

<br/>

## Contributing 🤝

We welcome contributions! If you'd like to contribute to Cinemate, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

Thank you for exploring Cinemate! I hope you enjoy discovering movies and TV shows as much as I enjoyed building this app. 🍿🎉
