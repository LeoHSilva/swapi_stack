# SWAPI Docker Project

This project provides a Dockerized environment for working with data from Star Wars API (SWAPI). It includes all necessary tools and dependencies to streamline development and testing.

## Features

- **Git**: An up-to-date version of Git is pre-installed and available on the `PATH`.
- **Node.js & pnpm**: Pre-installed for JavaScript development.
- **ESLint**: Configured and ready for linting JavaScript code.

## Getting Started

### Prerequisites

- Docker installed on your system.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoHSilva/swapi_docker.git
   cd swapi_docker
   ```

2. Build the Docker container:

   ```bash
   docker-compose build
   ```

3. Start the container:

   ```bash
   docker-compose up
   ```

4. Access the development environment:
   ```bash
   docker exec -it swapi_docker_container_name bash
   ```
5. Install Dependacy:
   ```bash
   pnpm setup:ui
   pnpm setup:api
   ```

6. Build UI and API
   ```bash
   pnpm build:ui
   pnpm build:api
   ```

7. Serve UI and API:
   ```bash
   pnpm serve:ui
   pnpm serve:api
   ```

8. Seed DB:
-   After the API starts serving, go to [localhost:3001/seeds](localhost:3001/seeds), to seed the Database

## Access Pages

- To access the UI, on your browser, go to [localhost:3000/](localhost:3000/)
- To access the API's statistics, go to [localhost:3001/statistics](localhost:3001/statistics)


## Questions and Answers

- I've addressed the question on the file -> [questions.md](questions.md)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [SWAPI](https://swapi.dev/) for the Star Wars Data.
- Docker for containerization.
- Open-source tools and libraries used in this project.
