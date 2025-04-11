# Webhallen Product Search

A product search web application that uses Google's Custom Search API to retrieve and display product results from Webhallen, a Swedish e-commerce platform. The application is responsive and provides a seamless search experience across different devices. It includes features such as caching results for efficiency and pagination for better usability.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [API Integration](#api-integration)
- [Responsive Design](#responsive-design)
- [License](#license)

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm or yarn (package managers)

### Steps to Install

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mhasantuncer/search-api.git
    cd search-api
    ```

2. **Install the dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your Google Custom Search API key and search engine ID:

    ```env
    REACT_APP_GOOGLE_API_KEY=your-api-key
    REACT_APP_GOOGLE_CX=your-search-engine-id
    ```

4. **Start the development server:**

    Using npm:

    ```bash
    npm start
    ```

    Or using yarn:

    ```bash
    yarn start
    ```

    This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

The Webhallen Product Search app allows users to search for products available on Webhallen. Users can enter a product name in the search bar and view a paginated list of product results, including an image, description, and a link to view the product on Webhallen.

### How it Works:
1. **Search:** Users type a query into the search bar and hit Enter or click the "Search" button.
2. **Results:** Results are fetched from Google's Custom Search API and displayed in a responsive grid.
3. **Pagination:** Users can navigate through search results with pagination controls.
4. **Caching:** Previous search results are cached in localStorage for faster subsequent searches.

## Features

- **Responsive Design:** Adapts to various screen sizes (mobile, tablet, desktop) using Material-UI's Grid system.
- **Pagination:** Display search results across multiple pages with controls to navigate between pages.
- **Caching:** Search results are cached in localStorage for faster access during subsequent searches, saving API calls and improving user experience.
- **Error Handling:** Displays error messages in case of API failures.
- **Loading State:** Shows a loading spinner while results are being fetched.

## Components

1. **SearchBar**
    - **Purpose:** Provides an input field for users to type their search query.
    - **Key Features:**
        - A search button with a loading spinner when results are being fetched.
        - Allows users to hit Enter to initiate a search.

2. **PaginationControls**
    - **Purpose:** Provides pagination for navigating through search results.
    - **Key Features:**
        - Handles the page change logic.
        - Ensures correct page numbers based on the total results.

3. **SearchResults**
    - **Purpose:** Displays the search results in a grid.
    - **Key Features:**
        - Displays a loading spinner while results are being fetched.
        - Displays an error message if something goes wrong.
        - Shows a "No results found" message if no products match the search query.

4. **ProductCard**
    - **Purpose:** Displays individual product information (e.g., title, image, description).
    - **Key Features:**
        - Displays a product image, title (truncated if necessary), description, and a link to view the product.
        - The product title is truncated if it exceeds 60 characters.

5. **App**
    - **Purpose:** Main entry point of the app that ties everything together.
    - **Key Features:**
        - Manages state for search queries, current page, and search results.
        - Handles user interaction (searching and pagination).

## API Integration

### Google Custom Search API
This application integrates with Google's Custom Search API, which is used to fetch product data from Webhallen. The application makes API calls to fetch the product information based on the user query.

### Rate Limiting
The Google Custom Search API has a limit of 100 queries per day. To maximize usage, we cache the search results in localStorage and reduce redundant API calls.

### API Request Example:

```javascript
const response = await searchProducts(query, currentStartIndex);
```

## Responsive Design

This application is fully responsive and adapts to various screen sizes using Material-UI’s Grid system. Here's how the grid layout behaves across different breakpoints:

- Extra-small screens (xs: 12): The grid item takes up the full width of the container (1 item per row).

- Small screens (sm: 6): The grid item takes up half the width of the container (2 items per row).

- Medium screens (md: 4): The grid item takes up one-third of the width of the container (3 items per row).

- Large screens (lg: 3): The grid item takes up one-quarter of the width of the container (4 items per row).

The grid automatically adjusts based on the screen size, ensuring that the layout is optimized for any device.

## License
This project is licensed under the MIT License.
