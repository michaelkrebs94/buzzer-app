# Introduction
This is a simple WebApp for playing quiz games that require participants to press a buzzer.

It consists of a hardware project for building the buzzer input device and a PWA to install on your tablet or phone.

# PWA
The PWA can be hosted on a computer, raspberry pi or similar in the local network or published on a VPS.
## Run locally with port forwarding
1. Make sure you have Docker installed on your machine.
2. Open a terminal or command prompt.
3. Run the following command:
    ``` shell
    docker run -p 8080:80 ghcr.io/michaelkrebs94/buzzer-app
    ```
4. Access the application by opening a web browser and navigating to http://localhost:8080.

## Run on a VPS using Docker Compose with Traefik
1. Make sure you have Docker and Docker Compose installed on your VPS.
2. Create a new directory for your project and navigate to it.
3. Create a file named docker-compose.yml and add the following content:
    ``` docker-compose
    version: '3'
    services:
        buzzer-app:
            image: ghcr.io/michaelkrebs94/buzzer-app
            labels:
            - "traefik.enable=true"
            - "traefik.http.routers.buzzer.rule=Host(`buzzer.yourdomain.com`)"
    ```
    Replace `yourdomain.com` with your actual domain name.
4. Run the following command to start the application:
    docker-compose up -d
5. Access the application by opening a web browser and navigating to http://buzzer.yourdomain.com.

# Development
To develop on the frontend, follow the steps below:

1. Install the project dependencies using Yarn. Open a terminal or command prompt and navigate to the project directory.
   ``` shell
   yarn install
   ```

2. Run the development server using Yarn.
   ``` shell
   yarn dev
   ```

3. Access the application by clicking she link shown by `yarn dev`.

# Contributions
Whatever comes to your mind, feel free to open an issue or a pull request.
