// This is a standard React component for the access-check page
import Link from 'next/link';
import { ShieldAlert, ArrowLeft, LockKeyhole } from 'lucide-react';

export default function AdminAccessPage() {
  return (
    // Centered layout with a soft zinc background
    <div className="flex justify-center items-center bg-zinc-50 p-6 min-h-[80vh]">
      <div className="bg-white shadow-sm p-10 border border-zinc-200 rounded-3xl w-full max-w-md text-center">
        
        {/* 1. Visual Icon: A shield alert to show it's a security checkpoint */}
        <div className="inline-flex justify-center items-center bg-amber-50 mb-6 rounded-2xl w-16 h-16 text-amber-600">
          <ShieldAlert size={32} />
        </div>

        {/* 2. Clear Messaging: Explaining the "Why" */}
        <h1 className="mb-2 font-extrabold text-zinc-900 text-2xl tracking-tight">
          Restricted Area
        </h1>
        <p className="mb-8 text-zinc-500 text-sm leading-relaxed">
          It looks like you're trying to access the Buyload Admin Console. 
          To protect your data, these pages require verified administrator credentials.
        </p>

        {/* 3. Action Buttons: The "I am Admin" and "Back to Safety" options */}
        <div className="space-y-3">
          {/* Main Action: Sends them to the actual login page */}
          <Link 
            href="/api/auth/signin" 
            className="flex justify-center items-center gap-2 bg-black hover:bg-zinc-800 py-4 rounded-xl w-full font-bold text-white transition-all"
          >
            <LockKeyhole size={18} />
            I am an Administrator
          </Link>

          {/* Secondary Action: Returns them to the public website */}
          <Link 
            href="/" 
            className="flex justify-center items-center gap-2 bg-white hover:bg-zinc-50 py-4 border border-zinc-200 rounded-xl w-full font-bold text-zinc-600 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Public Site
          </Link>
        </div>

        {/* 4. Help Text */}
        <p className="mt-8 font-semibold text-[10px] text-zinc-400 uppercase tracking-widest">
          Secure Session Gate • Buyload v1.0
        </p>
      </div>
    </div>
  );
}