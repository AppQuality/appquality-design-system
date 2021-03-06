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
  loginText: string;
  onLogin?: () => void;
  onLogout?: () => void;
  isLoading?: boolean;
  user?: User;
}

export interface HeaderProps {
  isLoading?: boolean;
  loginText?: string;
  user?: User;
  logo?: React.ReactNode;
  logoUrl?: string;
  onLogin?: () => void;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  className?: string;
}
