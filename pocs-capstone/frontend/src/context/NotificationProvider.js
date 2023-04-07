import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [permissionState, setPermissionState] = useState(Notification.permission);

  return (
    <NotificationContext.Provider value={[permissionState, setPermissionState]}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
