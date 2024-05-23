# REST сервис с использованием Express.js

### Получить всех пользователей
- **Тип запроса:** GET
- **URL:** `/`
- **Параметры пути:** Нет
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": [ ... ] // список всех пользователей
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": [
      {
        "id": 1,
        "name": "Artur",
        "email": "artur@mail.ru",
        "age": 30
      },
      ...
    ]
  }
  ```



### Получить пользователя по ID

- **Тип запроса:** GET
- **URL:** `/:id`
- **Параметры пути:**
  - `id` (Number) — ID пользователя
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": { ... } // объект пользователя
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": {
      "id": 1,
      "name": "Artur",
      "email": "artur@mail.ru",
      "age": 30
    }
  }
  ```

### Добавить нового пользователя 

- **Тип запроса:** POST
- **URL:** `/`
- **Параметры пути:** Нет
- **Тело запроса:**
  ```json
  {
    "name": "Artur",
    "email": "artur@mail.ru",
    "age": 30
  }
  ```
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": "Пользователь с id {новый id} добавлен!"
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": "Пользователь с id 2 добавлен!"
  }
  ```

### Обновить информацию о пользователе

- **Тип запроса:** PUT
- **URL:** `/:id`
- **Параметры пути:**
  - `id` (Number) — ID пользователя
- **Тело запроса:**
  ```json
  {
    "name": "Artur",
    "email": "artur@mail.ru",
    "age": 30
  }
  ```
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": "Информация о пользователя обновлена!"
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": "Информация о пользователя обновлена!"
  }
  ```

### Удалить пользователя

- **Тип запроса:** DELETE
- **URL:** `/:id`
- **Параметры пути:**
  - `id` (Number) — ID пользователя
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": "Пользователь удален!"
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": "Пользователь удален!"
  }
  ```

### Получить список пользователей, которые старше определенного возраста

- **Тип запроса:** GET
- **URL:** `/age/:age`
- **Параметры пути:**
  - `age` (Number) — возраст для фильтрации
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": [ ... ] // список пользователей старше указанного возраста
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": [
      {
        "id": 2,
        "name": "Artur",
        "email": "artur@mail.ru",
        "age": 35
      },
      ...
    ]
  }
  ```

### Получить список пользователей с определнным доменом эл. почты

- **Тип запроса:** GET
- **URL:** `/domain/:domain`
- **Параметры пути:**
  - `domain` (String) — домен электронной почты для фильтрации
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": [ ... ] // список пользователей с указанным доменом электронной почты
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": [
      {
        "id": 1,
        "name": "Artur",
        "email": "artur@mail.ru",
        "age": 30
      },
      ...
    ]
  }
  ```
  
  ### Получить отсортированный список пользователей по имени (в алфавитном порядке)

- **Тип запроса:** GET
- **URL:** `/sorted`
- **Параметры пути:** Нет
- **Тело запроса:** Нет
- **Тело ответа:**
  ```json
  {
    "status": 200,
    "message": [ ... ] // список пользователей, отсортированный по имени
  }
  ```

- **Пример ответа:**
  ```json
  {
    "status": 200,
    "message": [
      {
        "id": 1,
        "name": "Artur",
        "email": "artur@mail.ru",
        "age": 25
      },
      ...
    ]
  }
  ```