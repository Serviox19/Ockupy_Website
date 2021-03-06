import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

//All Layouts and Pages
import { App } from '../ui/layouts/App.jsx';
import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About';
import Projects from '../ui/pages/Projects';
import Contact from '../ui/pages/Contact';
import ProjectDetail from '../ui/pages/ProjectDetail';
import ProjectData from '/public/json/projects.json';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(App, {
      content: <About />
    });
  }
});

FlowRouter.route('/projects/', {
  action() {
    mount(App, {
      content: <Projects
        data={ProjectData}
      />
    });
  }
});

FlowRouter.route('/projects/:id', {
  action(params) {
    mount(App, {
      content: <ProjectDetail
        projectId={params.id}
        data={ProjectData}
      />
    });
  }
});

FlowRouter.route('/contact', {
  action() {
    mount(App, {
      content: <Contact />
    });
  }
});
