"use client";

import { useEffect, useState } from "react";

export default function OfflineWatcher() {
  // Starts false on both server and client render to avoid a hydration
  // mismatch — navigator.onLine only exists in the browser, so the real
  // check happens after mount.
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    setOffline(!navigator.onLine);
    function goOffline() {
      setOffline(true);
    }
    function goOnline() {
      setOffline(false);
    }
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="glass-panel w-full max-w-[420px] rounded-3xl p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-recovery-red/10 text-recovery-red">
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-3.536-3.536a4 4 0 010-5.656m-3.535 8.485L3.515 5.636M12 12v.01" />
          </svg>
        </div>
        <h2 className="mt-4 text-[1.15rem] font-bold text-white">You&apos;re offline</h2>
        <p className="mt-2 text-[0.88rem] text-text-2">
          Your connection dropped. Check your network — this will disappear automatically once you&apos;re back online.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white via-silver-2 to-silver-3 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}
