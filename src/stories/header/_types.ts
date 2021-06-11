export interface UserData {
  id: number;
  wp_user_id: number;
  role: string;
  username: string;
  name: string;
  surname: string;
  email: string;
  image: string;
  verified?: boolean;
}

export type User = undefined | UserData;
export interface UserInfoProps {
  showLogin: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  isLoading?: boolean;
  user?: User;
}

export interface HeaderProps {
  isLoading?: boolean;
  user?: User;
  logo?: React.ReactNode;
  logoUrl?: string;
  showLogin?: boolean;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  className?: string;
}
