API
====
(* indicates an admin task)

Project
-------
*   create(name) - Creates a project. *
*   conclude(name) - Closes or suspends a project. *
*   reopen(name) - Reopens a suspended project. *

Story
-----
*   create(name):ID - Creates a story, returns the numerical ID.
    * initial order: last.
    * completed: false.
    * all the rest fields are set to null.
*   setPoints(id,points) - Set the user story points.
*   setDesc(id,desc) - Set the user story description.
*   get(id):Story - Returns the whole story object.
*   setOrder(id,order) - Changes the order of the story and set new order on affected stories.
*   setCost(id,cost) - Set the arbitrary cost for the story.
*   setValue(id,value) - Set the arbitrary value for the story.
*   addTag(id,tag) - Adds a tag.
*   removeTag(id,tag) - Removes (if exists) a tag.
*   addNote(id,note) - Adds a note.
*   complete(id) - Set the story as completed.
*   reopen(id) - Re-opens (if possible) the story.
*   getTasks(id):[Task] - Retrieves user story tasks.
*   addTask(id,desc):Task - Adds a task.
*   list(:filter):[Story] - Filters the list of stories sorted by order.

Task
----
*   setLevel(id,level) - Sets the arbitrary level of the task.
*   changeStatus(id,status) - Moves the task to a certain status.
*   addTag(id,tag) - Adds a tag.
*   removeTag(id,tag) - Removes a tag.
*   addNote(id,note) - Adds a note.
*   move(id,story) - Moves the task to another story.

Sprint
------
*   create(length:default) - Creates a new sprint.
    * Only if there is no pending/active sprints.
    * The default length is setup at the config phase of the project.
*   setLength(length) - Assigns a length to a pending sprint if there is one.
    * Only applicable if there is a pending sprint.
    * For extend/shorten an active sprint, use _conclude_ and _extend_ methods.
*   start() - Starts a pending sprint if any.
    * Only applicable if there is a pending sprint.
*   addStory(id) - Adds a user story to the sprint.
    * Operation available only when there is a pending sprint.
*   conclude() - Conclude the current sprint if any.
    * This operation has no rollback: a concluded sprint cannot be reopened, a new one should be created.
*   extend(days) - Extends the current sprint (if any) the specified number of days.
    * To shorten the sprint, pass a negative argument as parameter.
    * No action will be taken if the resulting length of the sprint is less than 1 day.
    * Validates against server date.

