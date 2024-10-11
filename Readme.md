# Product Management Application
- **Overview** :
  - This is a full-stack application that allows users to add products and their related accessories. The backend is built using Spring Boot and the frontend is developed using React and PostgreSQL. The application supports creating new products, adding accessories to products, and managing these entities via a RESTful API.
- **Key Technologies** :
  - Backend: Spring Boot, Spring Data JPA, PostgreSQL
  - Frontend: React, Axios for API calls
  - Database: PostgreSQL
  - Build Tools: Maven
  - API: RESTful API with CORS support for cross-origin requests

- **Features**:
  - Add new products with model, product name, make, cost, and quantity.
  - Add accessories to a specific product.
  - View, create, and manage products and accessories through a clean UI.
  - RESTful API to handle product and accessory CRUD operations.
  - Cross-origin support for communication between React frontend and Spring Boot backend.

> - **Project Structure**
>   - `backend` : Spring Boot application
    ```bash
     /src
  /main
    /java
      /com/spring/application
        /Controller   # Controllers for handling HTTP requests
        /Entity       # JPA Entity classes representing the database models
        /Service      # Service layer with business logic
        /Repository   # Repository layer for database access

   - `Frontend` : React
     /src
        /components
            ProductForm.js     # Form to add a product
            AccessoryForm.js   # Form to add accessories for a product
        /App.js              # Main app entry point
        /App.css             # Styles for the app
```

  - **Database Schema**
    - The database schema consists of two tables: `products` and `accessories`.
    - `products` table:
    - `id` (primary key)
    - `model`
    - `Product`
    - `make`
    - `cost`
    - `quantity`
    - `accessories` table:
    - `id` (primary key)
    - `product_id` (foreign key referencing the `products` table)
    - `Model`
    - `Product`
    - `Make`
    - `Cost`
    - `Accessory for`
    - `Quatity`

    - **Prerequisites**
    - Java 11+: Ensure that you have Java installed and set up on your system.
    - Node.js and npm: For running the React frontend.
    - PostgreSQL: Ensure PostgreSQL is running and a database is set up.

    # Setup Instructions
    - **Backend (Spring Boot)**
    1. Clone the repository.
    2. Navigate to the `backend` directory.
    3. The backend will be running on http://localhost:8080.
    
    - **Configure PostgreSQL Database:**
    1. Open application.properties (located in src/main/resources).
    2. Update the database URL, username, and password for PostgreSQL

    - **Frontend (React)**
    1. Navigate to the `frontend` directory.
    2. Run `npm install` to install dependencies.
    3. Run `npm start` to start the development server.
    4. The frontend will be running on http://localhost:3000.

    # API Endpoints

    - **Products API**
    - `Add Product`: POST /api/products/addProducts
   
    - Request body
    ```bash
    {
        "model": "ModelX",
        "productName": "Product Name",
        "make": "Brand Name",
        "cost": 100,
        "quantity": 10
    }
    ```
     - Response: The newly created product.

    - `Get Product`: Get  /api/products/getProducts
    - Response: A list of all products.

    
    - `Update Product`: PUT /api/products/updateProduct
    - Request body
    ```bash
    {
        "model": "ModelX",
        "productName": "Product Name",
        "make": "Brand Name",
        "cost": 100,
        "quantity": 10
        }

    ```
    - `Delete Product`: DELETE /api/products/deleteProduct
    - Response 
        - Product deleted successfully


    # Accessories API

    - `Add Accessory`: POST /api/accessories/addAccessory
      
    - Request Body
    ``` Bash
        {
            "model": "Accessory Model",
            "productName": "Accessory Name",
            "make": "Brand Name",
            "cost": 50,
            "quantity": 5,
            "product_id": 1
    }
   ```
    - Response: The newly created accessory associated with the product.

    - `Get Accessory`: GET /api/accessories/getAccessories
    - Response: A list of all accessories.

    - `Update Accessory`: PUT /api/accessories/updateAccessory
    - Request Body
    ```bash
        {
            "model": "Accessory Model",
            "productName": "Accessory Name",
            "make": "Brand Name",
            "cost": 50,
            "quantity": 5,
            "product_id": 1
    }
    ```
    - Response: The updated accessory.

    - `Delete Accessory`: DELETE /api/accessories/deleteAccessory
    - Response
    - Accessory deleted successfully

    # CORS Configuration
    -The backend allows requests from the React frontend by using the @CrossOrigin annotation in the ProductController. If you are 
    running the frontend on a different port (e.g., localhost:3000), ensure CORS is configured correctly:

    - @CrossOrigin(origins = "http://localhost:3000")


 




