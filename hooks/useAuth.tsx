import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    } else {
      setUser(null);
    }
  }, []);

  return { user };
};

export default useAuth;





