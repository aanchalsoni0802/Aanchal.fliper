// src/components/AdminPanel.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import ClientUploadForm from '../components/ClientUploadForm';
import ClientList from '../components/ClientList';
import ProjectUploadForm from '../components/ProjectUploadForm';
import ProjectList from '../components/ProjectList';
import AdminContactList from '../components/AdminContactList';
import AdminSubscriberList from '../components/AdminSubscriberList';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Welcome to the Admin Panel</h2>
            <p>Select an option from the sidebar to manage clients, projects, contacts, and subscribers.</p>
          </div>
        );
      case 'addProject':
        return <ProjectUploadForm />;
      case 'projectList':
        return (
          <div className="overflow-y-auto max-h-[80vh]"> {/* Scrollable project list */}
            <ProjectList />
          </div>
        );
      case 'addClient':
        return <ClientUploadForm />;
      case 'clientList':
        return (
          <div className="overflow-y-auto max-h-[80vh]"> {/* Scrollable client list */}
            <ClientList />
          </div>
        );
      case 'contactList':
        return <AdminContactList />;
      case 'subscriberList':
        return <AdminSubscriberList />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col h-full">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'dashboard' && 'bg-blue-700'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('addProject')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'addProject' && 'bg-blue-700'}`}
          >
            Add New Project
          </button>
          <button
            onClick={() => setActiveSection('projectList')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'projectList' && 'bg-blue-700'}`}
          >
            Project List
          </button>
          <button
            onClick={() => setActiveSection('addClient')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'addClient' && 'bg-blue-700'}`}
          >
            Add New Client
          </button>
          <button
            onClick={() => setActiveSection('clientList')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'clientList' && 'bg-blue-700'}`}
          >
            Client List
          </button>
          <button
            onClick={() => setActiveSection('contactList')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'contactList' && 'bg-blue-700'}`}
          >
            Contact Submissions
          </button>
          <button
            onClick={() => setActiveSection('subscriberList')}
            className={`w-full text-left p-2 rounded hover:bg-blue-500 transition ${activeSection === 'subscriberList' && 'bg-blue-700'}`}
          >
            Subscriber List
          </button>

          <div className="mt-8">
          <Link to="/">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Home
            </button>
          </Link>
        </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white overflow-y-auto h-full">
        {renderContent()}
      </main>

      {/* Button to go back to the landing page */}
      
    </div>
  );
};

export default AdminPanel;
