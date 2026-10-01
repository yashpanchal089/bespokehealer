import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { BookSessionModal } from './components/BookSessionModal';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';

export function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleOpenBookModal = () => {
    setIsBookModalOpen(true);
  };

  const handleCloseBookModal = () => {
    setIsBookModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F5EFE6] text-[#40383F] font-sans flex flex-col selection:bg-[#F8EBF4] selection:text-[#40383F] relative">
        {/* Bespoke Interactive Mouse Cursor */}
        <CustomCursor />

        {/* Floating Top Navigation */}
        <Navbar onBookClick={handleOpenBookModal} />

        {/* Persistent Floating Contact Buttons: Call Left, WhatsApp Right */}
        <FloatingActions />

        {/* Page Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onBookClick={handleOpenBookModal} />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Booking Modal */}
        <BookSessionModal
          isOpen={isBookModalOpen}
          onClose={handleCloseBookModal}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
