var Projects = require('./project')
  , Stories  = require('./story')
  , Tasks    = require('./task')
  , Sprints  = require('./sprint')
  , Errors   = require('./error')
  , Sessions = require('./session');

module.exports = exports = function(app, db) {
    
    // Static content.
    // Includes: Home Page, Login form, Welcome page.
    // Folder: /ui contains admin pages for Projects, Stories and Sprints.
    app.use(express.static('../../static'));
    
    // Login/Session paths.
    var sh = new Sessions(db);
    app.use('/api', sh.loginCheck); // Check for login in /api and /ui.
    app.use('/ui',  sh.loginCheck);
    app.post('/login',  sh.handleLogin); // Login and Logout APIs are visible.
    app.post('/logout', sh.handleLogout);
    
    // Project Administration.
    var ph = new Projects(sh, db);
    app.get('/api/projects',              ph.displayProjects); // HTML Render.
    app.get('/api/projects/find/:filter', ph.getProjects);
    app.post('/api/projects/:name/create',   ph.createProject);
    app.post('/api/projects/:name/conclude', ph.concludeProject);
    app.post('/api/projects/:name/reopen',   ph.reopenProject);
    
    // User Stories.
    var st = new Stories(sh, db);
    app.get('/api/stories',              st.displayStories); // HTML Render.
    app.get('/api/stories/:id',          st.getStory);
    app.get('/api/stories/find/:filter', st.filterStories);
    app.post('/api/stories/create/:name',       st.createStory);
    app.post('/api/stories/:id/points/:points', st.setPoints);
    app.post('/api/stories/:id/desc/:desc',     st.setDescription);
    app.post('/api/stories/:id/order/:order',   st.reorder);
    app.post('/api/stories/:id/value/:value',   st.setValue);
    app.post('/api/stories/:id/addTag/:tag',    st.addTag);
    app.post('/api/stories/:id/remTag/:tag',    st.removeTag);
    app.post('/api/stories/:id/note/:note',     st.addNote);
    app.post('/api/stories/:id/start',          st.start);
    app.post/'/stories/:id/complete',       st.markAsCompleted);
    app.post('/api/stories/:id/reopen',         st.reopen);
    
    // Tasks.
    var th = new Tasks(sh, db);
    app.get('/api/tasks/:id',                   th.getTask);
    app.get('/api/tasks/story/:story',          th.storyTasks);
    app.get('/api/tasks/story/:story/:filter',  th.filterTasks);
    app.post('/api/tasks/story/:story/:desc', th.addTask);
    app.post('/api/tasks/:id/level/:level',   th.setLevel);
    app.post('/api/tasks/:id/status/:status', th.changeStatus);
    app.post('/api/tasks/:id/addTag/:tag',    th.addTag);
    app.post('/api/tasks/:id/remTag/:tag',    th.removeTag);
    app.post('/api/tasks/:id/note/:note',     th.addNote);
    app.post('/api/tasks/:id/move/:story',    th.moveTask);
    
    // Sprints.
    var sp = new Sprints(sh, db);
    app.get('/api/sprints',         sp.displaySprints); // HTML Render.
    app.get('/api/sprints/list',    sp.getSprints);
    app.get('/api/sprints/current', sp.currentSprint);
    app.get('/api/sprints/:number', sp.getSprint);
    app.post('/api/sprints/create',       sp.createSprint);
    app.post('/api/sprints/length/:len',  sp.setLength);
    app.post('/api/sprints/start',        sp.startSprint);
    app.post('/api/sprints/add/:story',   sp.addStory);
    app.post('/api/sprints/conclude',     sp.concludeSprint);
    app.post('/api/sprints/extend/:days', sp.extendSprint);
    
    // Error Handling.
    app.use(new Errors());
};