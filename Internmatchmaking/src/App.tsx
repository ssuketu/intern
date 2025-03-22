// App.tsx
import React, { useState, useEffect } from 'react';
import { InternshipMatchingPlatform } from './components/InternshipMatchingPlatform';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <InternshipMatchingPlatform />
        </div>
    );
};

export default App;