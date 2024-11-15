import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function DashboardLayout() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-6 bg-slate-50">
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default DashboardLayout;