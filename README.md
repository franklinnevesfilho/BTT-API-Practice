# Break Through Tech API Introduction

## Things to keep in mind
- [ ] System Design Monolithic VS Client-Server

- [ ] HTTP Methods:
  - [ ] Get
  - [ ] Post
  - [ ] Put
  - [ ] Delete

## How To run?

1. make sure you have python 3.13+ installed in your computer
    - You can check by running 
    
    Windows:
    ```bash
    python --version
    ```

    Mac:
    ```bash
    python3 --version
    ```

2. Then create your virtual environment
    - In the terminal run
    
    Windows:
    ```bash
    python -m venv .venv
    ```

    Mac:
    ```bash
    python3 -m venv .venv
    ```

3. Activate the Virtual environment
 
    Windows:
    ```bash
    ./.venv/Scripts/activate
    ```

    Mac:
    ```bash
    source ./.venv/bin/activate
    ```
4. install all the required libraries from the requirements.txt

    ```bash
    pip install -r /api/requirements.txt
    ```

5. Update the **db_task_model.py**
    - Ensure you change:
      * The **mysql_name** variable to the database name
      * The password within the **mysql_url** variable
    
    ![Database Setup Variables](/docs/db_setup.png)

6. Run Your API
    - Ensure your terminal is inside the api folder
    ![Changing Folder in Terminal](/docs/folder_change.png)
    - Then run
      ```bash
      fastapi dev
      ```

