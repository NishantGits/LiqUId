import React, { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { downloadAllComponents } from './components/utils/downloadSite';

export default function Layout({ children }) {
  useEffect(() => {
    const handleKeyDown = async (e) => {
      // Check for Cmd+S (Mac) or Ctrl+S (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault(); // Prevent default save behavior
        
        toast.loading('Preparing your download...', { id: 'download' });
        
        try {
          await downloadAllComponents();
          toast.success('LiqUId components downloaded! 🎉', { id: 'download' });
        } catch (error) {
          toast.error('Failed to download components', { id: 'download' });
          console.error('Download error:', error);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="google-site-verification" content="nBIPWUX5QXGyR3nU_2llH9Wwvo7i9o-kHHgCnRtC3rI" />
      </Helmet>
      <Toaster position="top-right" richColors />
      {children}
    </HelmetProvider>
  );
}