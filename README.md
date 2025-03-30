# React-Customerservice-app

**React-CustomerService-App** is a frontend application for the customer management project, developed with React. It is designed to facilitate the registration and management of customer data in a distributed system using microservices.

## :clipboard: Requirements

> **Note:**  
> To run this project, you need:
>
>- **Node.js** version 22.14.0 or higher
>- **npm** (Node.js package manager)
>- You need to have followed the complete setup instructions for the **Eureka Service Discovery** and **Customer Service** projects.

## :gear: Project Configuration

**Set up Eureka Service Discovery and Customer Service**:  
   To run this project, you must first complete the setup instructions for **Service Discovery** and **Customer Service**. Detailed instructions can be found at the following links:
   - **Service Discovery**: [Instructions here](https://github.com/AndresMaldonado200338/Eureka-Service-Discovery)
   - **Customer Service**: [Instructions here](https://github.com/AndresMaldonado200338/Customer-Service)

2. **Create and configure the `.env` file**:  
   Once both services are set up correctly, create a `.env` file following the format of the provided `.env.example` file.
   
   In this `.env` file, add the microservice path shown in **Eureka Service Discovery** in the section **'Instances currently registered with Eureka'**. This is necessary so the frontend can access the microservices using the addresses provided by Eureka.

   Example:
    ```env
    REACT_APP_BASE_URL=http://localhost:9092
    ```

## :heavy_check_mark: Running the Project

1. Download the **Eureka Service Discovery**, the **Customer Service** and this project, ensuring they are located in appropriate places.
2. Open, configure and execute **Eureka Service Discovery** and **Customer Service** projects in your preferred IDE.
3. Open and configure your **React-Customerservice-app**
4. Execute the following command to download all react project dependencies
    ```bash
    npm install
    ```
5. Once the project dependencies have been downloaded, we can run it with the following command:
    ```bash
    npm start
    ```
6. This project starts running at `http://localhost:3000` and if you have properly configured the **service discovery** and **customer service** projects, you will be able to access all the microservice functionalities for customer management without any problem.

## :handshake: Contributors

This project was created by:

### - Juan David Ochoa
[![Github](https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/JuanDavid0)  
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-david-ochoa-pinilla/)

### - William Cely
[![Github](https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/WilliamC111)  
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/williamcelyl%C3%B3pez/)

### - Andrés Maldonado
[![Github](https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndresMaldonado200338)  
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amaldonados/)
