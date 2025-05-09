# Contributing to TEMPLATE-PUBLIC

Thank you for contributing to this project! Follow the steps below to set up the project and start coding. Please adhere to the contribution rules to ensure a smooth collaboration.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PORTO-MAKER/TEMPLATE-PUBLIC.git
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the required packages:
   ```bash
   npm install
   ```

3. **Create Environment File**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_BASE_URL=https://portoku.live
   NEXT_PUBLIC_BASE_URL_BE=https://portoku.live/api/v1
   ```

## Contribution Rules

To keep the project organized, please follow these rules when contributing:

1. **Component Placement**
   - Place your components in the `contributors/yourname` folder (e.g., `contributors/johndoe`).
   - Use your GitHub username or a unique identifier as the folder name.

2. **Update Layout**
   - Modify `layout.js` to include your custom layout components.
   - Ensure your changes align with the project's structure and do not disrupt existing functionality.

3. **Create Your App Folder**
   - Create a folder named `yourname` inside the `app` directory (e.g., `app/johndoe`).
   - This folder will contain your routes and page components.

4. **Redirect to Your Components**
   - Set up routing to point to your components in the `app/yourname` folder.
   - Ensure proper navigation and functionality for your routes.

## Getting Started

- After completing the setup and following the rules, start the development server:
  ```bash
  npm run dev
  ```
- Test your components and ensure they work as expected.

## Happy Coding!

If you have questions or need assistance, feel free to open an issue or contact the maintainers. We appreciate your contributions!