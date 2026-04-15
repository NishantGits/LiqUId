const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <img
      src="https://media.db.com/images/public/693546c184eb8ff23ef98820/412ad358a_IMG_0934.jpeg"
      className={className}
      alt="LiqUId Logo"
      style={{ borderRadius: '6px', objectFit: 'cover' }}
    />
  );
}