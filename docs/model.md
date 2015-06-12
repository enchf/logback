Logback Base Model
==================

Backlog Model consist of 4 base entities and an enumeration:

*   __Project__: Our major undertaking or initiative. It has a backlog of __Stories__ and subsequent __Sprints__.
*   __Story__: The user need, which could be broken up into __Tasks__.
*   __Task__: Specific unit of work for the __Story__. A task is in one of the __Status__ defined.
*   __Sprint__: The iteration of work. It has a length in days and a group of __Stories__. Only one can be active.
*   __Status__: A __Task__ and a __Sprint__ are in one of the following __Status__:
    *   Open
    *   Working
    *   Done
    *   Discarded

Project
-------
*   __name__: (ID,string) Project name.
*   __active__: (boolean) True if active, false otherwise.

Story
-----
*   __id__: (ID,int,consecutive) ID of the User Story.
*   __name__: (string) Short name of the Story.
*   __desc__: (string) User Story description.
*   __points__: (int) Initially empty, are the User Story points, using Fibonacci sequence.
*   __order__: (int) Numerical value for the priority order of the stories.
*   __cost__: (int,optional) Arbitrary measure of the cost of the Story.
*   __value__: (int,optional) Arbitrary measure of the value of the Story.
*   __completed__: (boolean) True if completed, false otherwise.
*   __tags__: (string array) Optional tags for the story.
*   __notes__: (string array) Optional notes for the story.
*   __project__: (string) Consistency field for the project which the story belongs.

Task
----
*   __id__: (ID,int,consecutive) ID of the Task.
*   __story__: (int) ID of the story which the task belongs.
*   __desc__: (string) Task description.
*   __level__: (int) Arbitrary complexity level of the task. Recommended 1-4 in day parts (1,1/2,1/3,1/4).
*   __status__: (string,enum) Status enumeration.
*   __tags__: (string array) Optional tags for the task.
*   __notes__: (string array) Optional notes for the task.

Sprint
------
*   __id__: (ID,int,consecutive) Consecutive number of the project iterations.
*   __start__: (date) Start date of the sprint.
*   __length__: (int) Number of days the sprint will take.
*   __stories__: (int array) Stories that will be contained on the sprint.
*   __status__: (string,enum) Status enumeration.
*   __project__: (string) Consistency field for the project which the sprint belongs.

Status
------
*   __open__: Task - it is pending to start working on it; Sprint - it is pending to start.
*   __working__: Task - it is in progress in a sprint; Sprint - it is the current active sprint.
*   __done__: Task - all the work regarding it has been completed; Sprint - it has ended.
*   __discarded__: Task - it is discarded for the story; Sprint - it has abnormally ended/not started.

