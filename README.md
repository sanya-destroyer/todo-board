# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Server

#### Create .env file at root directory

```dotenv
#Port for app
PORT
#Mongobd database username
DB_USER
#Mongobd database password
DB_PASSWORD
#Mongobd database name
DB_NAME

#Secret key for jwt token
SECRET_KEY

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```


## About

A simple todo-board for task management. This app allows you to log in with a jwt-token and create task boards. Boards and tasks can be sorted and filtered by name. It is also possible to search for a board on the page with boards by the name of the task inside.

![Welcome Screen](https://i.imgur.com/YgglFn7.png)

Authorization contains both login and register. Form contains server response validation.

![Login Screen](https://i.imgur.com/hb4UksF.png)

Board Page contains input for filter and select for field that  wants to be filtered with.
Every board contains information on how many tasks it has, and count on each list section. Also, boards name can be changes, as board can be completely deleted.

![Boards Page](https://i.imgur.com/ibpfVIL.png)

Board can be created by clicking on add board button, after modal is opened. New board requires name and description, every parameter can be changed later.

![Add Board](https://i.imgur.com/VvXO0NR.png)

After entering any board, user can see three lists, where tasks could be stored. Each list has add task button, so after pressing it, modal window appears, and user can create new task for chosen list. 
Every task's name can be changed, also each individual task can be dragged and dropped to another list.

![Board Page](https://i.imgur.com/c63UxOt.png)

Tasks can be filtered through entering keywords into input, as well tasks can be sorted by ascending and descending order, depending on sort type.
Last feature for tasks, is ability to manage comments for individual task.

![Tasks Comments](https://i.imgur.com/XcwD4ZW.png)



