# Meryas-ChartJS

## Description

Meryas-ChartJS is a dynamic React.js application created for an interview test at Meryas Home. The project's primary objective is to develop an interactive data visualization component using React, Redux Toolkit, React Redux, Tailwind CSS, and Chart.js. This component empowers users to filter and visualize data obtained from the provided API, which contains detailed product information. The centerpiece of this project is an interactive bar chart that adapts in real-time based on the selected time period.

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [License](#license)

## Requirements

Meryas-ChartJS fulfills the following key requirements:

1. **React Application**: The project creates a new React application for the data visualization component.

2. **Interactive Bar Chart**: A single React functional component is implemented, featuring:
   - An interactive bar chart that employs Chart.js for data visualization.
   - Data sourced from the [FakeStore API](https://fakestoreapi.com/products) to populate the chart.
   - Utilization of Redux Toolkit and React Redux for robust state management.
   - A user-friendly, interactive chart that enables data filtering based on user-selected time periods (e.g., months, days).

3. **Stylish UI**: The component is elegantly styled using Tailwind CSS to enhance design, layout, and user interactions.

4. **Best Practices**: The project adheres to best practices for React development, ensuring code quality and maintainability.

## Installation

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nicole5707/Meryas-ChartJS.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Meryas-ChartJS
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Access the Project**:
   Open your web browser and access the project at `http://localhost:3000`.

## Usage

Once the project is running, users can interact with the data visualization component to explore and analyze product data obtained from the FakeStore API. Select your preferred time period or apply filters to dynamically update the chart and gain valuable insights from the data.

## Technologies Used

Meryas-ChartJS leverages a range of cutting-edge technologies and libraries, including:

- **React.js**: As the core framework for building the interactive data visualization component.
- **Redux Toolkit**: For efficient state management and data flow.
- **React Redux**: To seamlessly connect React components with the Redux store.
- **Tailwind CSS**: For a modern and responsive user interface design.
- **Chart.js**: Powering the interactive bar chart for data visualization.

## Project Structure

The project follows a structured directory layout:

- `src/`: Home to the application's source code.
  - `api/`: Manages data fetching and API interactions.
    - `data.js`: Defines API endpoints for fetching product data.
  - `app/`: Responsible for Redux Toolkit and state management.
    - `store.js`: Configures the Redux store.
  - `Components/`: Holds a collection of React components.
    - `BarChart.jsx`: Implements the interactive bar chart component.
  - `index.css`: Contains the project's CSS styles.
  - `index.js`: Serves as the entry point, rendering the primary application component.

## API Reference

The project fetches detailed product data from the [FakeStore API](https://fakestoreapi.com/products) to populate the data visualization component. This API provides a wealth of sample product information, which is used to create engaging charts and data visualizations.

## License

This project is licensed under the [MIT License](LICENSE).