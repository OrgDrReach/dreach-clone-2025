'use client';

import React from 'react';

const ClientSideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default ClientSideWrapper;